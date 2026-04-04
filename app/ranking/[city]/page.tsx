import type { Metadata } from 'next'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import { generatedCityData, type CityData, type Facility } from '@/lib/cityData.generated'
import { AFFILIATE_ENABLED } from '@/lib/featureFlags'

// =============================
// 手動追加データ（generate_city_data.py が未対応の市はここに追記）
// =============================
const manualCityData: Record<string, CityData> = {}

// 生成データと手動データをマージ（手動優先）
const cityData: Record<string, CityData> = {
  ...generatedCityData,
  ...manualCityData,
}

const defaultCityData = (citySlug: string): CityData => ({
  name: decodeURIComponent(citySlug) + '市',
  prefecture: '',
  description: `${decodeURIComponent(citySlug)}市内の老人ホーム・介護施設をランキング形式で紹介します。`,
  facilities: [
    {
      rank: 1,
      name: '施設情報準備中',
      type: '介護付き有料老人ホーム',
      address: `${decodeURIComponent(citySlug)}市内`,
      price: '要問い合わせ',
      features: ['24時間介護スタッフ常駐', '食事サービスあり'],
      recommend: '介護スタッフが充実した環境で過ごしたい方におすすめ',
      badge: '編集部イチオシ',
      badgeColor: '#F57C00',
      operator: '',
      rating: '',
      url: 'https://www.minnanokaigo.com/',
    },
  ],
})

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }))
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const data = cityData[params.city] ?? defaultCityData(params.city)
  const title = `${data.name}の老人ホームおすすめランキングTOP10【2026年最新】`
  const desc = `${data.name}の老人ホーム・介護施設おすすめランキングTOP10。みんなの介護の評価・費用・特徴を比較して最適な施設を見つけましょう。`
  return {
    title,
    description: desc,
    openGraph: {
      title,
      description: desc,
      siteName: 'やさしい老人ホームガイド',
      locale: 'ja_JP',
      type: 'website',
    },
  }
}

// 施設名とキャッチコピーを分離する
function parseFacilityName(rawName: string): { name: string; tagline: string | null } {
  const match = rawName.match(/^(.+?)(?=[「『]|\d+年|\d+拠点|全国|関東・近畿)/)
  if (match && match[1].length < rawName.length) {
    return { name: match[1].trim(), tagline: rawName.slice(match[1].length).trim() }
  }
  return { name: rawName, tagline: null }
}

// ランク装飾
const RANK_MEDALS = ['🥇', '🥈', '🥉']
const getRankLabel = (rank: number) => RANK_MEDALS[rank - 1] ?? `${rank}位`

// カードのボーダー・背景スタイル
function cardStyle(rank: number) {
  if (rank === 1) return { border: '2px solid #F57C00', boxShadow: '0 4px 20px rgba(245,124,0,0.15)' }
  if (rank === 2) return { border: '2px solid #9E9E9E', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }
  if (rank === 3) return { border: '2px solid #CD7F32', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }
  return { border: '1px solid #e5e7eb', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }
}

function headerBg(rank: number) {
  if (rank === 1) return 'linear-gradient(90deg, #FFF3E0, #fff)'
  if (rank === 2) return 'linear-gradient(90deg, #F5F5F5, #fff)'
  if (rank === 3) return 'linear-gradient(90deg, #FBF0E8, #fff)'
  return '#f9fafb'
}

