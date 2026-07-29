import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

import ArticleJsonLd from '@/components/ArticleJsonLd'
export const metadata: Metadata = {
  title: 'ケアマネージャーとの上手な付き合い方｜家族が知りたい信頼関係の築き方',
  description: 'ケアマネージャーとの付き合い方を家族目線で解説。相性のサイン・担当変更の手続き・すれ違いを防ぐ会話例まで、専門用語の言い換え付きで具体的にまとめました。担当変更は無料で可能です。',
  alternates: {
    canonical: 'https://2ndhappiness.com/care-manager-relation',
  },
  openGraph: {
    title: 'ケアマネージャーとの上手な付き合い方｜家族が知りたい信頼関係の築き方',
    description: 'ケアマネージャーとの付き合い方を家族目線で解説。相性のサイン・担当変更の手続き・すれ違いを防ぐ会話例まで、専門用語の言い換え付きでやさしくまとめました。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
    url: 'https://2ndhappiness.com/care-manager-relation',
    images: [
      {
        url: 'https://2ndhappiness.com/images/reason_family.jpg',
        width: 1200,
        height: 630,
        alt: 'ケアマネージャーと家族が穏やかに話し合っているイメージ',
      },
    ],
  },
}

const summaryItems = [
  'ケアマネージャーは「親と家族の生活全体」を一緒に考えてくれる<mark class="highlight">介護の相談窓口役</mark>です',
  '良い関係づくりの土台は「<mark class="highlight">情報を隠さず共有する</mark>」「<mark class="highlight">遠慮せず希望を伝える</mark>」の2つです',
  '「合わないかも」と感じたら、事業所や<mark class="highlight">地域包括支援センター</mark>（お住まいの地域の高齢者総合相談窓口）に担当変更を相談できます（無料）',
  '一気に全部を解決しようとせず、<mark class="highlight">月1回の打合せ</mark>で1つずつ整えていけば大丈夫です',
]

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ケアマネージャーとの上手な付き合い方｜家族が知りたい信頼関係の築き方',
  description:
    'ケアマネージャー（介護の相談役）と上手に付き合うコツを家族目線でやさしく解説。相性が合わないときの伝え方・担当変更の手続き・すれ違いを防ぐ会話例まで、具体的にまとめました。',
  author: {
    '@type': 'Organization',
    name: 'やさしい老人ホームガイド編集部',
    url: 'https://2ndhappiness.com/about',
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
    '@id': 'https://2ndhappiness.com/care-manager-relation',
  },
  image: ['https://2ndhappiness.com/images/reason_family.jpg'],
  datePublished: '2026-05-09',
  dateModified: '2026-05-09',
  inLanguage: 'ja',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ケアマネージャーへの相談は有料ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          '居宅介護支援（在宅でケアプランを作る場合）の費用は、介護保険から10割給付され、利用者本人の自己負担はありません（2025年度・厚生労働省）。相談・訪問・サービス調整も基本的に追加料金なしで受けられます。※個別の状況により対応は異なるため、詳細は担当ケアマネージャーや市区町村窓口にご確認ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'ケアマネージャーが「合わない」と感じたら担当を変えられますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'はい、担当変更は可能です。同じ事業所内での担当変更を希望する場合は、まず事業所の管理者に相談します。事業所自体を変えたい場合は、地域包括支援センターや市区町村の介護保険担当窓口に相談することで、別の居宅介護支援事業所を案内してもらえます。新しい事業所との契約書類への署名はご家族にお願いするケースが一般的です（2025年度時点／状況により異なります）。',
      },
    },
    {
      '@type': 'Question',
      name: '家族はどのくらいの頻度でケアマネージャーと連絡を取れば良いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          '居宅介護支援の場合、ケアマネージャー側には原則として月1回以上の利用者宅訪問（モニタリング）が義務付けられています（指定居宅介護支援等の運営基準）。要支援の方への介護予防支援は別の頻度設定です。家族側からは状況の変化があったときに随時、電話やメールで相談して構いません（2025年度時点）。',
      },
    },
    {
      '@type': 'Question',
      name: 'ケアマネージャーは特定の施設をすすめてきます。断っても大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'もちろん断って問題ありません。ケアマネージャーは公正中立に複数の選択肢を示す立場とされています（指定居宅介護支援等の運営基準）。違和感がある場合は、別の施設や別の事業所も比較したい旨をはっきり伝えましょう。家族として複数の見学・資料請求をして比較するのは自然な行動です。※具体的な対応は事業所により異なります。',
      },
    },
    {
      '@type': 'Question',
      name: 'ケアマネージャーに伝えるとき、どこまで本音を言って良いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          '家庭の経済状況・家族関係のしこり・介護への疲れなど、踏み込んだ事情も共有して大丈夫です。むしろ情報が揃うほど、無理のないケアプランがつくりやすくなります。介護支援専門員には守秘義務（介護保険法第69条の37）があり、ご家族の事情をみだりに第三者へ伝えることはありません。サービス事業者との共有が必要な場合も、原則として本人・家族の同意を得てから行われます。',
      },
    },
  ],
}

