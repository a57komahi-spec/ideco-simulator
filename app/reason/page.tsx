import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'なぜ老人ホームに入るのか？知っておきたい6つのリスクと新しい暮らしの話',
  description: '「施設に入るなんてまだ早い」と思っていませんか。一人暮らしや在宅介護を続けることで生じるリスクと、老人ホームで得られる安心・仲間・生きがいについて解説します。',
  openGraph: {
    title: 'なぜ老人ホームに入るのか？知っておきたい6つのリスクと新しい暮らしの話',
    description: '一人暮らしや在宅介護を続けることのリスクと、老人ホームで得られる安心について解説します。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

const summaryItems = [
  '在宅での生活を続けることには<mark class="highlight">6つの見えないリスク</mark>があります',
  '家族が介護を抱えると<mark class="highlight">介護離職や家族関係の悪化</mark>につながることがあります',
  '老人ホームは「終わりの場所」ではなく<mark class="highlight">新しい生活のスタート</mark>です',
  '施設には<mark class="highlight">同世代の仲間</mark>がいて、孤独を感じない暮らしができます',
]

const risks = [
  {
    no: '01',
    icon: '👨‍👩‍👧',
    title: '家族が「介護離職」を迫られるリスク',
    body: [
      '厚生労働省の調査では、年間約10万人が介護を理由に仕事を辞めています。',
      '「親のそばにいてあげたい」という気持ちは自然ですが、仕事を辞めた子世代が収入を失い、老後の蓄えまで失うケースも少なくありません。',
      '在宅介護が長引くほど、介護する側の体力・精神力は消耗していきます。施設を選ぶことは、子どもの人生を守る選択でもあります。',
    ],
    color: '#FFF3E0',
    border: '#F57C00',
    image: '/images/reason_family.jpg',
    alt: '在宅介護で疲弊するご家族のイメージ',
  },
  {
    no: '02',
    icon: '🏠',
    title: '一人でいるときに倒れても、誰も気づかないリスク',
    body: [
      '内閣府の調査では、65歳以上の一人暮らし高齢者は約700万人。',
      '転倒・脳梗塞・心筋梗塞などは、突然起こります。携帯を取りに行けない距離で倒れたら、発見が翌日以降になることもあります。',
      '「まだ元気だから大丈夫」という感覚は大切ですが、万一のときに誰かがそばにいる環境かどうか、一度考えてみましょう。',
    ],
    color: '#FFF3E0',
    border: '#F57C00',
    image: null,
    alt: '',
  },
  {
    no: '03',
    icon: '🧠',
    title: '認知症が進んでいても「本人も家族も気づかない」リスク',
    body: [
      '認知症の初期は、本人が最も気づきにくい病気です。',
      '物忘れを「年のせい」と放置しているうちに、火の消し忘れ・金銭トラブル・徘徊が起きてからでは、在宅での生活継続が難しくなります。',
      '専門スタッフがいる施設では、わずかな変化にも早期に対応でき、進行を遅らせるケアが受けられます。',
    ],
    color: '#EDE7F6',
    border: '#7B1FA2',
    image: null,
    alt: '',
  },
  {
    no: '04',
    icon: '🍽️',
    title: '食事・服薬管理ができなくなるリスク',
    body: [
      '一人暮らしが長くなると、食事が単調になりがちです。',
      '「食欲がないから」と食事を抜いたり、薬を飲み忘れたりすることで、体力・免疫力の低下が起きます。',
      '施設では3食バランスの取れた食事と服薬管理が提供されます。「食べる楽しみ」を他の入居者と分かち合える環境も、健康を支えます。',
    ],
    color: '#E8F5E9',
    border: '#2E7D52',
    image: null,
    alt: '',
  },
  {
    no: '05',
    icon: '🌐',
    title: '社会との繋がりが断たれる「社会的孤立」のリスク',
    body: [
      '退職・配偶者との死別・外出機会の減少により、65歳以降は急速に人と会う機会が減ります。',
      '会話する相手がいない状態が続くと、認知機能の低下スピードが速まるという研究もあります。',
      '孤独は、喫煙と同等の健康リスクがあるともいわれています。「誰かがいる」という環境は、想像以上に大切です。',
    ],
    color: '#E3F2FD',
    border: '#1A5E9E',
    image: null,
    alt: '',
  },
  {
    no: '06',
    icon: '💸',
    title: '在宅介護の費用が「想定外に膨らむ」リスク',
    body: [
      '在宅で介護を続けるには、介護用ベッド・車椅子・手すりの設置などのリフォーム費用、訪問介護サービス費用がかかります。',
      '要介護度が上がるにつれ費用は増え、最終的に施設入居と変わらない、あるいは上回るケースも。',
      '早めに施設を検討することで、費用と生活の質の両方をコントロールしやすくなります。',
    ],
    color: '#FFF8E1',
    border: '#FBC02D',
    image: null,
    alt: '',
  },
]

const positives = [
  {
    icon: '👫',
    title: '同世代の仲間と、毎日会える',
    body: '施設には同年代の仲間がいます。食事・レクリエーション・季節行事を共にする中で、自然と会話が生まれます。「今日も誰かと話せた」という充実感は、心身の健康を支えます。',
  },
  {
    icon: '🏥',
    title: '体調変化に、プロがすぐ気づいてくれる',
    body: '24時間スタッフが常駐する施設では、夜中の体調変化にもすぐ対応できます。「何かあったとき助けてもらえる」という安心感が、毎日の暮らしをずっと穏やかにします。',
  },
  {
    icon: '💚',
    title: '家族との関係が、むしろ良くなる',
    body: '在宅介護では「やってあげているのに」という感情が生まれやすくなります。施設に入ることで、子どもは「親に会いに行く」気持ちで面会できます。感謝と笑顔の関係に戻れる方が多いです。',
  },
  {
    icon: '🎨',
    title: '生きがい・役割を持てる場所がある',
    body: '体操・手芸・音楽・カラオケ・園芸など、施設では様々なアクティビティがあります。「自分にはもう楽しみがない」と思っていた方が、施設で新しい趣味を見つけた例は数えきれません。',
  },
  {
    icon: '🌸',
    title: '「ここが自分の家」と思える場所になる',
    body: '入居から数ヶ月が経つと、多くの方が「ここの生活が好き」とおっしゃいます。スタッフに顔と名前を覚えてもらい、居場所ができる。それは、自宅とはまた違う安心感です。',
  },
]

export default function ReasonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'なぜ老人ホームに入るのか？知っておきたい6つのリスクと新しい暮らしの話',
            author: { '@type': 'Organization', name: 'やさしい老人ホームガイド' },
          }),
        }}
      />

      <Breadcrumb items={[{ label: 'なぜ老人ホームに入るのか？' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        なぜ老人ホームに入るのか？知っておきたい6つのリスクと新しい暮らしの話
      </h1>

      {/* ヒーロー */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <Image
          src="/images/reason_hero.jpg"
          alt="穏やかに暮らす高齢者のイメージ"
          width={600}
          height={400}
          style={{ width: '50%', height: 'auto', borderRadius: '12px' }}
          priority
        />
      </div>

      <SummaryBox items={summaryItems} />

      {/* リード文 */}
      <p className="text-base mb-4">
        「施設に入るなんて、まだ早い」「自分の家がいちばん」——そう思うのは、とても自然なことです。
      </p>
      <p className="text-base mb-4">
        でも、少しだけ立ち止まって考えてみてください。
        今の暮らしを続けた先に、どんなリスクが待っているか。
        そして老人ホームという選択が、あなたと家族にどんな安心をもたらすか。
      </p>
      <p className="text-base mb-10">
        この記事は、不安を煽るためではなく、<mark className="highlight">前向きな決断の後押し</mark>をするために書きました。
        ゆっくり読んでください。
      </p>

      {/* ===== リスク編 ===== */}
      <div
        className="rounded-2xl px-6 py-4 mb-8"
        style={{ background: 'linear-gradient(135deg, #37474F, #546E7A)' }}
      >
        <p className="text-white font-bold text-xl" style={{ borderLeft: 'none', paddingLeft: 0 }}>
          😔 第1章：在宅を続けることで生じる6つのリスク
        </p>
        <p className="text-white text-sm mt-1" style={{ opacity: 0.8 }}>
          「何もしない」という選択にも、実はコストとリスクがあります
        </p>
      </div>

      <div className="space-y-8 mb-12">
        {risks.map((risk) => (
          <div
            key={risk.no}
            className="rounded-2xl overflow-hidden"
            style={{ border: `2px solid ${risk.border}`, background: risk.color }}
          >
            {risk.image && (
              <div className="relative w-full" style={{ height: '180px' }}>
                <Image
                  src={risk.image}
                  alt={risk.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)' }}
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="font-bold text-white px-3 py-1 rounded-full text-sm flex-shrink-0"
                  style={{ background: risk.border }}
                >
                  RISK {risk.no}
                </span>
                <span className="text-2xl">{risk.icon}</span>
                <h2
                  className="text-lg md:text-xl font-bold flex-1"
                  style={{ borderLeft: 'none', paddingLeft: 0, color: '#1A1A1A' }}
                >
                  {risk.title}
                </h2>
              </div>
              {risk.body.map((paragraph, i) => (
                <p key={i} className="text-base mb-3 last:mb-0">{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <CTABox compact />

      {/* ===== ポジティブ編 ===== */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', marginTop: '3rem' }}>
        <Image
          src="/images/reason_positive.jpg"
          alt="老人ホームで仲間と笑顔で過ごす高齢者のイメージ"
          width={600}
          height={400}
          style={{ width: '50%', height: 'auto', borderRadius: '12px' }}
        />
      </div>

      <div
        className="rounded-2xl px-6 py-4 mb-8"
        style={{ background: 'linear-gradient(135deg, #1B5E37, #2E7D52)' }}
      >
        <p className="text-white font-bold text-xl" style={{ borderLeft: 'none', paddingLeft: 0 }}>
          🌸 第2章：老人ホームで得られる5つの「良かった」
        </p>
        <p className="text-white text-sm mt-1" style={{ opacity: 0.8 }}>
          入居した方の多くが感じていること
        </p>
      </div>

      <div className="space-y-5 mb-12">
        {positives.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 bg-white flex gap-4 items-start"
            style={{ border: '2px solid #E8F5E9', boxShadow: '0 2px 8px rgba(46,125,82,0.08)' }}
          >
            <span className="text-4xl flex-shrink-0 mt-1">{item.icon}</span>
            <div>
              <h2
                className="text-lg font-bold mb-2 text-primary"
                style={{ borderLeft: 'none', paddingLeft: 0 }}
              >
                {item.title}
              </h2>
              <p className="text-base">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 仲間の画像 */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
        <Image
          src="/images/reason_friends.jpg"
          alt="老人ホームで仲間と楽しく過ごす高齢者"
          width={600}
          height={400}
          style={{ width: '50%', height: 'auto', borderRadius: '12px' }}
        />
      </div>

      {/* まとめ */}
      <div
        className="rounded-2xl p-7 mb-10"
        style={{ background: 'linear-gradient(135deg, #E8F5E9, #FFF8E1)', border: '2px solid #2E7D52' }}
      >
        <p className="text-xl font-bold text-primary mb-4" style={{ borderLeft: 'none', paddingLeft: 0 }}>
          📝 この記事のまとめ
        </p>
        <p className="text-base mb-4">
          老人ホームへの入居を決める理由は人それぞれです。
          でも、「リスクを知った上で選ぶ」ことと「何となく先延ばしにする」ことは、
          将来の結果が大きく変わります。
        </p>
        <p className="text-base mb-4">
          施設は「家族に捨てられる場所」ではありません。
          <mark className="highlight">仲間がいて、専門家がいて、安心がある場所</mark>です。
          多くの方が、入居後に「もっと早く来れば良かった」とおっしゃいます。
        </p>
        <p className="text-base font-bold text-primary">
          まずは情報を集めることから始めましょう。それが一番の第一歩です。
        </p>
      </div>

      {/* 次のステップへの誘導リンク */}
      <h2 className="text-xl font-bold mb-4 text-primary">次に読みたい記事</h2>
      <div className="grid gap-4 mb-10">
        <Link
          href="/types"
          className="flex items-center gap-4 p-5 rounded-2xl bg-white transition hover:shadow-md"
          style={{ border: '2px solid #2E7D52', textDecoration: 'none', color: 'inherit' }}
        >
          <span className="text-3xl flex-shrink-0">🏠</span>
          <div className="flex-1">
            <p className="font-bold text-base text-primary mb-0.5">老人ホームの種類と違いを完全解説</p>
            <p className="text-sm text-gray-600">特養・有料老人ホーム・グループホームなど6種類を比較</p>
          </div>
          <span className="text-primary font-bold flex-shrink-0">→</span>
        </Link>
        <Link
          href="/cost"
          className="flex items-center gap-4 p-5 rounded-2xl bg-white transition hover:shadow-md"
          style={{ border: '2px solid #F57C00', textDecoration: 'none', color: 'inherit' }}
        >
          <span className="text-3xl flex-shrink-0">💴</span>
          <div className="flex-1">
            <p className="font-bold text-base" style={{ color: '#E65100' }}>費用・料金の相場をタイプ別に解説</p>
            <p className="text-sm text-gray-600">月額費用・初期費用・費用を抑えるコツ</p>
          </div>
          <span style={{ color: '#F57C00' }} className="font-bold flex-shrink-0">→</span>
        </Link>
        <Link
          href="/how-to-choose"
          className="flex items-center gap-4 p-5 rounded-2xl bg-white transition hover:shadow-md"
          style={{ border: '2px solid #1A5E9E', textDecoration: 'none', color: 'inherit' }}
        >
          <span className="text-3xl flex-shrink-0">✅</span>
          <div className="flex-1">
            <p className="font-bold text-base" style={{ color: '#1A5E9E' }}>後悔しない老人ホームの選び方</p>
            <p className="text-sm text-gray-600">7つのポイントと見学チェックリスト付き</p>
          </div>
          <span style={{ color: '#1A5E9E' }} className="font-bold flex-shrink-0">→</span>
        </Link>
      </div>

      <CTABox />
    </>
  )
}
