import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '兄弟姉妹で介護を分担する話し合い方｜揉めないための役割整理術',
  description: '親の介護を兄弟姉妹でどう分担する？「介護」「お金」「情報」を切り分けて整理する話し合い方を、もめやすい理由・役割の決め方・遠距離や温度差のケース別対処までやさしく解説。今日からできる一歩が見つかります。',
  alternates: {
    canonical: 'https://2ndhappiness.com/sibling-care-discussion',
  },
  openGraph: {
    title: '兄弟姉妹で介護を分担する話し合い方｜揉めないための役割整理術',
    description: '親の介護を兄弟姉妹でどう分担する？「介護」「お金」「情報」を切り分けて整理する話し合い方を、もめやすい理由・役割の決め方・遠距離や温度差のケース別対処までやさしく解説。今日からできる一歩が見つかります。',
    url: 'https://2ndhappiness.com/sibling-care-discussion',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

const summaryItems = [
  '介護分担は<mark class="highlight">「介護（手と時間）」「お金」「情報」</mark>の3つに切り分けて話すのがコツです',
  '法律上、子どもには親への<mark class="highlight">扶養義務</mark>（民法第877条）がありますが、一般には自分の生活を維持したうえで援助する義務と解されています',
  '役割は「平等に半分ずつ」より、<mark class="highlight">それぞれが無理なくできること</mark>を持ち寄る形が長続きします',
  'もめそうなときは、<mark class="highlight">地域包括支援センター</mark>（高齢者の何でも相談窓口）など第三者を間に入れるのが安心です',
]

const threeAxes = [
  {
    icon: '🤲',
    title: '① 介護（手と時間）',
    body: '通院の付き添い、日々の声かけ、施設や役所とのやりとりなど、実際に体と時間を使う部分です。近くに住む人に偏りやすく、不公平感が生まれやすい軸です。',
    color: '#E8F5E9', border: '#2E7D52',
  },
  {
    icon: '💴',
    title: '② お金',
    body: '施設費・医療費・生活費などの負担です。まずは親自身の年金・資産から、足りない分を子どもで支えるのが一般的な考え方。お金を出す人と介護をする人は、別でも構いません。',
    color: '#FFF3E0', border: '#F57C00',
  },
  {
    icon: '📱',
    title: '③ 情報',
    body: '親の体調・お金の状況・施設や手続きの進み具合など。「自分だけ知らなかった」がいちばんの火種になります。全員が同じ情報を見られる状態を作るのが大切です。',
    color: '#E3F2FD', border: '#1A5E9E',
  },
]

const roleTypes = [
  { role: '🏃 動く人（主たる介護者＝中心になって介護を担う人）', body: '近くに住む、時間を取りやすいなどの理由で、通院付き添いや日常の対応を多く担う人。負担が集中しやすいので、ほかの軸でのフォローが欠かせません。' },
  { role: '💴 出す人（費用担当）', body: '遠方に住んでいて手は出しにくいけれど、金銭面で支える人。「お金を多めに出す代わりに介護は任せる」という分担も、立派な役割分担です。' },
  { role: '🗂 まとめる人（情報・調整役）', body: '兄弟間の連絡、記録、役所やケアマネージャー（介護の計画を立て、相談に乗ってくれる専門職）との窓口を引き受ける人。離れていてもスマホひとつでできる、見えにくいけれど重要な役割です。' },
  { role: '🌱 支える人（精神的サポート）', body: '頻繁には動けなくても、定期的に電話で話を聞く、ねぎらう人。主たる介護者が孤立しないための「心の分担」も、立派な貢献です。' },
]

const faqItems = [
  {
    q: '兄弟姉妹に介護を手伝う「義務」はありますか？',
    a: '法律上、子どもには親を扶養する「扶養義務」があります（民法第877条）。もっとも、扶養の方法や程度は当事者の協議で定めるのが原則とされ（民法第879条）、一般には、自分の生活を維持したうえで余力の範囲で援助する義務と解されています。手や時間の分担まで法律が一律に強制するものではなく、実際の分担は各家庭の事情に応じて話し合いで決めるのが基本です。義務の有無で責め合うより、「それぞれが無理なくできること」を持ち寄る視点が、結果的に長続きしやすいようです。（出典：民法第877条・第879条）',
  },
  {
    q: '近くに住む自分にばかり負担が偏っています。どうすれば？',
    a: 'まず、偏っている事実を「数字」で共有するのがおすすめです。月にかかっている時間や交通費、立て替えた金額をメモして、感情ではなく事実として見せると、ほかの兄弟も動きやすくなります。手が出せない兄弟には、お金や情報整理など別の軸での分担をお願いするのも一つの方法です。一人で抱え込まず、ケアマネージャーや地域包括支援センターに「負担を分散する方法」を相談するのも有効です。',
  },
  {
    q: '話し合うと毎回ケンカになってしまいます。',
    a: '感情がぶつかりやすいのは、それだけ皆が親を思っている証拠でもあります。コツは、議題を「介護」「お金」「情報」に切り分けて、一度に全部を決めようとしないこと。そして、親の資産状況やケアプランといった「共通の事実」を真ん中に置くことです。それでも平行線なら、ケアマネージャーや地域包括支援センターなど中立的な第三者に同席してもらうと、冷静に話せることが多いです。',
  },
  {
    q: '遠距離に住んでいて、ほとんど手伝えません。',
    a: '距離があっても担える役割はたくさんあります。費用の分担、書類や情報の整理、役所・施設への電話連絡、そして主たる介護者の話を定期的に聞くこと。これらは離れていてもできる立派な分担です。「何もできない」と引け目を感じる必要はありません。むしろ「自分には何ができるか」を具体的に伝えることが、近くで動く兄弟の支えになります。',
  },
]

export default function SiblingCareDiscussionPage() {
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
      { '@type': 'ListItem', position: 2, name: '兄弟姉妹で介護を分担する話し合い方', item: 'https://2ndhappiness.com/sibling-care-discussion' },
    ],
  }

  return (
    <>
      <ArticleJsonLd
        path={'/sibling-care-discussion'}
        title={'兄弟姉妹で介護を分担する話し合い方｜揉めないための役割整理術'}
        description={'親の介護を兄弟姉妹でどう分担する？「介護」「お金」「情報」を切り分けて整理する話し合い方を、もめやすい理由・役割の決め方・遠距離や温度差のケース別対処までやさしく解説。'}
        datePublished={'2026-06-13T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Breadcrumb items={[{ label: '兄弟姉妹で介護を分担する話し合い方' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        兄弟姉妹で介護を分担する話し合い方｜揉めないための役割整理術
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年6月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">参考：民法（扶養義務）、厚生労働省「地域包括支援センターの概要」ほか公的資料</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          「親の介護、結局いつも自分ばかり」「お金のことを切り出したら、なんだか気まずくなってしまった」——
          兄弟姉妹での介護の分担は、仲のよかった家族でも、ふとしたきっかけで関係がぎくしゃくしやすいテーマです。
        </p>
        <p className="text-base">
          でも、もめてしまうのは、誰かが悪いからではありません。
          多くは<strong>「何を・どう分ければいいのか」の地図がないまま、気持ちだけで話し始めてしまう</strong>からです。
          この記事では、その地図づくりを、順番にやさしく整理します。
          全部を今日決める必要はありません。「考え方の軸」が分かれば、それで十分な一歩です。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本ページにはアフィリエイト広告を含みます。本記事は一般的な情報をまとめたもので、法律の解釈や制度の運用は個別の状況によって異なる場合があります。具体的なご相談は、専門家や市区町村の窓口にご確認ください。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        なぜ兄弟姉妹の介護分担は、こんなに揉めやすいの？
      </h2>
      <p className="text-base mb-4">
        「うちの兄弟は仲がいいから大丈夫」と思っていた方ほど、いざ親の介護が始まると戸惑うことがあります。
        理由は、介護が<strong>「お金」「時間」「気持ち」「昔からの関係」が一度に絡む</strong>、とても複雑なテーマだからです。
      </p>
      <p className="text-base mb-4">
        たとえば、近くに住む人に対応が集中して「自分ばかり」という不公平感が募る。
        逆に遠くの人は「何もできていない」という引け目を抱える。
        さらに、子どもの頃の「お姉ちゃんだから」「末っ子だから」といった役割意識まで顔を出して、話がこじれていく——。
        これは、どの家庭でも起こりうる、ごく自然な流れです。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base mb-2"><strong>もめやすさの正体は、だいたいこの3つ</strong></p>
        <p className="text-base mb-1">・<strong>負担の「見えにくさ」</strong>：介護にかかる時間やお金が数字になっていないため、互いの貢献が伝わらない。</p>
        <p className="text-base mb-1">・<strong>情報の「ばらつき」</strong>：親の状態や手続きの進み具合を、一部の人しか知らない。</p>
        <p className="text-base">・<strong>役割の「思い込み」</strong>：「長男が」「同居している人が」と、誰かが当然のように背負わされる。</p>
      </div>
      <p className="text-base mb-4">
        裏を返せば、この3つを<strong>「見えるように」「分けられるように」</strong>整理できれば、多くの摩擦はやわらげられます。
        次の章から、その具体的なやり方を見ていきましょう。
      </p>
      <p className="text-sm text-gray-500 mb-8">
        ※お疲れの方へ：まず「3つの軸に分ける」だけ持ち帰れれば十分です。続きは、落ち着いたときにゆっくり読んでください。
      </p>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        分担の前に、まず3つの軸に切り分ける
      </h2>
      <p className="text-base mb-4">
        「介護を分担しよう」と一括りにすると、話は必ずこんがらがります。
        おすすめは、介護を<strong>「介護（手と時間）」「お金」「情報」の3つの軸</strong>に分けて考えること。
        いわば、ひとつの大きな荷物を、持ちやすい3つの袋に分けるイメージです。
      </p>
      <p className="text-base mb-4">
        結論を先に言うと、<strong>この3つは、必ずしも同じ人が全部背負う必要はありません</strong>。
        「手は出せないけれどお金は出す」「お金は厳しいけれど情報整理は引き受ける」——
        軸ごとに担い手が違ってよい、と分かるだけで、ぐっと話しやすくなります。
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {threeAxes.map((axis) => (
          <div key={axis.title} className="rounded-xl p-5 bg-white border-2" style={{ borderColor: axis.border, backgroundColor: axis.color }}>
            <p className="text-2xl mb-1">{axis.icon}</p>
            <p className="font-bold text-base mb-2" style={{ color: axis.border }}>{axis.title}</p>
            <p className="text-sm" style={{ lineHeight: 1.8 }}>{axis.body}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        お金の分担については、法律上の考え方や精算のコツを
        <Link href="/care-cost-split" style={{ color: '#1A5E9E', fontWeight: 700 }}>「親の介護費用は誰が払う？兄弟間の費用分担ルール」</Link>
        の記事で詳しくまとめています。お金の軸は、この記事と合わせて読むと整理しやすくなります。
      </p>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        「誰が何を担うか」役割分担の決め方
      </h2>
      <p className="text-base mb-4">
        3つの軸が見えたら、次は「誰が何を担うか」です。
        ここで大切なのは、<strong>「平等に半分ずつ」より「それぞれが無理なくできることを持ち寄る」</strong>という考え方。
        きっちり折半しようとすると、かえって続かなくなることが多いのです。
      </p>
      <p className="text-base mb-4">
        役割は、ざっくり次の4タイプに分けて考えると割り振りやすくなります。
        どれかひとつに偏るのではなく、<mark className="highlight">一人が複数を兼ねたり、状況に応じて交代したり</mark>しながら、ゆるやかに分けていくのが現実的です。
      </p>
      <div className="space-y-3 mb-6">
        {roleTypes.map((r) => (
          <div key={r.role} className="rounded-xl p-4 bg-white border border-gray-200" style={{ borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1 text-primary">{r.role}</p>
            <p className="text-base" style={{ lineHeight: 1.8 }}>{r.body}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-4">
        ここで覚えておきたいのが、<strong>「主たる介護者」（中心になって介護を担う人）に負担が集中しやすい</strong>こと。
        この人が倒れてしまうと、家族全体が一気に立ち行かなくなります。
        だからこそ、ほかの兄弟が「お金」や「情報」「精神的サポート」で支える分担が、想像以上に大きな意味を持ちます。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base">
          💡 主たる介護者の負担を一時的に軽くする<strong>「レスパイトケア」</strong>（介護する家族が休息するための、数日だけ施設に短期で預かってもらう介護保険のショートステイ（短期入所）などの仕組み。利用には要介護認定が必要です）という選択肢もあります。
          「ずっと一人で頑張る」前提を、少しゆるめてあげることも、立派な分担のひとつです。
        </p>
      </div>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        いつ、どう話し合えばいい？進め方のコツ
      </h2>
      <p className="text-base mb-4">
        「話し合ったほうがいいのは分かるけど、どう切り出せば……」という方は多いはず。
        まず安心してほしいのは、<strong>いつからでも大丈夫</strong>だということ。すでに介護が始まっていても、遅すぎることはありません。
        強いて言えば、親が元気なうちや介護が始まったばかりの段階だと、少し気持ちにゆとりを持って話せます。気づいた今からで、ちゃんと間に合います。
      </p>
      <p className="text-base mb-4">
        話し合いを穏やかに進めるための、ちょっとしたコツを挙げておきます。
      </p>
      <div className="space-y-3 mb-6">
        {[
          { q: '「責める場」ではなく「相談の場」として始める', a: '「あなたが何もしてくれない」ではなく、「これからのことを一緒に考えたい」という入り方に。最初の一言で、場の空気は大きく変わります。' },
          { q: '一度に全部を決めようとしない', a: '「今日はお金の話だけ」「次回は通院のこと」と、議題を小分けに。全部をまとめて決めようとすると、必ず疲れて感情的になります。' },
          { q: '「共通の事実」を真ん中に置く', a: '親の資産状況やケアマネージャーからの説明など、誰が見ても同じ「事実」を中心に話すと、感情の応酬になりにくくなります。' },
          { q: 'オンラインや家族グループも活用する', a: '全員が集まるのは大変。ビデオ通話や家族のメッセージグループで、こまめに情報を共有する形でも十分です。遠方の兄弟も参加しやすくなります。' },
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
          母の介護が始まったとき、近くに住む私と、遠方の姉とで、最初は少し気まずさがありました。
          「私ばかり」という思いが、口に出さなくても伝わってしまって。
          転機になったのは、月にかかった時間とお金をノートに書き出して、姉と共有したことでした。
          数字を見た姉が「じゃあお金は私が多めに出す」と言ってくれて。
          不思議と、それからは責め合いが少しずつ和らいでいきました。もちろん、すぐにこう進まない家庭もあると思います。それでも「見えるようにする」こと自体が、最初の一歩になったように感じています。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記は考え方を分かりやすく伝えるための編集部による架空のエピソードです。個人の感想であり、結果を保証するものではありません。</p>
      </div>
      <p className="text-base mb-8">
        ここまで読んで、まだ「うちは難しそう」と感じても大丈夫です。
        今日は「3つの軸で考える」と覚えるだけで、十分な一歩を踏み出せています。
      </p>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        揉めないために、決めておきたいルール
      </h2>
      <p className="text-base mb-4">
        分担が決まったあとも、ちょっとした行き違いから不満は積もります。
        そこで、あらかじめ<strong>「家族の中の小さなルール」</strong>を決めておくと、後のトラブルをやわらげられます。
        難しく考えず、次の4つだけ押さえておけば十分です。
      </p>
      <div className="space-y-3 mb-6">
        {[
          { num: '1', title: '立て替えたお金は必ず記録する', body: '誰がいくら払ったかをノートやアプリに残し、定期的に精算する仕組みを。口約束は、後で「言った・言わない」のもとになります。' },
          { num: '2', title: '親の資産・収入は全員で共有する', body: '「実は貯蓄があった」「年金がいくらか知らなかった」が不信感を生みます。可能な範囲で、財源を全員が把握しておきましょう。' },
          { num: '3', title: '分担は固定せず、定期的に見直す', body: '親の状態や各家庭の事情は変わります。「半年に一度は話し合う」と決めておくと、無理が一人に固定されません。' },
          { num: '4', title: '「ありがとう」と「ごめん」を言葉にする', body: '主たる介護者へのねぎらい、動けない側からの感謝。当たり前に思わず言葉にすることが、長い介護を支える潤滑油になります。' },
        ].map((item) => (
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
        とくに「お金の記録」は、見落とすと数十万円単位の行き違いになることもあります。
        でも、ポイントはシンプル。<strong>「使ったら書く・定期的に精算する」</strong>、これだけです。
        身構えなくて大丈夫です。
      </p>

      {/* H2-6 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        遠距離・温度差・疎遠…ケース別の向き合い方
      </h2>
      <p className="text-base mb-4">
        「きょうだいだから平等に」と言っても、現実は一人ひとり事情が違います。
        ここでは、よくある3つのケースについて、肩の力を抜いて向き合うヒントをまとめます。
      </p>
      <div className="space-y-4 mb-6">
        <div className="rounded-xl p-5 bg-white border border-gray-200" style={{ borderLeft: '4px solid #1A5E9E' }}>
          <p className="font-bold text-base mb-1" style={{ color: '#1A5E9E' }}>🚄 遠方に住んでいて手が出せない</p>
          <p className="text-base" style={{ lineHeight: 1.8 }}>
            距離は、できることを奪いません。費用の分担、書類や情報の整理、役所・施設への電話連絡、そして主たる介護者の話を聞くこと。
            これらは離れていても担える、立派な役割です。「何ができるか」を具体的に申し出ることが、近くで動く側の何よりの支えになります。
          </p>
        </div>
        <div className="rounded-xl p-5 bg-white border border-gray-200" style={{ borderLeft: '4px solid #F57C00' }}>
          <p className="font-bold text-base mb-1" style={{ color: '#E65100' }}>🌡 兄弟間で危機感の「温度差」がある</p>
          <p className="text-base" style={{ lineHeight: 1.8 }}>
            「まだ大丈夫」と思う人と「もう限界」と感じる人。温度差は、見えている情報の差から生まれることがほとんどです。
            親の様子やケアマネージャーの説明を共有し、「この先どうなりそうか」の見通しを一緒に眺めると、危機感が自然とそろってきます。
          </p>
        </div>
        <div className="rounded-xl p-5 bg-white border border-gray-200" style={{ borderLeft: '4px solid #C2185B' }}>
          <p className="font-bold text-base mb-1" style={{ color: '#C2185B' }}>🤐 もともと関係が疎遠・連絡が取りづらい</p>
          <p className="text-base" style={{ lineHeight: 1.8 }}>
            無理に関係を修復しようとしなくて構いません。まずは事実だけを淡々と共有することから。
            それでも難しいときは、ケアマネージャーや専門家など第三者を間に立ててもらうと、感情を挟まずに必要なことだけを進められます。
          </p>
        </div>
      </div>
      <p className="text-base mb-8">
        どのケースにも共通するのは、<strong>「完璧な平等」を目指さなくていい</strong>ということ。
        それぞれの事情を認め合えると、不思議と分担はうまく回り始めます。
      </p>

      {/* H2-7 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        それでも対立したら？頼れる第三者・窓口
      </h2>
      <p className="text-base mb-4">
        家族だけで話すと、どうしても感情がぶつかってしまう——それも、ごく自然なことです。
        そんなときは、<strong>中立的な第三者に間に入ってもらう</strong>のが、関係を壊さずに前へ進む近道です。
      </p>
      <div className="space-y-3 mb-6">
        <div className="rounded-lg p-4 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">🏢 地域包括支援センター</p>
          <p className="text-base">おおむね中学校区ごとに置かれた、高齢者の介護・福祉・健康の何でも相談窓口。家族間の調整や、使える制度の案内まで、無料で相談できます。</p>
        </div>
        <div className="rounded-lg p-4 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">🤝 ケアマネージャー（介護支援専門員）</p>
          <p className="text-base">親が介護保険を使っていれば、担当のケアマネージャーが付きます。家族会議に同席してもらい、専門家の立場から状況を整理してもらうこともできます。</p>
        </div>
        <div className="rounded-lg p-4 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">⚖️ 専門家（弁護士・司法書士など）</p>
          <p className="text-base">相続や成年後見（判断能力が低下した方に代わって、財産の管理や契約手続きなどを支える制度）など、お金や法律が深く絡む対立は、早めに専門家へ。自治体の無料法律相談から始めるのも一つの方法です。</p>
        </div>
      </div>
      <p className="text-base mb-4">
        第三者を頼るのは、決して「家族で解決できなかった」ことではありません。
        むしろ、<strong>関係を長く保つための賢い選択</strong>です。プロの手を借りることに、引け目を感じる必要はまったくありません。
      </p>
      <p className="text-base mb-8">
        働きながらの介護で限界を感じている方は、
        <Link href="/care-resignation" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護離職を防ぐ制度活用ガイド」</Link>
        もあわせてどうぞ。介護休業など、仕事と介護を両立するための制度を整理しています。
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
          まとめ：兄弟姉妹の介護分担は「切り分け」と「見える化」から
        </h2>
        <p className="text-base mb-3">
          兄弟姉妹の介護分担でもめないコツは、「介護・お金・情報」の3つに切り分け、互いの負担を見えるようにすること。
          そして、完璧な平等ではなく「それぞれが無理なくできることを持ち寄る」ことです。
          全部を一度に決めなくて大丈夫。今いる地点から、できる一歩で十分です。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            '介護の負担を「介護・お金・情報」の3つに切り分けて書き出してみる',
            '親の年金・資産のおおよそを、兄弟全員で共有しておく',
            'もめそうなら、地域包括支援センターやケアマネージャーに相談する',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          話し合いで意見が割れるのは、それだけ皆が親を大切に思っている証拠です。焦らず、一歩ずつでいきましょう。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/long-distance-care', label: '親の遠距離介護の進め方｜帰省頻度・費用・見守りの整え方', icon: '✈️' },
          { href: '/care-cost-split', label: '親の介護費用は誰が払う？兄弟間の費用分担ルール', icon: '💴' },
          { href: '/care-resignation', label: '介護離職を防ぐ制度活用ガイド', icon: '💼' },
          { href: '/insurance-usage-guide', label: '介護保険の使い方完全ガイド（申請から給付まで）', icon: '📝' },
          { href: '/care-manager-relation', label: 'ケアマネージャーとの上手な付き合い方', icon: '🤝' },
          { href: '/care-timing', label: '施設入居を考えるべきタイミング', icon: '⏰' },
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

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は兄弟姉妹間での介護分担に関する一般的な情報をまとめたものです。扶養義務をはじめとする法律の解釈や、介護保険・各種制度の運用は、個別の事情やお住まいの市区町村、法改正によって異なる場合があります。
          相続・財産管理・扶養に関する具体的なご判断は、弁護士・司法書士などの専門家や、市区町村の窓口・地域包括支援センターにご相談ください。
          本記事は特定のサービスへの加入や契約を強制するものではなく、最終的なご判断はご家族の状況に合わせて行ってください。
        </p>
      </div>
    </>
  )
}
