#!/usr/bin/env node
/**
 * キューの先頭1自治体を取り出し、厚労省データで施設情報を取得して
 * lib/cityData.mhlw.generated.ts に追加する。
 *
 * 流れ：
 *   1. queue.json の先頭を取り出し
 *   2. fetch-mhlw.mjs で施設データ取得
 *   3. render-city.mjs で CityData 形式に変換
 *   4. lib/cityData.mhlw.generated.ts に書き込み
 *   5. queue.json から削除、done.json に追加
 *   6. 失敗時は queue 末尾に戻す（retry_count++、3回失敗で blocked.json へ）
 *
 * 使い方：
 *   node scripts/generate-next.mjs
 */

import { readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { fetchMunicipalityFacilities } from '../lib/fetch-mhlw.mjs'
import { buildCityEntry, readMhlwData, writeMhlwData } from '../lib/render-city.mjs'

const QUEUE_FILE = 'data/queue.json'
const DONE_FILE = 'data/done.json'
const BLOCKED_FILE = 'data/blocked.json'

const MAX_RETRIES = 3

async function readJson(path, fallback) {
  if (!existsSync(path)) return fallback
  const text = await readFile(path, 'utf-8')
  try {
    return JSON.parse(text)
  } catch (err) {
    console.warn(`[generate-next] failed to parse ${path}: ${err.message}`)
    return fallback
  }
}

async function writeJson(path, data) {
  await writeFile(path, JSON.stringify(data, null, 2) + '\n', 'utf-8')
}

async function main() {
  const queue = await readJson(QUEUE_FILE, [])
  if (queue.length === 0) {
    console.log('[generate-next] queue is empty. nothing to do.')
    return
  }

  const target = queue[0]
  console.log(`[generate-next] target: ${target.slug} (${target.name})`)

  let success = false
  let errMsg = ''
  try {
    // 1. データ取得
    const fetchResult = await fetchMunicipalityFacilities(target)

    if (fetchResult.stub) {
      console.warn(
        `[generate-next] fetch returned stub data for ${target.slug}. Page will remain noindex.`,
      )
    }

    // 2. CityData 形式に変換
    const { slug, entry } = buildCityEntry(target, fetchResult)

    // 3. 既存の MHLW データに追加・上書き
    const existing = await readMhlwData()
    existing[slug] = entry
    await writeMhlwData(existing)

    success = true
  } catch (err) {
    console.error(`[generate-next] error: ${err.message}`)
    errMsg = err.message
  }

  // 4. queue の更新
  const newQueue = queue.slice(1)
  if (success) {
    const done = await readJson(DONE_FILE, [])
    done.push({
      slug: target.slug,
      name: target.name,
      generatedAt: new Date().toISOString(),
    })
    await writeJson(DONE_FILE, done)
    await writeJson(QUEUE_FILE, newQueue)
    console.log(`[generate-next] success: ${target.slug}`)
  } else {
    target.retry_count = (target.retry_count || 0) + 1
    target.last_error = errMsg
    if (target.retry_count >= MAX_RETRIES) {
      const blocked = await readJson(BLOCKED_FILE, [])
      blocked.push({
        slug: target.slug,
        name: target.name,
        reason: `max retries: ${errMsg}`,
        blockedAt: new Date().toISOString(),
      })
      await writeJson(BLOCKED_FILE, blocked)
      await writeJson(QUEUE_FILE, newQueue)
      console.warn(`[generate-next] moved to blocked after ${MAX_RETRIES} retries: ${target.slug}`)
    } else {
      newQueue.push(target)
      await writeJson(QUEUE_FILE, newQueue)
      console.warn(`[generate-next] failed, requeued (retry ${target.retry_count}): ${target.slug}`)
    }
    // 失敗で終了（GitHub Actions に通知させる）
    process.exit(1)
  }
}

main().catch((err) => {
  console.error('[generate-next] FATAL:', err)
  process.exit(1)
})
