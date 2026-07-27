import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '老人ホーム・介護施設の防災 災害への備え',
  description: '老人ホーム・介護施設の防災対策をやさしく整理。介護施設に義務づけられた備え（業務継続計画・避難訓練・消防設備）、地震・火災・水害など災害の種類別の対策、見学時に確認したいポイント、災害時の安否確認、家族が事前にできる備えまで解説します。',
  alternates: {
    canonical: 'https://2ndhappiness.com/facility-disaster-preparedness',
  },
  openGraph: {
    title: '老人ホーム・介護施設の防災と緊急時対応｜災害への備えと家族ができること',
    description: '地震・火災・水害が起きたとき、離れて暮らす親のいる老人ホームは大丈夫？介護施設に義務づけられた防災対策、災害の種類別の備え、見学時の確認ポイント、災害時の安否確認、家族が事前にできる備えまで、やさしく整理しました。',
    url: 'https://2ndhappiness.com/facility-disaster-preparedness',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
    publishedTime: '2026-07-28T05:00:00+09:00',
    modifiedTime: '2026-07-28T05:00:00+09:00',
    images: [
      { url: 'https://2ndhappiness.com/images/hero.jpg', width: 1200, height: 630, alt: '老人ホーム・介護施設の防災と緊急時対応｜災害への備えと家族ができること' },
    ],
  },
}

const summaryItems = [
  '介護施設には、法律や運営基準によって<mark class="highlight">非常災害対策計画の作成・定期的な避難訓練・業務継続計画（BCP。災害時も介護を続けるための備えの計画）が求められています</mark>。「何も備えていない施設」は原則ありません',
  '施設によって、<mark class="highlight">立地（浸水しやすい場所か等）や建物・設備、夜間の職員体制に差があります</mark>。見学のときに防災の取り組みをたずねておくと、後々の安心につながります',
  '災害時の安否確認は、<mark class="highlight">「災害用伝言ダイヤル（171）」や施設の連絡網</mark>など、複数の手段を家族で決めておくと、いざというときにあわてずにすみます',
  '家族が事前にできる備えもあります。<mark class="highlight">持病や飲んでいる薬の情報共有、緊急連絡先の登録、ハザードマップの確認</mark>など、できることから少しずつで十分です',
]

const disasterItems = [
  {
    name: '地震',
    icon: '🌏',
    color: '#FFF3E0',
    border: '#F57C00',
    label: '#E65100',
    body: '家具の固定、避難経路の確保、安否確認の手順などが、非常災害対策計画のなかで定められています。多くの施設で、地震を想定した避難訓練が定期的に行われています。建物の耐震性は、いつごろ建てられたか・耐震改修をしているかによって差があるため、気になる場合は見学時にたずねてみましょう。',
  },
  {
    name: '火災',
    icon: '🔥',
    color: '#FFEBEE',
    border: '#C62828',
    label: '#C62828',
    body: '介護施設は消防法にもとづき、消火・通報・避難の設備や、火災を想定した訓練が求められます。自力で逃げるのが難しい方が多いため、スプリンクラー（天井から自動で放水する設備）や自動火災報知設備などの設置基準が、施設の区分に応じて定められています（消防法施行令。設置の要否や時期は施設により異なります）。',
  },
  {
    name: '水害（洪水・浸水）',
    icon: '🌊',
    color: '#E3F2FD',
    border: '#1A5E9E',
    label: '#1A5E9E',
    body: '川の近くや低い土地にある施設では、大雨による浸水への備えが大切です。浸水想定区域などにあり、市町村の地域防災計画に定められた施設は、「避難確保計画」（いざというとき、誰が・どのように逃げるかを前もって決めておく計画）の作成と避難訓練が義務づけられています（水防法など）。垂直避難（上の階へ逃げる）の手順を決めている施設もあります。',
  },
  {
    name: '土砂災害',
    icon: '⛰️',
    color: '#EFEBE9',
    border: '#6D4C41',
    label: '#5D4037',
    body: '山の近くや傾斜地にある施設では、土砂災害への備えも必要です。土砂災害警戒区域内にあり、地域防災計画に定められた施設も、水害と同じく避難確保計画の作成・訓練が求められます（土砂災害防止法）。ハザードマップで施設の立地を確認しておくと、リスクの大まかなイメージがつかめます。',
  },
]

