import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import { PREF_COST_RANKING, TOTAL_FACILITIES, GENERATED_DATE } from '@/lib/facilityStats'

export const metadata: Metadata = {
  title: '老人ホーム月額費用【都道府県別ランキング】全国5.5万件の実データから算出',
  description: `みんなの介護に掲載された全国${TOTAL_FACILITIES.toLocaleString()}件の老人ホームデータをもとに、都道府県別の月額費用（平均・中央値・最安値）をランキング形式で公開。最も費用が安い都道府県・高い都道府県が一目でわかります。`,
  openGraph: {
    title: '老人ホーム月額費用【都道府県別ランキング】全国実データ版',
    description: '全国5.5万件の老人ホームデータから算出した都道府県別月額費用ランキング。平均・中央値・最安値を掲載。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'website',
  },
}

const summaryItems = [
  `全国<mark class="highlight">${TOTAL_FACILITIES.toLocaleString()}件</mark>の老人ホームデータから算出した都道府県別の月額費用ランキングです`,
  '月額が最も安いのは<mark class="highlight">沖縄県（平均7.8万円）</mark>、最も高いのは<mark class="highlight">東京都（平均16.3万円）</mark>です',
  '同じ都道府県内でも施設によって費用は大きく異なるため、<mark class="highlight">中央値・最安値</mark>もあわせて確認しましょう',
  'データは掲載時点の情報です。実際の費用は施設に直接お問い合わせください',
]

// 安い順（昇順）ですでにソート済み
const rankingAsc = [...PREF_COST_RANKING]
const rankingDesc = [...PREF_COST_RANKING].reverse()

// 全国平均
const allAvg = Math.round(PREF_COST_RANKING.reduce((s, r) => s + r.avg, 0) / PREF_COST_RANKING.length * 10) / 10

// バーの最大値（表示用）
const maxAvg = Math.max(...PREF_COST_RANKING.map(r => r.avg))

function CostBar({ value, max }: { value: number; max: number }) {
  const pct = Math.round((value / max) * 100)
  const color = value <= 10 ? '#2E7D52' : value <= 13 ? '#F57C00' : '#C62828'
  return (
    <div style={{ background: '#eee', borderRadius: '4px', height: '10px', width: '100%', overflow: 'hidden' }}>
      <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: '4px', transition: 'width 0.3s' }} />
    </div>
  )
}

