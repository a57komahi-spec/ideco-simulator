import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '老人ホームの面会頻度｜入居後の家族の関わり方',
  description: '老人ホームの面会頻度はどれくらいが目安？親の入居後、家族の関わり方に正解はある？週1回〜月数回という実情から、面会で何をすればいいか、遠方でも気持ちを届ける工夫、入居直後の注意点、職員との付き合い方まで、迷うご家族にやさしく整理しました。',
  alternates: {
    canonical: 'https://2ndhappiness.com/family-visit-rhythm',
  },
  openGraph: {
    title: '入居後の家族の面会頻度はどれくらい？関わり方のヒント',
    description: '老人ホームに親が入居したあと、家族の面会頻度はどれくらいが目安？関わり方に正解はある？遠方で通えないときの工夫、入居直後の注意点、職員との付き合い方まで、迷うご家族にやさしく整理しました。',
    url: 'https://2ndhappiness.com/family-visit-rhythm',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

const summaryItems = [
  '面会頻度に<mark class="highlight">これが正解という決まりはありません</mark>。ご家族の暮らしに無理のないペースで大丈夫です',
  '実際には<mark class="highlight">週1回〜月数回</mark>という方が多いものの、回数より「来たときの関わり方」のほうが大切です',
  '遠方で通えなくても、<mark class="highlight">電話・手紙・ビデオ通話・職員との連携</mark>で気持ちはちゃんと届きます',
  '<mark class="highlight">来られない日に自分を責めなくて大丈夫</mark>。続けられる関わり方を見つけることが、いちばんの近道です',
]

const frequencyTypes = [
  {
    label: 'ほぼ毎日〜週数回',
    who: '施設が近く、時間に余裕のある方',
    note: '顔を見られる安心感は大きい一方、毎日通うことがご自身の負担になりすぎないよう、ほどよい距離感も大切です。',
    color: '#E8F5E9', border: '#2E7D52', text: '#2E7D52',
  },
  {
    label: '週1回くらい',
    who: '仕事や家庭と両立している方',
    note: '生活のリズムに組み込みやすく、長く続けやすいペースです。「日曜の午後は会いに行く日」と決めている方も多いです。',
    color: '#E3F2FD', border: '#1A5E9E', text: '#1A5E9E',
  },
  {
    label: '月1〜2回',
    who: '少し離れて暮らしている方',
    note: '回数は多くなくても、1回ずつをていねいに。来られない間は電話やビデオ通話でつなぐ方が多いです。',
    color: '#FFF8E1', border: '#FFC107', text: '#E65100',
  },
  {
    label: '数か月に1回・節目ごと',
    who: '遠方・海外などで頻繁には通えない方',
    note: '帰省や行事のタイミングでまとめて。普段は手紙や電話、職員さんからの近況報告で関わりを保つ形です。',
    color: '#FCE4EC', border: '#C2185B', text: '#C2185B',
  },
]

const visitIdeas = [
  { t: '①「特別なこと」をしようとしない', d: '気のきいた話をしようと気負わなくて大丈夫です。隣に座って一緒にお茶を飲む、テレビを眺める——その「いつもの時間」こそが、ご本人にとっての安心になります。' },
  { t: '② 昔の話や写真を持っていく', d: '若いころの写真や、家族のアルバムは会話のきっかけになります。昔の記憶は残りやすいと言われ、思い出話がはずむことも。認知症があっても、なじみの話題は表情をやわらげてくれることがあります。' },
  { t: '③ 季節や行事を持ち込む', d: '桜の枝を一輪、好きだったお菓子、孫の運動会の動画。外の季節やできごとを少し届けるだけで、施設での毎日に彩りが生まれます。' },
  { t: '④ 短くても、また来ると伝えて帰る', d: '長居が難しい日もあります。短時間でも「また来るね」と笑顔で伝えて帰れば、ご本人は次を楽しみに待てます。滞在時間の長さより、また会える約束のほうが心に残ります。' },
]

const remoteIdeas = [
  { t: '電話・ビデオ通話を「曜日で決める」', d: '「水曜の夜は電話の日」と決めておくと、お互い習慣にしやすくなります。顔が見えるビデオ通話は、施設の協力を得られる場合も。まずは職員さんに相談してみましょう。' },
  { t: '手紙やハガキを送る', d: 'スマホが苦手な世代には、手書きの手紙が驚くほど喜ばれます。何度も読み返せて、お部屋に飾れるのも紙ならでは。短い一言でも十分です。' },
  { t: '職員さん経由で近況を共有する', d: '担当の職員さんやケアマネージャー（介護の計画を立て、調整してくれる専門職）に「最近どうですか」と尋ねれば、面会できない間の様子を教えてもらえます。家族の写真を預けておく方法もあります。' },
  { t: '近くに住む家族・きょうだいと分担する', d: '全員が同じ頻度で通う必要はありません。近い人が顔を出し、遠い人は電話や費用面で支える——役割を分け合えば、無理なく続けられます。' },
]

const faqItems = [
  {
    q: '親を老人ホームに入れたあと、どれくらいの頻度で面会に行けばいいですか？',
    a: '「これが正しい」という決まった回数はありません。実際には、週に1回くらいの方から月に1〜2回の方まで幅広く、ご家族の住まいの距離・仕事・体調によってさまざまです。大切なのは、無理をして頻繁に通って疲れきってしまうことより、長く続けられるペースを見つけることです。回数が少なくても、電話やビデオ通話、手紙でつながることはできますし、来られた日のひとときをていねいに過ごせれば、ご本人にはきちんと気持ちが伝わります。まずはご自身の生活に無理のないリズムから始めて、必要に応じて調整していくのがおすすめです。',
  },
  {
    q: '仕事が忙しくてなかなか会いに行けません。罪悪感があります。',
    a: 'そう感じてしまうのは、それだけ親御さんを大切に思っているからこそです。けれど、頻繁に通えないこと自体は、けっして悪いことでも、愛情が足りないことでもありません。施設に入居していただいたのは、ご家族みんなが無理なく暮らし続けられる形を選んだ結果のはずです。会いに行けない日は、夜に短い電話を1本入れる、週末に手紙を書く、職員さんに様子を聞くといった方法で、十分に気持ちはつながります。ご自身を責めるより、続けられる関わり方を一つ見つけることのほうが、結果的にご本人の安心にもつながります。',
  },
  {
    q: '面会のとき、何を話せばいいか分かりません。会話が続きません。',
    a: '無理に話を盛り上げようとしなくて大丈夫です。むしろ、隣に座って一緒にお茶を飲んだり、テレビを見たり、窓の外を眺めたりする静かな時間そのものが、ご本人にとっての安心になります。会話のきっかけがほしいときは、昔の写真やアルバムを持っていく、好きだった食べ物や季節の話題を持ち込むのがおすすめです。昔の思い出は記憶に残りやすいと言われ、認知症がある場合でも、なじみの話題は表情をやわらげてくれることがあります。「うまく話さなきゃ」と気負わず、ただそばにいる——それで十分です。',
  },
  {
    q: '面会に行くと親が「家に帰りたい」と言います。どう対応すればいいですか？',
    a: 'とてもつらく、胸が痛む場面ですよね。まずは否定せず、「そう思うよね」「寂しいよね」と気持ちを受けとめることが大切です。すぐに説得しようとすると、かえってお互いがつらくなることがあります。対応に迷うときは、施設の職員さんやケアマネージャーに相談してみてください。日中の過ごし方を工夫したり、声のかけ方を一緒に考えたりと、専門職ならではのヒントをもらえます。なお、こうした訴えは入居直後に出やすく、環境に慣れるにつれて落ち着いていく方も多いものです。一人で抱え込まず、施設と一緒に向き合っていきましょう。',
  },
  {
    q: '面会の回数が少ないと、施設での扱いが悪くなったりしませんか？',
    a: 'ご心配になる気持ちはよく分かりますが、面会回数の多さでケアの内容が変わるようなことは、基本的にありません。職員はどの入居者の方にも、必要なケアを提供しています。ただ、ご家族と職員のあいだで情報を共有できていると、ご本人の好みや生活歴が伝わり、より一人ひとりに合った関わりにつながりやすいのは事実です。頻繁に通えなくても、電話やメモで「父は昔こういう仕事をしていて」「甘いものが好きです」といったことを伝えておくと、施設との連携が深まります。回数ではなく、こうした情報のやりとりを大切にすると安心です。',
  },
]

export default function FamilyVisitRhythmPage() {
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
        path={'/family-visit-rhythm'}
        title={'入居後の家族の面会頻度はどれくらい？関わり方のヒント'}
        description={'老人ホームに親が入居したあと、家族の面会頻度はどれくらいが目安？関わり方に正解はある？遠方で通えないときの工夫、入居直後の注意点、職員との付き合い方まで、迷うご家族にやさしく整理しました。'}
        datePublished={'2026-06-30T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Breadcrumb items={[{ label: '入居後の家族の面会頻度と関わり方' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホーム入居後の面会はどれくらい？関わり方に正解はあるか
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年6月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">※本記事の制度・相談窓口に関する記述は厚生労働省・地域包括支援センターの公開情報を参考にしています（2025年時点）。面会頻度や関わり方の傾向は、特定の統計ではなく、編集部が一般的な実情を整理したものです。</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          親が老人ホームに入居して、ひと息ついたのも束の間——「どれくらい会いに行けばいいんだろう」「あまり行けていないけど、これでいいのかな」。
          そんなふうに、新しい悩みが生まれてくる方は少なくありません。
        </p>
        <p className="text-base">
          先に、いちばん大事なことをお伝えします。<strong>面会の頻度に「これが正解」という決まりはありません</strong>。
          毎日通える方もいれば、月に一度がやっとの方もいます。どちらが正しいということはなく、ご家族それぞれの暮らしに無理のない形でいいのです。
          この記事では、<strong>みんながどれくらい面会しているのか、来たときに何をすればいいのか、遠くて通えないときはどうするのか</strong>を、順番にやさしく整理しました。
          気になるところだけ、拾い読みしてもらって大丈夫です。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本記事は、老人ホーム入居後のご家族の関わり方に関する一般的な情報をまとめたものです。面会のルールや相談の窓口は、特別養護老人ホーム・有料老人ホーム・サービス付き高齢者向け住宅など、施設の種類や時期によって異なります。具体的なご相談は、入居先の施設・職員・ケアマネージャーなどの専門職にお寄せください。なお、本ページは広告（アフィリエイト）を含みます。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        老人ホーム入居後の面会頻度に「正解」はある？
      </h2>
      <p className="text-base mb-4">
        「世間の人はどうしてるんだろう」——まわりに聞きにくいぶん、いちばん気になるところですよね。
        結論からいうと、<strong>面会頻度に決まった正解はありません</strong>。施設からも「これくらい来てください」と回数を求められることは、基本的にありません。
      </p>
      <p className="text-base mb-4">
        大切なのは、回数そのものより<strong>「無理なく続けられるかどうか」</strong>です。
        最初に張り切って毎日通っても、ご自身が疲れきってしまっては長続きしません。
        面会は短距離走ではなく、これから何年も続くかもしれないマラソンのようなもの。ペース配分を考えて、ご家族の生活に組み込める形を見つけることが、結果的にいちばんご本人のためにもなります。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base">
          💡 ここで覚えておきたいのは、<strong>「回数の多さ＝愛情の深さ、ではない」</strong>ということです。
          たくさん通えなくても、来たときの関わり方や、離れていてもつながる工夫で、気持ちはちゃんと届きます。まずは肩の力を抜いて読み進めてください。
        </p>
      </div>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        みんなどれくらい来てる？面会頻度の目安と4つのパターン
      </h2>
      <p className="text-base mb-4">
        正解はないとはいえ、「だいたいの目安が知りたい」という方も多いはずです。
        あくまで傾向ですが、ご家族の面会頻度は、<strong>住まいの距離や生活状況によって、おおよそ4つのパターン</strong>に分かれます。
        ご自身に近いものを探す参考にしてください。
      </p>
      <div className="space-y-4 mb-6">
        {frequencyTypes.map((f) => (
          <div key={f.label} className="rounded-xl p-5" style={{ backgroundColor: f.color, border: `2px solid ${f.border}` }}>
            <p className="font-bold text-lg mb-2" style={{ color: f.text }}>{f.label}</p>
            <div className="rounded-lg px-4 py-3" style={{ backgroundColor: 'rgba(255,255,255,0.75)' }}>
              <p className="text-sm mb-1"><strong>こんな方に多い：</strong>{f.who}</p>
              <p className="text-sm" style={{ lineHeight: 1.8 }}>{f.note}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-600 mb-4">
        ※上記は、明確な統計に基づくものではなく、傾向としてのおおまかな目安です。平均に届かないからといって、ご自身を責める必要はありません。
      </p>
      <p className="text-base mb-8">
        どのパターンが良い・悪いということはありません。
        最初は「週1回」と決めていても、ご本人の状態やご自身の事情に合わせて、ゆるやかに変えていって大丈夫です。
        大事なのは、世間の平均に自分を合わせることではなく、<strong>ご家族にとって続けやすいリズムを見つけること</strong>です。
      </p>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        なぜ面会に行きづらくなるの？よくある気持ちの整理
      </h2>
      <p className="text-base mb-4">
        「行かなきゃと思うのに、足が向かない」——そんな自分に戸惑うこともあるかもしれません。
        でも、それは決してあなただけではありません。面会が重く感じられる理由には、いくつかのよくあるパターンがあります。
      </p>
      <div className="space-y-3 mb-6">
        {[
          { q: '「家に帰りたい」と言われるのがつらい', a: '会うたびに引きとめられると、後ろめたさで足が遠のくのは自然なことです。これは入居直後によく見られ、慣れとともにやわらぐ方も多い反応です。' },
          { q: '会話が続かず、気まずい', a: '何を話せばいいか分からず、沈黙が気まずくて……という声もよく聞きます。でも、無理に話さなくていいんです（くわしくは次の章で）。' },
          { q: '元気がない姿を見るのがこたえる', a: '弱っていく親を見るのは、誰にとってもこたえるものです。その重さを感じるのは、愛情があるからこそ。つらいと感じる自分を否定しないでください。' },
          { q: '単純に、時間と距離の問題', a: '仕事・子育て・自分の体調。物理的に通えない事情は、誰にでもあります。これは気持ちの問題ではなく、工夫で乗り越えていける部分です。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #C2185B' }}>
            <p className="font-bold text-base mb-1">😔 {item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        こうした気持ちは、どれも自然なものです。
        「足が向かない自分はダメだ」なんて、思わなくて大丈夫です。
        理由が分かれば、対処の糸口も見えてきます。気持ちがつらいときは、施設の相談員（生活相談員などの相談担当職員）や
        <Link href="/caregiver-mental-care" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護する家族のメンタルケア」</Link>
        も頼ってください。認知症があって接し方に悩むときは、
        <Link href="/dementia-care-basics" style={{ color: '#1A5E9E', fontWeight: 700 }}>「認知症ケアの基本」</Link>
        もあわせてどうぞ。
      </p>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        面会のとき何をすればいい？関わり方の4つのヒント
      </h2>
      <p className="text-base mb-4">
        「せっかく行くなら、いい時間にしたい。でも何をすれば？」——そんな方へ、肩の力を抜いて実践できるヒントを4つ紹介します。
        どれも、特別な準備はいりません。
      </p>
      <div className="space-y-3 mb-6">
        {visitIdeas.map((v) => (
          <div key={v.t} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>{v.t}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{v.d}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base mb-2"><strong>📖 私たちのケースでは（編集部・架空の体験談）</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          施設に入った母は、最初の数回、会うたびに「いつ帰れるの」とこぼしていました。私は答えに詰まって、面会が憂うつでした。
          あるとき、無理に話すのをやめて、昔の家族旅行のアルバムを持っていったんです。すると母は写真を一枚ずつ指さして、楽しそうに思い出を話し始めて。
          それからは、長く話さなくても、ただ隣で同じものを見ているだけでいいんだと思えるようになりました。毎週は行けませんが、行けた日にそうやって過ごせれば、それで十分かなと、今は思っています。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記は関わり方を分かりやすく伝えるための編集部による架空のエピソードです。個人の感想であり、同じ結果を保証するものではありません。</p>
      </div>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        遠方で頻繁に通えないときの関わり方
      </h2>
      <p className="text-base mb-4">
        遠くに住んでいる、海外赴任中、自分の体調がすぐれない——どうしても頻繁には通えない事情を抱えた方も多いはずです。
        そんなときでも、<strong>「会いに行く」以外の関わり方</strong>はたくさんあります。距離があっても、気持ちはちゃんと届けられます。
      </p>
      <div className="space-y-3 mb-6">
        {remoteIdeas.map((r) => (
          <div key={r.t} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #1A5E9E' }}>
            <p className="font-bold text-base mb-1">📡 {r.t}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>{r.d}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        ここで一度、立ち止まって深呼吸を。
        <strong>通えない日に、自分を責める必要はありません</strong>。大切なのは「会えない＝関われない」ではない、と知っておくこと。
        手紙一通、電話一本でも、つながりは保てます。離れて暮らすきょうだいとの分担については
        <Link href="/sibling-care-discussion" style={{ color: '#1A5E9E', fontWeight: 700 }}>「兄弟姉妹で介護を分担する話し合い方」</Link>
        も参考になります。
      </p>

      {/* H2-6 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        入居直後の時期に、気をつけておきたいこと
      </h2>
      <p className="text-base mb-4">
        入居してからの最初の数週間〜数か月は、ご本人にとって環境が大きく変わる時期です。
        この時期は少し意識して関わると、ご本人も施設にもなじみやすくなります。とはいえ、ここでも「頑張りすぎない」が合言葉です。
      </p>
      <p className="text-base mb-4">
        環境の変化で、一時的に元気がなくなったり、夜眠れなくなったり、「帰りたい」と訴えが強まったりすることがあります。
        これは<strong>リロケーションダメージ（住まいが変わることで起きる、心や体の一時的な不調）</strong>と呼ばれ、多くの方に見られる反応とされています。
        新しい環境に慣れるにつれてやわらいでいく方が多い一方で、長引いたり、体調の変化につながったりすることもあります。気になる様子が続くときは、あわてず、早めに施設の職員や主治医に相談してみてください。
      </p>
      <p className="text-base mb-4">
        この時期にできることは、難しいことではありません。たとえば、<strong>使い慣れた日用品や、好きだった写真・小物を持ち込む</strong>と、お部屋がご本人らしい空間になり、安心につながります。
        また、入居直後は施設に「父はこういう性格で」「こんな習慣があって」と伝えておくと、職員さんが関わりの手がかりにできます。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base">
          💡 「最初だから毎日通わなきゃ」と気負う方もいますが、必ずしもそうではありません。
          ご本人が新しい生活リズムに慣れるためには、適度な距離も必要です。施設の職員さんと相談しながら、ちょうどよい関わり方を一緒に探していきましょう。
        </p>
      </div>

      {/* H2-7 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        施設・職員と上手に関わるには？
      </h2>
      <p className="text-base mb-4">
        入居後の暮らしを支えてくれるのは、日々ケアにあたる施設の職員さんたちです。
        ご家族が職員さんと良い関係を築けていると、ご本人の毎日も、より安心できるものになりやすいものです。
      </p>
      <p className="text-base mb-4">
        構える必要はありません。基本は<strong>「感謝を言葉にする」「気になることは早めに相談する」</strong>の2つだけ。
        「いつもありがとうございます」のひと言は、職員さんにとっても励みになります。
        逆に、気になることを我慢してため込むより、その都度ていねいに伝えたほうが、お互いに気持ちよく連携できます。
      </p>
      <p className="text-base mb-4">
        面会のときには、職員さんに<strong>「最近どんな様子ですか」と尋ねてみる</strong>のもおすすめです。
        食事の様子、ほかの入居者との交流、表情の変化など、家族が会うだけでは分からない一面を教えてもらえます。
        ケアの方針について相談したいことがあれば、ケアプランを担当するケアマネージャー（介護の計画を立て、調整してくれる専門職。施設の担当者の場合もあれば、外部の居宅介護支援事業所の担当者の場合もあります）に声をかけるとよいでしょう。
      </p>
      <p className="text-base mb-8">
        もし対応に疑問や不安を感じたときは、ためらわず施設の相談窓口に伝えてかまいません。
        言いにくいと感じる場合は、お住まいの地域を担当する地域包括支援センター（高齢者の暮らしを地域で支える相談窓口）に相談する方法もあります。
        施設選びの段階からやり直したい場合は、
        <Link href="/how-to-choose" style={{ color: '#1A5E9E', fontWeight: 700 }}>「施設の選び方」</Link>
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
          まとめ：面会の頻度より「続けられる関わり方」を
        </h2>
        <p className="text-base mb-3">
          老人ホーム入居後の面会頻度に、決まった正解はありません。
          週に1回の方も、月に数回の方も、それぞれの暮らしに合ったペースで関わっています。
          回数の多さより、来たときのひとときをていねいに過ごすこと、そして離れていてもつながる工夫を続けることのほうが、ずっと大切です。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            'ご家族の生活に無理のない、続けやすいペースを見つける',
            '面会では特別なことより「ただそばにいる時間」を大切にする',
            '通えない日は電話・手紙・職員さんとの連携で気持ちをつなぐ',
            '今日は、職員さんに「最近どんな様子ですか」と一言聞いてみる、でも十分',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          来られない日に、自分を責めなくて大丈夫です。あなたが気にかけているその気持ちは、きっとご本人にも届いています。焦らず、できる形で関わっていきましょう。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/caregiver-mental-care', label: '介護する家族のメンタルケア｜燃え尽き対策', icon: '💚' },
          { href: '/sibling-care-discussion', label: '兄弟姉妹で介護を分担する話し合い方', icon: '🤝' },
          { href: '/dementia-care-basics', label: '認知症ケアの基本｜接し方と進行ステージ', icon: '🧠' },
          { href: '/tell-parents', label: '親に老人ホームを前向きに考えてもらうために', icon: '👪' },
          { href: '/end-of-life-at-home', label: '老人ホームでの看取り｜最期の準備', icon: '🕊️' },
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
        これからも安心して関わっていくために、地域の相談窓口やほかの選択肢を「知っておくだけ」でも、心の余裕につながります。
        知っておくことは、今の施設や暮らしを否定することでも、急いで動くことでもありません。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        ※本ページにはアフィリエイト広告を含みます。費用・サービス内容・面会のしやすさなどを比較し、ご家族の状況に合った選択にお役立てください。
      </p>

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は、老人ホーム入居後のご家族の面会や関わり方に関する一般的な情報をまとめたものです。特定の関わり方による効果や結果を保証・推奨するものではありません。
          面会のルール（時間帯・人数・感染症対策など）や、ご本人の状態に応じた対応は、施設の方針や時期によって異なる場合があります。
          実際の対応については、入居先の施設・職員・担当のケアマネージャー、お住まいの市区町村や地域包括支援センターなどの専門職にご相談のうえ、ご本人とご家族