const checkItems = [
  { q: '🗺 立地とハザードマップ', a: '施設が浸水想定区域や土砂災害警戒区域に入っていないか、市町村のハザードマップで確認できます。区域内でも避難確保計画があれば過度に心配する必要はありませんが、「どんな備えをしているか」をたずねる手がかりになります。' },
  { q: '🏗 建物の耐震・防火', a: '建てられた年代や耐震改修の有無、スプリンクラーや自動火災報知設備の設置状況など。専門的な話なので、見学時に「防災の面で工夫されていることはありますか」と一言たずねるだけで十分です。' },
  { q: '🌙 夜間・休日の職員体制', a: '災害は昼間に起きるとはかぎりません。夜間や休日に何人の職員がいて、どう避難を誘導するのか。ここは施設によって差が出やすい部分です。' },
  { q: '📋 訓練の頻度と内容', a: '避難訓練を年に何回、どんな想定で行っているか。夜間想定や、地域と連携した訓練をしている施設もあります。訓練の様子を教えてもらえると、備えの実際が見えてきます。' },
  { q: '📞 家族への連絡方法', a: '災害時に施設からどう連絡が来るのか、こちらからどう問い合わせればよいのか。あらかじめ決めておくと、いざというときにあわてずにすみます。' },
]

const familyPrepItems = [
  { q: '💊 持病・薬の情報を共有しておく', a: '飲んでいる薬の名前や量、かかりつけ医、アレルギーなどをメモにまとめ、施設と家族で共有しておきます。災害で薬が手元からなくなったときにも、情報があれば再手配がスムーズです。お薬手帳の写しを預けておくのも一つの方法です。' },
  { q: '📇 緊急連絡先を登録・更新する', a: '施設に届けている家族の連絡先が最新か、時々見直しましょう。連絡がつく人を複数登録しておくと、一人に連絡がつかなくても安心です。遠方に住む親戚を「中継役」に決めておくのも有効です。' },
  { q: '🗺 施設周辺のハザードマップを見ておく', a: '施設がどんな災害リスクのある場所にあるのか、家族も把握しておくと、状況を想像しやすくなります。市町村のホームページや窓口で入手できます。' },
  { q: '📱 安否確認の手段を決めておく', a: '災害用伝言ダイヤル（171）や災害用伝言板、SNSなど、電話がつながりにくいときの連絡手段を家族で共有しておきます。毎月1日・15日などにある体験利用日に、一度使ってみると安心です。' },
]

