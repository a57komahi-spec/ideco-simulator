'use client'

import { useState } from 'react'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

// ========== データ定義 ==========
// isPublic: true = 公的（緑系）/ false = 民間（オレンジ系）
const facilities = [
  { name: '特別養護老人ホーム', short: '特養', monthly: 10, initial: 0, color: '#2E7D52', textColor: '#fff', isPublic: true },
  { name: '介護老人保健施設', short: '老健', monthly: 13, initial: 0, color: '#388E3C', textColor: '#fff', isPublic: true },
  { name: 'サ高住', short: 'サ高住', monthly: 18, initial: 20, color: '#FF8F00', textColor: '#fff', isPublic: false },
  { name: 'グループホーム', short: 'GH', monthly: 20, initial: 50, color: '#F57C00', textColor: '#fff', isPublic: false },
  { name: '住宅型有料', short: '住宅型', monthly: 20, initial: 100, color: '#E65100', textColor: '#fff', isPublic: false },
  { name: '介護付き有料', short: '介護付', monthly: 25, initial: 200, color: '#BF360C', textColor: '#fff', isPublic: false },
]

// 公的 / 民間 バッジ
function TypeBadge({ isPublic }: { isPublic: boolean }) {
  return (
    <span
      style={{
        background: isPublic ? '#E8F5E9' : '#FFF3E0',
        color: isPublic ? '#2E7D52' : '#E65100',
        border: `1px solid ${isPublic ? '#A5D6A7' : '#FFCC80'}`,
        fontSize: '11px',
        fontWeight: 800,
        padding: '1px 7px',
        borderRadius: '20px',
        flexShrink: 0,
        letterSpacing: '0.03em',
      }}
    >
      {isPublic ? '公的' : '民間'}
    </span>
  )
}

const years = [5, 10, 15, 20]

function calcTotal(monthly: number, initial: number, yr: number) {
  return initial + monthly * 12 * yr
}

