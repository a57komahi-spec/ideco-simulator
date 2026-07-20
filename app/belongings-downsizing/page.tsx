import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '老人ホーム入居前の身辺整理｜持ち物の減らし方',
  description: '老人ホーム入居前の身辺整理を、生前整理・持ち物の減らし方としてやさしく整理しました。荷物を減らす順番、思い出の品との向き合い方、居室に持っていくものリスト、家や大きな不用品の片づけと費用の注意点まで、焦らず進めるコツを解説します。',
  alternates: {
    canonical: 'https://2ndhappiness.com/belongings-downsizing',
  },
  openGraph: {
    title: '老人ホーム入居前の身辺整理｜生前整理・持ち物の減らし方',
    description: '老人ホーム入居前の身辺整理を、生前整理・持ち物の減らし方としてやさしく整理しました。荷物を減らす順番、思い出の品との向き合い方、居室に持っていくものリスト、家や大きな不用品の片づけと費用の注意点まで、焦らず進めるコツを解説します。',
    url: 'https://2ndhappiness.com/belongings-downsizing',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
    publishedTime: '2026-07-21T05:00:00+09:00',
  },
}

const summaryItems = [
  '老人ホームの居室は限られたスペースのため、入居前に<mark class="highlight">持ち物を少しずつ減らしておく</mark>と、当日も入居後もぐっと楽になります',
  '身辺整理は<mark class="highlight">「使っているもの」から先に分ける</mark>と迷いにくく、思い出の品は最後に回すのがコツです',
  '<mark class="highlight">写真に撮って残す・一部だけ持っていく</mark>など、捨てる以外の残し方もあります。全部を手放す必要はありません',
  '<mark class="highlight">今日から全部やる必要はありません</mark>。まずは引き出し一つ、段ボール一箱から。焦らず進めて大丈夫です',
]

const stepItems = [
  { item: '① 毎日使っているもの', note: '衣類・眼鏡・薬・洗面用具など。ここは「残す」側。減らす対象からはいったん外して考えます', color: '#E8F5E9', border: '#2E7D52', label: '#2E7D52' },
  { item: '② 明らかに使っていないもの', note: '何年も袖を通していない服、壊れた家電、期限切れの品など。ここから手をつけると迷いが少なく進みます', color: '#E3F2FD', border: '#1A5E9E', label: '#1A5E9E' },
  { item: '③ 迷うもの（保留ボックスへ）', note: '「いつか使うかも」と迷うものは、無理に決めず“保留の箱”へ。時間をおくと気持ちが整理できます', color: '#FFF8E1', border: '#FFC107', label: '#E65100' },
  { item: '④ 思い出の品', note: '写真・手紙・記念の品など。ここは最後に、ゆっくりと。減らすより「どう残すか」を考える対象です', color: '#FCE4EC', border: '#C2185B', label: '#C2185B' },
]

const bringItems = [
  { item: '衣類（数日分〜2週間分)', note: '洗濯の頻度は施設で異なります。まずは少なめに持ち込み、暮らしながら調整するのが安心です' },
  { item: '洗面・入浴用具', note: '歯ブラシ・タオル・整髪料など。施設で用意されるものもあるため、事前に確認を' },
  { item: 'お薬・お薬手帳', note: '服用中の薬と、飲む時間が分かるメモ。医療連携のうえでとても大切です' },
  { item: '眼鏡・補聴器・入れ歯など', note: '本人の生活に欠かせない道具。予備や洗浄用品もあると安心です' },
  { item: '思い出の品を少しだけ', note: '写真立て・使い慣れた小物など、居室が「その人らしく」なるものを厳選して' },
  { item: '身分証・保険証などの控え', note: '原本の保管方法は施設と相談。コピーや一覧をまとめておくと手続きがスムーズです' },
]

