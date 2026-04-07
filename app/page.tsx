import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import AffiliateBlock from '@/components/AffiliateBlock'

const NURSING_HOME_URL = 'https://www.minnanokaigo.com/'
const GARDEN_URL = 'https://px.a8.net/svt/ejp?a8mat=XXXXXX_GARDEN'
const FUNERAL_URL = 'https://px.a8.net/svt/ejp?a8mat=XXXXXX_FUNERAL'

export const metadata: Metadata = {
  title: '老人ホームの選び方ガイド｜やさしい老人ホームガイド',
  description: '老人ホーム選びで迷っているご家族へ。種類・費用・選び方を専門用語なしでわかりやすく解説します。',
  openGraph: {
    title: '老人ホームの選び方ガイド',
    description: '老人ホーム選びで迷っているご家族へ。種類・費用・選び方を専門用語なしでわかりやすく解説します。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'website',
  },
}

const summaryItems = [
  '老人ホームには<mark class="highlight">6種類</mark>あり、目的によって選び方が変わります',
  '月額費用の相場は<mark class="highlight">15〜30万円</mark>（施設タイプにより大きく異なります）',
  '入居までの流れは「探す→見学→申込→契約」の<mark class="highlight">4ステップ</mark>です',
  'まずは<mark class="highlight">無料の相談サービス</mark>を使うのが一番早い方法です',
]