const fivePoints = [
  {
    no: '01',
    title: '最初の面談で「家族の事情」を率直に伝える',
    body:
      '「兄弟で意見が割れている」「金銭的に余裕がない」「自分は遠方在住」など、言いにくい事情ほど早めに共有します。背景を知ってもらえるほど、現実的なケアプランの選択肢が広がります。',
  },
  {
    no: '02',
    title: 'メモと記録を残す習慣をつくる',
    body:
      '面談で決まったこと・宿題・次回までにすること、を簡単な箇条書きで残しておくと、後日「言った・言わない」のずれを防げます。LINEやメールでの連絡履歴も大切な記録です。',
  },
  {
    no: '03',
    title: '本人の希望を「翻訳」して伝える',
    body:
      '「お風呂は週2回でいい」「外に出るのが億劫」など、本人がぽろっと話したことをそのまま伝えるのが最も役立ちます。家族が代わりに整理しすぎると本音が削れてしまうので、雰囲気のまま共有する形がおすすめです。',
  },
  {
    no: '04',
    title: '困りごとは「小さいうち」に相談する',
    body:
      '「夜中にトイレに起きる回数が増えた」「食事の量が減ってきた」など、小さな変化こそ早めに伝えることで、サービスの調整やかかりつけ医との連携がスムーズになります。後回しにしないのがコツです。',
  },
  {
    no: '05',
    title: '感謝を言葉にする・無理難題は丁寧にお願いする',
    body:
      'ケアマネージャーも一人の人間で、複数の利用者を抱えています。「先日はありがとうございました」「無理を言ってすみません」の一言があるだけで、関係性はぐっと柔らかくなります。',
  },
]

const misunderstandings = [
  {
    case: 'ケース1：「全部やってくれる」と期待しすぎてしまう',
    detail:
      'ケアマネージャーは介護のコーディネーター（調整役）であり、家事代行や24時間対応の窓口ではありません。「介護保険で使えるサービス」をつなぐ役割が中心です。家族が担うべき部分と、サービスでまかなえる部分を一緒に整理してもらう関係が理想です。',
  },
  {
    case: 'ケース2：本人の希望と家族の希望がずれているのに伝えられない',
    detail:
      '「本人は在宅を希望しているけれど、家族は施設も検討したい」というすれ違いはよくあります。本人を含めない家族会議でケアマネに相談してから、改めて本人を交えた打合せを持つ、という二段構えにすると話しやすくなります。',
  },
  {
    case: 'ケース3：他の家族（兄弟など）が知らないまま話が進んでしまう',
    detail:
      '主介護者と離れて住む兄弟姉妹に情報が伝わらず、後でもめる原因になりがちです。最初の段階で「家族の連絡係」を一人決め、ケアマネからの情報をその人がメッセージで他の家族にも共有する形にしておくと安心です。',
  },
  {
    case: 'ケース4：医療の話と介護の話が混ざって動かなくなる',
    detail:
      'かかりつけ医・訪問看護・デイサービスなど、関係者が増えるほど話がもつれやすくなります。ケアマネージャーは医療と介護の橋渡し役でもあるので、「整理は全部おまかせします」と頼ってしまって構いません。',
  },
]

