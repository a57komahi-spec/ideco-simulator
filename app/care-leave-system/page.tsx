import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '介護休業・介護休暇の使い方と違い',
  description: '介護休業（通算93日・給付金は賃金の約67%）と介護休暇（年5日）の違い・使い方・申請の流れを、働きながら介護を続けたいご家族の視点でやさしく解説。2025年の法改正のポイントや、時短勤務・テレワークなど両立支援制度もまとめました。',
  alternates: {
    canonical: 'https://2ndhappiness.com/care-leave-system',
  },
  openGraph: {
    title: '介護休業・介護休暇の使い方｜働きながら介護を続けるために',
    description: '介護休業（通算93日・給付金は賃金の約67%／上限あり）と介護休暇（年5日）の違い・申請の流れ・2025年改正のポイントを、仕事と介護を両立したいご家族の視点でやさしく整理しました。',
    url: 'https://2ndhappiness.com/care-leave-system',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
    publishedTime: '2026-07-09T05:00:00+09:00',
  },
}

const summaryItems = [
  '介護休業は<mark class="highlight">対象家族1人につき通算93日まで（3回まで分割可）</mark>まとまって休める制度。介護休暇は<mark class="highlight">年5日（家族2人以上は年10日）</mark>の短い休みです',
  '介護休業中は、雇用保険から<mark class="highlight">休業前賃金のおよそ67%</mark>の「介護休業給付金」が受け取れます（要件あり／2025年時点）',
  '休む以外にも、<mark class="highlight">残業免除・時短勤務・テレワーク</mark>など「働き方を変えて続ける」選択肢があります',
  '制度でいう「介護が必要な状態」は<mark class="highlight">市町村の要介護認定を受けていなくても当てはまる場合がある</mark>（別の基準です）。まずは<mark class="highlight">会社の人事・総務に相談</mark>するのが近道です',
]

const compareRows = [
  {
    axis: '目的',
    icon: '🎯',
    kyugyo: '介護の体制を整えるためのまとまった休み（施設探し・在宅準備など）',
    kyuka: '通院の付き添い・手続きなど、単発の用事に対応する短い休み',
  },
  {
    axis: '日数の目安',
    icon: '📅',
    kyugyo: '対象家族1人につき通算93日まで（3回まで分けて取得可）',
    kyuka: '年5日まで（対象家族が2人以上なら年10日まで）',
  },
  {
    axis: '取り方',
    icon: '🕒',
    kyugyo: 'まとまった日数を連続または分割で取得',
    kyuka: '1日単位、または時間単位で取得できる',
  },
  {
    axis: 'お金（給付）',
    icon: '💴',
    kyugyo: '雇用保険から「介護休業給付金」（賃金の約67%）が出る場合がある',
    kyuka: '給付金の対象外（有給か無給かは会社の規定による）',
  },
  {
    axis: 'こんなときに',
    icon: '🌿',
    kyugyo: '介護が始まった直後、体制づくりに時間をかけたいとき',
    kyuka: 'ケアマネとの面談、役所の手続き、急な通院などのとき',
  },
]

