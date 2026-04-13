import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '老人ホームの種類と違いを完全解説｜費用・特徴・選び方【図解あり】',
  description: '老人ホームの種類（特養・老健・有料など）を図解でわかりやすく解説。費用相場・選び方・おすすめの探し方まで完全網羅。',
  openGraph: {
    title: '老人ホームの種類と違いを完全解説｜費用・特徴・選び方【図解あり】',
    description: '老人ホームの種類（特養・老健・有料など）を図解でわかりやすく解説。費用相場・選び方・おすすめの探し方まで完全網羅。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

const summaryItems = [
  '老人ホームは大きく「<mark class="highlight">公的施設</mark>」と「<mark class="highlight">民間施設</mark>」の2種類に分かれます',
  '公的施設は費用が安いですが、<mark class="highlight">待機期間が長い</mark>場合があります',
  '要介護度（介護が必要な度合い）によって<mark class="highlight">入れる施設が変わります</mark>',
  'まずは<mark class="highlight">無料の相談窓口</mark>に聞くのが一番確実です',
]

// 公的施設 = green (#1B5E37 / #2E7D52)
// 民間施設 = orange (#E65100 / #F57C00)

function SectionBanner({ type }: { type: 'public' | 'private' }) {
  const isPublic = type === 'public'
  return (
    <div
      className="flex items-center gap-3 rounded-xl px-5 py-3 mb-6 mt-12"
      style={{
        background: isPublic
          ? 'linear-gradient(135deg, #1B5E37 0%, #2E7D52 100%)'
          : 'linear-gradient(135deg, #BF360C 0%, #F57C00 100%)',
      }}
    >
      <span style={{ fontSize: '22px' }}>{isPublic ? '🏛' : '🏢'}</span>
      <div>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '1px' }}>
          {isPublic ? 'PUBLIC FACILITY' : 'PRIVATE FACILITY'}
        </p>
        <p style={{ color: '#fff', fontSize: '18px', fontWeight: 800, lineHeight: 1 }}>
          {isPublic ? '公的施設' : '民間施設'}
          <span style={{ fontSize: '13px', fontWeight: 500, marginLeft: '8px', opacity: 0.85 }}>
            {isPublic ? '（国・自治体が運営）' : '（民間企業が運営）'}
          </span>
        </p>
      </div>
      <span
        style={{
          marginLeft: 'auto',
          background: 'rgba(255,255,255,0.2)',
          color: '#fff',
          fontSize: '12px',
          fontWeight: 700,
          padding: '3px 10px',
          borderRadius: '20px',
          whiteSpace: 'nowrap',
        }}
      >
        {isPublic ? '費用◎ 待機あり' : '即入居◎ 費用高め'}
      </span>
    </div>
  )
}

function FacilityH2({ children, type }: { children: React.ReactNode; type: 'public' | 'private' }) {
  const isPublic = type === 'public'
  const color = isPublic ? '#2E7D52' : '#E65100'
  const bg = isPublic ? '#E8F5E9' : '#FFF3E0'
  const badge = isPublic ? '公的' : '民間'
  const badgeBg = isPublic ? '#2E7D52' : '#F57C00'
  return (
    <h2
      className="text-xl md:text-2xl font-bold mb-4 mt-8 flex items-center gap-3"
      style={{ color }}
    >
      <span
        style={{
          background: badgeBg,
          color: '#fff',
          fontSize: '11px',
          fontWeight: 800,
          padding: '3px 8px',
          borderRadius: '6px',
          letterSpacing: '0.05em',
          flexShrink: 0,
        }}
      >
        {badge}
      </span>
      {children}
    </h2>
  )
}