export default function CityRankingPage({ params }: { params: { city: string } }) {
  const data = cityData[params.city] ?? defaultCityData(params.city)
  const top3 = data.facilities.slice(0, 3)
  const rest = data.facilities.slice(3)

  const summaryItems = [
    `${data.name}の老人ホームを<mark class="highlight">評価・費用・特徴</mark>で厳選しランキング化`,
    `月額費用の相場は<mark class="highlight">15〜35万円</mark>（施設タイプにより異なります）`,
    `<mark class="highlight">要介護度と予算</mark>を確認してから施設を選びましょう`,
    `<mark class="highlight">無料の相談窓口</mark>を使えば最適な施設をすぐに見つけられます`,
  ]

  return (
    <>
      <Breadcrumb items={[{ label: `${data.name}のおすすめランキング` }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        {data.name}の老人ホーム<br className="md:hidden" />おすすめランキングTOP10【2026年最新】
      </h1>

      <SummaryBox items={summaryItems} />

      {/* 高需要エリア警告バナー */}
      {data.highDemand && (
        <div
          className="rounded-2xl px-5 py-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3"
          style={{ backgroundColor: '#FFF3E0', border: '2px solid #F57C00' }}
        >
          <span className="text-2xl flex-shrink-0">⚠️</span>
          <div className="flex-1">
            <p className="font-bold text-base" style={{ color: '#E65100' }}>
              {data.name}は施設数に対する高齢者人口が全国的に多い地域です。
            </p>
            <p className="text-sm mt-0.5" style={{ color: '#BF360C' }}>
              空きが出たときにすぐ動けるよう、早めに情報収集と資料請求を進めておきましょう。
            </p>
          </div>
          <a
            href="https://www.minnanokaigo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 font-bold text-white rounded-xl px-4 py-2 text-sm transition hover:opacity-90"
            style={{ backgroundColor: '#F57C00', textDecoration: 'none' }}
          >
            今すぐ資料請求 →
          </a>
        </div>
      )}

      <p className="text-base mb-8">
        {data.description}
        要介護度・費用・立地などの観点からみんなの介護の評価データをもとに厳選しました。
        まずは気になる施設の詳細をチェックしてみましょう。
      </p>

      {/* TOP3 ランキングカード（大きめ表示） */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
        🏆 {data.name} TOP3
      </h2>
      <div className="space-y-8 mb-12">
        {top3.map((facility) => (
          <FacilityCard key={facility.rank} facility={facility} featured />
        ))}
      </div>

      {/* 4位〜10位 */}
      {rest.length > 0 && (
        <>
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
            📋 4位〜{data.facilities.length}位
          </h2>
          <div className="space-y-5 mb-12">
            {rest.map((facility) => (
              <FacilityCard key={facility.rank} facility={facility} featured={false} />
            ))}
          </div>
        </>
      )}

      {/* 比較表 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        {data.name}のおすすめ施設 比較表
      </h2>
      <div className="table-wrapper mb-10">
        <table className="w-full border-collapse text-base">
          <thead>
            <tr className="bg-primary text-white">
              <th className="text-left px-2 py-2">順位</th>
              <th className="text-left px-2 py-2">施設名</th>
              <th className="text-left px-2 py-2">タイプ</th>
              <th className="text-left px-2 py-2">月額費用</th>
              <th className="text-left px-2 py-2">評価</th>
            </tr>
          </thead>
          <tbody>
            {data.facilities.map((f) => (
              <tr key={f.rank} className={f.rank % 2 === 0 ? 'bg-gray-50 border-b border-gray-200' : 'border-b border-gray-200'}>
                <td className="font-bold px-2 py-2">{getRankLabel(f.rank)}</td>
                <td className="font-bold px-2 py-2">
                  <a href={f.url} target="_blank" rel="noopener noreferrer"
                     className="text-primary hover:underline">
                    {parseFacilityName(f.name).name}
                  </a>
                </td>
                <td className="px-2 py-2 text-sm">{f.type}</td>
                <td className="px-2 py-2 text-sm">{f.price}</td>
                <td className="px-2 py-2 text-sm">{f.rating ? `★${f.rating}` : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ランキングページ専用 煽りCTA */}
      <div
        className="rounded-2xl p-7 mt-12"
        style={{ backgroundColor: '#F9FBF9', border: '2px solid #A5D6A7' }}
      >
        <p className="text-xs font-bold mb-1 tracking-wide" style={{ color: '#2E7D52' }}>
          ── このページは一部の施設しか紹介できていません ──
        </p>
        <h2 className="text-xl md:text-2xl font-bold mb-3 text-text-main" style={{ borderLeft: 'none', paddingLeft: 0 }}>
          もっと多くの{data.name}の施設を見たい方はこちら
        </h2>
        <p className="text-sm mb-1 text-gray-700">
          このページで紹介しているのは評価上位のほんの一部。
          <span className="font-bold" style={{ color: '#2E7D52' }}>【みんなの介護】</span>
          には{data.name}だけで<strong>数百件以上</strong>の施設情報が掲載されており、空き状況・写真・口コミをまとめて確認できます。
        </p>
        <p className="text-sm mb-5 text-gray-700">
          資料請求・見学予約はすべて<strong>無料</strong>。気になった施設はまとめて資料請求しておくのがおすすめです。
        </p>
        <div className="flex flex-col items-center gap-1">
          <a
            href="https://www.minnanokaigo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-bold w-full"
            style={{
              backgroundColor: '#2E7D52',
              color: 'white',
              fontSize: '17px',
              maxWidth: '480px',
              minHeight: '56px',
              borderRadius: '12px',
              boxShadow: '0 3px 10px rgba(46,125,82,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              padding: '0 24px',
            }}
          >
            🔍 【みんなの介護】で{data.name}の全施設を見る（無料）
          </a>
          <span style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>※外部サービス（みんなの介護）に移動します</span>
        </div>
      </div>
    </>
  )
}

// ===== 施設カードコンポーネント =====
function FacilityCard({ facility, featured }: { facility: Facility; featured: boolean }) {
  const rank = facility.rank
  const { name, tagline } = parseFacilityName(facility.name)
  return (
    <div
      className="rounded-2xl overflow-hidden bg-white"
      style={cardStyle(rank)}
    >
      {/* カードヘッダー */}
      <div
        className="flex items-center gap-3 px-5 py-3"
        style={{ background: headerBg(rank) }}
      >
        <span className="text-3xl" aria-label={`第${rank}位`}>{getRankLabel(rank)}</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-500">第{rank}位</p>
          <p className="font-bold text-lg text-text-main truncate">{name}</p>
        </div>
        <span
          className="text-sm font-bold px-3 py-1 rounded-full text-white flex-shrink-0"
          style={{ backgroundColor: facility.badgeColor, fontSize: '13px' }}
        >
          {facility.badge}
        </span>
      </div>

      {/* 施設画像（TOP3のみ） */}
      {featured && facility.imageUrl && (
        <div className="w-full overflow-hidden" style={{ maxHeight: '220px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={facility.imageUrl}
            alt={facility.name}
            className="w-full object-cover"
            style={{ maxHeight: '220px', objectPosition: 'center' }}
          />
        </div>
      )}

      {/* カード本文 */}
      <div className="px-5 py-4 space-y-3">
        {/* 基本情報グリッド */}
        <div className={`grid gap-3 ${featured ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-4'}`}>
          <div className="rounded-xl p-3 bg-gray-50">
            <p className="text-xs text-gray-500 mb-0.5">施設タイプ</p>
            <p className="text-sm font-bold text-primary leading-tight">{facility.type}</p>
          </div>
          <div className="rounded-xl p-3 bg-gray-50">
            <p className="text-xs text-gray-500 mb-0.5">費用目安</p>
            <p className="text-sm font-bold leading-tight">{facility.price}</p>
          </div>
          {!featured && facility.rating && (
            <div className="rounded-xl p-3 bg-gray-50">
              <p className="text-xs text-gray-500 mb-0.5">評価</p>
              <p className="text-sm font-bold">★ {facility.rating}</p>
            </div>
          )}
          {!featured && facility.operator && (
            <div className="rounded-xl p-3 bg-gray-50">
              <p className="text-xs text-gray-500 mb-0.5">運営</p>
              <p className="text-sm font-bold leading-tight truncate">{facility.operator}</p>
            </div>
          )}
        </div>

        {/* 住所・最寄り駅・紹介文 */}
        <div className="space-y-1">
          <p className="text-sm text-gray-600 flex items-start gap-2">
            <span className="flex-shrink-0">📍</span>
            <span>{facility.address}</span>
          </p>
          {facility.nearestStation && (
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="flex-shrink-0">🚉</span>
              <span>{facility.nearestStation}</span>
            </p>
          )}
          {tagline && (
            <p className="text-sm text-gray-500 italic pl-1">{tagline}</p>
          )}
        </div>

        {/* 特徴タグ */}
        {facility.features.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {facility.features.map((f) => (
              <span
                key={f}
                className="text-xs px-3 py-1 rounded-full font-bold"
                style={{ backgroundColor: '#E8F5E9', color: '#2E7D52' }}
              >
                ✓ {f}
              </span>
            ))}
          </div>
        )}

        {/* featured のみ追加情報 */}
        {featured && (
          <>
            {facility.rating && (
              <p className="text-sm text-gray-600">
                ⭐ みんなの介護 評価：<strong>{facility.rating}</strong>
              </p>
            )}
            {/* おすすめポイント */}
            <div
              className="rounded-xl p-3"
              style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFE082' }}
            >
              <p className="text-xs font-bold text-gray-600 mb-1">💡 こんな方におすすめ</p>
              <p className="text-sm">{facility.recommend}</p>
            </div>
          </>
        )}

        {/* CTA ボタン */}
        {AFFILIATE_ENABLED && (
          <a
            href={facility.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full font-bold text-white rounded-xl transition hover:opacity-90"
            style={{
              backgroundColor: '#2E7D52',
              minHeight: featured ? '52px' : '44px',
              fontSize: featured ? '16px' : '14px',
              textDecoration: 'none',
              boxShadow: '0 3px 10px rgba(46,125,82,0.25)',
            }}
          >
            📋 この施設の詳細・資料請求（無料）
          </a>
        )}
      </div>
    </div>
  )
}
