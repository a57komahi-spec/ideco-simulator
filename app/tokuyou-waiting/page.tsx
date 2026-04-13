import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateBlock from '@/components/AffiliateBlock'

export const metadata: Metadata = {
  title: '特養に入れないと言われたら？待機問題と代替施設の選び方【2026年】',
  description: '特別養護老人ホーム（特養）の全国待機者数は約27万人。入居できないと言われた方へ、老健・有料老人ホーム・サ高住など代替施設の選び方を解説します。',
  openGraph: {
    title: '特養に入れないと言われたら？待機問題と代替施設の選び方',
    description: '特養の待機者は約27万人。入居できなかった場合の代替施設と対策を解説します。',
    siteName: 'やさしい老人ホームガイド', locale: 'ja_JP', type: 'article',
  },
}

const summaryItems = [
  '特養の全国待機者数は約<mark class="highlight">27万人</mark>。希望しても入れないケースが多数',
  '要介護3以上なら<mark class="highlight">老健・介護医療院</mark>が次の選択肢になります',
  '民間の<mark class="highlight">有料老人ホーム・サ高住</mark>は空きがあり比較的すぐ入居できます',
  '特養は諦めずに<mark class="highlight">複数の施設に同時申込</mark>しながら別施設に入るのが現実的です',
]

const alternatives = [
  {
    name: '介護老人保健施設（老健）',
    badge: '公的・リハビリ重視',
    color: '#E3F2FD', border: '#1A5E9E', textColor: '#1A5E9E',
    fee: '月額8〜15万円程度',
    feature: '退院後のリハビリを目的とした施設。原則3〜6ヶ月の短期入所だが、在宅復帰が困難な場合は延長できる。',
    merit: '費用が安く、医療・リハビリ体制が充実。特養待機中の「つなぎ」として使われることが多い。',
    demerit: '長期入所を前提としていないため、定期的に退所を求められる場合がある。',
  },
  {
    name: '介護付き有料老人ホーム',
    badge: '民間・充実サービス',
    color: '#FFF3E0', border: '#F57C00', textColor: '#E65100',
    fee: '月額15〜35万円程度',
    feature: '24時間介護スタッフが常駐し、介護・食事・生活支援が一体提供される民間施設。終身利用が可能。',
    merit: '待機なしで比較的すぐ入居できる。医療・認知症対応も充実している施設が多い。',
    demerit: '費用が特養より高め。入居一時金が必要な施設もある。',
  },
  {
    name: 'サービス付き高齢者向け住宅（サ高住）',
    badge: '民間・自由度高い',
    color: '#E8F5E9', border: '#2E7D52', textColor: '#2E7D52',
    fee: '月額10〜25万円程度',
    feature: '安否確認・生活相談サービスが付いた高齢者向け賃貸住宅。介護サービスは外部から個別に利用する。',
    merit: '入居一時金が少なく費用を抑えやすい。自立度が高い方でも入れる。',
    demerit: '重度化した場合は退所が必要になるケースがある。',
  },
  {
    name: 'グループホーム',
    badge: '認知症専門',
    color: '#F3E5F5', border: '#7B1FA2', textColor: '#7B1FA2',
    fee: '月額13〜20万円程度',
    feature: '認知症の方が少人数（5〜9人）で共同生活を送る施設。専門スタッフによる認知症ケアが受けられる。',
    merit: '家庭的な環境でのケアが受けられる。認知症の進行抑制が期待できる。',
    demerit: '認知症の診断が必要。身体介護が重くなると対応できない場合がある。',
  },
]

