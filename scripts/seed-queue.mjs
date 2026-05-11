#!/usr/bin/env node
/**
 * municipalities.json からキューを生成する。
 *
 * フィルタ条件：
 *   1. blocked.json に含まれる自治体は除外
 *   2. done.json に含まれる自治体は除外
 *   3. 既存の lib/cityData.generated.ts に含まれる自治体は除外（重複防止）
 *   4. priority 降順でソート
 *
 * 使い方：
 *   node scripts/seed-queue.mjs
 */

import { readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'

const MUNICIPALITIES_FILE = 'data/municipalities.json'
const QUEUE_FILE = 'data/queue.json'
const DONE_FILE = 'data/done.json'
const BLOCKED_FILE = 'data/blocked.json'
const EXISTING_GENERATED = 'lib/cityData.generated.ts'

async function readJson(path, fallback) {
  if (!existsSync(path)) return fallback
  const text = await readFile(path, 'utf-8')
  try {
    return JSON.parse(text)
  } catch (err) {
    console.warn(`[seed-queue] failed to parse ${path}: ${err.message}`)
    return fallback
  }
}

async function getExistingSlugsFromGenerated() {
  if (!existsSync(EXISTING_GENERATED)) return new Set()
  const text = await readFile(EXISTING_GENERATED, 'utf-8')
  // generatedCityData の slug キーを正規表現で抽出
  const matches = text.matchAll(/^\s+"([a-z][a-z0-9-]*)":\s*\{$/gm)
  const slugs = new Set()
  for (const m of matches) slugs.add(m[1])
  return slugs
}

async function main() {
  const all = await readJson(MUNICIPALITIES_FILE, [])
  const done = await readJson(DONE_FILE, [])
  const blocked = await readJson(BLOCKED_FILE, [])
  const existingSlugs = await getExistingSlugsFromGenerated()

  const doneSlugs = new Set(done.map((d) => d.slug || d))
  const blockedSlugs = new Set(blocked.map((b) => b.slug || b))

  const queue = all
    .filter((m) => !doneSlugs.has(m.slug))
    .filter((m) => !blockedSlugs.has(m.slug))
    .filter((m) => !existingSlugs.has(m.slug))
    .sort((a, b) => (b.priority || 0) - (a.priority || 0))
    .map((m) => ({ ...m, retry_count: 0 }))

  await writeFile(QUEUE_FILE, JSON.stringify(queue, null, 2) + '\n', 'utf-8')

  console.log(`[seed-queue] municipalities.json: ${all.length}`)
  console.log(`[seed-queue] excluded (existing in generated): ${existingSlugs.size}`)
  console.log(`[seed-queue] excluded (done): ${doneSlugs.size}`)
  console.log(`[seed-queue] excluded (blocked): ${blockedSlugs.size}`)
  console.log(`[seed-queue] queue size: ${queue.length}`)
  console.log(`[seed-queue] top 5 in queue:`)
  for (const m of queue.slice(0, 5)) {
    console.log(`  - ${m.slug} (${m.name}, priority ${m.priority})`)
  }
}

main().catch((err) => {
  console.error('[seed-queue] FATAL:', err)
  process.exit(1)
})
