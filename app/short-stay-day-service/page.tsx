import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'ショートステイとデイサービスの違い・使い方',
  description: 'ショートステイ（短期入所）とデイサービス（通所介護）の違い・費用・使い分けをやさしく解説。在宅介護と施設の「中間の選択肢」として、家族が無理なく続けるための組み合わせ方や介護保険の使い方を先輩家族の視点でまとめました。',
  alternates: {
    canonical: 'https://2ndhappiness.com/short-stay-day-service',
  },
  openGraph: {
    title: 'ショートステイ・デイサービスの賢い使い方｜在宅と施設の中間活用',
    description: '短期入所（ショートステイ）と通所介護（デイサービス）の違い・費用・組み合わせ方を、在宅介護を無理なく続けるための「中間の選択肢」としてやさしく解説します。',
    url: 'https://2ndhappiness.com/short-stay-day-service',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
    publishedTime: '2026-07-07T05:00:00+09:00',
  },
}

const summaryItems = [
  'デイサービスは<mark class="highlight">日帰りで通う</mark>介護サービス、ショートステイは<mark class="highlight">数日〜短期間だけ泊まる</mark>サービスです',
  'どちらも介護保険の<mark class="highlight">居宅サービス（自宅で暮らす方が使うサービス）</mark>。自己負担は所得に応じて<mark class="highlight">1〜3割</mark>（食費・滞在費は別途／2025年時点）',
  '「在宅か施設か」で迷う前に、<mark class="highlight">在宅を続けながら家族が一息つく</mark>ための中間の選択肢になります',
  'ショートステイは<mark class="highlight">連続30日まで</mark>などの目安があり、まずは<mark class="highlight">ケアマネージャーに相談</mark>して計画に組み込むのが近道です',
]

const compareRows = [
  {
    axis: '使い方',
    icon: '🕒',
    day: '朝から夕方など、日帰りで施設に通う（宿泊はしない）',
    short: '施設に数日〜短期間だけ宿泊して過ごす',
  },
  {
    axis: '正式名称',
    icon: '📖',
    day: '通所介護（デイサービス）／地域密着型通所介護など',
    short: '短期入所生活介護（生活型）／短期入所療養介護（医療型）',
  },
  {
    axis: '主な目的',
    icon: '🎯',
    day: '入浴・食事・機能訓練・他者との交流。日中の見守り',
    short: '家族が休む・用事のときの宿泊。生活リズムの維持',
  },
  {
    axis: '向いている場面',
    icon: '🌿',
    day: '日中ひとりにするのが心配、外出や会話の機会をつくりたい',
    short: '家族の旅行・冠婚葬祭・体調不良、介護に疲れたとき',
  },
  {
    axis: '提供する場所',
    icon: '🏢',
    day: 'デイサービスセンター（通所介護の指定事業所）。特養・有料老人ホーム併設のものもある',
    short: '生活型は特養・ショート専用施設など／医療型は老健・介護医療院など',
  },
]

