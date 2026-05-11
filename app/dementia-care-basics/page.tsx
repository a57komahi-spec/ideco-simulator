import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '認知症ケアの基本｜家族の接し方と進行ステージ別｜やさしい老人ホームガイド',
  description: '認知症の家族にどう接すれば良いか分からず悩んでいる方へ。進行ステージ（軽度・中等度・重度）ごとの特徴と接し方、今日からできる7つの基本姿勢、公的サポートの使い方を、専門用語の言い換え付きでやさしくまとめました。',
  alternates: {
    canonical: 'https://2ndhappiness.com/dementia-care-basics',
  },
  openGraph: {
    title: '認知症ケアの基本｜家族の接し方と進行ステージ別ガイド',
    description: '認知症の家族との接し方を、進行ステージ別にやさしく整理。今日からできる7つの基本姿勢、地域包括支援センター・認知症初期集中支援チーム等の公的サポートまで具体的にまとめました。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
    url: 'https://2ndhappiness.com/dementia-care-basics',
    images: [
      {
        url: 'https://2ndhappiness.com/images/reason_family.jpg',
        width: 1200,
        height: 630,
        alt: '認知症の家族にやさしく寄り添うイメージ',
      },
    ],
  },
}

const summaryItems = [
  '認知症は<mark class="highlight">脳の病気の一群</mark>で、本人の「人格」や「気持ち」までなくなるわけではありません',
  '進行は<mark class="highlight">軽度・中等度・重度</mark>と段階的に進み、ステージごとに必要な接し方が変わります',
  '家族が意識したいのは「否定しない・急かさない・<mark class="highlight">本人の世界を尊重する</mark>」の3つです',
  '一人で抱え込まず、<mark class="highlight">地域包括支援センター</mark>（高齢者の総合相談窓口）に早めに相談して大丈夫です',
]

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '認知症ケアの基本｜家族の接し方と進行ステージ別ガイド',
  description:
    '認知症の家族にどう接すれば良いか分からず悩んでいる方へ。進行ステージ別の特徴と接し方、今日からできる7つの基本姿勢、公的サポートの使い方を専門用語の言い換え付きでやさしくまとめました。',
  author: {
    '@type': 'Organization',
    name: 'やさしい老人ホームガイド編集部',
    url: 'https://2ndhappiness.com/about',
  },
  reviewedBy: {
    '@type': 'Person',
    name: '介護支援専門員（編集部社内アドバイザー）',
    jobTitle: '介護支援専門員',
  },
  publisher: {
    '@type': 'Organization',
    name: 'やさしい老人ホームガイド',
    url: 'https://2ndhappiness.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://2ndhappiness.com/images/hero.jpg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://2ndhappiness.com/dementia-care-basics',
  },
  image: ['https://2ndhappiness.com/images/reason_family.jpg'],
  datePublished: '2026-05-12',
  dateModified: '2026-05-12',
  inLanguage: 'ja',
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'ホーム',
      item: 'https://2ndhappiness.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: '認知症ケアの基本',
      item: 'https://2ndhappiness.com/dementia-care-basics',
    },
  ],
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '認知症と「もの忘れ」はどう違いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          '加齢に伴う「もの忘れ」は体験の一部を思い出しにくくなる状態で、ヒントがあれば思い出せることが多いです。一方、認知症は体験そのものの記憶がすっぽり抜ける・日常生活に支障が出るといった違いがあるとされます。気になる症状が続くときは、自己判断せず、かかりつけ医や物忘れ外来、地域包括支援センターに相談してください（2025年度時点・厚生労働省「みんなのメンタルヘルス」等を参考）。',
      },
    },
    {
      '@type': 'Question',
      name: '認知症の家族にイライラしてしまう自分が嫌になります。どうすれば良いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'イライラしてしまうのは、あなたが介護に向き合っている証拠です。決して責めないでください。完璧に対応できる家族はいません。地域包括支援センターや認知症の人と家族の会の電話相談、家族会など、同じ立場の人と話せる場を活用しましょう。ショートステイ（短期間の宿泊サービス）やデイサービス（日帰りで通うサービス）で「距離を置く時間」をつくることも、長く介護を続けるためには大切です。',
      },
    },
    {
      '@type': 'Question',
      name: '本人が「自分は認知症ではない」と言い張ります。受診をどう促せば良いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          '無理に「認知症の検査を受けに行こう」と言わず、「健康診断のついでに脳の検査もしてみない？」「最近頭痛いって言っていたから、念のため」など、別の入口から提案するのがおすすめです。本人が信頼している人（かかりつけ医や年長の親族など）から声をかけてもらう方法もあります。地域包括支援センターでは、家族からの相談だけでも対応してくれます（無料）。',
      },
    },
    {
      '@type': 'Question',
      name: '介護保険のサービスは認知症と診断されないと使えませんか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'いいえ、認知症の診断名が必須ではありません。介護保険は要介護認定（市町村が介護の必要度を判定する手続き）の結果に基づいて利用できます。要支援1・2、要介護1〜5の区分に応じて、デイサービスや訪問介護、福祉用具レンタル等が利用可能です。なお、認知症の方に特化したグループホーム（認知症対応型共同生活介護）は、認知症の診断があり、要支援2または要介護1〜5の方が対象とされています（要支援1は対象外。2025年度時点・指定地域密着型サービスの基準）。',
      },
    },
    {
      '@type': 'Question',
      name: '「認知症初期集中支援チーム」とは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          '認知症が疑われる方やご家族を訪問し、初期の段階で適切な医療・介護サービスにつなぐ専門職チームです（医師・看護師・社会福祉士など）。市区町村が設置主体で、国の認知症施策推進大綱に基づき全市町村への設置が進められています（2025年度時点・厚生労働省）。運用や対象範囲は自治体により異なるため、お住まいの地域包括支援センターや市区町村の高齢福祉担当窓口にご確認ください。相談・利用は基本的に無料です。',
      },
    },
  ],
}

