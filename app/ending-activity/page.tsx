import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateBlock from '@/components/AffiliateBlock'

export const metadata: Metadata = {
  title: '親と一緒に「終活」を始めるためのステップガイド｜何から始めればいい？',
  description: '終活は「死の準備」ではなく「残りの人生をよりよく生きるための準備」です。親と一緒に始める終活の進め方・エンディングノートの書き方・施設選びとの関係を解説します。',
  openGraph: {
    title: '親と一緒に「終活」を始めるためのステップガイド',
    description: '親と一緒に始める終活の進め方・エンディングノートの書き方を解説します。',
    siteName: 'やさしい老人ホームガイド', locale: 'ja_JP', type: 'article',
  },
}

const summaryItems = [
  '終活は「死の準備」ではなく<mark class="highlight">「安心して生きるための準備」</mark>です',
  'まず始めやすいのは<mark class="highlight">エンディングノートを書くこと</mark>。遺言書と違い法的拘束力はありません',
  '親と一緒に取り組むことで<mark class="highlight">家族の絆が深まる</mark>きっかけになります',
  '終活の中に<mark class="highlight">老人ホーム・施設の情報収集</mark>も含めておきましょう',
]

const steps = [
  { icon: '📝', title: 'エンディングノートを書く', color: '#E8F5E9', border: '#2E7D52', labelColor: '#2E7D52',
    body: 'エンディングノートは遺言書と違い法的効力はありませんが、家族への「伝言メモ」として非常に役立ちます。書く内容：自分の連絡してほしい人リスト・口座・保険・葬儀の希望・施設の希望・メッセージ',
    tip: '「書かなければいけない」より「書きたいことから」がコツ。完成しなくても大丈夫です。' },
  { icon: '💴', title: '財産・保険の整理をする', color: '#FFF8E1', border: '#FFC107', labelColor: '#E65100',
    body: '通帳・保険証書・不動産権利書など重要書類の場所を家族に知らせておきましょう。「何があるか・どこにあるか」を一覧にしておくだけでも十分です。',
    tip: 'コピーを取って封筒に入れ、「緊急時に開けてください」と書いて渡しておくだけでも助かります。' },
  { icon: '🏡', title: '住まい・施設の希望を伝えておく', color: '#E3F2FD', border: '#1A5E9E', labelColor: '#1A5E9E',
    body: '「将来介護が必要になったとき、どこで生活したいか」を家族に伝えておくことが大切です。「自宅で最期まで過ごしたい」「施設に入ることを前向きに考えている」など。',
    tip: '今のうちに施設の見学に行っておくと、「こんな施設もあるんだ」と親の気持ちが変わることがあります。' },
  { icon: '🕊️', title: '葬儀・お墓の希望を話し合う', color: '#EFEBE9', border: '#795548', labelColor: '#5D4037',
    body: '「家族葬がいい」「お墓は継がなくていい」「散骨でも構わない」など、生前に希望を伝えておくことで家族の負担が大きく減ります。',
    tip: '「縁起でもない」と嫌がる場合は「家族が困らないようにしたい」という視点で話すと受け入れてもらいやすいです。' },
  { icon: '📱', title: 'デジタル情報を整理する', color: '#F3E5F5', border: '#7B1FA2', labelColor: '#7B1FA2',
    body: 'スマートフォンのパスコード・SNSアカウント・サブスクリプションサービスなど、デジタル上の情報整理も現代の終活では重要です。',
    tip: 'パスワード管理アプリを使って一括管理し、家族にマスターパスワードだけ伝えておく方法が便利です。' },
]

export default function EndingActivityPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '親と一緒に終活を始めるガイド' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        親と一緒に「終活」を始めるための<br className="md:hidden" />ステップガイド
      </h1>
      <p className="text-sm text-gray-500 mb-6">更新：2026年4月 ｜ やさしい老人ホームガイド編集部</p>
      <SummaryBox items={summaryItems} />

      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-2"><strong>「終活＝死の準備」ではありません</strong></p>
        <p className="text-base">終活とは、人生の後半をより豊かに・安心して過ごすための準備です。自分の思いを整理して家族に伝えることで、「残りの人生をどう生きるか」が明確になります。</p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-6 mt-10 text-primary">終活の5ステップ</h2>
      <div className="space-y-8 mb-12">
        {steps.map((step, i) => (
          <div key={i} className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${step.border}` }}>
            <div className="px-5 py-4 flex items-center gap-3" style={{ backgroundColor: step.color }}>
              <span style={{ fontSize: '28px' }}>{step.icon}</span>
              <div>
                <p className="text-xs font-bold" style={{ color: step.labelColor }}>STEP {i + 1}</p>
                <h3 className="font-bold text-lg" style={{ color: '#1A1A1A', borderLeft: 'none', paddingLeft: 0 }}>{step.title}</h3>
              </div>
            </div>
            <div className="px-5 py-4 bg-white space-y-3">
              <p className="text-base">{step.body}</p>
              <div className="rounded-lg px-4 py-3" style={{ backgroundColor: step.color }}>
                <p className="text-sm font-bold" style={{ color: step.labelColor }}>💡 コツ：{step.tip}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AffiliateBlock>
        <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)', border: '2px solid #2E7D52' }}>
          <p className="font-bold text-lg mb-2" style={{ color: '#1B5E20' }}>終活の一環として、施設を見学してみませんか</p>
          <p className="text-sm mb-4 text-gray-700">「どんな施設があるか」を元気なうちに知っておくことも終活の一つ。無料で資料請求できます。</p>
          <div className="flex flex-col items-center gap-1">
            <a href="https://www.minnanokaigo.com/" target="_blank" rel="noopener noreferrer"
              style={{ display:'flex',alignItems:'center',justifyContent:'center',background:'#2E7D52',color:'#fff',fontWeight:700,fontSize:'16px',borderRadius:'10px',padding:'14px 24px',textDecoration:'none',boxShadow:'0 3px 10px rgba(46,125,82,0.4)',width:'100%',maxWidth:'480px' }}>
              施設の資料を無料で取り寄せる →
            </a>
            <span style={{ fontSize: '11px', color: '#999' }}>※広告（みんなの介護）</span>
          </div>
        </div>
        <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #EFEBE9, #D7CCC8)', border: '2px solid #795548' }}>
          <p className="font-bold text-lg mb-2" style={{ color: '#3E2723' }}>🕊️ 葬儀の希望も資料で確認しておきましょう</p>
          <p className="text-sm mb-4 text-gray-700">今すぐ資料請求で葬儀費用から5万円割引。元気なうちに比較しておくのが賢明です。</p>
          <div className="flex flex-col items-center gap-1">
            <a href="https://px.a8.net/svt/ejp?a8mat=XXXXXX_FUNERAL" target="_blank" rel="noopener noreferrer"
              style={{ display:'flex',alignItems:'center',justifyContent:'center',background:'#5D4037',color:'#fff',fontWeight:700,fontSize:'16px',borderRadius:'10px',padding:'14px 24px',textDecoration:'none',boxShadow:'0 3px 10px rgba(93,64,55,0.4)',width:'100%',maxWidth:'480px' }}>
              葬儀の資料を無料で取り寄せる →
            </a>
            <span style={{ fontSize: '11px', color: '#999' }}>※広告（家族葬のこれから）</span>
          </div>
        </div>
      </AffiliateBlock>
      <CTABox />
    </>
  )
}
