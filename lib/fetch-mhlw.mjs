/**
 * 厚生労働省「介護サービス情報公表システム」のオープンデータ取得モジュール。
 *
 * データソース：
 *   https://www.kaigokensaku.mhlw.go.jp/
 *
 * このモジュールは現状「設定可能なデータソース」として実装し、
 * 実データソースのURL/フォーマットが確定したら fetchFromMhlwSource() の中身を実装する。
 *
 * 暫定実装：
 *   - MHLW_DATA_URL_TEMPLATE 環境変数で上書き可能
 *   - 取得失敗時は generateFallbackFacilities() でテンプレート的な施設データを返す
 *     （※ 公開時は noindex のままで運用、データ未取得である旨をページにも明示）
 */

import { rateLimitedFetch } from './ratelimiter.mjs'

const MHLW_DATA_URL_TEMPLATE =
  process.env.MHLW_DATA_URL_TEMPLATE ||
  'https://www.kaigokensaku.mhlw.go.jp/api/{prefecture_code}/{municipality_code}.json'

/**
 * 1自治体分の施設データを取得して正規化済み配列を返す。
 *
 * @param {object} municipality - data/municipalities.json の1エントリ
 * @returns {Promise<{ source: string, fetchedAt: string, items: Facility[], stub: boolean }>}
 */
export async function fetchMunicipalityFacilities(municipality) {
  const fetchedAt = new Date().toISOString()

  try {
    const url = MHLW_DATA_URL_TEMPLATE.replace(
      '{prefecture_code}',
      municipality.code.substring(0, 2),
    ).replace('{municipality_code}', municipality.code)

    console.log(`[fetch-mhlw] GET ${url}`)
    const res = await rateLimitedFetch(url)

    if (!res.ok) {
      console.warn(
        `[fetch-mhlw] non-OK status ${res.status} for ${municipality.name}, using fallback`,
      )
      return {
        source: 'mhlw',
        fetchedAt,
        items: generateFallbackFacilities(municipality),
        stub: true,
      }
    }

    const json = await res.json()
    const items = normalizeMhlwResponse(json, municipality)
    return { source: 'mhlw', fetchedAt, items, stub: false }
  } catch (err) {
    console.warn(
      `[fetch-mhlw] error for ${municipality.name}: ${err.message}, using fallback`,
    )
    return {
      source: 'mhlw',
      fetchedAt,
      items: generateFallbackFacilities(municipality),
      stub: true,
    }
  }
}

/**
 * 厚労省APIレスポンスを Facility 形式に正規化する。
 * 実データの構造が確定したら、このマッピングを実装する。
 */
function normalizeMhlwResponse(json, municipality) {
  // 期待される形式：{ facilities: [{ name, address, capacity, operator, services, ... }] }
  // 実データ確定までは defensive にデフォルト値で埋める
  const rawItems = Array.isArray(json?.facilities) ? json.facilities : []
  return rawItems.map((raw, idx) => ({
    rank: idx + 1,
    name: raw.name || `（施設名未取得 ${idx + 1}）`,
    type: mapServiceType(raw.service_type) || '介護施設',
    address: raw.address || `${municipality.prefecture}${municipality.name}`,
    price: '要問い合わせ',
    features: buildFeatures(raw),
    recommend: `${municipality.name}内の${mapServiceType(raw.service_type) || '介護施設'}`,
    badge: '',
    badgeColor: '#9E9E9E',
    operator: raw.operator || '',
    rating: '', // 厚労省データには評価情報がない
    url: '', // 厚労省側の施設URL（任意）
    capacity: raw.capacity ? Number(raw.capacity) : undefined,
    openedAt: raw.opened_at || '',
  }))
}

/**
 * 厚労省のサービス種別コードを表示名にマッピング。
 */
function mapServiceType(code) {
  const map = {
    '11': '訪問介護',
    '12': '訪問入浴介護',
    '13': '訪問看護',
    '14': '訪問リハビリテーション',
    '15': '居宅療養管理指導',
    '16': '通所介護',
    '17': '通所リハビリテーション',
    '21': '短期入所生活介護',
    '22': '短期入所療養介護',
    '31': '特定施設入居者生活介護（有料老人ホーム）',
    '32': '福祉用具貸与',
    '51': '介護老人福祉施設（特別養護老人ホーム）',
    '52': '介護老人保健施設',
    '53': '介護療養型医療施設',
    '54': '介護医療院',
    '71': '認知症対応型共同生活介護（グループホーム）',
    '72': 'サービス付き高齢者向け住宅',
    '73': '住宅型有料老人ホーム',
  }
  return code ? map[String(code)] || '介護施設' : ''
}

function buildFeatures(raw) {
  const features = []
  if (raw.capacity) features.push(`定員${raw.capacity}名`)
  if (raw.opened_at) features.push(`${raw.opened_at.substring(0, 4)}年開設`)
  if (raw.has_short_stay) features.push('短期入所対応')
  if (raw.has_visit_care) features.push('訪問介護対応')
  return features.length > 0 ? features : ['詳細は公式情報をご確認ください']
}

/**
 * データ取得失敗時のフォールバック。
 * 「データ準備中」のテンプレ施設を1件返す。
 * このとき stub: true となり、ページは noindex のまま据え置かれる。
 */
function generateFallbackFacilities(municipality) {
  return [
    {
      rank: 1,
      name: `${municipality.name}の介護施設情報（データ準備中）`,
      type: '介護施設',
      address: `${municipality.prefecture}${municipality.name}`,
      price: '要問い合わせ',
      features: ['データ取得中', '出典：厚生労働省「介護サービス情報公表システム」'],
      recommend: `${municipality.name}内の介護施設情報を準備中です`,
      badge: '',
      badgeColor: '#9E9E9E',
      operator: '',
      rating: '',
      url: '',
    },
  ]
}
