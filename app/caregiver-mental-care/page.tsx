import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '介護家族のメンタルケア｜燃え尽きを防ぐ心の守り方',
  description: '親の介護で心が疲れていませんか。介護による燃え尽き（バーンアウト）のサインの見つけ方、罪悪感との向き合い方、レスパイトや相談窓口など頼れる仕組みまで、今日からできる心の守り方をやさしくまとめました。',
  alternates: {
    canonical: 'https://2ndhappiness.com/caregiver-mental-care',
  },
  openGraph: {
    title: '介護家族のメンタルケア｜燃え尽きを防ぐ心の守り方',
    description: '親の介護で心が疲れていませんか。介護による燃え尽き（バーンアウト）のサインの見つけ方、罪悪感との向き合い方、レスパイトや相談窓口など、今日からできる心の守り方をやさしくまとめました。',
    url: 'https://2ndhappiness.com/caregiver-mental-care',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

const summaryItems = [
  '介護による心の疲れは<mark class="highlight">誰にでも起こりうる自然なこと</mark>。あなたの頑張りが足りないわけではありません',
  '<mark class="highlight">眠れない・笑えない・何も楽しめない</mark>が続くときは、心の「お疲れサイン」かもしれません',
  '「いい介護者でいなければ」を少し手放し、<mark class="highlight">頼る・休む・離れる</mark>を自分に許すことが予防につながります',
  '一人で抱えず、<mark class="highlight">地域包括支援センター・ケアマネージャー・レスパイト</mark>（短期の預かり）など頼れる仕組みがあります',
]

const signs = [
  { icon: '😴', title: '眠れない／寝てもだるい', body: '布団に入っても介護のことが頭から離れない、夜中に何度も目が覚める、寝ても疲れが取れない。睡眠の乱れは、心からの早いサインのひとつです。' },
  { icon: '😶', title: '笑えない・楽しめない', body: '前は好きだったことに興味がわかない、テレビを見ても心が動かない。「何も楽しめない」状態が2週間ほど続くときは、少し立ち止まってほしいサインです。' },
  { icon: '😣', title: 'イライラ・涙が増える', body: '些細なことで本人にきつく当たってしまう、理由もなく涙が出る。感情の波が激しくなるのは、心の余力が減っているサインかもしれません。' },
  { icon: '🍚', title: '食欲・体の不調', body: '食欲がない、または食べすぎる、頭痛・肩こり・胃の不調が続く。心の疲れは、体の不調という形で表れることがよくあります。' },
  { icon: '🚪', title: '人と会うのがおっくう', body: '友人の誘いを断り続けている、誰とも話したくない。社会とのつながりが細くなるのも、見逃したくないサインです。' },
  { icon: '🌀', title: '「自分が消えたい」と感じる', body: 'いなくなってしまいたい、と思う瞬間がある。これは強いSOSです。ためらわずに、後半で紹介する相談窓口や医療機関を頼ってください。' },
]

const habits = [
  { num: '1', title: '1日5分の「自分だけの時間」を確保する', body: '温かいお茶を飲む、好きな音楽を1曲聴く、それだけで十分です。「介護から完全に離れる短い時間」を意識して作ることが、心の充電になります。罪悪感を持つ必要はまったくありません。' },
  { num: '2', title: 'つらさを「書き出す・話す」', body: '心の中だけで抱えると、不安はふくらみがちです。ノートに今の気持ちを書く、信頼できる人に聞いてもらう。外に出すだけで、少し軽くなることがあります。' },
  { num: '3', title: '睡眠と食事を「最優先」にする', body: '介護をしていると、自分のことは後回しになりがち。でも、眠れて食べられていることが、心を支える土台です。「自分のケアもケアのうち」と考えてみてください。' },
  { num: '4', title: '「できなかったこと」より「できたこと」を数える', body: '一日の終わりに反省点を探すより、「今日できたこと」を一つだけ思い出す。小さな達成を認めることが、自分を追い詰めない習慣になります。' },
  { num: '5', title: '頼れる先の連絡先を「見える場所」に貼る', body: 'いざというときに調べる余裕はありません。地域包括支援センターやケアマネージャーの番号を、冷蔵庫など目につく場所に。「いつでも頼れる」と思えるだけで、心は少し楽になります。' },
]

const faqItems = [
  {
    q: '介護がつらいと感じる自分は、冷たい人間なのでしょうか？',
    a: 'いいえ、まったくそんなことはありません。介護は、体力・時間・お金・気持ちが一度に削られる、とても負担の大きい営みです。つらいと感じるのは、それだけ真剣に向き合っている証拠です。「つらい」と認めることは、自分を守るための大切な第一歩。むしろ、その気持ちにふたをし続けるほうが、心が消耗してしまいます。あなたの感じていることは、ごく自然な反応です。',
  },
  {
    q: '「燃え尽き（バーンアウト）」とは何ですか？',
    a: '燃え尽き（バーンアウト）とは、長く強い負担が続いた結果、心や体のエネルギーが枯れてしまい、意欲や感情がわきにくくなる状態を指す言葉です。介護では、終わりが見えにくいこと、頑張りが評価されにくいことなどから起こりやすいといわれます。これは「気の持ちよう」の問題ではなく、誰にでも起こりうる状態です。眠れない・笑えない・無気力が続くようなら、早めに休息や相談につなげることが大切です。なお、症状の程度や対応はお一人おひとり異なるため、気になる場合は医師など専門家にご相談ください。',
  },
  {
    q: '少し離れて休みたいのですが、その間の介護はどうすれば？',
    a: 'レスパイトケアという考え方があります。これは、介護する家族が休息を取るために、ご本人を数日だけ施設に預かってもらう仕組みのこと。介護保険のショートステイ（短期入所）などが代表例で、利用には要介護認定が必要です。費用や空き状況は施設や地域によって異なるため、まずは担当のケアマネージャーや地域包括支援センターに相談してみてください。「少し離れること」は、長く介護を続けるための前向きな選択です。',
  },
  {
    q: '気分の落ち込みが続いています。病院に行ったほうがいいですか？',
    a: '眠れない・食べられない・何も楽しめないといった状態が続く（気分の落ち込みが続く目安として2週間が挙げられることがあります）、あるいは「消えてしまいたい」と感じることがあるなら、ためらわずに専門家を頼ってください。かかりつけ医、心療内科や精神科、お住まいの自治体の相談窓口などが入り口になります。これは決して特別なことでも、弱さでもありません。早めに相談するほど、回復への道のりは穏やかになりやすいといわれます。一人で抱え込まないことが、いちばん大切です。',
  },
]

export default function CaregiverMentalCarePage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://2ndhappiness.com' },
      { '@type': 'ListItem', position: 2, name: '介護する家族のメンタルケア', item: 'https://2ndhappiness.com/caregiver-mental-care' },
    ],
  }

  return (
    <>
      <ArticleJsonLd
        path={'/caregiver-mental-care'}
        title={'介護する家族のメンタルケア｜燃え尽きないための心の備え方'}
        description={'親の介護で心が疲れていませんか。燃え尽き（バーンアウト）のサインの見つけ方、罪悪感との向き合い方、レスパイトや相談窓口など、今日からできる心の守り方をやさしくまとめました。'}
        datePublished={'2026-06-24T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Breadcrumb items={[{ label: '介護する家族のメンタルケア' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        介護する家族のメンタルケア｜燃え尽きないための心の備え方
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年6月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">参考：厚生労働省「地域包括支援センターの概要」、厚生労働省「みんなのメンタルヘルス総合サイト」、厚生労働省「介護保険制度の概要」ほか公的資料（2025年時点）</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          「もう疲れた」「でも、こんなこと思っちゃいけない」——
          親や家族の介護をしていて、ふとそんな気持ちになることはありませんか。
        </p>
        <p className="text-base">
          先に、いちばん大切なことをお伝えします。<strong>あなたの心が疲れているのは、頑張りが足りないからではありません</strong>。
          介護は、それだけ大きな負担を背負う営みです。この記事では、自分を責めずに、心を守りながら介護を続けるためのヒントを、順番にやさしく整理しました。
          全部を今日やる必要はありません。「自分のことも大事にしていい」と思えたら、それで十分な一歩です。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本記事は一般的な情報をまとめたもので、心身の症状や対応は個別の状況によって異なります。気になる症状があるときは、医師など専門家やお住まいの相談窓口にご相談ください。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        介護する家族はなぜ燃え尽きる？心が疲れる4つの理由
      </h2>
      <p className="text-base mb-4">
        「家族のことなのに、どうして自分はこんなにつらいんだろう」——そう感じて、さらに自分を責めてしまう方は少なくありません。
        でも、介護で心がすり減るのには、ちゃんとした理由があります。あなたが弱いからでも、愛情が足りないからでもありません。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base mb-2"><strong>介護で心が疲れやすい、4つの理由</strong></p>
        <p className="text-base mb-1">・<strong>終わりが見えにくい</strong>：いつまで続くか分からない不安が、じわじわと心を削ります。</p>
        <p className="text-base mb-1">・<strong>頑張りが評価されにくい</strong>：「やって当たり前」と思われ、ねぎらいの言葉が届きにくい。</p>
        <p className="text-base mb-1">・<strong>自分の時間がなくなる</strong>：趣味や休息、人付き合いが後回しになり、息抜きの場を失う。</p>
        <p className="text-base">・<strong>一人で抱えがち</strong>：「迷惑をかけたくない」と、悩みを誰にも言えずに溜め込んでしまう。</p>
      </div>
      <p className="text-base mb-4">
        こうした負担が積み重なると、心のエネルギーが少しずつ枯れていきます。
        この状態を、近年は<strong>「燃え尽き（バーンアウト）」</strong>（強い負担が続いて、心や体の力が出にくくなる状態）と呼ぶことがあります。
        いわば、走り続けた車のガソリンが、気づかないうちに空に近づいているような状態です。
      </p>
      <p className="text-base mb-8">
        大事なのは、<strong>これは特別な人だけに起こることではない</strong>ということ。
        まじめで責任感の強い方ほど、自分の限界に気づきにくい傾向があるといわれます。
        だからこそ、次の章で「心のお疲れサイン」を知っておくことが、自分を守る助けになります。
      </p>
      <p className="text-sm text-gray-500 mb-8">
        ※お疲れの方へ：ここから先は、つらいときに読み返してもらえれば十分です。今日は「疲れるのは自然なこと」とだけ持ち帰ってください。
      </p>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        見逃さないで。心の「お疲れサイン」チェック
      </h2>
      <p className="text-base mb-4">
        心の疲れは、体の疲れと違って自分では気づきにくいものです。
        「気のせい」「もう少し頑張れる」と見過ごしているうちに、深くなっていくことがあります。
        次のようなサインが続いていないか、肩の力を抜いて、そっと振り返ってみてください。
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {signs.map((s) => (
          <div key={s.title} className="rounded-xl p-5 bg-white border border-gray-200" style={{ borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1"><span className="mr-1">{s.icon}</span>{s.title}</p>
            <p className="text-sm" style={{ lineHeight: 1.8 }}>{s.body}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-4">
        いくつか当てはまっても、自分を責める必要はまったくありません。
        サインに気づけたこと自体が、心を守る大切な力です。
        当てはまるものが多い、あるいは2週間以上続いていると感じたら、後半でご紹介する相談窓口や医療機関を、どうか早めに頼ってください。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FCE4EC', border: '1px solid #C2185B' }}>
        <p className="text-base">
          💗 とくに「自分が消えてしまいたい」と感じる瞬間があるときは、それは強いSOSです。
          ためらわずに、かかりつけ医、お住まいの精神保健福祉センター、いのちの電話、よりそいホットライン（0120-279-338）などにつながってください。
          あなたが弱いわけでも、おかしいわけでもありません。
        </p>
      </div>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        罪悪感とどう向き合う？「いい介護者」を手放すヒント
      </h2>
      <p className="text-base mb-4">
        介護をする多くの方が、心のどこかで「もっとやってあげなければ」「施設に頼るなんて」という罪悪感を抱えています。
        その気持ちは、ご本人を大切に思うからこそ生まれるもの。けれど、その思いが強すぎると、自分を追い詰める鎖にもなってしまいます。
      </p>
      <p className="text-base mb-4">
        ここで覚えておきたいのが、<strong>「完璧な介護者」になろうとしなくていい</strong>ということ。
        むしろ、介護する人自身が倒れてしまうと、ご本人の暮らしも立ち行かなくなります。
        <mark className="highlight">あなたが倒れずにいることが、ご本人の暮らしも守る</mark>——そう考えると、少し肩の力が抜けるかもしれません。
        だから、元気が出ない日があっても大丈夫。それも自然なことです。
      </p>
      <div className="space-y-3 mb-6">
        {[
          { q: '「頼ること」は手抜きではない', a: 'プロや制度に頼るのは、ご本人により良いケアを届けるための選択です。一人で背負い込むより、ずっと前向きな判断です。' },
          { q: '「離れる時間」があっていい', a: '少し距離を置くことに罪悪感を持つ必要はありません。休んでまた向き合えるなら、それは続けるための大切な工夫です。' },
          { q: '「できない日」があって当たり前', a: '体調も気分も毎日違います。「今日はできなかった」と自分を責めず、「明日でいい」と許してあげてください。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1">✅ {item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base mb-2"><strong>📖 私たちのケースでは（編集部・架空の体験談）</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          母を在宅で介護していた頃、私は「自分が全部やらなきゃ」と思い込んでいました。
          デイサービスに預けるたびに、なんだか申し訳なくて。
          でもある日、ケアマネさんに「お母さんのためにも、あなたが休むことが必要なんですよ」と言われて、肩の力がふっと抜けたんです。
          それから少しずつ、頼れるところは頼るようになりました。もちろん、すぐに気持ちが整理できたわけではありません。
          それでも「自分を責めなくていい」と思えたことが、続けるための支えになった気がしています。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記は考え方を分かりやすく伝えるための編集部による架空のエピソードです。個人の感想であり、結果を保証するものではありません。</p>
      </div>
      <p className="text-base mb-8">
        ここまで読んで、まだ罪悪感が消えなくても大丈夫です。
        その気持ちごと抱えながら、「少しだけ頼ってみる」で十分な一歩になります。
        介護のお金や役割を家族で分け合う方法は、
        <Link href="/sibling-care-discussion" style={{ color: '#1A5E9E', fontWeight: 700 }}>「兄弟姉妹で介護を分担する話し合い方」</Link>
        もあわせてどうぞ。
      </p>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        介護家族のメンタルケア｜今日からできる5つの小さな習慣
      </h2>
      <p className="text-base mb-4">
        「メンタルケアといっても、何をすれば？」という方へ。
        大げさなことは必要ありません。<strong>ほんの小さな習慣を、ひとつ取り入れる</strong>だけで十分です。
        全部をやろうとせず、「これならできそう」と思えるものを一つ選んでみてください。
      </p>
      <div className="space-y-3 mb-6">
        {habits.map((item) => (
          <div key={item.num} className="rounded-xl p-4 flex items-start gap-3 bg-white border border-gray-200">
            <span style={{ background: '#2E7D52', color: '#fff', fontSize: '14px', fontWeight: 800, width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
              {item.num}
            </span>
            <div>
              <p className="font-bold text-base mb-1">{item.title}</p>
              <p className="text-base" style={{ lineHeight: 1.8 }}>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        これらはあくまで「心を軽くするための工夫」であり、続ければ必ず元気になると約束するものではありません。
        それでも、自分をいたわる時間を少しずつ取り戻すことが、燃え尽きを遠ざける助けになります。
        うまくできない日があっても大丈夫。できたときに、自分をそっと褒めてあげてください。
      </p>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        一人で抱えないために。頼れる仕組みと相談窓口
      </h2>
      <p className="text-base mb-4">
        心を守るうえで、いちばん大切なのは<strong>「一人で抱え込まないこと」</strong>です。
        介護を支える仕組みや相談先は、思っているよりたくさんあります。
        どれも、ためらわずに使ってよいものばかりです。
      </p>
      <div className="space-y-3 mb-6">
        <div className="rounded-lg p-4 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">🏢 地域包括支援センター</p>
          <p className="text-base">市町村が定める圏域（おおむね中学校区を目安とすることが多い）ごとに置かれた、高齢者の介護・福祉・健康の「何でも相談窓口」。家族の介護の悩みや、使える制度の案内まで、無料で相談できます。「どこに相談すればいいか分からない」ときの、最初の入り口としておすすめです。</p>
        </div>
        <div className="rounded-lg p-4 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">🤝 ケアマネージャー（介護支援専門員）</p>
          <p className="text-base">ご本人が介護保険を使っていれば、担当のケアマネージャー（介護の計画を立て、相談に乗ってくれる専門職）が付きます。サービスの調整だけでなく、「介護する側のしんどさ」も遠慮なく相談してみてください。</p>
        </div>
        <div className="rounded-lg p-4 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">🛏 レスパイトケア（短期の預かり）</p>
          <p className="text-base">介護する家族が休息を取るために、ご本人を数日だけ預かってもらう仕組み。介護保険の<strong>ショートステイ（短期入所）</strong>が代表例で、ほかにデイサービス（通所介護）など休息を得る方法はいくつもあります。利用には介護保険の要介護（要支援）認定（介護がどのくらい必要かを市町村が判定する手続き）を受けていることが前提で、要支援の方は介護予防短期入所が利用できます。まだ認定を受けていない場合も、その相談から地域包括支援センターでできます。利用時は介護保険の自己負担（所得に応じて1〜3割）に加え食費・滞在費がかかり、費用や空き状況は地域・施設で大きく異なります（あくまで目安）。まずは担当のケアマネージャーに相談してみてください。</p>
        </div>
        <div className="rounded-lg p-4 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">👥 家族会・介護者の集い</p>
          <p className="text-base">同じ立場の人とつながれる場です。「分かってもらえる」だけで心がほどけることも。自治体や地域包括支援センターで、近くの集まりを教えてもらえます。</p>
        </div>
      </div>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base">
          💡 「在宅での介護そのものが限界に近い」と感じているなら、施設という選択肢を情報収集だけ始めておくのも、心の余裕につながります。
          もし将来そういう選択を考えることになっても、それはご本人を見捨てることではありません。今日はここを読んだだけで十分です。焦って決める必要はありません。
          <Link href="/home-care" style={{ color: '#1A5E9E', fontWeight: 700 }}>「在宅介護の続け方」</Link>
          や
          <Link href="/insurance-usage-guide" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護保険の使い方完全ガイド」</Link>
          も、頼れる制度の整理に役立ちます。
        </p>
      </div>

      {/* H2-6 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        いつ専門家を頼ればいい？医療・支援につながる目安
      </h2>
      <p className="text-base mb-4">
        セルフケアや相談だけでは追いつかないほど、心が重くなることもあります。
        そんなとき、医療や専門の支援につながることは、決して「大げさ」でも「負け」でもありません。
        次のような状態が続くなら、専門家を頼るタイミングと考えてみてください。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base mb-2"><strong>専門家に相談したい、こんなとき</strong></p>
        <p className="text-base mb-1">・眠れない、食べられない状態が2週間以上続いている</p>
        <p className="text-base mb-1">・何をしても気分が晴れず、無気力な日が続く</p>
        <p className="text-base mb-1">・お酒や薬に頼る量が増えている</p>
        <p className="text-base">・「消えてしまいたい」と感じる瞬間がある</p>
      </div>
      <p className="text-base mb-4">
        相談先の入り口は、<strong>かかりつけ医</strong>、<strong>心療内科・精神科</strong>、お住まいの<strong>自治体の相談窓口</strong>や保健所などがあります。
        「どこに行けばいいか分からない」ときは、まず地域包括支援センターやかかりつけ医に相談すれば、適切な窓口へつないでもらえます。
      </p>
      <p className="text-base mb-4">
        早めに相談するほど、心の回復は穏やかになりやすいといわれます。
        症状の感じ方や必要なケアは人によって異なるため、気になることがあれば、自己判断せず専門家に相談してみてください。
      </p>
      <p className="text-base mb-8">
        仕事と介護の両立がつらく、心身ともに限界を感じている方は、
        <Link href="/care-resignation" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護離職を防ぐ制度活用ガイド」</Link>
        もご覧ください。介護休業など、働きながら介護を続けるための制度を整理しています。
      </p>

      {/* FAQ */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        よくある質問（FAQ）
      </h2>
      <div className="space-y-4 mb-10">
        {faqItems.map((item, i) => (
          <div key={i} className="rounded-xl p-5 bg-white border border-gray-200">
            <p className="font-bold text-base mb-2" style={{ color: '#2E7D52' }}>Q. {item.q}</p>
            <p className="text-base" style={{ lineHeight: 1.9 }}>A. {item.a}</p>
          </div>
        ))}
      </div>

      {/* まとめ */}
      <div className="rounded-xl p-6 mb-10" style={{ backgroundColor: '#F3F8F5', border: '2px solid #2E7D52' }}>
        <h2 className="text-xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
          まとめ：あなたが元気でいることが、いちばんの介護
        </h2>
        <p className="text-base mb-3">
          介護する家族のメンタルケアでいちばん大切なのは、「自分を後回しにしすぎない」こと。
          心のお疲れサインに気づき、罪悪感を少し手放し、頼れる仕組みを使う。
          それは決して甘えではなく、長く介護を続けるための、立派な工夫です。
          全部を一度に変えなくて大丈夫。今いる場所から、できる一歩で十分です。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            '心の「お疲れサイン」が出ていないか、そっと振り返ってみる',
            '1日5分でいい、「自分だけの時間」を意識して作る',
            'つらいときの相談先（地域包括支援センター・かかりつけ医）を控えておく',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          ここまで読んでくださったこと自体が、自分を大切にしようとしている証拠です。焦らず、一歩ずつでいきましょう。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/sibling-care-discussion', label: '兄弟姉妹で介護を分担する話し合い方', icon: '🤝' },
          { href: '/care-resignation', label: '介護離職を防ぐ制度活用ガイド', icon: '💼' },
          { href: '/care-manager-relation', label: 'ケアマネージャーとの上手な付き合い方', icon: '🤝' },
          { href: '/home-care', label: '在宅介護の続け方・限界のサイン', icon: '🏠' },
          { href: '/insurance-usage-guide', label: '介護保険の使い方完全ガイド（申請から給付まで）', icon: '📝' },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white transition hover:opacity-90"
            style={{ border: '1px solid #e5e7eb', textDecoration: 'none', color: 'inherit' }}
          >
            <span style={{ fontSize: '20px' }}>{link.icon}</span>
            <p className="font-bold text-sm" style={{ color: '#2E7D52' }}>{link.label} →</p>
          </Link>
        ))}
      </div>

      {/* CTA前のクッション（寄り添い） */}
      <p className="text-base mb-2" style={{ lineHeight: 1.9 }}>
        いますぐ何かを決めなくて大丈夫です。「いざというときの選択肢を、そっとそばに置いておく」だけでも、心の余裕につながります。
        情報を集めることは、ご本人を手放すことでも、あなたが頑張れなかったことでもありません。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        ※本ページにはアフィリエイト広告を含みます。費用・サービス内容・対応エリアなどを比較し、ご家族の状況に合った選択にお役立てください。
      </p>

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は、介護をする家族の心の健康に関する一般的な情報をまとめたものです。医療的な診断・治療を目的としたものではなく、特定の効果・改善を保証するものではありません。
          心身の症状の程度や必要な対応は、お一人おひとり異なります。気になる症状が続くときは、かかりつけ医・心療内科・精神科などの医療機関や、お住まいの市区町村・地域包括支援センター・保健所などの相談窓口にご相談ください。
          介護保険サービス（ショートステイ等）の内容・費用・利用条件は、制度改正やお住まいの市区町村、施設によって異なる場合があります。本記事は特定のサービスへの加入や契約を強制するものではなく、最終的なご判断はご家族の状況に合わせて行ってください。
        </p>
      </div>
    </>
  )
}
