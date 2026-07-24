import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '老人ホーム入居後の一日の過ごし方と生活リズム',
  description: '老人ホームに入居した親は一日をどう過ごす？起床から就寝までの生活リズム、食事・入浴・レクリエーション、施設タイプ別の違い、入居直後に慣れるまでの過ごし方、家族ができる関わり方まで、やさしく整理しました。見学時に確認したいポイントや、離れて暮らす家族の不安を軽くするヒントもまとめています。',
  alternates: {
    canonical: 'https://2ndhappiness.com/daily-life-in-facility',
  },
  openGraph: {
    title: '老人ホーム入居後の一日の過ごし方｜生活リズムと家族の関わり方',
    description: '老人ホームに入居した親は一日をどう過ごす？起床から就寝までの生活リズム、食事・入浴・レクリエーション、施設タイプ別の違い、入居直後に慣れるまでの過ごし方、家族ができる関わり方まで、やさしく整理しました。見学時に確認したいポイントや、離れて暮らす家族の不安を軽くするヒントもまとめています。',
    url: 'https://2ndhappiness.com/daily-life-in-facility',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
    publishedTime: '2026-07-25T05:00:00+09:00',
    modifiedTime: '2026-07-25T05:00:00+09:00',
    images: [
      { url: 'https://2ndhappiness.com/images/hero.jpg', width: 1200, height: 630, alt: '老人ホーム入居後の一日の過ごし方｜生活リズムと家族の関わり方' },
    ],
  },
}

const summaryItems = [
  '多くの施設では、<mark class="highlight">起床・食事・入浴・就寝の時間がゆるやかに決まっており</mark>、その合間にレクリエーション（気分転換や交流のための活動）や機能訓練（体を動かすリハビリのような時間）が入ります',
  '一日の流れは<mark class="highlight">施設のタイプによって少しずつ違います</mark>。特養やグループホームは家庭的、介護付き有料はサービスが手厚め、サ高住は自由度が高めなど、それぞれに個性があります',
  '入居直後は<mark class="highlight">生活リズムが乱れやすい時期</mark>ですが、多くの方は数週間〜数か月かけてなじんでいきます。あわてず見守って大丈夫です',
  '家族は<mark class="highlight">「その人らしい一日」を守る手助け</mark>ができます。面会や好きな物の差し入れ、スタッフへの情報共有など、できることから少しずつで十分です',
]

const scheduleItems = [
  { time: '7:00〜', act: '起床・着替え・洗顔', icon: '🌅', note: 'スタッフが声かけ。自分のペースで起きられる施設も増えています' },
  { time: '8:00〜', act: '朝食', icon: '🍚', note: '食堂に集まって。体調や飲み込みに合わせた食事が用意されます' },
  { time: '10:00〜', act: 'レクリエーション・機能訓練', icon: '🎵', note: '体操・歌・手芸など。参加は本人の希望に合わせて' },
  { time: '12:00〜', act: '昼食', icon: '🍱', note: '一日でいちばんにぎやかな時間になることも' },
  { time: '13:30〜', act: '入浴・休憩', icon: '♨️', note: '入浴は週2〜3回が一般的。ほかの日はゆっくり過ごします' },
  { time: '15:00〜', act: 'おやつ・お茶の時間', icon: '🍵', note: '季節のお菓子やお茶で、ほっと一息' },
  { time: '18:00〜', act: '夕食', icon: '🍲', note: '一日のしめくくり。食後はテレビや談話室で過ごす方も' },
  { time: '20:00〜', act: '就寝準備・消灯', icon: '🌙', note: '歯みがきや着替えを手伝い、ゆっくり休みます' },
]

