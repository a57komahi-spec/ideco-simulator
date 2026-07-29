import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '遠距離介護の進め方｜帰省頻度・費用・見守り',
  description: '親の遠距離介護をどう進めるか——「実家が遠くて頻繁に帰れない」という方へ、体制づくりの手順をやさしく整理。帰省頻度の考え方、交通費や見守りの費用目安、ケアマネジャーや地域包括支援センターとの連携、介護休業などの制度、限界を感じたときの選択肢まで解説します。',
  alternates: {
    canonical: 'https://2ndhappiness.com/long-distance-care',
  },
  openGraph: {
    title: '親の遠距離介護の進め方｜帰省頻度・費用・見守りの整え方',
    description: '「実家が遠くて頻繁に帰れない」——遠距離で親の介護をどう支えるか。帰省頻度の考え方、交通費や見守りの費用目安、ケアマネジャー・地域包括支援センターとの連携、仕事と両立する制度、限界を感じたときの選択肢まで、やさしく整理しました。',
    url: 'https://2ndhappiness.com/long-distance-care',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
    publishedTime: '2026-07-30T05:00:00+09:00',
    modifiedTime: '2026-07-30T05:00:00+09:00',
    images: [
      { url: 'https://2ndhappiness.com/images/hero.jpg', width: 1200, height: 630, alt: '親の遠距離介護の進め方｜帰省頻度・費用・見守りの整え方' },
    ],
  },
}

const summaryItems = [
  '遠距離介護は<mark class="highlight">「自分が通う回数」より「現地に支える人と仕組みをどれだけ置けるか」</mark>で決まります。介護のすべてを自分の帰省でまかなおうとしなくて大丈夫です',
  '帰省頻度に決まった正解はありません。<mark class="highlight">月1回程度の方から、年に数回という方まで幅があります</mark>。大切なのは回数より、帰ったときに「何を確認するか」を決めておくことです',
  '費用は<mark class="highlight">交通費＋介護保険サービスの自己負担（所得に応じて1〜3割）＋見守りなどの実費</mark>が中心です。航空会社の介護帰省向け割引や、自治体の見守り支援など、負担を軽くする仕組みも探せます',
  '最初の相談先は<mark class="highlight">親が住む地域の「地域包括支援センター」</mark>（高齢者の相談窓口）です。電話でも相談でき、遠方の家族からの連絡にも応じてもらえます',
]

const visitCheckItems = [
  {
    name: '体と生活の様子',
    icon: '🩺',
    color: '#E8F5E9',
    border: '#2E7D52',
    label: '#1B5E37',
    body: '歩き方がふらついていないか、体重が減っていないか、同じ服を何日も着ていないか。前回帰ったときとの「差」に目を向けると、変化に気づきやすくなります。電話では分からないのが、この部分です。',
  },
  {
    name: '家の中の状態',
    icon: '🏠',
    color: '#FFF3E0',
    border: '#F57C00',
    label: '#E65100',
    body: '冷蔵庫の中身（傷んだ食材が残っていないか）、床に物が増えていないか、風呂やトイレの使い方に不便が出ていないか。転倒のきっかけは、たいてい家の中にあります。',
  },
  {
    name: 'お金と書類',
    icon: '📮',
    color: '#E3F2FD',
    border: '#1A5E9E',
    label: '#1A5E9E',
    body: '郵便物がたまっていないか、公共料金の払い忘れがないか。未開封の督促状が出てきたら、お金の管理を一緒に見直すサインかもしれません。',
  },
  {
    name: '支える人との顔つなぎ',
    icon: '🤝',
    color: '#F3E5F5',
    border: '#7B1FA2',
    label: '#6A1B9A',
    body: 'ケアマネジャー（介護の計画を立てる専門職）や訪問介護の担当者、ご近所の方に、帰省のタイミングで一度ごあいさつを。「顔を知っている家族」がいるだけで、何かあったときの連絡がぐんとスムーズになります。',
  },
]

const supportItems = [
  { q: '🏢 地域包括支援センター（最初の相談先）', a: '市区町村が設置する高齢者の総合相談窓口で、保健師・社会福祉士・主任ケアマネジャーなどの専門職がいます。「親が遠方に一人で住んでいて心配」という段階からでも相談できます。遠方の家族が電話で相談することもできるので、まずはここに一本かけてみるのが、いちばん確実な最初の一歩です。担当エリアは親の住所地で決まるため、「（親の市区町村名）地域包括支援センター」で検索するか、市区町村の介護保険担当窓口にたずねてください。' },
  { q: '📋 ケアマネジャー（介護の計画を立てる専門職）', a: '要介護認定を受けたあと、介護サービスの計画（ケアプラン）を作り、事業者との調整をしてくれる専門職です。遠距離介護では、この方が「現地のもう一人の目」になってくれます。連絡手段（電話・メール・アプリなど）と、どのくらいの頻度で状況を共有してもらうかを、はじめに決めておくと安心です。' },
  { q: '🚪 訪問系の介護サービス', a: '訪問介護（ホームヘルパーによる身体介護・生活援助）、訪問看護、訪問リハビリなど、自宅に来てもらうサービスです。「週に何回か、専門職が家に入る」状態をつくれると、変化に気づく機会が増えます。利用できる内容や量は、要介護度とケアプランによって決まります。' },
  { q: '🔄 デイサービス・ショートステイ', a: '日中通う通所介護（デイサービス）や、短期間泊まる短期入所生活介護（ショートステイ）。外出の機会や生活リズムをつくると同時に、専門職が定期的に様子を見てくれる場にもなります。使い方は「ショートステイ・デイサービスの賢い使い方」の記事もご覧ください。' },
  { q: '📡 見守りサービス・機器', a: 'センサー型、カメラ型、通報ボタン型、電気やガスの使用状況で見守るタイプなど、さまざまな形があります。自治体が緊急通報装置の貸し出しなどを行っている場合もあります。「毎日の様子が分かる」安心は、遠距離では大きな支えになります。' },
  { q: '👥 ご近所・親戚・民生委員', a: '制度ではありませんが、遠距離介護でいちばん心強いのが「近くにいる誰か」です。連絡先を交換しておき、帰省のたびに一言ごあいさつをするだけでも、関係は続きます。民生委員（地域の相談役として厚生労働大臣から委嘱された方）が見守りに関わっている地域もあります。' },
]

