import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'こんな方に読んでほしい｜やさしい老人ホームガイド',
  description: '「何から始めればいいかわからない」「急に介護が必要になった」「費用が心配」など、老人ホーム選びで悩む全ての方に向けたガイドです。',
  openGraph: {
    title: 'こんな方に読んでほしい｜やさしい老人ホームガイド',
    description: '老人ホーム選びで悩む全ての方に向けたガイドです。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'website',
  },
}

const situations = [
  {
    id: 1,
    emoji: '😰',
    title: '急に介護が必要になった',
    body: '親が入院した、転倒して歩けなくなった。突然のことで頭が真っ白になっていませんか。まずは「今できること」から1つずつ整理しましょう。このサイトが、その最初の一歩をサポートします。',
    tag: '#突然の介護 #入院後の行き先',
    image: '/images/target_hospital.jpg',
    alt: '急に介護が必要になりご家族が困惑している様子',
    link: '/process',
    linkLabel: '入居の流れを確認する',
    color: '#FFF3E0',
    border: '#F57C00',
  },
  {
    id: 2,
    emoji: '🤔',
    title: '老人ホームの種類が多すぎてわからない',
    body: '特養・老健・有料老人ホーム・サ高住…違いが多すぎて混乱していませんか。実は「要介護度」と「予算」の2つを決めるだけで、選択肢は一気に絞られます。',
    tag: '#はじめての介護 #施設の種類',
    image: '/images/facility.jpg',
    alt: '老人ホームの種類を比較して迷っているイメージ',
    link: '/types',
    linkLabel: '施設の種類を見る',
    color: '#E8F5E9',
    border: '#2E7D52',
  },
  {
    id: 3,
    emoji: '💰',
    title: '費用がいくらかかるか不安',
    body: '「老人ホームって高そう」と感じていませんか。実は月5万円台から入れる公的施設もあります。介護保険や補助制度をうまく活用すれば、思ったより費用を抑えられます。',
    tag: '#費用が心配 #年金で払える？',
    image: '/images/target_cost.jpg',
    alt: '老人ホームの費用について家族で相談しているイメージ',
    link: '/cost',
    linkLabel: '費用の相場を確認する',
    color: '#FFF8E1',
    border: '#FFC107',
  },
  {
    id: 4,
    emoji: '👴',
    title: '一人暮らしの親が心配',
    body: '電話をかけても出ない、食事をちゃんと食べているか心配、転んでも誰も気づかない…。離れて暮らすご家族の不安はとても自然なことです。施設という選択肢が、親子双方の安心につながります。',
    tag: '#一人暮らし #見守り #遠距離介護',
    image: '/images/target_alone.jpg',
    alt: '一人暮らしの高齢者が心配な家族のイメージ',
    link: '/how-to-choose',
    linkLabel: '施設の選び方を見る',
    color: '#E3F2FD',
    border: '#1A5E9E',
  },
  {
    id: 5,
    emoji: '🧠',
    title: '認知症が進んできた',
    body: '物忘れが激しくなった、同じことを何度も聞く、火の始末が心配…。認知症のケアには専門的なスキルが必要です。グループホームや認知症対応の施設なら、安全で穏やかな生活が送れます。',
    tag: '#認知症 #徘徊 #物忘れ',
    image: '/images/target_dementia.jpg',
    alt: '認知症の高齢者を介護するご家族のイメージ',
    link: '/types',
    linkLabel: '認知症向け施設を知る',
    color: '#F3E5F5',
    border: '#7B1FA2',
  },
  {
    id: 6,
    emoji: '📞',
    title: '遠くに住んでいて介護できない',
    body: '「実家に帰りたくても仕事がある」「飛行機で3時間の距離に住んでいる」。遠距離介護はご家族にとって大きな負担です。施設への入居で、プロに日常ケアを任せることができます。',
    tag: '#遠距離介護 #仕事と介護の両立',
    image: '/images/target_distance.jpg',
    alt: '遠距離に住む家族が電話で介護の相談をしているイメージ',
    link: '/how-to-choose',
    linkLabel: '施設の探し方を見る',
    color: '#E8F5E9',
    border: '#2E7D52',
  },
  {
    id: 7,
    emoji: '🏥',
    title: '退院後の行き先に困っている',
    body: '「もう自宅に戻れない」と医師に言われた、退院日が迫っているのに施設が決まっていない。そんな緊急のケースにも対応できる施設があります。まず相談窓口に連絡するのが一番早い方法です。',
    tag: '#退院後 #緊急 #在宅復帰',
    image: '/images/target_hospital.jpg',
    alt: '退院後の施設を急いで探している家族のイメージ',
    link: '/process',
    linkLabel: '入居の流れを確認する',
    color: '#FFF3E0',
    border: '#F57C00',
  },
  {
    id: 8,
    emoji: '😤',
    title: '本人が施設入居を嫌がっている',
    body: '「施設には入りたくない」という言葉、多くのご家族が直面します。無理に説得しようとすると関係が悪化します。まずは本人の不安を聞き、見学に一緒に行くことから始めましょう。',
    tag: '#本人が拒否 #説得 #家族の悩み',
    image: '/images/target_refuse.jpg',
    alt: '家族で老人ホームについて穏やかに話し合っているイメージ',
    link: '/how-to-choose',
    linkLabel: '選び方のポイントを見る',
    color: '#FCE4EC',
    border: '#C2185B',
  },
  {
    id: 9,
    emoji: '👨‍👩‍👧',
    title: '家族みんなで意見が合わない',
    body: '「施設に入れるなんてかわいそう」「誰が費用を出すの？」家族間で意見が割れることは珍しくありません。客観的な情報を共有することで、家族の話し合いをスムーズに進めることができます。',
    tag: '#家族会議 #兄弟で意見が違う',
    image: '/images/target_family.jpg',
    alt: '家族みんなで介護について話し合っているイメージ',
    link: '/faq',
    linkLabel: 'よくある疑問を確認する',
    color: '#E8F5E9',
    border: '#2E7D52',
  },
]

