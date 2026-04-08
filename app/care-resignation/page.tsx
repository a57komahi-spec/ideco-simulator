import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateBlock from '@/components/AffiliateBlock'

export const metadata: Metadata = {
  title: '介護離職のリアル｜仕事を辞める前に必ず知っておくべきこと',
  description: '「仕事を辞めて介護に専念しよう」と思っている方へ。介護離職の経済的損失・仕事との両立方法・施設活用で離職を防ぐ方法を解説します。',
  openGraph: {
    title: '介護離職のリアル｜仕事を辞める前に必ず知っておくべきこと',
    description: '介護離職の経済的損失と、仕事を続けながら介護する方法を解説します。',
    siteName: 'やさしい老人ホームガイド', locale: 'ja_JP', type: 'article',
  },
}

const summaryItems = [
  '介護離職すると生涯収入が<mark class="highlight">最大2,000万円以上</mark>減るという試算があります',
  '退職後に後悔する方が多い。<mark class="highlight">「辞めてから探す」より「辞める前に施設を探す」</mark>が正解',
  '介護休業・介護休暇・時短勤務など<mark class="highlight">仕事を続けながら使える制度</mark>があります',
  '施設への入居は「逃げ」ではなく、<mark class="highlight">親にとっても最良の選択</mark>になることが多いです',
]

export default function CareResignationPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '介護離職のリアル' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        介護離職のリアル<br className="md:hidden" />｜仕事を辞める前に必ず知っておくべきこと
      </h1>
      <p className="text-sm text-gray-500 mb-6">更新：2026年4月 ｜ やさしい老人ホームガイド編集部</p>
      <SummaryBox items={summaryItems} />

      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFEBEE', border: '2px solid #EF9A9A' }}>
        <p className="font-bold text-base mb-2" style={{ color: '#B71C1C' }}>⚠️ 介護離職は「最後の手段」です</p>
        <p className="text-base">年間約10万人が介護を理由に離職しています。しかし「辞めてよかった」という声より「辞めなければよかった」という声のほうが多いのが現実です。離職を決断する前に、このページを必ず読んでください。</p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">介護離職のリアルな影響</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {[
          { icon: '💴', title: '経済的損失', body: '50代で離職すると、退職金・年金・給与の損失が合計1,500〜2,000万円以上になることも。再就職も困難になりがちです。' },
          { icon: '😓', title: '孤立・精神的疲弊', body: '介護だけの生活になることで社会との接点が失われ、うつ状態になるケースが増えています。' },
          { icon: '⚕️', title: '健康保険・年金の空白', body: '退職後は国民健康保険・国民年金に切り替える必要があり、毎月の負担が増えます。' },
          { icon: '🔄', title: '再就職の困難さ', body: '数年のブランク後、同待遇での再就職は非常に難しく、年収が大幅に下がるケースが多いです。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb' }}>
            <div className="flex items-center gap-2 mb-2">
              <span style={{ fontSize: '22px' }}>{item.icon}</span>
              <p className="font-bold text-base">{item.title}</p>
            </div>
            <p className="text-sm text-gray-700">{item.body}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">仕事を続けながら使える制度</h2>
      <div className="space-y-3 mb-10">
        {[
          { name: '介護休業', detail: '対象家族1人につき通算93日間取得可能。会社に申請するだけで取得できます。雇用保険から介護休業給付金（賃金の67%）が支給されます。' },
          { name: '介護休暇', detail: '年5日（対象家族が2人以上は年10日）まで取得できる短期の休暇。1日単位・半日単位で取得可能。' },
          { name: '介護のための時短勤務', detail: '勤務時間を短縮できる制度。会社によって内容が異なりますが、法律で一定の措置が義務付けられています。' },
          { name: '在宅勤務・テレワークの活用', detail: '通勤時間をなくすだけで介護の余裕が生まれます。上司に状況を説明して相談してみましょう。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>✅ {item.name}</p>
            <p className="text-sm text-gray-700">{item.detail}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">施設への入居で離職を防ぐ</h2>
      <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">「施設に入れるのはかわいそう」という罪悪感から在宅介護を選択し、その後離職してしまうケースは多いです。しかし<strong>施設に入居することで親も子も生活の質が上がる</strong>ことが多いです。</p>
        <ul className="space-y-2">
          {['専門スタッフによる24時間ケアで親が安全に過ごせる','子どもは仕事を続けながら面会で親と向き合える','介護の疲弊がなくなり親子関係が改善するケースが多い'].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span className="font-bold flex-shrink-0" style={{ color: '#2E7D52' }}>◆</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <AffiliateBlock>
        <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)', border: '2px solid #2E7D52' }}>
          <p className="font-bold text-lg mb-2" style={{ color: '#1B5E20' }}>「離職する前に」施設を一度見てみましょう</p>
          <p className="text-sm mb-4 text-gray-700">資料請求・施設見学は無料。「本当に辞めなきゃいけないか」を確認してからでも遅くありません。</p>
          <div className="flex flex-col items-center gap-1">
            <a href="https://www.minnanokaigo.com/" target="_blank" rel="noopener noreferrer"
              style={{ display:'flex',alignItems:'center',justifyContent:'center',background:'#2E7D52',color:'#fff',fontWeight:700,fontSize:'16px',borderRadius:'10px',padding:'14px 24px',textDecoration:'none',boxShadow:'0 3px 10px rgba(46,125,82,0.4)',width:'100%',maxWidth:'480px' }}>
              施設を無料で探してみる →
            </a>
            <span style={{ fontSize: '11px', color: '#999' }}>※広告（みんなの介護）</span>
          </div>
        </div>
      </AffiliateBlock>
      <CTABox />
    </>
  )
}
