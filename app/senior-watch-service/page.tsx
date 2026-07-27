import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '高齢者見守りサービスの選び方｜種類・費用・自治体支援',
  description: '高齢者見守りサービスの選び方を、種類・費用の目安・自治体の支援までやさしく整理しました。センサー型・カメラ型・緊急通報型・訪問型などの違い、離れて暮らす親に合うサービスの選び方、導入時の注意点まで、焦らず比べられるようまとめています。',
  alternates: {
    canonical: 'https://2ndhappiness.com/senior-watch-service',
  },
  openGraph: {
    title: '高齢者見守りサービスの選び方｜種類・費用・自治体支援の比較',
    description: '高齢者見守りサービスの選び方を、種類・費用の目安・自治体の支援までやさしく整理しました。センサー型・カメラ型・緊急通報型・訪問型などの違い、離れて暮らす親に合うサービスの選び方、導入時の注意点まで、焦らず比べられるようまとめています。',
    url: 'https://2ndhappiness.com/senior-watch-service',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
    publishedTime: '2026-07-23T05:00:00+09:00',
    images: [
      { url: 'https://2ndhappiness.com/images/hero.jpg', width: 1200, height: 630, alt: '高齢者見守りサービスの選び方｜種類・費用・自治体支援の比較' },
    ],
  },
}

const summaryItems = [
  '高齢者見守りサービスは、離れて暮らす親の<mark class="highlight">安否や暮らしの様子を、そばにいなくても確認できる</mark>仕組みです。種類は大きく5タイプに分かれます',
  '費用の目安は、月額<mark class="highlight">数百円〜5,000円程度</mark>のものが多く、機器の設置費が別途かかる場合もあります（あくまで目安・サービスや地域で異なります）',
  '<mark class="highlight">お住まいの市区町村</mark>にも、緊急通報システムや見守り訪問などの支援があることが多く、まず問い合わせてみる価値があります',
  '見守りは<mark class="highlight">「まだ元気なうち」から少しずつ</mark>で大丈夫。在宅を続けながら、施設という選択肢もあわてず一緒に考えていけます',
]

const typeItems = [
  {
    name: 'センサー型',
    icon: '📡',
    color: '#E8F5E9',
    border: '#2E7D52',
    label: '#2E7D52',
    how: '人の動きや、電気ポット・冷蔵庫の使用などを、部屋に置いたセンサーが感知します。一定時間反応がないと家族へ通知が届く仕組みです。',
    good: 'カメラのように「見られている」感覚が少なく、本人の抵抗感が小さめ。生活リズムのゆるやかな見守りに向きます。',
  },
  {
    name: 'カメラ型',
    icon: '📷',
    color: '#E3F2FD',
    border: '#1A5E9E',
    label: '#1A5E9E',
    how: '室内カメラの映像を、スマホなどで確認できます。会話ができるタイプもあります。',
    good: '様子を目で見て確認できる安心感が大きい反面、プライバシーへの配慮と本人の同意が特に大切です。',
  },
  {
    name: '緊急通報・ボタン型',
    icon: '🆘',
    color: '#FFF3E0',
    border: '#F57C00',
    label: '#E65100',
    how: '本人が体調不良のときにボタンを押すと、コールセンターや家族へ通報が届きます。ペンダント型・据え置き型などがあります。',
    good: '「もしものとき」に本人から助けを呼べる安心感。急な体調変化が心配な方に向きます。',
  },
  {
    name: '訪問・電話型',
    icon: '🤝',
    color: '#F3E5F5',
    border: '#8E24AA',
    label: '#7B1FA2',
    how: 'スタッフや配達員が定期的に訪問したり、電話・アプリで安否を確認したりします。郵便局や宅配・電力会社などが提供する例もあります。',
    good: '人とのつながりが生まれ、孤立を防ぎやすいのが特長。機械が苦手な方にもなじみやすい方法です。',
  },
  {
    name: '自治体・地域型',
    icon: '🏛',
    color: '#FCE4EC',
    border: '#C2185B',
    label: '#C2185B',
    how: '市区町村の緊急通報システムの貸与、民生委員・地域の見守り、配食サービスに安否確認を兼ねるものなど、地域ぐるみの仕組みです。',
    good: '費用がおさえられる、または無料の場合があるのが魅力。所得や要件で対象が決まることが多いので確認を。',
  },
]

