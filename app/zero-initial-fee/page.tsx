import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import { ZERO_INITIAL_SUMMARY, ZERO_INITIAL_TOTAL, ZERO_INITIAL_RATE, TOTAL_FACILITIES, GENERATED_DATE } from '@/lib/facilityStats'

export const metadata: Metadata = {
  title: '老人ホームの入居一時金ゼロ円施設まとめ【都道府県別】実データ分析',
  description: `全国${TOTAL_FACILITIES.toLocaleString()}件の老人ホームデータを分析。入居一時金0円で入れる施設の割合・都道府県別の分布・平均月額を公開。初期費用を抑えたい方必見の情報です。`,
  openGraph: {
    title: '老人ホーム入居一時金0円施設まとめ【全国実データ】',
    description: `全国${TOTAL_FACILITIES.toLocaleString()}件のデータから、入居一時金0円施設の割合・都道府県別分布を分析。`,
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'website',
  },
}

const summaryItems = [
  `全国の老人ホームの約<mark class="highlight">${ZERO_INITIAL_RATE}%（${ZERO_INITIAL_TOTAL.toLocaleString()}件）</mark>が入居一時金0円で入れます`,
  '特別養護老人ホーム（特養）・老健・グループホームは<mark class="highlight">原則として入居一時金なし</mark>です',
  '有料老人ホームでも「月払い型」を選べば入居一時金0円で入れる施設が増えています',
  '入居一時金が高い施設は<mark class="highlight">月額が安く設定</mark>されていることが多く、長く住む場合はトータルコストで比較しましょう',
]

// 0円施設件数が多い順にトップ10
const top10ByCount = [...ZERO_INITIAL_SUMMARY].slice(0, 10)

// 0円率が高い都道府県TOP10
const top10ByRate = [...ZERO_INITIAL_SUMMARY].sort((a, b) => b.zero_rate - a.zero_rate).slice(0, 10)

// 全国の入居一時金ありの施設数
const paidTotal = TOTAL_FACILITIES - ZERO_INITIAL_TOTAL
const paidRate = Math.round((paidTotal / TOTAL_FACILITIES) * 100 * 10) / 10