export default function TokuyouWaitingPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '特養に入れないと言われたら' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        「特養に入れない」と言われたらどうする？<br className="md:hidden" />待機問題と代替施設の選び方
      </h1>
      <p className="text-sm text-gray-500 mb-6">更新：2026年4月 ｜ やさしい老人ホームガイド編集部</p>
      <SummaryBox items={summaryItems} />

      <div className="relative w-full rounded-2xl overflow-hidden mb-8" style={{ height: '220px' }}>
        <Image
          src="/images/2.png"
          alt="パソコンで特養の空き情報や代替施設を調べている高齢者のイメージ"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFEBEE', border: '2px solid #EF9A9A' }}>
        <p className="font-bold text-base mb-2" style={{ color: '#B71C1C' }}>⚠️ 特養の現状</p>
        <p className="text-base">
          特別養護老人ホーム（特養）は費用が安く人気が高いため、全国で約<strong>27万人</strong>が待機しています（厚生労働省調査）。
          申込から入居まで<strong>数ヶ月〜数年</strong>かかるケースが多く、「申込したがいつ入れるかわからない」状態が続くことが現実です。
        </p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">特養に入れない主な理由</h2>
      <div className="space-y-3 mb-10">
        {[
          { title: '要介護度が足りない', body: '特養は原則として要介護3以上が対象。要介護1〜2の方は申込自体ができません（特例あり）。' },
          { title: '申込者が多く順番が回ってこない', body: '人気の施設では数十〜数百人の待機リストがあります。緊急度の低い方は後回しになりがちです。' },
          { title: '希望施設が少ない・条件が厳しすぎる', body: '「自宅から近い施設のみ」に絞りすぎると、待機人数が多く何年も待つことになります。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb' }}>
            <p className="font-bold text-base mb-1">❌ {item.title}</p>
            <p className="text-sm text-gray-600">{item.body}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">特養が難しい場合の代替施設4選</h2>
      <div className="space-y-5 mb-10">
        {alternatives.map((alt, i) => (
          <div key={i} className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${alt.border}` }}>
            <div className="px-5 py-3 flex items-center gap-3" style={{ backgroundColor: alt.color }}>
              <p className="font-bold text-base">{alt.name}</p>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: alt.border }}>{alt.badge}</span>
              <span className="ml-auto text-sm font-bold" style={{ color: alt.textColor }}>{alt.fee}</span>
            </div>
            <div className="px-5 py-4 bg-white space-y-2">
              <p className="text-sm text-gray-700">{alt.feature}</p>
              <p className="text-sm"><span className="font-bold" style={{ color: alt.textColor }}>◆ メリット：</span>{alt.merit}</p>
              <p className="text-sm"><span className="font-bold text-gray-500">▲ 注意点：</span>{alt.demerit}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">特養待機中の現実的な対策</h2>
      <div className="space-y-3 mb-10">
        {[
          { step: '01', label: '複数の特養に同時申込する', body: '1施設だけでなく、通える範囲の特養すべてに申込しましょう。自治体によっては上限なく申込できます。' },
          { step: '02', label: '優先度を上げる申告をする', body: '「緊急度が高い」「介護者不在」などの事情を施設や担当ケアマネに伝えると優先度が上がる場合があります。' },
          { step: '03', label: 'つなぎで別施設に入居する', body: '老健・有料老人ホームなどに入居しながら特養の空きを待つのが現実的です。特養の申込は入居後も継続できます。' },
          { step: '04', label: '無料の相談窓口を活用する', body: '地域包括支援センターやケアマネジャーに相談すると、地域の実情に合った施設を紹介してもらえます。' },
        ].map((item) => (
          <div key={item.step} className="flex gap-4 rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb' }}>
            <span className="text-lg font-black flex-shrink-0" style={{ color: '#2E7D52' }}>{item.step}</span>
            <div>
              <p className="font-bold text-base mb-1">{item.label}</p>
              <p className="text-sm text-gray-600">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <AffiliateBlock>
        <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)', border: '2px solid #2E7D52' }}>
          <p className="font-bold text-lg mb-2" style={{ color: '#1B5E20' }}>今すぐ「特養以外」の施設を探す</p>
          <p className="text-sm mb-4 text-gray-700">全国58,000件以上の施設から、空きのある施設を無料で探せます。資料請求・見学予約も無料です。</p>
          <div className="flex flex-col items-center gap-1">
            <a href="https://www.minnanokaigo.com/" target="_blank" rel="noopener noreferrer"
              style={{ display:'flex',alignItems:'center',justifyContent:'center',background:'#2E7D52',color:'#fff',fontWeight:700,fontSize:'16px',borderRadius:'10px',padding:'14px 24px',textDecoration:'none',boxShadow:'0 3px 10px rgba(46,125,82,0.4)',width:'100%',maxWidth:'480px' }}>
              空きのある施設を無料で探す →
            </a>
            <span style={{ fontSize: '11px', color: '#999' }}>※広告（みんなの介護）</span>
          </div>
        </div>
      </AffiliateBlock>

      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/types', label: '施設の種類と違いを詳しく確認する', icon: '🏠' },
          { href: '/sakouju', label: 'サ高住（サービス付き高齢者住宅）完全ガイド', icon: '🏢' },
          { href: '/cost', label: '老人ホームの費用相場を確認する', icon: '💴' },
        ].map(link => (
          <Link key={link.href} href={link.href} className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white transition hover:opacity-90" style={{ border: '1px solid #e5e7eb', textDecoration: 'none', color: 'inherit' }}>
            <span style={{ fontSize: '20px' }}>{link.icon}</span>
            <p className="font-bold text-sm" style={{ color: '#2E7D52' }}>{link.label} →</p>
          </Link>
        ))}
      </div>
      <CTABox />
    </>
  )
}