const costItems = [
  { type: 'センサー型', monthly: '月額 約1,000〜5,000円', initial: '機器設置費 0〜数万円', note: '通知の回数や見守り範囲で変わります' },
  { type: 'カメラ型', monthly: '月額 0〜2,000円程度', initial: 'カメラ本体 数千〜2万円前後', note: '本体を買い切り、月額無料の製品もあります' },
  { type: '緊急通報・ボタン型', monthly: '月額 約1,000〜3,000円', initial: '0〜1万円程度', note: '自治体の貸与だと自己負担が軽い場合があります' },
  { type: '訪問・電話型', monthly: '月額 約1,000〜3,000円／訪問1回数百円〜', initial: '0円が中心', note: '訪問の頻度によって費用が変わります' },
  { type: '自治体・地域型', monthly: '無料〜低額（所得等で変動）', initial: '0円が中心', note: '対象要件・内容は市区町村で大きく異なります' },
]

const faqItems = [
  {
    q: '高齢者見守りサービスに、介護保険は使えますか？',
    a: '見守りサービスそのものは、原則として介護保険の給付（保険でまかなえるサービス）の対象外です。ただし、市区町村が独自に行う「緊急通報システムの貸与」や「見守り・安否確認事業」があり、こちらは所得などの要件を満たせば無料または低額で利用できることがあります。内容や対象は自治体ごとに大きく異なりますので、まずはお住まいの市区町村の高齢者福祉の窓口や、地域包括支援センター（高齢者の暮らし全般の相談窓口）に問い合わせてみるのがおすすめです。あわせて、介護保険で使えるサービスとの組み合わせについても、担当のケアマネジャー（介護の計画を立てる専門職）に相談すると、全体像が見えやすくなります。',
  },
  {
    q: '見守りカメラを付けたいのですが、親が嫌がりそうで悩んでいます。',
    a: '「見張られているようで嫌だ」と感じる方は少なくありません。まず大切なのは、本人の気持ちを置き去りにしないことです。「心配だから付ける」ではなく、「離れていても安心して暮らしてほしいから、一緒に方法を考えたい」と、目的を共有することから始めてみてください。カメラに抵抗があるなら、映像を映さないセンサー型や、本人がボタンを押す緊急通報型など、より負担の少ない方法もあります。玄関や台所だけなど、場所を限定する使い方もできます。本人が納得して選んだ見守りは、長続きしやすく、家族の安心にもつながります。急がず、話し合いながら進めて大丈夫です。',
  },
  {
    q: '見守りサービスを入れれば、事故や急病は防げますか？',
    a: '見守りサービスは、異変に早く気づく助けにはなりますが、事故や急病そのものを防いだり、安全を保証したりするものではありません。センサーやカメラは「いつもと違う様子」を知らせてくれる仕組みであり、その後に家族や関係機関がどう動くかがとても大切です。過信せず、「万一のときに気づける備えの一つ」と考えておくと、いざというときに落ち着いて対応できます。より手厚い見守りや介護が必要になってきたと感じたら、在宅サービスの強化や、施設への住み替えといった選択肢も、そのときに一緒に考えていけば十分です。',
  },
  {
    q: '離れて暮らす親に、まず何から始めればよいですか？',
    a: 'いきなり機器を選ぼうとすると迷ってしまうので、順番に進めるのがおすすめです。まずは、心配なことを書き出してみましょう。「転倒が不安」「食事をきちんと取れているか」「急な体調変化」など、心配の中身によって向いているサービスが変わります。次に、お住まいの市区町村や地域包括支援センターに、公的な見守り支援があるかを確認します。そのうえで、足りない部分を民間のサービスで補う、という順で考えると、費用も内容も納得しやすくなります。すべてを一度に決める必要はありません。今日は「心配ごとを一つ書き出す」だけでも、立派な一歩です。',
  },
]

