import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import { ROOM_SIZE_ANALYSIS, TOTAL_FACILITIES, GENERATED_DATE } from '@/lib/facilityStats'

export const metadata: Metadata = {
  title: '老人ホームの部屋の広さと月額費用の関係【実データ分析】',
  description: `老人ホームの居室の広さ（㎡）と月額費用の関係を実データで分析。${TOTAL_FACILITIES.toLocaleString()}件の掲載情報からわかった「広さ別の費用感」をグラフと表で解説します。`,
  openGraph: {
    title: '老人ホームの部屋の広さ別 月額費用分析【実データ】',
    description: '居室の広さ（㎡）ごとの月額費用を実データで比較。広い部屋に住む費用感がわかります。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'website',
  },
}

const summaryItems = [
  '居室の広さは<mark class="highlight">15〜20㎡</mark>の施設が最も多く、月額平均は<mark class="highlight">約27万円</mark>です',
  '意外にも広い部屋（30㎡以上）の施設は費用が低め——これは地方の大型施設が多いためです',
  '月額費用は広さより<mark class="highlight">立地（都市部か地方か）</mark>や<mark class="highlight">サービスグレード</mark>の影響が大きいことがわかりました',
  '広さにこだわりがある場合は、広さと費用の両方を指定して絞り込むのがコツです',
]

// 最大値をバーチャート用に取得
const maxAvg = Math.max(...ROOM_SIZE_ANALYSIS.map(r => r.avg))

const BAR_COLORS = ['#2E7D52', '#43A066', '#5BB87D', '#F57C00', '#E65100']

