import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '老人ホームと在宅介護を徹底比較｜後悔しない判断軸',
  description: '老人ホームと在宅介護、どちらを選べばいい？費用・介護の負担・本人の希望・医療体制など7つの判断軸で、在宅介護と施設をやさしく比較。介護保険の使い方や「両方を組み合わせる」という選択肢まで、先輩家族の視点でまとめました。',
  alternates: {
    canonical: 'https://2ndhappiness.com/facility-vs-home-care',
  },
  openGraph: {
    title: '老人ホームと在宅介護を比較｜後悔しないための判断軸',
    description: '在宅介護と施設介護、どちらが正解ということはありません。費用・介護の負担・本人の希望・医療体制など7つの判断軸で、やさしく比較しました。',
    url: 'https://2ndhappiness.com/facility-vs-home-care',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

const summaryItems = [
  '在宅介護と施設介護に<mark class="highlight">「どちらが正しい」という答えはありません</mark>。ご本人と家族の状況に合うほうが正解です',
  '費用は、在宅なら<mark class="highlight">介護保険の自己負担（所得に応じて1〜3割）＋実費</mark>、施設なら<mark class="highlight">月額の目安5〜30万円</mark>が一つの見方です（2025年時点の目安）',
  '迷ったら<mark class="highlight">費用・介護の負担・本人の希望・医療体制など7つの軸</mark>で、いっしょに整理していきましょう',
  '「どちらか一方」ではなく、<mark class="highlight">デイサービスやショートステイで組み合わせる</mark>という中間の選択肢もあります',
]

const compareRows = [
  {
    axis: '費用の考え方',
    icon: '💴',
    home: '介護保険の自己負担（所得に応じて1〜3割）＋おむつ代・食費などの実費。住み慣れた家なら家賃はかからないことが多い',
    facility: '家賃・食費・介護サービス費などを合わせた月額。目安は特養で月5〜15万円、介護付き有料老人ホームで月15〜30万円ほど（2025年時点・地域や施設で大きく異なります）',
  },
  {
    axis: '家族の負担',
    icon: '🫂',
    home: '食事・入浴・排せつの介助や見守りを家族が担う場面が多く、心身の負担が続きやすい',
    facility: '日々の介助は施設のスタッフが担う。家族は「介護者」から「見守る家族」へ役割が変わりやすい',
  },
  {
    axis: '本人の暮らし',
    icon: '🏠',
    home: '住み慣れた家・地域で、これまでの生活リズムを保ちやすい',
    facility: '環境は変わるが、同世代との交流やレクリエーション、規則正しい生活が得られやすい',
  },
  {
    axis: '医療・緊急時',
    icon: '🏥',
    home: '訪問診療・訪問看護と組み合わせる形。夜間の急変時は家族が対応することも',
    facility: '施設の種類によっては看護職員の配置や協力医療機関との連携があり、気づいてもらいやすい傾向（住宅型・サ高住など医療体制は施設ごとに差があります）',
  },
  {
    axis: '認知症への対応',
    icon: '🧠',
    home: '慣れた環境で落ち着ける一方、目が離せず家族の負担が大きくなりやすい',
    facility: 'グループホームなど認知症ケアに対応した住まいという選択肢がある',
  },
  {
    axis: '始めやすさ',
    icon: '🕒',
    home: '要介護認定を受ければ、比較的早く在宅サービスを使い始めやすい',
    facility: '特養は原則要介護3以上（要介護1〜2でも特例的に入所が認められる場合あり）で待機が生じることもあり、民間施設は比較的早く入居できる場合がある',
  },
]

const faqItems = [
  {
    q: '在宅介護と老人ホーム、どちらのほうが費用は安いですか？',
    a: 'ケースによって変わるため、一概にどちらが安いとは言いきれません。在宅介護は、介護保険の居宅サービス（訪問介護やデイサービスなど）を使い、その自己負担は所得に応じて1〜3割です。これに、おむつ代や食費などの実費が加わります。住み慣れた家であれば家賃がかからないぶん、月々の負担を抑えやすい面があります。一方、施設は家賃・食費・介護サービス費などを合わせた月額がかかり、目安は特別養護老人ホーム（特養）で月5〜15万円、介護付き有料老人ホームで月15〜30万円ほどです（2025年時点の一般的な目安で、地域や施設によって大きく異なります）。ただし在宅でも、介護のために家族が仕事をセーブすると収入が減るなど、金額に表れにくい負担もあります。数字だけでなく「家族の時間や体力」も含めて総合的に見ると、後悔しにくくなります。',
  },
  {
    q: '親は「家にいたい」と言っています。在宅介護を続けるべきでしょうか？',
    a: 'ご本人の「家にいたい」という気持ちは、とても大切にしたいものです。ただ、その希望を叶え続けるために家族が倒れてしまっては、結果的にご本人も安心できません。大切なのは「在宅か施設か」の二択で考えず、「どうすればご本人の希望をできるだけ尊重しながら、家族も無理なく続けられるか」を一緒に考えることです。たとえば、日中はデイサービス、ときどきショートステイ（短期間の宿泊）を使って家族が休む、といった組み合わせで在宅を続ける方法もあります。それでも負担が大きいと感じたときに、施設という選択肢を検討する——という順番で構いません。答えを今日ひとつに決めなくても大丈夫です。',
  },
  {
    q: '在宅介護の限界は、どこで判断すればいいですか？',
    a: '「ここまでが限界」という決まった線引きはありませんが、いくつかの目安はあります。たとえば、夜間の対応が続いて家族が眠れない日が増えた、目が離せず外出もままならない、家族の心身に不調が出てきた、介護をめぐって家族間の関係がぎくしゃくしてきた——こうしたサインが重なってきたら、一度立ち止まって考えるタイミングかもしれません。ただ、これは「在宅をあきらめる」という話ではなく、「使える制度やサービスを見直す」きっかけです。まずは担当のケアマネージャー（介護の計画を立て、調整してくれる専門職）に率直に相談してみてください。サービスの組み替えで乗り切れることもありますし、その延長線上に施設という選択肢もあります。なお、もし今いくつも当てはまっても、それはあなたが精いっぱい介護してきた証拠です。どうかご自分を責めないでください。',
  },
  {
    q: '施設に入れることに、後ろめたさを感じてしまいます。',
    a: '「親を見捨てるようで…」と後ろめたさを感じる方は少なくありません。でも、決してそんなことはありません。施設という選択肢を検討するのは、ご本人にとっても家族にとっても、みんなが安心して続けられる介護の形を探しているからこそです。専門のスタッフによるケアや、同世代との交流、規則正しい生活が、ご本人の暮らしを支えてくれる面もあります。介護を全部ひとりで背負い込んで共倒れになるより、頼れるところは頼りながら、家族は「そばで見守る存在」として関わり続ける——それも立派な介護のかたちです。迷う気持ちそのものが、ご家族を大切に思っている証拠です。どうか「見捨てる」ではなく「より良い環境を選ぶ」と受け止めてください。',
  },
  {
    q: '在宅から施設へ、途中で切り替えることはできますか？',
    a: 'はい、できます。最初から「ずっと在宅」「ずっと施設」と決めておく必要はありません。実際、多くのご家族が、まずは在宅で介護を始め、状況の変化に合わせて施設を検討する、という流れを歩んでいます。介護は年単位で続くことも多く、ご本人の状態や家族の事情は変わっていくもの。そのときどきで、いちばん無理のない形を選び直していけば十分です。切り替えを考え始めたら、担当のケアマネージャーや、お住まいの地域包括支援センター（高齢者の暮らしを支える身近な相談窓口）に相談すると、手続きや候補選びをサポートしてもらえます。',
  },
]

export default function FacilityVsHomeCarePage() {
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
        path={'/facility-vs-home-care'}
        title={'老人ホームと在宅介護を比較｜後悔しないための判断軸'}
        description={'在宅介護と施設介護、どちらが正解ということはありません。費用・介護の負担・本人の希望・医療体制など7つの判断軸で、やさしく比較しました。'}
        datePublished={'2026-07-04T05:00:00+09:00'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Breadcrumb items={[{ label: '老人ホームと在宅介護の比較' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホームと在宅介護を比較｜後悔しないための判断軸
      </h1>
      <p className="text-sm text-gray-500 mb-1">公開：2026年7月 ｜ やさしい老人ホームガイド編集部</p>
      <p className="text-sm text-gray-500 mb-6">※本記事の制度・費用・施設区分に関する記述は、厚生労働省・地域包括支援センターなどの公開情報を参考にしています（2025年時点）。費用や介護サービスの内容は、地域・施設・ご本人の状態によって大きく異なります。</p>

      <SummaryBox items={summaryItems} />

      {/* 共感ブロック */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          「このまま家で介護を続けるべきか、それとも施設を考えたほうがいいのか」——親や配偶者の介護が始まると、多くのご家族がこの問いの前で立ち止まります。
          どちらを選んでも、心のどこかに迷いや後ろめたさが残りやすいテーマです。
        </p>
        <p className="text-base">
          でも、先にお伝えしておきたいのは、<strong>「在宅か施設か」に、唯一の正解はない</strong>ということです。
          ご本人の希望、家族の状況、費用、介護の重さ——いくつもの事情が重なって、その家庭に合った答えは変わってきます。
          この記事では、どちらが良い・悪いではなく、<strong>あなたたちに合うほうを見つけるための「判断の軸」</strong>を、いっしょに整理していきます。焦らず、ゆっくり読み進めてください。
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        ※本記事は、在宅介護と老人ホーム（介護施設）の比較に関する一般的な情報をまとめたものです。費用・介護サービスの内容・入居条件などは、施設の種類（特別養護老人ホーム・有料老人ホーム・サービス付き高齢者向け住宅など）や個々の事業者、お住まいの地域によって異なります。具体的なご相談は、担当のケアマネージャー、お住まいの市区町村や地域包括支援センターなどの専門職にお寄せください。なお、本ページは広告（アフィリエイト）を含みます。
      </p>

      {/* H2-1 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        そもそも在宅介護と施設（老人ホーム）は何が違うの？
      </h2>
      <p className="text-base mb-4">
        「言葉は聞くけれど、具体的にどう違うの？」——まずはそこから整理しましょう。ざっくり言うと、<strong>介護の“場所”と“担い手”が違う</strong>、と考えると分かりやすいです。
      </p>
      <p className="text-base mb-4">
        <strong>在宅介護</strong>は、住み慣れた自宅で暮らしながら、訪問介護やデイサービス（日帰りで通う介護サービス）などを組み合わせて生活を支える形です。介助は家族と専門職が分担する形で、ご家庭により家族の関わり方の度合いは異なります。
      </p>
      <p className="text-base mb-4">
        一方の<strong>施設介護</strong>は、老人ホームなどの住まいに移り、日々の介助を施設のスタッフが担う形です。ここで一つ知っておきたいのが、「老人ホーム」は俗称で、実際にはいくつかの種類に分かれているということ。たとえば、費用を抑えやすい公的施設の特別養護老人ホーム（特養）、在宅復帰を目指す介護老人保健施設（老健）、サービスが手厚い介護付き有料老人ホーム、外部サービスを利用する住宅型有料老人ホームやサービス付き高齢者向け住宅（サ高住）、認知症の方が少人数で暮らすグループホームなど、複数の区分があり、入居条件や費用が異なります。ここは少し専門的なので、詳しくは
        <Link href="/types" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホームの種類と違い」</Link>
        の記事にゆずります。今は「施設にもいくつか種類がある」と分かれば十分です。
      </p>
      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-base">
          💡 覚えておきたいのは、<strong>両者はきっぱり分かれた二択ではない</strong>ということ。
          在宅を続けながらデイサービスやショートステイ（短期間の宿泊）を使う「中間の形」もありますし、在宅から施設へ移る家庭もたくさんあります。まずは肩の力を抜いて、それぞれの特徴を見ていきましょう。
        </p>
      </div>

      {/* H2-2 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        費用で比べるとどうなる？在宅と施設のお金の話
      </h2>
      <p className="text-base mb-4">
        いちばん気になるのは、やはり費用ですよね。ここは「どちらが安い」と単純には言えないので、<strong>お金のかかり方の“かたち”の違い</strong>として整理します。難しく感じたら表だけ眺めてもらえれば大丈夫です。
      </p>
      <p className="text-base mb-4">
        <strong>在宅介護</strong>の費用は、大きく「介護保険サービスの自己負担」＋「実費」で考えます。少しややこしいので、太字の数字だけ拾ってもらえれば十分です。まず要介護認定（介護がどのくらい必要かを市町村が判定する手続き）を受けると、介護の必要度に応じて<strong>要支援1〜2・要介護1〜5</strong>のいずれかに判定され、その段階ごとに決まった<strong>給付限度額（1か月に介護保険で使えるサービスの上限枠）</strong>の範囲でサービスを利用できます。自己負担は所得に応じて<strong>1割・2割・3割</strong>のいずれかです（出典：厚生労働省 介護保険制度の概要／2025年時点）。
      </p>
      <p className="text-base mb-4">
        たとえば要介護3の給付限度額は月およそ27万円（2025年基準。地域区分により円換算額は多少前後します）で、1割負担の方なら自己負担は月およそ2.7万円が一つの目安です。ただし、<strong>この限度額を超えて使ったサービスは全額（10割）自己負担</strong>になる点には注意が必要です。ここに、おむつ代や食費などの実費が加わります。住み慣れた家なら家賃がかからないぶん、月々の負担を抑えやすい面があります。
      </p>
      <p className="text-base mb-4">
        <strong>施設介護</strong>の費用は、家賃・食費・介護サービス費などをまとめた「月額」で考えます。目安は、公的施設の特養で月5〜15万円、民間の介護付き有料老人ホームで月15〜30万円ほど（いずれも2025年時点の一般的な目安で、地域・施設・部屋のタイプによって大きく異なります）。このうち介護サービス費の部分は、在宅と同じく所得に応じた1〜3割の自己負担です（表示の月額目安は多床室・一般的な所得段階を想定したものです）。有料老人ホームでは、これに入居時の一時金（入居時にまとまって支払うお金。多くは前払家賃などの性格で、契約により返還される部分・されない部分があります）が別途かかる場合もあります。
      </p>
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#F3F8F5', border: '1px solid #2E7D52' }}>
        <p className="text-base mb-2" style={{ color: '#2E7D52', fontWeight: 700 }}>🧮 費用の負担をやわらげる制度も</p>
        <p className="text-base">
          在宅・施設のどちらでも、月々の介護サービスの自己負担が一定額を超えると、超えた分が戻ってくる「高額介護サービス費」という仕組みがあります（上限額は所得区分によって異なり、対象は介護サービスの自己負担分のみで、食費・居住費などは含まれません）。また、所得や資産の要件を満たす方が対象の「特定入所者介護サービス費（補足給付）」という、施設の食費・居住費を軽減する制度もあります。「使える制度がないか」を、担当のケアマネージャーやお住まいの市区町村の介護保険担当窓口に一度確認しておくと安心です。
        </p>
      </div>
      <p className="text-base mb-8">
        なお、費用は数字に表れる部分だけではありません。在宅では、介護のために家族が仕事をセーブして収入が減る、という“見えないコスト”もあります。金額と、家族の時間や体力の両方を天びんにかけて考えると、後悔しにくくなります。より詳しい費用感は
        <Link href="/cost" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホームの費用相場」</Link>
        や
        <Link href="/simulation" style={{ color: '#1A5E9E', fontWeight: 700 }}>「費用20年シミュレーション」</Link>
        もあわせてどうぞ。介護保険の使い方は
        <Link href="/insurance-usage-guide" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護保険の使い方完全ガイド」</Link>
        で詳しく解説しています。
      </p>

      {/* H2-3 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        在宅介護のいいところ・大変なところ
      </h2>
      <p className="text-base mb-6">
        「やっぱり家で看てあげたい」——その気持ちはとても自然なものです。在宅介護には、住み慣れた環境ならではの良さがあります。同時に、家族に負担が集まりやすい面もあります。両方を、正直に見ていきましょう。
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="rounded-xl p-6 bg-white border-2" style={{ borderColor: '#2E7D52' }}>
          <h3 className="text-lg font-bold mb-3" style={{ color: '#2E7D52' }}>🌿 いいところ</h3>
          <ul className="space-y-2">
            {[
              '住み慣れた家・地域で、これまでの生活リズムを保ちやすい',
              '家族がそばにいる安心感があり、本人も落ち着きやすい',
              '費用を月々の自己負担中心に抑えやすい場合がある',
              'サービスの使い方を、状態に合わせて柔軟に組み替えられる',
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ lineHeight: 1.7 }}>
                <span style={{ color: '#2E7D52', flexShrink: 0 }}>◯</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl p-6 bg-white border-2" style={{ borderColor: '#F57C00' }}>
          <h3 className="text-lg font-bold mb-3" style={{ color: '#E65100' }}>🍃 大変なところ</h3>
          <ul className="space-y-2">
            {[
              '食事・入浴・排せつの介助や見守りが続き、心身の負担が大きくなりやすい',
              '夜間の対応や急な体調変化に、家族が向き合う場面がある',
              '介護する人の生活（仕事・睡眠・自分の時間）が削られやすい',
              '認知症が進むと、目が離せず在宅の負担が増すことがある',
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ lineHeight: 1.7 }}>
                <span style={{ color: '#E65100', flexShrink: 0 }}>△</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-base mb-8">
        大変なところを並べると不安になるかもしれませんが、大丈夫です。これらの多くは、<strong>デイサービスやショートステイ、訪問サービスをうまく使うことで、ぐっと軽くできます</strong>。「家族だけで抱え込まない在宅」を目指すのがコツです。介護する側が疲れきってしまわないための工夫は
        <Link href="/caregiver-mental-care" style={{ color: '#1A5E9E', fontWeight: 700 }}>「介護する家族のメンタルケア」</Link>
        も参考になります。
      </p>

      {/* H2-4 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        施設介護のいいところ・気をつけたいところ
      </h2>
      <p className="text-base mb-6">
        「施設に頼る」と聞くと、少し寂しく感じる方もいるかもしれません。でも、施設には専門職ならではの支えがあり、家族の暮らしを守る力にもなります。良い面と、事前に確認しておきたい面を見ていきましょう。
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="rounded-xl p-6 bg-white border-2" style={{ borderColor: '#2E7D52' }}>
          <h3 className="text-lg font-bold mb-3" style={{ color: '#2E7D52' }}>🌿 いいところ</h3>
          <ul className="space-y-2">
            {[
              '日々の介助を専門のスタッフが担い、家族の負担が軽くなる',
              '看護職員の配置や協力医療機関との連携で、体調変化に気づいてもらいやすい傾向',
              '同世代との交流やレクリエーションで、生活に張りが生まれやすい',
              '家族は「介護者」から「見守る家族」へ、関係が穏やかになることがある',
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ lineHeight: 1.7 }}>
                <span style={{ color: '#2E7D52', flexShrink: 0 }}>◯</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl p-6 bg-white border-2" style={{ borderColor: '#F57C00' }}>
          <h3 className="text-lg font-bold mb-3" style={{ color: '#E65100' }}>🍃 気をつけたいところ</h3>
          <ul className="space-y-2">
            {[
              '月々の費用が在宅より高くなる場合がある（種類によって幅が大きい）',
              '環境が変わることで、本人が慣れるまで時間がかかることがある',
              '特養は原則要介護3以上が対象で、待機が生じることもある',
              '施設の種類によって、介護が重くなったときの対応や退去条件が異なる',
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ lineHeight: 1.7 }}>
                <span style={{ color: '#E65100', flexShrink: 0 }}>△</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-base mb-8">
        施設を検討するときは、「今の状態に合うか」だけでなく「介護が重くなっても住み続けられるか」も確認しておくと安心です。施設ごとの違いや選び方は
        <Link href="/how-to-choose" style={{ color: '#1A5E9E', fontWeight: 700 }}>「老人ホームの選び方」</Link>
        、特養の待機については
        <Link href="/tokuyou-waiting" style={{ color: '#1A5E9E', fontWeight: 700 }}>「特養の待機問題と代替施設」</Link>
        にまとめています。
      </p>

      {/* H2-5 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        どちらを選べばいい？迷ったときの7つの判断軸
      </h2>
      <p className="text-base mb-4">
        「結局、うちはどっちがいいの？」——ここが本題です。結論から言うと、<strong>次の7つの軸で、在宅と施設を並べて見てみる</strong>のがおすすめです。
        全部に○がつくほうを選ぶ、という話ではありません。ご家庭にとって「これは外せない」という軸がどちらに傾くかを、家族で話す材料にしてください。
      </p>
      <p className="text-base mb-6">
        まずは早見表で全体像をつかみましょう。ここは横にスクロールできます。難しければ、気になる行だけ見てもらえれば十分です。
      </p>

      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-base" style={{ minWidth: '640px' }}>
          <thead>
            <tr style={{ background: 'linear-gradient(135deg, #1B5E37, #2E7D52)' }}>
              <th className="text-left px-4 py-3" style={{ color: '#fff', fontSize: '13px', width: '120px' }}>判断軸</th>
              <th className="text-left px-4 py-3" style={{ color: '#fff', fontSize: '13px' }}>🏠 在宅介護</th>
              <th className="text-left px-4 py-3" style={{ color: '#fff', fontSize: '13px' }}>🏢 施設介護</th>
            </tr>
          </thead>
          <tbody>
            {compareRows.map((r, i) => (
              <tr key={r.axis} style={{ background: i % 2 === 0 ? '#fff' : '#F9FBF9', borderTop: '1px solid #e5e7eb' }}>
                <td className="px-4 py-3 font-bold" style={{ color: '#2E7D52' }}>
                  <span style={{ marginRight: '4px' }}>{r.icon}</span>{r.axis}
                </td>
                <td className="px-4 py-3 text-sm" style={{ color: '#444', lineHeight: 1.7 }}>{r.home}</td>
                <td className="px-4 py-3 text-sm" style={{ color: '#444', lineHeight: 1.7 }}>{r.facility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-base mb-4">
        表を見て「うちはこの軸が大事だな」と感じたら、それがヒントです。たとえば——
      </p>
      <div className="space-y-3 mb-8">
        {[
          { c: '#E8F5E9', b: '#2E7D52', t: '本人が「家がいい」と強く望み、家族に見守る余力がある → 在宅を軸に、サービスで支える形が合いやすい' },
          { c: '#FFF3E0', b: '#F57C00', t: '夜間の対応や医療面の不安が大きく、家族が疲弊してきている → 施設という選択肢を前向きに検討する時期かも' },
          { c: '#E3F2FD', b: '#1A5E9E', t: 'どちらとも決めきれない → まずはデイサービスやショートステイで“中間の形”を試してみる' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-4" style={{ background: item.c, border: `1px solid ${item.b}` }}>
            <p className="text-sm" style={{ color: '#333', lineHeight: 1.8 }}><strong>▶ </strong>{item.t}</p>
          </div>
        ))}
      </div>
      <p className="text-base mb-8">
        どの軸を重く見るかは、家庭によって本当にさまざまです。ここで大事なのは、<strong>「正しい答え」ではなく「うちにとって納得できる答え」を探す</strong>という姿勢。迷って当然のテーマなので、すぐに決まらなくても、まったく問題ありません。
      </p>

      {/* 体験談 */}
      <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: '#E3F2FD', border: '1px solid #1A5E9E' }}>
        <p className="text-base mb-2"><strong>📖 私たちのケースでは（編集部・架空の体験談）</strong></p>
        <p className="text-base" style={{ lineHeight: 1.9 }}>
          母が要介護2になったとき、父は「家で看る」の一点張りでした。私も最初はそれに従って在宅で頑張ったのですが、夜中に何度も起きるようになり、父も私も、だんだん眠れなくなって。
          思いきってケアマネージャーさんに相談したら、「まずは週2回のデイサービスと、月に数日のショートステイを入れてみましょう」と。それで少し息がつけるようになりました。
          結局その1年後に、母の希望も聞いたうえで施設に移りましたが、在宅の時期があったからこそ「家でやれることはやった」と思えて、気持ちの整理がつきました。
        </p>
        <p className="text-xs text-gray-500 mt-2">※上記は在宅と施設の考え方を分かりやすく伝えるための編集部による架空のエピソードです。個人の感想であり、同じ結果を保証するものではありません。</p>
      </div>

      {/* H2-6 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        「どちらか一方」で悩まなくていい｜組み合わせという選択肢
      </h2>
      <p className="text-base mb-4">
        ここまで読んで、「白黒つけないといけない気がしてつらい」と感じた方へ。安心してください。<strong>在宅と施設は、対立する二択ではありません</strong>。
        むしろ多くのご家庭が、両方をゆるやかに組み合わせながら、そのときに合う形を選んでいます。
      </p>
      <p className="text-base mb-4">
        たとえば、ふだんは在宅で過ごしながら、日中は<strong>デイサービス</strong>で入浴や食事、リハビリを受け、家族が休みたいときや冠婚葬祭のときは<strong>ショートステイ</strong>で数日預かってもらう。こうした「レスパイト（介護する家族が一息つくための休息）」をうまく挟むことで、在宅を無理なく長く続けられることがあります。
      </p>
      <p className="text-base mb-8">
        そして、在宅で工夫を重ねたうえで「やはり負担が大きい」と感じたら、そのときに施設へ切り替えればいい。<strong>順番は自由</strong>ですし、一度決めたら変えられないわけでもありません。
        「今日、最終結論を出す」必要はないのです。まずは使えるサービスを一つ増やしてみる、資料を一つ取り寄せてみる——そんな小さな一歩から始めましょう。デイサービスやショートステイの具体的な使い方は
        <Link href="/short-stay-day-service" style={{ color: '#1A5E9E', fontWeight: 700 }}>「ショートステイ・デイサービスの使い方」</Link>
        、在宅サービス全体は
        <Link href="/home-care" style={{ color: '#1A5E9E', fontWeight: 700 }}>「在宅介護のガイド」</Link>
        、施設を考えるタイミングは
        <Link href="/care-timing" style={{ color: '#1A5E9E', fontWeight: 700 }}>「施設入居を考えるべきタイミング」</Link>
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
          まとめ：在宅か施設かは「正解探し」ではなく「納得探し」
        </h2>
        <p className="text-base mb-3">
          老人ホームと在宅介護、どちらにも良さがあり、大変さもあります。大切なのは、どちらが優れているかを決めることではなく、<strong>ご本人と家族にとって、無理なく続けられるほうを選ぶ</strong>ことです。
          迷うのは、それだけ真剣に向き合っている証拠。焦って一つに決めなくても大丈夫です。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            '「在宅か施設か」に唯一の正解はない。家庭に合うほうが正解',
            '費用は「かたち」が違うだけ。数字と家族の負担を両方見て考える',
            '7つの判断軸で、家族が大事にしたい軸を話し合ってみる',
            'デイサービス・ショートステイで「組み合わせる」道もある。順番は自由',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          今日できるのは、大きな決断ではなく小さな一歩で十分です。ケアマネージャーに相談する、資料を取り寄せる——それだけでも、道は少しずつ見えてきます。焦らず、いっしょに進んでいきましょう。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/home-care', label: '在宅介護を続けるためのサービス活用ガイド', icon: '🏠' },
          { href: '/cost', label: '費用はどのくらい？月額・初期費用の相場', icon: '💴' },
          { href: '/types', label: '老人ホームの種類と違いをわかりやすく解説', icon: '🏢' },
          { href: '/care-timing', label: '施設入居を考えるべきタイミング', icon: '⏰' },
          { href: '/senior-watch-service', label: '高齢者見守りサービスの選び方｜種類・費用・自治体支援', icon: '📡' },
          { href: '/caregiver-mental-care', label: '介護する家族のメンタルケア｜燃え尽き対策', icon: '💚' },
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
        在宅にするか施設にするか、まだ決まっていなくても大丈夫です。費用やサービスを「知っておくだけ」でも、心の余裕につながります。
        知ることは、急いで契約することでも、今の介護を否定することでもありません。まずは情報を集めるところから、気軽に始めてみてください。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        ※本ページにはアフィリエイト広告を含みます。費用・サービス内容・対応エリアなどを比較し、ご家族の状況に合った選択にお役立てください。
      </p>

      <CTABox />

      {/* 免責事項 */}
      <div className="rounded-lg p-5 mt-10 mb-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <p className="text-xs text-gray-500" style={{ lineHeight: 1.8 }}>
          【免責事項】本記事は、在宅介護と老人ホーム（介護施設）の比較に関する一般的な情報をまとめたものです。特定の選択による効果や結果を保証・推奨するものではありません。
          費用・介護サービスの内容・入居条件・退去要件などは、施設の種類（特別養護老人ホーム・有料老人ホーム・サービス付き高齢者向け住宅など）や個々の事業者、お住まいの地域、ご本人の状態、時期によって異なる場合があります。
          制度や費用に関する記述は2025年時点の一般的な情報であり、最新の内容は厚生労働省・お住まいの市区町村の情報をご確認ください。
          実際の選択にあたっては、担当のケアマネージャー、お住まいの市区町村や地域包括支援センターなどの専門職にご相談のうえ、ご本人とご家族の状況に合わせてご判断ください。
        </p>
      </div>
    </>
  )
}
