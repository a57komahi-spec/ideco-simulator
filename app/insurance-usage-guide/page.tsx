import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '介護保険の使い方完全ガイド｜要介護認定から給付までの全工程',
  description: '介護保険の使い方を、要介護認定の申請からケアプラン作成・サービス利用開始まで全工程でやさしく解説。給付限度額・自己負担割合・高額介護サービス費などお得な制度も2025年基準で整理。初めての方でも、どこに相談し何から始めればよいかが分かります。',
  alternates: {
    canonical: 'https://2ndhappiness.com/insurance-usage-guide',
  },
  openGraph: {
    title: '介護保険の使い方完全ガイド｜要介護認定から給付までの全工程',
    description: '介護保険の使い方を、要介護認定の申請からケアプラン作成・サービス利用開始まで全工程でやさしく解説。給付限度額・自己負担割合・高額介護サービス費などお得な制度も2025年基準で整理。初めての方でも、どこに相談し何から始めればよいかが分かります。',
    url: 'https://2ndhappiness.com/insurance-usage-guide',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

const summaryItems = [
  '介護保険は<mark class="highlight">要介護認定</mark>（介護がどのくらい必要かの判定）を受けてから使い始めます',
  '申請から認定まではおおむね<mark class="highlight">30日</mark>が目安。早めの申請が安心につながります',
  '自己負担は所得に応じて<mark class="highlight">1〜3割</mark>（一般は1割・一定以上所得で2〜3割）。要介護度ごとに使える上限枠（給付限度額）があります',
  '迷ったら、まず<mark class="highlight">地域包括支援センター</mark>（高齢者の何でも相談窓口）に声をかけてみましょう',
]

const careLevels = [
  { level: '要支援1', limit: '約50,320円', state: 'ほぼ自立。家事の一部に見守りや手助けが必要なことがある段階' },
  { level: '要支援2', limit: '約105,310円', state: '立ち上がりや歩行が不安定になり始めた段階' },
  { level: '要介護1', limit: '約167,650円', state: '日常生活の一部に部分的な介護が必要な段階' },
  { level: '要介護2', limit: '約197,050円', state: '立ち上がり・歩行などに介助が必要なことが増える段階' },
  { level: '要介護3', limit: '約270,480円', state: '日常生活全般に介助が必要。特養は原則ここから入所対象（要介護1・2でも事情により特例入所の場合あり）' },
  { level: '要介護4', limit: '約309,380円', state: '介護なしでは日常生活が難しい段階' },
  { level: '要介護5', limit: '約362,170円', state: '寝たきりに近く、ほぼ全面的な介護が必要な段階' },
]

const flowSteps = [
  { no: '1', title: '市区町村の窓口で申請', body: 'お住まいの市区町村の介護保険担当窓口、または地域包括支援センターで「要介護認定」を申請します。本人・家族のほか、ケアマネージャーや施設による代行申請もできます。必要なのは申請書と介護保険被保険者証、主治医の情報など。' },
  { no: '2', title: '訪問調査（認定調査）', body: '市区町村の調査員が自宅や入院先を訪ね、心身の状態や日常生活の動作（食事・着替え・移動など）を聞き取り・確認します。ふだんの様子をメモしておき、できないことは遠慮なく伝えるのがコツです。' },
  { no: '3', title: '主治医意見書の作成', body: '市区町村が主治医（かかりつけ医）に依頼して、医学的な意見書を作成してもらいます。かかりつけ医がいない場合は、市区町村が指定する医師の診察を受けることになります。' },
  { no: '4', title: '審査・判定', body: '訪問調査の結果と主治医意見書をもとに、コンピュータによる一次判定と、専門家が集まる「介護認定審査会」による二次判定が行われます。ここで要介護度が決まります。' },
  { no: '5', title: '認定結果の通知', body: '申請から原則30日以内に、認定結果が郵送で届きます。結果は「非該当（自立）」「要支援1〜2」「要介護1〜5」のいずれか。認定には有効期間（新規は原則6か月、状態により3〜12か月の範囲で設定）があり、満了前に更新申請が必要です。' },
  { no: '6', title: 'ケアプランの作成', body: '要介護なら居宅介護支援事業所のケアマネージャー、要支援なら地域包括支援センターが、本人や家族と相談しながら利用計画（ケアプラン）を作ります。費用は原則かかりません。' },
  { no: '7', title: 'サービス利用スタート', body: 'ケアプランに沿って、デイサービスや訪問介護、施設入居などのサービスが始まります。使ってみて合わなければ、ケアマネージャーに相談して見直すこともできます。' },
]

const faqItems = [
  {
    q: '介護保険の申請から実際に使えるまで、どれくらいかかりますか？',
    a: '申請から認定結果の通知までは、原則として30日以内が目安です（厚生労働省の基準）。ただし調査や審査の状況によっては前後することがあります。なお認定の効力は申請日にさかのぼるため、結果を待つ間に暫定的にサービスを利用できる場合もあります。詳しくは地域包括支援センターやケアマネージャーにご相談ください。',
  },
  {
    q: '自己負担は必ず1割で済みますか？',
    a: '一律ではありません。自己負担割合は所得に応じて1割・2割・3割に分かれます。一般的な所得の方は1割ですが、一定以上の所得がある方は2割、現役並みの所得がある方は3割となります（2025年基準）。ご自身の割合は、毎年交付される「介護保険負担割合証」で確認できます。',
  },
  {
    q: '要介護認定の結果に納得できないときは？',
    a: '認定結果に疑問がある場合、まずは市区町村に相談できます。それでも納得できないときは、認定結果を知った日の翌日から3か月以内に、都道府県の介護保険審査会へ「審査請求（結果の見直しを正式にお願いする手続き）」ができます。また、心身の状態が変わったときは「区分変更申請」で再判定を求めることも可能です。まずは担当のケアマネージャーや窓口に相談してみましょう。',
  },
  {
    q: '老人ホームに入ると介護保険はどう使われますか？',
    a: '施設の種類によって扱いが異なります。特別養護老人ホームでは施設サービス費、介護付き有料老人ホームでは「特定施設入居者生活介護」として、いずれも介護保険が適用され自己負担割合分を支払います。一方、住宅型有料老人ホームやサービス付き高齢者向け住宅では、外部の介護サービスを利用した分に給付限度額の範囲で保険が使われます。費用の内訳は施設ごとに確認するのが安心です。',
  },
]

export default function InsuranceUsageGuidePage() {
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
        path={'/insurance-usage-guide'}
        title={'介護保険の使い方完全ガイド｜要介護認定から給付までの全工程'}
        description={'介護保険の使い方を、要介護認定の申請からケアプラン作成・サービス利用開始まで全工程でやさしく解説。給付限度額・自己負担割合・高額介護サービス費などお得な制度も2025年基準で整理。初めての方でも、どこに相談し何から始めればよいかが分かります。'}
        datePublished={'2026-06-12T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Breadcrumb items={[{ label: '介護保険の使い方完全ガイド' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        介護保険の使い方完全ガイド｜要介護認定から給付までの全工程
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年6月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">出典：厚生労働省「介護保険制度の概要」ほか公的資料（2025年基準）</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          「介護保険って、名前は聞くけれど、何をどう使えばいいのか分からない」——そう感じている方は、とても多いです。
          手続きの言葉は難しく、書類も多い。親の介護が急に始まると、なおさら頭が真っ白になってしまいますよね。
        </p>
        <p className="text-base">
          でも、大丈夫です。介護保険を使う流れは、ひとつずつ見ていけば決して複雑ではありません。
          この記事では、<strong>申請の入口から、実際にサービスを使い始めるまで</strong>を、順番にやさしく整理しました。
          全部を今日覚える必要はありません。「まず入口だけ」分かれば十分です。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本ページにはアフィリエイト広告を含みます。記載の制度・数値は2025年基準の一般的な目安であり、お住まいの市区町村や個別の状況によって異なる場合があります。最新かつ正確な情報は、各自治体・厚生労働省の公式情報をご確認ください。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        そもそも介護保険って、どんな制度なの？
      </h2>
      <p className="text-base mb-4">
        「保険」と聞くと身構えてしまいますが、要するに<strong>「介護が必要になったとき、費用の大部分を社会全体で支えてくれる仕組み」</strong>です。
        民間の医療保険のように自分で加入手続きをするものではなく、40歳になると自動的に加入し、保険料を納めている公的な制度です。
      </p>
      <p className="text-base mb-4">
        ポイントは、保険証を持っているだけでは使えないこと。
        医療保険なら病院で保険証を出せば3割負担で受診できますが、介護保険は<mark className="highlight">「要介護認定」（介護がどのくらい必要かを市区町村が判定する手続き）</mark>を受けて、初めて使えるようになります。
        ここが医療保険といちばん違うところです。
      </p>
      <div className="rounded-lg p-5 mb-8 bg-white border border-gray-200">
        <p className="text-base mb-2"><strong>使える対象になるのは、おもに次の方です（2025年基準）</strong></p>
        <p className="text-base mb-1">・<strong>65歳以上の方（第1号被保険者）</strong>：原因を問わず、介護が必要と認定されれば利用できます。</p>
        <p className="text-base">・<strong>40〜64歳の方（第2号被保険者）</strong>：加齢にともなう国の定める16の特定疾病（末期がん・脳血管疾患・初老期の認知症など）が原因で介護が必要になった場合に限り利用できます。</p>
      </div>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        いつ、誰に相談すればいい？最初の一歩
      </h2>
      <p className="text-base mb-4">
        「親の物忘れが増えた」「転んでから足腰が弱った」「退院後の生活が心配」——
        こうした<strong>『あれ？』と思ったタイミング</strong>が、相談の入口です。要介護状態になりきってからでなくても構いません。
      </p>
      <p className="text-base mb-4">
        最初の相談先としておすすめなのが、<mark className="highlight">地域包括支援センター</mark>（おおむね中学校区ごとに置かれた、高齢者の介護・福祉・健康の何でも相談窓口）です。
        市区町村の介護保険担当窓口でも構いません。電話一本、窓口に立ち寄るだけでも大丈夫です。
      </p>
      <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base mb-2"><strong>📖 私たちのケースでは（編集部・架空の体験談）</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          父が脳梗塞で入院したとき、退院支援の看護師さんから「介護保険の申請、しておきましょうか」と声をかけてもらいました。
          正直、その時点では何のことか分かっていませんでした。でも、地域包括支援センターに電話したら、申請の代行から手続きの順番まで全部教えてくれて。
          電話一本で、こんなに肩の荷が下りるんだと思ったほどです。迷っているなら、まず電話一本でいいんだと、今は思います。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記は制度の流れを分かりやすく伝えるための編集部による架空のエピソードです。個人の感想であり、効果や結果を保証するものではありません。</p>
      </div>
      <p className="text-base mb-8">
        ここまで読んで、まだ迷っていても大丈夫です。今日は「相談先が分かった」だけで、立派な一歩です。
      </p>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        【全工程】申請から認定・利用開始までの7ステップ
      </h2>
      <p className="text-base mb-4">
        結論からいうと、介護保険を使い始めるまでの流れは<strong>大きく7つのステップ</strong>です。
        ひとつずつ見ていけば、決して難しくありません。表で全体像をつかんでから、順に確認していきましょう。
      </p>
      <div className="space-y-3 mb-6">
        {flowSteps.map((step) => (
          <div key={step.no} className="rounded-xl p-5 flex items-start gap-4 bg-white border border-gray-200" style={{ borderLeft: '4px solid #2E7D52' }}>
            <span
              style={{
                background: '#2E7D52',
                color: '#fff',
                fontSize: '15px',
                fontWeight: 800,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {step.no}
            </span>
            <div>
              <p className="font-bold text-base mb-1 text-primary">{step.title}</p>
              <p className="text-base" style={{ lineHeight: 1.8 }}>{step.body}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        申請からサービス開始まで、急がなくても<strong>1〜2か月ほど</strong>かけて進む方が多いです。
        手続きの大半は、地域包括支援センターやケアマネージャーが伴走してくれます。一人で抱え込まなくて大丈夫です。
        要介護度そのものの違いについては
        <Link href="/care-level" style={{ color: '#1A5E9E', fontWeight: 700 }}>「要介護度の違いと認定手続き」</Link>
        の記事でも詳しく紹介しています。
      </p>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        要介護度って、何が違うの？要支援1〜要介護5の体系
      </h2>
      <p className="text-base mb-4">
        「要支援」と「要介護」、数字が大きいほど重い——なんとなく分かっていても、使える金額がどう変わるのかは分かりにくいですよね。
        ここは少し数字が並ぶので、<strong>「自分の家族はどのあたりか」だけ目で追えれば十分</strong>です。細かい計算が苦手な方は表を眺めるだけでOKです。
      </p>
      <p className="text-base mb-4">
        要介護度は、軽いほうから<strong>要支援1・2（介護予防が中心）</strong>と<strong>要介護1〜5（5が最重度）</strong>に分かれます。
        下の表の金額は「<mark className="highlight">給付限度額</mark>」、つまり<strong>1か月に介護保険を使ってサービスを利用できる上限枠（使えるサービスの月額上限のイメージ）</strong>です。
        この枠内の利用なら自己負担は所得に応じて1〜3割（一般は1割、一定以上所得で2割、現役並み所得で3割）で済み、枠を超えた分は全額自己負担になります。
      </p>
      <div className="rounded-xl overflow-x-auto mb-3" style={{ border: '2px solid #2E7D52' }}>
        <table className="w-full border-collapse text-base" style={{ minWidth: '520px' }}>
          <thead>
            <tr style={{ background: '#E8F5E9' }}>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>区分</th>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>月の給付限度額（目安）</th>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>状態のイメージ</th>
            </tr>
          </thead>
          <tbody>
            {careLevels.map((c, i) => (
              <tr key={c.level} style={{ background: i % 2 === 0 ? '#fff' : '#F9FBF9', borderTop: '1px solid #e5e7eb' }}>
                <td className="px-4 py-3 font-bold" style={{ color: '#2E7D52', whiteSpace: 'nowrap' }}>{c.level}</td>
                <td className="px-4 py-3 font-bold" style={{ whiteSpace: 'nowrap' }}>{c.limit}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{c.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500 mb-8">
        ※金額は2025年基準の全国共通の目安（単位数を金額換算したもの）で、地域やサービスの種類によって実際の金額は変わります。出典：厚生労働省の介護報酬・支給限度基準額に関する資料。
      </p>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        自己負担はいくら？「1割で済む」とは限らない理由
      </h2>
      <p className="text-base mb-4">
        よくある誤解が「介護保険を使えば、みんな1割負担」というもの。
        実際には、<mark className="highlight">自己負担割合は所得に応じて1割・2割・3割の3段階</mark>に分かれます（2025年基準）。
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="rounded-xl p-5 bg-white border-2" style={{ borderColor: '#2E7D52' }}>
          <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>1割負担</p>
          <p className="text-sm">一般的な所得の方。多くの方がこの区分にあたります。</p>
        </div>
        <div className="rounded-xl p-5 bg-white border-2" style={{ borderColor: '#F57C00' }}>
          <p className="font-bold text-base mb-1" style={{ color: '#E65100' }}>2割負担</p>
          <p className="text-sm">一定以上の所得がある方。単身世帯か同一世帯かなどでも変わります。</p>
        </div>
        <div className="rounded-xl p-5 bg-white border-2" style={{ borderColor: '#C2185B' }}>
          <p className="font-bold text-base mb-1" style={{ color: '#C2185B' }}>3割負担</p>
          <p className="text-sm">現役並みの所得がある方。所得が高いほど負担割合も上がります。</p>
        </div>
      </div>
      <p className="text-base mb-4">
        自分や家族がどの区分かは、毎年市区町村から交付される<strong>「介護保険負担割合証」</strong>に記載されています。
        手元に見当たらないときは、市区町村の窓口で確認できます。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base">
          たとえば要介護3の方が、給付限度額（約270,480円・2025年基準の目安）いっぱいまでサービスを使った場合、1割負担なら自己負担はおよそ2万7千円ほど。
          ただし食費・居住費・日常生活費などは別途かかります。
          「保険を使った分」と「保険の対象外の分」がある、と覚えておくと家計の見通しが立てやすくなります。
        </p>
      </div>

      {/* H2-6 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        ケアプランって何？サービスが始まるまでの流れ
      </h2>
      <p className="text-base mb-4">
        認定がおりたら、いよいよサービス選びです。とはいえ「何から使えばいいの？」と迷うのが普通。
        そこで頼りになるのが<mark className="highlight">ケアプラン</mark>（本人の状態や希望に合わせて、どのサービスをどう使うかを組み立てた利用計画書）です。
      </p>
      <p className="text-base mb-4">
        ケアプランは、要介護の方なら<strong>ケアマネージャー（介護支援専門員）</strong>、要支援の方なら<strong>地域包括支援センター</strong>が、本人・家族と相談しながら作ります。
        うれしいことに、<strong>ケアプラン作成の費用は原則かかりません</strong>（全額が介護保険でまかなわれます）。
        いわば、介護の「道案内役」を無料でつけられるイメージです。
      </p>
      <p className="text-base mb-4">
        介護保険で使える代表的なサービスには、次のようなものがあります。
      </p>
      <div className="space-y-3 mb-6">
        <div className="rounded-lg p-4 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">🏠 自宅で受けるサービス（居宅サービス）</p>
          <p className="text-base">訪問介護（ホームヘルパー）、訪問看護、デイサービス（通所介護）、ショートステイ（短期入所）など。住み慣れた家での暮らしを支えます。</p>
        </div>
        <div className="rounded-lg p-4 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">🏢 施設に入って受けるサービス（施設サービス）</p>
          <p className="text-base">特別養護老人ホーム（特養）、介護老人保健施設（老健）、介護医療院など。施設の種類ごとに対象となる要介護度や役割が異なります。</p>
        </div>
        <div className="rounded-lg p-4 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">🔧 福祉用具・住宅改修</p>
          <p className="text-base">手すりの取り付けや段差解消などの住宅改修、車いす・介護ベッドのレンタルにも、条件を満たせば保険が使えます。</p>
        </div>
      </div>
      <p className="text-base mb-8">
        使ってみて「思っていたのと違う」と感じたら、ケアマネージャーに相談してプランを見直すこともできます。
        最初から完璧を目指さなくて大丈夫。少しずつ、ご家族に合う形を探していけます。
        施設の種類ごとの違いは
        <Link href="/types" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホームの種類と違い」</Link>
        、費用の相場は
        <Link href="/cost" style={{ color: '#1A5E9E', fontWeight: 700 }}>「費用・料金の相場」</Link>
        の記事もあわせてどうぞ。
      </p>

      {/* H2-7 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        申請すれば負担を軽くできる、知っておきたいお金の制度
      </h2>
      <p className="text-base mb-4">
        介護にはお金の不安がつきものです。でも、<strong>申請すれば負担を軽くできる制度</strong>がいくつか用意されています。
        「知らずに使っていなかった」という方も少なくないので、ここだけは押さえておきましょう。
      </p>
      <div className="space-y-4 mb-6">
        <div className="rounded-xl p-5 bg-white border border-gray-200" style={{ borderLeft: '4px solid #2E7D52' }}>
          <p className="font-bold text-base mb-1 text-primary">① 高額介護サービス費</p>
          <p className="text-base">1か月の介護サービスの自己負担額が、所得区分ごとに定められた上限を超えたとき、超えた分があとから払い戻される制度です。上限額は所得によって異なります（2025年基準）。</p>
        </div>
        <div className="rounded-xl p-5 bg-white border border-gray-200" style={{ borderLeft: '4px solid #2E7D52' }}>
          <p className="font-bold text-base mb-1 text-primary">② 特定入所者介護サービス費（補足給付）</p>
          <p className="text-base">所得や資産が一定以下の方が施設に入った場合、食費・居住費の負担を軽減してもらえる制度です。対象になるかは市区町村が判定します。</p>
        </div>
        <div className="rounded-xl p-5 bg-white border border-gray-200" style={{ borderLeft: '4px solid #2E7D52' }}>
          <p className="font-bold text-base mb-1 text-primary">③ 高額医療・高額介護合算療養費</p>
          <p className="text-base">毎年8月から翌年7月までの1年間の、医療保険と介護保険の自己負担を合算し、上限を超えた分が払い戻される制度です。医療と介護が重なっているご家庭の助けになります。</p>
        </div>
      </div>
      <p className="text-base mb-4">
        これらの制度は、多くが<strong>「申請しないと受けられない」</strong>のが共通点です。
        難しそうに見えますが、対象になりそうかどうかは、ケアマネージャーや市区町村の窓口に「うちは対象になりますか？」と聞くだけで教えてもらえます。
      </p>
      <p className="text-base mb-8">
        介護保険でカバーされない費用や、その備え方については
        <Link href="/insurance-gap" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護保険でカバーされない費用」</Link>
        の記事でも整理しています。あわせて読むと、お金の全体像がつかみやすくなります。
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
          まとめ：介護保険の使い方は「相談→申請→利用」の一本道
        </h2>
        <p className="text-base mb-3">
          介護保険の使い方は、「相談 → 申請 → 認定 → ケアプラン → 利用開始」という一本道です。
          全部を一度に理解しようとせず、今いる地点の「次の一歩」だけ進めれば十分です。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            '地域包括支援センターの連絡先を調べて、スマホに登録しておく',
            '気になっていることを箇条書きにして、相談のときに持っていく',
            '親の「できること・できないこと」を、ふだんから少しメモしておく',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          焦らなくて大丈夫です。迷っている時間も、ご家族を大切に思っている証拠ですから。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/care-level', label: '要介護度の違いと認定手続きをくわしく', icon: '📊' },
          { href: '/cost', label: '老人ホームの費用・料金の相場', icon: '💴' },
          { href: '/insurance-gap', label: '介護保険でカバーされない費用と備え方', icon: '🔍' },
          { href: '/care-manager-relation', label: 'ケアマネージャーとの上手な付き合い方', icon: '🤝' },
          { href: '/process', label: '老人ホーム入居までの流れ・手続き', icon: '📋' },
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

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は介護保険制度の一般的な情報をまとめたもので、2025年基準の目安です。制度の内容・金額・要件はお住まいの市区町村や改正によって異なる場合があります。
          具体的な手続きや判定については、必ず市区町村の介護保険窓口・地域包括支援センター・担当ケアマネージャーなどの専門窓口にご確認ください。
          本記事は特定のサービスへの加入や契約を強制するものではなく、最終的なご判断はご家族の状況に合わせて行ってください。
        </p>
      </div>
    </>
  )
}