export default function SeniorWatchServicePage() {
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
      { '@type': 'ListItem', position: 2, name: '高齢者見守りサービスの選び方', item: 'https://2ndhappiness.com/senior-watch-service' },
    ],
  }

  return (
    <>
      <ArticleJsonLd
        path={'/senior-watch-service'}
        title={'高齢者見守りサービスの選び方｜種類・費用・自治体支援の比較'}
        description={'高齢者見守りサービスの選び方を、種類・費用の目安・自治体の支援までやさしく整理しました。センサー型・カメラ型・緊急通報型・訪問型などの違い、離れて暮らす親に合うサービスの選び方、導入時の注意点まで、焦らず比べられるようまとめています。'}
        datePublished={'2026-07-23T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Breadcrumb items={[{ label: '高齢者見守りサービスの選び方' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        高齢者見守りサービスの選び方｜種類・費用・自治体支援の比較
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年7月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">参考：総務省消防庁の高齢者向け緊急通報システムに関する資料、厚生労働省の地域包括ケア・高齢者見守りに関する公的資料、各市区町村の高齢者福祉事業の案内をもとに、やさしい老人ホームガイド編集部が整理（2026年7月時点）</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          「離れて暮らす親が、ちゃんとごはんを食べているだろうか」——
          電話をかけてもすぐには出ないだけで、胸がざわつく。そんな経験のある方は、少なくないのではないでしょうか。
        </p>
        <p className="text-base">
          そばにいてあげられないことに、後ろめたさを感じる必要はありません。仕事や自分の家庭があるなかで、親のことを気にかけているだけで、あなたは十分に向き合っています。
          この記事では、<strong>離れていても親の暮らしをそっと見守れる「高齢者見守りサービス」の種類・費用・選び方</strong>を、やさしく整理しました。
          全部を今日決める必要はありません。読み終えるころに「これなら試せそう」と思える方法が一つ見つかれば、それで十分です。
        </p>
        <p className="text-base mt-3" style={{ color: '#1B5E37' }}>
          今日は「どんな種類があるか」だけ分かれば十分です。費用や自治体の支援の話は、気になったときにまた戻ってきてください。全部を一度に読み切らなくて大丈夫です。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本記事は高齢者見守りサービスの一般的な情報をまとめたもので、特定のサービスや結果・安全を保証するものではありません。サービス内容・費用・自治体の支援は、事業者や地域によって異なります。具体的な導入は各サービス提供者や、お住まいの市区町村・地域包括支援センターにご確認ください。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        高齢者見守りサービスとは？どんなときに考えるとよいの？
      </h2>
      <p className="text-base mb-4">
        高齢者見守りサービスとは、ひとことでいえば<strong>「そばにいなくても、親の安否や暮らしの様子をそっと確認できる仕組み」</strong>のことです。
        機械が動きを感知して知らせてくれるものから、人が定期的に訪ねてくれるものまで、いろいろな形があります。
      </p>
      <p className="text-base mb-4">
        イメージとしては、玄関先にそっと立って「今日も元気にしているかな」と気配をうかがってくれる、やさしいご近所さんのような存在に近いかもしれません。
        本人の自由な暮らしはそのままに、いざというときの「気づき」を増やしてくれる——それが見守りサービスの役割です。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base mb-2"><strong>こんなとき、見守りを考える方が多いようです</strong></p>
        <p className="text-base mb-1">・親が一人暮らし、または高齢夫婦だけで暮らしている</p>
        <p className="text-base mb-1">・実家と距離があり、すぐには様子を見に行けない</p>
        <p className="text-base mb-1">・最近、転倒や体調の変化が少し心配になってきた</p>
        <p className="text-base mb-3">・施設入居はまだ考えていないが、在宅の不安をやわらげたい</p>
        <p className="text-base" style={{ color: '#7a5c00' }}>——どれも「まだ元気だからこそ」始めやすいタイミングです。あわてて決めるものではなく、心の余裕をつくるための備えだと考えてください。もし、すでに転倒や介護が始まっているという方も、遅すぎることはありません。心配が芽生えた「今日」が、いちばん早い一歩です。</p>
      </div>
      <p className="text-base mb-4">
        大切なのは、見守りは<strong>「介護が必要になってから」ではなく、元気なうちから少しずつ</strong>始められるという点です。
        早めに仕組みを整えておくと、本人も家族も慣れる時間ができ、いざ心配ごとが増えたときにも落ち着いて対応できます。
      </p>
      <p className="text-base mb-8">
        なお、見守りサービスはあくまで「気づく」ための備えであって、それだけで在宅生活のすべての不安が消えるわけではありません。
        暮らしの様子を見ながら、在宅サービスの強化や、いずれの
        <Link href="/care-timing" style={{ color: '#1A5E9E', fontWeight: 700 }}>施設入居を考えるタイミング</Link>
        についても、そのときが来たら一緒に考えていけば大丈夫です。
      </p>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        見守りサービスにはどんな種類がある？5つのタイプで整理
      </h2>
      <p className="text-base mb-4">
        「見守りサービス」と一口に言っても、その中身はさまざまです。「種類が多すぎて、どれがどれだか分からない」——よく聞くお悩みです。
        でも、大きく分けると覚えるのは<strong>5タイプ</strong>だけ。まずはざっくり全体像をつかみましょう。
      </p>
      <div className="space-y-4 mb-6">
        {typeItems.map((t) => (
          <div key={t.name} className="rounded-xl p-5" style={{ backgroundColor: t.color, border: `2px solid ${t.border}` }}>
            <p className="font-bold text-lg mb-2" style={{ color: t.label }}>{t.icon} {t.name}</p>
            <div className="rounded-lg px-4 py-3 mb-2" style={{ backgroundColor: 'rgba(255,255,255,0.75)' }}>
              <p className="text-sm mb-1" style={{ lineHeight: 1.8 }}><strong>どんな仕組み？</strong>　{t.how}</p>
              <p className="text-sm" style={{ lineHeight: 1.8 }}><strong>向いている場面</strong>　{t.good}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-base mb-4">
        タイプは一つに絞る必要はありません。たとえば「ふだんはセンサーでゆるやかに見守り、もしものときは緊急通報ボタンで助けを呼べる」というように、
        <strong>複数を組み合わせる</strong>ことで、それぞれの弱点を補い合えます。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base mb-1"><strong>💡 選ぶときのヒント</strong></p>
        <p className="text-base">
          「何を心配しているか」で向いているタイプが変わります。急な体調変化が不安なら緊急通報型、生活リズムを知りたいならセンサー型、孤立が心配なら訪問・電話型、というように、心配ごとから逆算すると選びやすくなります。
        </p>
      </div>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        費用の目安はどのくらい？タイプ別の相場
      </h2>
      <p className="text-base mb-4">
        気になるのは、やはり費用ですよね。結論から言うと、<strong>月額は数百円〜5,000円程度</strong>のものが多く、そこに機器の設置費が加わる場合があります。
        ただし、これはあくまで大まかな目安です。サービスの内容・見守りの手厚さ・地域によって幅があるため、最終的には各サービスの見積もりで確認してください。
      </p>
      <div className="rounded-xl overflow-x-auto mb-4" style={{ border: '2px solid #2E7D52' }}>
        <table className="w-full border-collapse text-base">
          <thead>
            <tr style={{ background: '#E8F5E9' }}>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>タイプ</th>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>月額の目安</th>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>初期費用の目安</th>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>ひとことメモ</th>
            </tr>
          </thead>
          <tbody>
            {costItems.map((c, i) => (
              <tr key={c.type} style={{ background: i % 2 === 0 ? '#fff' : '#F9FBF9', borderTop: '1px solid #e5e7eb' }}>
                <td className="px-4 py-3 font-bold" style={{ color: '#2E7D52' }}>{c.type}</td>
                <td className="px-4 py-3 font-bold">{c.monthly}</td>
                <td className="px-4 py-3">{c.initial}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{c.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mb-4">※上記は編集部が一般的な傾向を整理した目安です。金額は各事業者・地域・プランによって大きく異なります。最新の料金は必ず各サービスの公式情報でご確認ください。</p>
      <p className="text-base mb-4">
        費用を考えるときのコツは、<strong>「月額」と「初期費用」を分けて見る</strong>ことです。これは、家を借りるときに「毎月の家賃」と「最初の敷金・礼金」を分けて考えるのに似ています。
        月額が安くても初期費用が高いもの、逆に本体を買えば月額無料になるものなど、組み合わせはさまざまです。
      </p>
      <p className="text-base mb-8">
        なお、次の章でふれるように、<strong>お住まいの市区町村の支援</strong>を使えば、費用をぐっとおさえられることもあります。民間サービスを検討する前に、まず公的な支援を確認しておくと、ムダなく選べます。
      </p>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        介護保険は使える？自治体・公的支援との関係
      </h2>
      <p className="text-base mb-4">
        「見守りにも介護保険が使えるの？」という質問はとても多いのですが、ここは少していねいに整理しておきましょう。
        結論から言うと、<strong>見守りサービスそのものは、原則として介護保険の給付（保険でまかなえるサービス）の対象外</strong>です。
        （※ここは制度の話で少し専門的なので、急がない方は結論だけで大丈夫です）
      </p>
      <p className="text-base mb-4">
        ただし、例外もあります。認知症の方が一人で外に出ようとしたり、ベッドから離れたりしたことを知らせる<strong>「認知症老人徘徊感知機器」</strong>のような一部の見守り機器は、要介護度などの条件を満たせば、介護保険の<strong>福祉用具貸与（介護に使う道具を保険を使って借りられる仕組み）</strong>の対象になる場合があります。自己負担は所得に応じて1〜3割です。ご本人が要介護認定を受けている場合は、こうした機器が保険で借りられないか、担当のケアマネジャーに確認してみるとよいでしょう。
      </p>
      <p className="text-base mb-4">
        一方で、<strong>市区町村が地域支援事業（介護保険の一環として市区町村が行う事業）や独自事業として行っている高齢者向けの支援</strong>には、見守りに関わるものがいくつもあります。代表的なのは次のようなものです。
      </p>
      <div className="space-y-3 mb-6">
        {[
          { q: '緊急通報システムの貸与', a: 'ボタンを押すと、あらかじめ決められた受付先（自治体によって、消防・民間のコールセンター＝24時間対応の受付センター・受信センターなど接続先は異なります）につながる装置を、市区町村が貸し出す制度です。一人暮らしの高齢者などが対象で、無料または低額で使えることがあります。総務省消防庁も、こうした緊急通報の取り組みを紹介しています。' },
          { q: '見守り・安否確認の訪問', a: '民生委員（民生委員法にもとづき、地域の相談役として厚生労働大臣から委嘱された人）や、自治体が委託した事業者が、定期的に声かけ・訪問をしてくれる仕組みです。' },
          { q: '配食サービスに安否確認を兼ねる', a: 'お弁当を手渡しで届ける際に、様子を確認してくれるサービス。食事の心配と見守りを一度にカバーできます。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1">🏛 {item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-4">
        これらの内容・対象・自己負担は、<strong>市区町村によって本当にさまざま</strong>です。所得や世帯の状況などの要件が設けられていることも多いので、「うちの親は対象になるかな」と気になったら、遠慮なく問い合わせてみてください。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#FFF3E0', border: '1px solid #F57C00' }}>
        <p className="text-base mb-2"><strong>まず相談したい窓口</strong></p>
        <p className="text-base mb-1">・<strong>市区町村の高齢者福祉の窓口</strong>：緊急通報・見守り事業などの案内</p>
        <p className="text-base mb-1">・<strong>地域包括支援センター</strong>：高齢者の暮らし全般をまとめて相談できる窓口。どこに聞けばいいか分からないときの最初の一歩に最適です</p>
        <p className="text-base">・<strong>担当のケアマネジャー</strong>（介護の計画を立てる専門職）：介護保険サービスとの組み合わせを相談</p>
      </div>
      <p className="text-base mb-8">
        介護保険の全体像や、要介護認定（介護がどのくらい必要かを市区町村が判定する手続き）の受け方をあわせて知りたい方は、
        <Link href="/insurance-usage-guide" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護保険の使い方完全ガイド」</Link>
        や
        <Link href="/care-manager-relation" style={{ color: '#1A5E9E', fontWeight: 700 }}>「ケアマネージャーとの上手な付き合い方」</Link>
        もどうぞ。
      </p>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        我が家に合うのはどれ？見守りサービスの選び方
      </h2>
      <p className="text-base mb-4">
        種類も費用も分かってくると、次に迷うのが「結局、うちにはどれが合うの？」というところ。
        ここは、次の<strong>3つの視点</strong>で考えると、ぐっと絞りやすくなります。
      </p>
      <div className="space-y-4 mb-6">
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">① 何が心配か（本人の状態）</p>
          <p className="text-base">急な体調変化が不安なら緊急通報型、日々の生活リズムを知りたいならセンサー型、話し相手が少なく孤立が心配なら訪問・電話型、というように、心配の中身から選びます。</p>
        </div>
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">② 本人の気持ち・機械への慣れ</p>
          <p className="text-base">「見られたくない」という気持ちが強い方には、映像を映さないセンサー型が向きます。機械が苦手な方には、人が関わる訪問・電話型のほうがなじみやすいことも。本人の納得が、長続きのいちばんのコツです。</p>
        </div>
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">③ 予算と、公的支援の有無</p>
          <p className="text-base">まず自治体の支援を確認し、足りない部分を民間で補うと、費用に納得しやすくなります。無理のない範囲で、続けられる金額を選びましょう。</p>
        </div>
      </div>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#FCE4EC', border: '1px solid #C2185B' }}>
        <p className="text-base mb-2"><strong>📖 私たちのケースでは（編集部・架空の体験談）</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          新幹線で2時間の距離に、母が一人で暮らしています。最初はカメラを付けようとしたのですが、「監視されているみたいで嫌」と母。
          そこで、まず市役所に相談したら、一人暮らし高齢者向けの緊急通報の装置を貸してもらえることが分かりました。
          それに加えて、電気ポットの使用を知らせてくれるセンサー型を一つ。母も「これなら気にならない」と。
          毎朝アプリに「お湯を沸かしました」と通知が届くだけで、私の心はずいぶん軽くなりました。全部を一度にそろえず、少しずつで良かったと思っています。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記は選び方を分かりやすく伝えるための編集部による架空のエピソードです。ご家庭によって状況や合うサービスは異なり、結果を保証するものではありません。</p>
      </div>
      <p className="text-base mb-8">
        ここまで読んで、まだ迷っていても大丈夫です。見守りは「これが正解」という唯一の答えがあるものではなく、暮らしながら合うものに調整していけばよいものです。
        まずは一つ試してみて、しっくりこなければ変える——それくらいの気持ちで十分です。
      </p>

      {/* H2-6 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        見守りと施設入居、どう考えていけばいい？
      </h2>
      <p className="text-base mb-4">
        先に大切なことをお伝えすると、<strong>いま、すぐに施設を考える必要はまったくありません</strong>。ここは「頭の片隅に置いておく」だけで十分な話です。以下の内部リンクも、あくまで参考としてお使いください。
      </p>
      <p className="text-base mb-4">
        見守りサービスを検討する方の多くが、心のどこかで「このまま在宅で大丈夫だろうか」「いつか施設も考えたほうがいいのかな」という思いも抱えています。
        ここでお伝えしたいのは、<strong>見守りと施設入居は「どちらか一方」ではない</strong>ということです。
      </p>
      <p className="text-base mb-4">
        見守りサービスは、<strong>在宅の暮らしを続けながら安心を足していく</strong>方法です。一方で、介護の必要度が上がってきたり、一人での暮らしが難しくなってきたりしたときには、施設という選択肢が、本人にとっても家族にとっても穏やかな道になることがあります。
        見守りで日々の様子を把握できていると、「そろそろかな」という変化のサインにも気づきやすく、あわてずに次の一歩を考えられます。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#E8F5E9', border: '1px solid #2E7D52' }}>
        <p className="text-base mb-2"><strong>🍃 迷ったときの考え方</strong></p>
        <p className="text-base">
          「在宅を続けるか、施設か」は、白黒つけて今すぐ決めるものではありません。見守りで暮らしを支えながら、情報だけ少しずつ集めておく——それで十分に間に合います。施設を検討することは、本人を見捨てることではなく、家族みんなが無理なく続けられる形を探すことです。
        </p>
      </div>
      <p className="text-base mb-8">
        在宅と施設のメリット・注意点をじっくり比べたい方は、
        <Link href="/facility-vs-home-care" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホームと在宅介護の比較｜7つの判断軸」</Link>
        で整理しています。介護と仕事の両立で悩む方は
        <Link href="/care-leave-system" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護休業・介護休暇の使い方」</Link>
        も、心の負担を軽くするヒントになるかもしれません。
      </p>

      {/* H2-7 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        導入するときに気をつけたい3つのこと
      </h2>
      <p className="text-base mb-4">
        最後に、見守りサービスを取り入れるときに知っておきたい注意点を3つ、やさしくまとめます。
        知っておくと安心して使えますが、どれも「怖がるため」ではなく「気持ちよく続けるため」のポイントです。
      </p>
      <div className="space-y-3 mb-6">
        {[
          { q: '① 本人の同意とプライバシーを大切に', a: '特にカメラ型は、本人が納得しているかがとても重要です。設置場所を限定する、映像は家族だけが見る、といった配慮をしましょう。本人の尊厳を守ることが、見守りを長く続けるいちばんの土台になります。' },
          { q: '② 「気づく仕組み」であって「安全の保証」ではない', a: '見守りサービスは異変に早く気づく助けにはなりますが、事故や急病を防げるわけではありません。通知が届いたあと、誰がどう動くか（家族・近所・緊急連絡先）まで、あらかじめ決めておくと安心です。' },
          { q: '③ 通信環境・機器の相性を確認', a: '機器によってはWi-Fi（インターネット回線）や電源が必要です。実家の環境で使えるか、電池切れや通信トラブルのときにどうなるかも、契約前に確認しておきましょう。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #F57C00' }}>
            <p className="font-bold text-base mb-1">{item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        注意点を挙げましたが、必要以上に構えなくて大丈夫です。ポイントは「本人の気持ちを大切に」「もしもの動き方を決めておく」「使える環境か確かめる」の3つだけ。
        この3つを押さえておけば、見守りは家族にとっても本人にとっても、心強い味方になってくれます。
      </p>

      {/* FAQ */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        高齢者見守りサービスのよくある質問（FAQ）
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
          まとめ：高齢者見守りサービスは「まず一つ、無理なく」から
        </h2>
        <p className="text-base mb-3">
          高齢者見守りサービスは、離れていても親の暮らしをそっと見守り、家族の不安をやわらげてくれる仕組みです。
          種類はセンサー・カメラ・緊急通報・訪問／電話・自治体／地域型の5タイプ。心配ごとから逆算して選び、まずは公的な支援を確認してから民間を足すと、費用も内容も納得しやすくなります。
          全部を一度にそろえる必要はありません。今日は「心配ごとを一つ書き出す」だけでも、確かな一歩です。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            '心配の中身（転倒・食事・急病・孤立など）を書き出してみる',
            'お住まいの市区町村・地域包括支援センターに公的支援を確認する',
            '足りない部分を民間サービスで補い、まず一つ試してみる',
            '本人の同意を大切にし、もしものときの動き方を決めておく',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          離れていても親を気にかけているあなたの気持ちは、それだけで大きな支えです。焦らず、できることからで大丈夫です。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/facility-vs-home-care', label: '老人ホームと在宅介護の比較｜7つの判断軸', icon: '⚖️' },
          { href: '/facility-disaster-preparedness', label: '老人ホーム・介護施設の防災と緊急時対応', icon: '🛟' },
          { href: '/care-timing', label: '施設入居を考えるべきタイミング', icon: '⏰' },
          { href: '/insurance-usage-guide', label: '介護保険の使い方完全ガイド｜申請から給付まで', icon: '📝' },
          { href: '/care-manager-relation', label: 'ケアマネージャーとの上手な付き合い方', icon: '🤝' },
          { href: '/dementia-care-basics', label: '認知症ケアの基本｜接し方と進行ステージ', icon: '🧠' },
          { href: '/home-care', label: '在宅介護の基礎知識と続けるコツ', icon: '🏡' },
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
        見守りのことも、いずれの施設のことも、一つずつでかまいません。「まだ決まっていないから」と気負わず、情報を集めておくだけでも心の余裕につながります。
        迷ったら、まずは話を聞いてみるところから始めてみてください。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        ※本ページにはアフィリエイト広告を含みます。サービス内容・費用・対応エリアなどを比較し、ご家族の状況に合った選択にお役立てください。
      </p>

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は、高齢者見守りサービスに関する一般的な情報をまとめたものです。特定のサービス・事業者・結果・安全を保証するものではありません。
          サービスの内容・費用・対応エリア、および自治体の緊急通報システムや見守り事業の対象・自己負担は、事業者や地域、個別の事情によって異なります。
          介護保険で使えるサービスとの関係や、公的支援の対象可否については、お住まいの市区町村の高齢者福祉窓口・地域包括支援センター・担当のケアマネジャーにご確認ください。導入にあたっては、複数のサービスを比較し、料金や契約内容を書面で確認したうえでご判断ください。
        </p>
      </div>
    </>
  )
}
