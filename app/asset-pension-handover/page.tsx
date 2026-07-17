import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '親の財産・年金管理の引き継ぎ方｜認知症前の備え',
  description: '親の財産・年金管理の引き継ぎ方を、認知症になる前にできる手順としてやさしく整理しました。財産の棚卸し、年金振込口座の確認、口座凍結に備える代理人登録・任意後見・家族信託の比較、お金の話の切り出し方まで解説します。',
  alternates: {
    canonical: 'https://2ndhappiness.com/asset-pension-handover',
  },
  openGraph: {
    title: '親の財産・年金管理の引き継ぎ方｜認知症になる前に備える手順',
    description: '親の財産・年金管理の引き継ぎ方を、認知症になる前にできる手順としてやさしく整理しました。財産の棚卸し、年金振込口座の確認、口座凍結に備える代理人登録・任意後見・家族信託の比較、お金の話の切り出し方まで解説します。',
    url: 'https://2ndhappiness.com/asset-pension-handover',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
    publishedTime: '2026-07-18T05:00:00+09:00',
  },
}

const summaryItems = [
  '親の判断能力があるうちに<mark class="highlight">財産の全体像を「棚卸し」</mark>しておくと、いざというとき家族が慌てずにすみます',
  '認知症などで判断能力が低下すると、本人名義の口座取引が<mark class="highlight">制限される場合</mark>があります',
  '備えには<mark class="highlight">代理人登録・任意後見・家族信託・日常生活自立支援事業</mark>などの選択肢があり、元気なうちほど選べる幅が広がります',
  '<mark class="highlight">今日から全部やる必要はありません</mark>。まずは「どこに何があるか」を親子で一緒に確認することが第一歩です',
]

const options = [
  {
    name: '金融機関の代理人登録（代理人カード等）',
    when: 'いまは元気。日常の入出金を家族が手伝えるようにしたい',
    who: '本人が指定した家族（金融機関に登録）',
    role: '登録口座の入出金など金融機関が定める範囲の手続き（通常の代理人カードは本人に判断能力があることが前提。判断能力の低下後も継続する「予約型代理人サービス」の有無は取引先に確認を）',
    cost: '多くは無料〜低額（金融機関により異なる）',
    color: '#E8F5E9', border: '#2E7D52', label: '#2E7D52',
  },
  {
    name: '任意後見',
    when: 'いまは元気。将来に備えて任せる人を自分で決めたい',
    who: '本人が選んだ人（公正証書で契約）',
    role: '判断能力が低下し監督人が選ばれた後、財産管理と生活・介護の手続き（身上保護）',
    cost: '契約時の公証人手数料＋効力発生後は監督人への報酬など',
    color: '#FFF8E1', border: '#FFC107', label: '#E65100',
  },
  {
    name: '家族信託（民事信託）',
    when: 'いまは元気。まとまった資産の管理・承継まで設計したい',
    who: '信頼できる家族（受託者）',
    role: '契約で定めた財産の管理・処分（身上監護は含まない）',
    cost: '契約設計・登記などの初期費用（専門家相談が一般的）',
    color: '#FCE4EC', border: '#C2185B', label: '#C2185B',
  },
  {
    name: '法定後見（判断能力の低下後に使う類型）',
    when: 'すでに判断能力が低下している（程度により後見・保佐・補助の3類型）',
    who: '家庭裁判所が選任（親族・専門職）',
    role: '財産管理と、入院・施設入所などの契約手続き（身上保護）の代理（手術など医療行為そのものへの同意は含みません）',
    cost: '専門職の場合、報酬は家裁が決定（目安は月額数万円程度とも／2025年時点）',
    color: '#E3F2FD', border: '#1A5E9E', label: '#1A5E9E',
  },
]

const inventoryItems = [
  { item: '預貯金', note: '取引のある銀行・信用金庫・ゆうちょなど。通帳・キャッシュカードの保管場所も' },
  { item: '年金', note: '受け取っている年金の種類と、振り込まれている口座' },
  { item: '不動産', note: '自宅・土地・空き家など。権利証・固定資産税の通知書が手がかりに' },
  { item: '保険', note: '生命保険・医療保険・介護保険（民間）の証券と契約先' },
  { item: '有価証券など', note: '株式・投資信託・国債などの有無と取扱金融機関' },
  { item: '負債・定期支払い', note: 'ローン残高、サブスク、公共料金の引き落とし口座など' },
]

