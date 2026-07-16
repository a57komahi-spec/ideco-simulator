import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '老人ホーム入居後のお金の管理と成年後見',
  description: '老人ホーム入居後のお金の管理を、判断能力の状態別にやさしく整理しました。成年後見制度・任意後見・家族信託・日常生活自立支援事業の4つを一覧で比較し、毎月の費用の流れ、使える払い戻し制度、家族でお金の透明性を保つコツまで解説します。',
  alternates: {
    canonical: 'https://2ndhappiness.com/post-admission-money',
  },
  openGraph: {
    title: '老人ホーム入居後のお金の管理｜成年後見制度・財産管理のステップ',
    description: '老人ホーム入居後のお金の管理を、判断能力の状態別にやさしく整理しました。成年後見制度・任意後見・家族信託・日常生活自立支援事業の4つを一覧で比較し、毎月の費用の流れ、使える払い戻し制度、家族でお金の透明性を保つコツまで解説します。',
    url: 'https://2ndhappiness.com/post-admission-money',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

const summaryItems = [
  '入居して終わりではなく、<mark class="highlight">毎月の費用の支払い</mark>と<mark class="highlight">本人の財産管理</mark>は続いていきます',
  '判断能力の状態に応じて<mark class="highlight">成年後見・任意後見・家族信託・日常生活自立支援事業</mark>などの仕組みがあります',
  '認知症が進むと、本人名義の口座取引が<mark class="highlight">制限される場合</mark>があり、早めの備えが安心につながります',
  '<mark class="highlight">焦らなくて大丈夫</mark>。まずは「いま誰が・何を管理しているか」を家族で整理することが第一歩です',
]

const options = [
  {
    name: '日常生活自立支援事業',
    when: '判断能力が少し不安だが、契約内容は理解できる',
    who: '社会福祉協議会（社協）',
    role: '通帳の預かり・公共料金の支払いなど、日常のお金の手伝い',
    cost: '1回あたり実費（地域により異なる／生活保護世帯は無料の場合も）',
    color: '#E8F5E9', border: '#2E7D52', label: '#2E7D52',
  },
  {
    name: '法定後見（成年後見制度）',
    when: 'すでに判断能力が低下している',
    who: '家庭裁判所が選任（親族・専門職）',
    role: '財産管理と、生活・医療・介護に関する契約・手続き（身上保護）の代理',
    cost: '専門職の場合、報酬は家裁が決定（管理財産額に応じる／目安は月額数万円程度とも）',
    color: '#E3F2FD', border: '#1A5E9E', label: '#1A5E9E',
  },
  {
    name: '任意後見',
    when: 'いまは元気。将来に備えて自分で決めておきたい',
    who: '本人が選んだ人（公正証書で契約）',
    role: '契約で決めた範囲の財産管理・手続き（効力発生後）',
    cost: '契約時の公証人手数料＋効力発生後は監督人への報酬（契約で定めれば後見人への報酬も）',
    color: '#FFF8E1', border: '#FFC107', label: '#E65100',
  },
  {
    name: '家族信託（民事信託）',
    when: 'いまは元気。資産の管理を家族に託したい',
    who: '信頼できる家族（受託者）',
    role: '契約で定めた財産の管理・処分（身上監護は含まない）',
    cost: '契約設計・登記などの初期費用（専門家相談が一般的）',
    color: '#FCE4EC', border: '#C2185B', label: '#C2185B',
  },
]

const monthlyCosts = [
  { item: '居住費・管理費', note: '家賃にあたる部分。施設・部屋タイプで大きく異なります' },
  { item: '食費', note: '日数や提供方法によって変動します' },
  { item: '介護サービス費', note: '要介護度・自己負担割合（所得に応じて1〜3割）で変わります' },
  { item: '医療費・薬代', note: '通院・往診・処方薬など。月によって増減します' },
  { item: '日用品・おむつ代など', note: '施設で実費負担になることが多い項目です' },
  { item: 'その他（レクリエーション等）', note: '理美容・行事参加費などがかかる場合があります' },
]

const faqItems = [
  {
    q: '入居したら、お金の管理はもう必要ないのでは？',
    a: 'いいえ、入居後もお金の管理は続いていきます。老人ホームの費用は、入居一時金などの初期費用を払って終わりではなく、居住費・食費・介護サービス費・医療費・日用品費などが毎月かかり続けます。これらの支払い手続きや、本人の年金・預貯金の管理を「誰が、どのように行うか」を決めておくことが大切です。とくにご本人の判断能力が低下してくると、本人名義の口座からの引き出しなどが難しくなる場合があるため、早めに家族で整理しておくと安心につながります。',
  },
  {
    q: '老人ホーム入居後、成年後見制度はいつ・どこに申し込むのですか？',
    a: '法定後見の場合は、ご本人の判断能力が低下したあとに、ご本人の住所地を管轄する家庭裁判所へ申立てを行います。申立てができるのは、ご本人・配偶者・四親等内の親族などです。家庭裁判所が、本人の状態に応じて成年後見人等を選任し、親族のほか弁護士・司法書士・社会福祉士などの専門職が選ばれることもあります。手続きや必要書類は事案によって異なるため、まずはお住まいの地域包括支援センターや家庭裁判所、専門職団体の相談窓口に問い合わせてみるのがおすすめです。なお制度の詳細は法務省や最高裁判所の案内をご確認ください。',
  },
  {
    q: '任意後見と家族信託は、何が違うのですか？',
    a: 'どちらも「元気なうちに将来へ備える」仕組みですが、役割が異なります。任意後見は、将来判断能力が低下したときに備えて、自分で選んだ人と公正証書で契約しておく制度で、財産管理だけでなく生活や介護に関する手続き（身上監護）も任せられます。一方、家族信託（民事信託）は、財産の管理・処分を信頼できる家族に託す契約で、設計の自由度が高い反面、身上監護は含まれません。どちらが合うかは、ご家族の状況・資産の内容・目的によって異なります。費用や税務の扱いも関わるため、司法書士・弁護士などの専門家に相談して進めるのが一般的です。',
  },
  {
    q: '入居後の費用負担を軽くする制度はありますか？',
    a: '所得や状況に応じて、負担を抑えられる制度があります。たとえば、月々の介護保険サービスの自己負担が一定額を超えると、超えた分が払い戻される「高額介護サービス費」があります。また、医療と介護の自己負担を1年間（8月〜翌7月）で合算し、上限を超えた分が払い戻される「高額医療・高額介護合算療養費制度」もあります。さらに、おむつ代などが医療費控除の対象になる場合もあります（医師の証明など一定の要件が必要です）。利用できる制度は所得区分や年度によって異なるため、担当のケアマネージャーや市区町村の窓口で確認してみてください。',
  },
]

export default function PostAdmissionMoneyPage() {
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
      { '@type': 'ListItem', position: 2, name: '老人ホーム入居後のお金の管理', item: 'https://2ndhappiness.com/post-admission-money' },
    ],
  }

  return (
    <>
      <ArticleJsonLd
        path={'/post-admission-money'}
        title={'老人ホーム入居後のお金の管理｜成年後見制度・財産管理のステップ'}
        description={'老人ホーム入居後のお金の管理を、判断能力の状態別にやさしく整理しました。成年後見制度・任意後見・家族信託・日常生活自立支援事業の4つを一覧で比較し、毎月の費用の流れ、使える払い戻し制度、家族でお金の透明性を保つコツまで解説します。'}
        datePublished={'2026-06-25T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Breadcrumb items={[{ label: '老人ホーム入居後のお金の管理' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホーム入居後のお金の管理｜成年後見制度・財産管理のステップ
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年6月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">参考：法務省「成年後見制度・成年後見登記制度」、最高裁判所「後見ポータルサイト」、全国社会福祉協議会「日常生活自立支援事業」、厚生労働省「介護保険制度の概要」ほか公的資料（2025年時点）</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          「入居までは必死だったけれど、これから先のお金のことは、正直どうすればいいのか分からない」——
          そんな気持ちで、このページにたどり着いた方も多いのではないでしょうか。
        </p>
        <p className="text-base">
          施設が決まると、ひと安心すると同時に、<strong>「毎月の支払いは誰がする？」「本人の通帳はどう管理する？」</strong>といった、新しい悩みが見えてきます。
          この記事では、入居後のお金の管理について、判断能力の状態に合わせた選択肢を、順番にやさしく整理しました。
          全部を今日決める必要はありません。「まず全体像が分かった」と思えたら、それで十分な一歩です。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本記事は制度の一般的な情報をまとめたもので、法律・税務・財産管理の個別の判断を保証するものではありません。具体的なお手続きは、お住まいの市区町村・地域包括支援センターや、弁護士・司法書士などの専門家にご相談ください。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        入居して終わりじゃない｜老人ホーム入居後のお金の全体像
      </h2>
      <p className="text-base mb-4">
        老人ホーム選びというと、つい「費用の相場」や「入居一時金」に目が向きがちです。
        けれど実際には、<strong>入居したあとも、お金の管理はずっと続いていきます</strong>。
        ここでつまずく方が意外と多いのです。
      </p>
      <p className="text-base mb-4">
        入居後のお金には、大きく分けて2つの側面があります。ひとつは<strong>「毎月の費用を、誰が・どう支払うか」</strong>。
        もうひとつは<strong>「ご本人の年金や預貯金などの財産を、誰が・どう管理するか」</strong>です。
        ご本人がしっかりしているうちは、本人や同居家族が管理できますが、加齢や認知症などで判断が難しくなってくると、この2つが急に大きな課題になります。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base mb-2"><strong>入居後のお金で、家族がつまずきやすいポイント</strong></p>
        <p className="text-base mb-1">・毎月の費用の引き落とし口座を、誰の名義にしておくか決めていなかった</p>
        <p className="text-base mb-1">・本人の判断能力が下がり、本人名義の口座取引が制限される場合があると知らなかった</p>
        <p className="text-base mb-1">・きょうだいの誰が立て替え、誰が管理しているのかが曖昧で、あとで気まずくなった</p>
        <p className="text-base">・使える払い戻し制度や控除を知らず、本来より多く負担していた</p>
      </div>
      <p className="text-base mb-8">
        どれも、いまから整理しておけば慌てずにすむことばかりです。知ったいまが、ちょうどよいタイミングです。
        この記事を最後まで読む必要はありません。気になる章だけ拾い読みでも大丈夫。
        まずは「入居後にもお金の管理がある」と知っておくこと自体が、これからの安心につながります。
      </p>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        なぜ入居後に「お金の管理」が問題になるの？
      </h2>
      <p className="text-base mb-4">
        「本人の口座があるんだから、そこから払えばいいのでは？」——最初はそう思いますよね。
        ところが、ご本人の判断能力が低下してくると、その当たり前が難しくなることがあります。
      </p>
      <p className="text-base mb-4">
        金融機関は、口座の名義人本人の意思を確認できないと判断したとき、ご本人を保護するために、
        払い戻しや解約などの取引を<strong>制限する場合</strong>があります。
        いわば、大切なお金を勝手に動かされないよう、銀行がそっと鍵をかけるようなイメージです。
        家族であっても、本人に代わって自由に引き出せるわけではない、という点に戸惑う方は少なくありません。
      </p>
      <p className="text-base mb-4">
        この「制限」がかかると、施設の月額費用や医療費の支払いに困ってしまうことがあります。
        だからこそ、<strong>本人に代わってお金を管理する「正式な仕組み」</strong>を、状況に合わせて選んでおくことが大切になるのです。
      </p>
      <p className="text-sm text-gray-600 mb-4">
        ※近年は、本人の判断能力が低下したときに親族が手続きしやすいよう、金融機関ごとに代理人登録（代理人カードなど）の仕組みを設けている場合もあります。「もう打つ手がない」と思い込まず、まずは取引している金融機関に確認してみると、道が見つかることもあります。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base">
          💡 ここで大事なのは、<strong>「判断能力がどのくらい残っているか」で、選べる仕組みが変わる</strong>ということ。
          元気なうちにしか使えない仕組みもあれば、判断能力が低下したあとに使う仕組みもあります。
          次の章で、その違いを一覧で整理します。難しく感じたら、表だけ眺めてもらえれば十分です。
        </p>
      </div>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        成年後見・任意後見・家族信託｜判断能力に応じた4つの選択肢を比較
      </h2>
      <p className="text-base mb-4">
        本人に代わってお金を管理する仕組みには、いくつかの種類があります。
        ここでは代表的な4つを、「いつ使えるか」「誰が管理するか」で整理しました。
        <strong>結論を先にいうと、元気なうちなら選択肢が広く、判断能力が大きく低下した後は成年後見が中心になります（軽度であれば日常生活自立支援事業を使えることもあります）。すでに判断能力が下がっていても、成年後見という確かな仕組みがあります。状況に合った道は必ずあるので、安心してください。</strong>
      </p>
      <div className="space-y-4 mb-6">
        {options.map((o) => (
          <div key={o.name} className="rounded-xl p-5" style={{ backgroundColor: o.color, border: `2px solid ${o.border}` }}>
            <p className="font-bold text-lg mb-2" style={{ color: o.label }}>{o.name}</p>
            <div className="rounded-lg px-4 py-3" style={{ backgroundColor: 'rgba(255,255,255,0.75)' }}>
              <p className="text-sm mb-1"><strong>こんなとき：</strong>{o.when}</p>
              <p className="text-sm mb-1"><strong>誰が管理：</strong>{o.who}</p>
              <p className="text-sm mb-1"><strong>できること：</strong>{o.role}</p>
              <p className="text-sm"><strong>費用の目安：</strong>{o.cost}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-base mb-4">
        ここで一度、用語をやさしく整理しておきます。
        <strong>身上監護（しんじょうかんご。現在は「身上保護」とも呼ばれます）</strong>とは、生活・医療・介護に関する契約や手続き（入院や施設入所の契約など）を本人に代わって行うこと。介護そのものを後見人が行うわけではありません。
        <strong>財産管理</strong>は、預貯金や不動産などの管理です。
        この2つを両方カバーするのが成年後見で、家族信託は財産管理のみ、という違いがあります。
      </p>
      <p className="text-base mb-8">
        「どれを選べばいいか分からない」と感じても、焦らなくて大丈夫です。
        多くの場合、まずは地域包括支援センター（高齢者の介護・福祉の何でも相談窓口）に相談するところから始まります。
        次の章では、入居後にいちばん関わることの多い「成年後見制度」を、もう少しくわしく見ていきます。
      </p>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        成年後見制度をくわしく｜法定後見の3つのタイプ
      </h2>
      <p className="text-base mb-4">
        成年後見制度は、判断能力が十分でない方の財産や権利を守るための仕組みで、大きく
        <strong>「法定後見（ほうていこうけん）」</strong>と<strong>「任意後見（にんいこうけん）」</strong>の2つに分かれます。
        このうち、すでに判断能力が低下した後に使うのが法定後見です。
      </p>
      <p className="text-base mb-4">
        法定後見は、ご本人の判断能力の程度に応じて、次の3つのタイプに分かれます。
        ここは少し専門的なので、ざっくり「重さで3段階ある」とだけ押さえてもらえれば大丈夫です。
      </p>
      <div className="space-y-3 mb-6">
        {[
          { t: '後見', d: '判断能力が欠けているのが通常の状態の方が対象。成年後見人が財産に関する法律行為を幅広く代理し、本人に不利な契約を取り消すこともできます。' },
          { t: '保佐', d: '判断能力が著しく不十分な方が対象。借入や不動産の売却など重要な財産行為に保佐人の同意が必要で、同意なく行った行為は取り消せます。' },
          { t: '補助', d: '判断能力が不十分な方が対象。本人の同意のもと、家庭裁判所が特定の行為について補助人に同意権や代理権を与えます。' },
        ].map((x) => (
          <div key={x.t} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #1A5E9E' }}>
            <p className="font-bold text-base mb-1" style={{ color: '#1A5E9E' }}>{x.t}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{x.d}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-4">
        手続きは、ご本人の住所地を管轄する<strong>家庭裁判所への申立て</strong>から始まります。
        申立てができるのは、ご本人・配偶者・四親等内の親族などです。
        後見人は家庭裁判所が選任し、親族のほか、弁護士・司法書士・社会福祉士といった専門職が選ばれることもあります。
      </p>
      <p className="text-base mb-4">
        知っておきたいのが<strong>費用と継続性</strong>です。専門職が後見人になる場合、報酬は家庭裁判所が事案ごとに決め、管理する財産の額などに応じて変わります（目安として月額数万円程度とされることがあります／2025年時点）。
        また、いったん始まると、原則として本人の判断能力が回復するまで続く仕組みです。
        「思っていたより負担や手続きが続く」と感じる方もいるため、メリットだけでなくこうした面も理解したうえで検討すると安心です。
        これは「きちんと本人を守り続ける仕組み」だからこその継続性でもあります。不安な点は、申立ての前に専門家へ質問しておくと、納得して進められます。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base mb-2"><strong>📖 私たちのケースでは（編集部・架空の体験談）</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          父が施設に入って半年ほど経った頃、認知症が進み、銀行で「ご本人の確認が取れないので」と言われて費用の引き出しに困りました。
          慌てて調べて、地域包括支援センターに相談。司法書士さんを紹介してもらい、成年後見の申立てに進みました。
          正直、手続きは思ったより時間がかかりましたが、「正式に管理できる人が決まった」ことで、きょうだい間のもやもやも減った気がします。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記は制度の流れを分かりやすく伝えるための編集部による架空のエピソードです。個人の感想であり、手続きの結果や期間を保証するものではありません。</p>
      </div>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        元気なうちにできる備え｜任意後見・家族信託・社協の支援
      </h2>
      <p className="text-base mb-4">
        「まだ親は元気だけれど、いつかのために考えておきたい」——そんな段階の方には、選択肢がぐっと広がります。
        判断能力が十分なうちにしか始められない仕組みがあるからです。ここでは3つを紹介します。
      </p>
      <div className="space-y-3 mb-6">
        <div className="rounded-lg p-4 bg-white border border-gray-200" style={{ borderLeft: '4px solid #E65100' }}>
          <p className="font-bold text-base mb-1">📝 任意後見</p>
          <p className="text-base">将来、判断能力が低下したときに備えて、<strong>自分で選んだ人</strong>と、必ず公正証書（公証役場で作る正式な書類）で契約しておく仕組みです。実際に効力が生じるのは、判断能力が低下し、家庭裁判所が任意後見監督人（後見人を見守る人）を選んだとき。財産管理に加え、生活や介護の手続き（身上保護）も任せられるのが特徴です。</p>
        </div>
        <div className="rounded-lg p-4 bg-white border border-gray-200" style={{ borderLeft: '4px solid #C2185B' }}>
          <p className="font-bold text-base mb-1">🏠 家族信託（民事信託）</p>
          <p className="text-base">財産の管理や処分を、<strong>信頼できる家族</strong>に託す契約です。たとえば自宅や預貯金の管理を子に任せておけば、本人の判断能力が低下しても資産が動かせなくなる事態を避けやすくなります。設計の自由度が高い一方、身上監護は含まれず、費用や税務の検討も必要なため、司法書士・弁護士などへの相談が一般的です。</p>
        </div>
        <div className="rounded-lg p-4 bg-white border border-gray-200" style={{ borderLeft: '4px solid #2E7D52' }}>
          <p className="font-bold text-base mb-1">🤝 日常生活自立支援事業</p>
          <p className="text-base">「後見までは必要ないけれど、日常のお金の管理が少し不安」という方を支える、<strong>社会福祉協議会（社協）</strong>の事業です。福祉サービスの利用援助や、通帳の預かり・公共料金の支払いといった日常的なお金の手伝いを受けられます。契約内容を理解できる程度の判断能力があることが前提で、利用料は地域によって異なります。</p>
        </div>
      </div>
      <p className="text-base mb-8">
        どれも一長一短があり、「これを選べば間違いない」という唯一の正解はありません。
        ご家族の状況・資産・本人の希望によって、合うものは変わってきます。
        相続や自宅の整理とあわせて考えたい方は、
        <Link href="/prepare/inheritance" style={{ color: '#1A5E9E', fontWeight: 700 }}>「相続の準備」</Link>
        や
        <Link href="/ending-activity" style={{ color: '#1A5E9E', fontWeight: 700 }}>「終活ステップガイド」</Link>
        もあわせてどうぞ。
      </p>

      {/* H2-6 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        入居後の「毎月のお金の流れ」を整理する
      </h2>
      <p className="text-base mb-4">
        管理の仕組みと並んで大切なのが、<strong>「毎月、何にいくらかかるのか」を把握しておくこと</strong>です。
        全体像が見えると、家計の見通しが立ち、不安がぐっと小さくなります。
        入居後にかかる主な費用は、おおむね次のような項目です（施設・地域・要介護度によって大きく異なります。あくまで目安です）。
      </p>
      <div className="rounded-xl overflow-x-auto mb-6" style={{ border: '2px solid #2E7D52' }}>
        <table className="w-full border-collapse text-base">
          <thead>
            <tr style={{ background: '#E8F5E9' }}>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>費用項目</th>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>ポイント</th>
            </tr>
          </thead>
          <tbody>
            {monthlyCosts.map((c, i) => (
              <tr key={c.item} style={{ background: i % 2 === 0 ? '#fff' : '#F9FBF9', borderTop: '1px solid #e5e7eb' }}>
                <td className="px-4 py-3 font-bold" style={{ color: '#2E7D52' }}>{c.item}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{c.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-base mb-4">
        ここで知っておきたいのが、<strong>負担を抑えられる制度</strong>です。
        月々の介護保険サービスの自己負担（1割が基本で、一定以上の所得がある方は2割、現役並み所得の方は3割）が一定額を超えると、超えた分が払い戻される
        <strong>「高額介護サービス費」</strong>があります。
        さらに、同じ世帯で同じ公的医療保険に入っている方の医療と介護の自己負担を、1年間（毎年8月〜翌7月）で合算し、上限を超えた分が戻る
        <strong>「高額医療・高額介護合算療養費制度」</strong>も。おむつ代などが医療費控除の対象になる場合もあります（医師の証明など一定の要件が必要です）。
      </p>
      <p className="text-base mb-4">
        ここは制度名が続いて少し難しいので、「払い戻しや控除の仕組みがある」とだけ覚えて、あとは読み飛ばしてもOKです。
        実際に使えるかどうかは所得区分や年度で変わるため、<strong>担当のケアマネージャーや市区町村の窓口で確認するのがいちばん確実</strong>です。
      </p>
      <p className="text-base mb-8">
        毎月の費用と、介護保険の基本的な使い方をあわせて知りたい方は、
        <Link href="/insurance-usage-guide" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護保険の使い方完全ガイド」</Link>
        や
        <Link href="/cost" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホームの費用相場」</Link>
        も参考になります。
      </p>

      {/* H2-7 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        家族で「お金の透明性」を保つコツ｜入居後のトラブル予防
      </h2>
      <p className="text-base mb-4">
        入居後のお金で意外と多いのが、<strong>家族・きょうだい間の「お金のもやもや」</strong>です。
        「誰がどれだけ立て替えたか分からない」「管理している人だけが負担を感じている」——
        こうしたすれ違いは、悪気がなくても起きてしまうもの。お金の話は、仲のよい家族ほど切り出しにくいものですよね。
      </p>
      <p className="text-base mb-4">
        大切なのは、特別なことではなく、<strong>「見えるようにしておく」</strong>という小さな工夫です。
        完璧な帳簿をつける必要はありません。次のような習慣が、後々の安心につながります。
      </p>
      <div className="space-y-3 mb-6">
        {[
          { q: '支払い用の口座を1つに決めておく', a: '施設費用・医療費などの引き落としを1つの口座にまとめると、お金の流れが追いやすくなります。' },
          { q: 'レシート・領収書をざっくり残す', a: '立て替えた費用は、ノートやスマホの写真でゆるく記録を。きちんとした帳簿でなくて大丈夫です。' },
          { q: '年に数回、家族で「お金の共有」をする', a: '帰省やオンラインの機会に「今こうなっているよ」と共有するだけで、不公平感がたまりにくくなります。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1">✅ {item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        お金の分担や話し合いの進め方そのものに悩んでいる方は、
        <Link href="/sibling-care-discussion" style={{ color: '#1A5E9E', fontWeight: 700 }}>「兄弟姉妹で介護を分担する話し合い方」</Link>
        や
        <Link href="/care-cost-split" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護費用の兄弟間分担ガイド」</Link>
        が役に立ちます。管理する人の心の負担が大きいときは、
        <Link href="/caregiver-mental-care" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護する家族のメンタルケア」</Link>
        ものぞいてみてください。
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
          まとめ：入居後のお金の管理は「いま誰が・何を」から
        </h2>
        <p className="text-base mb-3">
          老人ホーム入居後のお金の管理は、毎月の費用の支払いと、本人の財産管理の2本柱です。
          判断能力の状態によって、成年後見・任意後見・家族信託・日常生活自立支援事業など、使える仕組みが変わります。
          全部を一度に決めなくて大丈夫。まずは「いま誰が、何を管理しているか」を、家族で確かめることから始めましょう。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            '施設費用の引き落とし口座と、その管理者を確認しておく',
            '本人の判断能力に不安が出てきたら、地域包括支援センターに相談する',
            '高額介護サービス費などの払い戻し制度を、ケアマネージャーや市区町村窓口で確認する',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          ここまで読んでくださったこと自体が、ご本人とご家族の暮らしを守るための、確かな一歩です。焦らず、できることからで大丈夫です。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/care-medical-deduction', label: '介護の医療費控除｜対象になる費用と申告のしかた', icon: '🧾' },
          { href: '/insurance-usage-guide', label: '介護保険の使い方完全ガイド（申請から給付まで）', icon: '📝' },
          { href: '/sibling-care-discussion', label: '兄弟姉妹で介護を分担する話し合い方', icon: '🤝' },
          { href: '/care-cost-split', label: '介護費用の兄弟間分担ガイド', icon: '💰' },
          { href: '/prepare/inheritance', label: '相続の準備｜入居前にしておきたいこと', icon: '📋' },
          { href: '/cost', label: '老人ホームの費用はいくら？月額・初期費用の相場', icon: '💴' },
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
        施設や費用の情報を集めることは、ご本人を急かすことでも、ご家族が頑張れていないことでもありません。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        ※本ページにはアフィリエイト広告を含みます。費用・サービス内容・対応エリアなどを比較し、ご家族の状況に合った選択にお役立てください。
      </p>

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は、老人ホーム入居後のお金の管理に関する一般的な情報をまとめたものです。法律・税務・財産管理についての個別の助言や、特定の結果を保証するものではありません。
          成年後見制度・任意後見・家族信託・日常生活自立支援事業などの内容・費用・利用条件は、制度改正やお住まいの市区町村、個別の事情によって異なる場合があります。
          具体的なお手続きや判断にあたっては、家庭裁判所・お住まいの市区町村・地域包括支援センター・社会福祉協議会や、弁護士・司法書士・税理士などの専門家にご相談ください。最終的なご判断は、ご本人とご家族の状況に合わせて行ってください。
        </p>
      </div>
    </>
  )
}
