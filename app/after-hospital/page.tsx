import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateBlock from '@/components/AffiliateBlock'

export const metadata: Metadata = {
  title: '退院後すぐ入れる老人ホームの探し方｜急いでいる方向け緊急ガイド',
  description: '「退院日が決まったのに行き先がない」「もう自宅には戻れないと言われた」。退院後すぐに入居できる施設の種類・探し方・相談先を緊急解説します。',
  openGraph: {
    title: '退院後すぐ入れる老人ホームの探し方｜急いでいる方向け緊急ガイド',
    description: '退院日が決まったのに行き先がない方へ。今すぐ動ける施設の探し方を解説します。',
    siteName: 'やさしい老人ホームガイド', locale: 'ja_JP', type: 'article',
  },
}

const summaryItems = [
  '退院後すぐ入れる施設は<mark class="highlight">「老健」「有料老人ホーム」「サ高住」</mark>が主な選択肢',
  '特養（特別養護老人ホーム）は<mark class="highlight">数ヶ月〜数年待ちのため退院後の選択肢にはなりません</mark>',
  'まず<mark class="highlight">病院のソーシャルワーカー</mark>に相談するのが最短の方法です',
  '無料の相談サービスを使えば<mark class="highlight">最短1〜2日で候補施設を提示</mark>してもらえます',
]

