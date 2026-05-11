#!/usr/bin/env node
/**
 * 自動生成データの整合性監査。
 *
 * 検証項目：
 *   1. queue.json + done.json + blocked.json のスラッグが重複していないか
 *   2. cityData.mhlw.generated.ts の slug が done.json に含まれているか
 *   3. blocked.json の slug が cityData.mhlw.generated.ts に残っていないか（あれば警告）
 *   4. queue.json の各エントリが必須フィールドを持つか
 *
 * 使い方：
 *   node scripts/audit.mjs
 */

import { readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { readMhlwData } from '../lib/render-city.mjs'

async function readJson(path, fallback) {
  if (!existsSync(path)) return fallback
  return JSON.parse(await readFile(path, 'utf-8'))
}

async function main() {
  const queue = await readJson('data/queue.json', [])
  const done = await readJson('data/done.json', [])
  const blocked = await readJson('data/blocked.json', [])
  const mhlwData = await readMhlwData()

  const queueSlugs = new Set(queue.map((m) => m.slug))
  const doneSlugs = new Set(done.map((d) => d.slug || d))
  const blockedSlugs = new Set(blocked.map((b) => b.slug || b))
  const mhlwSlugs = new Set(Object.keys(mhlwData))

  const issues = []

  // 1. queue x done 重複チェック
  for (const slug of queueSlugs) {
    if (doneSlugs.has(slug)) issues.push(`queue ↔ done duplicate: ${slug}`)
  }
  // 2. queue x blocked 重複
  for (const slug of queueSlugs) {
    if (blockedSlugs.has(slug)) issues.push(`queue ↔ blocked duplicate: ${slug}`)
  }
  // 3. done x blocked 重複
  for (const slug of doneSlugs) {
    if (blockedSlugs.has(slug)) issues.push(`done ↔ blocked duplicate: ${slug}`)
  }
  // 4. mhlwData ↔ done の整合
  for (const slug of mhlwSlugs) {
    if (!doneSlugs.has(slug)) issues.push(`in mhlwData but not in done: ${slug}`)
  }
  for (const slug of doneSlugs) {
    if (!mhlwSlugs.has(slug) && !blockedSlugs.has(slug)) {
      issues.push(`in done but not in mhlwData (and not blocked): ${slug}`)
    }
  }
  // 5. blocked ↔ mhlwData
  for (const slug of blockedSlugs) {
    if (mhlwSlugs.has(slug)) issues.push(`blocked but still in mhlwData: ${slug}`)
  }
  // 6. queue 必須フィールド
  for (const m of queue) {
    if (!m.slug) issues.push(`queue entry missing slug: ${JSON.stringify(m)}`)
    if (!m.code) issues.push(`queue entry missing code: ${m.slug}`)
    if (!m.name) issues.push(`queue entry missing name: ${m.slug}`)
  }

  console.log(`[audit] queue: ${queueSlugs.size}`)
  console.log(`[audit] done: ${doneSlugs.size}`)
  console.log(`[audit] blocked: ${blockedSlugs.size}`)
  console.log(`[audit] mhlwData: ${mhlwSlugs.size}`)
  console.log(`[audit] issues found: ${issues.length}`)

  if (issues.length > 0) {
    for (const issue of issues) console.log(`  - ${issue}`)
    process.exit(1)
  } else {
    console.log('[audit] all checks passed ✅')
  }
}

main().catch((err) => {
  console.error('[audit] FATAL:', err)
  process.exit(1)
})