export default function ForYouPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'こんな方に読んでほしい' }]} />

      {/* メインヘッド */}
      <div
        className="rounded-2xl p-8 mb-8 text-center"
        style={{ background: 'linear-gradient(135deg, #1B5E37 0%, #2E7D52 100%)' }}
      >
        <p className="text-white text-sm mb-2" style={{ opacity: 0.8, letterSpacing: '0.1em' }}>
          このサイトはこんな方向け
        </p>
        <h1
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          style={{ borderLeft: 'none', paddingLeft: 0, lineHeight: 1.5 }}
        >
          「何から始めればいいか<br />わからない」あなたへ
        </h1>
        <p className="text-white text-base" style={{ opacity: 0.9 }}>
          老人ホームを初めて探す方のために、<br className="md:hidden" />
          専門用語なしでやさしく解説します。
        </p>
      </div>

      {/* リード文 */}
      <div
        className="rounded-xl p-6 mb-10"
        style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}
      >
        <p className="text-base mb-3">
          このサイトは「老人ホームを探したいけど、何をどこから調べればいいかわからない」という方のために作りました。
        </p>
        <p className="text-base mb-3">
          でも実は、<strong>下のような様々な悩みを持つ方すべてに役立つ内容</strong>になっています。
          あなたの状況に近いものを選んで読み進めてみてください。
        </p>
        <p className="text-base font-bold text-primary">
          👇 あなたはどれに当てはまりますか？
        </p>
      </div>

      {/* シチュエーションカード */}
      <div className="space-y-8 mb-12">
        {situations.map((s) => (
          <div
            key={s.id}
            className="rounded-2xl overflow-hidden bg-white"
            style={{ border: `2px solid ${s.border}`, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
          >
            {/* 画像 */}
            <div className="relative w-full" style={{ height: '200px' }}>
              <Image
                src={s.image}
                alt={s.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
              {/* 絵文字バッジ */}
              <div
                className="absolute top-4 left-4 text-3xl flex items-center gap-2 px-3 py-1.5 rounded-full font-bold text-white"
                style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)', fontSize: '14px' }}
              >
                <span style={{ fontSize: '24px' }}>{s.emoji}</span>
                <span>{s.title}</span>
              </div>
            </div>

            {/* 本文 */}
            <div className="p-5" style={{ backgroundColor: s.color }}>
              <p className="text-base mb-3">{s.body}</p>
              <p className="text-sm mb-4" style={{ color: '#666' }}>{s.tag}</p>
              <Link
                href={s.link}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white transition hover:opacity-90"
                style={{
                  backgroundColor: s.border,
                  fontSize: '16px',
                  textDecoration: 'none',
                  minHeight: '48px',
                }}
              >
                {s.linkLabel} →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* まとめメッセージ */}
      <div
        className="rounded-2xl p-8 mb-10 text-center"
        style={{ backgroundColor: '#FFF3E0', border: '2px solid #F57C00' }}
      >
        <p className="text-xl font-bold mb-3" style={{ color: '#E65100' }}>
          どの状況でも、まず相談するのが一番早い方法です
        </p>
        <p className="text-base mb-0">
          「まだ検討段階」でも「今すぐ必要」でも、プロのアドバイザーが無料で対応してくれます。
          施設を強制的に決めさせることは一切ありません。気軽に相談してみましょう。
        </p>
      </div>

      <CTABox />
    </>
  )
}