const stages = [
  {
    label: '軽度',
    titleJa: '初期段階（軽度）',
    color: '#E8F5E9',
    border: '#2E7D52',
    labelColor: '#2E7D52',
    duration: '症状に気づき始めてから数年程度（個人差が大きい）',
    signs: [
      '同じことを何度も聞く・話す',
      '約束や予定を忘れる',
      '探し物が増える、置き場所を忘れる',
      '料理の手順を間違える、味付けが変わる',
      '気力が下がる、外出を控えるようになる',
    ],
    approach:
      '本人もうすうす変化に気づき、不安を抱えている時期です。「ボケた？」「しっかりして」と詰めるのではなく、できることを尊重しながら見守る姿勢が大切です。焦って動かなくても大丈夫ですが、地域包括支援センターに「相談だけ」してみると、後々の選択肢が広がります。',
  },
  {
    label: '中等度',
    titleJa: '中期段階（中等度）',
    color: '#FFF3E0',
    border: '#F57C00',
    labelColor: '#E65100',
    duration: '数年〜十年程度の幅がある（個人差・原因疾患により異なる）',
    signs: [
      '日付や曜日、場所が分からなくなる',
      '家族や知人の名前が思い出しにくい',
      '着替えや入浴、トイレに介助が必要になる',
      '夜と昼が逆転する、夜間に活動する',
      '感情の起伏が大きくなる、不安になりやすい',
    ],
    approach:
      '日常生活に介助が必要になり、本人と家族の負担が一気に増える時期です。家族だけで抱え込まず、デイサービスやショートステイなどの介護保険サービスを積極的に取り入れることが、本人にとっても家族にとっても助けになります。',
  },
  {
    label: '重度',
    titleJa: '後期段階（重度）',
    color: '#F3E5F5',
    border: '#7B1FA2',
    labelColor: '#7B1FA2',
    duration: '個人差が大きく、数年単位で経過することが多い',
    signs: [
      '言葉でのやりとりが難しくなる',
      '食事・排泄に全面的な介助が必要になる',
      '寝たきりに近い状態になることもある',
      '感情表現は最後まで残るとされる',
      '誤嚥（飲み込みにくさ）への配慮が必要',
    ],
    approach:
      '言葉が通じにくくなっても、表情や手のぬくもりは伝わると言われています。お話しできなくなっても「そばにいる時間」自体が支えになります。在宅介護が難しい場合は、認知症対応型のグループホームや介護付き有料老人ホームへの入居を検討する選択肢もあります。',
  },
]

