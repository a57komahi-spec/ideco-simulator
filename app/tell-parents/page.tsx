import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '親に伝えるべき老人ホームの魅力｜入居を前向きに考えてもらうための言葉',
  description: '「施設には入りたくない」という親を説得するのではなく、老人ホームの本当の魅力を一緒に知ってほしい。同世代の仲間・安心の食事・24時間のサポート…実は入居後に「来てよかった」と感じる方がほとんどです。',
  openGraph: {
    title: '親に伝えるべき老人ホームの魅力｜入居を前向きに考えてもらうための言葉',
    description: '「施設には入りたくない」という親を説得するのではなく、老人ホームの本当の魅力を一緒に知ってほしい。実は入居後に「来てよかった」と感じる方がほとんどです。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

const summaryItems = [
  '老人ホームに入居した方の多くが<mark class="highlight">「来てよかった」</mark>と感じています',
  '同世代の仲間ができ、<mark class="highlight">一人暮らしより毎日が充実する</mark>方が多いです',
  '24時間スタッフがいるため、<mark class="highlight">夜中の体調不良も即対応</mark>できます',
  '親が安心できる = <mark class="highlight">あなたも安心できる</mark>。これが一番大事なことです',
]

const merits = [
  {
    icon: '👫',
    title: '同世代の仲間ができる',
    color: '#E8F5E9',
    border: '#2E7D52',
    labelColor: '#2E7D52',
    body: `一人暮らしで感じていた「誰とも話さない一日」がなくなります。施設には同じ世代の入居者が大勢いて、食事・レクリエーション・お茶の時間を通じて自然と会話が生まれます。

「施設に入ってから友達が増えた」「毎日誰かと話せるのが楽しい」という声は珍しくありません。むしろ一人暮らしより孤独感が減る方のほうが多いのです。`,
    quote: '「最初は不安だったけど、今は毎日楽しい。友達もできたし、ご飯も美味しい」（78歳・女性）',
  },
  {
    icon: '🍱',
    title: '毎日バランスのとれた食事が出る',
    color: '#FFF8E1',
    border: '#FFC107',
    labelColor: '#E65100',
    body: `一人暮らしになると食事が偏りがちになります。特に高齢になると料理が億劫になり、「パンだけ」「インスタントだけ」という生活になってしまう方も少なくありません。

施設では栄養士が献立を管理し、塩分・カロリー・栄養バランスに配慮した食事が1日3食提供されます。「久しぶりにちゃんとした食事を食べた」という方も多いです。嚥下（えんげ）が難しい方向けのムース食・刻み食にも対応しています。`,
    quote: '「料理が面倒で適当に済ませていたが、施設では毎食温かいものが出る。体の調子もよくなった」（81歳・男性）',
  },
  {
    icon: '🏥',
    title: '体調の変化にすぐ気づいてもらえる',
    color: '#E3F2FD',
    border: '#1A5E9E',
    labelColor: '#1A5E9E',
    body: `一人暮らしで最も怖いのが「夜中に体調が悪くなったとき」です。転倒して動けなくなっても、誰にも気づかれないケースが実際に起きています。

施設では24時間スタッフが常駐しており、夜間も定期的に様子を確認します。体調の些細な変化も記録・共有されるため、大きな病気の早期発見にもつながります。「あのとき施設にいてよかった」と家族が感じる瞬間は、こういったときです。`,
    quote: '「夜中に転んだときも、すぐスタッフが来てくれた。一人暮らしだったら大変なことになっていた」（75歳・男性）',
  },
  {
    icon: '🎨',
    title: '趣味・レクリエーションが毎日ある',
    color: '#F3E5F5',
    border: '#7B1FA2',
    labelColor: '#7B1FA2',
    body: `老人ホームには体操・手芸・書道・カラオケ・園芸・映画鑑賞など、毎日さまざまなアクティビティがあります。「一人ではなかなかできないことを楽しめる」と感じる方が多いです。

季節ごとのイベント（花見・夏祭り・クリスマス会など）も充実しており、「毎日何かある」という生活が脳の活性化にもつながります。認知症の予防・進行抑制にも、こうした社会的な活動が有効だとされています。`,
    quote: '「カラオケが好きで、施設でも週1回楽しんでいる。自宅にいたときより活動的になったかも」（77歳・女性）',
  },
  {
    icon: '🧹',
    title: '掃除・洗濯・家事をしなくていい',
    color: '#FFF3E0',
    border: '#F57C00',
    labelColor: '#E65100',
    body: `高齢になると掃除・洗濯・ゴミ出しといった家事が体の負担になります。「やらなきゃいけないのにできない」というストレスを感じている方も多いです。

施設に入ることで、こうした生活のすべてがサポートされます。これまで家事に費やしていた時間とエネルギーを、趣味や人との交流に使えるようになります。「こんなに楽でいいの？」と驚く方も多いです。`,
    quote: '「掃除が大変で悩んでいたが、施設に来てからは自分のしたいことだけしていればいい。気持ちが楽になった」（80歳・女性）',
  },
  {
    icon: '👨‍👩‍👧',
    title: '家族も安心できる = 親も気が楽になる',
    color: '#E8F5E9',
    border: '#2E7D52',
    labelColor: '#2E7D52',
    body: `「施設に入ったら家族に捨てられた気がする」という不安を持つ方がいます。でも実際は逆で、「会いに行くのが楽しみになった」という家族の声が多いです。

自宅で介護をしていた頃は介護の話ばかり。でも施設に入れると、面会のたびに「今日楽しかったことを話す」会話に変わります。介護の疲弊なく会えるぶん、関係が良くなるケースがほとんどです。親が「子どもに気を使わせなくていい」と感じることで、精神的に楽になる方も多いです。`,
    quote: '「施設に入れてから、面会のたびに親が笑顔でいる。在宅介護のときより親子の時間が穏やかになった」（52歳・娘）',
  },
]

const talkingPoints = [
  {
    situation: '「施設には入りたくない」と言うとき',
    words: '「入れようとしているんじゃなくて、一緒に見学だけしてみない？気に入らなければやめればいいから」',
    tip: '決定を迫らず、まず見学だけに誘うのがコツです。',
  },
  {
    situation: '「まだ元気だから大丈夫」と言うとき',
    words: '「元気なうちに入るほうが、友達もできやすいし施設にも慣れやすいって聞いたよ。緊急で決めるより、余裕があるときに選んだほうがいいんじゃないかな」',
    tip: '元気なうちに入る方が選択肢も多く、慣れやすいのは事実です。',
  },
  {
    situation: '「お金がかかる」と心配するとき',
    words: '「月額の費用と、今の家賃・食費・光熱費・医療費を全部足したら、実はそんなに変わらない場合もあるよ。一緒に計算してみようか」',
    tip: '具体的な数字で比較すると納得してもらいやすいです。',
  },
  {
    situation: '「一人でも大丈夫」と言うとき',
    words: '「夜中に体調が悪くなったとき、私（子ども）はすぐ来られないから不安なんだよね。あなたのためっていうより、私が安心したいんだ」',
    tip: '「子どもが心配している」という伝え方は、親の心に響きます。',
  },
  {
    situation: '「友達がいないから行きたくない」と言うとき',
    words: '「最初はみんなそう思うって。でも一週間もいたら自然と仲良くなる人ができるって、施設の人が言ってたよ。まず体験入居（お試し）だけしてみない？」',
    tip: '短期のお試し入居（ショートステイ）から始めると心理的ハードルが下がります。',
  },
]

export default function TellParentsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '親に伝えるべき老人ホームの魅力' }]} />

      {/* ヘッダー */}
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        親に伝えるべき老人ホームの魅力<br className="md:hidden" />
        <span style={{ fontSize: '0.85em' }}>｜入居を前向きに考えてもらうために</span>
      </h1>
      <p className="text-sm text-gray-500 mb-6">対象：50歳前後・親の施設入居を検討しているご家族</p>

      <SummaryBox items={summaryItems} />

      {/* リード画像 */}
      <div className="relative w-full rounded-2xl overflow-hidden mb-8" style={{ height: '240px' }}>
        <Image
          src="/images/reason_positive.jpg"
          alt="老人ホームで笑顔で過ごす高齢者のイメージ"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          priority
        />
        <div
          className="absolute inset-0 flex items-end p-6"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }}
        >
          <p className="text-white text-base font-bold" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            「来てよかった」と感じる方が、実はとても多いのです
          </p>
        </div>
      </div>

      {/* 導入文 */}
      <div className="rounded-xl p-6 mb-10" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          「そろそろ施設のことを考えてほしい」と思っているのに、親になかなか切り出せない——そんな方は多いはずです。
        </p>
        <p className="text-base mb-3">
          「施設に入れるなんてかわいそう」「まだ早い」「家族に申し訳ない」。
          親の側にも、子の側にも、それぞれの不安や罪悪感があります。
        </p>
        <p className="text-base font-bold text-primary">
          でも、実際に老人ホームに入居した方の多くが「来てよかった」と言います。
          このページでは、親に安心して前向きになってもらうために「知ってほしい魅力」をまとめました。
        </p>
      </div>

      {/* なぜ親は嫌がるのか */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        なぜ親は「施設に入りたくない」と言うのか
      </h2>
      <p className="text-base mb-4">
        親が施設入居を嫌がる理由は、ほとんどの場合「誤解」から来ています。
        昔のイメージのまま「老人ホーム＝暗くて怖い場所」と思っている方が多いのです。
      </p>
      <div className="grid md:grid-cols-2 gap-3 mb-8">
        {[
          { fear: '家族に捨てられた気がする', fact: '実際は面会のたびに笑顔で話せる関係になるケースが多い' },
          { fear: '自由がなくなる', fact: '外出・外泊・面会は基本的に自由。一人暮らしより行動の幅が広がることも' },
          { fear: '友達もいない知らない場所', fact: '1〜2週間で顔見知りができ、1ヶ月後には友人ができる方がほとんど' },
          { fear: '死ぬまでそこにいる場所', fact: '状態が改善すれば退去可能。まずお試し入居（ショートステイ）で体験できる' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-4 bg-white" style={{ border: '1px solid #e5e7eb' }}>
            <p className="text-sm font-bold mb-2" style={{ color: '#B71C1C' }}>😟 親の不安：{item.fear}</p>
            <p className="text-sm" style={{ color: '#2E7D52' }}>✅ 実際は：{item.fact}</p>
          </div>
        ))}
      </div>

      {/* メインコンテンツ：6つの魅力 */}
      <h2 className="text-xl md:text-2xl font-bold mb-6 mt-10 text-primary">
        親に伝えてほしい、老人ホームの6つの魅力
      </h2>

      <div className="space-y-10 mb-12">
        {merits.map((m, i) => (
          <div key={i} className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${m.border}`, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            {/* カードヘッダー */}
            <div className="px-5 py-4 flex items-center gap-3" style={{ backgroundColor: m.color }}>
              <span style={{ fontSize: '32px' }}>{m.icon}</span>
              <div>
                <p className="text-xs font-bold mb-0.5" style={{ color: m.labelColor }}>その{i + 1}</p>
                <h3 className="text-lg font-bold" style={{ color: '#1A1A1A', borderLeft: 'none', paddingLeft: 0 }}>{m.title}</h3>
              </div>
            </div>

            {/* 本文 */}
            <div className="px-5 py-5 bg-white space-y-4">
              {m.body.split('\n\n').map((para, j) => (
                <p key={j} className="text-base" style={{ lineHeight: 1.9 }}>{para}</p>
              ))}

              {/* 入居者の声 */}
              <div
                className="rounded-xl px-5 py-4"
                style={{ backgroundColor: m.color, borderLeft: `4px solid ${m.border}` }}
              >
                <p className="text-xs font-bold mb-1" style={{ color: m.labelColor }}>💬 入居者・家族の声</p>
                <p className="text-sm italic" style={{ color: '#444', lineHeight: 1.8 }}>{m.quote}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 会話例 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12 text-primary">
        どう切り出す？状況別「親への伝え方」
      </h2>
      <p className="text-base mb-6">
        「説得しよう」とすると逆効果になりがちです。
        まずは親の気持ちに寄り添いながら、「一緒に考えたい」というスタンスで話してみましょう。
      </p>

      <div className="space-y-5 mb-12">
        {talkingPoints.map((tp, i) => (
          <div key={i} className="rounded-2xl overflow-hidden bg-white" style={{ border: '1px solid #e5e7eb', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
            <div className="px-5 py-3" style={{ backgroundColor: '#F3F8F5', borderBottom: '1px solid #e5e7eb' }}>
              <p className="text-sm font-bold" style={{ color: '#2E7D52' }}>💬 シーン{i + 1}：{tp.situation}</p>
            </div>
            <div className="px-5 py-4 space-y-3">
              <div className="rounded-xl px-4 py-3" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFE082' }}>
                <p className="text-sm font-bold mb-1" style={{ color: '#E65100' }}>こんな言い方はどうでしょう</p>
                <p className="text-base" style={{ lineHeight: 1.8 }}>{tp.words}</p>
              </div>
              <p className="text-sm text-gray-600">💡 {tp.tip}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ショートステイ提案 */}
      <div
        className="rounded-2xl p-7 mb-10"
        style={{ background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)', border: '2px solid #2E7D52' }}
      >
        <h3 className="text-xl font-bold mb-3" style={{ color: '#1B5E20', borderLeft: 'none', paddingLeft: 0 }}>
          💡 まず「お試し入居」から始めてみる
        </h3>
        <p className="text-base mb-3">
          いきなり「入居を決める」のは親も子も重いものです。多くの施設では、<strong>数日〜数週間の短期入居（ショートステイ）</strong>を体験できます。
        </p>
        <p className="text-base mb-4">
          「旅行気分でちょっと泊まってきてみて」くらいの気軽さで誘ってみましょう。実際に体験することで、親自身が「悪くないかも」と感じるケースが多いです。
        </p>
        <Link
          href="/process"
          className="inline-flex items-center gap-2 font-bold text-white rounded-xl px-5 py-3 transition hover:opacity-90"
          style={{ backgroundColor: '#2E7D52', fontSize: '15px', textDecoration: 'none' }}
        >
          入居までの流れを確認する →
        </Link>
      </div>

      {/* まとめ */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        まとめ：「かわいそう」ではなく「よかったね」になる
      </h2>
      <div className="rounded-xl p-6 mb-10" style={{ backgroundColor: '#FFF3E0', border: '2px solid #F57C00' }}>
        <p className="text-base mb-3">
          老人ホームへの入居は、「親を預ける」のではなく「親の生活をよりよくする選択」です。
        </p>
        <p className="text-base mb-3">
          入居後に多くの方が感じるのは「一人でいたときより楽しい」「体の具合がよくなった」「友達ができた」という前向きな変化です。
        </p>
        <p className="text-base font-bold" style={{ color: '#E65100' }}>
          親があなたに「ここに来てよかった」と言える日が、きっと来ます。まずは一緒に見学から始めてみましょう。
        </p>
      </div>

      {/* 関連リンク */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        次に読んでほしい記事
      </h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/for-you', label: '状況別｜あなたはどのケース？悩み別ガイド', icon: '🎯' },
          { href: '/types', label: '老人ホームの種類と違いをわかりやすく解説', icon: '🏠' },
          { href: '/cost', label: '費用はどのくらい？月額・初期費用の相場', icon: '💴' },
          { href: '/process', label: '入居までの流れ｜申込から契約まで5ステップ', icon: '📋' },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:opacity-90 bg-white"
            style={{ border: '1px solid #e5e7eb', textDecoration: 'none', color: 'inherit' }}
          >
            <span style={{ fontSize: '20px' }}>{link.icon}</span>
            <p className="font-bold text-sm" style={{ color: '#2E7D52' }}>{link.label} →</p>
          </Link>
        ))}
      </div>

      <CTABox />
    </>
  )
}
