import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '老人ホームでの看取りと最期を穏やかに過ごす準備',
  description: '老人ホームでの看取りについて、ターミナルケアの意味から、施設区分ごとの対応の違い、入居から最期までの流れ、人生会議（ACP）の始め方、費用と使える制度まで、迷っているご家族にやさしく整理しました。焦らず読める内容です。',
  alternates: {
    canonical: 'https://2ndhappiness.com/end-of-life-at-home',
  },
  openGraph: {
    title: '老人ホームでの看取り｜最期を穏やかに過ごすための準備',
    description: '老人ホームでの看取りについて、ターミナルケアの意味から、施設区分ごとの対応の違い、入居から最期までの流れ、人生会議（ACP）の始め方、費用と使える制度まで、迷っているご家族にやさしく整理しました。',
    url: 'https://2ndhappiness.com/end-of-life-at-home',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

const summaryItems = [
  '「看取り」とは、回復をめざす治療ではなく、<mark class="highlight">残された時間を穏やかに過ごせるよう支える</mark>ケアのことです',
  '看取りに対応できるかは<mark class="highlight">施設の区分や体制によって異なります</mark>。入居前・入居後に確認しておくと安心です',
  '元気なうちから本人・家族・専門職で話し合う<mark class="highlight">人生会議（ACP）</mark>が、後悔を減らす大きな助けになります',
  '<mark class="highlight">いま決めきらなくて大丈夫</mark>。まずは「どう過ごしてほしいか」を家族で話してみることが第一歩です',
]

const facilities = [
  {
    name: '特別養護老人ホーム（特養）',
    base: '老人福祉法・介護保険法',
    point: '看取りに取り組む施設が比較的多く、体制を整えているところもあります。新規入所は原則として要介護3以上が対象ですが、やむを得ない事情がある場合は要介護1・2でも特例的に入所できることがあります。',
    color: '#E3F2FD', border: '#1A5E9E', label: '#1A5E9E',
  },
  {
    name: '介護医療院',
    base: '介護保険法',
    point: '医療と介護を一体的に提供する施設で、医療的なケアが必要な方の最期にも比較的対応しやすい体制があります。',
    color: '#E8F5E9', border: '#2E7D52', label: '#2E7D52',
  },
  {
    name: '介護付き有料老人ホーム',
    base: '老人福祉法（介護サービスは介護保険法の特定施設入居者生活介護）',
    point: '看取りに対応する施設が増えていますが、対応範囲は施設ごとに差があります。契約前の確認が大切です。',
    color: '#FFF8E1', border: '#FFC107', label: '#E65100',
  },
  {
    name: 'グループホーム（認知症対応型共同生活介護）',
    base: '介護保険法',
    point: '認知症の診断があり、要支援2または要介護の方が対象の、少人数で暮らす住まいです。住み慣れた環境での看取りに取り組むところもありますが、体制は施設により異なります。',
    color: '#FCE4EC', border: '#C2185B', label: '#C2185B',
  },
]

const steps = [
  { t: '① 入居時・入居後の意思確認', d: '入居の段階や状態の変化に応じて、「どんな最期を望むか」を本人・家族・施設・医療者で話し合います。一度で決めず、折にふれ見直していくのが一般的です。' },
  { t: '② 状態が変化したときの相談', d: '回復をめざす治療が難しくなってきたとき、施設や連携する医療機関から状態の説明があり、今後のケア方針を改めて話し合います。' },
  { t: '③ 看取り期のケア', d: '痛みやつらさをやわらげ、穏やかに過ごせるよう支えるケアが中心になります。家族が付き添いやすいよう配慮してくれる施設もあります。' },
  { t: '④ お別れと、その後', d: '最期を迎えたあとの流れ（医師の確認、ご家族への連絡、退去の手続きなど）について、施設が案内してくれます。' },
]

const faqItems = [
  {
    q: '老人ホームでも、病院のように最期まで看てもらえるのですか？',
    a: 'はい、看取りに対応している施設であれば、住み慣れた施設で最期まで過ごすという選択ができます。ただし、すべての施設が同じように対応できるわけではありません。看取りには、施設の職員体制や、夜間も含めた医療機関との連携が必要になるため、対応の範囲は施設の区分や体制によって異なります。特別養護老人ホームや介護医療院では看取りに取り組むところが多く、介護付き有料老人ホームやグループホームでも対応が広がっています。ご本人の状態によっては医療機関での対応が望ましい場合もあるため、入居前や入居後の早めの段階で、「看取りまで対応してもらえるか」「どこまで対応できるか」を施設に確認しておくと安心です。',
  },
  {
    q: 'ターミナルケアと看取りは、何が違うのですか？',
    a: 'ほぼ同じ意味で使われることも多いのですが、厳密にはニュアンスが少し異なります。「ターミナルケア」は、人生の最終段階に行うケア全般を指し、痛みをやわらげる医療的なケアを含むこともあります。一方「看取り（看取り介護）」は、介護施設などで、最期の時期を穏やかに過ごせるよう日常生活を支えるケアを指して使われることが多い言葉です。どちらも「回復をめざす治療」ではなく、「残された時間に寄り添う」という方向性は同じです。施設で「看取りに対応しています」という場合、医療機関と連携しながら、その施設で最期まで過ごせるよう支える体制があることを意味します。言葉の細かな違いよりも、「その施設でどこまで対応してもらえるか」を具体的に確認することが大切です。',
  },
  {
    q: '人生会議（ACP）は、いつ始めればいいのでしょうか？',
    a: '「まだ元気だから早い」と感じるくらいの段階が、実はちょうどよいタイミングです。人生会議（アドバンス・ケア・プランニング、ACP）は、もしものときにどんな医療やケアを望むかを、本人を中心に家族や医療・介護の専門職と繰り返し話し合っておく取り組みです。判断がはっきりしているうちに、本人の希望を聞いておけることが大きな意味を持ちます。一度で結論を出す必要はなく、体調や気持ちの変化に合わせて何度でも見直してかまいません。重い話だからこそ、お茶でも飲みながら「もしものときはどうしたい？」と、軽く切り出すところから始める方が多いようです。厚生労働省も「人生の最終段階における医療・ケアの決定プロセスに関するガイドライン」の中で、こうした話し合いの大切さを示しています。',
  },
  {
    q: '看取りには、追加の費用がかかりますか？',
    a: '施設や状況によって異なりますが、看取り期には通常の月額費用に加えて、看取りに関する介護報酬上の加算や、医療費・薬代などがかかる場合があります。加算は施設の区分によって名称・要件が異なり（特養の看取り介護加算、介護医療院のターミナルケア加算など）、施設が一定の体制を整え、本人・家族の同意のうえでケアを行ったときに算定されます。自己負担は、介護サービス費については介護保険の所得区分に応じて1割が基本（一定以上の所得がある方は2割、現役並み所得の方は3割）、医療費については加入している公的医療保険（後期高齢者医療制度など）の区分に応じた割合で、介護と医療は別の仕組みです。金額は施設の区分・地域・年度の介護報酬改定によって変わるため、あくまで目安です。実際にいくらかかるかは、施設や担当のケアマネージャー、市区町村の窓口で確認するのが確実です。なお、負担を軽くする高額療養費制度・高額介護サービス費・高額医療高額介護合算療養費制度（いずれも上限額は所得区分別）もあわせて確認しておくと安心です。',
  },
  {
    q: '「施設で看取る」と決めるのが、本当に正しいのか不安です。',
    a: 'その不安を感じること自体が、ご本人を大切に思っている証拠です。施設で看取るか、最期は医療機関でと考えるか、これに唯一の正解はありません。ご本人の希望、医療的なケアの必要性、ご家族が付き添える状況などによって、ふさわしい形は変わってきます。大切なのは、完璧な選択をすることよりも、「本人がどう過ごしたいか」を中心に、家族と専門職で話し合いながら決めていくことです。途中で気持ちが変わってもかまいませんし、決めたことを後から見直してもよいのです。迷いながら選んだ道は、それ自体がご家族の誠実な答えです。',
  },
]

export default function EndOfLifeAtHomePage() {
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
      { '@type': 'ListItem', position: 2, name: '老人ホームでの看取り', item: 'https://2ndhappiness.com/end-of-life-at-home' },
    ],
  }

  return (
    <>
      <ArticleJsonLd
        path={'/end-of-life-at-home'}
        title={'老人ホームでの看取り｜最期を穏やかに過ごすための準備'}
        description={'老人ホームでの看取りについて、ターミナルケアの意味から、施設区分ごとの対応の違い、入居から最期までの流れ、人生会議（ACP）の始め方、費用と使える制度まで、迷っているご家族にやさしく整理しました。'}
        datePublished={'2026-06-27T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Breadcrumb items={[{ label: '老人ホームでの看取り' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホームでの看取り｜最期を穏やかに過ごすための準備
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年6月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">参考：厚生労働省「人生の最終段階における医療・ケアの決定プロセスに関するガイドライン」「介護報酬の概要」、e-ヘルスネット（厚生労働省）ほか公的資料（2025年時点）</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          「最期のことを考えるなんて、まだ早いのかもしれない」——そう思いながらも、頭のどこかで気になって、このページを開いた方も多いのではないでしょうか。
          もう時間が限られていると感じている方も、まだ先の話だと思っている方も、どちらもこのページの読者です。どうぞ、ご自身のペースで読んでください。
        </p>
        <p className="text-base">
          親や配偶者の「最期」を考えるのは、とてもつらく、後回しにしたくなるテーマです。でも、少しだけ知っておくことで、いざというときに慌てず、ご本人の望む形に近づけることがあります。
          この記事では、老人ホームでの看取りについて、<strong>言葉の意味から、施設ごとの違い、話し合いの始め方まで</strong>を、順番にやさしく整理しました。
          全部を今日読み切る必要はありません。気になるところだけ、そっと拾い読みしてください。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本記事は看取りや終末期のケアに関する一般的な情報をまとめたもので、医療行為の効果や、特定の施設・方法を保証・推奨するものではありません。具体的なご判断は、主治医・施設・地域包括支援センターなどの専門職にご相談ください。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        老人ホームでの「看取り」とは？まず言葉を整理する
      </h2>
      <p className="text-base mb-4">
        「看取り（みとり）」という言葉は知っていても、具体的に何を指すのかは、意外とはっきりしないものです。
        ここではまず、言葉の意味をやさしく整理します。
      </p>
      <p className="text-base mb-4">
        看取りとは、<strong>回復をめざす治療を続けるのではなく、人生の最終段階を迎えた方が、残された時間をできるだけ穏やかに過ごせるよう支えるケア</strong>のことです。
        医療や介護の場面では<strong>ターミナルケア（人生の最終段階のケア。看取り対応とも呼ばれます）</strong>という言葉も使われます。
        痛みやつらさをやわらげ、その人らしい時間を大切にする——いわば、ゴールに向かって走ることより、最後の道のりをそっと寄り添って歩くようなケア、とイメージするとわかりやすいかもしれません。
      </p>
      <p className="text-base mb-4">
        かつては「最期は病院で」が当たり前のように思われていました。けれど近年は、<strong>住み慣れた施設で、なじみの職員に見守られながら過ごす</strong>という選択肢も広がっています。
        どちらが良い・悪いということではなく、ご本人やご家族の希望、医療的なケアの必要性によって、ふさわしい形は変わります。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base">
          💡 ここで覚えておきたいのは、<strong>「看取りに対応できるかどうかは、施設によって違う」</strong>ということだけで十分です。
          細かい制度の話はこの先で少しずつ出てきますが、難しいと感じたら読み飛ばしてもらって大丈夫。まずは全体像をつかむことを大切にしてください。
        </p>
      </div>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        看取りの準備はいつから？早めに考えておきたい理由
      </h2>
      <p className="text-base mb-4">
        「まだ元気なのに、最期の話なんて」——そう感じるのは自然なことです。でも、準備を考えるのに早すぎるということはありません。
        むしろ、落ち着いて話せる時期だからこそ、できることがあります。
      </p>
      <p className="text-base mb-4">
        状態が急に変化してから「どうしますか」と問われると、ご家族は限られた時間の中で、重い決断を迫られることになりがちです。
        あらかじめ<strong>「本人がどんなふうに過ごしたいか」</strong>を少しでも聞けていれば、いざというときに「これでよかったのかな」という迷いを、やわらげることができます。
      </p>
      <p className="text-base mb-4">
        とはいえ、<strong>今日すべてを決める必要はありません</strong>。看取りの準備は、一度の話し合いで完結するものではなく、体調や気持ちの変化に合わせて、少しずつ重ねていくものです。
        「縁起でもない」と感じる日もあれば、自然に話せる日もあります。焦らず、ご家族のペースで大丈夫です。
      </p>
      <p className="text-base mb-8">
        この記事の役割は、決断を急かすことではありません。
        「いざというときに、こういう選択肢や流れがあるんだ」と知っておくことで、心の準備の引き出しをひとつ増やしておく——それくらいの気持ちで読み進めてください。
      </p>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        施設区分でどう違う？看取りに対応する高齢者向け住まい
      </h2>
      <p className="text-base mb-4">
        「老人ホーム」とひとくくりにされがちですが、正式にはいくつかの区分（種類）に分かれていて、<strong>看取りへの対応も施設によって差があります</strong>。
        結論を先にいうと、<strong>看取りに取り組む施設は特別養護老人ホームや介護医療院に比較的多い傾向があります</strong>が、対応できるかどうかは区分そのものよりも個々の施設の体制によります。介護付き有料老人ホームやグループホームでも対応は広がっています。代表的なものを整理します。
      </p>
      <div className="space-y-4 mb-6">
        {facilities.map((f) => (
          <div key={f.name} className="rounded-xl p-5" style={{ backgroundColor: f.color, border: `2px solid ${f.border}` }}>
            <p className="font-bold text-lg mb-2" style={{ color: f.label }}>{f.name}</p>
            <div className="rounded-lg px-4 py-3" style={{ backgroundColor: 'rgba(255,255,255,0.75)' }}>
              <p className="text-sm mb-1"><strong>根拠となる法律：</strong>{f.base}</p>
              <p className="text-sm"><strong>看取りの特徴：</strong>{f.point}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-600 mb-4">
        ※なお、介護老人保健施設（老健）は在宅復帰をめざす施設のため、看取りには原則として対応しないのが一般的です。サービス付き高齢者向け住宅（サ高住）や住宅型有料老人ホームは、外部の訪問介護・訪問看護などをどう組み合わせるかによって対応が変わります。
      </p>
      <p className="text-base mb-4">
        ここで注意したいのは、<strong>「同じ区分でも、施設ごとに体制は違う」</strong>ということです。
        看取りには、職員の人員体制や、夜間も含めた医療機関との連携が欠かせません。同じ「介護付き有料老人ホーム」でも、看取りまで手厚く対応できるところもあれば、状態によっては医療機関への移行をお願いするところもあります。
      </p>
      <p className="text-base mb-8">
        だからこそ、入居前の見学や面談、あるいは入居後の早めの段階で、<strong>「看取りまで対応してもらえますか」「どんな状態まで対応できますか」</strong>と、遠慮なく聞いておくことが大切です。
        施設の種類そのものについてもっと知りたい方は、
        <Link href="/types" style={{ color: '#1A5E9E', fontWeight: 700 }}>「施設の種類」</Link>
        や
        <Link href="/dementia-facility" style={{ color: '#1A5E9E', fontWeight: 700 }}>「認知症対応施設の選び方」</Link>
        もあわせてどうぞ。
      </p>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        老人ホームでの看取りの流れ｜入居から最期まで
      </h2>
      <p className="text-base mb-4">
        「実際に、どんなふうに進んでいくのだろう」——先が見えないと、不安はふくらみます。
        ここでは、施設での看取りのおおまかな流れを、4つの段階に分けて整理します。実際の進み方は、ご本人の状態や施設によって変わりますが、全体像をつかむ手がかりにしてください。
      </p>
      <div className="space-y-3 mb-6">
        {steps.map((s) => (
          <div key={s.t} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>{s.t}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{s.d}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-4">
        この流れの中で何度も出てくるのが、<strong>「話し合い」</strong>です。
        看取りは、ある日突然始まるものではなく、状態の変化に合わせて、本人・家族・施設・医療者が少しずつ方針をすり合わせていくプロセスです。
        分からないことや不安なことは、その都度、施設の職員や担当のケアマネージャー（介護の計画を立て、調整してくれる専門職）に伝えて大丈夫です。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base mb-2"><strong>📖 私たちのケースでは（編集部・架空の体験談）</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          母が特養に入って数年、だんだん食事がとれなくなってきた頃、施設から「今後のことを一度お話ししましょう」と声をかけてもらいました。
          正直、その場では涙が出て、うまく話せませんでした。でも、職員さんが「今すぐ決めなくていいですよ」と言ってくれて、何度かに分けて気持ちを整理できました。
          最期は、母の好きだった音楽を流しながら、家族で見送ることができました。後悔がないとは言えませんが、「母の希望に少しは近づけたかな」と、今は思えています。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記は看取りの流れを分かりやすく伝えるための編集部による架空のエピソードです。個人の感想であり、ケアの結果や経過を保証するものではありません。</p>
      </div>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        本人と家族で話しておきたいこと｜人生会議（ACP）のはじめ方
      </h2>
      <p className="text-base mb-4">
        看取りの後悔を減らすうえで、いちばんの助けになるのが<strong>「人生会議」</strong>です。
        聞き慣れない言葉かもしれませんが、難しく考えなくて大丈夫です。
      </p>
      <p className="text-base mb-4">
        人生会議とは、<strong>アドバンス・ケア・プランニング（ACP）</strong>とも呼ばれ、もしものときにどんな医療やケアを望むかを、ご本人を中心に、家族や医療・介護の専門職と繰り返し話し合っておく取り組みのことです。
        厚生労働省も、その大切さを呼びかけています。
        いわば、家族みんなで同じ地図を持っておくようなもの——いざというとき、誰かひとりが重い判断を背負わずにすむための備えです。
      </p>
      <p className="text-base mb-4">
        とはいえ、改まって「最期の話をしよう」と切り出すのは、なかなか勇気がいります。
        うまくいかなくても大丈夫。次のような、軽い入り口から始める方が多いようです。
      </p>
      <div className="space-y-3 mb-6">
        {[
          { q: 'テレビや新聞の話題から、そっと聞いてみる', a: '「この前ニュースでやってたけど、お父さんはどう思う？」と、自分たちの話にする前に、世間話として触れてみる方法です。' },
          { q: '「どこで過ごしたいか」だけ聞いてみる', a: '医療の細かい希望まで一度に聞かなくて大丈夫。「最期はどんなところで過ごせたら安心？」くらいの問いから始めても十分です。' },
          { q: '専門職に間に入ってもらう', a: '家族だけでは話しにくいときは、主治医やケアマネージャー、施設の相談員に同席してもらうと、落ち着いて話せることがあります。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #1A5E9E' }}>
            <p className="font-bold text-base mb-1">💬 {item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        一度で結論を出す必要はなく、気持ちが変わったら何度でも見直してかまいません。
        認知症が進む前に少しでも本人の思いを聞いておきたい方は、
        <Link href="/dementia-care-basics" style={{ color: '#1A5E9E', fontWeight: 700 }}>「認知症ケアの基本」</Link>
        も参考になります。早めの準備全般については
        <Link href="/ending-activity" style={{ color: '#1A5E9E', fontWeight: 700 }}>「終活ステップガイド」</Link>
        もあわせてどうぞ。
      </p>

      {/* H2-6 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        看取りにかかる費用と、使える制度を知っておく
      </h2>
      <p className="text-base mb-4">
        心の準備とあわせて、気になるのが<strong>お金のこと</strong>です。
        ここは制度の話が少し続くので、難しければ「負担を軽くする仕組みがある」とだけ覚えて、読み飛ばしてもOKです。
      </p>
      <p className="text-base mb-4">
        ざっくり言うと、看取り期は<strong>毎月の費用に「最期を支えるケアの分」が少し上乗せされる</strong>、というイメージです。
        具体的には、通常の月額費用（居住費・食費・介護サービス費など）に加えて、<strong>看取りに関する介護報酬上の加算</strong>や、医療費・薬代がかかる場合があります。
        この加算は、施設が一定の体制を整え、ご本人・ご家族の同意のうえで看取りのケアを行ったときに算定されるもので、<strong>施設の区分によって名称や要件が異なります</strong>（たとえば特養の「看取り介護加算」、介護医療院の「ターミナルケア加算」など）。
      </p>
      <p className="text-base mb-4">
        費用には、性質の異なる2つの負担が含まれる点に注意が必要です。
        ひとつは<strong>介護サービス費（加算を含む）</strong>で、自己負担は介護保険の所得区分に応じて1割が基本（一定以上の所得がある方は2割、現役並み所得の方は3割）です。
        もうひとつは<strong>医療費・薬代</strong>で、こちらは後期高齢者医療制度など、加入している公的医療保険の区分に応じた負担割合になります。介護と医療は別の仕組みなので、「すべて1割」とは限りません。
        金額は施設の区分・地域・年度ごとの介護報酬改定によって変わるため、具体的な数字はあくまで目安です。正確な費用は、<strong>施設や担当のケアマネージャー、市区町村の窓口</strong>で確認するのがいちばん確実です。
      </p>
      <p className="text-base mb-8">
        また、負担が重くなったときに備えて、<strong>医療費の自己負担に上限を設ける高額療養費制度</strong>や、<strong>介護保険の自己負担を払い戻す高額介護サービス費</strong>、医療と介護の自己負担を合算して軽減する<strong>高額医療・高額介護合算療養費制度</strong>といった仕組みもあります（いずれも上限額は所得区分によって定められています）。
      </p>
      <p className="text-xs text-gray-500 mb-6">
        出典：厚生労働省「介護報酬の概要」「人生の最終段階における医療・ケアの決定プロセスに関するガイドライン」ほか公的資料（2025年時点）。各加算の金額・要件は介護報酬改定により変わります。
      </p>
      <p className="text-base mb-8">
        費用の全体像や、こうした制度の使い方は、
        <Link href="/cost" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホームの費用相場」</Link>
        や
        <Link href="/insurance-usage-guide" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護保険の使い方完全ガイド」</Link>
        、入居後のお金の管理は
        <Link href="/post-admission-money" style={{ color: '#1A5E9E', fontWeight: 700 }}>「入居後のお金の管理」</Link>
        でくわしく紹介しています。
      </p>

      {/* H2-7 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        後悔を減らすために｜家族の心の準備とお別れのあと
      </h2>
      <p className="text-base mb-4">
        看取りは、ご本人のためのケアであると同時に、<strong>見送るご家族の心の時間</strong>でもあります。
        「もっと何かできたのではないか」と、自分を責めてしまう方は少なくありません。でも、どうか覚えておいてください——<strong>迷いながら寄り添ったその時間そのものが、十分な看取り</strong>です。
      </p>
      <p className="text-base mb-4">
        完璧な看取りというものはありません。途中で気持ちが揺れたり、選択を悔やんだりするのは、ご本人を大切に思うからこそです。
        できる範囲で寄り添えれば、それで十分だと、まずはご自身を労ってあげてください。
      </p>
      <p className="text-base mb-4">
        お別れのあと、深い悲しみや喪失感が続くこともあります。これは<strong>グリーフ（大切な人を失った後の悲しみ）</strong>と呼ばれ、誰にでも起こる自然な反応です。
        無理に元気になろうとせず、つらいときは気持ちを誰かに話してみてください。
        お住まいの地域包括支援センターのほか、同じ経験をした人どうしが思いを語り合う「分かち合いの会（遺族会・グリーフケアの集まり）」が入り口になることもあります。ひとりで抱え込まなくて大丈夫です。
      </p>
      <p className="text-base mb-8">
        介護を続ける中でご自身が疲れきってしまわないために、
        <Link href="/caregiver-mental-care" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護する家族のメンタルケア」</Link>
        も用意しています。お別れのあとの手続きや葬儀について知っておきたい方は、
        <Link href="/after-death" style={{ color: '#1A5E9E', fontWeight: 700 }}>「親が亡くなったら最初にやること」</Link>
        や
        <Link href="/funeral-guide" style={{ color: '#1A5E9E', fontWeight: 700 }}>「家族葬と一般葬の選び方」</Link>
        が役に立ちます。
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
          まとめ：老人ホームでの看取りは「話し合いの積み重ね」から
        </h2>
        <p className="text-base mb-3">
          老人ホームでの看取りとは、回復をめざす治療ではなく、最期の時間を穏やかに過ごせるよう支えるケアのことです。
          看取りに対応できるかは施設の区分や体制によって異なるため、早めに確認しておくと安心です。
          そして、後悔を減らす最大の助けは、本人・家族・専門職での話し合い（人生会議）を、少しずつ重ねていくことです。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            '入居前・入居後に「看取りまで対応してもらえるか」を施設に確認する',
            '元気なうちから「どう過ごしたいか」を家族でゆるく話してみる',
            '費用は加算や医療費を含めて、ケアマネージャーや市区町村窓口で確認する',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          いま決めきらなくて大丈夫です。ここまで読んでくださったこと自体が、ご本人を大切に思う、確かな一歩です。焦らず、できることからで十分です。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/dementia-care-basics', label: '認知症ケアの基本｜接し方と進行ステージ', icon: '🧠' },
          { href: '/caregiver-mental-care', label: '介護する家族のメンタルケア｜燃え尽き対策', icon: '💚' },
          { href: '/post-admission-money', label: '入居後のお金の管理｜成年後見・財産管理', icon: '💴' },
          { href: '/after-death', label: '親が亡くなったら最初にやること', icon: '📋' },
          { href: '/ending-activity', label: '終活ステップガイド', icon: '📝' },
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
        看取りに対応できる施設を早めに知っておくことは、ご本人を急かすことでも、ご家族が頑張れていないことでもありません。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        ※本ページにはアフィリエイト広告を含みます。費用・サービス内容・看取りへの対応範囲などを比較し、ご家族の状況に合った選択にお役立てください。
      </p>

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は、老人ホームでの看取りや人生の最終段階のケアに関する一般的な情報をまとめたものです。医療行為の効果や、特定の施設・ケア方法による結果を保証・推奨するものではありません。
          看取りへの対応範囲・費用・利用条件は、施設の区分や体制、制度改正、お住まいの市区町村、個別の事情によって異なる場合があります。
          実際の医療・ケアの方針については、主治医・連携医療機関・施設・お住まいの市区町村や地域包括支援センターなどの専門職にご相談のうえ、ご本人とご家族の状況に合わせてご判断ください。
        </p>
      </div>
    </>
  )
}