const sevenBasics = [
  {
    no: '01',
    title: '驚かさない・正面からゆっくり声をかける',
    body:
      '視界の外から急に話しかけると、本人は強く驚いてしまいます。前に回り込み、目線の高さを合わせて「○○さん、こんにちは」とゆっくり声をかける——これだけで安心感がぐっと変わります。',
  },
  {
    no: '02',
    title: '否定しない・「そうなんですね」で受け止める',
    body:
      '「もうご飯食べたでしょう」「違うって言ったよね」と否定すると、本人は混乱や不安を増幅させてしまいます。事実と違っても、まずは「そうなんですね」と受け止めて、別の話題にそっと切り替えるのがおすすめです。',
  },
  {
    no: '03',
    title: '急かさない・本人のペースに合わせる',
    body:
      '「早く着替えて」「もう行くよ」と急かされると、本人は何をすれば良いか分からなくなってしまいます。動作の合間に十分な間を置き、本人が自分で動き出すのを待つくらいのつもりで関わると、お互いに楽になります。',
  },
  {
    no: '04',
    title: '一度に多くの情報を伝えない',
    body:
      '「明日は10時に病院、その前に薬を飲んで、それから着替えて…」と一気に伝えると、最初の一つも残りません。「次は○○ですよ」「一緒に着替えましょうか」と、一つずつ短く伝えるのが基本です。',
  },
  {
    no: '05',
    title: '本人の「世界」をなるべく尊重する',
    body:
      '「もう亡くなった人に会いに行く」「30年前の話を今のことのように話す」——本人の中ではそれが「今」です。事実を訂正するより、「そうなんですね、心配ですね」と本人の世界に寄り添うほうが、落ち着きを取り戻しやすいと言われています。専門的には「バリデーション」という関わり方として知られていますが、技法の効果には個人差があり、家族としては「本人の世界を受け止める姿勢」を出発点にすれば十分です。',
  },
  {
    no: '06',
    title: '失敗を責めない・できることに目を向ける',
    body:
      'お茶をこぼした、料理を焦がした——失敗を責めると、本人は「迷惑をかけている」と落ち込み、活動量が減ってしまいます。「大丈夫、一緒に片付けましょう」「お料理してくれてありがとう」と、できたことに目を向ける関わりが、本人の力を守ります。',
  },
  {
    no: '07',
    title: 'スキンシップと笑顔を大切に',
    body:
      '言葉が伝わりにくくなっても、手を握る・肩に触れる・笑顔を向けるといった非言語のやりとりは最後まで残るとされます。「一緒にいるよ」「あなたが大切だよ」というメッセージは、表情や触れ合いでこそ伝わります。',
  },
]

const ngPatterns = [
  {
    pattern: 'NG 1：「さっき言ったでしょう」と繰り返し指摘する',
    detail:
      '本人にとっては「初めて聞く話」なので、何度指摘されても理解できません。むしろ「責められた」という感情だけが残り、家族との関係性が悪化します。同じ質問には何度でも同じ答えで応じるのが基本です。',
  },
  {
    pattern: 'NG 2：嘘や作り話を強く訂正する',
    detail:
      '本人の中では本当のことです。強く訂正されると、自分の現実を否定されたように感じ、興奮や暴言につながることがあります。「そうですか」と受け止め、別の話題にゆるやかに移すほうが穏やかに過ごせます。',
  },
  {
    pattern: 'NG 3：「もう何もできないんだから」と取り上げてしまう',
    detail:
      '危ないからと家事や趣味を全部取り上げると、本人の意欲はさらに低下します。「お米を研ぐところだけお願い」「タオルを畳むのが本当にきれい」など、安全に任せられる役割を残すことが、本人の尊厳を守ります。',
  },
  {
    pattern: 'NG 4：人前で「うちの母、認知症なんですよ」と話す',
    detail:
      '本人の前で病名や弱った様子を話されると、本人は深く傷つきます。本人がいる場では「最近少し物忘れが増えて」程度に抑え、詳しい話は別の場でケアマネージャーや医師としましょう。',
  },
  {
    pattern: 'NG 5：本人を置いて家族だけで決めてしまう',
    detail:
      '「どうせ分からないから」と本人抜きで生活の大事なことを決めてしまうのは、たとえ進行が進んでいても避けたいところです。表情やしぐさからは気持ちが伝わってきます。「○○についてどう思う？」と聞いてみる場面が一つでも残せると、本人もご家族も安心です。',
  },
]