export default function TopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'やさしい老人ホームガイド',
            description: '老人ホームの基礎知識を提供するガイドサイト',
          }),
        }}
      />

      {/* ヒーロー画像 */}
      <div className="relative w-full rounded-2xl overflow-hidden mb-8" style={{ height: '280px' }}>
        <Image
          src="/images/hero.jpg"
          alt="笑顔のご夫婦。老人ホーム選びのガイドサイト"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          priority
        />
        <div
          className="absolute inset-0 flex flex-col justify-end p-6"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ borderLeft: 'none', paddingLeft: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            大切な家族のために、<br />はじめての老人ホーム選びガイド
          </h1>
        </div>
      </div>

      <SummaryBox items={summaryItems} />

      <p className="text-base mb-8">
        「親が高齢になってきた」「介護が必要になった」という状況になると、
        多くのご家族が老人ホームの検討を始めます。
        でも、種類が多くて何から調べればいいかわからないですよね。
        このサイトでは、はじめての方にわかりやすく解説します。
      </p>

      {/* 状況別ショートカット */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        あなたの状況から探す
      </h2>
      <div className="grid grid-cols-2 gap-3 mb-10">
        {[
          { href: '/for-you', icon: '🏥', label: '退院後の行き先を探している',   color: '#FFF3E0', border: '#F57C00' },
          { href: '/for-you', icon: '🧠', label: '認知症が進んできた',           color: '#F3E5F5', border: '#7B1FA2' },
          { href: '/cost',    icon: '💴', label: '費用がいくらか不安',           color: '#FFF8E1', border: '#FFC107' },
          { href: '/for-you', icon: '📞', label: '遠くて介護できない',           color: '#E8F5E9', border: '#2E7D52' },
          { href: '/for-you', icon: '👴', label: '一人暮らしの親が心配',         color: '#E3F2FD', border: '#1A5E9E' },
          { href: '/for-you', icon: '😰', label: '急に介護が必要になった',       color: '#FCE4EC', border: '#C2185B' },
        ].map(({ href, icon, label, color, border }) => (
          <Link
            key={label}
            href={href}
            className="rounded-xl p-4 hover:shadow-md transition-shadow"
            style={{ textDecoration: 'none', color: 'inherit', backgroundColor: color, border: `2px solid ${border}` }}
          >
            <span style={{ fontSize: '22px' }}>{icon}</span>
            <p className="font-bold text-sm mt-1" style={{ color: border, lineHeight: 1.4 }}>{label}</p>
          </Link>
        ))}
      </div>

      {/* コンテンツ一覧グリッド */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        まず読んでほしい記事
      </h2>
      <div className="grid grid-cols-2 gap-3 mb-10">
        {[
          { href: '/types',         icon: '🏠', label: '施設の種類',       desc: '特養・有料など6種類の違い' },
          { href: '/cost',          icon: '💴', label: '費用の目安',       desc: '月額・初期費用の相場' },
          { href: '/how-to-choose', icon: '✅', label: '選び方のポイント', desc: '失敗しない7つのポイント' },
          { href: '/process',       icon: '📋', label: '入居の流れ',       desc: '申込から入居まで5ステップ' },
          { href: '/care-level',    icon: '📊', label: '要介護度とは',     desc: '認定の仕組みと違い' },
          { href: '/faq',           icon: '❓', label: 'よくある質問',     desc: '疑問をまとめて解決' },
          { href: '/simulation',    icon: '🧮', label: '費用シミュレーター', desc: '20年の費用を試算' },
          { href: '/ranking/osaka', icon: '🏆', label: '施設ランキング',     desc: '都市別TOP10を掲載' },
          { href: '/tell-parents',  icon: '👪', label: '親への伝え方',       desc: '老人ホームの魅力を伝える' },
        ].map(({ href, icon, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="rounded-xl p-4 bg-white hover:shadow-md transition-shadow"
            style={{ textDecoration: 'none', color: 'inherit', border: '1px solid #e5e7eb' }}
          >
            <span style={{ fontSize: '22px' }}>{icon}</span>
            <p className="font-bold text-sm mt-1 text-primary">{label}</p>
            <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
          </Link>
        ))}
      </div>

      {/* アフィリエイト3バナー */}
      <AffiliateBlock>
        <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
          詳しい資料請求・ご相談はこちら
        </h2>
        <div className="flex flex-col gap-4 mb-10">
          {/* みんなの介護 */}
          <div className="rounded-xl p-5" style={{ background: '#E8F5E9', border: '2px solid #2E7D52' }}>
            <p style={{ fontWeight: 700, color: '#1B5E20', marginBottom: '8px', fontSize: '15px' }}>
              🏡 老人ホーム・介護施設を無料で比較
            </p>
            <p style={{ color: '#555', fontSize: '13px', marginBottom: '12px', lineHeight: 1.7 }}>
              全国51,000件以上の施設を無料で一括資料請求。見学予約もすべて無料です。
            </p>
            <div className="flex flex-col items-center gap-1">
              <a
                href={NURSING_HOME_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#2E7D52', color: '#fff', fontWeight: 700, fontSize: '16px',
                  borderRadius: '10px', padding: '14px 24px', textDecoration: 'none',
                  boxShadow: '0 3px 10px rgba(46,125,82,0.4)', width: '100%', maxWidth: '480px',
                }}
              >
                全国51,000件の施設を無料一括資料請求 →
              </a>
              <span style={{ fontSize: '11px', color: '#999' }}>※広告（みんなの介護）</span>
            </div>
          </div>

          {/* ガーデン */}
          <div className="rounded-xl p-5" style={{ background: '#E3F2FD', border: '2px solid #1976D2' }}>
            <p style={{ fontWeight: 700, color: '#0D47A1', marginBottom: '4px', fontSize: '15px' }}>
              💴 老後・介護費用の不安をFPに無料相談
            </p>
            <p style={{ color: '#777', fontSize: '12px', marginBottom: '4px' }}>
              ※ 21歳以上・会社員・公務員の方向け（学生・無職・保険営業の方は対象外）
            </p>
            <p style={{ color: '#555', fontSize: '13px', marginBottom: '12px', lineHeight: 1.7 }}>
              プロのファイナンシャルプランナーが老後資金・介護費用の計画を無料でサポートします。
            </p>
            <div className="flex flex-col items-center gap-1">
              <a
                href={GARDEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#1565C0', color: '#fff', fontWeight: 700, fontSize: '16px',
                  borderRadius: '10px', padding: '14px 24px', textDecoration: 'none',
                  boxShadow: '0 3px 10px rgba(21,101,192,0.4)', width: '100%', maxWidth: '480px',
                }}
              >
                老後・介護費用を無料でFPに相談する（21歳以上） →
              </a>
              <span style={{ fontSize: '11px', color: '#999' }}>※広告（ガーデン）</span>
            </div>
          </div>

          {/* 家族葬のこれから */}
          <div className="rounded-xl p-5" style={{ background: '#FFF3E0', border: '2px solid #F57C00' }}>
            <p style={{ fontWeight: 700, color: '#E65100', marginBottom: '8px', fontSize: '15px' }}>
              🕊️ 葬儀の費用を抑えたい方へ
            </p>
            <p style={{ color: '#555', fontSize: '13px', marginBottom: '12px', lineHeight: 1.7 }}>
              今すぐ資料請求で葬儀費用から5万円割引。家族葬・直葬プランを比較できます。
            </p>
            <div className="flex flex-col items-center gap-1">
              <a
                href={FUNERAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#F57C00', color: '#fff', fontWeight: 700, fontSize: '16px',
                  borderRadius: '10px', padding: '14px 24px', textDecoration: 'none',
                  boxShadow: '0 3px 10px rgba(245,124,0,0.4)', width: '100%', maxWidth: '480px',
                }}
              >
                今すぐ資料請求で葬儀費用5万円割引 →
              </a>
              <span style={{ fontSize: '11px', color: '#999' }}>※広告（家族葬のこれから）</span>
            </div>
          </div>
        </div>
      </AffiliateBlock>

      <CTABox />
    </>
  )
}