const faqItems = [
  {
    q: 'ショートステイとデイサービスは、どちらから使い始めればいいですか？',
    a: 'どちらが先という決まりはありませんが、多くのご家庭ではまず「デイサービス（日帰りで通う介護サービス）」から始めることが多いようです。日中の数時間を施設で過ごすことで、ご本人が場所やスタッフに慣れやすく、家族も少し休む時間を持てるからです。そのうえで、家族が旅行や用事で家を空けるとき、あるいは介護に疲れて数日ゆっくり休みたいときに「ショートステイ（短期間の宿泊）」を組み合わせていく——という順番が、無理がなく続けやすいと言われます。ただ、ご本人の状態やご家庭の事情によって合うやり方は変わります。担当のケアマネージャー（介護の計画を立て、調整してくれる専門職）に、いまいちばん困っていることを率直に伝えて、いっしょに順番を決めていくのが安心です。',
  },
  {
    q: 'ショートステイは何日くらい使えますか？',
    a: 'ショートステイ（短期入所）には、いくつかの利用日数の目安があります。よく言われるのが「連続して使えるのは原則30日まで」というもの。連続利用が30日を超えると、31日目は介護保険が使えず全額自己負担になります（いったん自宅へ戻れば、また利用できます）。もう一つ「要介護認定の有効期間のおおむね半数を超えない範囲で」という目安もありますが、これはケアプランを立てるうえでの目安で、実際に何日使えるかはケアマネージャーが調整してくれます（出典：厚生労働省 介護保険制度の概要／2025年時点）。また、介護保険で使えるサービス全体には、要介護度ごとに決まった1か月の上限枠（給付限度額）があり、ショートステイもこの枠の中で利用します。枠を超えて使った分は全額（10割）自己負担になる点だけ、頭の片隅に置いておくと安心です。実際に「うちは何日くらい使えるのか」は、ほかのサービスの利用状況とあわせて変わるため、ケアマネージャーに確認するのがいちばん確実です。数字はここでは読み飛ばして、「上限の目安があるんだな」とだけ覚えておけば十分です。',
  },
  {
    q: '要支援でもデイサービスやショートステイは使えますか？',
    a: 'はい、要支援の方にも利用できる仕組みがあります。ただし呼び名や制度の枠組みが少し変わります。デイサービスにあたるものは、要支援の方の場合「介護予防・日常生活支援総合事業（総合事業）」の通所型サービスとして、お住まいの市区町村ごとに提供されています。ショートステイも「介護予防短期入所生活介護（療養介護）」という予防向けの区分があります。要介護（要介護1〜5）の方が使う通常の通所介護・短期入所とは根拠となる区分が異なるため、利用できる内容や回数の考え方も変わってきます。少しややこしいところなので、「要支援でも使える道はある」とだけ受け止めて、詳しくはお住まいの地域包括支援センター（高齢者の暮らしを支える身近な相談窓口）やケアマネージャーに聞いてみてください。',
  },
  {
    q: 'ショートステイを使うのは、親を見捨てるようで気が引けます。',
    a: '「泊まりで預けるなんて、親を放り出すようで…」と後ろめたさを感じる方は、決して少なくありません。でも、どうかご自分を責めないでください。ショートステイは、介護を投げ出すための仕組みではなく、ご家族が倒れずに介護を続けていくための「休息（レスパイト）」の仕組みです。介護する人がしっかり眠り、心と体を回復させることは、めぐりめぐってご本人の暮らしの安心にもつながります。ずっと気を張り続けた家族が共倒れになってしまうより、ときどき専門職に頼って一息つきながら、長く関わり続ける——それも立派な介護のかたちです。迷う気持ちそのものが、ご家族を大切に思っている証拠です。「見捨てる」ではなく「みんなが続けられる形を選ぶ」と受け止めていただけたらと思います。',
  },
  {
    q: 'デイサービスやショートステイを使うには、何から始めればいいですか？',
    a: 'まず必要なのは「要介護認定（介護がどのくらい必要かを市町村が判定する手続き）」を受けていることです。まだの場合は、お住まいの市区町村の介護保険担当窓口や地域包括支援センターに相談すると、申請の流れを教えてもらえます。すでに認定を受けている方は、担当のケアマネージャーに「デイサービスを使ってみたい」「家族が休むためにショートステイを検討したい」と伝えてください。ケアマネージャーが、ご本人の状態やご家庭の希望に合わせてケアプラン（利用計画）を作り、施設の見学や予約の段取りをサポートしてくれます。いきなり全部を決める必要はありません。まずは「週1回のデイサービスだけ試してみる」といった小さな一歩からで大丈夫です。',
  },
]