export default function RoomSizeCostPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '老人ホームデータ分析', href: '/pref-cost-ranking' }, { label: '部屋の広さ別費用分析' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホームの部屋の広さと<br className="sm:hidden" />月額費用の関係
      </h1>

      <p style={{ color: '#555', fontSize: '13px', marginBottom: '8px' }}>
        データ出典：みんなの介護（{GENERATED_DATE}時点） ／ 広さデータあり施設：{ROOM_SIZE_ANALYSIS.reduce((s, r) => s + r.count, 0).toLocaleString()}件
      </p>

      <SummaryBox items={summaryItems} />

      {/* 横棒グラフ */}
      <div className="rounded-2xl p-6 mb-8" style={{ border: '2px solid #2E7D52', background: '#fff' }}>
        <h2 className="text-lg font-bold mb-5" style={{ borderLeft: 'none', paddingLeft: 0 }}>
          部屋の広さ別 月額費用（平均）
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {ROOM_SIZE_ANALYSIS.map((r, i) => {
            const pct = Math.round((r.avg / maxAvg) * 100)
            return (
              <div key={r.bracket}>
                <div className="flex justify-between items-baseline mb-1">
                  <span style={{ fontWeight: 700, fontSize: '14px', minWidth: '80px' }}>{r.bracket}</span>
                  <span style={{ fontWeight: 900, fontSize: '18px', color: BAR_COLORS[i] }}>{r.avg}万円</span>
                </div>
                <div style={{ background: '#eee', borderRadius: '6px', height: '18px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${pct}%`, height: '100%',
                    background: `linear-gradient(90deg, ${BAR_COLORS[i]}, ${BAR_COLORS[i]}CC)`,
                    borderRadius: '6px',
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '6px',
                  }} />
                </div>
                <p style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>
                  中央値 {r.median}万円 ／ 最安 {r.min}万円 ／ 最高 {r.max}万円 ／ {r.count}件
                </p>
              </div>
            )
          })}
        </div>
        <p style={{ fontSize: '11px', color: '#999', marginTop: '16px' }}>
          ※プラン詳細に部屋の広さが記載されていた施設のみ集計
        </p>
      </div>

      {/* テーブル */}
      <h2 className="text-xl font-bold mt-8 mb-4">広さ別 費用詳細データ</h2>
      <div className="table-wrapper mb-8">
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: '#2E7D52', color: '#fff' }}>
              <th style={{ padding: '10px 12px', textAlign: 'left' }}>居室の広さ</th>
              <th style={{ padding: '10px 8px', textAlign: 'right' }}>件数</th>
              <th style={{ padding: '10px 8px', textAlign: 'right' }}>平均月額</th>
              <th style={{ padding: '10px 8px', textAlign: 'right' }}>中央値</th>
              <th style={{ padding: '10px 8px', textAlign: 'right' }}>最安値</th>
              <th style={{ padding: '10px 8px', textAlign: 'right' }}>最高値</th>
            </tr>
          </thead>
          <tbody>
            {ROOM_SIZE_ANALYSIS.map((r, i) => (
              <tr
                key={r.bracket}
                style={{ background: i % 2 === 0 ? '#fff' : '#F8F8F6', borderBottom: '1px solid #eee' }}
              >
                <td style={{ padding: '12px 12px', fontWeight: 700 }}>{r.bracket}</td>
                <td style={{ padding: '12px 8px', textAlign: 'right', color: '#666', fontSize: '13px' }}>{r.count}件</td>
                <td style={{ padding: '12px 8px', textAlign: 'right', fontWeight: 700, color: BAR_COLORS[i] }}>{r.avg}万円</td>
                <td style={{ padding: '12px 8px', textAlign: 'right', color: '#444' }}>{r.median}万円</td>
                <td style={{ padding: '12px 8px', textAlign: 'right', color: '#2E7D52', fontWeight: 600 }}>{r.min}万円</td>
                <td style={{ padding: '12px 8px', textAlign: 'right', color: '#C62828' }}>{r.max}万円</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CTABox compact />

      {/* 解説セクション */}
      <section className="mb-8 mt-8">
        <h2 className="text-xl font-bold mb-4">広さ別データから見えること</h2>

        <div className="rounded-xl p-5 mb-5" style={{ background: '#FFF8F0', border: '1px solid #F57C00' }}>
          <h3 className="font-bold mb-2" style={{ color: '#E65100', fontSize: '16px' }}>
            ① 15〜20㎡が最多で費用も高め
          </h3>
          <p style={{ lineHeight: 1.9, color: '#333', fontSize: '14px' }}>
            データの約60%は「15〜20㎡」の居室プランを持つ施設でした。
            一般的な有料老人ホームの個室はこのサイズが標準で、月額平均は27.1万円と全区分中で最も高くなっています。
            都市部の介護付き有料老人ホームに多いタイプです。
          </p>
        </div>

        <div className="rounded-xl p-5 mb-5" style={{ background: '#F0FAF4', border: '1px solid #2E7D52' }}>
          <h3 className="font-bold mb-2" style={{ color: '#2E7D52', fontSize: '16px' }}>
            ② 広い部屋（30㎡以上）が意外と安い理由
          </h3>
          <p style={{ lineHeight: 1.9, color: '#333', fontSize: '14px' }}>
            30㎡以上の広い居室を持つ施設の月額平均は22.1万円と、15〜20㎡よりも低い数値になっています。
            これは地方の大型施設や、サービス付き高齢者向け住宅（サ高住）に広い間取りが多いためです。
            広さを求めながらも費用を抑えたい場合は、地方のサ高住を検討する価値があります。
          </p>
        </div>

        <div className="rounded-xl p-5 mb-5" style={{ background: '#EEF2FF', border: '1px solid #3F51B5' }}>
          <h3 className="font-bold mb-2" style={{ color: '#3F51B5', fontSize: '16px' }}>
            ③ 費用を決める要因は「広さ」よりも「立地・種別」
          </h3>
          <p style={{ lineHeight: 1.9, color: '#333', fontSize: '14px' }}>
            同じ「15〜20㎡」の部屋でも最安4.3万円から最高81万円超まで幅があります。
            費用には都道府県（都市 vs 地方）・施設種別（特養 vs 有料老人ホーム）・
            サービス内容の影響が非常に大きく、部屋の広さだけでは費用は決まりません。
            まず予算と立地を決め、その中で広さを選ぶ順番が効率的です。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">部屋の広さで施設を選ぶポイント</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '20px', color: '#333' }}>
          <li><strong>自立〜要介護1の方：</strong>20〜25㎡以上の広めの居室で生活の質を確保しやすい</li>
          <li><strong>要介護3以上の方：</strong>ベッド・車椅子の動線が確保できれば15㎡台でも十分な場合が多い</li>
          <li><strong>夫婦での入居：</strong>30㎡以上、または隣接する2部屋プランのある施設を探す</li>
          <li><strong>荷物が多い方：</strong>居室面積だけでなく「収納スペース」「共用ロビーの広さ」も確認を</li>
        </ul>
      </section>

      <CTABox />

      <p style={{ fontSize: '12px', color: '#999', marginTop: '16px' }}>
        ※本データはみんなの介護の掲載情報を独自集計したものです（集計日：{GENERATED_DATE}）。
        広さデータは施設のプラン詳細に記載があった施設のみを対象としており、全施設を網羅していません。
        実際の費用・居室の広さは施設に直接お問い合わせください。
      </p>
    </>
  )
}