const faqItems = [
  {
    q: '老人ホームは、災害のときにきちんと避難できるのでしょうか？自力で動けない親が心配です。',
    a: '自力で避難するのが難しい方が多いからこそ、介護施設には法律や運営基準によって、非常災害対策計画の作成、消火・避難などの設備、定期的な避難訓練が求められています。2024年4月からは、災害時にも介護サービスをできるだけ続けるための「業務継続計画（BCP）」の作成が、すべての介護サービス事業者に義務づけられました（厚生労働省）。とはいえ、備えの手厚さや夜間の職員体制には施設ごとの差があります。「どんな訓練をしているか」「夜間は何人体制か」などを、見学や入居前の説明のときに具体的にたずねておくと、より安心できます。心配な気持ちは自然なものです。一つずつ確認していけば大丈夫です。',
  },
  {
    q: '災害が起きたとき、施設の親と連絡が取れるか不安です。どうすればいいですか？',
    a: '大きな災害の直後は、電話がつながりにくくなることがよくあります。そのため、連絡手段を一つに頼らず、複数用意しておくことをおすすめします。具体的には、施設からの連絡網（メールやアプリを使う施設もあります）、災害用伝言ダイヤル（171）、災害用伝言板などです。あらかじめ「災害時はまずこの方法で確認する」と家族で決めておくと、いざというときにあわてずにすみます。また、施設に対しても「災害のとき、家族へはどのように連絡をいただけますか」と事前に確認しておくとよいでしょう。すぐに連絡がつかなくても、施設側で安否確認と対応が進められています。落ち着いて待つことも、大切な備えの一つです。',
  },
  {
    q: '施設を選ぶとき、防災の面ではどこを見ればよいですか？',
    a: 'いくつか手がかりがあります。まず、施設がハザードマップ上でどんな場所にあるか（浸水想定区域や土砂災害警戒区域かどうか）。次に、建物の耐震性や、スプリンクラーなどの消防設備。そして、夜間・休日を含めた職員体制と、避難訓練の頻度・内容です。ただし、区域内にある施設が「危険」というわけではありません。リスクのある場所ほど、避難確保計画をしっかり整えている施設も多くあります。大切なのは「立地」そのものより、「どう備えているか」です。見学のときに「防災で工夫されている点はありますか」と一言たずねるだけでも、その施設の姿勢が見えてきます。施設選び全体のポイントは、「老人ホームの選び方」の記事もあわせてご覧ください。',
  },
  {
    q: '停電や断水が長引いたとき、施設では過ごせるのでしょうか？',
    a: '多くの施設では、非常用の電源（自家発電機など）や、飲料水・食料の備蓄をしています。業務継続計画（BCP）のなかで、停電・断水といったライフラインが止まった状況を想定した備えを整えることが求められています。ただし、備蓄の量や自家発電でどこまでまかなえるか（医療的なケアに使う機器を動かせるかなど）は、施設によって差があります。人工呼吸器やたんの吸引など、電気を使う医療的ケアが必要な場合は、停電時にどう対応するのかを、入居前に必ず確認しておくと安心です。心配な点は、遠慮なく施設や担当のケアマネジャー（介護の計画を立てる専門職）に相談してみてください。',
  },
]