const faqItems = [
  {
    q: '介護休業と介護休暇は、どう使い分ければいいですか？',
    a: 'ざっくり言うと、「まとまって休みたいか」「ちょっとだけ休みたいか」で分けて考えると分かりやすいです。介護休業は、対象家族1人につき通算93日まで取れる長めの休みで、介護が始まった直後に施設を探したり、在宅の体制を整えたりと、腰を据えて準備をしたいときに向いています。一方の介護休暇は、年5日（対象家族が2人以上なら年10日）まで取れる短い休みで、ケアマネージャー（介護の計画を立てる専門職）との面談、役所での手続き、急な通院の付き添いなど、単発の用事に使うイメージです。介護休暇は1日単位だけでなく時間単位でも取れるので、「午前中だけ抜けたい」というときにも使いやすくなっています。どちらも併用できますので、状況に合わせて組み合わせて大丈夫です（出典：厚生労働省 育児・介護休業法／2025年時点）。',
  },
  {
    q: '介護休業を取ると、給料はどうなりますか？',
    a: '介護休業中は、多くの会社で給与が支払われません（無給になるかどうかは会社の就業規則によります）。ただし、一定の要件を満たすと、雇用保険から「介護休業給付金」として、休業を始める前の賃金のおよそ67%にあたる金額を受け取れます。計算はおおまかに「休業開始時の賃金日額 × 休んだ日数 × 67%」です（上限額などの細かい条件があり、金額は人によって変わります）。ここは数字が細かいので、読み飛ばして「全額ではないけれど、収入の下支えがある」とだけ覚えておけば十分です。実際にいくら受け取れるか、申請の手続きをどうするかは、勤務先の人事・総務や、お住まいの地域を管轄するハローワークに確認するのが確実です（出典：厚生労働省 介護休業給付／2025年時点）。',
  },
  {
    q: 'パートや契約社員でも、介護休業は取れますか？',
    a: 'パートや契約社員などの有期雇用（期間の定めのある働き方）の方でも、一定の要件を満たせば介護休業を取得できます。かつては勤続年数などの条件がありましたが、法改正で緩和され、現在は「取得予定日から93日を経過する日から6か月を経過する日までに、労働契約が満了することが明らかでない」ことなどが主な条件とされています。少し表現がややこしいので、「契約社員やパートでも、続けて働く見込みがあれば対象になりうる」とだけ受け止めていただければ大丈夫です。ご自身が対象になるかどうかは、勤務先の人事・総務に確認するのがいちばん確実です。会社によっては、労使協定で対象外となる場合もあるため、まずは遠慮なく聞いてみてください。なお、休業を「取れること」と、介護休業給付金を「受け取れること」は別の話で、給付金は雇用保険に加入していることが前提です。加入状況もあわせて勤務先に確認しておくと安心です（出典：厚生労働省 育児・介護休業法／2025年時点）。',
  },
  {
    q: '「要介護状態」でないと制度は使えないのですか？介護認定が必要ですか？',
    a: 'ここは誤解が多いところなので、ていねいにお伝えします。介護休業・介護休暇でいう「要介護状態」とは、負傷・疾病・身体上もしくは精神上の障害により、2週間以上にわたって常時介護を必要とする状態を指します。これは、介護保険の「要介護認定（市町村が介護の必要度を判定する手続き）」とは別の基準です。つまり、介護保険の認定をまだ受けていなくても、この要件にあてはまれば制度を利用できる場合があります。「認定がないから使えない」とあきらめる前に、勤務先や、お住まいの地域包括支援センター（高齢者の暮らしを支える身近な相談窓口）に確認してみてください。判断に迷う場合も、まずは相談から始めれば大丈夫です（出典：厚生労働省 育児・介護休業法／2025年時点）。',
  },
  {
    q: '会社に介護のことを言い出しづらいのですが、どうすればいいですか？',
    a: 'そのためらい、とてもよく分かります。「評価に響くのでは」「迷惑をかけるのでは」と、言い出せずに一人で抱え込んでしまう方は少なくありません。でも、これらの制度は法律で定められた働く人の権利であり、介護を理由に取得を申し出たことで不利益な扱いをすることは、法律で禁止されています。2025年4月からは、介護に直面したことを会社に伝えた従業員へ、会社の側から制度を個別に案内し、利用の意向を確認することも義務づけられました。つまり、制度を使いやすくする流れが、法律の後押しで進んでいます。まずは信頼できる上司や人事・総務の担当者に、「実は親の介護が始まりそうで」と一言だけ相談してみてください。全部をきちんと説明できなくても大丈夫。あなたのペースで、共有できたときに、まわりも一緒に支える動きがしやすくなります。',
  },
]