export default function CareManagerRelationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <ArticleJsonLd path={"/care-manager-relation"} title={"ケアマネージャーとの上手な付き合い方｜家族が知りたい信頼関係の築き方"} description={"ケアマネージャーとの付き合い方を家族目線で解説。相性のサイン・担当変更の手続き・すれ違いを防ぐ会話例まで、専門用語の言い換え付きで具体的にまとめました。担当変更は無料で可能です。"} />
      <Breadcrumb items={[{ label: 'ケアマネージャーとの上手な付き合い方' }]} />

      <h1
        className="text-2xl md:text-3xl font-bold mb-3 text-primary"
        style={{ borderLeft: 'none', paddingLeft: 0 }}
      >
        ケアマネージャーとの上手な付き合い方
        <br className="md:hidden" />
        ｜家族が知りたい信頼関係の築き方
      </h1>
      <p className="text-sm text-gray-500 mb-2">
        家族目線で読む、介護の伴走者と歩むためのやさしいガイド
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
          alt="ケアマネージャーと家族が穏やかに話し合っているイメージ"
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
          「ケアマネさんに、どこまで頼っていいんだろう」「言いたいことがあるけれど、嫌な顔をされたら気まずい」——介護が始まったばかりのご家族から、よく聞く声です。
        </p>
        <p className="text-base mb-3">
          ケアマネージャー（要介護認定を受けた方の介護プランをつくる相談役）は、これからの介護生活を一緒に歩んでくれる伴走者のような存在です。最初は距離感がつかめなくても大丈夫。少しずつ慣れていけば、心強い味方になってくれます。
        </p>
        <p className="text-base font-bold text-primary">
          このページでは、家族として「無理なく、でも遠慮しすぎず」付き合うためのコツを、専門用語をやさしく言い換えながらまとめました。今日は「こんな相談相手がいるんだな」とぼんやり知っておくだけで十分です。気になった項目があれば、また戻ってきてください。
        </p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        ケアマネージャーって、結局どんな人？
      </h2>
      <p className="text-base mb-4">
        正式には「介護支援専門員」と呼ばれますが、現場では「ケアマネさん」で十分通じます。
        <Link href="/care-level" style={{ color: '#1A5E9E', textDecoration: 'underline' }}>要介護認定（介護がどの程度必要かを市町村が判定する手続き）</Link>
        を受けた方が介護保険のサービスを上手に組み合わせて使えるよう、ケアプラン（介護の計画書）をつくる専門職、というイメージで大丈夫です。
      </p>
      <p className="text-base mb-4">
        資格としては、保健・医療・福祉分野の法定資格保有者（看護師・介護福祉士・社会福祉士など）または相談援助業務に一定年数（原則5年・900日以上）従事した方が、都道府県が実施する介護支援専門員実務研修受講試験に合格し、実務研修を修了して登録した専門職です（介護保険法第69条の2）。試験合格＝即ケアマネージャー、ではなく、研修と登録を経て現場に立つ仕組みになっています。
      </p>
      <p className="text-base mb-4">
        わかりやすく言うと、<strong>「親と家族の生活全体を見ながら、必要な介護サービスをコーディネートしてくれる相談役」</strong>です。デイサービス（通所介護＝日帰りで通うタイプの介護サービス）や訪問介護、ショートステイ（短期間の宿泊サービス）などをどの組み合わせで使うかを、本人や家族の希望を聞きながら設計してくれます。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#F0FAF4', border: '1px solid #A5D6A7' }}>
        <p className="font-bold text-base mb-2" style={{ color: '#1B5E37' }}>💡 ここがポイント</p>
        <ul className="space-y-2 text-base">
          <li className="flex items-start gap-2">
            <span style={{ color: '#2E7D52', flexShrink: 0 }}>◆</span>
            <span>居宅介護支援（在宅でケアプランを作る場合）の費用は、<strong>介護保険から10割給付</strong>される仕組みで、利用者本人の自己負担はゼロ円です（2025年度・厚生労働省）。家族の財布から出るお金もかかりません。</span>
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: '#2E7D52', flexShrink: 0 }}>◆</span>
            <span>居宅介護支援では、原則として月1回以上の利用者宅訪問（モニタリング）が義務付けられています（要支援の方への介護予防支援は別の頻度設定）。</span>
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: '#2E7D52', flexShrink: 0 }}>◆</span>
            <span>介護支援専門員には守秘義務（介護保険法第69条の37）があり、ご家族の事情をみだりに第三者へ伝えることはありません。サービス事業者との情報共有は、原則として本人・家族の同意を得てから行われます。</span>
          </li>
        </ul>
        <p className="text-xs text-gray-500 mt-3">※個別の状況により対応は異なります。詳細は担当ケアマネージャーや市区町村窓口にご確認ください。</p>
      </div>
      <p className="text-base mb-8">
        「お金を払っているお客様だから遠慮なく」というより、<strong>「同じ目標に向かう専門家チームの一員」</strong>として接するイメージが近いかもしれません。むずかしく構える必要はないので、まずは「どんな人なのかな」とお茶を飲む気分で会ってみる、くらいで十分です。
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        なぜケアマネージャーとの「相性」がこれほど大切なのか？
      </h2>
      <p className="text-base mb-4">
        ケアマネさんとは、これから何年か一緒に歩く相手です。月に1回以上は顔を合わせ、生活の細かな変化を一緒に追いかける関係になります。気軽に話せる相手だと、本人の小さな変化もすっと共有できるようになり、結果として無理のない介護環境が整いやすくなります。
      </p>
      <p className="text-base mb-4">
        相性が合っていると、ちょっとした不安も気軽に共有できます。逆に、合っていないと「言いにくいから次の訪問のときに伝えよう」が積もり、気づいたときには問題が大きくなっていることもあります。読者からよく聞くサインを並べてみました。
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="rounded-xl p-5 bg-white" style={{ border: '2px solid #2E7D52' }}>
          <p className="font-bold text-base mb-3" style={{ color: '#2E7D52' }}>🌱 良い相性のサイン</p>
          <ul className="space-y-2 text-sm">
            <li>・本人と家族、両方の話を同じくらい聞いてくれる</li>
            <li>・専門用語を使わず、噛み砕いて説明してくれる</li>
            <li>・「迷っていい」と言ってくれる、急かされない</li>
            <li>・複数の選択肢を並べてから決めさせてくれる</li>
            <li>・連絡が必要なときに、つながりやすい</li>
          </ul>
        </div>
        <div className="rounded-xl p-5 bg-white" style={{ border: '2px solid #EF9A9A' }}>
          <p className="font-bold text-base mb-3" style={{ color: '#B71C1C' }}>⚠️ 違和感が続いたら見直しのサイン</p>
          <ul className="space-y-2 text-sm">
            <li>・話を遮られる、否定から入る</li>
            <li>・特定の事業者ばかり提案される</li>
            <li>・連絡してもなかなか返ってこない</li>
            <li>・本人を置いて家族とだけ話を進めようとする</li>
            <li>・お金や契約のことを質問しづらい雰囲気がある</li>
          </ul>
        </div>
      </div>
      <p className="text-base mb-4">
        ここで大事なのは、<strong>相性が合わないと感じるのはとても自然なこと</strong>ということ。ケアマネージャーも人ですから、得意な分野・苦手な分野・話し方の癖があり、噛み合うまでに時間がかかることもあります。気持ちに余裕ができたタイミングで、少しずつ伝えてみるのでも十分間に合います。
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        ケアマネージャーと信頼関係を築くための5つのコツ
      </h2>
      <p className="text-base mb-4">
        ここからは、家族として日々の付き合いの中で意識しておくと、関係が育ちやすくなる小さな習慣を5つ紹介します。「全部やる」ではなく、「できそうなものから1つ」で大丈夫です。
      </p>
      <div className="space-y-4 mb-10">
        {fivePoints.map((p) => (
          <div
            key={p.no}
            className="rounded-xl p-5 bg-white"
            style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                className="text-xs font-bold text-white px-2 py-1 rounded"
                style={{ backgroundColor: '#2E7D52' }}
              >
                {p.no}
              </span>
              <p className="font-bold text-base">{p.title}</p>
            </div>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>
              {p.body}
            </p>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base">
          <strong>💬 体験談の一例【個人の感想】：</strong>
          「うちは父の入院をきっかけにケアマネさんが決まりました。最初は緊張して『大丈夫です』ばかり言っていたのですが、3回目の訪問で『本当は母の腰も限界で…』と打ち明けてみたら、ケアマネさんは『言ってくれてありがとうございます』と受け止めてくれて、福祉用具貸与（手すりや特殊寝台のレンタル。種目によって対象となる要介護度が異なります）の選択肢を一緒に整理してくれました。少しずつ話せるようになる、で十分なんだなと思いました」（埼玉県・50代女性／父・要介護2／編集部による複数の取材を再構成した事例）
        </p>
        <p className="text-xs text-gray-500 mt-2">※個人の感想であり、すべての方に同じ結果や効果を保証するものではありません。</p>
      </div>

      <CTABox compact />

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        ケアマネージャーが合わないと感じたときの対処法
      </h2>
      <p className="text-base mb-4">
        違和感が続くとき、いきなり「担当を変えてください」と切り出すのは、なかなか言いにくいですよね。多くの方は、次の3ステップで段階的に動いていくと、本人も家族も納得しやすくなります。途中で気持ちが疲れたら、別の記事
        <Link href="/care-resignation" style={{ color: '#1A5E9E', textDecoration: 'underline' }}>「介護離職のリアル」</Link>
        や
        <Link href="/care-cost-split" style={{ color: '#1A5E9E', textDecoration: 'underline' }}>「介護費用の兄弟間分担」</Link>
        などを覗いてみるのも気分転換になります。
      </p>
      <div className="space-y-3 mb-8">
        <div className="rounded-xl p-5" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
          <p className="font-bold text-base mb-1" style={{ color: '#1A5E9E' }}>STEP 1：もう一度「希望」を言葉にしてみる</p>
          <p className="text-sm text-gray-700">「実は、デイサービスの回数を見直したいと思っています」「本人がお風呂を嫌がっているので、訪問入浴を一度試したい」など、こちらの希望を改めて伝えるだけで関係が動き出すことも多いです。</p>
        </div>
        <div className="rounded-xl p-5" style={{ backgroundColor: '#FFF3E0', border: '1px solid #F57C00' }}>
          <p className="font-bold text-base mb-1" style={{ color: '#E65100' }}>STEP 2：事業所の管理者に相談する</p>
          <p className="text-sm text-gray-700">居宅介護支援事業所には管理者がいます。「担当ケアマネさんは一生懸命してくださっているのですが、相性が少し気になっていて…」と切り出せば、同じ事業所内で別の担当に交代してもらえる場合があります。</p>
        </div>
        <div className="rounded-xl p-5" style={{ backgroundColor: '#F3E5F5', border: '1px solid #7B1FA2' }}>
          <p className="font-bold text-base mb-1" style={{ color: '#7B1FA2' }}>STEP 3：地域包括支援センターに相談する</p>
          <p className="text-sm text-gray-700">事業所そのものを変えたい場合は、お住まいの地域の地域包括支援センター（高齢者の総合相談窓口）に相談しましょう。中立的な立場で、別の事業所を案内してくれます。相談は無料です。</p>
        </div>
      </div>
      <p className="text-base mb-8">
        「波風を立てたくない」「言いにくい」と感じるかもしれませんが、担当変更は珍しいことではありません。<strong>本人にとってより良い介護環境を整えるための調整</strong>と捉えれば、決して悪い行動ではないのです。焦らなくて大丈夫。今日決めなくても、来月でも、再来月でも構いません。
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        担当ケアマネを変える具体的な手続き（読み飛ばしOK）
      </h2>
      <p className="text-base mb-4">
        実際に変更の話をするときに踏むことが多い流れを、まとめておきます。
        <span className="text-sm text-gray-500">※ここは具体的な手続きの話なので、必要になったときに読み返す形でも大丈夫です。</span>
      </p>
      <div className="rounded-xl overflow-x-auto mb-8" style={{ border: '1px solid #d1d5db' }}>
        <table className="w-full border-collapse text-base" style={{ minWidth: '480px' }}>
          <thead>
            <tr style={{ background: '#F3F4F6' }}>
              <th className="text-left px-4 py-3 text-sm">手続き</th>
              <th className="text-left px-4 py-3 text-sm">相談先</th>
              <th className="text-left px-4 py-3 text-sm">かかる費用の目安</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderTop: '1px solid #e5e7eb' }}>
              <td className="px-4 py-3 font-bold">同じ事業所で担当者だけ変える</td>
              <td className="px-4 py-3 text-sm">事業所の管理者</td>
              <td className="px-4 py-3 text-sm">無料</td>
            </tr>
            <tr style={{ background: '#F9FAFB', borderTop: '1px solid #e5e7eb' }}>
              <td className="px-4 py-3 font-bold">事業所そのものを変える</td>
              <td className="px-4 py-3 text-sm">地域包括支援センター／市区町村窓口</td>
              <td className="px-4 py-3 text-sm">無料</td>
            </tr>
            <tr style={{ borderTop: '1px solid #e5e7eb' }}>
              <td className="px-4 py-3 font-bold">情報の引き継ぎ</td>
              <td className="px-4 py-3 text-sm">新旧のケアマネージャー間（自動）</td>
              <td className="px-4 py-3 text-sm">無料</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-base mb-4">
        担当変更を申し出ても、本人の介護サービス（デイサービス利用や訪問介護など）が中断されることは基本的にありません。新しい担当者に情報が引き継がれ、ケアプランがそのまま継続されるよう調整される仕組みになっています。事業所を変える場合は、新事業所との重要事項説明書・契約書・個人情報提供同意書への署名などをご家族にお願いするケースが一般的です（指定居宅介護支援等の運営基準）。情報の引き継ぎ自体は新旧の事業所間で行われることがほとんどです。
      </p>

      {/* 中盤の踊り場ブロック */}
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF8E1', border: '1px dashed #FFC107' }}>
        <p className="text-base" style={{ color: '#5D4037' }}>
          ☕ ここまで読んで、頭がいっぱいになっていませんか。手続きの話は必要になったときに戻ってくる場所として置いておきましょう。今日のあなたは、ここまで読めただけで十分です。お茶でも一杯飲んで、続きはまた今度で大丈夫ですよ。
        </p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        家族としての心構え｜よくある「すれ違い」事例
      </h2>
      <p className="text-base mb-6">
        ケアマネージャーとの関係でつまずきやすいのは、相手の能力ではなく「期待値のズレ」だったりします。よくある4つのパターンをのぞいてみましょう。
      </p>
      <div className="space-y-4 mb-10">
        {misunderstandings.map((m, i) => (
          <div
            key={i}
            className="rounded-xl p-5 bg-white"
            style={{ border: '1px solid #e5e7eb' }}
          >
            <p className="font-bold text-base mb-2" style={{ color: '#1A5E9E' }}>
              🔄 {m.case}
            </p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{m.detail}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-4">
        どのケースも、最初は誰でもつまずきがちなパターンです。気づいた時点で「うちの場合はこうです」と一言添えるだけで、ケアマネさんの方から整理を手伝ってくれます。家族側がすべてを抱え込まなくて大丈夫。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E8F5E9', border: '1px solid #A5D6A7' }}>
        <p className="text-sm" style={{ color: '#1B5E37', lineHeight: 1.8 }}>
          <strong>💬 体験談の一例【個人の感想】：</strong>
          「兄と私で意見が割れて険悪になっていたとき、ケアマネさんに『家族同士で先に少し話してから、また3人で集まりませんか』と提案されて救われました。中立の人がいるだけで、家族会議って驚くほど落ち着くんですね」（東京都・40代男性／母・要介護3）
        </p>
        <p className="text-xs text-gray-500 mt-2">※個別の状況により対応は異なります。</p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        ケアマネージャーとの関係が育ってくると、こんな変化があります
      </h2>
      <p className="text-base mb-4">
        時間とともに信頼関係が育ってくると、介護生活の見え方が少しずつ変わっていきます。具体的にどんな変化があるのか、家族の声からよく聞くものをまとめました。
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {[
          { icon: '🌿', title: '小さな相談がしやすくなる', body: '「お風呂を嫌がるようになった」「夜眠れていないみたい」など、ちょっとした変化を気軽に共有でき、悪化を防げます。' },
          { icon: '🤝', title: '医療・介護の橋渡しがスムーズ', body: 'かかりつけ医・訪問看護・薬局との連携をケアマネが担ってくれるので、家族が情報を伝言する負担が減ります。' },
          { icon: '🧭', title: '将来の選択肢を一緒に考えられる', body: '「在宅をどこまで続けるか」「施設も視野に入れるか」を、状況の変化に合わせて中立的に話し合えます。' },
          { icon: '💛', title: '家族の心の負担が軽くなる', body: '「自分だけで抱え込まなくていい」と思えるだけで、介護への向き合い方が変わったと話す家族は多いです。' },
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
          まとめ｜「ひとりで背負わない」が信頼関係の入口
        </h2>
        <p className="text-base mb-3">
          ケアマネージャーとの付き合い方に正解はありません。最初はぎこちなくても、少しずつ「困ったことを話せる相手」になっていけば十分です。今日から完璧にやろうとせず、できそうな一歩から試してみてください。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            '次回の訪問で、家庭の事情を1つだけ追加で共有してみる',
            '前回の打合せで決まったことをメモにまとめて見直してみる',
            '「迷っている」と素直に話してみる',
            '違和感が続くなら、地域包括支援センターに気軽に相談してみる',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          焦らなくても大丈夫。信頼関係はゆっくり育つものです。
        </p>
      </div>

      <CTABox />

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/long-distance-care', label: '親の遠距離介護の進め方｜帰省頻度・費用・見守りの整え方', icon: '✈️' },
          { href: '/care-level', label: '要介護度の違いと認定手続き｜申請から結果通知まで', icon: '📋' },
          { href: '/parents-support', label: '親のためにやるべきこと完全ガイド｜8つのテーマ', icon: '👪' },
          { href: '/care-resignation', label: '介護離職のリアル｜仕事を辞める前に知るべきこと', icon: '💼' },
          { href: '/care-cost-split', label: '介護費用の兄弟間分担｜揉めない話し合いの進め方', icon: '💰' },
          { href: '/care-timing', label: '施設入居を考えるべきタイミングと判断軸', icon: '⏰' },
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
          <li>・厚生労働省「介護保険制度について（被保険者・サービス利用の流れ）」</li>
          <li>・厚生労働省「居宅介護支援（ケアマネジメント）の概要」</li>
          <li>・各都道府県・市区町村「地域包括支援センター 業務案内」</li>
        </ul>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.7 }}>
          本ページは2025年基準の制度をもとに作成しています。介護保険制度・自治体の運用は改定や地域差があるため、実際の手続きや費用は必ずお住まいの市区町村窓口・地域包括支援センター・担当ケアマネージャーにご確認ください。本記事の情報は一般的な参考情報であり、個別の状況への助言を保証するものではありません。
        </p>
        <p className="text-xs text-gray-500 mt-2">
          本ページにはアフィリエイト広告（みんなの介護）を含みます。掲載は、選択肢を増やすための一つの入口としてご紹介しているものです。比較せずにそっと閉じていただいても大丈夫です。
        </p>
      </div>
    </>
  )
}