const publicSupports = [
  {
    name: '地域包括支援センター',
    role: '高齢者の総合相談窓口（市区町村が設置）',
    body:
      '介護全般のよろず相談窓口です。「認知症かもしれない」と感じた段階から相談できます。保健師（またはこれに準ずる看護師等）・社会福祉士・主任介護支援専門員（主任ケアマネジャー）の3職種が原則として配置されており（介護保険法施行規則第140条の66）、医療機関の紹介・要介護認定の申請支援・ご家族の相談まで幅広く対応してくれます。相談は無料です。',
  },
  {
    name: '認知症初期集中支援チーム',
    role: '医療・介護の専門職による訪問支援チーム',
    body:
      '認知症が疑われる方やそのご家族を訪問し、初期段階から適切な医療・介護サービスにつなぐ専門職チームです。医師・看護師・社会福祉士などで構成され、市区町村が設置主体で、国の認知症施策推進大綱に基づき全市町村への設置が進められています（2025年度・厚生労働省）。運用や対象範囲は自治体により異なります。相談・利用は基本的に無料です。',
  },
  {
    name: '認知症カフェ（オレンジカフェ）',
    role: '本人・家族・地域住民が集う交流の場',
    body:
      '認知症の本人・家族・専門職・地域住民が気軽に集える場として、市区町村や社会福祉法人などが運営しています。お茶を飲みながら情報交換ができ、「同じ悩みの人がいる」と感じられる場として、家族の孤立を防ぐ意味でも大切な存在です。',
  },
  {
    name: '認知症の人と家族の会',
    role: '全国組織の家族支援団体',
    body:
      '公益社団法人として全国に支部があり、電話相談・家族会・会報誌の発行などを通じて、家族同士の支え合いを担っています。「同じ経験をした人と話したい」というときの最初の連絡先として、覚えておくと心強い存在です。',
  },
]