export default function PrefCostRankingPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '老人ホームデータ分析', href: '/pref-cost-ranking' }, { label: '都道府県別月額費用ランキング' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホームの月額費用<br className="sm:hidden" />【都道府県別ランキング】
      </h1>

      <p style={{ color: '#555', fontSize: '13px', marginBottom: '8px' }}>
        データ出典：みんなの介護（{GENERATED_DATE}時点） ／ 集計対象：{TOTAL_FACILITIES.toLocaleString()}件
      </p>

      <SummaryBox items={summaryItems} />

      {/* 全国平均カード */}
      <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #E8F5E9 0%, #F0FAF4 100%)', border: '2px solid #2E7D52' }}>
        <p style={{ color: '#2E7D52', fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>全国平均（47都道府県の平均）</p>
        <p style={{ fontSize: '36px', fontWeight: 900, color: '#1A1A1A', lineHeight: 1.1 }}>
          {allAvg}<span style={{ fontSize: '18px', fontWeight: 700 }}>万円</span><span style={{ fontSize: '14px', color: '#555', fontWeight: 400 }}>/月</span>
        </p>
        <p style={{ color: '#666', fontSize: '13px', marginTop: '6px' }}>
          ※都道府県の平均値の平均。最安の沖縄県（7.8万円）から最高の東京都（16.3万円）まで約2倍の開きがあります。
        </p>
      </div>

      {/* TOP5 安い / 高い */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="rounded-2xl p-5" style={{ border: '2px solid #2E7D52', background: '#F0FAF4' }}>
          <h2 className="text-lg font-bold mb-4" style={{ color: '#2E7D52', borderLeft: 'none', paddingLeft: 0 }}>
            月額が安い都道府県 TOP5
          </h2>
          {rankingAsc.slice(0, 5).map((r, i) => (
            <div key={r.pref} className="flex items-center gap-3 mb-3">
              <span style={{
                background: i === 0 ? '#F57C00' : i === 1 ? '#888' : '#A0522D',
                color: '#fff', borderRadius: '50%', width: '28px', height: '28px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', fontWeight: 700, flexShrink: 0,
              }}>
                {i + 1}
              </span>
              <div style={{ flex: 1 }}>
                <div className="flex justify-between items-baseline mb-1">
                  <span style={{ fontWeight: 700, fontSize: '15px' }}>{r.pref}</span>
                  <span style={{ fontWeight: 900, fontSize: '18px', color: '#2E7D52' }}>{r.avg}万円</span>
                </div>
                <CostBar value={r.avg} max={maxAvg} />
                <p style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>
                  中央値 {r.median}万円 ／ 最安 {r.min}万円 ／ {r.count.toLocaleString()}件
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-5" style={{ border: '2px solid #C62828', background: '#FFF3F3' }}>
          <h2 className="text-lg font-bold mb-4" style={{ color: '#C62828', borderLeft: 'none', paddingLeft: 0 }}>
            月額が高い都道府県 TOP5
          </h2>
          {rankingDesc.slice(0, 5).map((r, i) => (
            <div key={r.pref} className="flex items-center gap-3 mb-3">
              <span style={{
                background: '#C62828',
                color: '#fff', borderRadius: '50%', width: '28px', height: '28px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', fontWeight: 700, flexShrink: 0,
              }}>
                {i + 1}
              </span>
              <div style={{ flex: 1 }}>
                <div className="flex justify-between items-baseline mb-1">
                  <span style={{ fontWeight: 700, fontSize: '15px' }}>{r.pref}</span>
                  <span style={{ fontWeight: 900, fontSize: '18px', color: '#C62828' }}>{r.avg}万円</span>
                </div>
                <CostBar value={r.avg} max={maxAvg} />
                <p style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>
                  中央値 {r.median}万円 ／ 最安 {r.min}万円 ／ {r.count.toLocaleString()}件
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTABox compact />

      {/* 全47都道府県テーブル */}
      <h2 className="text-xl font-bold mt-10 mb-4">全47都道府県 月額費用一覧（安い順）</h2>
      <p style={{ color: '#555', fontSize: '13px', marginBottom: '12px' }}>
        「平均」は全施設の月額の算術平均、「中央値」は上位50%の境界値（外れ値に左右されにくい）です。
        「最安値」はその都道府県で最も安い施設の月額です。
      </p>

      <div className="table-wrapper mb-10">
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: '#2E7D52', color: '#fff' }}>
              <th style={{ padding: '10px 8px', textAlign: 'center', width: '50px' }}>順位</th>
              <th style={{ padding: '10px 8px', textAlign: 'left' }}>都道府県</th>
              <th style={{ padding: '10px 8px', textAlign: 'right' }}>平均</th>
              <th style={{ padding: '10px 8px', textAlign: 'right' }}>中央値</th>
              <th style={{ padding: '10px 8px', textAlign: 'right' }}>最安値</th>
              <th style={{ padding: '10px 8px', textAlign: 'right' }}>件数</th>
            </tr>
          </thead>
          <tbody>
            {rankingAsc.map((r, i) => {
              const isLow = r.avg <= 10
              const isHigh = r.avg >= 14
              return (
                <tr
                  key={r.pref}
                  style={{
                    background: i % 2 === 0 ? '#fff' : '#F8F8F6',
                    borderBottom: '1px solid #eee',
                  }}
                >
                  <td style={{ padding: '10px 8px', textAlign: 'center', fontWeight: 700, color: '#888' }}>
                    {i + 1}
                  </td>
                  <td style={{ padding: '10px 8px', fontWeight: 600 }}>
                    {r.pref}
                  </td>
                  <td style={{ padding: '10px 8px', textAlign: 'right', fontWeight: 700,
                    color: isLow ? '#2E7D52' : isHigh ? '#C62828' : '#1A1A1A' }}>
                    {r.avg}万円
                  </td>
                  <td style={{ padding: '10px 8px', textAlign: 'right', color: '#444' }}>
                    {r.median}万円
                  </td>
                  <td style={{ padding: '10px 8px', textAlign: 'right', color: '#2E7D52', fontWeight: 600 }}>
                    {r.min}万円
                  </td>
                  <td style={{ padding: '10px 8px', textAlign: 'right', color: '#666', fontSize: '12px' }}>
                    {r.count.toLocaleString()}件
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* 解説 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">なぜ都道府県で費用が異なるのか</h2>
        <div style={{ lineHeight: 1.9, color: '#333' }}>
          <p className="mb-3">
            老人ホームの費用は施設の種類・グレード・立地条件などによって異なります。
            都市部（東京・神奈川・大阪など）は土地代・人件費が高いため、施設の維持コストが上がり、月額費用も高くなる傾向があります。
          </p>
          <p className="mb-3">
            一方、地方（沖縄・宮崎・佐賀など）は土地代・人件費が比較的低いため、同水準のサービスでも費用を抑えられる施設が多くあります。
          </p>
          <p>
            ただし「安い＝サービスが悪い」ではありません。同じ都道府県内でも施設によって大きな差があるため、
            費用だけでなく<strong>スタッフ体制・医療対応・口コミ評価</strong>なども合わせて比較することが大切です。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">費用の見方：平均値と中央値の違い</h2>
        <div style={{ lineHeight: 1.9, color: '#333' }}>
          <p className="mb-3">
            施設の費用には「高級施設」による外れ値が存在するため、<strong>中央値</strong>の方が実態に近い場合があります。
            たとえば東京都は平均16.3万円ですが、これは一部の高額施設（30万円超）が平均を引き上げているためです。
          </p>
          <p>
            予算を考える際は、まず中央値を目安にして、その後に具体的な施設を比較することをおすすめします。
          </p>
        </div>
      </section>

      <CTABox />

      <p style={{ fontSize: '12px', color: '#999', marginTop: '16px' }}>
        ※本データはみんなの介護の掲載情報を独自集計したものです（集計日：{GENERATED_DATE}）。
        実際の費用は施設・プラン・要介護度によって異なります。最新情報は各施設にお問い合わせください。
      </p>
    </>
  )
}
