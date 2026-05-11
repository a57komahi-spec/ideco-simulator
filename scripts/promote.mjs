#!/usr/bin/env node
/**
 * 公開後7日経過した自治体ページの noindex を解除する。
 *
 * 動作：
 *   - lib/cityData.mhlw.generated.ts を走査
 *   - publishAt が現在より過去のエントリは noindex を外す（実際は page.tsx 側で判定）
 *   - このスクリプト自体は「過去エントリ数」をログするだけ
 *     （page.tsx の generateMetadata が publishAt を見て自動判定するため、本体は不要）
 *
 * 主な役割は監査・通知。日次実行で「promote 対象」を Slack 通知する用途。
 *
 * 使い方：
 *   node scripts/promote.mjs
 */

import { readMhlwData } from '../lib/render-city.mjs'

async function main() {
  const data = await readMhlwData()
  const now = new Date()
  const promoted = []
  const stillNoindex = []

  for (const [slug, entry] of Object.entries(data)) {
    const publishAt = entry.publishAt ? new Date(entry.publishAt) : null
    if (entry.stub) {
      stillNoindex.push({ slug, reason: 'stub data', publishAt: entry.publishAt })
      continue
    }
    if (publishAt && publishAt <= now) {
      promoted.push({ slug, publishAt: entry.publishAt })
    } else {
      stillNoindex.push({ slug, reason: 'within 7-day window', publishAt: entry.publishAt })
    }
  }

  console.log(`[promote] total entries: ${Object.keys(data).length}`)
  console.log(`[promote] index,follow (promoted): ${promoted.length}`)
  console.log(`[promote] noindex (still in window or stub): ${stillNoindex.length}`)

  if (promoted.length > 0) {
    console.log('[promote] entries now indexable:')
    for (const p of promoted.slice(0, 10)) {
      console.log(`  - ${p.slug} (publishAt: ${p.publishAt})`)
    }
  }

  if (stillNoindex.length > 0) {
    console.log('[promote] entries still noindex:')
    for (const s of stillNoindex.slice(0, 10)) {
      console.log(`  - ${s.slug} (${s.reason}, publishAt: ${s.publishAt})`)
    }
  }
}

main().catch((err) => {
  console.error('[promote] FATAL:', err)
  process.exit(1)
})