// ========== 棒グラフ（横）==========
function BarChart({ year }: { year: number }) {
  const data = facilities.map(f => ({
    ...f,
    total: calcTotal(f.monthly, f.initial, year),
  }))
  const max = Math.max(...data.map(d => d.total))

  return (
    <div className="space-y-3">
      {data.map((d) => {
        const pct = (d.total / max) * 100
        return (
          <div key={d.name}>
            <div className="flex items-center justify-between mb-1 gap-2">
              <div className="flex items-center gap-2">
                <TypeBadge isPublic={d.isPublic} />
                <span className="text-base font-bold" style={{ color: d.color }}>{d.name}</span>
              </div>
              <span className="text-base font-bold">{d.total.toLocaleString()}万円</span>
            </div>
            <div className="w-full rounded-full overflow-hidden" style={{ height: '32px', background: '#e5e7eb' }}>
              <div
                className="h-full rounded-full flex items-center justify-end pr-3 transition-all duration-700"
                style={{ width: `${pct}%`, background: d.color, minWidth: '60px' }}
              >
                <span style={{ color: '#fff', fontSize: '13px', fontWeight: 700 }}>{pct.toFixed(0)}%</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ========== 折れ線グラフ（SVG）==========
function LineChart() {
  const W = 560
  const H = 280
  const padL = 60
  const padR = 20
  const padT = 20
  const padB = 40
  const chartW = W - padL - padR
  const chartH = H - padT - padB

  const yearPoints = [0, 5, 10, 15, 20]
  const maxVal = Math.max(...facilities.map(f => calcTotal(f.monthly, f.initial, 20)))
  const roundedMax = Math.ceil(maxVal / 500) * 500

  const toX = (yr: number) => padL + (yr / 20) * chartW
  const toY = (val: number) => padT + chartH - (val / roundedMax) * chartH

  const yTicks = [0, 1000, 2000, 3000, 4000, 5000, 6000].filter(v => v <= roundedMax + 500)

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '0 auto' }}>
        {/* グリッド線 */}
        {yTicks.map(v => (
          <g key={v}>
            <line x1={padL} y1={toY(v)} x2={W - padR} y2={toY(v)} stroke="#e5e7eb" strokeWidth="1" />
            <text x={padL - 6} y={toY(v) + 4} textAnchor="end" fontSize="11" fill="#6b7280">{v === 0 ? '0' : `${v}万`}</text>
          </g>
        ))}
        {/* X軸目盛り */}
        {yearPoints.map(yr => (
          <text key={yr} x={toX(yr)} y={H - 6} textAnchor="middle" fontSize="11" fill="#6b7280">{yr}年</text>
        ))}
        {/* 各施設の折れ線 */}
        {facilities.map(f => {
          const points = yearPoints.map(yr => ({
            x: toX(yr),
            y: toY(calcTotal(f.monthly, f.initial, yr)),
          }))
          const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')
          return (
            <g key={f.name}>
              <path d={d} fill="none" stroke={f.color} strokeWidth="2.5" strokeLinejoin="round" />
              {points.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="4" fill={f.color} stroke="#fff" strokeWidth="1.5" />
              ))}
            </g>
          )
        })}
        {/* 軸 */}
        <line x1={padL} y1={padT} x2={padL} y2={padT + chartH} stroke="#9ca3af" strokeWidth="1.5" />
        <line x1={padL} y1={padT + chartH} x2={W - padR} y2={padT + chartH} stroke="#9ca3af" strokeWidth="1.5" />
      </svg>
      {/* 凡例 */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 justify-center">
        {facilities.map(f => (
          <div key={f.name} className="flex items-center gap-1.5">
            <span className="inline-block rounded-full" style={{ width: 12, height: 12, background: f.color, flexShrink: 0 }} />
            <TypeBadge isPublic={f.isPublic} />
            <span className="text-sm">{f.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ========== 積み上げ棒グラフ（初期費用 vs 月額） ==========
function StackedBar() {
  const data20 = facilities.map(f => ({
    ...f,
    monthly20: f.monthly * 12 * 20,
    total: calcTotal(f.monthly, f.initial, 20),
  }))
  const max = Math.max(...data20.map(d => d.total))

  return (
    <div className="space-y-5">
      {data20.map(d => {
        const initPct = (d.initial / max) * 100
        return (
          <div key={d.name}>
            {/* 施設名・合計・内訳ラベルを1行に */}
            <div className="flex items-end justify-between mb-1 gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <TypeBadge isPublic={d.isPublic} />
                <span className="text-base font-bold">{d.name}</span>
              </div>
              <div className="flex items-center gap-3 text-sm flex-wrap justify-end">
                {d.initial > 0 && (
                  <span
                    className="font-bold px-2 py-0.5 rounded"
                    style={{ background: '#FFF3E0', color: '#E65100', border: '1px solid #F57C00' }}
                  >
                    🟠 初期費用 {d.initial}万円
                  </span>
                )}
                <span
                  className="font-bold px-2 py-0.5 rounded"
                  style={{ background: '#E8F5E9', color: d.color, border: `1px solid ${d.color}` }}
                >
                  月額合計 {d.monthly20.toLocaleString()}万円
                </span>
                <span className="font-bold text-gray-700">計 {d.total.toLocaleString()}万円</span>
              </div>
            </div>
            {/* バー */}
            <div className="flex rounded-full overflow-hidden" style={{ height: '28px', background: '#e5e7eb' }}>
              {d.initial > 0 && (
                <div
                  style={{ width: `${initPct}%`, background: '#F57C00', minWidth: '6px' }}
                  title={`初期費用 ${d.initial}万円`}
                />
              )}
              <div
                className="flex-1"
                style={{ background: d.color }}
                title={`月額合計 ${d.monthly20}万円`}
              />
            </div>
          </div>
        )
      })}
      <div className="flex gap-4 mt-4 flex-wrap items-center">
        <div className="flex items-center gap-1.5">
          <span className="inline-block rounded" style={{ width: 14, height: 14, background: '#F57C00', opacity: 0.5 }} />
          <span className="text-sm">初期費用（入居一時金）</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block rounded" style={{ width: 14, height: 14, background: '#2E7D52' }} />
          <span className="text-sm" style={{ color: '#2E7D52', fontWeight: 600 }}>公的施設（緑系）</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block rounded" style={{ width: 14, height: 14, background: '#F57C00' }} />
          <span className="text-sm" style={{ color: '#E65100', fontWeight: 600 }}>民間施設（オレンジ系）</span>
        </div>
      </div>
    </div>
  )
}

// ========== メインページ ==========
const summaryItems = [
  '20年間の総費用は施設タイプにより<mark class="highlight">2,400万円〜6,200万円</mark>と大きく差が出ます',
  '公的施設（特養）は20年で<mark class="highlight">約2,400万円</mark>と最も費用が抑えられます',
  '介護保険や補助制度を活用すると<mark class="highlight">自己負担を大幅に軽減</mark>できます',
  '早めに施設を探すことで、<mark class="highlight">費用の安い施設に入りやすく</mark>なります',
]

export default function SimulationPage() {
  const [selectedYear, setSelectedYear] = useState(20)

  return (
    <>
      <Breadcrumb items={[
        { label: '老人ホームの種類', href: '/types' },
        { label: '20年費用シミュレーション' },
      ]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        もしも20年施設を利用した場合の予算はどれくらい？徹底シミュレーション
      </h1>

      <SummaryBox items={summaryItems} />

      <p className="text-base mb-6">
        「老人ホームに入ったら、トータルでいくらかかるの？」
        この疑問はとても重要です。
        ここでは6種類の施設について、5年・10年・15年・20年の費用をグラフで比較します。
      </p>

      {/* 計算条件 */}
      <div className="rounded-xl p-5 mb-8 text-base" style={{ background: '#F3F4F6', border: '1px solid #e5e7eb' }}>
        <p className="font-bold mb-2">📌 計算の前提条件</p>
        <ul className="space-y-1 text-gray-700">
          <li>・月額費用は各施設タイプの<strong>平均的な金額</strong>を使用</li>
          <li>・介護保険の自己負担（1割）を含んだ金額です</li>
          <li>・物価上昇・介護保険制度の改定は考慮していません</li>
          <li>・あくまで<strong>目安の試算</strong>です。実際の費用は施設により異なります</li>
        </ul>
        {/* 施設の種類ページへの遷移リンク */}
        <Link
          href="/types"
          className="flex items-center gap-3 mt-4 px-4 py-3 rounded-xl transition hover:opacity-80"
          style={{ background: '#E8F5E9', border: '1px solid #2E7D52', textDecoration: 'none', color: 'inherit' }}
        >
          <span className="text-xl flex-shrink-0">🏠</span>
          <div className="flex-1">
            <span className="text-base font-bold text-primary">各施設の特徴・入居条件を詳しく知りたい方へ</span>
            <span className="block text-sm text-gray-600">→ 老人ホームの種類と違いを完全解説</span>
          </div>
          <span className="text-primary font-bold flex-shrink-0">→</span>
        </Link>
      </div>

      {/* 色の見方 */}
      <div className="flex items-center gap-4 rounded-xl px-5 py-3 mb-6 flex-wrap" style={{ background: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <span className="text-sm font-bold text-gray-500">色の見方：</span>
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded" style={{ background: '#2E7D52' }} />
          <span className="text-sm font-bold" style={{ color: '#2E7D52' }}>緑系 ＝ 公的施設</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded" style={{ background: '#F57C00' }} />
          <span className="text-sm font-bold" style={{ color: '#E65100' }}>オレンジ系 ＝ 民間施設</span>
        </div>
      </div>

      {/* ① 棒グラフ：年数切り替え */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-6 text-primary">
        施設タイプ別 総費用の比較
      </h2>
      <p className="text-base mb-4">利用年数を選んで比較できます。</p>

      {/* 年数タブ */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {years.map(yr => (
          <button
            key={yr}
            onClick={() => setSelectedYear(yr)}
            className="px-5 py-2 rounded-full font-bold text-base transition"
            style={{
              background: selectedYear === yr ? '#2E7D52' : '#E8F5E9',
              color: selectedYear === yr ? '#fff' : '#2E7D52',
              border: '2px solid #2E7D52',
              minHeight: '44px',
            }}
          >
            {yr}年間
          </button>
        ))}
      </div>

      <div className="rounded-2xl p-6 bg-white border border-gray-200 mb-10">
        <p className="text-base font-bold text-center mb-6 text-gray-600">
          ▼ {selectedYear}年間の総費用（初期費用＋月額合計）
        </p>
        <BarChart year={selectedYear} />
      </div>

      <CTABox compact />

      {/* ② 折れ線グラフ：累計推移 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12 text-primary">
        年数ごとの累計費用の推移
      </h2>
      <p className="text-base mb-4">
        施設に入居してから年月が経つほど、施設タイプによる差が広がります。
        長期利用になるほど、<mark className="highlight">施設選びの影響が大きくなる</mark>ことがわかります。
      </p>
      <div className="rounded-2xl p-6 bg-white border border-gray-200 mb-10">
        <LineChart />
      </div>

      {/* ③ 積み上げ棒グラフ：初期費用 vs 月額 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12 text-primary">
        20年間の「初期費用」と「月額合計」の内訳
      </h2>
      <p className="text-base mb-4">
        薄いオレンジが入居時に払う初期費用（入居一時金）、濃い色の部分が20年分の月額費用の合計です。
        <span style={{ color: '#2E7D52', fontWeight: 700 }}>緑系＝公的施設</span>、
        <span style={{ color: '#E65100', fontWeight: 700 }}>オレンジ系＝民間施設</span>で色分けしています。
        初期費用が高い施設でも、月額が安ければ長期的に有利になる場合があります。
      </p>
      <div className="rounded-2xl p-6 bg-white border border-gray-200 mb-10">
        <StackedBar />
      </div>

      {/* ④ 数値一覧表 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12 text-primary">
        詳細な数値一覧（20年シミュレーション）
      </h2>
      <div className="table-wrapper mb-10">
        <table className="w-full border-collapse text-base">
          <thead>
            <tr className="bg-primary text-white">
              <th className="text-left">施設タイプ</th>
              <th className="text-right">月額目安</th>
              <th className="text-right">初期費用</th>
              <th className="text-right">10年総額</th>
              <th className="text-right">20年総額</th>
            </tr>
          </thead>
          <tbody>
            {facilities.map((f, i) => (
              <tr key={f.name} className={i % 2 === 0 ? 'border-b border-gray-200' : 'border-b border-gray-200 bg-gray-50'}>
                <td>
                  <div className="flex items-center gap-2">
                    <TypeBadge isPublic={f.isPublic} />
                    <span className="font-bold" style={{ color: f.color }}>{f.name}</span>
                  </div>
                </td>
                <td className="text-right">{f.monthly}万円</td>
                <td className="text-right">{f.initial === 0 ? '0円' : `${f.initial}万円〜`}</td>
                <td className="text-right">{calcTotal(f.monthly, f.initial, 10).toLocaleString()}万円</td>
                <td className="text-right font-bold">{calcTotal(f.monthly, f.initial, 20).toLocaleString()}万円</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ⑤ 費用を抑えるポイント */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12 text-primary">
        長期でみた費用を抑える3つのポイント
      </h2>
      <div className="space-y-4 mb-10">
        <div className="rounded-xl p-5 bg-white border-l-4 border-primary">
          <p className="font-bold text-base mb-1">① 特養の待機リストに早めに登録する</p>
          <p className="text-base">
            特養は月額が最も安いですが、入居待ちが長い施設です。
            要介護3以上になったら、すぐに申し込みを入れておきましょう。
            待機中は有料老人ホームやサ高住を利用する方法もあります。
          </p>
        </div>
        <div className="rounded-xl p-5 bg-white border-l-4 border-accent">
          <p className="font-bold text-base mb-1">② 補足給付制度（低所得者向け補助）を活用する</p>
          <p className="text-base">
            世帯年収や貯蓄額によって、食費・居住費の補助が受けられます。
            市区町村の窓口で申請できます。
            活用すると月額を<mark className="highlight">数万円単位で抑えられる</mark>場合があります。
          </p>
        </div>
        <div className="rounded-xl p-5 bg-white border-l-4 border-link">
          <p className="font-bold text-base mb-1">③ 入居一時金なしの施設を選ぶ</p>
          <p className="text-base">
            初期費用（入居一時金）が0円の施設も多くあります。
            まとまった資金を一度に払わなくて済むため、資産を長期で守りやすくなります。
          </p>
        </div>
      </div>

      {/* まとめ */}
      <div
        className="rounded-2xl p-6 mb-10"
        style={{ background: 'linear-gradient(135deg, #E8F5E9, #F1F8E9)', border: '2px solid #2E7D52' }}
      >
        <p className="font-bold text-lg mb-3 text-primary">📊 シミュレーションのまとめ</p>
        <ul className="space-y-2 text-base">
          <li>・20年間では施設タイプにより<mark className="highlight">最大3,800万円以上の差</mark>が生まれます</li>
          <li>・費用を抑えたいなら特養が最善ですが、早めの行動が必要です</li>
          <li>・実際の費用は要介護度・部屋タイプ・地域で変わります</li>
          <li>・まず無料の相談窓口で自分の条件に合った施設を探しましょう</li>
        </ul>
      </div>

      <CTABox />
    </>
  )
}
