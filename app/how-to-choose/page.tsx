import type { Metadata } from 'next'
import Image from 'next/image'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '老人ホームの選び方｜失敗しない7つのポイントとチェックリスト',
  description: '老人ホーム選びで失敗しないための7つのポイントを解説。見学時のチェックリスト付きで初めての方も安心。',
  openGraph: {
    title: '老人ホームの選び方｜失敗しない7つのポイントとチェックリスト',
    description: '老人ホーム選びで失敗しないための7つのポイントを解説。見学時のチェックリスト付きで初めての方も安心。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'website',
  },
}

const summaryItems = [
  'まず「<mark class="highlight">要介護度</mark>」と「<mark class="highlight">月額予算</mark>」の2つを確認しましょう',
  '立地は「<mark class="highlight">家族が通いやすい距離</mark>」を優先するのがおすすめです',
  '必ず見学して<mark class="highlight">スタッフの対応や施設の雰囲気</mark>を確認しましょう',
  '契約前に<mark class="highlight">重要事項説明書</mark>を必ず読むことが大切です',
]

const checklistItems = [
  { category: '施設全体', items: ['清潔感があるか', '臭いが気にならないか', '廊下・居室は広いか', '採光・換気は十分か'] },
  { category: 'スタッフ', items: ['挨拶・言葉遣いは丁寧か', '入居者への接し方は優しいか', 'スタッフの数は十分か', '笑顔で働いているか'] },
  { category: '食事', items: ['実際に食事を見学できるか', 'メニューは多様か', '食事の時間帯は適切か', '介護食・アレルギー対応はあるか'] },
  { category: '医療・安全', items: ['24時間対応できるか', '近くに提携病院はあるか', '緊急時の対応手順があるか', '転倒防止の設備はあるか'] },
]

export default function HowToChoosePage() {
  return (
    <>
      <Breadcrumb items={[{ label: '老人ホームの選び方' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        後悔しない老人ホームの選び方｜7つのポイントと見学チェックリスト
      </h1>
      <SummaryBox items={summaryItems} />

      {/* 家族見学イメージ画像 */}
      <div className="relative w-full rounded-2xl overflow-hidden mb-8" style={{ height: '220px' }}>
        <Image
          src="/images/family.jpg"
          alt="家族で老人ホームを見学しているイメージ"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          priority
        />
        <div
          className="absolute inset-0 flex items-end p-5"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }}
        >
          <p className="text-white text-sm">実際に見学して、施設の雰囲気を確かめましょう</p>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        まず「介護度」と「予算」を確認する
      </h2>
      <p className="text-base mb-4">
        施設選びを始める前に、まず2つの基本条件を確認しましょう。
        要介護度によって入居できる施設が限られます。
        また、月額予算を決めておくことで、選択肢を絞り込めます。
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="rounded-xl p-5 bg-white border-2 border-primary">
          <p className="font-bold text-base mb-2 text-primary">① 要介護度を確認する</p>
          <p className="text-base">市区町村に申請して「要介護認定」を受けましょう。認定結果によって入居できる施設が変わります。</p>
        </div>
        <div className="rounded-xl p-5 bg-white border-2 border-accent">
          <p className="font-bold text-base mb-2 text-accent">② 月額予算を決める</p>
          <p className="text-base">年金額・貯蓄額をもとに、無理なく払える月額上限を決めましょう。入居一時金も考慮が必要です。</p>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        立地・アクセスの重要性
      </h2>
      <p className="text-base mb-4">
        施設の立地は非常に重要です。
        特に「<mark className="highlight">家族が定期的に面会できるか</mark>」を重視しましょう。
        入居者にとっても、家族の顔を見られる頻度は生活の質に影響します。
      </p>
      <ul className="text-base space-y-2 mb-8 pl-4">
        <li>・電車やバスで通いやすい場所にあるか</li>
        <li>・駐車場はあるか</li>
        <li>・緊急時に家族がすぐに駆けつけられる距離か</li>
      </ul>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        施設の雰囲気は必ず見学で確認する
      </h2>
      <p className="text-base mb-4">
        パンフレットやウェブサイトだけで判断するのは危険です。
        必ず見学に行き、実際の雰囲気を確認しましょう。
        できれば<mark className="highlight">2〜3施設を比較</mark>することをおすすめします。
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        スタッフの質を見極めるポイント
      </h2>
      <p className="text-base mb-4">
        老人ホームのサービス品質は、スタッフの質によって大きく変わります。
        見学時に以下の点を注意して観察しましょう。
      </p>
      <ul className="text-base space-y-2 mb-8 pl-4">
        <li>・入居者への言葉遣いは丁寧か</li>
        <li>・スタッフ同士のコミュニケーションは良好か</li>
        <li>・質問への回答が誠実か</li>
        <li>・離職率が高くないか（スタッフに聞いてみましょう）</li>
      </ul>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        医療・緊急時対応の確認事項
      </h2>
      <p className="text-base mb-4">
        高齢者は急な体調変化が起きやすいです。
        緊急時にどのような対応をするか、必ず確認しましょう。
      </p>
      <ul className="text-base space-y-2 mb-8 pl-4">
        <li>・<mark className="highlight">24時間365日</mark>スタッフが常駐しているか</li>
        <li>・提携している医療機関はあるか</li>
        <li>・看取り（人生の最期を施設で迎えること）に対応しているか</li>
        <li>・入院になった場合、退院後も戻れるか</li>
      </ul>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        契約前に必ず確認する5項目
      </h2>
      <ol className="text-base space-y-3 mb-8 pl-4">
        <li>1. <strong>重要事項説明書</strong>を隅々まで読む</li>
        <li>2. 退去条件（どんな場合に退去が必要か）を確認する</li>
        <li>3. 費用の追加請求がないか確認する</li>
        <li>4. クーリングオフ（契約解除）の期間を確認する</li>
        <li>5. 苦情・相談の窓口があるか確認する</li>
      </ol>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        見学時のチェックリスト
      </h2>
      <p className="text-base mb-6">
        見学に行くときは、以下のチェックリストをプリントして持参しましょう。
      </p>
      <div className="space-y-6 mb-8">
        {checklistItems.map((section) => (
          <div key={section.category} className="rounded-xl p-5 bg-white border border-gray-200">
            <p className="font-bold text-base mb-3 text-primary">【{section.category}】</p>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base">
                  <span
                    className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded"
                    style={{ display: 'inline-block' }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        プロに相談して施設を選ぶ方法
      </h2>
      <CTABox />
    </>
  )
}
