import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateBlock from '@/components/AffiliateBlock'

export const metadata: Metadata = {
  title: '家族葬と一般葬どちらを選ぶ？費用・規模・後悔しない選び方',
  description: '家族葬と一般葬の費用・参列者の規模・メリット・デメリットを徹底比較。「後から後悔した」という声から学ぶ、葬儀形式の正しい選び方を解説します。',
  openGraph: {
    title: '家族葬と一般葬どちらを選ぶ？費用・規模・後悔しない選び方',
    description: '家族葬と一般葬の費用・メリット・デメリットを比較。後悔しない選び方を解説します。',
    siteName: 'やさしい老人ホームガイド', locale: 'ja_JP', type: 'article',
  },
}

const summaryItems = [
  '家族葬の費用相場は<mark class="highlight">50〜150万円</mark>、一般葬は<mark class="highlight">100〜300万円</mark>が目安',
  '家族葬は<mark class="highlight">密な時間を過ごせる</mark>が、後日弔問が増えることも',
  '一般葬は<mark class="highlight">香典収入で費用を相殺</mark>できるため、総費用が安くなる場合も',
  'どちらを選ぶにしても<mark class="highlight">事前に資料請求・比較</mark>しておくのが重要です',
]

const comparison = [
  { item: '費用相場', family: '50〜150万円', general: '100〜300万円' },
  { item: '参列者数', family: '10〜30名（近親者のみ）', general: '50〜数百名' },
  { item: '香典収入', family: '少ない', general: '多い（費用の一部を相殺できる）' },
  { item: '時間・手間', family: '少ない', general: '多い（対応する人数が多い）' },
  { item: '後日の弔問', family: '多くなりやすい', general: '少ない（当日に完結）' },
  { item: '故人・家族の時間', family: '十分取れる', general: '慌ただしくなりがち' },
  { item: '向いている場合', family: '高齢・交際範囲が狭い・家族の意向', general: '社会的交流が多い・会社関係者が多い' },
]

export default function FuneralGuidePage() {
  return (
    <>
      <Breadcrumb items={[{ label: '家族葬と一般葬の選び方' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        家族葬と一般葬どちらを選ぶ？<br className="md:hidden" />費用・規模・後悔しない選び方
      </h1>
      <p className="text-sm text-gray-500 mb-6">更新：2026年4月 ｜ やさしい老人ホームガイド編集部</p>
      <SummaryBox items={summaryItems} />

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">家族葬 vs 一般葬 比較表</h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full border-collapse text-sm" style={{ minWidth: '400px' }}>
          <thead>
            <tr style={{ background: '#5D4037', color: '#fff' }}>
              <th className="px-3 py-2 text-left">項目</th>
              <th className="px-3 py-2 text-left">家族葬</th>
              <th className="px-3 py-2 text-left">一般葬</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#EFEBE9', borderBottom: '1px solid #e5e7eb' }}>
                <td className="px-3 py-2 font-bold">{row.item}</td>
                <td className="px-3 py-2">{row.family}</td>
                <td className="px-3 py-2">{row.general}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">「後悔した」という声から学ぶ</h2>
      <div className="space-y-3 mb-10">
        {[
          { type: '家族葬を選んで後悔', voice: '「故人の会社の方々から後で『なぜ呼んでくれなかったか』と言われ、関係が悪化した」', lesson: '参列したかった方を事前に把握し、連絡の範囲を決めておきましょう。' },
          { type: '一般葬を選んで後悔', voice: '「当日は対応に追われて、ゆっくり故人と向き合う時間がなかった。家族だけでもよかった」', lesson: '規模より「故人と家族にとって何が大切か」を優先しましょう。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb' }}>
            <p className="text-xs font-bold mb-2 px-2 py-0.5 rounded inline-block" style={{ backgroundColor: '#EFEBE9', color: '#5D4037' }}>⚠️ {item.type}</p>
            <p className="text-sm italic mb-2 text-gray-600">「{item.voice}」</p>
            <p className="text-sm font-bold" style={{ color: '#2E7D52' }}>→ {item.lesson}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">葬儀社を選ぶときのポイント</h2>
      <div className="space-y-2 mb-10">
        {[
          '見積書の内訳を細かく確認する（「一式」の表示は要注意）',
          '追加費用が発生するケースを事前に確認する',
          '複数の葬儀社から見積もりを取って比較する',
          '葬儀後のアフターサービス（仏壇・法要など）も確認する',
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-2 rounded-lg bg-white px-4 py-3" style={{ border: '1px solid #e5e7eb' }}>
            <span className="font-bold flex-shrink-0" style={{ color: '#5D4037' }}>□</span>
            <p className="text-base">{item}</p>
          </div>
        ))}
      </div>

      <AffiliateBlock>
        <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #EFEBE9, #D7CCC8)', border: '2px solid #795548' }}>
          <p className="font-bold text-lg mb-2" style={{ color: '#3E2723' }}>🕊️ 葬儀の費用を事前に確認しておきましょう</p>
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
      <CTABox />
    </>
  )
}
