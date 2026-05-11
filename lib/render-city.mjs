/**
 * MHLW施設データ → CityData形式への変換
 *
 * 既存の lib/cityData.generated.ts と同じインターフェース（Facility/CityData）に
 * 揃えて、page.tsx 側で透過的にマージできるようにする。
 *
 * 違い：
 *   - source: 'mhlw' を付与
 *   - publishAt: 公開日（noindex から index への切替日）
 *   - generatedAt: 生成日時
 */

/**
 * @param {object} municipality - data/municipalities.json の1エントリ
 * @param {object} fetchResult - fetch-mhlw.mjs の戻り値
 * @returns {{ slug: string, entry: object }}
 */
export function buildCityEntry(municipality, fetchResult) {
  const generatedAt = new Date()
  const publishAt = new Date(generatedAt.getTime() + 7 * 24 * 60 * 60 * 1000) // 7日後

  const entry = {
    name: municipality.name,
    prefecture: municipality.prefecture,
    description: `${municipality.name}（${municipality.prefecture}）の介護施設一覧。厚生労働省の公開データに基づく${fetchResult.items.length}施設の情報をまとめています。`,
    facilities: fetchResult.items,
    source: 'mhlw',
    generatedAt: generatedAt.toISOString(),
    publishAt: publishAt.toISOString(),
    stub: fetchResult.stub === true,
  }

  return { slug: municipality.slug, entry }
}

/**
 * 既存の cityData.mhlw.generated.ts ファイルから現在のデータを読み込む。
 * ファイルがない場合は空オブジェクトを返す。
 */
import { readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'

const MHLW_DATA_FILE = 'lib/cityData.mhlw.generated.ts'

const FILE_HEADER = `// このファイルは scripts/generate-next.mjs が自動生成します。直接編集しないでください。
// データソース：厚生労働省「介護サービス情報公表システム」
// 出典：https://www.kaigokensaku.mhlw.go.jp/

import type { CityData } from './cityData.generated'

export interface MhlwCityMeta {
  source: 'mhlw'
  generatedAt: string
  publishAt: string
  stub: boolean
}

export type MhlwCityData = CityData & MhlwCityMeta

`

export async function readMhlwData() {
  if (!existsSync(MHLW_DATA_FILE)) {
    return {}
  }
  const text = await readFile(MHLW_DATA_FILE, 'utf-8')
  // シンプルに正規表現で JSON 部分を抽出
  const match = text.match(/export const mhlwCityData: Record<string, MhlwCityData> = (\{[\s\S]*?\n\})/)
  if (!match) return {}
  try {
    // Trailing comma の許容のため、JSON.parse の前に簡易クリーニング
    const jsonText = match[1].replace(/,(\s*[}\]])/g, '$1')
    return JSON.parse(jsonText)
  } catch (err) {
    console.warn(`[render-city] failed to parse existing MHLW data: ${err.message}`)
    return {}
  }
}

export async function writeMhlwData(data) {
  const sortedKeys = Object.keys(data).sort()
  const sorted = {}
  for (const key of sortedKeys) sorted[key] = data[key]

  const body = JSON.stringify(sorted, null, 2)
  const out = `${FILE_HEADER}export const mhlwCityData: Record<string, MhlwCityData> = ${body}\n`
  await writeFile(MHLW_DATA_FILE, out, 'utf-8')
  console.log(`[render-city] wrote ${MHLW_DATA_FILE} (${sortedKeys.length} entries)`)
}