const faqItems = [
  {
    q: '老人ホームに入居するとき、持ち物はどのくらいまで減らせばよいですか？',
    a: '施設や部屋のタイプによって居室の広さは大きく異なるため、「何点まで」という決まった正解はありません。個室でも家具付きの場合があれば、家具を持ち込める場合もあります。まずは入居先の担当者に「居室の広さ」「持ち込める家具」「収納の大きさ」を確認し、それに合わせて減らしていくのが確実です。目安としては、毎日の暮らしに必要なものと、その人らしさを感じられる思い出の品を少し、というイメージから始めるとよいでしょう。足りなければ後から届けることもできますので、最初から完璧に減らそうと気負わなくて大丈夫です。',
  },
  {
    q: '親の荷物を片づけるのが、なんだか申し訳なくて進みません。',
    a: '長年かけて集めてきたものには、その人の人生や思い出が詰まっています。手放すことに気が引けるのは、それだけ親御さんの暮らしを大切に思っている証拠です。無理にすべてを捨てる必要はありません。写真に撮って残す、一部だけ持っていく、親戚に譲るなど、「捨てる」以外の残し方もたくさんあります。何より、片づけは本人の気持ちを置き去りにしないことが大切です。「これはどうする？」と一緒に選ぶ時間そのものが、思い出を振り返る大切なひとときにもなります。',
  },
  {
    q: '思い出の品や写真が多すぎて、どうしても減らせません。',
    a: '思い出の品は、身辺整理のなかでいちばん時間のかかるところです。ですから、最後に、いちばんゆっくり向き合ってください。おすすめは、写真やアルバムはデータ化して残す、思い出の品は「特に大切な数点」だけを選ぶ、という方法です。全部を残せなくても、選び抜いた数点があれば、思い出はちゃんとそばに置いておけます。それでも決めきれないものは、無理に手放さず、ご家族が預かる形にしても構いません。急いで結論を出さなくて大丈夫です。',
  },
  {
    q: '家に残った家具や不用品は、どう処分すればよいですか？',
    a: '量が多い場合は、自治体の粗大ごみ回収、リサイクルショップ、不用品回収業者、生前整理・遺品整理の専門業者などを組み合わせて進めるのが一般的です。費用は荷物の量・間取り・地域によって大きく異なるため、複数の業者から見積もりを取り、内容を比べてから決めると安心です。なお、「無料回収」をうたって後から高額な料金を請求したり、不法投棄をしたりする悪質な事業者への注意も呼びかけられています。自治体の許可を得た業者か確認し、料金を書面で残しておくとよいでしょう。自宅そのものの扱いに悩む場合は、専門家への相談も検討してみてください。',
  },
]