export default function FacilityDisasterPreparednessPage() {
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
        path={'/facility-disaster-preparedness'}
        title={'老人ホーム・介護施設の防災と緊急時対応｜災害への備えと家族ができること'}
        description={'地震・火災・水害が起きたとき、離れて暮らす親のいる老人ホームは大丈夫？介護施設に義務づけられた防災対策、災害の種類別の備え、見学時の確認ポイント、災害時の安否確認、家族が事前にできる備えまで、やさしく整理しました。'}
        datePublished={'2026-07-28T05:00:00+09:00'}
        dateModified={'2026-07-28T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* パンくずの BreadcrumbList JSON-LD は Breadcrumb コンポーネント側で出力されるため、
          二重出力を避けるためページ側のインライン定義は置かない */}
      <Breadcrumb items={[{ label: '老人ホーム・介護施設の防災と緊急時対応' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホーム・介護施設の防災と緊急時対応｜災害への備えと家族ができること
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年7月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">参考：厚生労働省（介護サービス事業者の業務継続計画）、総務省消防庁（社会福祉施設の防火安全対策）、国土交通省（要配慮者利用施設の避難確保計画）などの公的資料をもとに、やさしい老人ホームガイド編集部が一般的な内容を整理（2026年7月時点）</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          大きな地震や台風のニュースを見るたびに、「施設にいる親は大丈夫だろうか」と、そっと胸がざわつく——
          離れて暮らすご家族なら、一度は感じたことのある不安ではないでしょうか。すぐに駆けつけられない距離だと、その気がかりはなおさら大きくなります。
        </p>
        <p className="text-base">
          この記事では、<strong>老人ホームや介護施設が災害にどう備えているのか</strong>、そして<strong>家族として事前にできることは何か</strong>を、やさしく整理しました。
          結論から言うと、介護施設には法律や運営基準によって一定の防災対策が求められており、「何も備えていない施設」は原則ありません。まずはそのことを知っておくだけでも、少し気持ちが落ち着くはずです。
        </p>
        <p className="text-base mt-3" style={{ color: '#1B5E37' }}>
          今日は「施設はちゃんと備えている」ことと、「家族ができる小さな備えが一つある」ことが分かれば十分です。全部を一度に読み切らなくて大丈夫。気になったところから、そっと読んでみてください。
        </p>
      </div>

      {/* この記事の歩き方（拾い読み導線） */}
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#F3F8F5', border: '1px solid #2E7D52' }}>
        <p className="text-base mb-1"><strong>🧭 この記事の歩き方</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          全部を一度に読まなくて大丈夫です。今日はまず、<strong>①「施設は法律で防災を求められている」</strong>という安心と、<strong>⑤「家族ができる小さな備えが一つある」</strong>——この2つが分かれば十分です。残りは、施設を見学するときや、気になったときに、また戻ってきてください。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本記事は介護施設の防災・緊急時対応に関する一般的な情報をまとめたもので、特定の施設や結果を保証するものではありません。防災設備・訓練・職員体制・備蓄などの内容は、施設の区分・立地・方針によって大きく異なります。具体的な内容は、各施設の見学時や入居前の説明で必ずご確認ください。制度や基準は改正されることがあります。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        老人ホームや介護施設の防災対策は、法律でどこまで決められている？
      </h2>
      <p className="text-base mb-4">
        「そもそも施設って、災害のときにちゃんと備えているの？」——まずはここから見ていきましょう。じつは介護施設には、いくつかの法律や運営基準によって、防災の取り組みが求められています。ここは少し制度の話になりますが、要点は3つだけです。
      </p>
      <div className="space-y-4 mb-6">
        <div className="rounded-xl p-5 bg-white border border-gray-200" style={{ borderLeft: '4px solid #2E7D52' }}>
          <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>① 非常災害対策計画と避難訓練</p>
          <p className="text-base" style={{ lineHeight: 1.9 }}>介護施設の運営基準では、火災や地震などを想定した<strong>非常災害対策計画</strong>（災害が起きたときの動き方をまとめた計画）を作り、定期的に避難訓練を行うことが求められています。多くの施設が、年に数回の訓練を実施しています。</p>
        </div>
        <div className="rounded-xl p-5 bg-white border border-gray-200" style={{ borderLeft: '4px solid #1A5E9E' }}>
          <p className="font-bold text-base mb-1" style={{ color: '#1A5E9E' }}>② 業務継続計画（BCP）</p>
          <p className="text-base" style={{ lineHeight: 1.9 }}>災害や感染症が起きても、介護をできるだけ止めずに続けるための備えの計画を<strong>業務継続計画（BCP）</strong>といいます。2024年4月からは、すべての介護サービス事業者にこのBCPの作成に加え、定期的な研修・訓練の実施も義務づけられました（厚生労働省。2021年度の制度改正で導入され、経過措置を経て義務化）。</p>
        </div>
        <div className="rounded-xl p-5 bg-white border border-gray-200" style={{ borderLeft: '4px solid #C62828' }}>
          <p className="font-bold text-base mb-1" style={{ color: '#C62828' }}>③ 消防設備と避難確保計画</p>
          <p className="text-base" style={{ lineHeight: 1.9 }}>消防法にもとづき、施設の区分に応じてスプリンクラーや自動火災報知設備などの設置が求められます。また、浸水想定区域や土砂災害警戒区域にあり、市町村の地域防災計画に定められた施設は、<strong>避難確保計画</strong>（誰が・どう逃げるかを前もって決めておく計画）を作り、避難訓練を行うことが義務づけられています（水防法・土砂災害防止法）。</p>
        </div>
      </div>
      <p className="text-base mb-4">
        （※ここは制度の話なので、細かい法律の名前まで覚える必要はありません。「施設は、法律で防災を求められている」——それだけ持ち帰っていただければ十分です。難しいと感じたら、次の章へ読み飛ばしていただいて大丈夫です。）
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base">
          こうした基準があるおかげで、「まったく無防備な施設」は原則としてありません。ただし、<strong>備えの手厚さには施設ごとの差があります</strong>。また、ここでの防災の義務は主に介護保険の指定を受けた事業所に課されるもので、住まいの区分（自立して暮らすタイプのサ高住など）によって適用の範囲が異なることもあります。だからこそ、次にお話しする「災害の種類別の備え」や「見学時のチェックポイント」を知っておくと、施設の姿勢を見分ける手がかりになります。
        </p>
      </div>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        地震・火災・水害——災害の種類ごとに、施設はどう備えている？
      </h2>
      <p className="text-base mb-4">
        「災害」とひとことで言っても、地震・火災・水害・土砂災害では、必要な備えが少しずつ違います。ここでは、代表的な4つの災害について、施設がどんな対策をしているのかを整理しました。すべてを覚える必要はなく、「なるほど、こういう視点があるのか」と眺めるくらいで大丈夫です。
      </p>
      <div className="space-y-4 mb-6">
        {disasterItems.map((d) => (
          <div key={d.name} className="rounded-xl p-5" style={{ backgroundColor: d.color, border: `2px solid ${d.border}` }}>
            <p className="font-bold text-lg mb-2" style={{ color: d.label }}>{d.icon} {d.name}</p>
            <p className="text-sm" style={{ lineHeight: 1.9 }}>{d.body}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        なかでも、自力で逃げるのが難しい方が多い介護施設では、<strong>火災への備え</strong>がとくに重視されてきました。過去に起きた施設火災の教訓から、スプリンクラーなどの設置基準が段階的に強化されてきた経緯があります。とはいえ、施設の建てられた時期や区分によって設備は異なるため、気になる場合は見学時に確認しておくとよいでしょう。
      </p>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        見学・入居前に、防災のどこを見ればいい？
      </h2>
      <p className="text-base mb-4">
        「防災のことなんて、見学で聞いてもいいのかな」——遠慮してしまう方もいますが、大切な家族が長く過ごす場所です。気になることは、遠慮なくたずねて大丈夫です。ここでは、確認しておくと安心なポイントを5つに絞りました。
      </p>
      <div className="space-y-3 mb-6">
        {checkItems.map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1">{item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF3E0', border: '1px solid #F57C00' }}>
        <p className="text-base mb-1"><strong>💡 見学のときのヒント</strong></p>
        <p className="text-base">
          全部を細かく聞き出す必要はありません。「防災の面で、工夫されていることはありますか」と一言たずねるだけでも、答え方や表情から、その施設が防災にどれだけ丁寧に向き合っているかが伝わってきます。答えに具体性があり、質問を歓迎してくれる施設は、日ごろの備えも行き届いていることが多いものです。施設選び全体の進め方は、
          <Link href="/how-to-choose" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホームの選び方」</Link>
          もあわせてご覧ください。
        </p>
      </div>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        災害が起きたとき、家族はどう安否を確認する？
      </h2>
      <p className="text-base mb-4">
        いざ大きな災害が起きたとき、いちばん知りたいのは「親が無事かどうか」ですよね。ところが、災害の直後は電話がつながりにくくなることがよくあります。だからこそ、<strong>連絡手段を一つに頼らず、いくつか用意しておく</strong>ことが安心につながります。
      </p>
      <div className="rounded-xl overflow-x-auto mb-4" style={{ border: '2px solid #1A5E9E' }}>
        <table className="w-full border-collapse text-base">
          <thead>
            <tr style={{ background: '#E3F2FD' }}>
              <th className="text-left px-4 py-2.5" style={{ color: '#0D47A1', fontSize: '13px' }}>手段</th>
              <th className="text-left px-4 py-2.5" style={{ color: '#0D47A1', fontSize: '13px' }}>どんなもの？</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#fff', borderTop: '1px solid #e5e7eb' }}>
              <td className="px-4 py-3 font-bold" style={{ color: '#1A5E9E', whiteSpace: 'nowrap' }}>📞 施設の連絡網</td>
              <td className="px-4 py-3 text-sm text-gray-700">施設から家族へ、電話・メール・アプリなどで安否を知らせる仕組み。連絡方法を事前に確認しておく。</td>
            </tr>
            <tr style={{ background: '#F7FAFD', borderTop: '1px solid #e5e7eb' }}>
              <td className="px-4 py-3 font-bold" style={{ color: '#1A5E9E', whiteSpace: 'nowrap' }}>☎️ 災害用伝言ダイヤル（171）</td>
              <td className="px-4 py-3 text-sm text-gray-700">「171」に電話し、音声で伝言を録音・再生できる仕組み。電話がつながりにくいときに役立つ。</td>
            </tr>
            <tr style={{ background: '#fff', borderTop: '1px solid #e5e7eb' }}>
              <td className="px-4 py-3 font-bold" style={{ color: '#1A5E9E', whiteSpace: 'nowrap' }}>💬 災害用伝言板・SNS</td>
              <td className="px-4 py-3 text-sm text-gray-700">携帯電話会社の伝言板や、家族のSNSグループなど。文字で状況を残せるので、通話が混み合う時間帯でも使いやすい。</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-base mb-4">
        <strong>災害用伝言ダイヤル（171）</strong>は、大きな災害のときに提供される、伝言を録音・再生できる仕組みです。「171」に電話をかけ、案内にしたがって使います。旅行のときに預ける「伝言メモ」の、電話版のようなものだと考えると分かりやすいかもしれません。毎月1日・15日などに体験できる日があるので、一度家族で試しておくと、いざというときに落ち着いて使えます。
      </p>
      <p className="text-base mb-8">
        大切なのは、「すぐに連絡がつかなくても、必要以上に取り乱さないこと」です。電話がつながらないのは、施設に何かあったからとはかぎりません。回線が混み合っているだけのことがほとんどです。施設側では、まず入居者の安全確保と安否確認を進めています。家族は、あらかじめ決めた手段で落ち着いて確認する——それが、いちばん確実な備えになります。
      </p>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        家族が事前にできる備えには、どんなものがある？
      </h2>
      <p className="text-base mb-4">
        「施設にお願いしているのだから、家族にできることはないのでは」——そんなことはありません。じつは、家族だからこそできる備えがいくつもあります。どれも、今日から少しずつ始められることばかりです。全部を一度にやろうとせず、できるものから一つずつで大丈夫です。
      </p>
      <div className="space-y-3 mb-6">
        {familyPrepItems.map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1">{item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        こうした備えは、防災のためだけでなく、日ごろの介護の情報整理にも役立ちます。薬や連絡先の情報をまとめておくことは、急な入院や施設との日常のやり取りの場面でも、きっと力になります。関連して、日々のケアの相談は
        <Link href="/care-manager-relation" style={{ color: '#1A5E9E', fontWeight: 700 }}>「ケアマネージャーとの上手な付き合い方」</Link>
        、離れて暮らす親の見守りには
        <Link href="/senior-watch-service" style={{ color: '#1A5E9E', fontWeight: 700 }}>「高齢者見守りサービスの選び方」</Link>
        の記事も参考になります。
      </p>

      {/* H2-6 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        停電・断水・感染症——「もしも」に施設はどう対応する？
      </h2>
      <p className="text-base mb-4">
        災害というと地震や火事を思い浮かべがちですが、実際には<strong>停電や断水が長引く</strong>ことも、大きな困りごとになります。とくに、電気を使う医療的なケアが必要な方にとっては、心配の種でしょう。ここは、確認しておくと安心なポイントです。
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="rounded-xl p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-2" style={{ color: '#E65100' }}>⚡ 停電への備え</p>
          <p className="text-sm" style={{ lineHeight: 1.9 }}>非常用の電源（自家発電機など）を備える施設が多くあります。ただし、動かせる範囲や時間には限りがあるため、たんの吸引や人工呼吸器など電気を使うケアがある場合は、停電時の対応を必ず個別に確認しておきましょう。</p>
        </div>
        <div className="rounded-xl p-5 bg-white border border-gray-200">
          <p className="font-bold text-base mb-2" style={{ color: '#1A5E9E' }}>💧 断水・備蓄への備え</p>
          <p className="text-sm" style={{ lineHeight: 1.9 }}>飲料水や食料、簡易トイレなどを一定量備蓄している施設が多くあります。備蓄の量や日数は施設によって差があるため、気になる場合はたずねてみましょう。</p>
        </div>
      </div>
      <p className="text-base mb-4">
        また、近年は<strong>感染症の流行</strong>も、災害と並ぶ「もしも」の一つとして備えの対象になっています。業務継続計画（BCP）では、自然災害だけでなく、感染症が広がった場合にも介護を続けられるよう備えることが求められています。面会が一時的に制限されるなど、感染症対策と家族の関わりのバランスに悩む場面もありますが、これも入居者を守るための対応の一つです。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E8F5E9', border: '1px solid #2E7D52' }}>
        <p className="text-base">
          停電・断水・感染症のいずれについても、<strong>「絶対に安全」と言い切れる施設はありません</strong>。どんなに備えていても、想定を超える事態は起こりえます。だからこそ、「完璧かどうか」で判断するのではなく、「起きたときにどう動くかを、きちんと考えているか」を見ることが大切です。備えを誠実に説明してくれる施設は、それだけで信頼の手がかりになります。
        </p>
      </div>

      {/* H2-7 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        在宅で介護している家族が、災害に備えておきたいこと
      </h2>
      <p className="text-base mb-4">
        ここまでは施設の話を中心にしてきましたが、<strong>今はまだ在宅で介護している</strong>というご家族もいらっしゃるでしょう。在宅の場合、災害時の備えは家族が主体になる分、少し違った工夫が必要です。ポイントだけ、そっとお伝えします。
      </p>
      <p className="text-base mb-4">
        まず知っておきたいのが、<strong>「避難行動要支援者名簿」</strong>という仕組みです。これは、災害のときに一人で避難するのが難しい方を支えるために、市区町村が作成する名簿です（災害対策基本法）。要件にあてはまれば対象になりますが、名簿に載っているか・支援者への情報提供に同意しているかは、お住まいの市区町村の窓口で確認できます。あわせて、一人ひとりの避難のしかたを決めておく「個別避難計画」の作成も相談できます。近くの避難所が、車いすや介護が必要な方にも対応した<strong>「福祉避難所」</strong>かどうかも確認しておくと安心です。
      </p>
      <p className="text-base mb-8">
        在宅にも施設にも、それぞれにできる備えがあります。どちらが正しい・災害に強いということではありません。まずは今の暮らしのなかでできる備えを一つ整えるだけで、十分です。もし将来の住まい方をあらためて考えてみたくなったときは、在宅と施設それぞれの良さと難しさを整理した
        <Link href="/facility-vs-home-care" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホームと在宅介護の比較」</Link>
        の記事も参考にしてください。焦って結論を出す必要はありません。備えを一つずつ整えながら、ご家族に合った形をゆっくり考えていけば大丈夫です。
      </p>

      {/* FAQ */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        介護施設の防災について、よくある質問（FAQ）
      </h2>
      <div className="space-y-4 mb-10">
        {faqItems.map((item, i) => (
          <div key={i} className="rounded-xl p-5 bg-white border border-gray-200">
            <p className="font-bold text-base mb-2" style={{ color: '#2E7D52' }}>Q. {item.q}</p>
            <p className="text-base" style={{ lineHeight: 1.9 }}>A. {item.a}</p>
          </div>
        ))}
      </div>

      {/* 体験談 */}
      <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: '#FCE4EC', border: '1px solid #C2185B' }}>
        <p className="text-base mb-2"><strong>📖 あるご家族のケースから</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          母が入居している施設を選ぶとき、正直、防災のことまで頭が回っていませんでした。あるとき台風で大雨が降り、地元が浸水したというニュースを見て、あわてて施設に電話をしたのを覚えています。
          そのとき職員の方が、「うちは避難確保計画があって、いざというときは上の階へ移る手順を決めています。訓練もしていますよ」と落ち着いて説明してくれて、ふっと肩の力が抜けました。
          それ以来、面会のときに「今日は避難訓練の日でした」と教えてもらうたび、ここに任せてよかったと思えるようになりました。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記は防災への向き合い方を分かりやすく伝えるための編集部による架空のエピソードです。ご家庭や施設によって状況は異なり、結果を保証するものではありません。</p>
      </div>

      {/* まとめ */}
      <div className="rounded-xl p-6 mb-10" style={{ backgroundColor: '#F3F8F5', border: '2px solid #2E7D52' }}>
        <h2 className="text-xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
          まとめ：施設の防災は「備えの有無」より「どう備えているか」を知ることから
        </h2>
        <p className="text-base mb-3">
          介護施設には、非常災害対策計画・避難訓練・業務継続計画（BCP）・消防設備など、法律や運営基準にもとづく防災対策が求められています。「何も備えていない施設」は原則ありません。とはいえ、備えの手厚さや立地には施設ごとの差があります。見学のときに防災の取り組みをたずね、家族としても情報共有や安否確認の手段を整えておくことで、「もしも」への不安はぐっと小さくなります。全部を一度に完璧にする必要はありません。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            '「施設は法律で防災を求められている」——まずこの安心を持ち帰る',
            '見学時に「防災で工夫している点はありますか」と一言たずねる',
            '災害用伝言ダイヤル（171）など、安否確認の手段を家族で決めておく',
            '持病・薬の情報や緊急連絡先を、施設と家族で共有・更新しておく',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          離れていても、親御さんの安全を気にかけているあなたの気持ちは、それだけで大きな備えです。焦らず、できることからで大丈夫です。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/how-to-choose', label: '老人ホームの選び方', icon: '📋' },
          { href: '/senior-watch-service', label: '高齢者見守りサービスの選び方｜種類・費用・自治体支援', icon: '📡' },
          { href: '/facility-vs-home-care', label: '老人ホームと在宅介護の比較｜7つの判断軸', icon: '⚖️' },
          { href: '/care-manager-relation', label: 'ケアマネージャーとの上手な付き合い方', icon: '🤝' },
          { href: '/daily-life-in-facility', label: '老人ホーム入居後の一日の過ごし方', icon: '🕘' },
          { href: '/types', label: '施設の種類｜公的施設と民間施設の違い', icon: '🏢' },
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
        防災のことも、これからの施設選びのことも、一度に全部を考えなくて大丈夫です。ここまで読んで、まだ迷っていても構いません。迷う時間そのものが、ご家族を大切に思っている証でもあります。「まだ分からないことばかり」と気負わず、知っておくだけでも心の余裕につながります。
        気になることがあれば、まずは話を聞いてみるところから始めてみてください。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        ※本ページにはアフィリエイト広告を含みます。サービス内容・費用・対応エリアなどを比較し、ご家族の状況に合った選択にお役立てください。
      </p>

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は、老人ホーム・介護施設の防災および緊急時対応に関する一般的な情報をまとめたものです。特定の施設・事業者・結果を保証するものではありません。
          防災設備・避難訓練・職員体制・備蓄・業務継続計画（BCP）などの内容は、施設の区分・立地・方針によって大きく異なります。また、関連する法律・制度・基準は改正されることがあります。
          具体的な内容やご本人に合う備えについては、各施設の見学時や入居前の説明、担当のケアマネジャー、お住まいの市区町村の防災・介護保険の窓口などにご確認ください。災害時の行動については、国や自治体、消防・気象庁などの公的な情報を優先してください。
        </p>
      </div>
    </>
  )
}