const faqItems = [
  {
    q: '親がまだ元気なうちから財産の話をするのは、失礼になりませんか？',
    a: '「お金の話を切り出すと、まるで財産を狙っているようで気が引ける」——そう感じる方はとても多いです。けれど、元気なうちに整理しておくことは、ご本人の意思を将来にきちんと反映させるための備えでもあります。「もしものときに困らないように、一緒に確認しておきたい」と、親御さんを主役にした聞き方にすると、角が立ちにくくなります。相続のためではなく、入院や施設入居など「これから起こりうること」への準備として話すのがおすすめです。急いで全部を聞き出す必要はありません。',
  },
  {
    q: '認知症になると、本当に親の口座は使えなくなるのですか？',
    a: '「必ず凍結される」と決まっているわけではありませんが、金融機関が名義人本人の意思を確認できないと判断したとき、ご本人を保護するために払い戻しや解約などの取引を制限する場合があります。家族であっても、本人に代わって自由に引き出せるとは限りません。近年は、判断能力が低下しても家族が手続きしやすいよう、金融機関ごとに代理人登録などの仕組みを設けている場合もあります。「もう打つ手がない」と思い込まず、まずは取引先の金融機関に確認してみると、道が見つかることもあります。',
  },
  {
    q: '親の年金は、家族が代わりに管理してもよいのですか？',
    a: '年金は原則としてご本人名義の口座に振り込まれ、ご本人のために使うお金です。家族が通帳を預かって生活費や施設費用の支払いを手伝うこと自体は、日常的に行われています。ただし、ご本人の判断能力が低下してくると、口座の取引が難しくなる場合があるため、元気なうちに金融機関の代理人登録を検討したり、判断能力が低下しはじめた段階では日常生活自立支援事業（社会福祉協議会が通帳の預かりなどを手伝う仕組み。契約内容を理解できる程度の判断能力がある方が対象）を利用したりする方法があります。年金額や振込先の変更手続きは、年金事務所や日本年金機構の案内で確認できます。',
  },
  {
    q: '任意後見と家族信託は、どちらを選べばよいですか？',
    a: 'どちらも「元気なうちに将来へ備える」仕組みですが、役割が異なります。任意後見は、判断能力が低下したときに備えて自分で選んだ人と公正証書で契約する制度で、財産管理に加えて生活や介護の手続き（身上保護）も任せられます。家族信託（民事信託）は、財産の管理・処分を信頼できる家族に託す契約で、設計の自由度が高い反面、身上監護は含まれません。ご家族の状況・資産の内容・目的によって合うものは変わり、費用や税務の検討も必要です。司法書士・弁護士などの専門家に相談して進めるのが一般的です。',
  },
]

