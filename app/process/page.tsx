import type { Metadata } from 'next'
import Image from 'next/image'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '老人ホームへの入居の流れ【ステップ別に解説】',
  description: '老人ホームへの入居までの流れをステップ別に解説。必要書類や手続きも含めて初めての方にわかりやすく説明します。',
  openGraph: {
    title: '老人ホームへの入居の流れ【ステップ別に解説】',
    description: '老人ホームへの入居までの流れをステップ別に解説。必要書類や手続きも含めて初めての方にわかりやすく説明します。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'website',
  },
}

const summaryItems = [
  '入居までの流れは大きく<mark class="highlight">5つのステップ</mark>です',
  '申し込みから入居まで、早くて<mark class="highlight">1〜2ヶ月</mark>かかります',
  '人気の施設は<mark class="highlight">空き待ち</mark>になることが多いため、早めの行動が大切です',
  '<mark class="highlight">無料の相談窓口</mark>を使うと探す時間を大幅に短縮できます',
]

const steps = [
  {
    number: 1,
    title: '情報収集・施設探し',
    content: '要介護度と予算を確認し、希望条件（立地・サービス・費用）をまとめましょう。インターネットや無料の相談窓口を活用すると効率的です。',
    tips: ['要介護認定を先に受けておきましょう', '複数の施設を候補に挙げましょう', '無料相談窓口の活用がおすすめです'],
  },
  {
    number: 2,
    title: '見学・体験入居',
    content: '候補施設に連絡して見学の予約をしましょう。できれば体験入居も申し込むと、実際の生活イメージをつかめます。',
    tips: ['平日・休日両方で見学するのがおすすめです', 'チェックリストを持参しましょう', '食事の見学もお願いしてみましょう'],
  },
  {
    number: 3,
    title: '申し込み・審査',
    content: '入居を希望する施設に申し込みます。施設側による健康状態や介護度の審査があります。人気施設は待機になることもあります。',
    tips: ['複数施設に同時申し込みも可能です', '審査結果まで1〜4週間かかります', '待機の場合は順番待ち番号を確認しましょう'],
  },
  {
    number: 4,
    title: '契約・入居準備',
    content: '入居が決まったら重要事項説明書の説明を受け、契約を結びます。その後、引越しの準備や必要書類の手続きを進めます。',
    tips: ['重要事項説明書は必ず熟読しましょう', '契約後14日以内はクーリングオフが可能です', '持ち込み可能な荷物を事前に確認しましょう'],
  },
  {
    number: 5,
    title: '入居当日',
    content: '入居日に施設スタッフと合流し、居室への荷物搬入・施設内の案内を受けます。慣れない環境でのストレスを軽減するため、家族の付き添いが大切です。',
    tips: ['当日は余裕を持ったスケジュールで', '家族も一緒に付き添いましょう', '入居後しばらくは頻繁に面会しましょう'],
  },
]

export default function ProcessPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '入居の流れ' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホームへの入居までの流れ｜手続き・必要書類を徹底解説
      </h1>
      <SummaryBox items={summaryItems} />

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <Image
          src="/images/checklist.jpg"
          alt="老人ホーム入居手続きのイメージ"
          width={600}
          height={400}
          style={{ width: '50%', height: 'auto', borderRadius: '12px' }}
          priority
        />
      </div>

      {/* 公的 vs 民間：入居までの期間の違い */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        公的施設と民間施設では「待機期間」が大きく違う
      </h2>
      <p className="text-base mb-5">
        入居までの流れは基本的に同じですが、<strong>申し込みから入居までの期間</strong>が施設タイプによって大きく異なります。
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="rounded-2xl p-5" style={{ background: '#E8F5E9', border: '2px solid #2E7D52' }}>
          <div className="flex items-center gap-2 mb-3">
            <span style={{ fontSize: '18px' }}>🏛</span>
            <span style={{ fontWeight: 800, fontSize: '16px', color: '#1B5E37' }}>公的施設（特養など）</span>
            <span style={{ marginLeft: 'auto', background: '#2E7D52', color: '#fff', fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '20px' }}>緑</span>
          </div>
          <p style={{ fontSize: '28px', fontWeight: 900, color: '#2E7D52', marginBottom: '4px' }}>数ヶ月〜数年</p>
          <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.65 }}>
            特養は人気が高く待機期間が長いのが特徴です。
            要介護3以上になったらすぐ申し込み、
            <strong>待機中は民間施設を利用</strong>するのが現実的な選択です。
          </p>
          <div className="mt-3 rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.6)' }}>
            <p style={{ fontSize: '12px', color: '#2E7D52', fontWeight: 700 }}>💡 複数の施設に同時申し込みできます</p>
          </div>
        </div>
        <div className="rounded-2xl p-5" style={{ background: '#FFF3E0', border: '2px solid #F57C00' }}>
          <div className="flex items-center gap-2 mb-3">
            <span style={{ fontSize: '18px' }}>🏢</span>
            <span style={{ fontWeight: 800, fontSize: '16px', color: '#BF360C' }}>民間施設（有料など）</span>
            <span style={{ marginLeft: 'auto', background: '#F57C00', color: '#fff', fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '20px' }}>オレンジ</span>
          </div>
          <p style={{ fontSize: '28px', fontWeight: 900, color: '#E65100', marginBottom: '4px' }}>2週間〜2ヶ月</p>
          <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.65 }}>
            民間施設は空室があればすぐに入居できます。
            急いで施設を探したい場合や、
            <strong>特養待機中の一時的な入居先</strong>としても利用されます。
          </p>
          <div className="mt-3 rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.6)' }}>
            <p style={{ fontSize: '12px', color: '#E65100', fontWeight: 700 }}>💡 緊急の場合もまず相談を</p>
          </div>
        </div>
      </div>

      {/* ステップ概要 */}
      <h2 className="text-xl md:text-2xl font-bold mb-6 mt-10 text-primary">
        入居までの全体の流れ（5ステップ）
      </h2>
      <div className="flex flex-col mb-10" style={{ gap: 0 }}>
        {steps.map((step, i) => (
          <div key={step.number}>
            <div className="flex items-center gap-3">
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-full font-bold text-white text-base"
                style={{ width: '40px', height: '40px', minWidth: '40px', background: '#2E7D52', fontSize: '15px' }}
              >
                {step.number}
              </div>
              <div className="flex-1 rounded-xl px-4 py-3 bg-white font-bold text-base" style={{ border: '1px solid #e5e7eb' }}>
                STEP {step.number}：{step.title}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ marginLeft: '19px', width: '2px', height: '20px', background: '#A5D6A7' }} />
            )}
          </div>
        ))}
      </div>

      {steps.map((step) => (
        <section key={step.number} className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 flex items-center gap-3" style={{ color: '#2E7D52' }}>
            <span
              className="flex items-center justify-center rounded-full text-white font-bold flex-shrink-0"
              style={{ width: '36px', height: '36px', background: '#2E7D52', fontSize: '16px' }}
            >
              {step.number}
            </span>
            {step.title}
          </h2>
          <p className="text-base mb-4">{step.content}</p>
          <div className="rounded-xl p-5 bg-white border border-gray-200">
            <p className="font-bold text-base mb-2 text-primary">💡 ポイント</p>
            <ul className="space-y-1">
              {step.tips.map((tip) => (
                <li key={tip} className="text-base">・{tip}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* 必要書類一覧 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        入居に必要な主な書類
      </h2>
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        <div className="rounded-xl p-4" style={{ background: '#E8F5E9', border: '1px solid #A5D6A7' }}>
          <p className="font-bold mb-3" style={{ color: '#1B5E37' }}>🏛 公的施設（特養・老健など）</p>
          <ul className="text-sm space-y-1.5" style={{ color: '#333' }}>
            {['介護保険証', '要介護認定通知書', '医師の意見書・診断書', '健康診断書', '住民票', '身元保証人の書類', '収入・資産に関する書類'].map(doc => (
              <li key={doc} className="flex items-start gap-1.5">
                <span style={{ color: '#2E7D52', flexShrink: 0 }}>✓</span>{doc}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl p-4" style={{ background: '#FFF3E0', border: '1px solid #FFCC80' }}>
          <p className="font-bold mb-3" style={{ color: '#BF360C' }}>🏢 民間施設（有料・サ高住など）</p>
          <ul className="text-sm space-y-1.5" style={{ color: '#333' }}>
            {['介護保険証（要介護認定がある場合）', '医師の診断書・健康診断書', '住民票', '身元保証人の書類', '緊急連絡先の書類'].map(doc => (
              <li key={doc} className="flex items-start gap-1.5">
                <span style={{ color: '#F57C00', flexShrink: 0 }}>✓</span>{doc}
              </li>
            ))}
          </ul>
          <p className="text-xs mt-3 text-gray-500">※民間施設は施設によって異なります。事前に確認を。</p>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        入居相談を無料でできるサービスとは
      </h2>
      <CTABox />
    </>
  )
}
