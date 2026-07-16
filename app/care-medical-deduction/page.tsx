import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '介護の医療費控除｜対象になる費用と申告のしかた',
  description: '介護の医療費控除で対象になる費用（施設サービス費・在宅の介護サービス・おむつ代・通院交通費）と対象外の費用、確定申告の手順をやさしく解説。特養は自己負担の2分の1、老健・介護医療院は全額が目安です。申告し忘れた年も5年さかのぼれます（2025年分・2026年申告基準）。',
  alternates: {
    canonical: 'https://2ndhappiness.com/care-medical-deduction',
  },
  openGraph: {
    title: '介護の医療費控除｜対象になる費用と申告のしかた',
    description: '介護の医療費控除で対象になる費用（施設サービス費・在宅の介護サービス・おむつ代・通院交通費）と対象外の費用、確定申告の手順をやさしく解説。特養は自己負担の2分の1、老健・介護医療院は全額が目安です。申告し忘れた年も5年さかのぼれます（2025年分・2026年申告基準）。',
    url: 'https://2ndhappiness.com/care-medical-deduction',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
    publishedTime: '2026-07-16T05:00:00+09:00',
  },
}

const summaryItems = [
  '医療費控除は、1年間に払った医療費が<mark class="highlight">原則10万円</mark>（所得により変わります）を超えた分を、所得から差し引ける税金の制度です',
  '介護でも、<mark class="highlight">施設サービス費・在宅の介護サービス・おむつ代・通院の交通費</mark>などが対象になる場合があります',
  '施設の種類で扱いが変わり、<mark class="highlight">特養は自己負担の2分の1</mark>、<mark class="highlight">老健・介護医療院は全額</mark>が対象の目安です（2025年時点）',
  '手続きは<mark class="highlight">確定申告</mark>。うっかり申告し忘れた年も、<mark class="highlight">5年前まで</mark>さかのぼって申告できます',
]

const targetRows = [
  {
    icon: '🏫',
    kind: '施設に入っている場合',
    target: '施設サービス費（介護費）・食費・居住費の自己負担分など',
    note: '施設の種類によって「全額」か「2分の1」か、対象外かが変わります（次の章でくわしく）',
  },
  {
    icon: '🏠',
    kind: '在宅で介護している場合',
    target: '訪問看護・訪問リハビリ・通所リハビリ・短期入所療養介護など「医療系」のサービス費',
    note: '訪問介護や通所介護など「福祉系」は、医療系と一緒に使うときだけ対象になることがあります',
  },
  {
    icon: '🧾',
    kind: 'おむつ代',
    target: 'おおむね6か月以上寝たきりで、医師の治療を受けている方のおむつ代',
    note: '「おむつ使用証明書」など、医師が書いた書類が必要です',
  },
  {
    icon: '🚕',
    kind: '通院の交通費',
    target: '通院に使った電車・バス代など（付き添いが必要な場合は付添人の分も）',
    note: '自家用車のガソリン代・駐車場代は原則対象外。領収書やメモを残しておきましょう',
  },
]

const facilityRows = [
  {
    name: '特別養護老人ホーム（特養）',
    color: '#2E7D52',
    rate: '自己負担の「2分の1」が対象',
    detail: '介護費・食費・居住費の自己負担額の半分が医療費控除の対象になります',
  },
  {
    name: '介護老人保健施設（老健）',
    color: '#2E7D52',
    rate: '自己負担の「全額」が対象',
    detail: '介護費・食費・居住費の自己負担額がそのまま対象になります',
  },
  {
    name: '介護医療院',
    color: '#2E7D52',
    rate: '自己負担の「全額」が対象',
    detail: '老健と同じく、介護費・食費・居住費の自己負担額が対象になります',
  },
  {
    name: '介護付き有料老人ホーム／サ高住／グループホームなど',
    color: '#E65100',
    rate: '施設利用料そのものは対象外',
    detail: '家賃・管理費などは対象外。ただし、別に受けた医療系サービスやおむつ代などは対象になる場合があります',
  },
]

