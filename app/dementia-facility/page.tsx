import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateBlock from '@/components/AffiliateBlock'

export const metadata: Metadata = {
  title: '認知症の親に合った施設の選び方｜グループホームvs有料老人ホーム比較',
  description: '認知症の方が入居できる施設の種類・選び方・費用を比較解説。グループホーム・認知症対応の有料老人ホーム・特養など、進行度別の選択肢を紹介します。',
  openGraph: {
    title: '認知症の親に合った施設の選び方｜グループホームvs有料老人ホーム比較',
    description: '認知症の方向けの施設の種類・選び方・費用を比較解説します。',
    siteName: 'やさしい老人ホームガイド', locale: 'ja_JP', type: 'article',
  },
}

const summaryItems = [
  '認知症の方向けの主な施設は<mark class="highlight">グループホーム・介護付き有料老人ホーム・特養</mark>',
  'グループホームは<mark class="highlight">軽〜中度の認知症専門</mark>で家庭的な環境が特徴',
  '<mark class="highlight">BPSD（徘徊・興奮・夜間せん妄）</mark>への対応力は施設ごとに大きく異なります',
  '認知症が<mark class="highlight">進行する前に情報収集・見学</mark>を始めるのが鉄則です',
]

const facilities = [
  { name: 'グループホーム', badge: '認知症専門', badgeColor: '#7B1FA2', fee: '月額13〜20万円', color: '#F3E5F5', border: '#7B1FA2',
    for: '軽〜中度の認知症で、ある程度の自立度がある方', merit: '少人数で家庭的。専門スタッフによる認知症ケア。入居者との関係で症状が落ち着くことも',
    demerit: '身体的介護が重くなると退所が必要な場合あり。エリアによっては空きが少ない' },
  { name: '介護付き有料老人ホーム（認知症対応）', badge: '24時間対応', badgeColor: '#F57C00', fee: '月額18〜40万円', color: '#FFF3E0', border: '#F57C00',
    for: '中〜重度の認知症で医療的ケアも必要な方', merit: '終身利用可能。看護師常駐で医療対応も充実。認知症専門フロアがある施設も増えている',
    demerit: '費用が高め。施設によって認知症対応の質に差がある' },
  { name: '特別養護老人ホーム（特養）', badge: '費用が安い', badgeColor: '#1A5E9E', fee: '月額6〜15万円', color: '#E3F2FD', border: '#1A5E9E',
    for: '要介護3以上で低所得の方', merit: '費用が最も安く、終身入居できる。介護保険の補足給付が使えれば更に安くなる',
    demerit: '全国27万人の待機者がいて入居まで数年かかることも' },
]

const checkPoints = [
  '夜間の対応体制（夜勤スタッフ数・1人あたり何人を担当）',
  '徘徊防止の設備（センサーマット・ドアロック・カメラ）',
  '認知症ケアの専門研修を受けたスタッフがいるか',
  '家族への連絡頻度・報告の仕組み',
  '状態が重くなった場合も住み続けられるか',
  '薬の管理・服薬支援の体制',
]

export default function DementiaFacilityPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '認知症の親に合った施設の選び方' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        認知症の親に合った施設の選び方<br className="md:hidden" />｜グループホームvsその他の比較
      </h1>
      <p className="text-sm text-gray-500 mb-6">更新：2026年4月 ｜ やさしい老人ホームガイド編集部</p>
      <SummaryBox items={summaryItems} />

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <Image
          src="/images/19.png"
          alt="認知症の高齢者に介護スタッフが食事介助をしている施設のイメージ"
          width={600}
          height={400}
          style={{ width: '50%', height: 'auto', borderRadius: '12px' }}
          priority
        />
      </div>

      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#F3E5F5', border: '2px solid #7B1FA2' }}>
        <p className="text-base"><strong>認知症の方の施設選びで最も大切なのは、「今の状態」だけでなく「進行後も安心できるか」を見ること</strong>です。入居時は軽度でも、数年後には重度になる可能性を踏まえて施設を選びましょう。</p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">認知症の進行度別おすすめ施設</h2>
      <div className="space-y-5 mb-10">
        {facilities.map((f, i) => (
          <div key={i} className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${f.border}` }}>
            <div className="px-5 py-3 flex flex-wrap items-center gap-2" style={{ backgroundColor: f.color }}>
              <p className="font-bold text-base">{f.name}</p>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: f.badgeColor }}>{f.badge}</span>
              <span className="ml-auto text-sm font-bold" style={{ color: f.badgeColor }}>{f.fee}</span>
            </div>
            <div className="px-5 py-4 bg-white space-y-2">
              <p className="text-sm"><span className="font-bold">対象：</span>{f.for}</p>
              <p className="text-sm"><span className="font-bold" style={{ color: f.badgeColor }}>◆ メリット：</span>{f.merit}</p>
              <p className="text-sm"><span className="font-bold text-gray-500">▲ 注意点：</span>{f.demerit}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">見学時に確認すべきポイント</h2>
      <div className="rounded-xl p-5 mb-10 bg-white" style={{ border: '1px solid #e5e7eb' }}>
        <ul className="space-y-2">
          {checkPoints.map((pt, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span className="font-bold flex-shrink-0" style={{ color: '#7B1FA2' }}>□</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>

      <AffiliateBlock>
        <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #F3E5F5, #E1BEE7)', border: '2px solid #7B1FA2' }}>
          <p className="font-bold text-lg mb-2" style={{ color: '#4A148C' }}>認知症対応施設を無料で探す</p>
          <p className="text-sm mb-4 text-gray-700">認知症対応・グループホームなど、条件を絞って施設を検索・資料請求できます。</p>
          <div className="flex flex-col items-center gap-1">
            <a href="https://www.minnanokaigo.com/" target="_blank" rel="noopener noreferrer"
              style={{ display:'flex',alignItems:'center',justifyContent:'center',background:'#7B1FA2',color:'#fff',fontWeight:700,fontSize:'16px',borderRadius:'10px',padding:'14px 24px',textDecoration:'none',boxShadow:'0 3px 10px rgba(123,31,162,0.35)',width:'100%',maxWidth:'480px' }}>
              認知症対応施設を無料で探す →
            </a>
            <span style={{ fontSize: '11px', color: '#999' }}>※広告（みんなの介護）</span>
          </div>
        </div>
      </AffiliateBlock>

      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/types', label: '施設の種類を詳しく確認する', icon: '🏠' },
          { href: '/for-you', label: '認知症が進んだ方向けの悩み別ガイド', icon: '🧠' },
        ].map(link => (
          <Link key={link.href} href={link.href} className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white" style={{ border: '1px solid #e5e7eb', textDecoration: 'none', color: 'inherit' }}>
            <span style={{ fontSize: '20px' }}>{link.icon}</span>
            <p className="font-bold text-sm" style={{ color: '#2E7D52' }}>{link.label} →</p>
          </Link>
        ))}
      </div>
      <CTABox />
    </>
  )
}
