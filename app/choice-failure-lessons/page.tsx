import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '老人ホーム選びの失敗と後悔｜先輩家族の7つの教訓',
  description: '老人ホーム選びで後悔した家族には共通のつまずきがあります。費用の総額・立地・施設の種類・見学・本人の意思・医療体制・契約書という7つの教訓を、先輩家族の視点でやさしく整理。今日から使える確認チェックリストや費用の考え方、合わなかったときの住み替えという選択肢まで、焦らず後悔しにくい選び方のヒントをまとめました。',
  alternates: {
    canonical: 'https://2ndhappiness.com/choice-failure-lessons',
  },
  openGraph: {
    title: '老人ホーム選びで失敗した家族から学ぶ7つの教訓',
    description: '老人ホーム選びで後悔した家族には共通のつまずきがあります。費用・立地・施設の種類・見学・本人の意思・医療体制・契約書という7つの教訓を、先輩家族の視点でやさしく整理しました。',
    url: 'https://2ndhappiness.com/choice-failure-lessons',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

const summaryItems = [
  '後悔の多くは<mark class="highlight">「情報が足りないまま急いで決めた」</mark>ことから生まれます。焦らないことが最大の予防策です',
  'つまずきやすいのは<mark class="highlight">費用の総額・立地・施設の種類・見学・本人の意思・医療体制・契約書</mark>の7つの場面です',
  '完璧な施設を探すより、<mark class="highlight">「ここは確認しておく」というポイントを押さえる</mark>ほうが後悔は減らせます',
  '万一「合わなかった」と感じても、<mark class="highlight">住み替えという選択肢</mark>は残されています。一度で決めきらなくて大丈夫です',
]

const lessons = [
  {
    number: '01',
    icon: '💴',
    title: '月額だけを見て、総額を確認しなかった',
    fail: '「月15万円なら払える」と月額利用料（毎月の家賃・食費・介護サービス費などの合計）だけで決めたら、入居一時金や、介護が重くなったときの追加費用で、想定よりずっと負担が大きくなってしまった。',
    lesson: '費用は「今の月額」ではなく「これから何年ぶんかかるか」で見る、という教訓です。パンフレットの月額は、いわば車の本体価格。実際には保険や税金にあたる費用が上乗せされます。施設の種類ごとの月額の目安も幅が大きく（たとえば特別養護老人ホームは月5〜15万円、介護付き有料老人ホームは月15〜30万円程度／2025年時点の一般的な目安。地域や施設で大きく異なります）、種類選びと費用は切り離せません。',
    color: '#FFF8E1', border: '#FFC107', text: '#E65100',
    actions: [
      '入居一時金・月額・そのほかの実費（おむつ代・医療費・レクリエーション費など）を合算して「総額」で比べる',
      '介護サービス費は要介護度（介護がどのくらい必要かのレベル）と所得に応じた自己負担割合（一般に1割、一定以上の所得で2割・3割）で変わることを知り、自分の区分を役所やケアマネに確認しておく',
      '介護が重くなると費用がどう変わるかを施設に確認する。なお介護保険には月の自己負担に上限を設ける「高額介護サービス費」もあり、上限を超えた分は払い戻されます（上限は所得区分別）',
    ],
    link: { href: '/cost', label: '老人ホームの費用相場を確認する' },
  },
  {
    number: '02',
    icon: '📍',
    title: '「良い施設」を優先して、通いやすさを軽視した',
    fail: '設備もサービスも申し分ない施設を選んだものの、家から片道2時間。最初は張り切って通ったけれど、だんだん足が遠のいて、本人も家族も寂しい思いをすることに。',
    lesson: '施設のスペックと同じくらい、「家族が無理なく通えるか」が暮らしの満足度を左右する、という教訓です。会いに行きやすさは、入居後の安心に静かに効いてきます。',
    color: '#E3F2FD', border: '#1A5E9E', text: '#1A5E9E',
    actions: [
      '「誰が・どれくらいの頻度で通うか」を家族で先に話し合い、現実的に通える範囲で候補を絞る',
      '駅からの距離・駐車場の有無・面会のしやすさも、設備と同じ比重で確認する',
    ],
    link: { href: '/family-visit-rhythm', label: '入居後の面会頻度と関わり方を見る' },
  },
  {
    number: '03',
    icon: '🏠',
    title: '施設の種類の違いを知らないまま決めた',
    fail: '「老人ホーム」とひとくくりに考えていて、入居してから「ここは介護が重くなると住み続けられない種類だった」と気づいた。慌てて次を探すことになった。',
    lesson: '「老人ホーム」は俗称で、実際には目的や介護の重さで種類が分かれている、という教訓です。特別養護老人ホーム（特養）・介護老人保健施設（老健）・介護付き有料老人ホーム・住宅型有料老人ホーム・サービス付き高齢者向け住宅（サ高住）・グループホームなどがあり、入居条件や介護が重くなったときの対応がそれぞれ違います。たとえば老健は在宅復帰を目指す一時的な施設で長期入所を前提としない、住宅型有料やサ高住は介護が重くなると外部サービスの追加や住み替えが必要になる場合がある、など性格が異なります。今は「名前を覚える」より「種類がいくつかある」と分かれば十分です。ここは少し専門的なので、迷ったら種類の解説記事とあわせて読んでください。',
    color: '#E8F5E9', border: '#2E7D52', text: '#2E7D52',
    actions: [
      '「介護が重くなっても住み続けられるか」「認知症に対応しているか」を、種類ごとの特徴として確認する',
      '特養は原則として要介護3以上が対象など、種類ごとに入居条件があります。希望する種類の入居要件を先に確認する',
      '公的施設（特養・老健など）と民間施設（有料・サ高住など）では費用も入居条件も異なることを知っておく',
    ],
    link: { href: '/types', label: '施設の種類と違いをわかりやすく見る' },
  },
  {
    number: '04',
    icon: '👀',
    title: '見学せず、資料とイメージだけで決めた',
    fail: 'きれいなパンフレットと立地だけで申し込んだら、実際の雰囲気やスタッフの様子が想像と違った。「一度でも見に行っていれば」と感じた。',
    lesson: '写真ではわからない空気感は、その場に立ってはじめて伝わる、という教訓です。家探しと同じで、間取り図だけでは決めきれないのと似ています。可能な範囲で複数を見比べると、判断の軸ができてきます。',
    color: '#F3E5F5', border: '#7B1FA2', text: '#7B1FA2',
    actions: [
      '可能なら2〜3施設を見学し、食事の時間帯や日中の様子など「生活が見える時間」に訪ねてみる',
      'スタッフの表情・入居者への声かけ・においや清潔感など、資料に載らない部分を自分の目で確かめる',
    ],
    link: { href: '/how-to-choose', label: '施設の選び方のポイントを見る' },
  },
  {
    number: '05',
    icon: '🗣️',
    title: '本人の気持ちを置き去りにして進めた',
    fail: '家族が良かれと思って手早く話を進めた結果、本人が「勝手に決められた」と感じてしまい、入居後もなかなか気持ちがなじまなかった。',
    lesson: '選ぶ主役は、あくまで暮らすご本人だという教訓です。家族が段取りを整えつつ、要所で本人の希望を聞く。この順番だけで、入居後のなじみ方が変わってくることがあります。',
    color: '#FCE4EC', border: '#C2185B', text: '#C2185B',
    actions: [
      '「どんな暮らしがいい？」と、本人が話せる範囲で希望を聞く時間をつくる',
      '認知症などで意思の確認が難しい場合も、これまでの生活歴や好みを手がかりに、本人らしさを尊重する',
    ],
    link: { href: '/tell-parents', label: '親に前向きに考えてもらうヒントを見る' },
  },
  {
    number: '06',
    icon: '🏥',
    title: '医療体制や「その後」の対応を確認しなかった',
    fail: '入居時は元気だったので医療面を気にせず決めたが、体調が変わったときに「ここでは対応が難しい」と言われ、退去や住み替えが必要になった。',
    lesson: '「今」だけでなく「これから」を見て選ぶ、という教訓です。介護や医療が必要になる度合いは、時間とともに変わっていくもの。先を見越して確認しておくと、いざというときに慌てずにすみます。',
    color: '#E0F2F1', border: '#00897B', text: '#00695C',
    actions: [
      '協力医療機関との連携・通院の付き添い・看取りへの対応など、体調が変わったときの体制を確認する',
      'どういう状態になると退去を求められる可能性があるか（退去要件）を、契約前に必ず聞いておく',
    ],
    link: { href: '/end-of-life-at-home', label: '看取りへの備えを見る' },
  },
  {
    number: '07',
    icon: '📄',
    title: '契約書と重要事項説明書を読み込まなかった',
    fail: '説明を聞いて安心し、書類にざっと目を通して契約。あとで「入居一時金の返還ルール」や「追加費用」の条件が思っていたのと違い、金銭面でもやもやが残った。',
    lesson: '契約書は退屈でも、後悔を防ぐいちばんの砦だという教訓です。ここは難しく感じる方も多いので、確認するポイントを3つに絞れば大丈夫。全部を暗記する必要はありません。',
    color: '#EFEBE9', border: '#8D6E63', text: '#6D4C41',
    actions: [
      '「入居一時金の返還条件」「毎月かかる費用の内訳」「退去を求められる条件」の3点は、必ず自分の目で確認する',
      '分からない条項はその場で質問し、口頭説明と書類の内容が食い違っていないかを照らし合わせる',
    ],
    link: { href: '/process', label: '入居までの流れ・手続きを見る' },
  },
]

const faqItems = [
  {
    q: '老人ホーム選びで、いちばん後悔しやすいのはどんな点ですか？',
    a: '多くのご家族が振り返って挙げるのは「費用の見通しが甘かった」「急いで決めてしまった」という2点です。月額利用料だけを見て入居一時金や介護度が上がったときの追加費用を確認しきれなかったり、退院や在宅介護の限界が重なって、十分に比べる時間がないまま契約してしまったりするケースです。ただ、これらは「情報が足りないまま急いだ」ことが共通の背景で、逆に言えば、早めに情報を集めて、確認するポイントを押さえておけば、かなり減らせる後悔でもあります。完璧な施設を探すというより、「ここだけは確認する」という軸を持っておくことが、遠回りのようで近道になります。',
  },
  {
    q: '見学は必ず行ったほうがいいですか？資料だけではだめでしょうか。',
    a: '資料やホームページはとても参考になりますが、可能であれば一度は見学されることをおすすめします。写真では伝わりにくいスタッフの雰囲気、入居者への声のかけ方、施設のにおいや清潔感、日中の過ごし方など、その場に行ってはじめて分かることが多いためです。とはいえ、遠方だったり、時間や体力に余裕がなかったりして、何件も回るのが難しいこともありますよね。その場合は無理をせず、まず1件だけでも、あるいはオンライン見学や動画で様子を見せてもらう方法もあります。大切なのは件数ではなく、「イメージだけで決めない」という姿勢です。',
  },
  {
    q: '施設の種類が多すぎて違いが分かりません。どう考えればいいですか？',
    a: '「老人ホーム」は俗称で、実際には特別養護老人ホーム（特養）、介護老人保健施設（老健）、介護付き有料老人ホーム、住宅型有料老人ホーム、サービス付き高齢者向け住宅（サ高住）、グループホームなど、目的や介護の重さによって種類が分かれています。すべてを細かく覚える必要はありません。選ぶときの実用的な視点は、「今の介護の度合いに合っているか」「介護が重くなっても住み続けられるか」「費用は無理のない範囲か」の3つです。まずはこの軸でざっくり絞り、気になる種類だけ詳しく調べていくと、混乱しにくくなります。種類ごとの特徴は種類解説の記事にまとめています。',
  },
  {
    q: '入居してから「合わなかった」と感じたら、もう手遅れですか？',
    a: '手遅れではありません。老人ホームは、一度入ったら二度と変えられないというものではなく、住み替えという選択肢が残されています。実際、暮らしてみてから合わないと感じ、別の施設へ移るご家族もいます。もちろん、移ることでご本人に負担がかかる面もあるため、まずは施設のケアマネージャー（介護の計画を立て、調整してくれる専門職）や、在宅で利用していた居宅のケアマネージャー、お住まいの地域包括支援センターなどに、いま感じている不安を相談してみるのがおすすめです。工夫で解決できることも少なくありません。それでも難しいときに、住み替えを具体的に検討する——という順番で考えると、あわてずにすみます。一度の選択で人生が決まるわけではない、と知っておくだけでも気持ちが軽くなります。',
  },
  {
    q: '後悔しないために、まず何から始めればいいですか？',
    a: '最初の一歩としておすすめなのは、「情報を集めながら、確認したいポイントを書き出しておく」ことです。費用の総額、通いやすさ、施設の種類、見学の予定、本人の希望、医療体制、契約書の確認事項——この記事で挙げた7つを、そのままチェックリストにしてしまって構いません。すべてを一度にそろえる必要はなく、元気なうちから少しずつ情報に触れておくと、いざというときに落ち着いて選べます。焦って決めないための最大の準備は、早めに動き始めること。今日は資料を1つ取り寄せてみる、くらいの小さな一歩で十分です。',
  },
]

export default function ChoiceFailureLessonsPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <ArticleJsonLd
        path={'/choice-failure-lessons'}
        title={'老人ホーム選びで失敗した家族から学ぶ7つの教訓'}
        description={'老人ホーム選びで後悔した家族には共通のつまずきがあります。費用・立地・施設の種類・見学・本人の意思・医療体制・契約書という7つの教訓を、先輩家族の視点でやさしく整理しました。'}
        datePublished={'2026-07-02T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Breadcrumb items={[{ label: '老人ホーム選びで失敗した家族から学ぶ7つの教訓' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホーム選びの失敗に学ぶ｜後悔しないための7つの教訓
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年7月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">※本記事の制度・費用・施設区分に関する記述は、厚生労働省・地域包括支援センターなどの公開情報を参考にしています（2025年時点）。「後悔しやすい点」の傾向は、特定の統計ではなく、編集部が一般的な実情を整理したものです。</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          「もっとよく調べてから決めればよかった」——老人ホーム選びを終えたご家族から、そんな声を聞くことがあります。
          でも、それは決して「選び方が下手だった」わけではありません。多くの場合、限られた時間の中で、精いっぱいの判断をされた結果なのです。
        </p>
        <p className="text-base">
          この記事では、先輩家族がつまずきやすかった<strong>7つの場面</strong>を、責めるためではなく、これから選ぶ方が同じ思いをしなくてすむように整理しました。
          読むと「気をつけることが多いな」と感じるかもしれませんが、<strong>全部を完璧にこなす必要はありません</strong>。
          気になるところだけ拾い読みして、「これは確認しておこう」と思えるものが1つでも見つかれば十分です。焦らず、いっしょに見ていきましょう。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本記事は、老人ホーム選びに関する一般的な情報をまとめたものです。費用・入居条件・退去要件・医療体制などは、特別養護老人ホーム・有料老人ホーム・サービス付き高齢者向け住宅など、施設の種類や個々の事業者によって異なります。具体的なご相談は、入居先の施設・担当のケアマネージャー、お住まいの市区町村や地域包括支援センターなどの専門職にお寄せください。なお、本ページは広告（アフィリエイト）を含みます。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        老人ホーム選びで「後悔した」と感じる家族は珍しくない
      </h2>
      <p className="text-base mb-4">
        「うちだけが失敗したのかも」——そう感じてしまう方もいますが、老人ホーム選びで何かしらの後悔を抱えるご家族は、けっして少なくありません（編集部が見聞きする範囲での傾向で、統計に基づくものではありません）。
        大きな決断であるほど、あとから「あの点はどうだったかな」と振り返るのは自然なことで、それ自体は悪いことではありません。
      </p>
      <p className="text-base mb-4">
        大切なのは、後悔を「失敗」として抱え込むのではなく、<strong>これから選ぶ人のヒントに変えていく</strong>ことです。
        先輩家族のつまずきには、実は共通したパターンがあります。逆にいえば、そのパターンを先に知っておくだけで、避けられる後悔がたくさんあるということです。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base">
          💡 ここで覚えておきたいのは、<strong>「後悔ゼロの完璧な選択」を目指さなくていい</strong>ということです。
          どんな施設にも合う・合わないはあります。目指すのは完璧さではなく、「大事なところは確認した」と思える納得感。まずは肩の力を抜いて読み進めてください。
        </p>
      </div>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        なぜ後悔は生まれるの？よくあるつまずきの背景
      </h2>
      <p className="text-base mb-4">
        「気をつけていたはずなのに、なぜ？」——後悔の背景には、多くの場合、<strong>共通する事情</strong>があります。
        それを知っておくと、「自分が悪かった」と責めずにすみ、対策も立てやすくなります。
      </p>
      <div className="space-y-3 mb-6">
        {[
          { q: '時間がなく、急いで決めるしかなかった', a: '退院の期限や在宅介護の限界が重なり、じっくり比べる余裕がないまま決めることになりがちです。焦らざるを得ない状況は誰にでもあり、あなたのせいではありません。だからこそ、確認する軸を先に持っておくことが助けになります。' },
          { q: '情報が多すぎて、何を基準にすればいいか分からなかった', a: '施設の種類も費用の仕組みも複雑で、初めての方が短期間で全体像をつかむのは簡単ではありません。基準がないと、目についた情報で決めてしまいがちです。' },
          { q: '「まだ先のこと」と準備を後回しにしていた', a: '元気なうちは考えづらいテーマですが、いざ必要になると時間に追われます。早めの情報収集が、そのまま余裕につながります。' },
          { q: '家族の間で希望や役割がそろっていなかった', a: '誰が中心に動くか、何を優先するかがバラバラだと、判断が揺れたり、あとで意見が食い違ったりします。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #F57C00' }}>
            <p className="font-bold text-base mb-1">🤔 {item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        こうして並べてみると、後悔の多くは<strong>「情報が足りないまま、急いで決めた」</strong>という一点に行き着きます。
        裏を返せば、早めに動き出し、確認するポイントを知っておくだけで、避けられるものが多いということ。
        次の章から、具体的な7つの教訓を見ていきましょう。家族間の役割分担については
        <Link href="/sibling-care-discussion" style={{ color: '#1A5E9E', fontWeight: 700 }}>「兄弟姉妹で介護を分担する話し合い方」</Link>
        も参考になります。
      </p>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        先輩家族から学ぶ7つの教訓
      </h2>
      <p className="text-base mb-6">
        ここからが本題です。先輩家族が「ここでつまずいた」と振り返る場面を、7つにまとめました。
        それぞれ「よくある失敗」→「そこから学べる教訓」→「今からできる確認」の順で紹介します。
        全部を身構えて読む必要はありません。ご自身の状況に近いものから、拾い読みしてください。
      </p>
      <div className="space-y-8 mb-6">
        {lessons.map((l) => (
          <section key={l.number}>
            <div className="rounded-2xl px-5 py-4 mb-4" style={{ backgroundColor: l.color, border: `2px solid ${l.border}` }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold px-2 py-1 rounded-full text-white flex-shrink-0" style={{ backgroundColor: l.border }}>
                  教訓 {l.number}
                </span>
                <span style={{ fontSize: '24px' }}>{l.icon}</span>
                <h3 className="text-lg md:text-xl font-bold" style={{ color: '#1A1A1A' }}>
                  {l.title}
                </h3>
              </div>
              <div className="rounded-xl px-4 py-3 mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
                <p className="text-xs font-bold mb-1" style={{ color: l.text }}>🍃 よくあるつまずき</p>
                <p className="text-sm" style={{ color: '#444', lineHeight: 1.8 }}>{l.fail}</p>
              </div>
              <div className="rounded-xl px-4 py-3" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
                <p className="text-xs font-bold mb-1" style={{ color: l.text }}>💡 ここから学べること</p>
                <p className="text-sm" style={{ color: '#444', lineHeight: 1.8 }}>{l.lesson}</p>
              </div>
            </div>

            <p className="text-sm font-bold mb-3" style={{ color: l.text }}>
              ✅ 今からできる確認
            </p>
            <div className="space-y-3 mb-3">
              {l.actions.map((action, i) => (
                <div key={i} className="rounded-xl bg-white p-4" style={{ border: `1px solid ${l.border}40`, borderLeft: `4px solid ${l.border}` }}>
                  <p className="text-sm text-gray-700" style={{ lineHeight: 1.7 }}>{action}</p>
                </div>
              ))}
            </div>

            {l.link && (
              <Link
                href={l.link.href}
                className="inline-flex items-center gap-1 text-sm font-bold rounded-lg px-3 py-2 transition hover:opacity-80"
                style={{ backgroundColor: l.color, color: l.text, border: `1px solid ${l.border}`, textDecoration: 'none' }}
              >
                📎 {l.link.label} →
              </Link>
            )}
          </section>
        ))}
      </div>

      {/* 体験談 */}
      <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base mb-2"><strong>📖 私たちのケースでは（編集部・架空の体験談）</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          父の退院が急に決まり、私は焦って、いちばん設備のよさそうな施設を月額だけ見て申し込みました。
          でも、家から遠くて通いづらく、しばらくして父の介護が重くなると「このままでは対応が難しい」と言われて。
          結局、住み替えを考えることになりました。あのとき、費用の総額と、介護が重くなったときの対応をひと言確認していれば——と、今でも思います。
          この経験があるから、まわりには「1件でいいから見学して、契約書の退去条件だけは読んでね」と伝えるようにしています。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記は教訓を分かりやすく伝えるための編集部による架空のエピソードです。個人の感想であり、同じ結果を保証するものではありません。</p>
      </div>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        後悔を防ぐために、今日からできる小さな準備
      </h2>
      <p className="text-base mb-4">
        7つの教訓を読んで、「やることが多い」と感じたかもしれません。でも、いっぺんにやる必要はありません。
        <strong>後悔を防ぐいちばんの準備は、実は「早めに動き始めること」ひとつ</strong>です。時間の余裕が、そのまま選択の質につながります。
      </p>
      <p className="text-base mb-4">
        焦らざるを得ない状況は、誰にでも起こります。だからこそ、この記事の確認ポイントが役に立ちます。
        まだ入居が差し迫っていない段階でも、資料を1つ取り寄せてみる、費用の相場をざっと眺めてみる、家族で「もしものとき誰が動く？」と一度話しておく——
        そんな小さな一歩を、元気なうちに踏んでおくだけで、いざというときの余裕がまるで違ってきます。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#F3F8F5', border: '1px solid #2E7D52' }}>
        <p className="text-base font-bold mb-2" style={{ color: '#2E7D52' }}>📝 7つの教訓をそのままチェックリストに</p>
        <ul className="space-y-2">
          {[
            '費用は「入居一時金＋月額＋実費」の総額で比べたか',
            '家族が無理なく通える距離・場所か',
            '施設の種類と、介護が重くなったときの対応を確認したか',
            '資料だけでなく、実際に見学（またはオンライン見学）したか',
            '本人の希望を聞く時間をつくったか',
            '医療体制・退去要件など「その後」を確認したか',
            '契約書の「返還条件・費用・退去条件」に目を通したか',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>☑</span>
              <span style={{ lineHeight: 1.7 }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-base mb-8">
        全部にチェックがつかなくても、焦らないで大丈夫です。まずは費用感からでも、見学からでも、始めやすいところから。
        費用の見通しを立てたい方は
        <Link href="/simulation" style={{ color: '#1A5E9E', fontWeight: 700 }}>「費用20年シミュレーション」</Link>
        、選び方の全体像を知りたい方は
        <Link href="/how-to-choose" style={{ color: '#1A5E9E', fontWeight: 700 }}>「施設の選び方」</Link>
        もあわせてどうぞ。
      </p>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        それでも「合わなかった」と感じたら？住み替えという選択肢
      </h2>
      <p className="text-base mb-4">
        どれだけ丁寧に選んでも、暮らしてみて初めて分かることはあります。もし「思っていたのと違った」と感じても、<strong>それで終わり、ではありません</strong>。
        老人ホームは一度入ったら変えられないものではなく、<strong>住み替えという選択肢</strong>が残されています。
      </p>
      <p className="text-base mb-4">
        ただ、住み替えはご本人にとって環境が再び変わることでもあり、体や心に負担がかかる面もあります。
        そこでおすすめしたいのが、いきなり移ることを考えるのではなく、<strong>まず施設の相談員（生活相談員などの相談担当職員）やケアマネージャーに、今感じている不安を相談してみる</strong>ことです。
        声のかけ方の工夫や、日中の過ごし方の調整など、住み替えなくても解決できることは少なくありません。
      </p>
      <p className="text-base mb-8">
        相談しても難しいと感じたときに、はじめて住み替えを具体的に検討する。この順番で考えると、あわてずにすみます。
        「一度の選択で人生が決まるわけではない」——そう知っておくだけでも、今の選択にかかる重圧は、ずいぶん軽くなるはずです。
        入居後の関わり方に迷ったときは
        <Link href="/family-visit-rhythm" style={{ color: '#1A5E9E', fontWeight: 700 }}>「入居後の家族の面会頻度と関わり方」</Link>
        、介護する側の心の余裕については
        <Link href="/caregiver-mental-care" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護する家族のメンタルケア」</Link>
        も頼ってください。
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
          まとめ：完璧を目指すより「確認する軸」を持つ
        </h2>
        <p className="text-base mb-3">
          老人ホーム選びの後悔の多くは、じっくり選ぶ時間がとれない状況そのものから生まれます。あなたの選び方が悪かったわけではありません。
          裏を返せば、早めに動き出し、確認するポイントを知っておくだけで、避けられる後悔がたくさんあるということです。
          完璧な施設を探すのではなく、「ここは確認しておこう」という自分なりの軸を持つこと。それが、納得のいく選択への近道です。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            '費用は「総額」で、通いやすさも設備と同じ比重で見る',
            '施設の種類と「介護が重くなったとき」の対応を確認する',
            '資料だけで決めず、本人の希望を聞き、契約書に目を通す',
            '合わなければ住み替えもできる。今日は資料を1つ取り寄せる、でも十分',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          ここまで読んで、まだ迷っていても大丈夫です。迷う時間そのものが、ご家族を大切に思っている証拠です。焦らず、できるところから一歩ずつ進めていきましょう。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/how-to-choose', label: '老人ホームの選び方｜後悔しないためのポイント', icon: '🔍' },
          { href: '/types', label: '老人ホームの種類と違いをわかりやすく解説', icon: '🏠' },
          { href: '/cost', label: '費用はどのくらい？月額・初期費用の相場', icon: '💴' },
          { href: '/family-visit-rhythm', label: '入居後の家族の面会頻度と関わり方', icon: '🏡' },
          { href: '/sibling-care-discussion', label: '兄弟姉妹で介護を分担する話し合い方', icon: '🤝' },
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
        後悔しない選択のために、費用やサービスを「知っておくだけ」でも、心の余裕につながります。
        知っておくことは、急いで契約することでも、今の状況を否定することでもありません。まずは情報を集めるところから、気軽に始めてみてください。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        ※本ページにはアフィリエイト広告を含みます。費用・サービス内容・対応エリアなどを比較し、ご家族の状況に合った選択にお役立てください。
      </p>

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は、老人ホーム選びに関する一般的な情報をまとめたものです。特定の選び方による効果や結果を保証・推奨するものではありません。
          費用・入居条件・退去要件・医療体制・契約内容などは、施設の種類（特別養護老人ホーム・有料老人ホーム・サービス付き高齢者向け住宅など）や個々の事業者、時期によって異なる場合があります。
          制度や費用に関する記述は2025年時点の一般的な情報であり、最新の内容は厚生労働省・お住まいの市区町村の情報をご確認ください。
          実際の選択・契約にあたっては、入居先の施設・担当のケアマネージャー、お住まいの市区町村や地域包括支援センターなどの専門職にご相談のうえ、ご本人とご家族の状況に合わせてご判断ください。
        </p>
      </div>
    </>
  )
}