export default function ShortStayDayServicePage() {
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
        path={'/short-stay-day-service'}
        title={'ショートステイ・デイサービスの賢い使い方｜在宅と施設の中間活用'}
        description={'短期入所（ショートステイ）と通所介護（デイサービス）の違い・費用・組み合わせ方を、在宅介護を無理なく続けるための「中間の選択肢」としてやさしく解説します。'}
        datePublished={'2026-07-07T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Breadcrumb items={[{ label: 'ショートステイ・デイサービスの使い方' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        ショートステイ・デイサービスの賢い使い方｜在宅と施設の中間活用
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年7月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">※本記事の制度・費用・サービス区分に関する記述は、厚生労働省・地域包括支援センターなどの公開情報を参考にしています（2025年時点）。費用やサービス内容は、地域・施設・ご本人の状態によって大きく異なります。</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          「まだ施設に入れるほどではない。でも、家族だけで毎日看るのは、正直しんどい」——在宅介護を続けているご家族から、いちばんよく聞く声です。
          仕事も、自分の暮らしもある。それでも親のことは心配で、気持ちも体も、少しずつすり減っていく。
        </p>
        <p className="text-base">
          そんなときに知っておきたいのが、<strong>デイサービスとショートステイ</strong>という「在宅と施設の中間」にある選択肢です。
          これは、施設への入居を決めることでも、介護から手を引くことでもありません。<strong>在宅を無理なく続けるために、専門職の手をちょっと借りる</strong>ための仕組みです。
          この記事では、二つの違いから使い分け、費用までを、順番にやさしく整理していきます。焦らず、気になるところから読んでください。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本記事は、ショートステイ（短期入所）・デイサービス（通所介護）に関する一般的な情報をまとめたものです。サービスの内容・費用・利用条件などは、事業者の種類やお住まいの地域、ご本人の状態によって異なります。具体的なご相談は、担当のケアマネージャー、お住まいの市区町村や地域包括支援センターなどの専門職にお寄せください。なお、本ページは広告（アフィリエイト）を含みます。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        ショートステイとデイサービスって何が違うの？
      </h2>
      <p className="text-base mb-4">
        「名前は聞くけれど、どう違うのかいまいち分からない」——よくある悩みです。ざっくり言うと、<strong>ちがいは「泊まるか、泊まらないか」</strong>。それだけ押さえれば、まずは十分です。
      </p>
      <p className="text-base mb-4">
        <strong>デイサービス（通所介護）</strong>は、朝から夕方などに施設へ<strong>日帰りで通う</strong>サービス。入浴や食事、機能訓練（体の動きや生活動作を保つための運動）、他の利用者との交流などを日中に受けて、夜は自宅に帰ります。送迎がついていることが多いのも特徴です。
      </p>
      <p className="text-base mb-4">
        一方の<strong>ショートステイ（短期入所）</strong>は、施設に<strong>数日〜短期間だけ泊まる</strong>サービス。家族が旅行や仕事で家を空けるとき、あるいは介護に疲れて少し休みたいときに、その間だけご本人を預かってもらえます。食事や入浴、日々の介助を専門職から受けながら、施設で過ごします。
      </p>
      <p className="text-base mb-6">
        どちらも、施設に「入居」するのとは違い、<strong>生活の拠点は自宅のまま</strong>。介護保険の「居宅サービス（自宅で暮らす人が使うサービス）」という点も共通しています。まずは早見表で全体像をつかみましょう。ここは横にスクロールできます。気になる行だけ見てもらえれば大丈夫です。
      </p>

      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-base" style={{ minWidth: '640px' }}>
          <thead>
            <tr style={{ background: 'linear-gradient(135deg, #1B5E37, #2E7D52)' }}>
              <th className="text-left px-4 py-3" style={{ color: '#fff', fontSize: '13px', width: '110px' }}>くらべる軸</th>
              <th className="text-left px-4 py-3" style={{ color: '#fff', fontSize: '13px' }}>🌞 デイサービス（通所介護）</th>
              <th className="text-left px-4 py-3" style={{ color: '#fff', fontSize: '13px' }}>🌙 ショートステイ（短期入所）</th>
            </tr>
          </thead>
          <tbody>
            {compareRows.map((r, i) => (
              <tr key={r.axis} style={{ background: i % 2 === 0 ? '#fff' : '#F9FBF9', borderTop: '1px solid #e5e7eb' }}>
                <td className="px-4 py-3 font-bold" style={{ color: '#2E7D52' }}>
                  <span style={{ marginRight: '4px' }}>{r.icon}</span>{r.axis}
                </td>
                <td className="px-4 py-3 text-sm" style={{ color: '#444', lineHeight: 1.7 }}>{r.day}</td>
                <td className="px-4 py-3 text-sm" style={{ color: '#444', lineHeight: 1.7 }}>{r.short}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base">
          💡 覚えておきたいのは、<strong>この二つは「どちらか一方」ではない</strong>ということ。
          ふだんは週に何回かデイサービスに通い、家族が休みたいときだけショートステイを挟む——というように、<strong>組み合わせて使う</strong>のがいちばん力を発揮します。詳しくは後半で紹介します。
        </p>
      </div>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        デイサービス（通所介護）はどんなサービス？
      </h2>
      <p className="text-base mb-4">
        まずはデイサービスから。日中の数時間を施設で過ごすことで、<strong>ご本人には生活の張りを、家族には自分の時間を</strong>——その両方をかなえやすいのがこのサービスです。
      </p>
      <p className="text-base mb-4">
        一日の過ごし方は施設によってさまざまですが、多くは送迎で施設に着いたあと、健康チェック、入浴、昼食、機能訓練やレクリエーション（体操・手芸・ゲームなど）を挟んで、夕方に自宅へ送り届けてもらう、という流れです。<strong>自宅ではむずかしい入浴を安全に済ませられる</strong>のも、家族にとって大きな助けになります。
      </p>
      <p className="text-base mb-4">
        認知症の方向けに少人数でていねいにケアを行う「認知症対応型通所介護」という区分もあります。慣れた顔ぶれのなかで穏やかに過ごせるよう配慮されており、認知症のケアについては
        <Link href="/dementia-care-basics" style={{ color: '#1A5E9E', fontWeight: 700 }}>「認知症ケアの基本」</Link>
        もあわせて参考になります。
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="rounded-xl p-6 bg-white border-2" style={{ borderColor: '#2E7D52' }}>
          <h3 className="text-lg font-bold mb-3" style={{ color: '#2E7D52' }}>🌿 うれしいところ</h3>
          <ul className="space-y-2">
            {[
              '入浴・食事・機能訓練を専門職の見守りのもとで受けられる',
              '同世代との交流やレクリエーションで、生活に張りが出やすい',
              '日中ひとりにする心配が減り、家族が仕事や休息にあてられる',
              '送迎があるので、通いの負担が少なくてすむことが多い',
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ lineHeight: 1.7 }}>
                <span style={{ color: '#2E7D52', flexShrink: 0 }}>◯</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl p-6 bg-white border-2" style={{ borderColor: '#F57C00' }}>
          <h3 className="text-lg font-bold mb-3" style={{ color: '#E65100' }}>🍃 気にかけたいところ</h3>
          <ul className="space-y-2">
            {[
              '最初は「行きたくない」と気が進まない方もいる（慣れに時間がかかることがある）',
              '施設ごとに雰囲気やプログラムが異なるため、見学で相性を確かめたい',
              '利用日数や時間は、ケアプランと給付限度額の枠の中で調整する',
              '夜間や泊まりの見守りには対応していない（そこはショートステイの役割）',
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ lineHeight: 1.7 }}>
                <span style={{ color: '#E65100', flexShrink: 0 }}>△</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-base mb-8">
        「本人が乗り気じゃなくて…」という声もよく聞きます。でも、最初は渋っていた方が、通ううちにお友だちができて楽しみに変わる、というのはよくある話。焦らず、まずは<strong>週1回のお試しから</strong>で大丈夫です。合わなければ別の施設に変えることもできます。
      </p>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        ショートステイ（短期入所）はどんなサービス？
      </h2>
      <p className="text-base mb-4">
        次はショートステイ。ひとことで言えば、<strong>「家族がひと息つくための、短期間のお泊まり」</strong>です。ご本人にとっては生活リズムを保つ場に、家族にとっては休息の時間になります。
      </p>
      <p className="text-base mb-4">
        ショートステイには、大きく二つの種類があります。生活の介助を中心とする「<strong>短期入所生活介護</strong>」（特別養護老人ホームなどが提供）と、医療的なケアやリハビリにも対応する「<strong>短期入所療養介護</strong>」（介護老人保健施設や介護医療院などが提供）です。持病があって医療面の見守りが必要な場合は、後者が候補になります。少し専門的なので、「泊まりにも“生活型”と“医療型”があるんだな」とだけ覚えておけば十分です。
      </p>
      <p className="text-base mb-4">
        使いどきは、たとえばこんな場面です。<strong>家族の旅行・出張・冠婚葬祭で家を空けるとき、家族自身が体調をくずしたとき、そして「少し疲れたから数日ゆっくり休みたい」とき。</strong>この「家族が休むために使う」という考え方を、介護の世界では<strong>レスパイトケア（介護する人が一息つくための休息）</strong>と呼びます。特別な理由がなくても、休むために使っていいものです。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#F3F8F5', border: '1px solid #2E7D52' }}>
        <p className="text-base mb-2" style={{ color: '#2E7D52', fontWeight: 700 }}>🛏️ 施設への「入居」との違い</p>
        <p className="text-base">
          ショートステイはあくまで<strong>短期間の宿泊</strong>で、生活の拠点は自宅のまま。「施設に入る前に、雰囲気を知る練習」として使う方もいます。もし在宅を続けるのがだんだん難しくなってきたと感じたら、そのときは
          <Link href="/care-timing" style={{ color: '#1A5E9E', fontWeight: 700 }}>「施設入居を考えるべきタイミング」</Link>
          や
          <Link href="/facility-vs-home-care" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホームと在宅介護の比較」</Link>
          も、落ち着いてから読んでみてください。今日すぐに決めなくて大丈夫です。
        </p>
      </div>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        費用はどれくらい？介護保険の使い方
      </h2>
      <p className="text-base mb-4">
        いちばん気になるお金の話です。ここは少しややこしいので、<strong>太字の部分だけ拾ってもらえれば大丈夫</strong>。難しいと感じたら読み飛ばして、最後の「まとめ」の一行だけ覚えて帰ってください。
      </p>
      <p className="text-base mb-4">
        デイサービスもショートステイも、<strong>要介護認定（介護がどのくらい必要かを市町村が判定する手続き）</strong>を受けた方が使える介護保険のサービスです。介護サービス費の自己負担は、<strong>所得に応じて1割・2割・3割</strong>のいずれか（出典：厚生労働省 介護保険制度の概要／2025年時点）。多くの方は1割ですが、一定以上の所得がある方は2割・3割になります。「1割で済む」と一般化せず、ご自身の区分を確認しておくと安心です。
      </p>
      <p className="text-base mb-4">
        ここで一つ大事な注意点。介護保険で使えるサービスには、<strong>要介護度ごとに決まった1か月の上限枠（給付限度額。使えるサービスの月額の上限）</strong>があります。たとえば要介護3なら1か月あたり<strong>約27万円</strong>が上限の目安です（2025年基準・地域により多少前後します。出典：厚生労働省 介護保険制度の概要）。デイサービスもショートステイも訪問介護も、すべてこの<strong>同じ枠を分け合って</strong>使うイメージです。枠を超えて使った分は<strong>全額（10割）自己負担</strong>になり、この超過分は後述の高額介護サービス費でも戻りません。だからこそ「何をどれくらい使うか」の配分は、ケアマネージャーと相談しながら決めるのが安心です。
      </p>
      <p className="text-base mb-4">
        もう一つ。デイサービスの食費や、ショートステイの<strong>食費・滞在費（部屋代）は、介護サービス費とは別に自己負担</strong>になります。ただし、所得や資産が一定以下の方には、<strong>ショートステイや施設入所</strong>の食費・居住費を軽くする「<strong>特定入所者介護サービス費（補足給付）</strong>」という制度があります（この補足給付が対象とするのはショートステイ・施設入所の食費・居住費で、デイサービスの食事代は対象外です）。また、月々の介護サービスの自己負担が上限を超えた分が戻ってくる「<strong>高額介護サービス費</strong>」もあります（上限額は所得区分によって異なり、対象は介護サービスの自己負担分のみで、食費・居住費などは含まれません）。
      </p>
      <p className="text-base mb-8">
        「制度が多くて分からない」と感じても大丈夫。<strong>使える制度がないかを、ケアマネージャーや市区町村の介護保険担当窓口に一度確認する</strong>——それだけで十分です。介護保険の全体像は
        <Link href="/insurance-usage-guide" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護保険の使い方完全ガイド」</Link>
        、施設の費用相場は
        <Link href="/cost" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホームの費用相場」</Link>
        で詳しく解説しています。
      </p>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        どう組み合わせる？在宅を無理なく続けるための活用術
      </h2>
      <p className="text-base mb-4">
        ここがこの記事のいちばん伝えたいところです。デイサービスとショートステイは、単体でも役に立ちますが、<strong>組み合わせることで「家族だけで抱え込まない在宅」</strong>がぐっと現実的になります。
      </p>
      <p className="text-base mb-6">
        たとえば、こんな組み合わせ方があります。ご家庭の状況に近いものがあれば、ケアマネージャーに相談する際のヒントにしてください。
      </p>
      <div className="space-y-3 mb-8">
        {[
          { c: '#E8F5E9', b: '#2E7D52', t: '平日は週2〜3回デイサービスに通い、日中の見守りと入浴をおまかせ。家族は仕事や自分の時間を確保する' },
          { c: '#E3F2FD', b: '#1A5E9E', t: '月に数日ショートステイを定期的に入れて、家族がまとまって休む日をあらかじめ作っておく' },
          { c: '#FFF3E0', b: '#F57C00', t: '家族の旅行・法事・入院などの予定に合わせて、その期間だけショートステイでご本人を預かってもらう' },
          { c: '#F3E5F5', b: '#7B4A9E', t: '訪問介護（ヘルパー）も加えて、通い・泊まり・訪問を組み合わせ、在宅の見守りを厚くする' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-4" style={{ background: item.c, border: `1px solid ${item.b}` }}>
            <p className="text-sm" style={{ color: '#333', lineHeight: 1.8 }}><strong>▶ </strong>{item.t}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        大切なのは、<strong>「無理が続きそうだな」と感じる前に、休む予定を先に組み込んでおく</strong>こと。がんばりすぎて限界がきてから慌てるより、あらかじめ休息を計画に入れておくほうが、結果的に在宅を長く続けやすくなります。介護する側が疲れきってしまわないための工夫は
        <Link href="/caregiver-mental-care" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護する家族のメンタルケア」</Link>
        、在宅サービス全体の使い方は
        <Link href="/home-care" style={{ color: '#1A5E9E', fontWeight: 700 }}>「在宅介護のガイド」</Link>
        も参考にどうぞ。
      </p>

      {/* 体験談 */}
      <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base mb-2"><strong>📖 私たちのケースでは（編集部・架空の体験談）</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          父が要介護2になって在宅で看ていたころ、私はとにかく「休む」ことに罪悪感がありました。デイサービスも「かわいそう」と思って、なかなか踏み切れなくて。
          でも、ケアマネージャーさんに「お母さん（＝介護する私の母）が倒れたら元も子もないですよ」と言われて、思いきって週2回のデイと、月に一度のショートステイを入れてみたんです。
          最初は渋っていた父も、デイで囲碁仲間ができて、いまでは「今日は行く日か？」と自分から聞くように。母も、ショートの日にゆっくり眠れるようになって、表情がやわらかくなりました。休むことは、逃げることじゃなかったんだ、と今は思えます。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記はサービスの活用イメージを分かりやすく伝えるための編集部による架空のエピソードです。個人の感想であり、同じ結果を保証するものではありません。</p>
      </div>

      {/* H2-6 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        使うときに気をつけたい3つのこと
      </h2>
      <p className="text-base mb-6">
        最後に、実際に使い始める前に知っておくと安心なポイントを3つだけ。どれも「知らないと損」というより、<strong>「知っておくと慌てずにすむ」</strong>という程度のものです。肩の力を抜いて読んでください。
      </p>
      <div className="space-y-4 mb-8">
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>① ショートステイには利用日数の目安がある</p>
          <p className="text-base">連続して使えるのは原則30日まで（超えた分は介護保険が使えず全額自己負担）で、要介護認定の有効期間のおおむね半数を超えない範囲、という目安もあります。人気の施設は予約が埋まっていることもあるので、使いたい時期が見えてきたらケアマネージャーに一声かけておくと安心です。</p>
        </div>
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>② 給付限度額の枠を意識する</p>
          <p className="text-base">デイもショートも訪問も、同じ1か月の上限枠を分け合います。あれこれ増やしすぎると枠を超えて自己負担が増えることも。全体のバランスはケアプランで調整してもらえるので、心配なら遠慮なく確認しましょう。</p>
        </div>
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>③ 施設との相性は見学で確かめる</p>
          <p className="text-base">同じサービスでも、雰囲気やスタッフの関わり方は施設ごとに違います。可能なら見学や体験利用をしてから決めると、ご本人も家族も安心です。合わなければ変えられるので、最初の一つを気負わなくて大丈夫です。</p>
        </div>
      </div>
      <p className="text-base mb-8">
        これらは全部を一度に覚える必要はありません。<strong>まずは「ケアマネージャーに相談する」——今日はそれだけで十分</strong>です。ケアマネージャーとの関係づくりについては
        <Link href="/care-manager-relation" style={{ color: '#1A5E9E', fontWeight: 700 }}>「ケアマネージャーとの上手な付き合い方」</Link>
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
          まとめ：ショートステイ・デイサービスは「在宅を続けるための味方」
        </h2>
        <p className="text-base mb-3">
          デイサービスとショートステイは、「施設に入れるかどうか」を決める前に使える、<strong>在宅と施設の中間の選択肢</strong>です。うまく組み合わせれば、ご本人の暮らしを支えながら、家族も無理なく介護を続けやすくなります。
          休むことは、逃げることでも、親を見捨てることでもありません。むしろ、長く関わり続けるための大切な準備です。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            'デイサービスは「日帰りで通う」、ショートステイは「短期間泊まる」サービス',
            'どちらも介護保険の居宅サービス。自己負担は所得に応じて1〜3割（食費・滞在費は別途／2025年時点）',
            '「通い・泊まり・訪問」を組み合わせ、疲れる前に休む予定を先に入れておく',
            'まずはケアマネージャーに相談。週1回のお試しから始めれば十分',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          今日できるのは、大きな決断ではなく小さな一歩で十分です。「デイを使ってみたい」とケアマネージャーに一言伝える——それだけで、道は少しずつ開けていきます。焦らず、いっしょに進んでいきましょう。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/home-care', label: '在宅介護を続けるためのサービス活用ガイド', icon: '🏠' },
          { href: '/facility-vs-home-care', label: '老人ホームと在宅介護の比較｜7つの判断軸', icon: '⚖️' },
          { href: '/caregiver-mental-care', label: '介護する家族のメンタルケア｜燃え尽き対策', icon: '💚' },
          { href: '/insurance-usage-guide', label: '介護保険の使い方完全ガイド｜申請から給付まで', icon: '📝' },
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

      {/* CTA前のクッション（寄り添い） */}
      <p className="text-base mb-2" style={{ lineHeight: 1.9 }}>
        どのサービスを、どれくらい使えばいいのか——迷っていても大丈夫です。まずは「こんな制度があるんだ」と知っておくだけでも、心の余裕につながります。
        知ることは、急いで契約することでも、いまの介護を否定することでもありません。気軽に、情報を集めるところから始めてみてください。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        ※本ページにはアフィリエイト広告を含みます。費用・サービス内容・対応エリアなどを比較し、ご家族の状況に合った選択にお役立てください。
      </p>

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は、ショートステイ（短期入所生活介護・短期入所療養介護）およびデイサービス（通所介護）に関する一般的な情報をまとめたものです。特定のサービス利用による効果や結果を保証・推奨するものではありません。
          サービスの内容・費用・利用日数・利用条件などは、事業者の種類（特別養護老人ホーム・介護老人保健施設・介護医療院・有料老人ホームなど）や個々の事業者、お住まいの地域、ご本人の状態、時期によって異なる場合があります。
          制度や費用に関する記述は2025年時点の一般的な情報であり、最新の内容は厚生労働省・お住まいの市区町村の情報をご確認ください。
          実際のご利用にあたっては、担当のケアマネージャー、お住まいの市区町村や地域包括支援センターなどの専門職にご相談のうえ、ご本人とご家族の状況に合わせてご判断ください。
        </p>
      </div>
    </>
  )
}