export default function ZeroInitialFeePage() {
  return (
    <>
      <Breadcrumb items={[{ label: '老人ホームデータ分析', href: '/pref-cost-ranking' }, { label: '入居一時金0円施設まとめ' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホームの入居一時金<br className="sm:hidden" />0円施設まとめ
      </h1>

      <p style={{ color: '#555', fontSize: '13px', marginBottom: '8px' }}>
        データ出典：みんなの介護（{GENERATED_DATE}時点） ／ 集計対象：{TOTAL_FACILITIES.toLocaleString()}件
      </p>

      <SummaryBox items={summaryItems} />

      {/* 大きな数字 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #E8F5E9 0%, #F0FAF4 100%)', border: '2px solid #2E7D52' }}>
          <p style={{ color: '#2E7D52', fontWeight: 700, fontSize: '13px', marginBottom: '4px' }}>入居一時金0円の施設数</p>
          <p style={{ fontSize: '40px', fontWeight: 900, color: '#1A1A1A', lineHeight: 1.1 }}>
            {ZERO_INITIAL_TOTAL.toLocaleString()}
            <span style={{ fontSize: '16px', fontWeight: 700 }}>件</span>
          </p>
          <p style={{ color: '#2E7D52', fontWeight: 700, fontSize: '18px', marginTop: '4px' }}>
            全体の {ZERO_INITIAL_RATE}%
          </p>
          <p style={{ color: '#666', fontSize: '12px', marginTop: '4px' }}>
            ※入居一時金が明示的に0円と記載されていた施設
          </p>
        </div>
        <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #FFF3E0 0%, #FFF8F0 100%)', border: '2px solid #F57C00' }}>
          <p style={{ color: '#E65100', fontWeight: 700, fontSize: '13px', marginBottom: '4px' }}>入居一時金が必要な施設数</p>
          <p style={{ fontSize: '40px', fontWeight: 900, color: '#1A1A1A', lineHeight: 1.1 }}>
            {paidTotal.toLocaleString()}
            <span style={{ fontSize: '16px', fontWeight: 700 }}>件</span>
          </p>
          <p style={{ color: '#E65100', fontWeight: 700, fontSize: '18px', marginTop: '4px' }}>
            全体の {paidRate}%
          </p>
          <p style={{ color: '#666', fontSize: '12px', marginTop: '4px' }}>
            ※0円以外のプラン・または情報非公開の施設
          </p>
        </div>
      </div>

      <CTABox compact />

      {/* 入居件数が多い都道府県 */}
      <h2 className="text-xl font-bold mt-10 mb-4">入居一時金0円施設が多い都道府県 TOP10</h2>
      <p style={{ color: '#555', fontSize: '13px', marginBottom: '12px' }}>
        件数が多い都道府県ほど「選択肢が豊富」ということを意味します。
      </p>
      <div className="table-wrapper mb-8">
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: '#2E7D52', color: '#fff' }}>
              <th style={{ padding: '10px 8px', textAlign: 'center', width: '50px' }}>順位</th>
              <th style={{ padding: '10px 8px', textAlign: 'left' }}>都道府県</th>
              <th style={{ padding: '10px 8px', textAlign: 'right' }}>0円施設数</th>
              <th style={{ padding: '10px 8px', textAlign: 'right' }}>0円率</th>
              <th style={{ padding: '10px 8px', textAlign: 'right' }}>0円施設の<br />平均月額</th>
            </tr>
          </thead>
          <tbody>
            {top10ByCount.map((r, i) => (
              <tr
                key={r.pref}
                style={{ background: i % 2 === 0 ? '#fff' : '#F8F8F6', borderBottom: '1px solid #eee' }}
              >
                <td style={{ padding: '10px 8px', textAlign: 'center', fontWeight: 700,
                  color: i === 0 ? '#F57C00' : i === 1 ? '#666' : i === 2 ? '#8D6748' : '#999' }}>
                  {i + 1}
                </td>
                <td style={{ padding: '10px 8px', fontWeight: 600 }}>{r.pref}</td>
                <td style={{ padding: '10px 8px', textAlign: 'right', fontWeight: 700, color: '#2E7D52' }}>
                  {r.zero_count.toLocaleString()}件
                </td>
                <td style={{ padding: '10px 8px', textAlign: 'right' }}>
                  <span style={{
                    background: r.zero_rate >= 95 ? '#E8F5E9' : '#FFF8F0',
                    color: r.zero_rate >= 95 ? '#2E7D52' : '#E65100',
                    padding: '2px 8px', borderRadius: '12px', fontSize: '13px', fontWeight: 700,
                  }}>
                    {r.zero_rate}%
                  </span>
                </td>
                <td style={{ padding: '10px 8px', textAlign: 'right', color: '#444' }}>
                  {r.avg_monthly != null ? `${r.avg_monthly}万円` : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 0円率が高い都道府県 */}
      <h2 className="text-xl font-bold mt-8 mb-4">0円施設の割合が高い都道府県 TOP10</h2>
      <p style={{ color: '#555', fontSize: '13px', marginBottom: '12px' }}>
        施設の中で「0円施設の比率」が高い都道府県です。
      </p>
      <div className="table-wrapper mb-10">
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: '#43A066', color: '#fff' }}>
              <th style={{ padding: '10px 8px', textAlign: 'center', width: '50px' }}>順位</th>
              <th style={{ padding: '10px 8px', textAlign: 'left' }}>都道府県</th>
              <th style={{ padding: '10px 8px', textAlign: 'right' }}>0円率</th>
              <th style={{ padding: '10px 8px', textAlign: 'right' }}>0円施設数</th>
              <th style={{ padding: '10px 8px', textAlign: 'right' }}>平均月額</th>
            </tr>
          </thead>
          <tbody>
            {top10ByRate.map((r, i) => (
              <tr
                key={r.pref}
                style={{ background: i % 2 === 0 ? '#fff' : '#F8F8F6', borderBottom: '1px solid #eee' }}
              >
                <td style={{ padding: '10px 8px', textAlign: 'center', fontWeight: 700,
                  color: i === 0 ? '#F57C00' : i === 1 ? '#666' : i === 2 ? '#8D6748' : '#999' }}>
                  {i + 1}
                </td>
                <td style={{ padding: '10px 8px', fontWeight: 600 }}>{r.pref}</td>
                <td style={{ padding: '10px 8px', textAlign: 'right' }}>
                  <span style={{
                    background: '#E8F5E9', color: '#2E7D52',
                    padding: '2px 10px', borderRadius: '12px', fontSize: '13px', fontWeight: 700,
                  }}>
                    {r.zero_rate}%
                  </span>
                </td>
                <td style={{ padding: '10px 8px', textAlign: 'right', color: '#666', fontSize: '13px' }}>
                  {r.zero_count.toLocaleString()}件
                </td>
                <td style={{ padding: '10px 8px', textAlign: 'right', color: '#444' }}>
                  {r.avg_monthly != null ? `${r.avg_monthly}万円` : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 解説 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">入居一時金とは？0円施設の選び方</h2>
        <div style={{ lineHeight: 1.9, color: '#333' }}>
          <p className="mb-4">
            「入居一時金」は入居時に一括で支払う費用で、0円から数千万円まで施設によって大きく異なります。
            一時金を高く払うと月額が下がる仕組みになっている施設も多く、
            <strong>長期入居であれば一時金ありの方がトータルで安くなる</strong>ケースもあります。
          </p>

          <div className="rounded-xl p-5 mb-4" style={{ background: '#F0FAF4', border: '1px solid #2E7D52' }}>
            <h3 className="font-bold mb-3" style={{ color: '#2E7D52', fontSize: '15px' }}>入居一時金0円が多い施設の種類</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                ['特別養護老人ホーム（特養）', '公的施設のため入居一時金なし。ただし待機期間あり'],
                ['介護老人保健施設（老健）', '公的施設のため入居一時金なし。医療・リハビリ目的'],
                ['グループホーム', '認知症専門の小規模施設。入居一時金0〜100万円が多い'],
                ['サービス付き高齢者向け住宅', '賃貸形式のため一時金なしが多い（敷金のみの場合も）'],
                ['有料老人ホーム（月払い型）', '月額を高めに設定することで一時金をゼロにしているプラン'],
              ].map(([type, desc]) => (
                <li key={type} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#2E7D52', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span><strong>{type}</strong>：{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl p-5 mb-4" style={{ background: '#FFF8F0', border: '1px solid #F57C00' }}>
            <h3 className="font-bold mb-2" style={{ color: '#E65100', fontSize: '15px' }}>
              注意点：0円施設でも「その他費用」に注意
            </h3>
            <p style={{ fontSize: '14px' }}>
              入居一時金が0円でも、<strong>生活費・食費・医療費・おむつ代</strong>などの費用は別途かかります。
              月額に何が含まれているかを事前に確認し、実質的なトータルコストで比較しましょう。
              「入居一時金0円・月額〇〇万円」という表示の際は、その月額に何が含まれるかが重要です。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">入居一時金 vs 月払い：どちらがトータルで安いか</h2>
        <div className="table-wrapper">
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: '#555', color: '#fff' }}>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>入居パターン</th>
                <th style={{ padding: '10px 8px', textAlign: 'right' }}>入居一時金</th>
                <th style={{ padding: '10px 8px', textAlign: 'right' }}>月額</th>
                <th style={{ padding: '10px 8px', textAlign: 'right' }}>5年間合計</th>
                <th style={{ padding: '10px 8px', textAlign: 'right' }}>10年間合計</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: '月払い型（0円）', initial: 0, monthly: 18, color: '#2E7D52' },
                { type: '一時金型（300万円）', initial: 300, monthly: 15, color: '#F57C00' },
                { type: '一時金型（1000万円）', initial: 1000, monthly: 12, color: '#C62828' },
              ].map((r, i) => {
                const total5 = r.initial + r.monthly * 12 * 5
                const total10 = r.initial + r.monthly * 12 * 10
                return (
                  <tr key={r.type} style={{ background: i % 2 === 0 ? '#fff' : '#F8F8F6', borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px 12px', fontWeight: 600, color: r.color }}>{r.type}</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right' }}>
                      {r.initial === 0 ? <span style={{ color: '#2E7D52', fontWeight: 700 }}>0円</span> : `${r.initial}万円`}
                    </td>
                    <td style={{ padding: '12px 8px', textAlign: 'right' }}>{r.monthly}万円</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right', fontWeight: 600 }}>{total5.toLocaleString()}万円</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right', fontWeight: 600 }}>{total10.toLocaleString()}万円</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
          ※上記は試算例です。実際の費用は施設によって異なります。
          入居一時金には「返還制度（初期償却・返還期間）」が設定されている場合があります。
        </p>
      </section>

      <CTABox />

      <p style={{ fontSize: '12px', color: '#999', marginTop: '16px' }}>
        ※本データはみんなの介護の掲載情報を独自集計したものです（集計日：{GENERATED_DATE}）。
        「0円施設」の定義は「入居一時金0円」と明示された施設です。
        実際の費用・条件は施設に直接お問い合わせください。
      </p>
    </>
  )
}
