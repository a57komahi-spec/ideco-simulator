import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '老人ホームの口コミ・評判の正しい読み方と注意点｜信頼できる情報の選び方',
  description: '老人ホームの口コミは「良い口コミだけ」「古い情報」に注意が必要です。口コミの正しい読み方・信頼できる評判の見分け方・施設見学での確認ポイントを解説します。',
  openGraph: {
    title: '老人ホームの口コミ・評判の正しい読み方と注意点',
    description: '口コミだけで施設を判断するのは危険。正しい読み方と見学での確認ポイントを解説します。',
    siteName: 'やさしい老人ホームガイド', locale: 'ja_JP', type: 'article',
  },
}

const summaryItems = [
  '口コミは<mark class="highlight">「誰が」「いつ」書いたか</mark>に注意して読みましょう',
  '良い口コミだけでなく<mark class="highlight">悪い口コミへの施設側の返答</mark>が誠実さを測る材料になります',
  '口コミはあくまで参考。<mark class="highlight">最終判断は必ず見学で確認</mark>してください',
  '第三者評価（都道府県の外部評価）は<mark class="highlight">最も信頼度の高い情報源</mark>です',
]

const warningPoints = [
  { title: '投稿が古い（3年以上前）', body: 'スタッフの離職・施設の改修などで状況が大きく変わっている可能性があります。直近1〜2年の口コミに注目しましょう。' },
  { title: '良い口コミしかない', body: '本当に良い施設にも不満は必ずあります。悪い口コミがゼロの施設は、管理されている可能性があります。' },
  { title: '感情的・感謝の言葉だけ', body: '「スタッフが優しかった」だけでは判断できません。具体的な内容（「入浴介助を週3回してもらえた」など）がある口コミのほうが参考になります。' },
  { title: '口コミが極端に少ない', body: '投稿が5件以下では統計的に信頼できません。最低でも10件以上の口コミを確認しましょう。' },
]

const goodSources = [
  { name: '都道府県の介護サービス情報公表システム', trust: '★★★★★', desc: '第三者評価機関による調査結果。施設の体制・安全管理が数値で確認できる。' },
  { name: 'みんなの介護・LIFULL介護の口コミ', trust: '★★★★☆', desc: '実際の入居者・家族の声が集まっている。件数が多い施設は信頼度が高い。' },
  { name: 'Googleマップのレビュー', trust: '★★★☆☆', desc: '一般公開されており書きやすいため件数が多い。ただし身元確認がないため信頼度は中程度。' },
  { name: '見学時の直接確認', trust: '★★★★★', desc: '実際にその目で確かめる情報が最も信頼できる。口コミの内容を見学時に質問してみましょう。' },
]

export default function ReviewGuidePage() {
  return (
    <>
      <Breadcrumb items={[{ label: '老人ホームの口コミ・評判の正しい読み方' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホームの口コミ・評判の正しい読み方と注意点
      </h1>
      <p className="text-sm text-gray-500 mb-6">更新：2026年4月 ｜ やさしい老人ホームガイド編集部</p>
      <SummaryBox items={summaryItems} />

      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF8E1', border: '2px solid #FFC107' }}>
        <p className="text-base"><strong>「口コミが良かったから入居したのに、実際は全然違った」</strong>という話は珍しくありません。口コミは貴重な情報源ですが、正しく読まないと判断を誤ります。</p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">⚠️ こんな口コミには注意</h2>
      <div className="space-y-3 mb-10">
        {warningPoints.map((pt, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '2px solid #FFCDD2', borderLeft: '4px solid #EF5350' }}>
            <p className="font-bold text-base mb-1" style={{ color: '#B71C1C' }}>❌ {pt.title}</p>
            <p className="text-sm text-gray-600">{pt.body}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">信頼できる情報源の優先順位</h2>
      <div className="space-y-3 mb-10">
        {goodSources.map((src, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb' }}>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <p className="font-bold text-base">{src.name}</p>
              <span className="text-sm" style={{ color: '#F57C00' }}>{src.trust}</span>
            </div>
            <p className="text-sm text-gray-600">{src.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">口コミで気になった点を見学で確かめる方法</h2>
      <div className="rounded-xl p-5 mb-10 bg-white" style={{ border: '1px solid #e5e7eb' }}>
        <p className="text-base mb-3">「口コミで食事が少ないとあった」「スタッフの対応が冷たいと書かれていた」など、気になる口コミは見学時に直接確認しましょう。</p>
        <ul className="space-y-2">
          {[
            '「実際に食事を見学・試食できますか？」と聞く',
            '「スタッフの離職率はどのくらいですか？」と聞く',
            '「夜間の対応スタッフは何人いますか？」と聞く',
            '入居者が笑顔で過ごしているか、スタッフが声をかけているかを目で確認する',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span className="font-bold flex-shrink-0" style={{ color: '#2E7D52' }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/how-to-choose', label: '失敗しない老人ホームの選び方', icon: '✅' },
          { href: '/checklist', label: '見学時のチェックリスト', icon: '📋' },
          { href: '/ranking', label: '老人ホーム検索サービス比較', icon: '🔍' },
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