function InfoList({ items, type }: { items: string[]; type: 'public' | 'private' }) {
  const isPublic = type === 'public'
  const bg = isPublic ? '#F1F8E9' : '#FFF8F3'
  const border = isPublic ? '#A5D6A7' : '#FFCC80'
  const dot = isPublic ? '#2E7D52' : '#F57C00'
  return (
    <ul
      className="rounded-xl px-5 py-4 mb-6 space-y-2"
      style={{ background: bg, border: `1px solid ${border}` }}
    >
      {items.map((item, i) => (
        <li key={i} className="text-base flex items-start gap-2">
          <span style={{ color: dot, fontWeight: 700, flexShrink: 0 }}>•</span>
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  )
}

export default function TypesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: '老人ホームの種類と違いを完全解説｜費用・特徴・選び方',
            description: '老人ホームの種類（特養・老健・有料など）を図解でわかりやすく解説。費用相場・選び方まで完全網羅。',
            author: { '@type': 'Organization', name: 'やさしい老人ホームガイド' },
            publisher: { '@type': 'Organization', name: 'やさしい老人ホームガイド' },
          }),
        }}
      />

      <Breadcrumb items={[{ label: '老人ホームの種類' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホームの種類と違いを完全解説
      </h1>
      <SummaryBox items={summaryItems} />

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <Image
          src="/images/facility.jpg"
          alt="特別養護老人ホームの特徴と費用"
          width={600}
          height={400}
          style={{ width: '50%', height: 'auto', borderRadius: '12px' }}
          priority
        />
      </div>

      <CTABox compact />

      {/* 全体概要 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        老人ホームの種類一覧
      </h2>
      <p className="text-base mb-4">
        老人ホームは大きく分けると、国や自治体が運営する「公的施設」と、
        民間企業が運営する「民間施設」の2種類があります。
        費用・入居条件・待機状況がそれぞれ異なります。
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="rounded-xl p-5" style={{ background: '#E8F5E9', border: '2px solid #2E7D52' }}>
          <p className="font-bold text-base mb-2" style={{ color: '#1B5E37' }}>🏛 公的施設（緑）</p>
          <ul className="text-base space-y-1.5" style={{ color: '#2E7D52' }}>
            <li>・特別養護老人ホーム（特養）</li>
            <li>・介護老人保健施設（老健）</li>
            <li>・介護医療院</li>
          </ul>
          <p className="text-sm mt-3 text-gray-600">費用が安い反面、待機期間が長い場合があります。</p>
        </div>
        <div className="rounded-xl p-5" style={{ background: '#FFF3E0', border: '2px solid #F57C00' }}>
          <p className="font-bold text-base mb-2" style={{ color: '#BF360C' }}>🏢 民間施設（オレンジ）</p>
          <ul className="text-base space-y-1.5" style={{ color: '#E65100' }}>
            <li>・有料老人ホーム</li>
            <li>・グループホーム</li>
            <li>・サービス付き高齢者向け住宅（サ高住）</li>
          </ul>
          <p className="text-sm mt-3 text-gray-600">施設数が多く、すぐに入居できる場合が多いです。</p>
        </div>
      </div>

      {/* ===== 公的施設セクション ===== */}
      <SectionBanner type="public" />

      <FacilityH2 type="public">特別養護老人ホーム（特養）</FacilityH2>
      <p className="text-base mb-4">
        特別養護老人ホーム（特養）は、要介護3以上の方を対象とした公的な施設です。
        月額費用は<mark className="highlight">5〜15万円</mark>と比較的安いですが、
        入居待ちが数ヶ月〜数年になることもあります。
      </p>
      <InfoList
        type="public"
        items={[
          '対象：<mark class="highlight">要介護3以上</mark>の方',
          '月額目安：5〜15万円（所得に応じて軽減制度あり）',
          '特徴：終身利用が基本、費用が最も安い',
          '注意点：人気が高く待機期間が長いことがある',
        ]}
      />

      <FacilityH2 type="public">介護老人保健施設（老健）</FacilityH2>
      <p className="text-base mb-4">
        介護老人保健施設（老健）は、退院後に在宅復帰を目指す方のための施設です。
        医療ケアとリハビリが充実しており、一時的な入居を目的としています。
        原則として3〜6ヶ月の入居期間となります。
      </p>
      <InfoList
        type="public"
        items={[
          '対象：要介護1以上の方',
          '月額目安：<mark class="highlight">8〜15万円</mark>',
          '特徴：リハビリが充実・医師常駐',
          '注意点：長期入居には向かない（在宅復帰が目的）',
        ]}
      />

      <FacilityH2 type="public">介護医療院</FacilityH2>
      <p className="text-base mb-4">
        介護医療院は、長期にわたる医療ケアと日常的な介護の両方を必要とする方向けの施設です。
        医療依存度が高い方でも安心して入居できます。
      </p>
      <InfoList
        type="public"
        items={[
          '対象：要介護1以上・医療依存度が高い方',
          '月額目安：10〜20万円',
          '特徴：医療と介護を一体的に提供',
          '注意点：施設数はまだ少ない',
        ]}
      />

      <CTABox compact />

      {/* ===== 民間施設セクション ===== */}
      <SectionBanner type="private" />

      <FacilityH2 type="private">有料老人ホームの3つの種類</FacilityH2>
      <p className="text-base mb-4">
        有料老人ホームは民間企業が運営する施設で、3種類に分かれます。
        それぞれ対象者や提供サービスが異なります。
      </p>
      <div className="space-y-3 mb-6">
        {[
          {
            title: '① 介護付き有料老人ホーム',
            desc: '介護サービスが施設に含まれています。要介護の方に向いています。月額<mark class="highlight">15〜30万円</mark>が目安です。',
          },
          {
            title: '② 住宅型有料老人ホーム',
            desc: '生活支援サービスを提供する施設です。介護が必要な場合は外部の介護サービスを使います。月額10〜25万円が目安。',
          },
          {
            title: '③ 健康型有料老人ホーム',
            desc: '比較的元気な高齢者向けの施設です。要介護になると退去が必要な場合があります。',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl p-4"
            style={{ background: '#FFF8F3', border: '1px solid #FFCC80' }}
          >
            <p className="font-bold text-base mb-1" style={{ color: '#E65100' }}>{item.title}</p>
            <p className="text-base" dangerouslySetInnerHTML={{ __html: item.desc }} />
          </div>
        ))}
      </div>

      <FacilityH2 type="private">グループホーム</FacilityH2>
      <p className="text-base mb-4">
        グループホームは、認知症の方を対象とした小規模な共同生活の施設です。
        5〜9人の少人数で生活するため、アットホームな環境で過ごせます。
      </p>
      <InfoList
        type="private"
        items={[
          '対象：<mark class="highlight">認知症の診断を受けた</mark>要支援2以上の方',
          '月額目安：15〜25万円',
          '特徴：少人数で家庭的な環境・専門的な認知症ケア',
          '注意点：重度の介護が必要になると退去の場合あり',
        ]}
      />

      <FacilityH2 type="private">サービス付き高齢者向け住宅（サ高住）</FacilityH2>
      <p className="text-base mb-4">
        サービス付き高齢者向け住宅（サ高住）は、生活支援サービスと安否確認が付いた
        高齢者向け賃貸住宅です。自立〜軽度の方向けで、自由度の高い生活を送れます。
      </p>
      <InfoList
        type="private"
        items={[
          '対象：60歳以上（自立〜軽度介護の方が中心）',
          '月額目安：10〜30万円（立地・設備により差が大きい）',
          '特徴：自由度が高い・賃貸形式で敷金あり',
          '注意点：重度化すると別施設への移転が必要になる場合あり',
        ]}
      />

      {/* 費用比較表 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12 text-primary">
        費用で比較する施設タイプ早見表
      </h2>
      <div className="rounded-2xl overflow-hidden mb-6" style={{ border: '1px solid #e5e7eb' }}>
        <table className="w-full border-collapse text-base">
          <thead>
            <tr style={{ background: '#2E7D52', color: '#fff' }}>
              <th className="text-left px-4 py-3">施設名</th>
              <th className="text-left px-4 py-3">区分</th>
              <th className="text-left px-4 py-3">月額目安</th>
              <th className="text-left px-4 py-3">特徴</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: '特養', type: 'public', target: '要介護3以上', cost: '5〜15万円', note: '費用安・待機あり' },
              { name: '老健', type: 'public', target: '要介護1以上', cost: '8〜15万円', note: 'リハビリ目的' },
              { name: '介護医療院', type: 'public', target: '要介護1以上', cost: '10〜20万円', note: '医療ケア充実' },
              { name: '介護付き有料', type: 'private', target: '要介護1以上', cost: '15〜30万円', note: 'サービス充実' },
              { name: 'グループホーム', type: 'private', target: '認知症の方', cost: '15〜25万円', note: '少人数・家庭的' },
              { name: 'サ高住', type: 'private', target: '60歳以上', cost: '10〜30万円', note: '自由度が高い' },
            ].map((row, i) => {
              const isPublic = row.type === 'public'
              return (
                <tr
                  key={i}
                  style={{
                    background: i % 2 === 0 ? '#fff' : '#FAFAFA',
                    borderTop: '1px solid #e5e7eb',
                  }}
                >
                  <td className="px-4 py-3 font-bold">{row.name}</td>
                  <td className="px-4 py-3">
                    <span
                      style={{
                        background: isPublic ? '#E8F5E9' : '#FFF3E0',
                        color: isPublic ? '#2E7D52' : '#E65100',
                        fontSize: '12px',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '20px',
                        border: `1px solid ${isPublic ? '#A5D6A7' : '#FFCC80'}`,
                      }}
                    >
                      {isPublic ? '公的' : '民間'}
                    </span>
                  </td>
                  <td className="px-4 py-3">{row.cost}</td>
                  <td className="px-4 py-3 text-gray-600 text-sm">{row.note}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <Link
        href="/simulation"
        className="flex items-center gap-4 rounded-2xl p-5 mb-10 transition hover:shadow-md"
        style={{
          background: 'linear-gradient(135deg, #E8F5E9, #FFF8E1)',
          border: '2px solid #2E7D52',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <span className="text-4xl flex-shrink-0">📊</span>
        <div className="flex-1">
          <p className="font-bold text-base text-primary mb-1">
            もしも20年施設を利用した場合の予算はどれくらい？
          </p>
          <p className="text-base text-gray-600">
            施設タイプ別に5年・10年・20年の費用をグラフで徹底シミュレーション
          </p>
        </div>
        <span className="text-primary font-bold text-lg flex-shrink-0">→</span>
      </Link>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        目的別おすすめ施設の選び方
      </h2>
      <div className="space-y-3 mb-8">
        <div className="rounded-lg p-4 bg-white border-l-4" style={{ borderColor: '#2E7D52' }}>
          <p className="font-bold text-base mb-1">💰 費用を抑えたい方</p>
          <p className="text-base">→ 特別養護老人ホーム（特養）が最安。ただし要介護3以上・待機あり。</p>
        </div>
        <div className="rounded-lg p-4 bg-white border-l-4" style={{ borderColor: '#F57C00' }}>
          <p className="font-bold text-base mb-1">🧠 認知症の方</p>
          <p className="text-base">→ グループホームが専門的ケアを提供。少人数で安心（民間施設）。</p>
        </div>
        <div className="rounded-lg p-4 bg-white border-l-4" style={{ borderColor: '#2E7D52' }}>
          <p className="font-bold text-base mb-1">🏥 退院後すぐ入りたい方</p>
          <p className="text-base">→ 介護老人保健施設（老健）が即入居しやすい（公的施設）。</p>
        </div>
        <div className="rounded-lg p-4 bg-white border-l-4" style={{ borderColor: '#F57C00' }}>
          <p className="font-bold text-base mb-1">🏡 自由な生活を続けたい方</p>
          <p className="text-base">→ サービス付き高齢者向け住宅（サ高住）が自由度高め（民間施設）。</p>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        地域で施設を探す方法
      </h2>
      <p className="text-base mb-4">
        施設は地域によって数や費用が大きく異なります。
        お住まいの地域で絞り込むと、通いやすい施設が見つかります。
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {['大阪', '東京', '神奈川', '愛知', '福岡', '北海道', '兵庫', '埼玉'].map((area) => (
          <span
            key={area}
            className="px-4 py-2 rounded-full text-base font-bold"
            style={{ backgroundColor: '#E8F5E9', color: '#2E7D52', border: '1px solid #2E7D52' }}
          >
            {area}
          </span>
        ))}
      </div>

      <CTABox />
    </>
  )
}
