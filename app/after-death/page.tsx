import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateBlock from '@/components/AffiliateBlock'

export const metadata: Metadata = {
  title: '親が亡くなったら最初にやること｜手続き・連絡・葬儀の流れ完全ガイド',
  description: '親が亡くなった直後から必要な手続きを時系列で解説。死亡届・葬儀・年金・相続・施設退去など、やるべきことを優先度順にまとめました。',
  openGraph: {
    title: '親が亡くなったら最初にやること｜手続き・連絡・葬儀の流れ完全ガイド',
    description: '親が亡くなった直後からの手続きを時系列で解説します。',
    siteName: 'やさしい老人ホームガイド', locale: 'ja_JP', type: 'article',
  },
}

const summaryItems = [
  '亡くなってから<mark class="highlight">7日以内に死亡届</mark>の提出が法律で義務付けられています',
  '<mark class="highlight">葬儀社の手配は早めに</mark>。事前に資料を取り寄せておくとスムーズです',
  '年金・健康保険・銀行口座などの<mark class="highlight">各種手続きは死後2ヶ月以内</mark>を目安に',
  '相続は<mark class="highlight">申告期限が10ヶ月以内</mark>。早めに専門家に相談を',
]

const timeline = [
  { period: '当日〜翌日', color: '#FFEBEE', border: '#EF5350', tasks: [
    { name: '医師から死亡診断書をもらう', note: '葬儀・各種手続きに必要。複数枚コピーを取っておくと便利です' },
    { name: '葬儀社に連絡する', note: '深夜・早朝でも対応してくれる葬儀社がほとんど' },
    { name: '近親者・友人へ連絡する', note: '事前に「連絡してほしい人リスト」があると楽です' },
  ]},
  { period: '2〜7日以内', color: '#FFF3E0', border: '#F57C00', tasks: [
    { name: '死亡届の提出（7日以内）', note: '死亡診断書と合わせて市区町村窓口へ提出。葬儀社が代行する場合も多い' },
    { name: '葬儀・火葬を執り行う', note: '形式（家族葬・一般葬・直葬など）と費用は事前に確認を' },
    { name: '施設への退去連絡', note: '老人ホームに入居中だった場合、退去日・荷物の引き取り日を調整する' },
  ]},
  { period: '2週間〜1ヶ月', color: '#FFF8E1', border: '#FFC107', tasks: [
    { name: '年金の受給停止手続き', note: '厚生年金は10日以内・国民年金は14日以内が目安。年金事務所へ' },
    { name: '健康保険証の返却', note: '加入していた保険（国民健康保険・後期高齢者医療など）の窓口へ' },
    { name: '銀行口座の名義変更・凍結解除', note: '相続人で話し合ってから手続きを。司法書士に相談すると効率的' },
  ]},
  { period: '1〜10ヶ月', color: '#E8F5E9', border: '#2E7D52', tasks: [
    { name: '相続の話し合い・遺産分割協議', note: '相続人全員で合意する「遺産分割協議書」を作成する' },
    { name: '相続税の申告（10ヶ月以内）', note: '基礎控除（3,000万円＋600万円×相続人数）を超える場合は申告が必要' },
    { name: '各種サービスの解約', note: '携帯電話・サブスク・電気ガス水道などの解約・名義変更' },
  ]},
]

export default function AfterDeathPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '親が亡くなったら最初にやること' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        親が亡くなったら最初にやること<br className="md:hidden" />｜手続き・連絡・葬儀の流れ完全ガイド
      </h1>
      <p className="text-sm text-gray-500 mb-6">更新：2026年4月 ｜ やさしい老人ホームガイド編集部</p>
      <SummaryBox items={summaryItems} />

      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#F3F8F5', border: '2px solid #2E7D52' }}>
        <p className="text-base">突然のことで頭が真っ白になっていても大丈夫です。一つずつ確認しながら進めてください。すべてを一人でやる必要はありません。葬儀社・ケアマネ・司法書士などの専門家を頼りましょう。</p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">時系列でやること一覧</h2>
      <div className="space-y-6 mb-10">
        {timeline.map((period, pi) => (
          <div key={pi} className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${period.border}` }}>
            <div className="px-5 py-3" style={{ backgroundColor: period.color }}>
              <p className="font-bold text-base" style={{ color: period.border }}>📅 {period.period}</p>
            </div>
            <div className="px-5 py-4 bg-white space-y-3">
              {period.tasks.map((task, ti) => (
                <div key={ti} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <p className="font-bold text-base mb-1">□ {task.name}</p>
                  <p className="text-sm text-gray-600">{task.note}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <AffiliateBlock>
        <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #EFEBE9, #D7CCC8)', border: '2px solid #795548' }}>
          <p className="font-bold text-lg mb-2" style={{ color: '#3E2723' }}>🕊️ 葬儀の費用を抑えたい方へ</p>
          <p className="text-sm mb-4 text-gray-700">今すぐ資料請求で葬儀費用から5万円割引。家族葬・直葬プランを比較できます。</p>
          <div className="flex flex-col items-center gap-1">
            <a href="https://px.a8.net/svt/ejp?a8mat=XXXXXX_FUNERAL" target="_blank" rel="noopener noreferrer"
              style={{ display:'flex',alignItems:'center',justifyContent:'center',background:'#5D4037',color:'#fff',fontWeight:700,fontSize:'16px',borderRadius:'10px',padding:'14px 24px',textDecoration:'none',boxShadow:'0 3px 10px rgba(93,64,55,0.4)',width:'100%',maxWidth:'480px' }}>
              今すぐ資料請求で葬儀費用5万円割引 →
            </a>
            <span style={{ fontSize: '11px', color: '#999' }}>※広告（家族葬のこれから）</span>
          </div>
        </div>
      </AffiliateBlock>

      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/funeral-guide', label: '家族葬と一般葬の違い・費用比較', icon: '🕊️' },
          { href: '/ending-activity', label: '終活ガイド｜生前に準備しておくこと', icon: '📝' },
          { href: '/checklist', label: '終活チェックリスト28項目', icon: '✅' },
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