const typeItems = [
  {
    name: '特別養護老人ホーム（特養）',
    icon: '🏛',
    color: '#E8F5E9',
    border: '#2E7D52',
    label: '#2E7D52',
    body: '10人程度の少人数で暮らす「ユニットケア（家庭のように少人数で過ごす方式）」を取り入れる施設が増えています。食事の下ごしらえを一緒にするなど、生活の延長のような時間を大切にする傾向があります。なお特養は、原則として要介護3以上の方が対象です（入居条件の詳細は別記事をご参照ください）。',
  },
  {
    name: '介護付き有料老人ホーム',
    icon: '🏢',
    color: '#FFF3E0',
    border: '#F57C00',
    label: '#E65100',
    body: '施設のスタッフによる介護（特定施設入居者生活介護）を受けながら過ごします。レクリエーションや行事が多彩な施設も多く、日中の活動プログラムが充実している傾向があります。',
  },
  {
    name: 'グループホーム',
    icon: '🧠',
    color: '#F3E5F5',
    border: '#8E24AA',
    label: '#7B1FA2',
    body: '正式には「認知症対応型共同生活介護」と呼ばれ、認知症の方が9人以下の少人数で共同生活を送る場所です（原則として同じ市区町村に住む方が対象の地域密着型サービス）。掃除・洗濯・料理などの家事を、できる範囲で一緒に行い、なじみの暮らしを続けやすいのが特長です。',
  },
  {
    name: 'サービス付き高齢者向け住宅（サ高住）',
    icon: '🏠',
    color: '#E3F2FD',
    border: '#1A5E9E',
    label: '#1A5E9E',
    body: '賃貸住宅に近い形で、比較的自由に暮らせます。外部の介護サービスを組み合わせて使う「一般型」のほか、施設の職員が介護を行う「介護型（特定施設の指定を受けたタイプ）」もあり、一日の流れは型やご本人の状態によって大きく変わります。外出や自炊がしやすいのも特長です。',
  },
]

const faqItems = [
  {
    q: '老人ホームに入ると、一日中ベッドで寝て過ごすことになりませんか？',
    a: 'そうしたイメージを持たれる方は少なくありませんが、多くの施設では、日中はできるだけ起きて過ごせるよう、食事を食堂でとったり、体操やレクリエーション（気分転換や交流のための活動）に参加したりする時間が設けられています。体を動かす機能訓練（リハビリのような時間）を取り入れている施設も多くあります。もちろん、体調がすぐれない日はゆっくり休むことも大切にされます。心配なときは、見学の際に「日中はどのように過ごしていますか」と具体的にたずねてみると、その施設の雰囲気がよく分かります。ただし、活動の内容や頻度は施設によって差があり、どの施設でも同じ結果になるわけではない点は、あらかじめ知っておくと安心です。',
  },
  {
    q: '入居してから、親がなかなか環境になじめないようで心配です。',
    a: '住み慣れた家から新しい場所へ移ると、一時的に落ち着かなくなったり、気分が沈んだりすることがあります。これは「リロケーションダメージ（住み替えにともなう心身の負担）」と呼ばれ、決して珍しいことではありません。多くの方は、数週間から数か月かけて少しずつ新しい暮らしになじんでいきます。焦って「失敗だったかも」と思う必要はありません。ご本人の様子で気になることがあれば、施設のスタッフや担当のケアマネジャー（介護の計画を立てる専門職）に早めに相談し、必要に応じて医療機関の受診も検討してみてください。家族が時々顔を見せることも、本人の安心につながります。',
  },
  {
    q: '面会に行くと、いつも同じ時間で親が退屈していないか気になります。',
    a: '毎日の流れがある程度決まっていることは、生活のリズムを整え、心身の安定につながる面があります。一方で、「もっとこうしてあげたい」という家族の気持ちも自然なものです。もし本人が退屈そうにしているように見えたら、好きだった趣味の道具を持ち込めないか、参加できる行事はないかなどを、スタッフに相談してみましょう。読み慣れた本や、昔の写真、好きな音楽なども、その人らしい時間を取り戻すきっかけになることがあります。面会の頻度や過ごし方に「正解」はありません。詳しくは「入居後の家族の面会頻度と関わり方」の記事もあわせてご覧ください。',
  },
  {
    q: '施設のスケジュールに、本人の希望はどこまで反映されますか？',
    a: '多くの施設では、入居時やその後の面談で、これまでの生活習慣や好み（起きる時間、好きな食べ物、趣味など）を聞き取り、可能な範囲でケアの計画に反映しようとしています。近年は、決められた時間に一律で動くのではなく、一人ひとりのペースを尊重する「その人らしさ」を大切にする考え方が広がっています。ただし、集団生活のため、すべての希望がそのまま通るわけではありません。気になる点があれば、遠慮せず担当のスタッフやケアマネジャーに伝えてみてください。家族からの情報は、本人らしい暮らしを組み立てるうえで、とても貴重な手がかりになります。',
  },
]