const faqItems = [
  {
    q: '親を老人ホームに入れていますが、医療費控除は受けられますか？',
    a: '施設の種類によります。特別養護老人ホーム（特養）では、施設サービス費・食費・居住費の自己負担額の「2分の1」が、介護老人保健施設（老健）・介護医療院では「全額」が、医療費控除の対象になるのが目安です（2025年時点）。一方で、介護付き有料老人ホームやサービス付き高齢者向け住宅（サ高住）、グループホームといった民間中心の住まいは、施設の利用料そのものは対象外とされています。ただし、そこで別に医療系の在宅サービスを受けた分や、条件を満たすおむつ代などは対象になる場合があります。ご自身のケースがどうなるかは、施設が発行する領収書（医療費控除の対象額が記載されていることが多いです）を確認するか、お住まいの地域を管轄する税務署にたずねると確実です（出典：国税庁 タックスアンサー No.1125／2025年時点）。',
  },
  {
    q: '医療費が10万円を超えていなくても、控除は受けられますか？',
    a: '受けられる場合があります。医療費控除は「原則10万円を超えた分」が対象ですが、その年の総所得金額等が200万円未満の方は、「10万円」ではなく「総所得金額等の5%」を超えた分が対象になります。たとえば総所得が150万円の方なら、その5%である7万5千円を超えた医療費が対象です。年金収入が中心のご家庭では10万円に届かないこともありますが、この5%ルールで対象になるケースは少なくありません。「うちは10万円もかかっていないから関係ない」と決めつけず、1年分の領収書を一度合計してみることをおすすめします（出典：国税庁 タックスアンサー No.1120／2025年時点）。',
  },
  {
    q: 'おむつ代は医療費控除の対象になりますか？',
    a: 'いくつか条件を満たせば対象になります。具体的には、傷病によりおおむね6か月以上にわたって寝たきりの状態にあり、医師の治療を受けている方が、治療を受けるためにおむつを使っている場合です。この場合、確定申告のときに、医師が発行する「おむつ使用証明書」を添付するか提示する必要があります。なお、介護保険の要介護認定を受けている方は、2年目以降は主治医意見書（またはその写し）で証明書に代えられる自治体もあります（お住まいの市区町村での確認が必要です）。おむつ代は毎日のことなので、年間で見ると大きな金額になりがちです。レシートはこまめにとっておきましょう（出典：国税庁 おむつに係る費用の医療費控除の取扱い／2025年時点）。',
  },
  {
    q: '確定申告を忘れていた年のぶんは、もう申告できませんか？',
    a: 'あきらめなくて大丈夫です。会社員の方などが医療費控除を受けるための申告（払い過ぎた税金を返してもらう「還付申告」）は、その年の翌年1月1日から5年間さかのぼって行えます。たとえば「去年、母の介護でかなり医療費がかかったのに、申告し忘れていた」という場合でも、まだ間に合う可能性が高いということです。過去の領収書が手元に残っていれば、まとめて確認してみてください。「もう遅いかも」と思っていたお金が、戻ってくることもあります（出典：国税庁 確定申告・還付申告／2025年時点）。',
  },
  {
    q: '医療費控除を受けると、いくらくらい戻ってきますか？',
    a: 'ここは誤解が多いところなので、ていねいにお伝えします。医療費控除は「払った医療費がそのまま戻る」制度ではなく、「所得（もうけ）から一定額を差し引いて、税金を計算し直す」仕組みです。差し引ける金額は、おおまかに「1年間の医療費 − 保険金などで戻った分 − 10万円（または総所得の5%）」で、上限は200万円です。実際に軽くなる税額は、この差し引いた金額に、その方の所得税率をかけたぶんが目安になります。さらに、軽くなるのは所得税だけでなく、翌年度の住民税（おおむね10%）も対象になるため、合わせると効果はもう少し大きくなります。所得によって戻る額は変わるため、一律にいくらとは言えませんが、「思っていたより手続きの価値があった」と感じる方もいます。正確な金額は、国税庁の確定申告書等作成コーナーで試算できます（出典：国税庁 タックスアンサー No.1120／2025年時点）。',
  },
]