export default function BelongingsDownsizingPage() {
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
      { '@type': 'ListItem', position: 2, name: '老人ホーム入居前の身辺整理', item: 'https://2ndhappiness.com/belongings-downsizing' },
    ],
  }

  return (
    <>
      <ArticleJsonLd
        path={'/belongings-downsizing'}
        title={'老人ホーム入居前の身辺整理｜生前整理・持ち物の減らし方'}
        description={'老人ホーム入居前の身辺整理を、生前整理・持ち物の減らし方としてやさしく整理しました。荷物を減らす順番、思い出の品との向き合い方、居室に持っていくものリスト、家や大きな不用品の片づけと費用の注意点まで、焦らず進めるコツを解説します。'}
        datePublished={'2026-07-21T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Breadcrumb items={[{ label: '老人ホーム入居前の身辺整理' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホーム入居前の身辺整理｜生前整理・持ち物の減らし方
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年7月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">参考：消費者庁・国民生活センターによる不用品回収サービスの利用に関する注意喚起、廃棄物処理法にもとづく市区町村の一般廃棄物収集運搬業許可制度、家電リサイクル法ほか公的資料をもとに、やさしい老人ホームガイド編集部が整理（2026年7月時点）</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          「いざ入居となったとき、この家の荷物をどうすればいいんだろう」——
          老人ホームへの入居を考えはじめると、施設選びや費用と並んで、ふとこの悩みが頭をよぎる方は多いのではないでしょうか。
        </p>
        <p className="text-base">
          長年暮らした家には、思い出のつまったものがたくさんあります。それを整理するのは、手間だけでなく、心の作業でもあります。
          この記事では、<strong>老人ホーム入居前の身辺整理（生前整理）を、焦らず・自分を責めずに進めるための順番とコツ</strong>を、やさしくまとめました。
          全部を一度に片づける必要はありません。今日は「引き出し一つ」からで十分です。読み終えるころには、「これならできそう」と思っていただけたらうれしいです。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本記事は身辺整理の一般的な進め方をまとめたもので、特定のサービスや結果を保証するものではありません。居室の広さや持ち込めるものは施設によって異なります。具体的な準備は入居先の施設や、お住まいの市区町村・専門業者にご確認ください。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        なぜ老人ホーム入居前に身辺整理をしておくとよいの？
      </h2>
      <p className="text-base mb-4">
        「まだ入居も決まっていないのに、片づけなんて気が早いのでは」——そう感じる方もいらっしゃるかもしれません。
        けれど、身辺整理を少し早めに始めておくことには、いくつかの理由があります。
      </p>
      <p className="text-base mb-4">
        いちばん大きいのは、<strong>老人ホームの居室（住む部屋）は、これまでの住まいよりコンパクトなことが多い</strong>という点です。
        イメージとしては、広い一軒家から、身の回りのものだけを持ってワンルームに引っ越すような感覚に近いかもしれません。
        限られたスペースに合わせて荷物を選んでおくと、入居当日の搬入もスムーズで、入居後の暮らしも片づいて過ごしやすくなります。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base mb-2"><strong>早めに整理しておくと、こんな場面で助かります</strong></p>
        <p className="text-base mb-1">・入居が急に決まったとき、慌てて荷造りをしなくてすむ</p>
        <p className="text-base mb-1">・本人が元気なうちに「何を残すか」を一緒に決められる</p>
        <p className="text-base mb-1">・思い出の品と、時間をかけてゆっくり向き合える</p>
        <p className="text-base mb-3">・入居後に「あれはどこ？」と家族が探し回らずにすむ</p>
        <p className="text-base" style={{ color: '#7a5c00' }}>——どれも、いま少しずつ進めておくだけで、後の負担が軽くなる場面です。焦らせるための理由ではなく、心にゆとりを持つための目印だと思ってください。</p>
      </div>
      <p className="text-base mb-4">
        もう一つ大切なのは、<strong>身辺整理は「本人の気持ちを整える時間」でもある</strong>ということです。
        自分の持ち物を見返し、これからの暮らしを思い描く——その作業は、新しい生活へ気持ちを切り替える助けにもなります。
        だからこそ、できる範囲で本人と一緒に進めるのがおすすめです。
        ただ、ご本人の体調や事情で「一緒に」が難しいこともあります。入院中だったり、認知症などで判断が難しかったり、本人が片づけに気が進まなかったり——そんなときに、ご家族が代わりに整えることは、決して悪いことではありません。ご本人の「らしさ」を思い浮かべながら選べば、それで十分です。
      </p>
      <p className="text-base mb-8">
        なお、居室の広さや持ち込める家具は施設によって本当にさまざまです。まずは
        <Link href="/types" style={{ color: '#1A5E9E', fontWeight: 700 }}>「施設の種類と違い」</Link>
        で入居先のイメージをつかんでおくと、「どのくらい減らせばよいか」の見当がつきやすくなります。
      </p>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        身辺整理・生前整理・遺品整理は何が違う？
      </h2>
      <p className="text-base mb-4">
        「生前整理」「終活」「遺品整理」——似た言葉が並ぶと、どれを指しているのか分かりにくいものです。
        ここでいったん、やさしく整理しておきましょう。難しく考えなくて大丈夫です。
      </p>
      <div className="space-y-3 mb-6">
        {[
          { q: '身辺整理', a: '身の回りのものを整理し、暮らしをシンプルにすること。入居や引っ越しなど、生活の節目に行うことが多い作業です。' },
          { q: '生前整理', a: '元気なうちに、自分の持ち物や情報を整理しておくこと。身辺整理とほぼ同じ意味で使われ、「本人が主役で進める」ニュアンスが強い言葉です。' },
          { q: '遺品整理', a: '亡くなった後に、ご遺族が故人の持ち物を整理すること。生前整理をしておくと、残されたご家族の負担が軽くなるといわれます。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1">📌 {item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-4">
        老人ホーム入居前に行うのは、多くの場合「身辺整理」や「生前整理」にあたります。
        ポイントは、<strong>本人が元気なうちに、本人の意思を尊重しながら進められる</strong>ということ。
        「どれを残したいか」を本人が選べるのは、この段階ならではの大切なことです。
        なお、老人ホームへの入居は「人生の終い支度」ではなく、あくまで<strong>新しい暮らしの始まり</strong>です。ここでの整理も、その門出を身軽にするための前向きな準備だと考えてください。
      </p>
      <p className="text-base mb-8">
        より広く「終活」という視点で全体像を知りたい方は、
        <Link href="/ending-activity" style={{ color: '#1A5E9E', fontWeight: 700 }}>「終活ステップガイド」</Link>
        や
        <Link href="/checklist" style={{ color: '#1A5E9E', fontWeight: 700 }}>「終活チェックリスト」</Link>
        もあわせてどうぞ。身辺整理は、そのなかの一つのステップとして位置づけられます。
      </p>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        いつから始める？焦らず進めるための順番
      </h2>
      <p className="text-base mb-4">
        多くの方が“つい”やってしまうのが、気合を入れて一気に片づけようとして、途中で疲れてしまうこと。これはごく自然なことです。
        持ち物の整理は、体力も気力も使う作業。<strong>短距離走ではなく、ゆっくりした散歩のペース</strong>で進めるのがコツです。
      </p>
      <p className="text-base mb-4">
        始める時期に「正解」はありませんが、目安としては、入居を意識しはじめたら少しずつ、というくらいで十分です。
        まとまった時間が取れなくても、次のような小さな単位で進められます。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base mb-2"><strong>「小さく区切る」進め方の例</strong></p>
        <p className="text-base mb-1">・今日は「引き出し一つ」だけ</p>
        <p className="text-base mb-1">・週末に「クローゼットの上段」だけ</p>
        <p className="text-base mb-1">・帰省のたびに「一部屋ずつ」</p>
        <p className="text-base">・疲れたらすぐ休む。一日で終わらせようとしない</p>
      </div>
      <p className="text-base mb-4">
        大切なのは、<strong>本人のペースと気持ちを最優先にすること</strong>です。
        家族が「早く片づけたい」と思っても、本人にとっては一つひとつが思い出の品。急かされると、かえって手が止まってしまいます。
        「今日はここまでにしようか」と、区切りをつけながら進めましょう。
      </p>
      <p className="text-base mb-8">
        もし体力的に難しい、量が多すぎて手が回らない、という場合は、無理をせず、後半で紹介する専門業者の力を借りるのも一つの方法です。
        「自分たちだけでやりきらなければ」と抱え込まなくて大丈夫です。
      </p>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        何から減らす？持ち物を整理する4つのステップ
      </h2>
      <p className="text-base mb-4">
        「減らしましょう」と言われても、どこから手をつけるか迷いますよね。
        コツは、<strong>いきなり「捨てるもの」を探すのではなく、まず“今使っているもの”を分けること</strong>です。
        使っているものを避けておけば、残りは自然と整理しやすくなります。次の4つの順番で進めてみましょう。
      </p>
      <div className="space-y-4 mb-6">
        {stepItems.map((s) => (
          <div key={s.item} className="rounded-xl p-5" style={{ backgroundColor: s.color, border: `2px solid ${s.border}` }}>
            <p className="font-bold text-lg mb-2" style={{ color: s.label }}>{s.item}</p>
            <div className="rounded-lg px-4 py-3" style={{ backgroundColor: 'rgba(255,255,255,0.75)' }}>
              <p className="text-sm" style={{ lineHeight: 1.8 }}>{s.note}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-base mb-4">
        ここでのポイントは、<strong>迷ったら「保留ボックス」に入れて、その場で決めない</strong>ことです。
        「捨てるか、残すか」をすべて即決しようとすると、疲れて手が止まります。
        迷うものは一度箱にしまい、数日おいてから見直すと、不思議と気持ちの整理がついていることが多いものです。
      </p>
      <p className="text-base mb-4">
        まだ使えるものは、捨てるだけでなく、リサイクルショップやフリマアプリ、地域の譲り合いの仕組みなどで、次の方に使ってもらう道もあります。
        「もったいない」という気持ちも、無理に押し込めなくて大丈夫。手放し方を選べると、少し気持ちが軽くなります。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base mb-1"><strong>💡 読み飛ばしOKの小ワザ</strong></p>
        <p className="text-base">
          衣類は「1年着ていない服」から見直すと判断がしやすい、といわれます。ただしこれはあくまで一つの目安で、季節ものや冠婚葬祭用など、頻度が低くても必要なものもあります。数字にとらわれず、ご本人の暮らしに合わせて選んでください。
        </p>
      </div>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        手放しにくい「思い出の品」との向き合い方・残し方
      </h2>
      <p className="text-base mb-4">
        身辺整理でいちばん時間がかかるのが、写真やアルバム、手紙、記念の品といった<strong>思い出の品</strong>です。
        これは、無理に減らそうとしなくて大丈夫。むしろ「どう残すか」を考える対象だと思ってください。
      </p>
      <p className="text-base mb-4">
        全部を持っていけなくても、思い出そのものが消えるわけではありません。次のような「残し方」を組み合わせると、気持ちの折り合いがつけやすくなります。
      </p>
      <div className="space-y-3 mb-6">
        {[
          { q: '写真やアルバムはデータ化して残す', a: 'スマホやスキャナーで撮影・保存しておけば、かさばらずに思い出を持ち歩けます。ご家族が手伝うと、一緒に振り返る時間にもなります。' },
          { q: '「特に大切な数点」だけを選んで持っていく', a: '居室に飾れる写真立てや小物を厳選すると、その人らしい空間になります。多すぎず、選び抜くのがコツです。' },
          { q: '家族や親戚に譲る・預かってもらう', a: '手放すのが忍びないものは、捨てずに引き継ぐという選択も。「あなたが持っていてくれるなら」と、本人も安心できます。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #C2185B' }}>
            <p className="font-bold text-base mb-1">🌸 {item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#FCE4EC', border: '1px solid #C2185B' }}>
        <p className="text-base mb-2"><strong>📖 私たちのケースでは（編集部・架空の体験談）</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          母の入居準備で、いちばん時間がかかったのが古いアルバムでした。「全部は持っていけないよ」と言うと、母は少し寂しそうで。
          そこで、休みの日に二人でアルバムを開いて、お気に入りの数枚を選び、残りはスキャンしてタブレットに入れました。
          結局その時間が、いちばんいい思い出話のきっかけになったんです。片づけというより、一緒に人生を振り返る時間でした。焦らずやってよかったと思っています。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記は進め方を分かりやすく伝えるための編集部による架空のエピソードです。ご家庭によって感じ方や進み方は異なり、結果を保証するものではありません。</p>
      </div>
      <p className="text-base mb-8">
        もし途中で手が止まっても、それは「大切にしてきたものが多い」というだけのこと。あなたのせいでも、本人のせいでもありません。
        思い出の品は、いちばん最後に、いちばんゆっくりで大丈夫です。
      </p>

      {/* H2-6 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        施設に持っていくものは？居室に入る量の目安
      </h2>
      <p className="text-base mb-4">
        「結局、何を持っていけばいいの？」——ここがはっきりすると、減らす作業もぐっと進めやすくなります。
        まず大前提として、<strong>持ち込めるものの量や種類は、施設や部屋のタイプによって大きく異なります</strong>。
        家具付きの居室もあれば、使い慣れた家具を持ち込める居室もあります。反対に、特別養護老人ホームなどで相部屋（多床室）の場合は、持ち込める家具がごく限られることもあります。入居先に確認するのがいちばん確実です。
      </p>
      <p className="text-base mb-4">
        居室の広さの目安としては、有料老人ホームで1人あたり原則13㎡（約8畳）以上、サービス付き高齢者向け住宅（サ高住＝見守りや生活相談がつく高齢者向けの賃貸住宅）で原則25㎡以上とされています（共用スペースが充実している場合は緩和されることもあり、自治体・施設で異なります）。数字はあくまで参考程度に、実際の居室を見て判断してください。
      </p>
      <p className="text-base mb-4">
        そのうえで、多くの施設で「まず必要になるもの」の一例をまとめました。足りなければ後から届けられますので、最初は少なめでも大丈夫です。
      </p>
      <div className="rounded-xl overflow-x-auto mb-6" style={{ border: '2px solid #2E7D52' }}>
        <table className="w-full border-collapse text-base">
          <thead>
            <tr style={{ background: '#E8F5E9' }}>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>持っていくもの</th>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>ひとことメモ</th>
            </tr>
          </thead>
          <tbody>
            {bringItems.map((c, i) => (
              <tr key={c.item} style={{ background: i % 2 === 0 ? '#fff' : '#F9FBF9', borderTop: '1px solid #e5e7eb' }}>
                <td className="px-4 py-3 font-bold" style={{ color: '#2E7D52' }}>{c.item}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{c.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-base mb-4">
        持ち物には、<strong>名前を書いておく</strong>と安心です。みんなで暮らす場所なので、洗濯物などが取り違えられないための、ちょっとした工夫です。
        施設によっては「持ち込み可能なもの・不可のもの」の一覧を用意していることも多いので、入居説明のときに受け取っておきましょう。
      </p>
      <p className="text-base mb-8">
        入居前の準備全体の流れを知りたい方は、
        <Link href="/prepare" style={{ color: '#1A5E9E', fontWeight: 700 }}>「入居前の準備4つのこと」</Link>
        に、持ち物以外の手続きや心構えもまとめています。あわせてご覧ください。
      </p>

      {/* H2-7 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        家や大きな不用品はどうする？業者選びと費用の注意点
      </h2>
      <p className="text-base mb-4">
        身辺整理を進めると、最後に残るのが、家具・家電・寝具といった<strong>大きな不用品</strong>です。
        量が多いと、家族だけで運び出すのは大変です。ここは無理をせず、いくつかの方法を組み合わせて進めましょう。
      </p>
      <div className="space-y-3 mb-6">
        {[
          { q: '自治体の粗大ごみ回収', a: '費用が比較的おさえやすいのが特徴です。品目ごとに料金や申し込み方法が決まっているので、お住まいの市区町村の案内を確認しましょう。ただし、テレビ・エアコン・冷蔵庫／冷凍庫・洗濯機／衣類乾燥機の4品目は「家電リサイクル法」の対象で粗大ごみには出せず、購入店や指定引取場所でのリサイクル手続きが必要です。' },
          { q: 'リサイクルショップ・買取', a: 'まだ使える家具・家電は、買い取ってもらえることも。出張・訪問での査定に対応している店もあります。訪問買取にはクーリングオフ（原則8日間、契約内容を書面で受け取れます）の仕組みがあり、その場で売却を即決しなくて大丈夫です。' },
          { q: '不用品回収・生前整理の専門業者', a: '量が多い・時間がないときに便利です。運び出しから分別まで任せられますが、費用は荷物量や間取りで大きく変わります。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #1A5E9E' }}>
            <p className="font-bold text-base mb-1">🚚 {item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#FFF3E0', border: '1px solid #F57C00' }}>
        <p className="text-base mb-2"><strong>⚠️ 業者に頼むときの注意点</strong></p>
        <p className="text-base mb-1">・費用は荷物の量・間取り・地域で大きく異なります。あくまで目安と考え、<strong>複数の業者から見積もりを取って比べましょう</strong></p>
        <p className="text-base mb-1">・「無料回収」をうたって後から高額請求する、不法投棄をするなどの悪質な事業者への注意が、消費者庁などから呼びかけられています</p>
        <p className="text-base mb-1">・回収を頼むときは、市区町村の一般廃棄物収集運搬業の許可を得た業者か確認し、料金や作業内容を書面で残しておくと安心です</p>
        <p className="text-base">・無許可の業者に頼み、不法投棄などが起きた場合、依頼した側が責任を問われることもあります。「無料」「格安」の言葉だけで選ばないようにしましょう</p>
      </div>
      <p className="text-base mb-4">
        費用感を具体的に「いくら」と言い切れないのは、条件によって本当に差が大きいからです。
        「相場はこのくらい」という数字だけを鵜呑みにせず、実際の荷物を見てもらったうえでの見積もりで判断するのが、結果的にいちばん安心です。
      </p>
      <p className="text-base mb-8">
        自宅そのもの（持ち家・空き家になる家）の扱いに悩む場合は、
        <Link href="/prepare/real-estate" style={{ color: '#1A5E9E', fontWeight: 700 }}>「自宅・不動産の整理」</Link>
        で、売却・賃貸・維持といった選択肢を整理しています。相続とあわせて考えたい方は
        <Link href="/prepare/inheritance" style={{ color: '#1A5E9E', fontWeight: 700 }}>「相続の準備」</Link>
        もどうぞ。
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
          まとめ：老人ホーム入居前の身辺整理は「小さく・ゆっくり」から
        </h2>
        <p className="text-base mb-3">
          老人ホーム入居前の身辺整理は、限られた居室に合わせて持ち物を選び、新しい暮らしへ気持ちを整えていく作業です。
          まずは「今使っているもの」を分け、明らかに使わないものから減らし、思い出の品は最後にゆっくりと。この順番なら、迷いも疲れも少なくてすみます。
          全部を一度にやろうとしなくて大丈夫。今日は引き出し一つ、それで十分な一歩です。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            'まず入居先に「居室の広さ・持ち込めるもの」を確認する',
            '「使っているもの → 使わないもの → 迷うもの → 思い出の品」の順で進める',
            '思い出の品は、写真に残す・一部だけ持つなど「残し方」を選ぶ',
            '大きな不用品は複数業者から見積もりを取り、無理せず力を借りる',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          ここまで読んでくださったこと自体が、ご本人の新しい暮らしを整えるための、やさしい一歩です。焦らず、できることからで大丈夫です。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/prepare', label: '入居前の準備4つのこと｜持ち物・手続き・心構え', icon: '📋' },
          { href: '/ending-activity', label: '終活ステップガイド', icon: '🗂️' },
          { href: '/checklist', label: '終活チェックリスト28項目', icon: '📝' },
          { href: '/prepare/real-estate', label: '自宅・不動産の整理｜売却・賃貸・維持の選び方', icon: '🏠' },
          { href: '/asset-pension-handover', label: '親の財産・年金管理の引き継ぎ方｜認知症になる前に', icon: '🔑' },
          { href: '/cost', label: '老人ホームの費用はどのくらい？月額・初期費用の相場', icon: '💴' },
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
        身辺整理は、暮らしの節目に少しずつ進めれば十分です。「まだ決まっていないから」と気負わず、情報を集めておくだけでも心の余裕につながります。
        施設のことも、片づけのことも、一つずつでかまいません。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        ※本ページにはアフィリエイト広告を含みます。サービス内容・費用・対応エリアなどを比較し、ご家族の状況に合った選択にお役立てください。
      </p>

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は、老人ホーム入居前の身辺整理・生前整理に関する一般的な情報をまとめたものです。特定のサービス・業者・結果を保証するものではありません。
          居室の広さや持ち込めるものの範囲、不用品の処分方法・費用は、施設・地域・荷物の量や個別の事情によって異なります。
          不用品回収や生前整理・遺品整理の依頼にあたっては、複数の事業者を比較し、自治体の許可の有無や料金・作業内容を書面で確認したうえでご判断ください。具体的な準備は、入居先の施設・お住まいの市区町村・専門業者にご相談ください。
        </p>
      </div>
    </>
  )
}