export default function DailyLifeInFacilityPage() {
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
      { '@type': 'ListItem', position: 2, name: '老人ホーム入居後の一日の過ごし方', item: 'https://2ndhappiness.com/daily-life-in-facility' },
    ],
  }

  return (
    <>
      <ArticleJsonLd
        path={'/daily-life-in-facility'}
        title={'老人ホーム入居後の一日の過ごし方｜生活リズムと家族の関わり方'}
        description={'老人ホームに入居した親は一日をどう過ごす？起床から就寝までの生活リズム、食事・入浴・レクリエーション、施設タイプ別の違い、入居直後に慣れるまでの過ごし方、家族ができる関わり方まで、やさしく整理しました。見学時に確認したいポイントや、離れて暮らす家族の不安を軽くするヒントもまとめています。'}
        datePublished={'2026-07-25T05:00:00+09:00'}
        dateModified={'2026-07-25T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Breadcrumb items={[{ label: '老人ホーム入居後の一日の過ごし方' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホーム入居後の一日の過ごし方｜生活リズムと家族の関わり方
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年7月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">参考：厚生労働省の介護保険制度・介護サービスに関する公的資料、各施設が公開する一日の生活の流れ・行事案内をもとに、やさしい老人ホームガイド編集部が一般的な傾向を整理（2026年7月時点）</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          「施設に入ってから、親はどんな一日を過ごしているんだろう」——
          入居の手続きを終えてホッとしたのもつかの間、今度はこんな気がかりが、そっと胸に浮かんでくる方は多いのではないでしょうか。
        </p>
        <p className="text-base">
          毎日そばにいるわけではないと、日中の様子はなかなか見えません。「退屈していないかな」「さびしくないかな」と想像しては、少し切なくなる。その気持ちは、親御さんを大切に思っているからこそのものです。
          この記事では、<strong>老人ホームに入居した方が、朝から夜までどんな一日を過ごすのか</strong>を、施設のタイプ別の違いや、入居直後の慣れ方、家族ができる関わり方までふくめて、やさしく整理しました。
        </p>
        <p className="text-base mt-3" style={{ color: '#1B5E37' }}>
          今日は「だいたいの一日の流れ」だけ分かれば十分です。細かい話は、気になったときにまた戻ってきてください。全部を一度に読み切らなくて大丈夫です。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本記事は老人ホームでの一日の過ごし方に関する一般的な情報をまとめたもので、特定の施設や結果を保証するものではありません。生活の流れ・行事・ケアの内容は、施設のタイプや方針、ご本人の状態によって異なります。具体的な内容は、各施設の見学時や入居前の説明で必ずご確認ください。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        老人ホームでは一日をどう過ごす？基本の生活リズム
      </h2>
      <p className="text-base mb-4">
        「施設に入ると、一日中どう過ごすのだろう」——まず全体像から見ていきましょう。多くの老人ホームでは、<strong>起床・食事・入浴・就寝の時間がゆるやかに決まっており</strong>、その合間にレクリエーション（気分転換や交流のための活動）や機能訓練（体を動かすリハビリのような時間）が入ります。
      </p>
      <p className="text-base mb-4">
        イメージとしては、旅館の一日に少し似ているかもしれません。食事やお風呂の時間の目安があり、その間は自由に過ごす——そんな、ゆるやかな枠のある暮らしです。時間で縛るためではなく、生活のリズムを整え、体調を守るための目安だと考えてください。
      </p>
      <p className="text-base mb-4">
        下の表は、あくまで<strong>一般的な一日の流れの一例</strong>です。実際の時間割や内容は施設によって異なりますが、大まかな雰囲気をつかむ手がかりにしてください。
      </p>
      <div className="rounded-xl overflow-x-auto mb-4" style={{ border: '2px solid #2E7D52' }}>
        <table className="w-full border-collapse text-base">
          <thead>
            <tr style={{ background: '#E8F5E9' }}>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>時間帯</th>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>過ごし方</th>
              <th className="text-left px-4 py-2.5" style={{ color: '#1B5E37', fontSize: '13px' }}>ひとことメモ</th>
            </tr>
          </thead>
          <tbody>
            {scheduleItems.map((s, i) => (
              <tr key={s.time} style={{ background: i % 2 === 0 ? '#fff' : '#F9FBF9', borderTop: '1px solid #e5e7eb' }}>
                <td className="px-4 py-3 font-bold" style={{ color: '#2E7D52', whiteSpace: 'nowrap' }}>{s.icon} {s.time}</td>
                <td className="px-4 py-3 font-bold">{s.act}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{s.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mb-4">※上記は編集部が一般的な傾向を整理した一例です。実際の時間割・内容は施設によって大きく異なります。</p>
      <p className="text-base mb-8">
        大切なのは、こうした流れが<strong>「本人を縛るもの」ではなく「安心して過ごすための目安」</strong>だという点です。体調のすぐれない日は無理に活動せず休む、といった柔軟な対応をしてくれる施設がほとんどです。近年は、決まった時間に一律で動くのではなく、一人ひとりのペースを大切にする施設も増えています。
      </p>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        施設のタイプで一日はどう変わる？
      </h2>
      <p className="text-base mb-4">
        「老人ホーム」とひとことで言っても、実際にはいくつもの種類があり、一日の過ごし方の雰囲気も少しずつ違います。「うちの親にはどんな暮らしが合うのかな」と考えるときの手がかりに、代表的な4タイプの特徴を見ておきましょう。
      </p>
      <p className="text-base mb-4">
        なお、ここでいう「老人ホーム」は俗称で、正式にはさまざまな<strong>施設区分</strong>に分かれます。それぞれの費用や入居条件をくわしく知りたい方は、
        <Link href="/types" style={{ color: '#1A5E9E', fontWeight: 700 }}>「施設の種類」</Link>
        の記事もあわせてどうぞ。
      </p>
      <div className="space-y-4 mb-6">
        {typeItems.map((t) => (
          <div key={t.name} className="rounded-xl p-5" style={{ backgroundColor: t.color, border: `2px solid ${t.border}` }}>
            <p className="font-bold text-lg mb-2" style={{ color: t.label }}>{t.icon} {t.name}</p>
            <p className="text-sm" style={{ lineHeight: 1.9 }}>{t.body}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base mb-1"><strong>💡 見学のときのヒント</strong></p>
        <p className="text-base">
          パンフレットだけでは、実際の雰囲気はなかなか伝わりません。見学の際に「今日はみなさん何をして過ごしていますか」とたずねたり、昼食やレクリエーションの時間帯に合わせて訪ねたりすると、その施設のふだんの一日が見えてきます。
        </p>
      </div>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        日中の過ごし方｜レクリエーションや行事にはどんなものがある？
      </h2>
      <p className="text-base mb-4">
        日中の過ごし方で気になるのが、レクリエーションや行事ではないでしょうか。「日中はどんなふうに過ごしているのだろう」と気になりますよね。多くの施設では、体を動かしたり、季節を感じたりする時間が用意されています。
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="rounded-xl p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-2" style={{ color: '#2E7D52' }}>🎵 日々のレクリエーション</p>
          <p className="text-sm" style={{ lineHeight: 1.9 }}>体操・ラジオ体操、歌や合唱、塗り絵・手芸、脳トレ、ゲームなど。体と頭をほどよく使い、他の入居者との交流のきっかけにもなります。参加はあくまで本人の希望に合わせて行われます。</p>
        </div>
        <div className="rounded-xl p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-2" style={{ color: '#E65100' }}>🎏 季節の行事</p>
          <p className="text-sm" style={{ lineHeight: 1.9 }}>お花見、夏祭り、敬老の日のお祝い、クリスマス会、初詣など。季節の移ろいを感じられる行事は、暮らしに彩りを添え、家族が参加できる機会になることもあります。</p>
        </div>
      </div>
      <p className="text-base mb-4">
        また、体を動かす<strong>機能訓練（施設で体の機能の維持をめざす活動。病院で理学療法士などが行う医療リハビリとは位置づけが異なります）</strong>を取り入れている施設も多くあります。歩く練習や、手足の運動、口の体操などを通じて、今ある力をできるだけ保てるよう支えるものです。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF3E0', border: '1px solid #F57C00' }}>
        <p className="text-base">
          ここで一つだけ、大切なお願いがあります。レクリエーションや機能訓練は、<strong>元気に過ごすための工夫であって、病気や老いを治すためのものではありません</strong>。「これをやれば必ず良くなる」と過度に期待するのではなく、「その人が今日を心地よく過ごすための時間」として見守っていただけると、本人も家族も気持ちが楽になります。参加をいやがる日があっても、それはそれで大丈夫です。
        </p>
      </div>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        食事・入浴・排せつ——毎日のケアはどうなっている？
      </h2>
      <p className="text-base mb-4">
        一日の暮らしの土台になるのが、食事・入浴・排せつといった、毎日のケアです。ここは、ご家族がいちばん気にかけるところかもしれません。それぞれ、どんな配慮がされているのかを見ておきましょう。
      </p>
      <div className="space-y-4 mb-6">
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">🍚 食事</p>
          <p className="text-base">栄養のバランスに配慮した食事が、一日3食用意されます。かむ力や飲み込む力に不安がある方には、やわらかく刻んだり、とろみをつけたりと、一人ひとりの状態に合わせた形で提供されます。糖尿病などの療養食への対応が必要な場合は、施設や体制によって可否が異なるため、入居前に個別に確認しておくと安心です。</p>
        </div>
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">♨️ 入浴</p>
          <p className="text-base">介護施設の入浴は、運営基準で週2回以上とされており、実際には週2〜3回とする施設が多いようです（施設により異なります）。自分で入るのが難しい方には、スタッフが介助したり、専用の機械浴（座ったまま・寝たまま入れる設備）を使ったりします。安全に、そして気持ちよく入れるよう配慮されています。</p>
        </div>
        <div className="rounded-lg p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-1">🚻 排せつ</p>
          <p className="text-base">トイレでの排せつをできるだけ続けられるよう支援しつつ、必要に応じて、おむつの交換なども行われます。本人の尊厳を守ることが、とても大切にされる場面です。デリケートな話題なので、気になる点は個別にスタッフへ相談できます。</p>
        </div>
      </div>
      <p className="text-base mb-4">
        こうした日常の動作は、専門的には<strong>ADL（食事・着替え・トイレなど、日々の生活の基本動作）</strong>と呼ばれます。（※ここは少し専門的な言葉なので、覚えなくて大丈夫です）
      </p>
      <p className="text-base mb-8">
        毎日のケアの手厚さや、看護・医療との連携のしかたは、施設のタイプや体制によって変わります。持病があって医療的なケアが必要な場合は、
        <Link href="/how-to-choose" style={{ color: '#1A5E9E', fontWeight: 700 }}>「選び方」</Link>
        の記事も参考に、入居前に対応できる範囲を確認しておくと安心です。
      </p>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        入居直後は生活リズムが乱れやすい？慣れるまでの過ごし方
      </h2>
      <p className="text-base mb-4">
        「入居してから、親の元気がないみたい」——入居して間もない時期に、こう感じるご家族は少なくありません。じつはこれは、とても自然なことなのです。
      </p>
      <p className="text-base mb-4">
        住み慣れた家から新しい環境へ移ると、一時的に落ち着かなくなったり、気分が沈んだり、夜眠りにくくなったりすることがあります。これを<strong>「リロケーションダメージ（住み替えにともなう心身の負担）」</strong>と呼びます。引っ越しをしたあと、しばらく落ち着かない——あの感覚の、もう少し大きなものだと考えると分かりやすいかもしれません。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#E8F5E9', border: '1px solid #2E7D52' }}>
        <p className="text-base mb-2"><strong>🍃 慣れるまでに、家族が心にとめておきたいこと</strong></p>
        <p className="text-base mb-1">・多くの方は、数週間〜数か月かけて少しずつなじんでいきます</p>
        <p className="text-base mb-1">・「失敗だったかも」と、あわてて結論を出さなくて大丈夫です</p>
        <p className="text-base mb-1">・気になる様子があれば、スタッフやケアマネジャーに早めに相談を</p>
        <p className="text-base">・時々、顔を見せることが、本人の何よりの安心になります</p>
      </div>
      <p className="text-base mb-4">
        もし、食欲が続けて落ちている、眠れない日が続く、気分の落ち込みが強いなど、気がかりな様子があるときは、我慢せず、施設のスタッフや担当のケアマネジャー（介護の計画を立てる専門職）に伝えてください。必要に応じて、医療機関の受診につなげてもらうこともできます。
      </p>
      <p className="text-base mb-8">
        そして、これは家族の側にも言えることです。親を送り出したあと、「これで良かったのだろうか」と揺れる気持ちが出てくるのは、ごく自然なことです。その迷いは、あなたが親御さんを大切に思っている証でもあります。気持ちがしんどいときは、
        <Link href="/caregiver-mental-care" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護する家族のメンタルケア」</Link>
        の記事も、そっとのぞいてみてください。
      </p>

      {/* H2-6 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        家族は入居後どう関わればいい？
      </h2>
      <p className="text-base mb-4">
        「もう施設にお願いしたのだから、家族は口を出さないほうがいいのかな」——そんなふうに、少し遠慮してしまう方もいます。でも、そんなことはありません。家族の関わりは、本人の暮らしを豊かにする、大切な要素です。
      </p>
      <p className="text-base mb-4">
        とはいえ、毎日通う必要もありませんし、特別なことをしなければならないわけでもありません。<strong>できることを、無理のない範囲で</strong>——それで十分です。たとえば、次のようなことがあります。
      </p>
      <div className="space-y-3 mb-6">
        {[
          { q: '📅 定期的に顔を見せる', a: '面会は、本人にとって大きな楽しみになります。頻度に決まりはなく、月に1回でも、電話やビデオ通話でも構いません。「気にかけてもらえている」という実感が、何よりの安心につながります。' },
          { q: '🎁 好きな物を差し入れる', a: '好物のお菓子、読み慣れた本、昔の写真、季節の花など。その人らしさを思い出させてくれる物は、日々に彩りを添えます。ただし、飲み込みの状態や食事制限がある場合は、食べ物より写真や本などが安心です。食べ物を渡したいときは、スタッフに一言相談してから。持ち込みの可否も施設に確認しましょう。' },
          { q: '🗣 スタッフに情報を伝える', a: '「昔は早起きだった」「この歌が好き」といった、本人の好みや習慣をスタッフに伝えると、ケアに生かしてもらえます。家族しか知らない情報は、とても貴重な手がかりです。' },
          { q: '🎏 行事に参加する', a: '夏祭りや敬老会など、家族が参加できる行事があれば、一緒に過ごす良い機会になります。参加が難しくても、後で写真を見せてもらうだけでも会話が広がります。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1">{item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        面会の頻度や関わり方に「正解」はありません。どのくらいの間隔で会うのがよいか迷う方は、
        <Link href="/family-visit-rhythm" style={{ color: '#1A5E9E', fontWeight: 700 }}>「入居後の家族の面会頻度と関わり方」</Link>
        の記事で、もう少しくわしく整理しています。また、日々のケアの相談ごとは、
        <Link href="/care-manager-relation" style={{ color: '#1A5E9E', fontWeight: 700 }}>「ケアマネージャーとの上手な付き合い方」</Link>
        も参考になります。
      </p>

      {/* H2-7 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        「その人らしい一日」を守るために、家族ができること
      </h2>
      <p className="text-base mb-4">
        最後に、少しだけ視点を変えてみましょう。老人ホームでの一日は、ただ安全に過ごすだけの時間ではありません。<strong>その人が、その人らしく過ごせる一日</strong>であってほしい——そう願うのは、家族として自然な気持ちです。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#FCE4EC', border: '1px solid #C2185B' }}>
        <p className="text-base mb-2"><strong>📖 あるご家族のケースから</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          父が施設に入って最初のころ、面会に行くたびに元気がなく、こちらまで気持ちが沈みました。あるとき、若い頃に園芸が好きだったことをスタッフに話したら、施設の花壇の水やりを日課に加えてくれたのです。
          次に訪ねたとき、父は「今日はトマトが色づいた」と、少し得意げに教えてくれました。大きなことは何もしていません。ただ、父らしい時間が一つ戻っただけ。でも、その一つが、想像していた以上に大きかったのだと思います。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記は関わり方を分かりやすく伝えるための編集部による架空のエピソードです。ご家庭によって状況は異なり、結果を保証するものではありません。</p>
      </div>
      <p className="text-base mb-4">
        本人の好きだったこと、大切にしてきた習慣を、スタッフに伝えておく。それだけで、決まりきった一日の中に、その人らしい時間が生まれることがあります。家族は、本人の「これまで」を知る、いちばんの語り部です。
      </p>
      <p className="text-base mb-8">
        ここまで読んで、まだ心配が残っていても大丈夫です。一日の過ごし方は、暮らしながら、少しずつ本人に合う形へ整えていけるものです。全部を一度に完璧にする必要はありません。今日は「親の好きなこと・好きだったことを一つ思い出す」だけでも、立派な一歩です。
      </p>

      {/* FAQ */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        老人ホームでの一日の過ごし方について、よくある質問（FAQ）
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
          まとめ：老人ホームの一日は「その人らしいリズム」を大切に
        </h2>
        <p className="text-base mb-3">
          老人ホームの一日は、起床・食事・入浴・就寝の時間をゆるやかな目安にしながら、レクリエーションや機能訓練、季節の行事などで彩られています。施設のタイプによって雰囲気は少しずつ違い、入居直後は生活リズムが乱れやすいものの、多くの方は時間をかけてなじんでいきます。
          家族は、面会や差し入れ、スタッフへの情報共有を通じて、「その人らしい一日」を守る手助けができます。全部を一度に整える必要はありません。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            'まずは「だいたいの一日の流れ」をつかむ（旅館のようなゆるやかな枠と考える）',
            '見学時に「日中どう過ごしていますか」と具体的にたずねる',
            '入居直後の落ち着かなさは自然なこと。あわてず見守る',
            '本人の好きなこと・習慣をスタッフに伝え、ケアに生かしてもらう',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          離れていても、親御さんの一日を気にかけているあなたの気持ちは、それだけで大きな支えです。焦らず、できることからで大丈夫です。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/family-visit-rhythm', label: '入居後の家族の面会頻度と関わり方', icon: '🏡' },
          { href: '/types', label: '施設の種類｜公的施設と民間施設の違い', icon: '🏢' },
          { href: '/how-to-choose', label: '老人ホームの選び方', icon: '📋' },
          { href: '/dementia-care-basics', label: '認知症ケアの基本｜接し方と進行ステージ', icon: '🧠' },
          { href: '/caregiver-mental-care', label: '介護する家族のメンタルケア｜燃え尽き対策', icon: '💚' },
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
        入居後の暮らしのことも、これからの施設選びのことも、一つずつでかまいません。「まだ分からないことばかり」と気負わず、知っておくだけでも心の余裕につながります。
        気になることがあれば、まずは話を聞いてみるところから始めてみてください。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        ※本ページにはアフィリエイト広告を含みます。サービス内容・費用・対応エリアなどを比較し、ご家族の状況に合った選択にお役立てください。
      </p>

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は、老人ホームでの一日の過ごし方に関する一般的な情報をまとめたものです。特定の施設・事業者・結果を保証するものではありません。
          一日の生活の流れ・レクリエーション・行事・食事・入浴などのケアの内容は、施設のタイプや方針、ご本人の心身の状態によって大きく異なります。レクリエーションや機能訓練は、日々を心地よく過ごすための支援であり、病気や老いの改善・治癒を保証するものではありません。
          具体的な内容やご本人に合う暮らし方については、各施設の見学時や入居前の説明、担当のケアマネジャー、お住まいの市区町村の窓口などにご確認ください。
        </p>
      </div>
    </>
  )
}