export default function CareMedicalDeductionPage() {
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
        path={'/care-medical-deduction'}
        title={'介護の医療費控除｜対象になる費用と申告のしかた'}
        description={'介護でも医療費控除の対象になる費用（施設サービス費・在宅の介護サービス・おむつ代・通院交通費など）と対象外の費用、確定申告の手順を、介護中のご家族の視点でやさしく整理しました。'}
        datePublished={'2026-07-16T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Breadcrumb items={[{ label: '介護の医療費控除' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        介護の医療費控除｜対象になる費用と申告のしかた
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年7月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">※本記事は、主に2025年分（2026年に行う申告）を基準とした一般的な情報です。出典（国税庁のタックスアンサー等）や詳しい注意点は、記事末尾にまとめています。</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          介護が続くと、気づかないうちにお金は出ていくものです。施設の費用、おむつ、通院の付き添い——「これ、少しでも戻ってこないのかな」と、ふと思ったことはありませんか。
          でも、確定申告と聞くだけで「難しそう」「うちは関係なさそう」と、手が止まってしまう方も多いですよね。
        </p>
        <p className="text-base">
          そこで知っておきたいのが、<strong>医療費控除</strong>という仕組みです。介護にかかったお金の一部も、条件を満たせば対象になり、払い過ぎた税金が戻ってくることがあります。
          この記事では、<strong>「何が対象になるのか」「どう申告するのか」</strong>を、専門用語をかみくだきながら順番に整理していきます。全部を覚える必要はありません。気になるところから、ゆっくり読んでいただければ大丈夫です。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本記事は、介護に関する医療費控除の一般的な情報をまとめたものです。控除の対象範囲・金額・手続きは、施設の種類やサービス内容、お住まいの地域、その年の所得や制度改正によって異なる場合があります。具体的なご相談は、お住まいの地域を管轄する税務署、お住まいの市区町村、税理士などの専門窓口にお寄せください。なお、本ページは広告（アフィリエイト）を含みます。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        そもそも医療費控除って、どんな制度？
      </h2>
      <p className="text-base mb-4">
        「名前は聞いたことがあるけれど、中身はよく分からない」——まずはそこから、やさしく整理しましょう。<strong>医療費控除とは、1年間（1月1日〜12月31日）に支払った医療費が一定の金額を超えたとき、その超えた分を「所得」から差し引いてもらえる仕組み</strong>です。所得が減れば、その分だけ税金が軽くなり、払い過ぎていた税金が戻ってくることがあります。
      </p>
      <p className="text-base mb-4">
        目安となる「一定の金額」は、<strong>原則10万円</strong>です。ただし、その年の総所得金額等（1年間のもうけの合計に近いもの）が200万円未満の方は、「10万円」ではなく<strong>「総所得金額等の5%」</strong>が基準になります。年金が収入の中心というご家庭では、この5%ルールで対象になることも少なくありません。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base mb-2" style={{ fontWeight: 700, color: '#B26A00' }}>🧮 計算のイメージ（ここは読み飛ばしてOK）</p>
        <p className="text-base mb-2">
          差し引ける金額は、おおまかに<br />
          <strong>「1年間の医療費 − 保険金などで戻った分 − 10万円（または総所得の5%）」</strong><br />
          で、上限は200万円です。なお、保険金などで戻ったお金は、<strong>その給付の対象になった医療費（たとえば入院費）からだけ</strong>差し引きます。対象を超えて戻った分を、ほかの費用から引く必要はありません。たとえるなら、<strong>1年分のレシートを合計して、決められたラインを超えた分が「税金の割引券」になる</strong>ようなイメージです。数字が細かいので、ここは「超えた分が戻る仕組みなんだな」とだけ覚えて、先に進んで大丈夫です。
        </p>
        <p className="text-sm" style={{ color: '#8a6d00', lineHeight: 1.8 }}>
          ※戻るのは払った医療費の全額ではなく、この差し引いた金額に税率をかけたぶんです。過度に期待せず、「まずは合計してみようかな」くらいの気持ちで大丈夫です。
        </p>
      </div>
      <p className="text-base mb-6">
        大切なのは、<strong>医療費控除の「医療費」には、病院の治療費だけでなく、介護に関わる費用の一部も含まれることがある</strong>という点です。制度が複雑なので、これまで気づかなかったとしても、それは自然なこと。いまここで知っておけば、これからのぶんにしっかり間に合います。介護全体のお金の見通しは
        <Link href="/cost" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホームの費用・料金の相場」</Link>
        や
        <Link href="/retirement-cost" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老後資金・介護費用の試算」</Link>
        もあわせてどうぞ。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base mb-2" style={{ color: '#1A5E9E', fontWeight: 700 }}>👪 知っておくと得することが多いポイント：家族の分は「まとめて」申告できる</p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          医療費控除は、<strong>生計を一にする（お財布が一緒の）ご家族の医療費を合算して申告できます</strong>。そして、税金は所得が多い人ほど多く納めているため、<strong>働いていて所得税・住民税を多めに納めている方（多くは子世帯）がまとめて申告すると、戻る額が大きくなりやすい</strong>のが実務上のコツです。年金収入が中心で納めた税金が少ない親ご本人の名義だけだと、そもそも戻るお金が出ないこともあります。「誰の名義で申告するか」を、ご家族で一度相談してみてください（出典：国税庁 タックスアンサー No.1120／2025年時点）。
        </p>
      </div>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        介護のどんな費用が対象になるの？
      </h2>
      <p className="text-base mb-4">
        「介護のお金なんて、医療とは別でしょう？」と思われがちですが、そうとも限りません。<strong>介護の場面でも、医療費控除の対象になりうる費用はいくつもあります</strong>。まずは全体像を、早見表でざっくりつかみましょう。ここは横にスクロールできます。気になる行だけ見てもらえれば大丈夫です。
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse text-base" style={{ minWidth: '680px' }}>
          <thead>
            <tr style={{ background: 'linear-gradient(135deg, #1B5E37, #2E7D52)' }}>
              <th className="text-left px-4 py-3" style={{ color: '#fff', fontSize: '13px', width: '150px' }}>どんな場面か</th>
              <th className="text-left px-4 py-3" style={{ color: '#fff', fontSize: '13px' }}>対象になりうる費用</th>
              <th className="text-left px-4 py-3" style={{ color: '#fff', fontSize: '13px' }}>ひとことメモ</th>
            </tr>
          </thead>
          <tbody>
            {targetRows.map((r, i) => (
              <tr key={r.kind} style={{ background: i % 2 === 0 ? '#fff' : '#F9FBF9', borderTop: '1px solid #e5e7eb' }}>
                <td className="px-4 py-3 font-bold" style={{ color: '#2E7D52' }}>
                  <span style={{ marginRight: '4px' }}>{r.icon}</span>{r.kind}
                </td>
                <td className="px-4 py-3 text-sm" style={{ color: '#444', lineHeight: 1.7 }}>{r.target}</td>
                <td className="px-4 py-3 text-sm" style={{ color: '#666', lineHeight: 1.7 }}>{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-base mb-8">
        ポイントは、<strong>「介護保険を使ったサービスでも、医療に近い性質のものは対象になりやすい」</strong>ということ。ただし、施設の種類やサービスの中身によって扱いが変わるため、次の2つの章で「施設に入っている場合」と「在宅の場合」に分けて、もう少しくわしく見ていきます。ここまでで「思ったより幅広いんだな」と感じてもらえれば十分です。
      </p>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        介護施設の種類で医療費控除の対象になる割合が変わる
      </h2>
      <p className="text-base mb-4">
        施設に入っている場合、実は<strong>施設の種類によって、医療費控除の対象になる範囲が違います</strong>。ここは少しややこしいので、先に結論をお伝えします。<strong>結論：公的な施設（特養・老健・介護医療院）は対象になり、民間中心の有料老人ホームなどは施設利用料そのものは対象外が基本</strong>です。
      </p>
      <div className="mb-6 space-y-3">
        {facilityRows.map((f) => (
          <div key={f.name} className="rounded-xl p-5 bg-white" style={{ border: '1px solid #e5e7eb', borderLeft: `4px solid ${f.color}` }}>
            <p className="font-bold text-base mb-1" style={{ color: f.color }}>{f.name}</p>
            <p className="text-base mb-1"><strong>{f.rate}</strong></p>
            <p className="text-sm text-gray-600" style={{ lineHeight: 1.8 }}>{f.detail}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-4">
        少し用語を補っておきます。<strong>特別養護老人ホーム（特養）</strong>は、常に介護が必要な方が入る公的な施設で、新しく入るには原則として要介護3以上が目安です。<strong>介護老人保健施設（老健）</strong>は、退院後などにリハビリをして在宅復帰を目指す施設。<strong>介護医療院</strong>は、長期の医療と介護を一緒に受けられる施設です。この3つは介護保険の「施設サービス」にあたり、支払った自己負担分（介護費・食費・居住費）が医療費控除の対象になります。特養だけは「2分の1」、老健・介護医療院は「全額」が対象、というのが目安です（2025年時点）。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#F3F8F5', border: '1px solid #2E7D52' }}>
        <p className="text-base">
          💡 覚えておきたいのは、<strong>理美容代や、日常生活のための特別なサービス費などは対象外</strong>だということ。施設が発行する領収書には、<strong>「医療費控除の対象になる金額」が分けて記載されていることが多い</strong>ので、まずはそこを見てみてください。分からなければ、施設の相談員（生活相談員）に「医療費控除の対象額はどこを見ればいいですか」と聞いて大丈夫です。施設ごとの費用の考え方は
          <Link href="/cost" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホームの費用・料金の相場」</Link>
          も参考になります（出典：国税庁 タックスアンサー No.1125／2025年時点）。
        </p>
      </div>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        在宅介護の医療費控除はどうなる？
      </h2>
      <p className="text-base mb-4">
        施設ではなく、自宅で介護しているご家庭も多いはずです。その場合も、<strong>介護保険を使った在宅（居宅）サービスの一部が、医療費控除の対象になります</strong>。ここでのコツは、<strong>「医療系」か「福祉系」か</strong>で分けて考えることです。
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="rounded-xl p-6 bg-white" style={{ border: '2px solid #2E7D52' }}>
          <p className="text-lg font-bold mb-2" style={{ color: '#2E7D52' }}>◎ 対象になりやすい（医療系）</p>
          <p className="text-sm mb-2 text-gray-700" style={{ lineHeight: 1.8 }}>医療に近い性質のサービスは、それだけで対象になります。</p>
          <ul className="space-y-1 text-sm text-gray-700" style={{ lineHeight: 1.8 }}>
            <li>・訪問看護（看護師が自宅を訪問）</li>
            <li>・訪問リハビリテーション</li>
            <li>・居宅療養管理指導（医師・薬剤師などが自宅で指導）</li>
            <li>・通所リハビリテーション（デイケア）</li>
            <li>・短期入所療養介護（医療型ショートステイ）</li>
          </ul>
        </div>
        <div className="rounded-xl p-6 bg-white" style={{ border: '2px solid #F57C00' }}>
          <p className="text-lg font-bold mb-2" style={{ color: '#E65100' }}>△ 条件つき（福祉系）</p>
          <p className="text-sm mb-2 text-gray-700" style={{ lineHeight: 1.8 }}>生活を支えるサービスは、上の医療系と一緒に使うときだけ対象になります（その場合、自己負担額は原則として全額が対象）。</p>
          <ul className="space-y-1 text-sm text-gray-700" style={{ lineHeight: 1.8 }}>
            <li>・訪問介護（掃除・調理などの生活援助が中心のものは除く）</li>
            <li>・通所介護（デイサービス）</li>
            <li>・短期入所生活介護（福祉型ショートステイ）</li>
          </ul>
        </div>
      </div>
      <p className="text-base mb-4">
        少しややこしいので、かみくだくと——<strong>訪問看護のような「医療系」のサービスを利用していれば、それに合わせて使ったデイサービスなどの「福祉系」も対象に含められる</strong>、という関係です。逆に、福祉系だけを単独で使っている場合は、対象にならないことがあります。また、<strong>生活援助が中心の訪問介護や、グループホーム（認知症対応型共同生活介護）の利用料などは、対象外</strong>とされています。
      </p>
      <p className="text-base mb-8">
        「自分のケースはどっちだろう」と迷ったら、<strong>ケアマネージャー（介護の計画を立て、調整してくれる専門職）</strong>に、ケアプランのどのサービスが医療費控除の対象になるか聞いてみるのが近道です。ここは無理にひとりで判断しなくて大丈夫。介護保険サービス全体の使い方は
        <Link href="/insurance-usage-guide" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護保険の使い方完全ガイド」</Link>
        にまとめています（出典：国税庁 タックスアンサー No.1127／2025年時点）。
      </p>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        見落としがちな「おむつ代」と「通院の交通費」
      </h2>
      <p className="text-base mb-4">
        ここは、意外と知られていない「隠れた対象」です。毎日のことなので、<strong>年間で見ると金額が大きくなりやすい</strong>ぶん、対象になれば効果も感じやすいところ。ふたつに分けてお伝えします。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base mb-2" style={{ color: '#1A5E9E', fontWeight: 700 }}>🧾 おむつ代（条件つきで対象）</p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          <strong>傷病でおおむね6か月以上にわたって寝たきり（おおむね寝た状態が続き、ご自身で動くのが難しい状態）にあり、医師の治療を受けている方</strong>が、治療のためにおむつを使っている場合、そのおむつ代は医療費控除の対象になります。ただし、確定申告のときに<strong>医師が発行する「おむつ使用証明書」</strong>を添付するか提示することが必要です。介護保険の要介護認定を受けている方は、<strong>2年目以降は主治医意見書（またはその写し）で代えられる</strong>自治体もあります（お住まいの市区町村での確認が必要です）。「もう長く使っているな」という方は、一度かかりつけの先生に相談してみてください。
        </p>
      </div>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#F3F8F5', border: '1px solid #2E7D52' }}>
        <p className="text-base mb-2" style={{ color: '#2E7D52', fontWeight: 700 }}>🚕 通院の交通費（対象になる場合あり）</p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          病院への通院にかかった電車やバスの運賃は、医療費控除の対象になります。ご本人がひとりで通院するのが難しく、<strong>付き添いが必要な場合は、付添人の交通費も対象</strong>になることがあります。一方で、<strong>自家用車のガソリン代や駐車場代は、原則として対象外</strong>です。電車・バスは領収書が出ないことが多いので、「いつ・どこへ・いくら」を簡単にメモしておくと、あとで集計がぐっと楽になります。
        </p>
      </div>
      <p className="text-base mb-8">
        こうした細かい費用は、その場では「たいした額じゃない」と感じても、1年分たまると無視できない金額になることがあります。<strong>レシートや領収書は、月ごとに封筒や箱にまとめておく</strong>だけで十分。完璧に整理しようとしなくて大丈夫です。（出典：国税庁 おむつに係る費用の医療費控除の取扱い、タックスアンサー No.1122／2025年時点）
      </p>

      {/* H2-6 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        いつ、どうやって申告するの？手続きの流れ
      </h2>
      <p className="text-base mb-4">
        「対象になるのは分かったけれど、実際どうすればいいの？」——ここが一番のハードルですよね。でも、基本の流れは<strong>「集めて・計算して・申告する」</strong>の3ステップだけ。難しく考えなくて大丈夫です。
      </p>
      <div className="space-y-3 mb-8">
        {[
          { n: 'STEP 1', t: '1年分の領収書を集める', d: '病院の治療費、施設の領収書（医療費控除の対象額の記載を確認）、おむつ代、通院交通費のメモなどを、1月〜12月のぶんでまとめます。' },
          { n: 'STEP 2', t: '「医療費控除の明細書」に記入', d: '集めた費用を、国税庁の様式「医療費控除の明細書」に書き込みます。健康保険から届く「医療費のお知らせ」を使うと、記入を省ける部分もあります。' },
          { n: 'STEP 3', t: '確定申告書を作って提出', d: '国税庁の「確定申告書等作成コーナー」を使うと、画面の案内どおりに入力するだけで書類ができます。e-Tax（自宅のパソコン・スマホからネットで申告できる仕組み）か郵送、税務署の窓口で提出します。' },
          { n: 'STEP 4', t: '還付を待つ', d: '払い過ぎた税金があれば、後日、指定した口座に振り込まれます。領収書は提出不要ですが、5年間の保管が必要です。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-4 bg-white" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-sm mb-1" style={{ color: '#F57C00' }}>{item.n}｜{item.t}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.d}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        申告の時期は、原則として翌年の2月16日〜3月15日ごろですが、<strong>払い過ぎた税金を返してもらうための「還付申告」なら、その年の翌年1月1日から5年間さかのぼって行えます</strong>。つまり、「去年、申告し忘れた」という年のぶんも、まだ間に合う可能性が高いということ。なお、すでにその年の確定申告を済ませている方が、あとから医療費控除を加える場合は「更正の請求」という別の手続きになります（こちらも5年以内）。どちらに当たるかは税務署で教えてもらえます。ここは細かい日付や手続き名を暗記しなくて大丈夫。「困ったら、まず税務署か市区町村に相談」——それだけ覚えておけば、あとは順番に教えてもらえます。
      </p>

      {/* H2-7 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        申告のときに気をつけたい3つのこと
      </h2>
      <p className="text-base mb-6">
        最後に、つまずきやすいポイントを3つだけ。どれも「知っていれば慌てずにすむ」話です。肩の力を抜いて読んでください。
      </p>
      <div className="space-y-4 mb-8">
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>① 保険金などで戻った分は差し引く</p>
          <p className="text-base">高額療養費（医療費が高額になったとき、あとで一部が戻る公的制度）や、生命保険・医療保険の給付金など、あとから戻ってきたお金は、その対象になった医療費から差し引いて計算します。「かかった額まるごと」ではない点に注意してください。</p>
        </div>
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>② 日常生活のための費用は対象外</p>
          <p className="text-base">施設での理美容代、個人の希望で頼む特別なサービス、紙おむつでも条件を満たさないものなどは、医療費控除の対象になりません。「治療や療養のために必要か」が線引きの目安です。</p>
        </div>
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>③ 迷ったら税務署・市区町村・税理士に確認</p>
          <p className="text-base">対象になるかどうかは、サービスの中身や書類の有無で変わります。判断に迷う場合は、自己流で決めず、お住まいの地域を管轄する税務署や市区町村の窓口に確認すると安心です。相談は無料で受け付けています。</p>
        </div>
      </div>
      <p className="text-base mb-8">
        なお、医療費控除とは別に、対象の市販薬を一定額買った場合に使える「セルフメディケーション税制」という仕組みもあります。<strong>医療費控除とセルフメディケーション税制は、どちらか一方しか選べません</strong>。介護でまとまった費用がかかっている年は、医療費控除のほうが向いていることが多いですが、両方をざっと計算して有利なほうを選ぶと、ムダがありません。介護保険でカバーしきれない出費全般は
        <Link href="/insurance-gap" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護保険でカバーされない費用」</Link>
        も参考になります。
      </p>

      {/* 体験談 */}
      <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base mb-2"><strong>📖 私たちのケースでは（編集部・架空の体験談）</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          父が老健に入っていた年、正直、医療費控除なんて頭にありませんでした。「施設代は医療費とは違うだろう」と思い込んでいたんです。でも、確定申告の時期に区役所の相談会でたずねたら、「老健の領収書、医療費控除の対象額が書いてありますよ」と教えてもらって、びっくりしました。
          あわてて1年分の領収書と、母のおむつ代のレシートをかき集めて、証明書も先生に書いてもらいました。作業は面倒でしたが、後日いくらか還付があって、「聞いてみてよかった」と心から思いました。
          もし何も知らないままだったとしても、それは仕方のないこと。制度は複雑ですし、介護で手一杯のなかで全部を把握するのは難しいものです。大事なのは、いま「そういう仕組みがあるんだ」と知っておくこと。それだけで、次の一歩は踏み出しやすくなります。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記は制度の使い方を分かりやすく伝えるための編集部による架空のエピソードです。個人の感想であり、同じ結果を保証するものではありません。</p>
      </div>

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
          まとめ：介護の医療費控除は「知っておく」だけで、あとが楽になる
        </h2>
        <p className="text-base mb-3">
          介護の医療費控除は、少し手間はかかるものの、<strong>知っておくと、あとで慌てずにすむ</strong>仕組みです。「うちは関係なさそう」と思っていた費用が、実は対象だった——そんなケースは珍しくありません。いま知っておけば、これからのぶんにしっかり間に合います。
          完璧を目指さなくて大丈夫。まずは1年分の領収書を、ひとつの箱にまとめるところから始めてみてください。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            '医療費控除は、年間の医療費が原則10万円（総所得200万円未満は5%）を超えた分が対象',
            '施設は種類で扱いが違う。特養は自己負担の2分の1、老健・介護医療院は全額が目安（2025年時点）',
            '在宅は「医療系」サービスが対象。おむつ代・通院交通費も条件つきで対象になる',
            '手続きは確定申告。申告し忘れた年も5年前までさかのぼれる',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          今日できるのは、大きな手続きではなく小さな一歩で十分です。「領収書をまとめておく」「施設や税務署に一度たずねてみる」——それだけで、あとから慌てずにすみます。焦らず、いっしょに進んでいきましょう。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/cost', label: '老人ホームの費用・料金の相場をタイプ別に解説', icon: '💰' },
          { href: '/post-admission-money', label: '入居後のお金の管理｜成年後見・財産管理のステップ', icon: '💴' },
          { href: '/insurance-usage-guide', label: '介護保険の使い方完全ガイド｜申請から給付まで', icon: '📝' },
          { href: '/insurance-gap', label: '介護保険でカバーされない費用', icon: '🔍' },
          { href: '/retirement-cost', label: '老後資金・介護費用の試算', icon: '📊' },
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
        医療費控除の話を読み終えて、次にできる一番確実な一歩は、<strong>お住まいの税務署や市区町村の無料相談に、一度たずねてみること</strong>です。国税庁の「確定申告書等作成コーナー」で、実際にいくら戻りそうか試算してみるのもおすすめ。急いで何かを決める必要も、いまのやり方を否定する必要もありません。あわせて、施設の費用そのものが気になるときは、無料で相談できる窓口を頼ってみるのも一つの手です。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        ※本ページにはアフィリエイト広告を含みます。費用・サービス内容・対応エリアなどを比較し、ご家族の状況に合った選択にお役立てください。
      </p>

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は、介護に関する医療費控除の一般的な情報をまとめたものです。特定の申告による還付や節税の結果を保証・推奨するものではありません。
          医療費控除の対象範囲・金額・必要書類・手続きは、施設の種類やサービス内容、お住まいの地域、その年の所得や制度改正によって異なる場合があります。おむつ代・通院交通費・在宅サービスなどの取り扱いには、証明書の要否をはじめ細かな要件があり、実際の適用は個々の状況によって変わります。
          税制・手続きに関する記述は2025年時点の一般的な情報であり、最新の内容は国税庁・お住まいの税務署・市区町村の情報をご確認ください。
          実際のご申告にあたっては、お住まいの地域を管轄する税務署、お住まいの市区町村、税理士などの専門窓口にご相談のうえ、ご本人とご家族の状況に合わせてご判断ください。
        </p>
      </div>
    </>
  )
}