export default function AssetPensionHandoverPage() {
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
      { '@type': 'ListItem', position: 2, name: '親の財産・年金管理の引き継ぎ方', item: 'https://2ndhappiness.com/asset-pension-handover' },
    ],
  }

  return (
    <>
      <ArticleJsonLd
        path={'/asset-pension-handover'}
        title={'親の財産・年金管理の引き継ぎ方｜認知症になる前に備える手順'}
        description={'親の財産・年金管理の引き継ぎ方を、認知症になる前にできる手順としてやさしく整理しました。財産の棚卸し、年金振込口座の確認、口座凍結に備える代理人登録・任意後見・家族信託の比較、お金の話の切り出し方まで解説します。'}
        datePublished={'2026-07-18T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Breadcrumb items={[{ label: '親の財産・年金管理の引き継ぎ方' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        親の財産・年金管理の引き継ぎ方｜認知症になる前に備える手順
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年7月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">参考：日本年金機構「年金の受け取り」、法務省「成年後見制度・成年後見登記制度」、全国社会福祉協議会「日常生活自立支援事業」、厚生労働省「介護保険制度の概要」ほか公的資料（2025年時点）</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          「親の通帳がどこにあるのかも、年金がいくら入っているのかも、実はよく知らない」——
          そんな状態のまま、ふと将来が不安になって、このページを開いた方も多いのではないでしょうか。
        </p>
        <p className="text-base">
          親のお金のことに踏み込むのは、なんだか気が引けるものです。それでも、<strong>元気ないまだからこそ、落ち着いて一緒に確認できること</strong>がたくさんあります。
          この記事では、認知症などで判断が難しくなる前に、親の財産・年金の管理をやさしく引き継いでいく手順を、順番に整理しました。
          もし親御さんにすでに気になる様子が出ていても、遅すぎることはありません。いまの状態からできる方法が、必ずあります。
          今日ぜんぶを終わらせる必要はありません。「まず全体像が分かった」と思えたら、それで十分な一歩です。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本記事は制度の一般的な情報をまとめたもので、法律・税務・財産管理の個別の判断を保証するものではありません。具体的なお手続きは、年金事務所・お住まいの市区町村・地域包括支援センターや、弁護士・司法書士・税理士などの専門家にご相談ください。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        なぜ「認知症になる前」の引き継ぎが大切なの？
      </h2>
      <p className="text-base mb-4">
        「まだ元気だから、お金のことは急がなくても大丈夫」——そう思っているうちに、時間だけが過ぎてしまうことがあります。
        実は、親の財産や年金の管理をめぐる悩みの多くは、<strong>判断能力が低下してから初めて表面化する</strong>のです。
      </p>
      <p className="text-base mb-4">
        金融機関は、口座の名義人本人の意思を確認できないと判断したとき、ご本人を保護するために、
        払い戻しや解約などの取引を<strong>制限する場合</strong>があります。
        いわば、大切なお金を勝手に動かされないよう、銀行がそっと鍵をかけるようなイメージです。
        家族であっても、本人に代わって自由に引き出せるとは限らない——ここで戸惑う方は少なくありません。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base mb-2"><strong>判断能力が低下してからだと、こんな場面で困ります</strong></p>
        <p className="text-base mb-1">・施設の月額費用や医療費を、本人の口座から払おうとしたら手続きが進まない</p>
        <p className="text-base mb-1">・どの銀行に、どんな保険に入っているのか、家族が誰も把握していない</p>
        <p className="text-base mb-1">・自宅を売って介護費用にあてたくても、本人の意思確認ができず売却できない</p>
        <p className="text-base mb-3">・年金の振込口座や金額が分からず、家計の見通しが立たない</p>
        <p className="text-base" style={{ color: '#7a5c00' }}>——どれも、いま少し備えておくだけで避けやすくなる場面です。怖がらせるための例ではなく、順番に手を打てば大丈夫、という目印だと思ってください。</p>
      </div>
      <p className="text-base mb-4">
        逆にいえば、<strong>親の判断能力がしっかりしているいまなら、選べる備えの幅がぐっと広い</strong>ということです。
        代理人登録も、任意後見も、家族信託も、いずれも「元気なうち」でないと始められません。
        「もっと早く知っていれば」と後悔する必要はまったくありません。知ったいまが、いちばんよいタイミングです。
      </p>
      <p className="text-base mb-8">
        なお、判断能力が低下したあとの財産管理や、入居後のお金の流れについては、
        <Link href="/post-admission-money" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホーム入居後のお金の管理｜成年後見・財産管理」</Link>
        でくわしく整理しています。あわせてご覧ください。
      </p>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        まず何から？親の財産を「棚卸し」する
      </h2>
      <p className="text-base mb-4">
        引き継ぎの第一歩は、難しい手続きではなく、<strong>「どこに、何があるか」を一覧にすること</strong>です。
        これを財産の「棚卸し（たなおろし）」と呼びます。お店が在庫を数えるように、親の財産をざっくり書き出してみる、という作業です。
        完璧なリストでなくて大丈夫。分かる範囲から、鉛筆でメモする感覚で十分です。
      </p>
      <p className="text-base mb-4">
        まずは次のような項目を、親子で一緒に確認してみましょう。全部を一日で終える必要はありません。
      </p>
      <div className="rounded-xl overflow-x-auto mb-6" style={{ border: '2px solid #2E7D52' }}>
        <table className="w-full border-collapse text-base">
          <thead>
            <tr style={{ background: '#E8F5E9' }}>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>確認する項目</th>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>見るポイント</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((c, i) => (
              <tr key={c.item} style={{ background: i % 2 === 0 ? '#fff' : '#F9FBF9', borderTop: '1px solid #e5e7eb' }}>
                <td className="px-4 py-3 font-bold" style={{ color: '#2E7D52' }}>{c.item}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{c.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-base mb-4">
        ポイントは、金額を1円単位まで正確に把握することではありません。
        <strong>「取引のある金融機関の名前」と「保管場所」が分かるだけでも、いざというときの家族の負担は大きく変わります</strong>。
        通帳やキャッシュカード、権利証、保険証券などが、家のどこにしまってあるか——ここが分からず、後から家じゅうを探し回るご家族はとても多いのです。
      </p>
      <p className="text-base mb-8">
        こうした棚卸しは、終活や身辺整理とも地続きです。チェックリスト形式で進めたい方は、
        <Link href="/checklist" style={{ color: '#1A5E9E', fontWeight: 700 }}>「終活チェックリスト」</Link>
        や
        <Link href="/ending-activity" style={{ color: '#1A5E9E', fontWeight: 700 }}>「終活ステップガイド」</Link>
        もあわせてどうぞ。
      </p>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        年金の管理と引き継ぎ｜受給と振込口座を確認する
      </h2>
      <p className="text-base mb-4">
        親の毎月の収入の柱は、多くの場合が年金です。ところが、<strong>「いくら受け取っているか」「どの口座に振り込まれているか」を家族が知らない</strong>ケースは珍しくありません。
        施設費用や生活費の見通しを立てるうえで、ここは早めに確認しておきたいところです。
      </p>
      <p className="text-base mb-4">
        年金は原則として、ご本人名義の口座に、2か月に一度（偶数月）まとめて振り込まれます。
        受給額や振込先は、毎年届く「年金振込通知書」や「年金額改定通知書」（いずれも年金を受け取っている方に送られてくるお知らせです）で確認できます。
        書類が見当たらない場合は、年金事務所や日本年金機構の案内で照会する方法もあります。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base mb-2"><strong>年金まわりで確認しておきたいこと</strong></p>
        <p className="text-base mb-1">・受け取っている年金の種類（老齢年金・遺族年金など）と、おおよその月額（2か月分単位で振込）</p>
        <p className="text-base mb-1">・年金の振込口座（この口座から施設費用などを引き落とすと、お金の流れが追いやすくなります）</p>
        <p className="text-base">・住所や振込口座を変更したいときの手続き先（年金事務所・日本年金機構）</p>
      </div>
      <p className="text-base mb-4">
        年金そのものは、あくまでご本人のためのお金です。家族が通帳を預かって支払いを手伝うことは日常的に行われていますが、
        ご本人の判断能力が低下してくると、その口座の取引が難しくなる場合があります。
        そのため、<strong>元気なうちに金融機関の代理人登録を検討しておく</strong>と安心です。判断能力が低下しはじめた段階では、社会福祉協議会の日常生活自立支援事業（通帳の預かりなどを手伝う仕組み）を利用できる場合もあります。
        いずれも、次の章で紹介する備えとセットで考えておくとよいでしょう。
      </p>
      <p className="text-sm text-gray-600 mb-8">
        ※ここは制度名や手続きが少し細かいので、「年金の額と振込口座を確認しておく」とだけ覚えて、あとは読み飛ばしてもOKです。具体的な手続きは年金事務所の窓口で教えてもらえます。
      </p>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        口座が使いにくくなる前に｜代理人登録・任意後見・家族信託を比較
      </h2>
      <p className="text-base mb-4">
        棚卸しと年金の確認ができたら、次は<strong>「本人に代わってお金を管理する仕組み」</strong>を、状況に合わせて選んでおく段階です。
        先に大きな流れだけお伝えすると、<strong>親御さんが元気ないまなら選択肢は幅広く、判断が難しくなってからは法定後見（家庭裁判所が、本人に代わってお金や手続きを担う人を決める制度）が中心になります</strong>。
        いま動けば選べる道が多い、と前向きに捉えてもらえればと思います。
      </p>
      <p className="text-base mb-4">
        代表的な4つを、「いつ使えるか」「誰が管理するか」で整理しました。難しく感じたら、表だけ眺めてもらえれば十分です。
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
        ここで用語をやさしく整理しておきます。
        <strong>身上保護（しんじょうほご。かつては「身上監護」とも）</strong>とは、生活・医療・介護に関する契約や手続き（入院や施設入所の契約など）を本人に代わって行うことで、介護そのものを行うことではありません。
        <strong>財産管理</strong>は、預貯金や不動産などの管理です。
        任意後見や法定後見はこの両方をカバーし、家族信託は財産管理のみ、という違いがあります。
      </p>
      <p className="text-base mb-4">
        なお、任意後見は必ず公正証書（公証役場で作る正式な書類）で契約します。家族信託も、契約設計や不動産の登記など、専門家の関与が一般的です。
        「どれが合うか分からない」と感じても、焦らなくて大丈夫。多くの場合、まずは
        <Link href="/prepare/consultation" style={{ color: '#1A5E9E', fontWeight: 700 }}>相談先を選ぶ</Link>
        ところから始まります。司法書士・弁護士などの専門家や、地域包括支援センター（高齢者の介護・福祉の何でも相談窓口）に、状況を話してみるのが第一歩です。
      </p>
      <p className="text-base mb-8">
        すでに親の判断能力が低下している場合でも、道が閉ざされたわけではありません。
        法定後見という確かな仕組みがあります（ただし、本人が住む家＝居住用不動産を売る場合には、家庭裁判所の許可が必要です）。その詳しい流れは
        <Link href="/post-admission-money" style={{ color: '#1A5E9E', fontWeight: 700 }}>「入居後のお金の管理｜成年後見・財産管理」</Link>
        にまとめています。相続の準備とあわせて考えたい方は
        <Link href="/prepare/inheritance" style={{ color: '#1A5E9E', fontWeight: 700 }}>「相続の準備」</Link>
        もどうぞ。
      </p>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        いつ、どう切り出す？親とお金の話をするコツ
      </h2>
      <p className="text-base mb-4">
        ここまで読んで、いちばんの難関が「親にどう切り出すか」だと感じている方は多いはずです。
        お金の話は、仲のよい親子ほど、かえって切り出しにくいもの。「財産を狙っていると思われたら」と気が引ける——その気持ち、とてもよく分かります。
      </p>
      <p className="text-base mb-4">
        コツは、<strong>「相続」ではなく「これから起こりうること」の話として持ち出す</strong>ことです。
        入院、施設入居、災害時の備え——親御さん自身が困らないための準備、という切り口なら、身構えられにくくなります。
        親を主役にした聞き方を、いくつか挙げてみます。
      </p>
      <div className="space-y-3 mb-6">
        {[
          { q: '「もしものとき、私が困らないように教えておいてほしいんだけど」', a: '子どもの負担を減らすための確認、という前向きな理由づけにすると、話が進みやすくなります。' },
          { q: '自分（子ども側）の話から始める', a: '「うちも保険とか見直したんだよね」と自分の話から入ると、親も構えずに乗ってくれることがあります。' },
          { q: 'イベントに乗せて少しずつ', a: '帰省・入院・引っ越しなど、節目の折に一項目ずつ。一度に全部を聞き出そうとしないのがコツです。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1">💬 {item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base mb-2"><strong>📖 私たちのケースでは（編集部・架空の体験談）</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          母に「通帳どこ？」と聞いたら、最初は「まだ元気なのに、なに？」と少し不機嫌になってしまいました。
          反省して、次は自分の保険を見直した話から入り、「私も万一のときのために一覧を作ったんだ。お母さんもよかったら一緒に」と誘ってみたんです。
          そうしたら、少しずつ話してくれるように。半年かけて、ゆっくり整理していきました。焦らなくてよかった、と今は思います。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記は話の進め方を分かりやすく伝えるための編集部による架空のエピソードです。ご家庭によってはうまく進まないこともあり、結果を保証するものではありません。</p>
      </div>
      <p className="text-base mb-8">
        もし話し合いがうまくいかなくても、あなたのせいではありません。親御さんにも、これまで守ってきた暮らしへのこだわりがあります。
        きょうだいがいる場合は、事前に方針をそろえておくと安心です。分担や進め方に悩んだら、
        <Link href="/sibling-care-discussion" style={{ color: '#1A5E9E', fontWeight: 700 }}>「兄弟姉妹で介護を分担する話し合い方」</Link>
        が役に立ちます。
      </p>

      {/* H2-6 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        書類とデジタル情報を整理する｜今日できる小さな一歩
      </h2>
      <p className="text-base mb-4">
        仕組みを整える前でも、<strong>「情報を一か所にまとめておく」だけ</strong>で、いざというときの家族の安心度は大きく変わります。
        完璧なファイルを作る必要はありません。次のような小さな整理から始めてみましょう。
      </p>
      <div className="space-y-3 mb-6">
        {[
          { q: 'エンディングノートや一覧メモを1冊用意する', a: '財産の棚卸し・年金・保険・連絡先などを、1冊にゆるくまとめておくと、探し回らずにすみます。市販のノートでも手書きのメモでも十分です。' },
          { q: '通帳・印鑑・証券などの保管場所を家族で共有', a: 'モノそのものを渡さなくても、「どこにあるか」を共有しておくだけで、緊急時の負担が減ります。' },
          { q: 'ネット銀行・スマホ決済などデジタル資産も忘れずに', a: '通帳のないネット口座やスマホ決済は、家族が存在に気づきにくい資産です。利用の有無だけでもメモしておくと安心です。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1">✅ {item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-4">
        暗証番号やパスワードそのものをノートに書くのは、防犯上おすすめできません。
        「どこにあるか」「どの金融機関か」までを共有し、鍵となる情報は別に管理するなど、<strong>ご家庭なりのバランス</strong>で進めてください。
      </p>
      <p className="text-base mb-8">
        自宅や不動産の扱いまで含めて考えたい方は、
        <Link href="/prepare/real-estate" style={{ color: '#1A5E9E', fontWeight: 700 }}>「自宅・不動産の整理」</Link>
        も参考になります。介護にかかる費用の全体像を知りたい方は、
        <Link href="/care-medical-deduction" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護の医療費控除」</Link>
        や
        <Link href="/cost" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホームの費用相場」</Link>
        もあわせてどうぞ。
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
          まとめ：親の財産・年金の引き継ぎは「棚卸し」から
        </h2>
        <p className="text-base mb-3">
          親の財産・年金管理の引き継ぎは、親が元気ないまだからこそ、落ち着いて進められます。
          まずは「どこに何があるか」を親子で棚卸しし、年金の額と振込口座を確認する。そのうえで、代理人登録・任意後見・家族信託など、状況に合った備えを選んでいく——この順番が、慌てないためのコツです。
          全部を一度にやろうとしなくて大丈夫。今日は一項目だけでも十分です。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            '取引のある金融機関・保険・不動産を、分かる範囲で一覧にする（棚卸し）',
            '年金の受給額と振込口座を確認し、施設費用の引き落とし口座を決めておく',
            '判断能力があるうちに、代理人登録や任意後見・家族信託を専門家に相談する',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          ここまで読んでくださったこと自体が、ご本人とご家族のこれからを守るための、確かな一歩です。焦らず、できることからで大丈夫です。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/post-admission-money', label: '老人ホーム入居後のお金の管理｜成年後見・財産管理', icon: '💴' },
          { href: '/prepare/inheritance', label: '相続の準備｜入居前にしておきたいこと', icon: '📋' },
          { href: '/care-medical-deduction', label: '介護の医療費控除｜対象になる費用と申告のしかた', icon: '🧾' },
          { href: '/sibling-care-discussion', label: '兄弟姉妹で介護を分担する話し合い方', icon: '🤝' },
          { href: '/checklist', label: '終活チェックリスト28項目', icon: '📝' },
          { href: '/ending-activity', label: '終活ステップガイド', icon: '🗂️' },
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
        財産や制度の情報を集めることは、ご本人を急かすことでも、ご家族が頑張れていないことでもありません。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        ※本ページにはアフィリエイト広告を含みます。費用・サービス内容・対応エリアなどを比較し、ご家族の状況に合った選択にお役立てください。
      </p>

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は、親の財産・年金管理の引き継ぎに関する一般的な情報をまとめたものです。法律・税務・財産管理についての個別の助言や、特定の結果を保証するものではありません。
          年金・代理人登録・任意後見・家族信託・日常生活自立支援事業・成年後見制度などの内容・費用・利用条件は、制度改正やお住まいの市区町村、金融機関、個別の事情によって異なる場合があります。
          具体的なお手続きや判断にあたっては、年金事務所・お住まいの市区町村・地域包括支援センター・社会福祉協議会や、弁護士・司法書士・税理士などの専門家にご相談ください。最終的なご判断は、ご本人とご家族の状況に合わせて行ってください。
        </p>
      </div>
    </>
  )
}