export default function AfterHospitalPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '退院後すぐ入れる老人ホームの探し方' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        退院後すぐ入れる老人ホームの探し方<br className="md:hidden" />｜急いでいる方向け緊急ガイド
      </h1>
      <p className="text-sm text-gray-500 mb-6">更新：2026年4月 ｜ やさしい老人ホームガイド編集部</p>
      <SummaryBox items={summaryItems} />

      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFEBEE', border: '2px solid #EF9A9A' }}>
        <p className="font-bold text-base mb-2" style={{ color: '#B71C1C' }}>🚨 まず確認：退院日はいつですか？</p>
        <p className="text-base">
          「退院後すぐ施設が必要」な場合、<strong>動き始めるのは早ければ早いほど有利</strong>です。退院2週間前から動けていると選択肢が広がります。
          すでに退院日が迫っている場合も諦めないでください。専門の相談窓口を使えば短期間で候補を出してもらえます。
        </p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">退院後すぐ入れる施設の種類</h2>
      <div className="space-y-4 mb-10">
        {[
          { name: '介護老人保健施設（老健）', badge: '最短選択肢', badgeColor: '#F57C00', fee: '月額8〜15万円', body: '退院後のリハビリを目的とした施設で、病院との連携がとりやすく入院から直接移れることが多い。医療体制が充実しており退院直後でも安心。', color: '#FFF3E0', border: '#F57C00' },
          { name: '介護付き有料老人ホーム', badge: '即入居可能', badgeColor: '#2E7D52', fee: '月額15〜35万円', body: '24時間介護スタッフが常駐。特養と異なり待機なしで入居できる施設が多い。退院後そのまま終身で住み続けられる。', color: '#E8F5E9', border: '#2E7D52' },
          { name: 'サービス付き高齢者向け住宅', badge: '費用を抑えたい', badgeColor: '#1A5E9E', fee: '月額10〜20万円', body: '安否確認・生活相談付きの賃貸住宅。比較的軽度の方向け。介護サービスは外部業者を利用する形式。', color: '#E3F2FD', border: '#1A5E9E' },
          { name: '住宅型有料老人ホーム', badge: '自由度高い', badgeColor: '#7B1FA2', fee: '月額12〜25万円', body: '生活支援サービス付きで介護は外部サービスを利用。身の回りのことは自分でできる方向け。', color: '#F3E5F5', border: '#7B1FA2' },
        ].map((item, i) => (
          <div key={i} className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${item.border}` }}>
            <div className="px-5 py-3 flex flex-wrap items-center gap-2" style={{ backgroundColor: item.color }}>
              <p className="font-bold text-base">{item.name}</p>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: item.badgeColor }}>{item.badge}</span>
              <span className="ml-auto text-sm font-bold" style={{ color: item.badgeColor }}>{item.fee}</span>
            </div>
            <div className="px-5 py-3 bg-white">
              <p className="text-sm text-gray-700">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">まず誰に相談すればいい？</h2>
      <div className="space-y-3 mb-10">
        {[
          { icon: '🏥', who: '病院のソーシャルワーカー（医療ソーシャルワーカー）', body: '入院中の方なら、まず病院の相談員（MSW）に声をかけましょう。退院調整の専門家で、地域の施設情報を持っています。「退院後の行き先を相談したい」と伝えるだけでOKです。', priority: true },
          { icon: '📞', who: '地域包括支援センター', body: '市区町村に設置された高齢者の総合相談窓口。無料で施設の情報や手続きを教えてもらえます。入院中でも電話相談できます。', priority: true },
          { icon: '🔍', who: '老人ホーム無料相談サービス', body: '「みんなの介護」などの無料相談サービスでは、条件（エリア・費用・医療対応など）を伝えると最短翌日に候補施設を提案してもらえます。', priority: false },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: `2px solid ${item.priority ? '#F57C00' : '#e5e7eb'}` }}>
            <div className="flex items-center gap-2 mb-2">
              <span style={{ fontSize: '22px' }}>{item.icon}</span>
              <p className="font-bold text-base">{item.who}</p>
              {item.priority && <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white ml-auto" style={{ backgroundColor: '#F57C00' }}>まずここへ</span>}
            </div>
            <p className="text-sm text-gray-700">{item.body}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">入居までの最短スケジュール</h2>
      <div className="space-y-2 mb-10">
        {[
          { day: '今日', action: '病院ソーシャルワーカー or 無料相談サービスに連絡' },
          { day: '1〜2日後', action: '候補施設のリストを入手・条件を確認' },
          { day: '3〜5日後', action: '候補施設を見学（急ぎの場合は電話確認のみでも可）' },
          { day: '1週間以内', action: '入居申込・必要書類の提出' },
          { day: '退院日', action: '施設へ直接移動（病院から施設への送迎がある場合も）' },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 rounded-xl bg-white px-4 py-3" style={{ border: '1px solid #e5e7eb' }}>
            <span className="text-xs font-bold px-2 py-1 rounded-full text-white flex-shrink-0" style={{ backgroundColor: '#2E7D52' }}>{item.day}</span>
            <p className="text-base">{item.action}</p>
          </div>
        ))}
      </div>

      <AffiliateBlock>
        <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #FFF3E0, #FFE0B2)', border: '2px solid #F57C00' }}>
          <p className="font-bold text-lg mb-2" style={{ color: '#E65100' }}>🚨 退院日が迫っている方はすぐに相談を</p>
          <p className="text-sm mb-4 text-gray-700">空き状況のある施設を無料で提案してもらえます。電話・ネット相談どちらも無料です。</p>
          <div className="flex flex-col items-center gap-1">
            <a href="https://www.minnanokaigo.com/" target="_blank" rel="noopener noreferrer"
              style={{ display:'flex',alignItems:'center',justifyContent:'center',background:'#F57C00',color:'#fff',fontWeight:700,fontSize:'16px',borderRadius:'10px',padding:'14px 24px',textDecoration:'none',boxShadow:'0 3px 10px rgba(245,124,0,0.4)',width:'100%',maxWidth:'480px' }}>
              今すぐ空きのある施設を無料で探す →
            </a>
            <span style={{ fontSize: '11px', color: '#999' }}>※広告（みんなの介護）</span>
          </div>
        </div>
      </AffiliateBlock>

      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/tokuyou-waiting', label: '特養に入れないと言われたら読む記事', icon: '📋' },
          { href: '/process', label: '入居までの流れを確認する', icon: '🔄' },
          { href: '/cost', label: '費用相場を確認する', icon: '💴' },
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