export default function DementiaCareBasicsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <ArticleJsonLd
        path={'/dementia-care-basics'}
        title={'認知症ケアの基本｜家族の接し方と進行ステージ別ガイド'}
        description={'認知症の家族にどう接すれば良いか分からず悩んでいる方へ。進行ステージ別の特徴と接し方、今日からできる7つの基本姿勢、公的サポートの使い方を、専門用語の言い換え付きでやさしくまとめました。'}
      />
      <Breadcrumb items={[{ label: '認知症ケアの基本' }]} />

      <h1
        className="text-2xl md:text-3xl font-bold mb-3 text-primary"
        style={{ borderLeft: 'none', paddingLeft: 0 }}
      >
        認知症ケアの基本
        <br className="md:hidden" />
        ｜家族が知っておきたい接し方と進行ステージ
      </h1>
      <p className="text-sm text-gray-500 mb-2">
        正しく知って、無理せず寄り添うためのやさしいガイド
      </p>
      <p className="text-sm text-gray-500 mb-2">
        公開：2026年5月 ｜ やさしい老人ホームガイド編集部
      </p>
      <p className="text-xs text-gray-500 mb-6">
        介護現場経験のある編集者が執筆し、介護支援専門員（ケアマネージャー）と社会保険労務士の助言を受けて編集部で確認しています。
        <span style={{ background: '#FFF3E0', color: '#E65100', padding: '0 6px', marginLeft: '6px', borderRadius: '4px', fontWeight: 700 }}>PR</span>
        <span style={{ marginLeft: '6px' }}>本ページはアフィリエイト広告（みんなの介護）を含みます。</span>
      </p>

      <SummaryBox items={summaryItems} />

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <Image
          src="/images/reason_family.jpg"
          alt="認知症の家族にやさしく寄り添う家族のイメージ"
          width={600}
          height={400}
          style={{ width: '50%', height: 'auto', borderRadius: '12px' }}
          priority
        />
      </div>

      {/* 共感ブロック */}
      <div
        className="rounded-xl p-6 mb-10"
        style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}
      >
        <p className="text-base mb-3">
          「同じ話を何度もする」「冷蔵庫に財布が入っている」「自分のことを忘れられた気がする」——家族の変化に気づいた日のことを、覚えていらっしゃるでしょうか。
        </p>
        <p className="text-base mb-3">
          認知症かもしれないと感じたとき、多くの家族はまず戸惑い、次に「どう接すればいいのか分からない」という壁にぶつかります。ネットには情報があふれていて、何が正解か見えなくなりがちです。
        </p>
        <p className="text-base mb-3">
          もし今、ご家族にイライラしてしまう自分が嫌になっている方がいらっしゃったら——それは、あなたが介護に正面から向き合っている証拠です。完璧にできなくて当たり前ですし、ご自身を責めなくて大丈夫です。
        </p>
        <p className="text-base font-bold text-primary">
          このページでは、認知症のことを「正しく知る」ことから始め、進行ステージごとの接し方、今日からできる7つの基本姿勢、頼れる公的サポートまでをやさしくまとめました。一気に全部を覚える必要はありません。気になった項目だけ、ゆっくり読んでみてください。
        </p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        認知症って、結局どんな病気？まずは正しく知ることから
      </h2>
      <p className="text-base mb-4">
        「認知症」は、ひとつの病気の名前ではなく、<strong>脳の働きが少しずつ低下することで日常生活に支障が出る状態の総称</strong>です。原因となる病気は複数あり、代表的なものは次の通りです（厚生労働省「認知症施策」より）。
      </p>
      <div className="rounded-xl overflow-x-auto mb-6" style={{ border: '1px solid #d1d5db' }}>
        <table className="w-full border-collapse text-base" style={{ minWidth: '480px' }}>
          <thead>
            <tr style={{ background: '#F3F4F6' }}>
              <th className="text-left px-4 py-3 text-sm">主な原因疾患</th>
              <th className="text-left px-4 py-3 text-sm">特徴（一般的に言われていること）</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderTop: '1px solid #e5e7eb' }}>
              <td className="px-4 py-3 font-bold text-sm">アルツハイマー型認知症</td>
              <td className="px-4 py-3 text-sm">最も多いとされる。記憶障害（特に新しい出来事）から始まることが多い</td>
            </tr>
            <tr style={{ background: '#F9FAFB', borderTop: '1px solid #e5e7eb' }}>
              <td className="px-4 py-3 font-bold text-sm">血管性認知症</td>
              <td className="px-4 py-3 text-sm">脳梗塞・脳出血などが原因。症状の進み方が階段状になりやすい</td>
            </tr>
            <tr style={{ borderTop: '1px solid #e5e7eb' }}>
              <td className="px-4 py-3 font-bold text-sm">レビー小体型認知症</td>
              <td className="px-4 py-3 text-sm">幻視、認知の変動（日や時間帯で調子の波が大きい）、パーキンソン症状（動作の緩慢・筋のこわばり・手足の震え等）が出やすい</td>
            </tr>
            <tr style={{ background: '#F9FAFB', borderTop: '1px solid #e5e7eb' }}>
              <td className="px-4 py-3 font-bold text-sm">前頭側頭型認知症</td>
              <td className="px-4 py-3 text-sm">人格変化・行動の変化（同じ行動を繰り返す等）が出やすい</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mb-6">
        ※特徴はあくまで一般的に言われている目安です。同じ病名でも症状は個人によって大きく異なります。診断や治療方針は必ず医師にご相談ください。
      </p>
      <p className="text-base mb-4">
        大切なのは、<strong>認知症になっても本人の「人格」や「感情」までなくなるわけではない</strong>ということです。「うれしい」「悲しい」「恥ずかしい」という気持ちは最後まで残るとされ、家族からどう扱われているかは本人にしっかり伝わっています。
      </p>
      <p className="text-base mb-8">
        接し方の工夫で症状の進行を遅らせると科学的に証明されているわけではありません。ただし、本人がストレスを感じにくい環境を整えることは、後述する行動・心理症状（BPSD）の落ち着きや、ご家族の介護負担の軽減につながると一般に言われています。少しずつできる範囲で取り入れていけば十分です。
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        認知症の進行ステージ｜軽度・中等度・重度の特徴と接し方
      </h2>
      <p className="text-base mb-4">
        認知症は、おおまかに「軽度」「中等度」「重度」と段階的に進んでいくと言われています。ステージごとに、本人にあらわれる変化と、家族が意識したい接し方が変わります。
      </p>
      <p className="text-base mb-6">
        「うちはどの段階だろう」と当てはめながら読んでみてください。ただし、進行のスピードや出る症状には個人差が大きく、はっきり線が引けないグレーゾーンも長く続きます。ぴったり当てはまらなくても気にしすぎなくて大丈夫です。
      </p>
      <div className="space-y-6 mb-10">
        {stages.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl p-6"
            style={{ backgroundColor: s.color, border: `2px solid ${s.border}` }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-xs font-bold px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: s.labelColor }}
              >
                {s.label}
              </span>
              <p className="text-lg font-bold" style={{ color: '#1A1A1A' }}>{s.titleJa}</p>
            </div>
            <p className="text-xs text-gray-600 mb-3">期間の目安：{s.duration}</p>
            <p className="text-sm font-bold mb-2" style={{ color: s.labelColor }}>あらわれやすい変化</p>
            <ul className="space-y-1 mb-4 text-sm">
              {s.signs.map((sign, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span style={{ color: s.labelColor, flexShrink: 0 }}>◆</span>
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-xl px-4 py-3" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
              <p className="text-sm font-bold mb-1" style={{ color: s.labelColor }}>🌿 この時期の接し方</p>
              <p className="text-sm" style={{ color: '#444', lineHeight: 1.8 }}>{s.approach}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        どの段階にも共通しているのは、<strong>「本人の気持ちは最後まで残る」</strong>ということ。記憶や言葉が薄れていっても、温かい接し方は心に届きます。「どのステージかな」と気になったら、
        <Link href="/care-level" style={{ color: '#1A5E9E', textDecoration: 'underline' }}>要介護度の違いと認定手続き</Link>
        も合わせて読んでみると、介護保険サービスとのつながりが見えてきます。
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        なぜ「家族の接し方」がこれほど大切なのか？
      </h2>
      <p className="text-base mb-4">
        本人の不安や混乱から生まれる行動を、医学的には「行動・心理症状（BPSD：Behavioral and Psychological Symptoms of Dementia）」と呼ぶことがあります。ひとり歩き（従来「徘徊」と呼ばれていたもの）、事実と違う思い込み（物盗られ妄想と呼ばれます）、強い言葉が出る、介護を嫌がるといった行動がこれにあたり、家族にとっては介護のしんどさを大きく左右する部分です。
      </p>
      <p className="text-base mb-4">
        BPSDは、本人が「ここはどこ？」「この人は誰？」「自分は何をすれば？」と強い不安を感じたときに出やすいと言われています。つまり、家族の接し方によって、本人の不安が和らぎ、BPSDが落ち着くこともあるということです（個人差はあります）。
      </p>
      <p className="text-base mb-4">
        逆に、否定したり急かしたりする関わりが続くと、本人は「自分は責められている」と感じ、防衛のための行動が増えてしまいます。これは「本人が悪い」のでも「家族が悪い」のでもなく、認知症という病気の特性にすぎません。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#F0FAF4', border: '1px solid #A5D6A7' }}>
        <p className="text-sm" style={{ color: '#1B5E37', lineHeight: 1.9 }}>
          💡 <strong>覚えておきたいこと：</strong>
          ひとり歩き・思い込み・強い言葉といった行動は、本人が困っているサインです。「困った行動」ではなく「困っている人」がいる——この見方に変えるだけで、家族の心も少し軽くなります。
        </p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        家族が今日からできる7つの基本姿勢
      </h2>
      <p className="text-base mb-4">
        ここからは、家族として日常の中で意識しておきたい7つの基本姿勢を紹介します。全部を一度にやろうとせず、「今日はこれだけ」と決めて一つずつ取り入れていけば十分です。
      </p>
      <div className="space-y-4 mb-10">
        {sevenBasics.map((b) => (
          <div
            key={b.no}
            className="rounded-xl p-5 bg-white"
            style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                className="text-xs font-bold text-white px-2 py-1 rounded"
                style={{ backgroundColor: '#2E7D52' }}
              >
                {b.no}
              </span>
              <p className="font-bold text-base">{b.title}</p>
            </div>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{b.body}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base">
          <strong>💬 体験談の一例【個人の感想】：</strong>
          <span style={{ background: '#FFE0B2', padding: '0 6px', borderRadius: '4px', fontWeight: 700 }}>【編集部が複数の取材内容を参考に再構成した架空のエピソードです】</span>
          「母が私のことを『お隣のおばさん』と呼ぶようになったとき、最初は涙が出ました。今でも寂しさはあります。けれどある日、ケアマネさんに『お隣さんでも、お母さまが安心して話せるならそれでいいんですよ』と言われて、少しずつ肩の力が抜けました。『母の世界に私がお邪魔している』くらいの気持ちで関わるようになって、お互いの穏やかな時間が増えてきた気がします」（千葉県・50代女性／母・要介護3）
        </p>
        <p className="text-xs text-gray-500 mt-2">※個人の感想であり、すべての方に同じ結果や効果を保証するものではありません。</p>
      </div>

      <CTABox compact />

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        対応を少し変えると楽になる5つのポイント（読み飛ばしOK）
      </h2>
      <p className="text-base mb-4">
        ここでは、家族側がついやってしまいがちな関わり方を5つ取り上げます。<span className="text-sm text-gray-500">※読んで苦しくなったら飛ばしてもらって構いません。過去のご自身を責めるためのリストではなく、明日からの選択肢を増やすためのメモとしてご覧ください。</span>
      </p>
      <p className="text-base mb-6">
        誰でも最初は手探りで、知らないことを「やってしまっていた」と気づくのは自然なことです。今日からの関わりを少しずつ変えていけば、本人にもちゃんと伝わります。
      </p>
      <div className="space-y-4 mb-10">
        {ngPatterns.map((p, i) => (
          <div
            key={i}
            className="rounded-xl p-5 bg-white"
            style={{ border: '1px solid #e5e7eb' }}
          >
            <p className="font-bold text-base mb-2" style={{ color: '#B71C1C' }}>⚠️ {p.pattern}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{p.detail}</p>
          </div>
        ))}
      </div>

      {/* 中盤の踊り場ブロック */}
      <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: '#FFF8E1', border: '1px dashed #FFC107' }}>
        <p className="text-base" style={{ color: '#5D4037' }}>
          ☕ ここまで読まれて、頭の中がいっぱいになっていませんか。続きはまた今度で大丈夫です。お茶を飲んで、深呼吸して、ご家族と「今日できそうな1つ」だけ話してみるところから始めてみてください。完璧にやろうとしなくていいのです。
        </p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        認知症の家族を支える公的サポートと相談窓口
      </h2>
      <p className="text-base mb-4">
        認知症の介護は、家族だけで抱え込まないことが何より大切です。日本には、認知症の本人とご家族を支えるためのさまざまな公的サポートが整っています。「使うほどではないかも」と遠慮せず、早めに相談窓口を頼ってください。<strong>相談はすべて無料です。</strong>
      </p>
      <div className="space-y-4 mb-8">
        {publicSupports.map((s, i) => (
          <div
            key={i}
            className="rounded-xl p-5 bg-white"
            style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #1A5E9E' }}
          >
            <p className="font-bold text-base mb-1" style={{ color: '#1A5E9E' }}>🏛️ {s.name}</p>
            <p className="text-xs text-gray-500 mb-2">{s.role}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{s.body}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-4">
        介護保険サービスを使うには、要介護認定（介護がどの程度必要かを市町村が判定する手続き）を受ける必要があります。介護保険法では、申請日から原則30日以内に認定結果が通知されることになっています（介護保険法第27条第11項。特別な理由がある場合は延長されることがあります）。申請後はサービスを暫定的に使える仕組みもあります。詳しくは
        <Link href="/care-level" style={{ color: '#1A5E9E', textDecoration: 'underline' }}>要介護度の違いと認定手続き</Link>
        や
        <Link href="/care-manager-relation" style={{ color: '#1A5E9E', textDecoration: 'underline' }}>ケアマネージャーとの上手な付き合い方</Link>
        をご覧ください。
      </p>
      <p className="text-base mb-8">
        在宅介護が難しくなってきた場合は、認知症対応型のグループホーム（認知症対応型共同生活介護）、認知症ケアに力を入れている介護付き有料老人ホーム、要介護3以上であれば特別養護老人ホーム（特養／公的施設）なども選択肢になります。費用感や受け入れ条件は施設タイプによって大きく異なるため、複数の区分を比較するのがおすすめです。施設の特徴は
        <Link href="/dementia-facility" style={{ color: '#1A5E9E', textDecoration: 'underline' }}>認知症対応施設の選び方</Link>
        や
        <Link href="/types" style={{ color: '#1A5E9E', textDecoration: 'underline' }}>施設の種類</Link>
        で詳しく整理しています。
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        介護する家族の心を守るために｜「自分も大事にしていい」
      </h2>
      <p className="text-base mb-4">
        認知症の介護は、長い時間軸の旅です。優しくし続けるのは本当に難しいことですし、イライラする日があるのは、頑張っている証拠でもあります。背負い込みすぎず、休める日には休む、というリズムが何より続ける力になります。
      </p>
      <p className="text-base mb-4">
        介護をしていると、つい「自分のための時間」が後回しになります。眠れない、外出できない、趣味から遠ざかる——気づかないうちに心がすり減っていることがあります。ご家族が休む時間をつくることは、結果として本人の穏やかな時間にもつながります。
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[
          { icon: '🌿', title: 'デイサービスを使って「離れる時間」をつくる', body: '週1〜2回でも本人がデイサービスに通うことで、家族にも休息の時間が生まれます。本人の気分転換にもなります。' },
          { icon: '🛌', title: 'ショートステイで「数日休む」選択肢', body: '介護保険のショートステイ（短期間の宿泊サービス）を活用し、家族旅行や帰省、休養に使う方は多くいらっしゃいます。介護を長く続けるための、ごく当たり前の選択です。' },
          { icon: '💬', title: '同じ立場の人と話せる場へ', body: '認知症の人と家族の会、認知症カフェ、SNSの当事者コミュニティなど、「分かってもらえる場」を1つ持っておくと心が軽くなります。' },
          { icon: '🏥', title: '自分の体調にも気を配る', body: 'ご家族の側もかかりつけ医を持ち、定期検診や睡眠・食事を後回しにしすぎないようにしたいところです。眠れない日が続く、涙が出る——そんなときは、ご自身もかかりつけ医や心療内科に話してみてください。介護を続けるご家族のメンタル相談は普通のことです。' },
        ].map((b, i) => (
          <div key={i} className="rounded-xl bg-white p-5" style={{ border: '1px solid #e5e7eb' }}>
            <div className="flex items-center gap-2 mb-2">
              <span style={{ fontSize: '22px' }}>{b.icon}</span>
              <p className="font-bold text-base">{b.title}</p>
            </div>
            <p className="text-sm text-gray-700">{b.body}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        休めない日があっても、それは仕方のないことです。それでも30分だけ別の部屋で深呼吸できたら、それで十分。エネルギーは少しずつ補充するくらいで大丈夫です。介護離職や費用負担で行き詰まりそうな方は、
        <Link href="/care-resignation" style={{ color: '#1A5E9E', textDecoration: 'underline' }}>介護離職を防ぐ制度活用ガイド</Link>
        や
        <Link href="/care-cost-split" style={{ color: '#1A5E9E', textDecoration: 'underline' }}>介護費用の兄弟間分担ガイド</Link>
        ものぞいてみてください。
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        よくある質問
      </h2>
      <div className="space-y-4 mb-10">
        {faqLd.mainEntity.map((f, i) => (
          <div key={i} className="rounded-xl p-5 bg-white" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #1A5E9E' }}>
            <p className="font-bold text-base mb-2" style={{ color: '#1A5E9E' }}>Q. {f.name}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>A. {f.acceptedAnswer.text}</p>
          </div>
        ))}
      </div>

      {/* まとめ */}
      <div className="rounded-xl p-6 mb-10" style={{ backgroundColor: '#F3F8F5', border: '2px solid #2E7D52' }}>
        <h2 className="text-xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
          まとめ｜「正しく知って、無理せず寄り添う」が長続きの秘訣
        </h2>
        <p className="text-base mb-3">
          認知症ケアに正解はありません。本人の症状や性格、家族の事情はそれぞれ違いますから、誰かの成功例がそのまま自分に当てはまるとは限りません。だからこそ、まず「正しく知る」ことから始め、無理のないペースで寄り添っていくのが大切です。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            '今日帰宅したら、本人の目を見て「ただいま」とゆっくり声をかけてみる',
            '「同じ話ですよ」と訂正しそうになったら、「そうなんですね」に変えてみる',
            '地域包括支援センターの電話番号を、スマホに登録しておく',
            '次の週末、家族で「介護のしんどい部分」をひとつだけ話してみる',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          焦らなくても大丈夫。完璧にできなくても大丈夫です。「知ろうとしている」その姿勢が、すでに本人を支えています。
        </p>
      </div>

      <CTABox />

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/dementia-facility', label: '認知症対応施設の選び方｜グループホーム・有料の違い', icon: '🧠' },
          { href: '/care-manager-relation', label: 'ケアマネージャーとの上手な付き合い方', icon: '🤝' },
          { href: '/care-level', label: '要介護度の違いと認定手続き｜申請から結果通知まで', icon: '📋' },
          { href: '/care-resignation', label: '介護離職を防ぐ制度活用ガイド', icon: '💼' },
          { href: '/parents-support', label: '親のためにやるべきこと完全ガイド｜8つのテーマ', icon: '👪' },
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

      {/* 出典・免責 */}
      <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="font-bold text-sm mb-2 text-gray-700">📚 主な出典・参考</p>
        <ul className="space-y-1 text-xs text-gray-600 mb-3">
          <li>・厚生労働省「認知症施策推進大綱／認知症施策」</li>
          <li>・厚生労働省「認知症初期集中支援チームの設置状況」</li>
          <li>・厚生労働省「みんなのメンタルヘルス（認知症）」</li>
          <li>・公益社団法人 認知症の人と家族の会</li>
          <li>・各都道府県・市区町村「地域包括支援センター 業務案内」</li>
        </ul>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.7 }}>
          本ページは2025年基準の制度をもとに作成しています。認知症の症状・進行・治療方針は個人差が大きく、また介護保険制度・自治体の運用は改定や地域差があるため、医療的な判断は必ず医師に、介護サービスについては必ずお住まいの市区町村窓口・地域包括支援センター・担当ケアマネージャーにご確認ください。本記事の情報は一般的な参考情報であり、診断・治療効果や個別の状況への助言を保証するものではありません。
        </p>
        <p className="text-xs text-gray-500 mt-2">
          本ページにはアフィリエイト広告（みんなの介護）を含みます。掲載基準：全国対応の入居相談サービスの中から、無料相談・掲載施設数・運営実績を編集部で確認したうえで選んでいます。掲載は、選択肢を増やすための一つの入口としてご紹介しているものです。比較せずにそっと閉じていただいても大丈夫です。
        </p>
      </div>
    </>
  )
}