export default function CareLeaveSystemPage() {
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
        path={'/care-leave-system'}
        title={'介護休業・介護休暇の使い方｜働きながら介護を続けるために'}
        description={'介護休業（通算93日・給付金67%）と介護休暇（年5日）の違い・申請の流れ・2025年改正のポイントを、仕事と介護を両立したいご家族の視点でやさしく整理しました。'}
        datePublished={'2026-07-09T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Breadcrumb items={[{ label: '介護休業・介護休暇の使い方' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        介護休業・介護休暇の使い方｜働きながら介護を続けるために
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年7月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">※本記事の制度・給付・手続きに関する記述は、厚生労働省（育児・介護休業法／介護休業給付）などの公開情報を参考にしています（2025年時点）。制度の細かな要件や金額は、勤務先の規定・お住まいの地域・時期によって異なる場合があります。</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          「親の介護が始まりそう。でも、仕事は辞められない」——ある日突然、そんな状況に立たされて、途方に暮れているご家族は少なくありません。
          休みをどう取ればいいのか、収入はどうなるのか、そもそも会社に言い出していいのか。分からないことばかりで、不安が一気に押し寄せてきますよね。
        </p>
        <p className="text-base">
          そんなときに知っておきたいのが、<strong>介護休業・介護休暇</strong>という、働きながら介護を続けるための仕組みです。
          これは特別な人だけのものではなく、<strong>働く人に法律で認められた権利</strong>。うまく使えば、仕事を手放さずに、介護の体制を整える時間をつくれます。
          この記事では、二つの制度の違いから、給付金、申請の流れ、2025年の法改正までを、順番にやさしく整理していきます。焦らず、気になるところから読んでください。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本記事は、介護休業・介護休暇をはじめとする仕事と介護の両立支援制度に関する一般的な情報をまとめたものです。制度の要件・給付額・手続きは、勤務先の就業規則やお住まいの地域、時期によって異なる場合があります。具体的なご相談は、勤務先の人事・総務、お住まいの地域を管轄するハローワーク、地域包括支援センターなどの専門窓口にお寄せください。なお、本ページは広告（アフィリエイト）を含みます。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        介護休業と介護休暇って、何が違うの？
      </h2>
      <p className="text-base mb-4">
        「名前が似ていて、どっちがどっちか分からない」——よくある悩みです。まず押さえたいのは、<strong>ちがいは「まとまって休むか、ちょっとだけ休むか」</strong>。ここだけ分かれば十分です。
      </p>
      <p className="text-base mb-4">
        <strong>介護休業</strong>は、<strong>対象家族1人につき通算93日まで</strong>取れる、まとまった休みです。介護が始まったばかりで、施設を探したり、在宅で看る体制を整えたりと、腰を据えて準備をしたいときに向いています。3回まで分けて取れるので、「最初に少し、あとで様子を見てまた少し」という使い方もできます。
      </p>
      <p className="text-base mb-4">
        一方の<strong>介護休暇</strong>は、<strong>年5日まで（対象家族が2人以上なら年10日まで）</strong>の短い休みです。ケアマネージャー（介護の計画を立て、調整してくれる専門職）との面談、役所での手続き、急な通院の付き添いなど、単発の用事に使います。1日単位だけでなく<strong>時間単位でも取れる</strong>ので、「午前中だけ抜けて、午後は出社」という使い方も可能です。
      </p>
      <p className="text-base mb-6">
        たとえるなら、介護休業が「体制を整えるためのまとまった時間」、介護休暇が「日々のこまごまとした用事のための細切れの時間」。二つは<strong>どちらか一方ではなく、併用できます</strong>。まずは早見表で全体像をつかみましょう。ここは横にスクロールできます。気になる行だけ見てもらえれば大丈夫です。
      </p>

      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-base" style={{ minWidth: '640px' }}>
          <thead>
            <tr style={{ background: 'linear-gradient(135deg, #1B5E37, #2E7D52)' }}>
              <th className="text-left px-4 py-3" style={{ color: '#fff', fontSize: '13px', width: '100px' }}>くらべる軸</th>
              <th className="text-left px-4 py-3" style={{ color: '#fff', fontSize: '13px' }}>🗓️ 介護休業（まとまった休み）</th>
              <th className="text-left px-4 py-3" style={{ color: '#fff', fontSize: '13px' }}>⏱️ 介護休暇（短い休み）</th>
            </tr>
          </thead>
          <tbody>
            {compareRows.map((r, i) => (
              <tr key={r.axis} style={{ background: i % 2 === 0 ? '#fff' : '#F9FBF9', borderTop: '1px solid #e5e7eb' }}>
                <td className="px-4 py-3 font-bold" style={{ color: '#2E7D52' }}>
                  <span style={{ marginRight: '4px' }}>{r.icon}</span>{r.axis}
                </td>
                <td className="px-4 py-3 text-sm" style={{ color: '#444', lineHeight: 1.7 }}>{r.kyugyo}</td>
                <td className="px-4 py-3 text-sm" style={{ color: '#444', lineHeight: 1.7 }}>{r.kyuka}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base">
          💡 覚えておきたいのは、<strong>これらは「介護保険」ではなく「働く人のための法律（育児・介護休業法）」の制度</strong>だということ。
          施設サービスや介護保険の給付とは別の仕組みで、勤務先を通じて使います。介護保険のほうの使い方は
          <Link href="/insurance-usage-guide" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護保険の使い方完全ガイド」</Link>
          で解説しています。
        </p>
      </div>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        介護休業とは？93日をどう使うかがカギ
      </h2>
      <p className="text-base mb-4">
        まずは介護休業から。ポイントは<strong>「93日をどう配分するか」</strong>です。この日数は「介護をぜんぶ自分でやりきる期間」ではなく、<strong>介護を続けられる体制をつくるための準備期間</strong>——そう考えると、使い道が見えてきます。
      </p>
      <p className="text-base mb-4">
        対象になるのは、<strong>要介護状態（けがや病気などで、2週間以上ずっと介護が必要な状態）にある対象家族</strong>を介護する人です。この「要介護状態」は、介護保険の要介護認定とは別の基準で、<strong>認定をまだ受けていなくても当てはまる場合があります</strong>（ただし「常時介護が必要か」には厚生労働省が示す判断のめやすがあり、該当するかは勤務先や労働局に確認すると安心です）。対象家族の範囲は、配偶者（事実婚を含む）、父母、子、配偶者の父母、祖父母、兄弟姉妹、孫。「同居していないと使えないのでは」と思われがちですが、別居の親のためにも取得できます。日数は対象家族1人につき通算93日で、<strong>最大3回まで分割</strong>できます。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#F3F8F5', border: '1px solid #2E7D52' }}>
        <p className="text-base mb-2" style={{ color: '#2E7D52', fontWeight: 700 }}>💴 気になるお金：介護休業給付金</p>
        <p className="text-base">
          介護休業中は、多くの会社で給与が支払われません（無給かどうかは会社の規定によります）。ただし、雇用保険の被保険者で一定の要件を満たすと、<strong>雇用保険から「介護休業給付金」として、休業前賃金のおよそ67%</strong>にあたる金額を受け取れます。
          計算はおおまかに「休業開始時の賃金日額（休む前の給料をざっくり1日あたりに直した額）× 休んだ日数 × 67%」で、賃金日額には上限があるため、高い収入の方は割合が実質67%より下がることもあります。数字が細かいので<strong>ここは読み飛ばしてOK</strong>、「全額ではないけれど、収入の下支えがある」とだけ覚えておけば十分です（出典：厚生労働省 介護休業給付／2025年時点）。
        </p>
      </div>
      <p className="text-base mb-4">
        「93日って、けっこう短いのでは」と感じた方もいるかもしれません。たしかに、この期間だけで介護のすべてを終えるのは現実的ではありません。だからこそ、介護休業は<strong>「自分ひとりで抱え込むための休み」ではなく、「ケアマネージャーを見つけ、サービスを整え、施設を検討する——そのための段取りの休み」</strong>と捉えるのがコツです。
      </p>
      <p className="text-base mb-8">
        この期間にやっておきたいことは、
        <Link href="/parents-support" style={{ color: '#1A5E9E', fontWeight: 700 }}>「親のためにやるべきこと完全ガイド」</Link>
        や
        <Link href="/care-manager-relation" style={{ color: '#1A5E9E', fontWeight: 700 }}>「ケアマネージャーとの上手な付き合い方」</Link>
        も参考になります。ひとつずつで大丈夫。全部を一度に片づけようとしなくて大丈夫です。
      </p>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        介護休暇とは？「ちょっとだけ休みたい」に応える制度
      </h2>
      <p className="text-base mb-4">
        次は介護休暇。こちらは<strong>「まる一日は休めないけれど、数時間だけ抜けたい」</strong>という、日々のこまごまとした場面で活躍します。介護が始まると、平日昼間にしかできない用事が驚くほど増えるものです。
      </p>
      <p className="text-base mb-4">
        取得できるのは、<strong>対象家族が1人なら年5日、2人以上なら年10日まで</strong>。1日単位でも、<strong>時間単位でも取得できます</strong>。たとえば「午前中だけ通院に付き添って、午後から出社する」「1時間だけ抜けて役所の手続きをする」といった柔軟な使い方ができます。
      </p>
      <p className="text-base mb-4">
        どんな用事に使えるのか、イメージしやすいように、よくある場面を挙げてみます。ご自身の状況に近いものがあれば、「これも休暇の対象になるんだ」と思い出してください。
      </p>
      <div className="space-y-3 mb-8">
        {[
          { c: '#E8F5E9', b: '#2E7D52', t: '病院の付き添い・診察の待ち時間（本人が一人では難しいとき）' },
          { c: '#E3F2FD', b: '#1A5E9E', t: 'ケアマネージャーとの面談、ケアプランの打ち合わせ' },
          { c: '#FFF3E0', b: '#F57C00', t: '要介護認定（介護がどのくらい必要かを市町村が判定する手続き）の申請、役所や地域包括支援センターでの手続き' },
          { c: '#F3E5F5', b: '#7B4A9E', t: '介護用品の購入、施設の見学、日常的な世話や見守り' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-4" style={{ background: item.c, border: `1px solid ${item.b}` }}>
            <p className="text-sm" style={{ color: '#333', lineHeight: 1.8 }}><strong>▶ </strong>{item.t}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        なお、介護休暇が有給か無給かは、<strong>会社の就業規則によって異なります</strong>（法律上は、賃金の支払いまでは義務づけられていません）。また、勤務日数が極端に少ない場合など、労使協定で対象外となることもあります。「無給だと使いにくいな」と感じるかもしれませんが、まずは<strong>自分の会社ではどういう扱いになっているのか</strong>を、就業規則や人事に確認するところから始めてみてください。介護休業給付金のような給付は介護休暇にはありませんが、細切れに休める柔軟さが、この制度のいちばんの価値です。
      </p>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        休むだけじゃない。「働き方を変えて続ける」制度たち
      </h2>
      <p className="text-base mb-4">
        介護と仕事の両立を支える仕組みは、休業・休暇だけではありません。<strong>「働きながら、負担を減らす」</strong>ための制度もいくつか用意されています。仕事を辞めるかどうかを考える前に、こうした選択肢があることを知っておくと、視野がぐっと広がります。
      </p>
      <div className="space-y-4 mb-8">
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>🕕 所定外労働の制限（残業の免除）</p>
          <p className="text-base">要介護状態の家族を介護する人が申し出れば、原則として残業（所定労働時間を超える労働）を免除してもらえます。「定時で帰れる」だけでも、夕方以降の介護にあてる時間が生まれます（勤続期間などにより労使協定で対象外となる場合や、事業の運営を妨げる場合の例外もあります）。</p>
        </div>
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>🌙 時間外労働・深夜業の制限</p>
          <p className="text-base">残業時間そのものに上限（1か月24時間・1年150時間まで）を設けたり、深夜（夜10時〜朝5時）の勤務を免除してもらえたりする制度もあります。夜間の見守りが必要なご家庭では、心強い仕組みです（こちらにも申出の要件や例外があります）。</p>
        </div>
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>⏳ 短時間勤務など（所定労働時間の短縮等の措置）</p>
          <p className="text-base">勤務時間を短くする時短勤務、始業・終業時刻をずらす時差出勤、フレックスタイム、介護費用の助成など。会社はこれらのうち<strong>少なくとも一つ</strong>を用意する義務があります（すべてが選べるとは限らず、どれが使えるかは会社ごとに異なります）。まずはどの選択肢があるかを確認しましょう。</p>
        </div>
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>💻 テレワーク（在宅勤務）</p>
          <p className="text-base">2025年の法改正で、介護をする人がテレワークを選べるようにする措置が、会社の努力義務になりました。通勤時間がなくなるだけでも、介護に向き合う余裕は大きく変わります。</p>
        </div>
      </div>
      <p className="text-base mb-8">
        大切なのは、<strong>「休む」か「辞める」かの二択で考えないこと</strong>。これらの制度を組み合わせれば、働き続けながら介護に向き合う道が、思っているより多くあります。仕事を辞める前に知っておきたいことは
        <Link href="/care-resignation" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護離職のリアル｜辞める前に知っておくべきこと」</Link>
        にもまとめています。
      </p>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        いつ、どうやって申請するの？手続きの流れ
      </h2>
      <p className="text-base mb-4">
        制度は分かっても、「実際どう申し込むの？」が分からないと、一歩が踏み出せませんよね。ここでは、介護休業を例に、大まかな流れを見てみましょう。難しく考えなくて大丈夫、基本は<strong>「会社に申し出る」</strong>ことから始まります。
      </p>
      <div className="space-y-3 mb-8">
        {[
          { n: 'STEP 1', t: 'まずは相談', d: '上司や人事・総務に「親の介護が始まりそう」と伝える。この段階では、きちんと説明できなくて大丈夫です。' },
          { n: 'STEP 2', t: '会社に申し出る', d: '介護休業は、原則として休業開始の2週間前までに会社へ申し出ます。書式や必要書類は会社に確認しましょう。' },
          { n: 'STEP 3', t: '休業中の段取り', d: 'ケアマネージャー探し、要介護認定の申請、サービスや施設の検討など、体制づくりを進めます。' },
          { n: 'STEP 4', t: '給付金の申請', d: '介護休業給付金は、原則として会社を通じてハローワークに申請します。手続きの多くは会社がサポートしてくれます。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-4 bg-white" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-sm mb-1" style={{ color: '#F57C00' }}>{item.n}｜{item.t}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.d}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        「2週間前までに」など期日の目安はありますが、まずは<strong>早めに一声かけておく</strong>ことがなにより大切です。ここは細かい日数を暗記する必要はありません。「困ったら、まず会社と役所に相談」——それだけ覚えておけば、あとは順番に教えてもらえます。要介護認定の申請の流れは
        <Link href="/care-level" style={{ color: '#1A5E9E', fontWeight: 700 }}>「要介護度の違いと認定手続き」</Link>
        もあわせてどうぞ。
      </p>

      {/* H2-6 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        2025年の法改正で、何が変わった？
      </h2>
      <p className="text-base mb-4">
        仕事と介護の両立を支える制度は、少しずつ手厚くなっています。2025年（令和7年）4月には、育児・介護休業法が改正され、<strong>介護に直面した人が制度を使いやすくなる方向</strong>で見直されました。主なポイントを、やさしく整理します。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <ul className="space-y-3">
          {[
            '会社からの「個別の案内」が義務に：介護に直面したことを申し出た従業員へ、会社が介護休業などの制度を個別に説明し、利用の意向を確認することが義務づけられました。「制度を知らずに辞めてしまう」を防ぐための変更です。',
            '情報提供の充実：介護に直面する前の早い段階でも、両立支援制度についての情報を得やすくする取り組みが求められるようになりました。',
            'テレワークが努力義務に：介護をする人がテレワークを選べるようにする措置が、会社の努力義務になりました。',
          ].map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-base" style={{ lineHeight: 1.8 }}>
              <span style={{ color: '#1A5E9E', flexShrink: 0, fontWeight: 700 }}>◆</span><span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-base mb-8">
        ひとことで言えば、<strong>「介護を理由に、仕事を辞めなくてすむように」という後押しが強まった</strong>ということ。もし会社から案内がなくても、これらは働く人の権利ですから、遠慮せず自分から尋ねて大丈夫です（出典：厚生労働省 育児・介護休業法の改正について／2025年時点）。
      </p>

      {/* 体験談 */}
      <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base mb-2"><strong>📖 私たちのケースでは（編集部・架空の体験談）</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          母が脳梗塞で倒れたと連絡が来たとき、私は真っ先に「仕事を辞めなきゃ」と思いました。でも、上司に思いきって相談したら、「まず介護休業を使ったら？」と教えてもらえたんです。それまで、制度の存在すら知りませんでした。
          結局、最初に3週間ほど休業を取って、その間にケアマネージャーさんを見つけ、デイサービスの手配を整えました。給付金は休業のあとにまとめて振り込まれる形でしたが、後から下支えがあると分かっているだけで、収入の不安は少しやわらぎました。
          いまは時短勤務に切り替えて、なんとか仕事を続けられています。まず相談してみて、本当によかったと思っています。もし別の選択をしていたとしても、それはそのときの精一杯だったはず。大事なのは、いま使える手を一つずつ知っていくことなのだと感じます。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記は制度の使い方を分かりやすく伝えるための編集部による架空のエピソードです。個人の感想であり、同じ結果を保証するものではありません。</p>
      </div>

      {/* H2-7 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        制度を使うときに、心にとめておきたいこと
      </h2>
      <p className="text-base mb-6">
        最後に、これらの制度と向き合ううえで、肩の力が抜けるような考え方を3つだけお伝えします。どれも「こうしなきゃ」ではなく、<strong>「こう思っていいんだ」</strong>という話です。
      </p>
      <div className="space-y-4 mb-8">
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>① 制度を使うのは、権利であって「甘え」ではない</p>
          <p className="text-base">介護休業も介護休暇も、働く人に法律で認められた権利です。取得を申し出たことで不利益な扱いをすることは、法律で禁止されています。「迷惑では」と気を張りすぎず、堂々と使って大丈夫です。</p>
        </div>
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>② 休業は「介護の準備期間」と考える</p>
          <p className="text-base">93日で介護を終わらせる必要はありません。この時間で専門職とつながり、使えるサービスを整えておくと、その後がぐっと楽になります。自分ひとりで抱え込まない仕組みを、この期間につくりましょう。</p>
        </div>
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>③ 施設という選択肢も、並行して考えていい</p>
          <p className="text-base">在宅で看ることも、施設を頼ることも、どちらも大切な家族への向き合い方です。休業中に施設を見学しておくと、いざというときの選択肢が広がります。「入れる」ではなく「みんなが続けられる形を選ぶ」——そう捉えてみてください。</p>
        </div>
      </div>
      <p className="text-base mb-8">
        ここまで読んで、まだ迷っていても大丈夫です。全部を一度に決める必要はありません。<strong>今日できるのは、「制度があると知る」ことと、「まず誰かに相談してみる」こと</strong>。それだけで、十分に大きな一歩です。介護と仕事で心がすり減らないための工夫は
        <Link href="/caregiver-mental-care" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護する家族のメンタルケア」</Link>
        も参考になります。
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
          まとめ：介護休業・介護休暇は「働きながら介護を続ける」ための味方
        </h2>
        <p className="text-base mb-3">
          介護休業と介護休暇は、仕事を手放さずに介護と向き合うための、心強い仕組みです。「休む」か「辞める」かの二択で悩む前に、まずは<strong>使える制度があることを知る</strong>——それだけで、気持ちは少し軽くなります。
          制度を使うことは、逃げでも甘えでもありません。長く介護を続けていくための、大切な準備です。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            '介護休業は通算93日（3回まで分割可）のまとまった休み。給付金は賃金の約67%（2025年時点）',
            '介護休暇は年5日（家族2人以上は年10日）の短い休み。時間単位でも取れる',
            '残業免除・時短勤務・テレワークなど「働き方を変えて続ける」制度も併用できる',
            'まずは会社の人事・総務に相談。要介護認定がなくても対象になる場合がある',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          今日できるのは、大きな決断ではなく小さな一歩で十分です。「実は介護が始まりそうで」と、信頼できる人に一言伝える——それだけで、道は少しずつ開けていきます。焦らず、いっしょに進んでいきましょう。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/care-resignation', label: '介護離職のリアル｜仕事を辞める前に知っておくべきこと', icon: '💼' },
          { href: '/caregiver-mental-care', label: '介護する家族のメンタルケア｜燃え尽き対策', icon: '💚' },
          { href: '/insurance-usage-guide', label: '介護保険の使い方完全ガイド｜申請から給付まで', icon: '📝' },
          { href: '/short-stay-day-service', label: 'ショートステイ・デイサービスの賢い使い方', icon: '🔄' },
          { href: '/care-manager-relation', label: 'ケアマネージャーとの上手な付き合い方', icon: '🤝' },
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
        仕事と介護、両方を抱えて「もう限界かも」と感じたら——ひとりで抱え込まず、頼れる先を知っておくだけでも、心の余裕は変わります。まずは「こんな制度やサービスがあるんだ」と知るところから。急いで契約する必要も、いまの働き方を否定する必要もありません。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        ※本ページにはアフィリエイト広告を含みます。費用・サービス内容・対応エリアなどを比較し、ご家族の状況に合った選択にお役立てください。
      </p>

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は、介護休業・介護休暇をはじめとする仕事と介護の両立支援制度（育児・介護休業法）に関する一般的な情報をまとめたものです。特定の制度利用による効果や結果を保証・推奨するものではありません。
          制度の要件・給付額・取得日数・申請方法などは、勤務先の就業規則や雇用保険の加入状況、お住まいの地域、時期によって異なる場合があります。介護休業給付金の支給要件・金額には上限などの細かな条件があり、実際の取り扱いは個々の状況によって変わります。
          制度や給付に関する記述は2025年時点の一般的な情報であり、最新の内容は厚生労働省・お住まいの都道府県労働局・ハローワークの情報をご確認ください。
          実際のご利用にあたっては、勤務先の人事・総務、お住まいの地域を管轄するハローワーク、地域包括支援センターなどの専門窓口にご相談のうえ、ご本人とご家族の状況に合わせてご判断ください。
        </p>
      </div>
    </>
  )
}