const stumbleItems = [
  { q: '🍃 自分だけで抱えてしまう', a: '「近くに住むきょうだいに任せきりで申し訳ない」「逆に、遠方の自分ばかりが動いている」——遠距離介護は、役割のかたよりが見えにくく、不満がたまりやすい状況です。悪いのは誰かの怠けではなく、距離という条件です。お金・情報・手を動かすこと、の3つに分けて話し合うと整理しやすくなります。なお、きょうだいがいない方や、頼れる親族がいない方も少なくありません。その場合は、ケアマネジャーや地域包括支援センターが「もう一つの相談先」になってくれます。一人で抱え込まなくて大丈夫です。' },
  { q: '🍃 帰省のたびに親と衝突してしまう', a: '限られた滞在時間で「あれもこれも」と決めようとすると、つい急かす口調になり、親も身構えてしまいます。1回の帰省で扱うテーマは1つか2つに絞る。それだけで、空気はずいぶん変わります。決まらないまま帰ることになっても、それは失敗ではありません。' },
  { q: '🍃 情報が家族の中で共有されない', a: '通院の結果、ケアマネジャーからの連絡、支払いのこと。誰か一人の頭の中にだけあると、次に動く人が同じ確認をくり返すことになります。家族のグループチャットや共有メモに、日付とひと言だけ残す習慣をつくっておくと、あとの手間がぐっと減ります。' },
  { q: '🍃 交通費と休みが静かに家計・仕事を削る', a: '一度の帰省は数万円でも、続けば大きな額になります。有給休暇も同じです。「気合いで通う」前提のままだと、続けるうちに苦しくなります。介護休業・介護休暇などの制度や割引の仕組みを早めに調べておくと、無理のないペースが見つけやすくなります。' },
  { q: '🍃 緊急連絡に気づけない', a: '仕事中は電話に出られないことも多いものです。連絡がつく人を複数登録しておく、緊急時は家族の別の人に回してもらう、といった段取りを、ケアマネジャーや施設・事業者と共有しておきましょう。「気づけなかった」自分を責める必要はありません。仕組みで補えることです。' },
]

const faqItems = [
  {
    q: '遠距離介護では、どのくらいの頻度で帰省すればいいのでしょうか？',
    a: 'これといった正解はありません。実際には、月1〜2回帰る方、2〜3か月に1回の方、年に数回という方まで、大きな幅があります。距離や交通費、仕事の状況、親の状態によって、ちょうどよいペースはご家庭ごとに違います。大切なのは回数そのものではなく、「帰ったときに何を確認するか」を決めておくことと、帰れない期間を埋める仕組み（訪問介護・デイサービス・見守り・ケアマネジャーとの定期連絡など）を置いておくことです。帰省の回数が少ないことは、親を大切にしていない証拠ではありません。むしろ、離れているからこそ現地の体制を整える——それが遠距離介護のいちばんの力になります。',
  },
  {
    q: '遠距離介護の費用は、どのくらいかかりますか？負担を軽くする方法はありますか？',
    a: '主に「交通費・宿泊費」「介護保険サービスの自己負担」「見守りや配食などの実費」の3つに分けて考えると整理しやすくなります。交通費は距離によってまったく違うため一律には言えませんが、帰省の回数×往復運賃が、遠距離介護に特有の負担になります。介護保険サービスの自己負担は、所得に応じて1割・2割・3割に分かれます（2025年時点。判定は市区町村が行います）。負担を軽くする手立てとしては、航空会社が介護帰省向けの割引運賃を設けている場合（条件・提供状況は各社でご確認ください）、鉄道の各種割引きっぷ、自治体による緊急通報装置の貸し出しや配食サービスの助成、そして月々の自己負担が上限を超えたときに払い戻される「高額介護サービス費」などがあります。使えるものはお住まいの地域や所得区分で異なるため、地域包括支援センターや市区町村の窓口で確認するのが確実です。',
  },
  {
    q: '親を自分の家の近くに呼び寄せたほうがよいのでしょうか？迷っています。',
    a: '呼び寄せには、すぐ会いに行ける・緊急時に動きやすいという大きな利点があります。一方で、長年慣れ親しんだ土地・人間関係・かかりつけ医から離れることは、ご本人にとって想像以上に大きな変化です。環境が変わったことで一時的に混乱や落ち込みが見られることもあります（リロケーションダメージと呼ばれます。程度や有無は人によって異なります）。また、介護保険の担当窓口（保険者）や利用できるサービス、待機の状況も地域によって変わります。「どちらが正しい」という答えはありません。ご本人の希望、きょうだいの状況、仕事、費用を並べて比べたうえで、家族で話し合って決めていくことです。判断に迷うときは、地域包括支援センターやケアマネジャーに「呼び寄せを検討している」と伝えて、両方の地域の情報を集めるところから始めてみてください。',
  },
  {
    q: '仕事を辞めて実家に戻ったほうがいいのか、悩んでいます。',
    a: 'その気持ちになるのは自然なことです。ただ、離職は収入や年金、その後の再就職に長く影響するため、辞める前に使える制度を一度確認していただきたいところです。育児・介護休業法にもとづく介護休業（対象家族1人につき通算93日まで、3回まで分割可）や介護休暇（年5日、対象家族が2人以上なら年10日。時間単位でも取得可）、所定外労働の制限、時間外労働・深夜業の制限などがあります。雇用保険に加入していて要件を満たせば、介護休業給付金（休業前の賃金の約67%相当。上限額があります）を受け取れる場合もあります。制度には労使協定による除外など細かな条件があるため、勤務先や最寄りのハローワークに確認してください。すでに離職された方が、その選択を悔やむ必要もまったくありません。今ある条件のなかで整えられることは、いつからでもあります。',
  },
  {
    q: '遠距離介護がもう限界だと感じています。施設を考えるのは、親を見捨てることになりませんか？',
    a: '施設という選択肢を考えることは、見捨てることとは違います。家族みんなが続けられる形を探すからこそ、出てくる選択です。実際、遠距離介護から施設入居へ移る背景には、「本人の状態が変わって在宅では支えきれなくなった」「家族の生活が保てなくなった」といった、どちらも無理をしない選択の必要性があります。施設には、公的な施設（特別養護老人ホーム、介護老人保健施設、介護医療院）と民間の施設（介護付き有料老人ホーム、住宅型有料老人ホーム、サービス付き高齢者向け住宅、グループホームなど）があり、費用も入居の要件も異なります。たとえば特別養護老人ホームは、原則として要介護3以上の方が新規入所の対象です（要介護1・2でもやむを得ない事情がある場合は特例入所の対象になりえます）。まずは種類と費用の目安を眺めるだけで十分です。迷っている時間そのものが、ご家族を大切に思っている証でもあります。',
  },
]

export default function LongDistanceCarePage() {
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
        path={'/long-distance-care'}
        title={'親の遠距離介護の進め方｜帰省頻度・費用・見守りの整え方'}
        description={'「実家が遠くて頻繁に帰れない」——遠距離で親の介護をどう支えるか。帰省頻度の考え方、交通費や見守りの費用目安、ケアマネジャー・地域包括支援センターとの連携、仕事と両立する制度、限界を感じたときの選択肢まで、やさしく整理しました。'}
        datePublished={'2026-07-30T05:00:00+09:00'}
        dateModified={'2026-07-30T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* パンくずの BreadcrumbList JSON-LD は Breadcrumb コンポーネント側で出力されるため、
          二重出力を避けるためページ側のインライン定義は置かない */}
      <Breadcrumb items={[{ label: '親の遠距離介護の進め方' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        親の遠距離介護の進め方｜帰省頻度・費用・見守りの整え方
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年7月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">参考：厚生労働省（介護保険制度の概要、地域包括支援センターの概要、育児・介護休業法の解説）、各自治体の高齢者福祉施策などの公的資料をもとに、やさしい老人ホームガイド編集部が一般的な内容を整理（2026年7月時点）</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          実家からの電話を切ったあと、「大丈夫って言ってたけど、本当かな」と、しばらくスマホを見つめてしまう——
          離れて暮らしながら親のことを気にかけているご家族なら、覚えのある時間ではないでしょうか。仕事も自分の家庭もあって、そう簡単には帰れない。それでも心のどこかは、いつも実家のほうを向いている。
        </p>
        <p className="text-base">
          この記事では、<strong>遠距離で親の介護を続けていくための体制の作り方</strong>を、帰省の考え方・費用・使える制度・限界を感じたときの選択肢まで、順番に整理しました。
          先に結論をお伝えすると、遠距離介護は「自分が何回帰れるか」で決まるものではありません。<strong>現地に支える人と仕組みをどれだけ置けるか</strong>——ここが本当の勝負どころです。
        </p>
        <p className="text-base mt-3" style={{ color: '#1B5E37' }}>
          今日は「一人で通ってがんばる必要はない」ことと、「まず地域包括支援センターに電話してみればいい」ことの2つが分かれば十分です。全部を一度に読み切らなくて大丈夫。気になったところから、そっと読んでみてください。
        </p>
        <p className="text-sm mt-3 text-gray-600">
          なお、親御さんとの関係は、ご家庭によってさまざまです。長く距離があった、素直に心配だと言えない、複雑な思いがある——そういう関係のままでも構いません。気持ちの形がどうであれ、ここで整理した手続きや制度は同じように使えます。「愛情がないと思われるのでは」と気をもむ必要はありません。
        </p>
      </div>

      {/* この記事の歩き方（拾い読み導線） */}
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#F3F8F5', border: '1px solid #2E7D52' }}>
        <p className="text-base mb-1"><strong>🧭 この記事の歩き方</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          全部を一度に読まなくて大丈夫です。<strong>これから始める方</strong>は①〜④、<strong>すでに通っていて疲れを感じている方</strong>は⑤〜⑦から読むと、いま必要なところに届きやすいと思います。読み飛ばした章は、必要になったときにまた戻ってきてください。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本記事は遠距離介護に関する一般的な情報をまとめたものです。制度の要件や利用できるサービス、助成の内容は、お住まいの地域・親御さんの住所地・所得区分・要介護度によって異なります。掲載している金額はいずれも目安であり、実際の負担額を保証するものではありません。具体的な手続きは、地域包括支援センター、担当のケアマネジャー、市区町村の介護保険担当窓口などにご確認ください。制度は改正されることがあります。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        遠距離介護とは？「通う回数」より大事なことがある
      </h2>
      <p className="text-base mb-4">
        「遠距離介護」とは、親と離れた場所に住みながら、帰省や連絡、サービスの手配などを通じて介護に関わっていく形のことです。新幹線や飛行機を使う距離の方もいれば、車で2時間ほどという方もいて、線引きはあいまいです。共通しているのは、<strong>「すぐには駆けつけられない」という前提のなかで介護を組み立てる</strong>という点です。
      </p>
      <p className="text-base mb-4">
        遠距離介護を始めたばかりの方が、いちばんつまずきやすいのが「自分がもっと帰らなければ」という考え方です。気持ちとしては当然のことですが、この前提のままだと、有給休暇と交通費と体力を先に使い切ってしまい、続かなくなってしまいます。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base">
          遠距離介護の役割を、ひとつたとえるなら<strong>「そばにいて介助する人」というより「離れた場所から支える人」</strong>に近いかもしれません。毎日の介助を自分の手でやることは、距離があると物理的にできません。その代わりにできるのは、現地に人と仕組みを置き、情報を受け取り、必要なときに一緒に考えること。手は届かなくても、親御さんを思う気持ちがあってこそできる、とても大きな役割です。
        </p>
      </div>
      <p className="text-base mb-8">
        ですから、この記事も「どうやって頻繁に帰るか」ではなく、<strong>「帰れない期間をどう支えるか」</strong>を中心に組み立てています。もし今、帰省の回数が少ないことに後ろめたさを感じているなら、その気持ちはいったん置いておいて大丈夫です。回数の少なさは、親を大切に思っていないこととは無関係です。
      </p>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        遠距離介護の帰省頻度に「正解」はある？
      </h2>
      <p className="text-base mb-4">
        「みんなどれくらい帰っているんだろう」——気になるところだと思います。結論から言えば、<strong>決まった正解はありません</strong>。月に1〜2回帰る方から、2〜3か月に1回、年に数回という方まで、実際には大きな幅があります。距離、交通費、仕事の休みの取りやすさ、親の状態、きょうだいの有無——条件が違えば、ちょうどよいペースも変わります。
      </p>
      <p className="text-base mb-4">
        （※以下の頻度は統計ではなく、相談の場でよく聞かれる形を編集部が整理した目安です。ご自身のペースと比べて落ち込む必要はありません。）
      </p>
      <div className="rounded-xl overflow-x-auto mb-6" style={{ border: '2px solid #2E7D52' }}>
        <table className="w-full border-collapse text-base">
          <thead>
            <tr style={{ background: '#E8F5E9' }}>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>親の状態のめやす</th>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>帰省の考え方（目安）</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#fff', borderTop: '1px solid #e5e7eb' }}>
              <td className="px-4 py-3 font-bold" style={{ color: '#2E7D52' }}>自立〜要支援</td>
              <td className="px-4 py-3 text-sm text-gray-700">年に数回でも、電話や見守りで日常をつなげれば十分な場合が多い時期です。この時期に「相談先を知っておく」「お金や書類の場所を共有しておく」など、先の備えを進めておくと、あとがぐっと楽になります。</td>
            </tr>
            <tr style={{ background: '#F3F8F5', borderTop: '1px solid #e5e7eb' }}>
              <td className="px-4 py-3 font-bold" style={{ color: '#2E7D52' }}>要介護1〜2ごろ</td>
              <td className="px-4 py-3 text-sm text-gray-700">介護サービスの利用が始まり、契約や面談で足を運ぶ機会が増えます。数か月に1回でも、ケアマネジャーとの定期連絡が取れていれば形になります。「サービス担当者会議」の時期に合わせて帰るのも一案です。</td>
            </tr>
            <tr style={{ background: '#fff', borderTop: '1px solid #e5e7eb' }}>
              <td className="px-4 py-3 font-bold" style={{ color: '#2E7D52' }}>要介護3以上・認知症が進んだころ</td>
              <td className="px-4 py-3 text-sm text-gray-700">通院の付き添いや、住まい方の見直しなど、家族の判断が必要な場面が増えます。帰省の回数を増やすより、現地の体制を厚くする（訪問サービスを増やす・ショートステイを使う等）方向に切り替える時期でもあります。</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-base mb-4">
        回数よりも効いてくるのが、<strong>「帰ったときに何を見るか」を決めておくこと</strong>です。限られた滞在時間を、なんとなく過ごして終わってしまうのはもったいない。次の4点だけ、頭に入れておくと十分です。
      </p>
      <div className="space-y-4 mb-6">
        {visitCheckItems.map((d) => (
          <div key={d.name} className="rounded-xl p-5" style={{ backgroundColor: d.color, border: `2px solid ${d.border}` }}>
            <p className="font-bold text-lg mb-2" style={{ color: d.label }}>{d.icon} {d.name}</p>
            <p className="text-sm" style={{ lineHeight: 1.9 }}>{d.body}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        そして、もうひとつ。<strong>帰省を「点検」だけにしないこと</strong>も、じつは大切です。確認したいことに集中してしまうと、親のほうは知らず知らずのうちに「見られている」と感じることがあります。とはいえ、心配だからこそ隅々まで見てしまうのは、ごく自然なことです。確認する時間と、お茶を飲みながら昔の話をする時間、その両方があると、遠距離介護は続けやすくなります。
      </p>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        離れていても支える体制は作れる｜まず頼る先はどこ？
      </h2>
      <p className="text-base mb-4">
        「現地に仕組みを置く」と言われても、最初はどこに何を頼めばいいのか分からないものです。ここが遠距離介護のいちばんの山場ですが、順番は決まっています。<strong>まずは親が住む地域の「地域包括支援センター」に電話する</strong>。ここから始めれば、あとは道がつながっていきます。
      </p>
      <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: '#1B5E37' }}>遠距離介護で頼れる相談先・サービス一覧</h3>
      <div className="space-y-3 mb-6">
        {supportItems.map((item) => (
          <div key={item.q} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1">{item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-4">
        介護保険のサービスを使うには、まず<strong>要介護認定</strong>（「介護がどのくらい必要か」を市区町村が判定する手続き）を受ける必要があります。申請は親の住所地の市区町村の窓口で行い、家族が代わりに申請することもできます。申請から結果が出るまでは原則30日以内が目安とされています（調査や審査の状況により、これより時間がかかる場合もあります）。手続きの全体像は
        <Link href="/insurance-usage-guide" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護保険の使い方完全ガイド」</Link>
        に、要介護度ごとの違いは
        <Link href="/care-level" style={{ color: '#1A5E9E', fontWeight: 700 }}>「要介護度の違いと認定手続き」</Link>
        にまとめています。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base mb-1"><strong>💡 遠距離ならではの一手：連絡ルートを最初に決めておく</strong></p>
        <p className="text-base">
          ケアマネジャーや事業者にとって、遠方の家族に「どう連絡すればいいか分からない」のは意外と困りごとです。最初の面談のときに、<strong>①ふだんの連絡手段（メールかLINEか電話か）②連絡がつきやすい時間帯 ③緊急時の連絡順（自分がつかまらないときは誰へ）</strong>の3点を伝えておくと、その後のやり取りが驚くほどスムーズになります。関係づくりのコツは
          <Link href="/care-manager-relation" style={{ color: '#1A5E9E', fontWeight: 700 }}>「ケアマネージャーとの上手な付き合い方」</Link>
          もあわせてご覧ください。
        </p>
      </div>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        遠距離介護の費用はいくらかかる？負担を軽くする方法
      </h2>
      <p className="text-base mb-4">
        「実際、いくらかかるんだろう」——気になりますよね。結論を先に言うと、遠距離介護の費用は<strong>①交通費・宿泊費 ②介護保険サービスの自己負担 ③見守り・配食などの実費</strong>の3つに分けて考えると、見通しが立ちやすくなります。
      </p>
      <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: '#0D47A1' }}>遠距離介護の費用の内訳（3つの種類）</h3>
      <div className="rounded-xl overflow-x-auto mb-4" style={{ border: '2px solid #1A5E9E' }}>
        <table className="w-full border-collapse text-base">
          <thead>
            <tr style={{ background: '#E3F2FD' }}>
              <th className="text-left px-4 py-2.5" style={{ color: '#0D47A1', fontSize: '13px' }}>費用の種類</th>
              <th className="text-left px-4 py-2.5" style={{ color: '#0D47A1', fontSize: '13px' }}>考え方と目安</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#fff', borderTop: '1px solid #e5e7eb' }}>
              <td className="px-4 py-3 font-bold" style={{ color: '#1A5E9E', whiteSpace: 'nowrap' }}>🚄 交通費・宿泊費</td>
              <td className="px-4 py-3 text-sm text-gray-700">距離によってまったく違うため一律には言えません。「往復運賃 × 年間の帰省回数」で、まず一年分をざっと出してみてください。数字にしてみると、無理のないペースが見えてきます。</td>
            </tr>
            <tr style={{ background: '#F7FAFD', borderTop: '1px solid #e5e7eb' }}>
              <td className="px-4 py-3 font-bold" style={{ color: '#1A5E9E', whiteSpace: 'nowrap' }}>🏥 介護保険サービスの自己負担</td>
              <td className="px-4 py-3 text-sm text-gray-700">かかった費用のうち、所得に応じて1割・2割・3割を負担します（2025年時点。判定は市区町村）。「1割で済む」と決めつけず、親の負担割合証で確認しておきましょう。</td>
            </tr>
            <tr style={{ background: '#fff', borderTop: '1px solid #e5e7eb' }}>
              <td className="px-4 py-3 font-bold" style={{ color: '#1A5E9E', whiteSpace: 'nowrap' }}>📡 見守り・配食などの実費</td>
              <td className="px-4 py-3 text-sm text-gray-700">介護保険の対象外となるものが多く、全額自己負担が基本です。ただし自治体が緊急通報装置の貸し出しや配食の助成を行っている場合もあります（内容は地域差が大きいです）。</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-base mb-4">
        介護保険には、要介護度ごとに1か月に使えるサービスの上限枠（<strong>支給限度額</strong>。使えるサービスの月額上限枠のようなものです）があります。たとえば要介護3であれば月あたり約27万円が目安です（2024年度介護報酬改定後の基準額。2025年時点。地域区分により差があります／出典：厚生労働省「介護保険制度の概要」）。この枠を超えて使った分は、保険の対象外となり全額（10割）の自己負担になります。
      </p>
      <p className="text-base mb-4">
        （※ここは金額の話が続くので、太字だけ拾って次に進んでいただいて大丈夫です。）
      </p>
      <div className="space-y-3 mb-6">
        <div className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #F57C00' }}>
          <p className="font-bold text-base mb-1">💰 高額介護サービス費</p>
          <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>1か月の介護サービスの自己負担額が上限を超えたとき、超えた分が申請により払い戻される仕組みです。上限額は所得区分ごとに決められています。なお、対象は介護サービスの自己負担分で、食費・居住費・日用品費などは対象外です。また、上の支給限度額を超えて使った分も対象になりません。</p>
        </div>
        <div className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #F57C00' }}>
          <p className="font-bold text-base mb-1">✈️ 航空・鉄道の割引</p>
          <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>航空会社が、離れて暮らす家族の介護のための帰省に使える割引運賃を設けている場合があります。事前の登録や証明書類が必要なことが多く、提供状況や条件は変わりうるため、利用を考える際は各社の最新の案内をご確認ください。鉄道の割引きっぷや回数券タイプの商品も、組み合わせ次第で負担を抑えられることがあります。</p>
        </div>
        <div className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #F57C00' }}>
          <p className="font-bold text-base mb-1">🧾 医療費控除・自治体の助成</p>
          <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>介護サービスの一部は、確定申告で医療費控除の対象になる場合があります（施設や在宅サービスの種類によって扱いが異なります）。詳しくは<Link href="/care-medical-deduction" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護の医療費控除の使い方」</Link>をご覧ください。自治体独自の見守り・配食・おむつ支給などの助成もあるので、地域包括支援センターで「使えるものはありますか」とたずねてみてください。</p>
        </div>
      </div>
      <p className="text-base mb-8">
        費用のことは、誰にとっても話しにくいテーマです。でも、遠距離介護は年単位で続くものなので、早めに数字にしておくと、あとで「もう出せない」と行き詰まる場面を減らせます。きょうだいがいる場合は、お金の分担を話し合う際に
        <Link href="/care-cost-split" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護費用の兄弟間分担ガイド」</Link>
        も参考になります。
      </p>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        仕事と遠距離介護をどう両立する？使える制度
      </h2>
      <p className="text-base mb-4">
        遠距離介護で最初に苦しくなるのが、多くの場合「休みのやりくり」です。有給休暇を帰省に使い切ってしまい、自分の休息がなくなる——よくあることです。ここで知っておきたいのが、<strong>育児・介護休業法</strong>という法律で定められた、介護のための働き方の仕組みです。
      </p>
      <p className="text-base mb-4">
        （※ここは制度の名前と数字が多くなります。太字だけ拾って次に進んでいただいて大丈夫です。「こういう制度がある」と頭の片隅に置いておければ十分です。）
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="rounded-xl p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-2" style={{ color: '#2E7D52' }}>🗓 介護休業</p>
          <p className="text-sm" style={{ lineHeight: 1.9 }}>対象家族1人につき通算93日まで、3回まで分割して取得できます。雇用保険に加入し要件を満たせば、介護休業給付金（休業前の賃金の約67%相当。上限額があります）を受け取れる場合があります。給付金は休業後の申請となるため、入金までに時間差があります。</p>
        </div>
        <div className="rounded-xl p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-2" style={{ color: '#2E7D52' }}>🕐 介護休暇</p>
          <p className="text-sm" style={{ lineHeight: 1.9 }}>年5日（対象家族が2人以上の場合は年10日）まで、時間単位でも取得できます。通院の付き添いや手続きなど、短時間の用事に向いています。有給か無給かは勤務先の定めによります。</p>
        </div>
        <div className="rounded-xl p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-2" style={{ color: '#1A5E9E' }}>⏰ 所定外労働・時間外労働の制限</p>
          <p className="text-sm" style={{ lineHeight: 1.9 }}>残業を免除してもらう制度（所定外労働の制限）や、時間外労働を月24時間・年150時間以内に抑える制度、深夜業を制限する制度を請求できます。ただし、除外の条件は制度ごとに異なります（勤続1年未満の方を労使協定で除外できる制度があるなど）。ご自身が対象になるかは、勤務先の就業規則や労使協定でご確認ください。</p>
        </div>
        <div className="rounded-xl p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-2" style={{ color: '#1A5E9E' }}>🏢 働き方の選択的措置とテレワーク</p>
          <p className="text-sm" style={{ lineHeight: 1.9 }}>事業主には、①所定労働時間の短縮 ②フレックスタイム制 ③始業・終業時刻の繰上げ・繰下げ ④介護サービス費用の助成 のうち、少なくとも一つを講じることが義務づけられています（選択的措置義務）。テレワーク（在宅勤務）はこの4つには含まれず、2025年4月から導入の<strong>努力義務</strong>という位置づけです。義務ではないため必ず使えるとはかぎりませんが、勤務先に相談してみる価値はあります。制度の内容は勤務先の規定でご確認ください。</p>
        </div>
      </div>
      <p className="text-base mb-4">
        なお、2025年4月の改正では、家族の介護に直面したと申し出た労働者への個別の周知や意向確認、介護に直面する前の段階での情報提供などが事業主に求められるようになりました（このほか、介護休暇を取得できる方の範囲の拡大や、テレワーク導入の努力義務化なども盛り込まれています）。「制度があること自体を知らなかった」という状況を減らすための改正です。詳しくは
        <Link href="/care-leave-system" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護休業・介護休暇制度の使い方」</Link>
        にまとめています。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E8F5E9', border: '1px solid #2E7D52' }}>
        <p className="text-base">
          「仕事を辞めれば楽になるのでは」と考える方も少なくありません。その気持ちは、無理をしてきた証でもあります。ただ、離職は収入や年金、その後の再就職に長く影響するため、辞める前に制度を一度確認していただきたいところです（
          <Link href="/care-resignation" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護離職のリアル」</Link>
          もご覧ください）。すでに離職された方が、その選択を悔やむ必要もまったくありません。今ある条件のなかで整えられることは、いつからでもあります。
        </p>
      </div>

      {/* H2-6 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        遠距離介護で起きやすいつまずきと、その手前でできること
      </h2>
      <p className="text-base mb-4">
        遠距離介護を続けているご家族の話を整理すると、つまずきどころは驚くほど似ています。<strong>どれも「準備が足りなかった」のではなく、距離という条件から自然に起きること</strong>です。先に知っておくだけで、ずいぶん違ってきます。
      </p>
      <div className="space-y-3 mb-6">
        {stumbleItems.map((item) => (
          <div key={item.q} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #F57C00' }}>
            <p className="font-bold text-base mb-1">{item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-4">
        きょうだいとの役割分担でモヤモヤを抱えている方は
        <Link href="/sibling-care-discussion" style={{ color: '#1A5E9E', fontWeight: 700 }}>「兄弟姉妹で介護を分担する話し合い方」</Link>
        、自分の心が削れてきていると感じる方は
        <Link href="/caregiver-mental-care" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護する家族のメンタルケア」</Link>
        が、それぞれの整理に役立つはずです。
      </p>
      <p className="text-base mb-8">
        そして、離れているからこそ気になるのが「もしも」のときです。災害が起きたときに親のいる地域はどうなるのか、施設に入居している場合は施設がどう備えているのか。気になったときは
        <Link href="/facility-disaster-preparedness" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホーム・介護施設の防災と緊急時対応」</Link>
        も参考にしてください。ただし、今日ぜんぶ調べる必要はありません。頭の片隅に置いておくだけで十分です。
      </p>

      {/* H2-7 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        「もう限界かも」と感じたときに広がる選択肢
      </h2>
      <p className="text-base mb-4">
        遠距離介護を続けていくと、どこかで「このままでは支えきれない」と感じる時期が来ることがあります。親の状態が変わったとき、自分の仕事や家庭に無理が出てきたとき——それは、あなたの努力が足りなかったからではありません。<strong>条件が変わったのだから、形も変わっていい</strong>というだけのことです。選択肢は、大きく3つあります。
      </p>
      <div className="space-y-4 mb-6">
        <div className="rounded-xl p-5 bg-white border border-gray-200" style={{ borderLeft: '4px solid #2E7D52' }}>
          <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>① 現地の体制をさらに厚くする（在宅を続ける）</p>
          <p className="text-base" style={{ lineHeight: 1.9 }}>訪問介護の回数を増やす、ショートステイを定期的に組み込む、見守り機器を追加する、といった調整です。まずはケアマネジャーにケアプランの見直しを相談してみましょう。支給限度額の枠内で組み替えられることも少なくありません。在宅と施設の比べ方は<Link href="/facility-vs-home-care" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホームと在宅介護の比較」</Link>で整理しています。</p>
        </div>
        <div className="rounded-xl p-5 bg-white border border-gray-200" style={{ borderLeft: '4px solid #1A5E9E' }}>
          <p className="font-bold text-base mb-1" style={{ color: '#1A5E9E' }}>② 自分の家の近くに呼び寄せる</p>
          <p className="text-base" style={{ lineHeight: 1.9 }}>すぐ会いに行ける安心は大きい一方、長年の土地・人間関係・かかりつけ医から離れる負担もあります。環境が変わったことで一時的に混乱や落ち込みが見られることもあり、これはリロケーションダメージと呼ばれます（程度や有無は人によって異なります）。また、住所を移すと介護保険の保険者（担当する市区町村）や利用できるサービス、待機の状況も変わります。両方の地域の情報を集めてから判断するのが安心です。</p>
        </div>
        <div className="rounded-xl p-5 bg-white border border-gray-200" style={{ borderLeft: '4px solid #7B1FA2' }}>
          <p className="font-bold text-base mb-1" style={{ color: '#6A1B9A' }}>③ 高齢者向けの住まい・介護施設を検討する</p>
          <p className="text-base" style={{ lineHeight: 1.9 }}>公的な施設（特別養護老人ホーム、介護老人保健施設、介護医療院）と、民間の施設（介護付き有料老人ホーム、住宅型有料老人ホーム、サービス付き高齢者向け住宅、グループホームなど）があり、費用も入居の要件も異なります。特別養護老人ホームは原則として要介護3以上の方が新規入所の対象です（要介護1・2でもやむを得ない事情がある場合は特例入所の対象になりえます）。また、グループホーム（認知症対応型共同生活介護）は「地域密着型サービス」といって、原則としてその施設がある市区町村に住民票のある方が対象になります。呼び寄せ先の近くで探す場合は、先に住民票を移す必要があるなど手順が変わるため、事前に地域包括支援センターや市区町村の窓口にご確認ください。種類の違いは<Link href="/types" style={{ color: '#1A5E9E', fontWeight: 700 }}>「施設の種類」</Link>、費用の目安は<Link href="/cost" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホームの費用」</Link>にまとめています。</p>
        </div>
      </div>
      <p className="text-base mb-4">
        施設を検討する場合、遠距離ならではの論点として「親の地元で探すか、自分の近くで探すか」があります。地元なら知人が訪ねやすく、本人も慣れた土地で過ごせます。自分の近くなら面会に行きやすくなります。どちらが正しいということはなく、<strong>誰が、どのくらいの頻度で会いに行けるか</strong>を基準に考えるのが現実的です。入居後の関わり方は
        <Link href="/family-visit-rhythm" style={{ color: '#1A5E9E', fontWeight: 700 }}>「入居後の家族の面会頻度と関わり方」</Link>
        も参考になります。
      </p>
      <p className="text-base mb-8">
        なお、他の市区町村にある介護保険施設などに入所して住所を移した場合、引き続き元の市区町村が介護保険の<strong>保険者</strong>（介護保険を運営する市区町村）となる「住所地特例」という仕組みがあります。ただし対象となる施設の種類には条件があり、たとえばサービス付き高齢者向け住宅は有料老人ホームに該当する類型など一定の条件を満たす場合に限られ、上でふれた地域密着型のサービス（その市区町村の住民だけが使える地域限定のサービス）は対象外です。個別の施設が対象になるかは、住所を移す前に施設と市区町村の介護保険担当窓口の双方にご確認ください。ここは制度が細かいので、「窓口に聞けば分かること」として覚えておけば十分です。
      </p>

      {/* FAQ */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        遠距離介護について、よくある質問（FAQ）
      </h2>
      <div className="space-y-4 mb-10">
        {faqItems.map((item) => (
          <div key={item.q} className="rounded-xl p-5 bg-white border border-gray-200">
            <p className="font-bold text-base mb-2" style={{ color: '#2E7D52' }}>Q. {item.q}</p>
            <p className="text-base" style={{ lineHeight: 1.9 }}>A. {item.a}</p>
          </div>
        ))}
      </div>

      {/* 体験談 */}
      <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: '#FCE4EC', border: '1px solid #C2185B' }}>
        <p className="text-base mb-2"><strong>📖 あるご家族のケースから</strong>（編集部が構成した架空の例です）</p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          飛行機で2時間の距離に、母が一人で住んでいました。最初の半年は、月に一度は必ず帰ろうと決めて動いていました。でも、有給休暇はどんどん減り、往復の交通費もかさみ、帰った日は疲れて母とろくに話もできない。ある日、機内で「これ、いつまで続けられるんだろう」と考えて、少し怖くなったのを覚えています。
        </p>
        <p className="text-base mt-2" style={{ lineHeight: 1.9 }}>
          転機になったのは、地域包括支援センターに電話をした日でした。要介護認定の申請を手伝ってもらい、ケアマネジャーがついて、訪問介護とデイサービスが入るようになりました。ケアマネジャーさんが月に一度メールで様子を知らせてくれるようになって、私の帰省は2〜3か月に一度に落ち着きました。
        </p>
        <p className="text-base mt-2" style={{ lineHeight: 1.9 }}>
          回数は減ったのに、母の様子はむしろよく分かるようになりました。そして帰省が「点検」ではなく「会いに行く時間」に戻りました。もっと早く電話すればよかった——とは思いません。あのとき精一杯だったから、電話する決心がついたのだと思っています。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記は遠距離介護の進み方を分かりやすく伝えるための編集部による架空のエピソードです。ご家庭の状況や地域によって経過は異なり、同じ結果を保証するものではありません。</p>
      </div>

      {/* まとめ */}
      <div className="rounded-xl p-6 mb-10" style={{ backgroundColor: '#F3F8F5', border: '2px solid #2E7D52' }}>
        <h2 className="text-xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
          まとめ：遠距離介護は「一人で通う」から「みんなで支える」へ
        </h2>
        <p className="text-base mb-3">
          遠距離介護は、帰省の回数を競うものではありません。親が住む地域に、専門職・サービス・見守り・ご近所という支えを置いていくこと。そして自分は、情報を受け取り、必要なときに判断する役割を担うこと。この形に切り替えられると、年単位で続けていける介護になります。費用と休みのやりくりも、制度を知っておけば道が見えてきます。全部を一度に整える必要はありません。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            '今日の一歩：親の住所地の「地域包括支援センター」を検索して、電話番号をメモする',
            '帰省の回数より「帰ったときに何を見るか」の4点を決めておく',
            '交通費 × 年間の帰省回数を、一度だけ数字にしてみる',
            '勤務先の介護休業・介護休暇・在宅勤務の規定を一度だけ確認する',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          距離があっても、気にかけているその気持ちは、ちゃんと届いています。焦らず、できることからで大丈夫です。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/senior-watch-service', label: '高齢者見守りサービスの選び方｜種類・費用・自治体支援', icon: '📡' },
          { href: '/care-manager-relation', label: 'ケアマネージャーとの上手な付き合い方', icon: '🤝' },
          { href: '/care-leave-system', label: '介護休業・介護休暇の使い方｜働きながら介護', icon: '🗓️' },
          { href: '/sibling-care-discussion', label: '兄弟姉妹で介護を分担する話し合い方', icon: '👨‍👩‍👧' },
          { href: '/facility-vs-home-care', label: '老人ホームと在宅介護の比較｜7つの判断軸', icon: '⚖️' },
          { href: '/short-stay-day-service', label: 'ショートステイ・デイサービスの賢い使い方', icon: '🔄' },
          { href: '/insurance-usage-guide', label: '介護保険の使い方完全ガイド｜申請から給付まで', icon: '📝' },
          { href: '/caregiver-mental-care', label: '介護する家族のメンタルケア｜燃え尽き対策', icon: '💚' },
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
        遠距離介護のこれからを、今日ぜんぶ決めなくて大丈夫です。ここまで読んで、まだ迷っていても構いません。迷う時間そのものが、ご家族を大切に思っている証でもあります。
        「まだ何も決まっていない」段階でも、費用の見通しや地域の選択肢を知るだけで、気持ちに余裕が生まれます。申し込む必要はありませんし、期限もありません。気になったときに、実家の地域と自分の家の近くの選択肢をそっと見比べてみるところから始めれば、それで十分です。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        ※本ページにはアフィリエイト広告を含みます。サービス内容・費用・対応エリアなどを比較し、ご家族の状況に合った選択にお役立てください。
      </p>

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は、遠距離での介護に関する一般的な情報をまとめたものです。特定の施設・事業者・サービス・結果を保証するものではありません。
          介護保険の自己負担割合・支給限度額・高額介護サービス費の上限額は、所得区分・要介護度・地域区分などによって異なります。自治体独自の助成や見守り支援の有無・内容には大きな地域差があります。育児・介護休業法にもとづく制度には、労使協定による除外などの条件があります。航空・鉄道の割引運賃は、提供状況や適用条件が変更される場合があります。掲載している金額はいずれも目安です。
          具体的な手続きや、ご本人・ご家族に合う進め方については、親御さんの住所地の地域包括支援センター、担当のケアマネジャー、市区町村の介護保険担当窓口、勤務先の人事担当、最寄りのハローワークなどにご確認ください。制度や基準は改正されることがあります。
        </p>
      </div>
    </>
  )
}
