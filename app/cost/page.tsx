import type { Metadata } from 'next'
import Image from 'next/image'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '老人ホームの費用はいくら？月額・初期費用の相場を解説',
  description: '老人ホームの月額費用・入居一時金などの相場をタイプ別に解説。費用を抑えるポイントも紹介します。',
  openGraph: {
    title: '老人ホームの費用はいくら？月額・初期費用の相場を解説',
    description: '老人ホームの月額費用・入居一時金などの相場をタイプ別に解説。費用を抑えるポイントも紹介します。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'website',
  },
}

const summaryItems = [
  '費用は「<mark class="highlight">初期費用（入居一時金）</mark>」と「<mark class="highlight">月額費用</mark>」の2つで考えます',
  '月額費用の目安は特養で<mark class="highlight">5〜15万円</mark>、有料老人ホームで<mark class="highlight">15〜30万円</mark>です',
  '介護保険（要介護認定を受けた方が使える保険）で費用を<mark class="highlight">抑えられます</mark>',
  '施設によって費用が大きく異なるため、<mark class="highlight">複数の見積もり</mark>を取りましょう',
]

const publicFacilities = [
  { name: '特別養護老人ホーム（特養）', initial: '0円', monthly: '5〜15万円', note: '費用最安・待機あり' },
  { name: '介護老人保健施設（老健）', initial: '0円', monthly: '8〜15万円', note: 'リハビリ目的・短期入居' },
  { name: '介護医療院', initial: '0円', monthly: '10〜20万円', note: '医療ケアが充実' },
]

const privateFacilities = [
  { name: '介護付き有料老人ホーム', initial: '0〜数千万円', monthly: '15〜30万円', note: 'サービス充実・即入居可' },
  { name: '住宅型有料老人ホーム', initial: '0〜数百万円', monthly: '10〜25万円', note: '外部サービス利用型' },
  { name: 'グループホーム', initial: '0〜100万円', monthly: '15〜25万円', note: '認知症専門・少人数' },
  { name: 'サービス付き高齢者向け住宅', initial: '0〜数十万円', monthly: '10〜30万円', note: '自由度高め・賃貸形式' },
]

export default function CostPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '費用・料金' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホームの費用・料金の相場をタイプ別に解説
      </h1>
      <SummaryBox items={summaryItems} />

      <div className="relative w-full rounded-2xl overflow-hidden mb-8" style={{ height: '200px' }}>
        <Image
          src="/images/cost.jpg"
          alt="老人ホームの費用・料金のイメージ"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div
          className="absolute inset-0 flex items-end p-5"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }}
        >
          <p className="text-white text-sm">費用は施設の種類によって大きく異なります</p>
        </div>
      </div>

      <div className="relative w-full rounded-2xl overflow-hidden mb-8" style={{ height: '250px' }}>
        <Image
          src="/images/21.png"
          alt="老人ホームの初期費用・月額費用の内訳と相場をわかりやすく図解"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        老人ホームの費用は「初期費用」と「月額費用」の2種類
      </h2>
      <p className="text-base mb-4">
        老人ホームの費用を考えるときは、大きく2つに分けて考えましょう。
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="rounded-xl p-6 bg-white border-2 border-primary">
          <h3 className="text-lg font-bold mb-2 text-primary">① 初期費用（入居一時金）</h3>
          <p className="text-base">入居時に一括で支払う費用です。0円〜数千万円まで幅があります。施設の豪華さや立地によって大きく異なります。</p>
        </div>
        <div className="rounded-xl p-6 bg-white border-2 border-accent">
          <h3 className="text-lg font-bold mb-2 text-accent">② 月額費用</h3>
          <p className="text-base">毎月かかる費用です。家賃・食費・介護サービス費などが含まれます。要介護度が高いほど費用が上がる傾向があります。</p>
        </div>
      </div>

      {/* 色の見方 */}
      <div className="flex items-center gap-4 rounded-xl px-5 py-3 mb-6 flex-wrap" style={{ background: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <span className="text-sm font-bold text-gray-500">色の見方：</span>
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded" style={{ background: '#2E7D52' }} />
          <span className="text-sm font-bold" style={{ color: '#2E7D52' }}>緑 ＝ 公的施設（国・自治体運営）</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded" style={{ background: '#F57C00' }} />
          <span className="text-sm font-bold" style={{ color: '#E65100' }}>オレンジ ＝ 民間施設</span>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-6 text-primary">
        タイプ別の月額費用の相場
      </h2>

      {/* 公的施設テーブル */}
      <div className="mb-4">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-t-xl"
          style={{ background: 'linear-gradient(135deg, #1B5E37, #2E7D52)' }}
        >
          <span style={{ fontSize: '16px' }}>🏛</span>
          <span style={{ color: '#fff', fontWeight: 800, fontSize: '15px' }}>公的施設</span>
          <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px' }}>（国・自治体が運営）</span>
          <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: 700 }}>費用◎　待機あり</span>
        </div>
        <div className="rounded-b-xl overflow-hidden" style={{ border: '2px solid #2E7D52', borderTop: 'none' }}>
          <table className="w-full border-collapse text-base">
            <thead>
              <tr style={{ background: '#E8F5E9' }}>
                <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>施設タイプ</th>
                <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>初期費用</th>
                <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>月額費用</th>
                <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>特徴</th>
              </tr>
            </thead>
            <tbody>
              {publicFacilities.map((f, i) => (
                <tr key={f.name} style={{ background: i % 2 === 0 ? '#fff' : '#F9FBF9', borderTop: '1px solid #e5e7eb' }}>
                  <td className="px-4 py-3 font-bold" style={{ color: '#2E7D52' }}>{f.name}</td>
                  <td className="px-4 py-3">{f.initial}</td>
                  <td className="px-4 py-3 font-bold">{f.monthly}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{f.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 民間施設テーブル */}
      <div className="mb-8">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-t-xl"
          style={{ background: 'linear-gradient(135deg, #BF360C, #F57C00)' }}
        >
          <span style={{ fontSize: '16px' }}>🏢</span>
          <span style={{ color: '#fff', fontWeight: 800, fontSize: '15px' }}>民間施設</span>
          <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px' }}>（民間企業が運営）</span>
          <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: 700 }}>即入居◎　費用高め</span>
        </div>
        <div className="rounded-b-xl overflow-hidden" style={{ border: '2px solid #F57C00', borderTop: 'none' }}>
          <table className="w-full border-collapse text-base">
            <thead>
              <tr style={{ background: '#FFF3E0' }}>
                <th className="text-left px-4 py-2.5" style={{ color: '#BF360C', fontSize: '13px' }}>施設タイプ</th>
                <th className="text-left px-4 py-2.5" style={{ color: '#BF360C', fontSize: '13px' }}>初期費用</th>
                <th className="text-left px-4 py-2.5" style={{ color: '#BF360C', fontSize: '13px' }}>月額費用</th>
                <th className="text-left px-4 py-2.5" style={{ color: '#BF360C', fontSize: '13px' }}>特徴</th>
              </tr>
            </thead>
            <tbody>
              {privateFacilities.map((f, i) => (
                <tr key={f.name} style={{ background: i % 2 === 0 ? '#fff' : '#FFFAF5', borderTop: '1px solid #e5e7eb' }}>
                  <td className="px-4 py-3 font-bold" style={{ color: '#E65100' }}>{f.name}</td>
                  <td className="px-4 py-3">{f.initial}</td>
                  <td className="px-4 py-3 font-bold">{f.monthly}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{f.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        費用を左右する3つのポイント
      </h2>
      <div className="space-y-4 mb-8">
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">① 要介護度（介護の必要度合い）</p>
          <p className="text-base">要介護度が高いほど、介護サービス費が増えます。要介護5の場合は要介護1より月額が高くなる傾向があります。</p>
        </div>
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">② 立地・エリア</p>
          <p className="text-base">都市部ほど家賃が高くなります。同じサービスでも地方と都市では月額が異なる場合があります。</p>
        </div>
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">③ 部屋の種類（個室か多床室か）</p>
          <p className="text-base">個室は費用が高くなりますが、プライバシーが守られます。多床室は費用を抑えられます。</p>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        介護保険が使えるケース
      </h2>
      <p className="text-base mb-4">
        要介護認定を受けている方は、介護保険を使って費用を軽減できます。
        自己負担額は所得によって<mark className="highlight">1〜3割</mark>となります。
      </p>
      <p className="text-base mb-8">
        また、「高額介護サービス費制度」を利用すると、
        月額の自己負担が一定金額を超えた分が払い戻される場合があります。
        収入が少ない方は積極的に活用しましょう。
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        費用を抑えるための5つのコツ
      </h2>
      <div className="space-y-3 mb-8">
        {[
          { badge: '公的', color: '#2E7D52', bg: '#E8F5E9', border: '#A5D6A7', text: '公的施設を検討する：特養や老健は民間より費用が安い。ただし要介護3以上の条件あり。' },
          { badge: '共通', color: '#555', bg: '#F9FAFB', border: '#e5e7eb', text: '入居一時金なしの施設を選ぶ：初期費用の負担を減らせます。' },
          { badge: '共通', color: '#555', bg: '#F9FAFB', border: '#e5e7eb', text: '介護保険の限度額内でサービスを使う：超過分は全額自己負担になります。' },
          { badge: '公的', color: '#2E7D52', bg: '#E8F5E9', border: '#A5D6A7', text: '多床室（相部屋）を選ぶ：特養などの多床室は個室より月額を抑えられます。' },
          { badge: '共通', color: '#555', bg: '#F9FAFB', border: '#e5e7eb', text: '補足給付（介護保険の補助）を申請する：低所得の方は食費・居住費の補助を受けられます。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-4 flex items-start gap-3" style={{ background: item.bg, border: `1px solid ${item.border}` }}>
            <span
              style={{
                background: item.color,
                color: '#fff',
                fontSize: '11px',
                fontWeight: 800,
                padding: '2px 7px',
                borderRadius: '20px',
                flexShrink: 0,
                marginTop: '2px',
              }}
            >
              {item.badge}
            </span>
            <p className="text-base"><strong>{i + 1}. </strong>{item.text}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        無料で費用の詳細を確認する方法
      </h2>
      <CTABox />
    </>
  )
}
