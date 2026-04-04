'use client'

import Link from 'next/link'
import { AFFILIATE_ENABLED } from '@/lib/featureFlags'

const GARDEN_URL = 'https://px.a8.net/svt/ejp?a8mat=XXXXXX_GARDEN'

function GardenCTA() {
  if (!AFFILIATE_ENABLED) return null
  return (
    <div className="rounded-2xl p-6 my-8" style={{ background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)', border: '2px solid #1976D2' }}>
      <p style={{ fontSize: '13px', color: '#1565C0', fontWeight: 700, marginBottom: '4px' }}>
        ※ 21歳以上・会社員・公務員の方向け（学生・無職・保険営業の方は対象外）
      </p>
      <p className="text-base font-bold mb-4" style={{ color: '#0D47A1' }}>
        老後・介護費用の不安を、プロのFPに無料で相談できます
      </p>
      <div className="flex flex-col items-center gap-1">
        <a
          href={GARDEN_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1565C0, #1976D2)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '17px',
            borderRadius: '12px',
            padding: '16px 32px',
            textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(21,101,192,0.4)',
            width: '100%',
            maxWidth: '480px',
            minHeight: '60px',
          }}
        >
          老後・介護費用の不安を無料でFPに相談する →
        </a>
        <span style={{ fontSize: '11px', color: '#888' }}>※広告（ガーデン）</span>
      </div>
    </div>
  )
}

const nisaData = [
  { year: '1年目', tsumitate: 30, seichо: 0, total: 30 },
  { year: '5年目', tsumitate: 150, seichо: 18, total: 168 },
  { year: '10年目', tsumitate: 300, seichо: 78, total: 378 },
  { year: '15年目', tsumitate: 450, seichо: 195, total: 645 },
  { year: '20年目', tsumitate: 600, seichо: 372, total: 972 },
]

const careCosts = [
  { type: '特別養護老人ホーム（要介護3）', monthly: '8〜15万円', years20: '約2,400万円' },
  { type: '介護老人保健施設', monthly: '8〜18万円', years20: '約3,000万円' },
  { type: 'サービス付き高齢者向け住宅', monthly: '15〜30万円', years20: '約5,400万円' },
  { type: '介護付き有料老人ホーム', monthly: '20〜40万円', years20: '約7,200万円' },
  { type: '在宅介護（要介護3）', monthly: '5〜15万円', years20: '約2,400万円' },
]

const steps = [
  {
    num: 1,
    title: '現状を把握する',
    desc: '現在の貯蓄額・毎月の収支・年金受給見込み額を確認します。年金定期便や「ねんきんネット」で60〜65歳時点の受給額を確認しましょう。',
    icon: '📊',
  },
  {
    num: 2,
    title: '目標金額を決める',
    desc: '何歳まで生きるか・どんな施設に入るかを想定し、必要資金を計算します。平均的には老後2,000〜3,000万円が目安とされています。',
    icon: '🎯',
  },
  {
    num: 3,
    title: 'NISAで長期積立を始める',
    desc: 'つみたて投資枠（年120万円）でインデックスファンドを積立。20年複利で大きく育てます。60歳までに始めるのが理想です。',
    icon: '📈',
  },
  {
    num: 4,
    title: 'iDeCoで節税しながら積立',
    desc: '掛金が全額所得控除になります。自営業なら月68,000円、会社員なら月12,000〜23,000円が上限。60歳以降に受け取れます。',
    icon: '💰',
  },
  {
    num: 5,
    title: 'FPに相談してプランを確定',
    desc: '自分だけで判断せず、専門家に相談することで最適な配分が見えてきます。無料FP相談を活用しましょう。',
    icon: '👨‍💼',
  },
]

const comparisonItems = [
  { label: '非課税期間', nisa: '無期限', ideco: '60〜75歳まで受取' },
  { label: '年間上限', nisa: '360万円（成長＋積立）', ideco: '14.4〜81.6万円（職業による）' },
  { label: '引き出し', nisa: 'いつでも可能', ideco: '原則60歳まで不可' },
  { label: '節税効果', nisa: '運用益が非課税', ideco: '掛金が所得控除＋運用益非課税' },
  { label: '向いている人', nisa: '老後資金全般・緊急資金として', ideco: '節税メリットを最大化したい人' },
]

const faqItems = [
  {
    q: 'NISA口座はどこで開設すればいい？',
    a: 'SBI証券・楽天証券・マネックス証券などのネット証券が手数料無料で使いやすいです。窓口のある銀行でも開設できますが、投資信託のラインナップが少ない場合があります。',
  },
  {
    q: '老後資金として何にいくら投資すれば良い？',
    a: '一般的には「100−年齢」%を株式に、残りを債券や現金に配分する方法が参考にされます。ただし個人の状況によって大きく異なるため、FP相談で具体的なアドバイスをもらうのが安心です。',
  },
  {
    q: '60代からでも間に合う？',
    a: '60代でも10〜20年の運用期間があれば十分効果があります。ただし、リスク許容度が下がるため、債券や安定型の商品に比重を置くのが一般的です。',
  },
  {
    q: 'NISAで損をすることはある？',
    a: 'あります。投資は元本保証ではありません。ただし、長期・分散・積立の3原則を守り、インデックスファンドで20年以上保有すれば過去のデータでは元本割れのリスクは大幅に低減されています。',
  },
]

export default function AssetPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
        {/* パンくず */}
        <nav style={{ fontSize: '13px', color: '#888', marginBottom: '16px' }}>
          <Link href="/" style={{ color: '#2E7D52', textDecoration: 'none' }}>トップ</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span>老後の資産形成</span>
        </nav>

        <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#1A1A1A', lineHeight: 1.4, marginBottom: '8px' }}>
          老後の資産形成完全ガイド<br />
          <span style={{ fontSize: '22px', color: '#1565C0' }}>介護費用込みで考えるNISA・iDeCo活用術</span>
        </h1>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>更新日：2026年3月 ｜ 監修：ファイナンシャルプランナー</p>

        {/* 冒頭CTA */}
        <GardenCTA />

        {/* リード文 */}
        <div className="rounded-xl p-5 mb-8" style={{ background: '#F3F8F5', border: '1px solid #C8E6C9' }}>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#333' }}>
            老後にかかるお金は、生活費だけではありません。<strong>介護施設への入居費・毎月の介護費・医療費</strong>も含めると、
            人生100年時代の総費用は<strong style={{ color: '#C62828' }}>5,000万〜8,000万円</strong>に達することも。
            年金だけでは到底まかなえないこの現実に、NISA・iDeCoを使った計画的な資産形成が不可欠です。
          </p>
        </div>

        {/* 介護費用の現実 */}
        <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#1A1A1A', borderLeft: '4px solid #1565C0', paddingLeft: '12px', margin: '40px 0 16px' }}>
          老人ホームにかかる費用の現実
        </h2>
        <p style={{ color: '#555', marginBottom: '16px', lineHeight: 1.8 }}>
          施設の種類によって月額費用は大きく異なります。20年間入居した場合の目安は以下のとおりです。
        </p>
        <div className="overflow-x-auto mb-8">
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: '#1565C0', color: '#fff' }}>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>施設の種類</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>月額目安</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>20年合計</th>
              </tr>
            </thead>
            <tbody>
              {careCosts.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#F5F5F5', borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px 12px', color: '#333' }}>{row.type}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', color: '#333' }}>{row.monthly}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', fontWeight: 700, color: '#C62828' }}>{row.years20}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* NISA積立シミュレーション */}
        <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#1A1A1A', borderLeft: '4px solid #1565C0', paddingLeft: '12px', margin: '40px 0 16px' }}>
          月3万円のNISA積立でどうなる？
        </h2>
        <p style={{ color: '#555', marginBottom: '8px', lineHeight: 1.8 }}>
          月3万円（年36万円）を年利5%で積立した場合のシミュレーションです（税制優遇なし比較用）。
        </p>
        <div className="rounded-xl overflow-hidden mb-4" style={{ border: '1px solid #BBDEFB' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: '#1976D2', color: '#fff' }}>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>時期</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>積立元本</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>運用益</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', background: '#0D47A1' }}>合計（NISA）</th>
              </tr>
            </thead>
            <tbody>
              {nisaData.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#E3F2FD', borderBottom: '1px solid #BBDEFB' }}>
                  <td style={{ padding: '10px 12px', textAlign: 'center', fontWeight: 700 }}>{row.year}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', color: '#555' }}>{row.tsumitate}万円</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', color: '#1565C0' }}>+{row.seichо}万円</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', fontWeight: 800, color: '#0D47A1', background: i % 2 === 0 ? '#E8F5FE' : '#D0E8FC' }}>{row.total}万円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '12px', color: '#999', marginBottom: '24px' }}>※ 年利5%で計算。投資は元本保証ではありません。実際の運用成果は異なります。</p>

        {/* グラフ（CSS棒グラフ） */}
        <div className="rounded-xl p-5 mb-8" style={{ background: '#F0F7FF', border: '1px solid #BBDEFB' }}>
          <p style={{ fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>積立金額の推移イメージ</p>
          <div className="flex flex-col gap-2">
            {nisaData.map((row, i) => (
              <div key={i} className="flex items-center gap-3">
                <span style={{ width: '48px', fontSize: '12px', color: '#555', flexShrink: 0 }}>{row.year}</span>
                <div style={{ flex: 1, background: '#E3F2FD', borderRadius: '4px', height: '24px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${(row.tsumitate / 972) * 100}%`, background: '#90CAF9', borderRadius: '4px 0 0 4px' }} />
                  <div style={{ position: 'absolute', left: `${(row.tsumitate / 972) * 100}%`, top: 0, bottom: 0, width: `${(row.seichо / 972) * 100}%`, background: '#1976D2', borderRadius: '0 4px 4px 0' }} />
                </div>
                <span style={{ width: '56px', textAlign: 'right', fontSize: '13px', fontWeight: 700, color: '#0D47A1', flexShrink: 0 }}>{row.total}万円</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-3">
            <div className="flex items-center gap-1"><div style={{ width: '16px', height: '12px', background: '#90CAF9', borderRadius: '2px' }} /><span style={{ fontSize: '11px', color: '#555' }}>積立元本</span></div>
            <div className="flex items-center gap-1"><div style={{ width: '16px', height: '12px', background: '#1976D2', borderRadius: '2px' }} /><span style={{ fontSize: '11px', color: '#555' }}>運用益（NISA非課税）</span></div>
          </div>
        </div>

        {/* NISA vs iDeCo比較 */}
        <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#1A1A1A', borderLeft: '4px solid #1565C0', paddingLeft: '12px', margin: '40px 0 16px' }}>
          NISAとiDeCoの違いを知る
        </h2>
        <div className="overflow-x-auto mb-8">
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr>
                <th style={{ padding: '10px 12px', textAlign: 'left', background: '#333', color: '#fff' }}>項目</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', background: '#1976D2', color: '#fff' }}>NISA</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', background: '#2E7D52', color: '#fff' }}>iDeCo</th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#F5F5F5', borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px 12px', fontWeight: 700, color: '#333' }}>{row.label}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', color: '#1565C0' }}>{row.nisa}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', color: '#2E7D52' }}>{row.ideco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-xl p-4 mb-8" style={{ background: '#FFF8E1', border: '1px solid #FFB300' }}>
          <p style={{ fontWeight: 700, color: '#E65100', marginBottom: '4px' }}>💡 組み合わせるのが正解</p>
          <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.8 }}>
            NISAは「いつでも引き出せる柔軟性」、iDeCoは「節税メリットの大きさ」が魅力。
            まずNISAで老後資金の土台を作り、iDeCoで節税しながら上乗せするのがベストな組み合わせです。
          </p>
        </div>

        {/* 中段CTA */}
        <GardenCTA />

        {/* 5ステップ */}
        <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#1A1A1A', borderLeft: '4px solid #1565C0', paddingLeft: '12px', margin: '40px 0 16px' }}>
          老後資産形成の5ステップ
        </h2>
        <div className="flex flex-col gap-4 mb-8">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4 rounded-xl p-5" style={{ background: '#F0F7FF', border: '1px solid #BBDEFB' }}>
              <div className="flex-shrink-0 flex flex-col items-center">
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: '#1976D2', color: '#fff', fontWeight: 800,
                  fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {step.num}
                </div>
                <span style={{ fontSize: '22px', marginTop: '6px' }}>{step.icon}</span>
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '16px', color: '#0D47A1', marginBottom: '4px' }}>{step.title}</p>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.8 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* よくある疑問 */}
        <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#1A1A1A', borderLeft: '4px solid #1565C0', paddingLeft: '12px', margin: '40px 0 16px' }}>
          よくある疑問
        </h2>
        <div className="flex flex-col gap-4 mb-8">
          {faqItems.map((item, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ border: '1px solid #BBDEFB' }}>
              <div style={{ background: '#1976D2', padding: '12px 16px' }}>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: '15px' }}>Q. {item.q}</p>
              </div>
              <div style={{ background: '#fff', padding: '12px 16px' }}>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.8 }}>A. {item.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 老後資産×老人ホーム計画 */}
        <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#1A1A1A', borderLeft: '4px solid #1565C0', paddingLeft: '12px', margin: '40px 0 16px' }}>
          老後資産と老人ホームは一緒に計画する
        </h2>
        <div className="rounded-xl p-5 mb-6" style={{ background: '#F3F8F5', border: '1px solid #C8E6C9' }}>
          <p style={{ color: '#333', lineHeight: 1.9, fontSize: '15px' }}>
            資産形成を始めるのと同時に、<strong>「いつ・どんな施設に入るか」</strong>を想定しておくことが重要です。
            月15万円の施設なら年180万円、20年で3,600万円が必要です。
            これをNISA積立でまかなうには、<strong style={{ color: '#1565C0' }}>40代から月3〜4万円の積立が目安</strong>となります。
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Link href="/simulation" style={{ textDecoration: 'none', flex: 1 }}>
            <div className="rounded-xl p-4 h-full flex items-center gap-3 transition hover:opacity-90" style={{ background: '#E8F5E9', border: '1px solid #2E7D52' }}>
              <span style={{ fontSize: '28px' }}>📊</span>
              <div>
                <p style={{ fontWeight: 700, color: '#1B5E20', marginBottom: '2px' }}>費用シミュレーター</p>
                <p style={{ fontSize: '13px', color: '#555' }}>20年間の介護費用を試算する</p>
              </div>
            </div>
          </Link>
          <Link href="/cost" style={{ textDecoration: 'none', flex: 1 }}>
            <div className="rounded-xl p-4 h-full flex items-center gap-3 transition hover:opacity-90" style={{ background: '#E3F2FD', border: '1px solid #1976D2' }}>
              <span style={{ fontSize: '28px' }}>💴</span>
              <div>
                <p style={{ fontWeight: 700, color: '#0D47A1', marginBottom: '2px' }}>費用・料金ガイド</p>
                <p style={{ fontSize: '13px', color: '#555' }}>施設ごとの費用詳細を見る</p>
              </div>
            </div>
          </Link>
        </div>

        {/* 末尾CTA */}
        <GardenCTA />

        <div style={{ marginTop: '24px', padding: '16px', background: '#F5F5F5', borderRadius: '8px' }}>
          <p style={{ fontSize: '12px', color: '#888', lineHeight: 1.7 }}>
            【免責事項】本ページの情報は一般的な資産形成の参考情報です。投資は元本保証ではありません。実際の運用・相談はご自身の責任において行ってください。掲載しているFP相談サービス（ガーデン）はアフィリエイト広告です。
          </p>
        </div>
    </div>
  )
}
