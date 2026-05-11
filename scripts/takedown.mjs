#!/usr/bin/env node
/**
 * 自治体ページの取下げ（削除）スクリプト。
 *
 * 動作：
 *   1. lib/cityData.mhlw.generated.ts から該当 slug のエントリを削除
 *   2. data/blocked.json に追加（再生成防止）
 *   3. data/done.json から削除
 *   4. data/queue.json からも削除
 *   5. data/takedown-log.json に記録
 *
 * 使い方：
 *   node scripts/takedown.mjs --slug hirakata
 *   node scripts/takedown.mjs --slug hirakata --reason "facility request"
 */

import { readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { readMhlwData, writeMhlwData } from '../lib/render-city.mjs'

const QUEUE_FILE = 'data/queue.json'
const DONE_FILE = 'data/done.json'
const BLOCKED_FILE = 'data/blocked.json'
const LOG_FILE = 'data/takedown-log.json'

function parseArgs(argv) {
  const args = { slug: null, reason: 'user request' }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--slug') args.slug = argv[++i]
    else if (argv[i] === '--reason') args.reason = argv[++i]
  }
  return args
}

async function readJson(path, fallback) {
  if (!existsSync(path)) return fallback
  const text = await readFile(path, 'utf-8')
  try {
    return JSON.parse(text)
  } catch {
    return fallback
  }
}

async function writeJson(path, data) {
  await writeFile(path, JSON.stringify(data, null, 2) + '\n', 'utf-8')
}

async function main() {
  const { slug, reason } = parseArgs(process.argv.slice(2))
  if (!slug) {
    console.error('Usage: node scripts/takedown.mjs --slug <slug> [--reason "..."]')
    process.exit(1)
  }

  console.log(`[takedown] target: ${slug}`)

  // 1. cityData.mhlw.generated.ts から削除
  const mhlwData = await readMhlwData()
  const wasInMhlw = slug in mhlwData
  if (wasInMhlw) {
    delete mhlwData[slug]
    await writeMhlwData(mhlwData)
    console.log(`[takedown] removed from cityData.mhlw.generated.ts`)
  } else {
    console.log(`[takedown] not in cityData.mhlw.generated.ts (already absent)`)
  }

  // 2. queue から削除
  const queue = await readJson(QUEUE_FILE, [])
  const newQueue = queue.filter((m) => m.slug !== slug)
  if (newQueue.length !== queue.length) {
    await writeJson(QUEUE_FILE, newQueue)
    console.log(`[takedown] removed from queue.json`)
  }

  // 3. done から削除
  const done = await readJson(DONE_FILE, [])
  const newDone = done.filter((d) => (d.slug || d) !== slug)
  if (newDone.length !== done.length) {
    await writeJson(DONE_FILE, newDone)
    console.log(`[takedown] removed from done.json`)
  }

  // 4. blocked に追加
  const blocked = await readJson(BLOCKED_FILE, [])
  if (!blocked.some((b) => (b.slug || b) === slug)) {
    blocked.push({
      slug,
      reason,
      blockedAt: new Date().toISOString(),
    })
    await writeJson(BLOCKED_FILE, blocked)
    console.log(`[takedown] added to blocked.json`)
  } else {
    console.log(`[takedown] already in blocked.json`)
  }

  // 5. ログに記録
  const log = await readJson(LOG_FILE, [])
  log.push({
    slug,
    action: 'takedown',
    reason,
    wasInMhlw,
    timestamp: new Date().toISOString(),
  })
  await writeJson(LOG_FILE, log)
  console.log(`[takedown] logged to takedown-log.json`)

  console.log(`[takedown] DONE: ${slug}`)
  console.log(`  Next: commit & push for Cloudflare Pages to rebuild without this URL`)
  console.log(`  Optional: submit URL removal request via Search Console`)
}

main().catch((err) => {
  console.error('[takedown] FATAL:', err)
  process.exit(1)
})
