import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '親のためにやるべきこと完全ガイド｜子どもが代わりにしてあげたい8つのこと',
  description: '高齢の親が抱えている悩みと、子どもにできるサポートを徹底解説。手続き・住環境・医療・お金・見守り・施設探しまで、50代の子世代向けに「今すぐできること」をまとめました。',
  openGraph: {
    title: '親のためにやるべきこと完全ガイド｜子どもが代わりにしてあげたい8つのこと',
    description: '高齢の親が抱えている悩みと、子どもにできるサポートを徹底解説。手続き・住環境・医療・お金・見守りまで「今すぐできること」をまとめました。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

const summaryItems = [
  '親が「言い出せないでいる悩み」は<mark class="highlight">思っているより多い</mark>です',
  '子どもが代わりにできることは<mark class="highlight">手続き・住環境・医療・お金・見守り</mark>の5分野',
  'まず親と<mark class="highlight">「今困っていること」を話し合う</mark>ことが最初のステップです',
  '施設への入居は<mark class="highlight">元気なうちに情報収集を始める</mark>のが鉄則です',
]

const topics = [
  {
    id: 'talk',
    icon: '💬',
    number: '01',
    title: '「困っていること」を聞いてあげる',
    worry: '親の悩み：「心配かけたくない」「まだ大丈夫と思われたい」',
    worryDetail: '高齢の親は子どもに「迷惑をかけたくない」という気持ちが強く、体の不調や生活の不便を隠しがちです。「大丈夫」と言っていても、内心では困っていることが多くあります。',
    color: '#E8F5E9',
    border: '#2E7D52',
    labelColor: '#2E7D52',
    actions: [
      { label: 'ゆっくり話を聞く時間をつくる', detail: '「なんかあった？」ではなく、「最近どう？膝は大丈夫？」と具体的に聞くと話しやすくなります。' },
      { label: '「一緒に考えよう」というスタンスで話す', detail: '「どうするの？」と責めるのではなく「一緒に考えよう」という姿勢が大切です。' },
      { label: '帰省時に家の中をさりげなく確認する', detail: '冷蔵庫の中・薬の残り・郵便物の溜まり具合で生活の状態がわかります。' },
    ],
    links: [],
  },
  {
    id: 'home',
    icon: '🏠',
    number: '02',
    title: '住まいの危険な場所を直してあげる',
    worry: '親の悩み：「転んだら大変だとわかっているが、自分では直せない」',
    worryDetail: '「風呂場の床が滑りやすい」「廊下が暗い」「段差につまずく」といったことに気づいていても、自分では手すりを取り付けられず、工事を頼む手間もかかるため後回しになりがちです。',
    color: '#FFF3E0',
    border: '#F57C00',
    labelColor: '#E65100',
    actions: [
      { label: '浴室・トイレに手すりを設置する', detail: '転倒事故の多くはトイレ・お風呂で発生します。後付け可能な手すりをまず設置しましょう。' },
      { label: '夜間の廊下にセンサーライトをつける', detail: 'トイレに起きるときの暗がりでの転倒を防ぎます。コンセントに挿すだけで設置できます。' },
      { label: '滑り止めマットをあちこちに置く', detail: '玄関・浴室・キッチン前など、濡れやすい・滑りやすい場所に設置しましょう。' },
    ],
    links: [
      { href: '/care-items#fall', label: '転倒防止グッズの一覧を見る' },
    ],
  },
  {
    id: 'health',
    icon: '💊',
    number: '03',
    title: '病院の付き添いと健康管理を手伝う',
    worry: '親の悩み：「一人で病院に行くのが不安。でも子どもを呼ぶのも申し訳ない」',
    worryDetail: '高齢になると一人での通院が不安になります。特に「先生の話が聞き取れない」「薬の説明が難しい」「帰りのバスが不安」など、通院そのものが負担になっています。',
    color: '#E3F2FD',
    border: '#1A5E9E',
    labelColor: '#1A5E9E',
    actions: [
      { label: '定期検診・受診に年1〜2回は付き添う', detail: '医師に「家族として心配していること」を直接聞ける機会になります。お薬手帳も一緒に確認しましょう。' },
      { label: '血圧・体温の毎日記録を習慣づける', detail: '記録が習慣になると、体調の変化に早く気づけます。通院時に医師に見せると診察がスムーズになります。' },
      { label: '複数の薬の飲み忘れ・飲み間違いを防ぐ', detail: '曜日別のピルケースに薬をセットしてあげると、飲み忘れ・二重服薬のリスクが減ります。' },
    ],
    links: [
      { href: '/care-items#health', label: '健康管理グッズの一覧を見る' },
    ],
  },
  {
    id: 'money',
    icon: '💴',
    number: '04',
    title: 'お金・財産の管理を一緒に整理する',
    worry: '親の悩み：「通帳や保険のことは自分しかわからない。何かあったとき子どもが困るのでは」',
    worryDetail: '多くの親が「自分に何かあったとき、子どもが困るだろうと思いながらも、どこに何があるかを伝えられていない」という状態です。また、振り込め詐欺・悪徳業者に騙されるリスクも高まっています。',
    color: '#FFF8E1',
    border: '#FFC107',
    labelColor: '#E65100',
    actions: [
      { label: '通帳・保険証書・権利書の場所を確認しておく', detail: '「緊急時にどこに何があるか」を一緒に確認しておくだけで、万が一のときに大きく助かります。' },
      { label: '不審な電話・訪問販売の対策をする', detail: '「知らない電話には出ない」設定・迷惑電話対策機器の導入を検討しましょう。' },
      { label: '介護費用・施設費用の見通しを一緒に立てる', detail: '年金額・貯蓄額を把握した上で、「月いくらまでなら施設に払えるか」を話し合っておきましょう。' },
    ],
    links: [
      { href: '/cost', label: '老人ホームの費用相場を確認する' },
      { href: '/simulation', label: '費用20年シミュレーターを使う' },
    ],
  },
  {
    id: 'watch',
    icon: '👁️',
    number: '05',
    title: '遠くからでも「見守り」の仕組みをつくる',
    worry: '親の悩み：「夜中に体調が悪くなったとき、誰も気づいてくれない」',
    worryDetail: '一人暮らしの親にとって、「夜に転んで動けなくなっても誰も来ない」という恐怖は非常にリアルです。しかし自分から「心配してほしい」とは言いにくいものです。',
    color: '#F3E5F5',
    border: '#7B1FA2',
    labelColor: '#7B1FA2',
    actions: [
      { label: '定期的な電話・ビデオ通話を習慣にする', detail: '週1〜2回の「どうだった？」電話は、体調確認だけでなく精神的なつながりとして親にとっても大切です。' },
      { label: 'GPS見守りサービス・緊急ボタンを導入する', detail: '市区町村が補助を出している見守りサービスもあります。まず地域包括支援センターに相談してみましょう。' },
      { label: '近所の方・民生委員との関係をつくる', detail: '「お隣の〇〇さん、最近見かけない」という気づきが命を救うことがあります。近所付き合いを大切に。' },
    ],
    links: [
      { href: '/care-items#emergency', label: '緊急・見守りグッズの一覧を見る' },
    ],
  },
  {
    id: 'procedure',
    icon: '📋',
    number: '06',
    title: '行政手続き・書類を代わりにやってあげる',
    worry: '親の悩み：「役所の手続きがよくわからない。書類も多くて読めない」',
    worryDetail: '要介護認定の申請・各種補助の申請・医療費控除の手続きなど、高齢者が一人で行うには複雑すぎる手続きがたくさんあります。「書類を読む気力がない」という方も多いです。',
    color: '#E8F5E9',
    border: '#2E7D52',
    labelColor: '#2E7D52',
    actions: [
      { label: '要介護認定の申請を手伝う', detail: '市区町村の窓口か、地域包括支援センターへの相談から始まります。認定結果によって使えるサービスが変わります。' },
      { label: '高額介護サービス費・医療費控除を確認する', detail: '知らないと損をしている補助制度が多くあります。年末の確定申告時に医療費をまとめて確認しましょう。' },
      { label: '電気・ガス・水道の口座引き落とし設定をする', detail: '払い忘れ・滞納が起きにくくなります。可能であればネット明細も確認できるよう設定しましょう。' },
    ],
    links: [
      { href: '/process', label: '入居までの流れ・手続きを確認する' },
      { href: '/care-level', label: '要介護認定の仕組みを確認する' },
    ],
  },
  {
    id: 'mental',
    icon: '🤗',
    number: '07',
    title: '孤独・不安を和らげる精神的なサポート',
    worry: '親の悩み：「子どもは仕事が忙しいから心配かけたくない。一人でいると気が滅入る」',
    worryDetail: '「誰かと話したい」「寂しい」という気持ちは、高齢者の心身の健康に直接影響します。しかし子どもに「寂しい」とは言いにくく、一人で抱え込む方がとても多いです。',
    color: '#FCE4EC',
    border: '#C2185B',
    labelColor: '#C2185B',
    actions: [
      { label: '用事がなくても電話する', detail: '「何かあったから電話した」ではなく、「ただ話したくて」という電話が親には一番うれしいものです。' },
      { label: '帰省のたびに一緒に出かける', detail: '外食・買い物・散歩など、「特別なことでなくていい」日常の同行が孤独感の解消につながります。' },
      { label: '地域の通いの場・デイサービスを紹介する', detail: '週1〜2回のデイサービスで他者との交流が生まれます。「試しに一回だけ」と背中を押してみましょう。' },
    ],
    links: [
      { href: '/for-you', label: '状況別の悩みガイドを読む' },
    ],
  },
  {
    id: 'facility',
    icon: '🏡',
    number: '08',
    title: '施設入居の情報収集を一緒に始める',
    worry: '親の悩み：「老人ホームのことはよくわからない。でも将来どうなるか不安」',
    worryDetail: '「自分はどのくらい介護が必要になるのか」「費用はどのくらいかかるのか」「施設に入るとどんな生活になるのか」。将来への漠然とした不安を抱えている親は多いです。',
    color: '#E3F2FD',
    border: '#1A5E9E',
    labelColor: '#1A5E9E',
    actions: [
      { label: '元気なうちに一緒に見学へ行く', detail: '緊急になってから探すと選択肢が狭まります。「旅行気分で見てみよう」と誘って、まず1件見学してみましょう。' },
      { label: '費用の見通しを一緒に立てる', detail: '親の年金・貯蓄額をもとに「月いくらまでなら払えるか」を把握しておくと、いざとなったとき迷わずに動けます。' },
      { label: 'オンライン相談・資料請求から始める', detail: '外出が難しい場合でも、資料請求・オンライン相談で情報収集できます。無料なので気軽に利用を。' },
    ],
    links: [
      { href: '/tell-parents', label: '親に施設入居を前向きに考えてもらうために' },
      { href: '/types', label: '施設の種類と違いを確認する' },
      { href: '/how-to-choose', label: '施設の選び方ポイントを確認する' },
    ],
  },
]

export default function ParentsSupportPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '親のためにやるべきこと完全ガイド' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        親のためにやるべきこと完全ガイド
      </h1>
      <p className="text-sm text-gray-500 mb-2">子どもが代わりにしてあげたい8つのこと ｜ 50代向け特集</p>
      <p className="text-sm text-gray-500 mb-6">公開：2026年4月 ｜ やさしい老人ホームガイド編集部</p>

      <SummaryBox items={summaryItems} />

      {/* ヒーロー画像 */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <Image
          src="/images/reason_family.jpg"
          alt="親子で話し合っているイメージ"
          width={600}
          height={400}
          style={{ width: '50%', height: 'auto', borderRadius: '12px' }}
          priority
        />
      </div>

      {/* 導入文 */}
      <div className="rounded-xl p-6 mb-10" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-3">
          「親のことが心配だけど、何をすれば？」——そう感じている50代の方は多いはずです。
        </p>
        <p className="text-base mb-3">
          親は「子どもに心配をかけたくない」と思って困っていても言い出せないことがあります。
          一方で子どもは「なんとかしてあげたいけど、何をどこから手をつければいいかわからない」という状態になりがちです。
        </p>
        <p className="text-base font-bold text-primary">
          このページでは、<strong>親が抱えている悩み</strong>と<strong>子どもが代わりにできること</strong>を、8つのテーマで整理しました。
          全部を一度にやろうとせず、「できそうなこと」から始めてみてください。
        </p>
      </div>

      {/* 購入備品バナー */}
      <Link
        href="/care-items"
        className="flex items-center gap-4 rounded-2xl p-5 mb-10 transition hover:opacity-90"
        style={{ backgroundColor: '#FFF3E0', border: '2px solid #F57C00', textDecoration: 'none', color: 'inherit' }}
      >
        <span style={{ fontSize: '36px', flexShrink: 0 }}>🛒</span>
        <div>
          <p className="font-bold text-base mb-1" style={{ color: '#E65100' }}>
            まず「モノから揃えたい」方はこちら
          </p>
          <p className="text-sm text-gray-600">
            転倒防止・健康管理・見守り・生活補助グッズをカテゴリ別にまとめた購入備品ガイドはこちら →
          </p>
        </div>
      </Link>

      {/* 各テーマ */}
      <div className="space-y-12 mb-12">
        {topics.map((topic) => (
          <section key={topic.id} id={topic.id}>
            {/* テーマヘッダー */}
            <div
              className="rounded-2xl px-5 py-4 mb-5"
              style={{ backgroundColor: topic.color, border: `2px solid ${topic.border}` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full text-white flex-shrink-0"
                  style={{ backgroundColor: topic.labelColor }}
                >
                  {topic.number}
                </span>
                <span style={{ fontSize: '24px' }}>{topic.icon}</span>
                <h2 className="text-lg md:text-xl font-bold" style={{ color: '#1A1A1A', borderLeft: 'none', paddingLeft: 0 }}>
                  {topic.title}
                </h2>
              </div>

              {/* 親の悩み */}
              <div className="rounded-xl px-4 py-3" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
                <p className="text-xs font-bold mb-1" style={{ color: topic.labelColor }}>😟 {topic.worry}</p>
                <p className="text-sm" style={{ color: '#444', lineHeight: 1.8 }}>{topic.worryDetail}</p>
              </div>
            </div>

            {/* やること一覧 */}
            <p className="text-sm font-bold mb-3" style={{ color: topic.labelColor }}>
              ✅ 子どもにできること
            </p>
            <div className="space-y-3 mb-4">
              {topic.actions.map((action, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white p-4"
                  style={{ border: `1px solid ${topic.border}40`, borderLeft: `4px solid ${topic.border}` }}
                >
                  <p className="font-bold text-base mb-1">{action.label}</p>
                  <p className="text-sm text-gray-600" style={{ lineHeight: 1.7 }}>{action.detail}</p>
                </div>
              ))}
            </div>

            {/* 関連リンク */}
            {topic.links.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {topic.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm font-bold rounded-lg px-3 py-2 transition hover:opacity-80"
                    style={{ backgroundColor: topic.color, color: topic.labelColor, border: `1px solid ${topic.border}`, textDecoration: 'none' }}
                  >
                    📎 {link.label} →
                  </Link>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* 購入備品バナー（記事末尾） */}
      <div
        className="rounded-2xl p-6 mb-10"
        style={{ background: 'linear-gradient(135deg, #FFF3E0, #FFE0B2)', border: '2px solid #F57C00' }}
      >
        <h2 className="text-xl font-bold mb-3" style={{ color: '#E65100', borderLeft: 'none', paddingLeft: 0 }}>
          🛒 親に揃えてあげたい備品一覧
        </h2>
        <p className="text-base mb-4">
          転倒防止・健康管理・緊急見守り・日常生活補助の4カテゴリで、購入すべきグッズをまとめました。
          「何を買えばいいかわからない」という方はこちらをご覧ください。
        </p>
        <Link
          href="/care-items"
          className="inline-flex items-center gap-2 font-bold text-white rounded-xl px-6 py-3 transition hover:opacity-90"
          style={{ backgroundColor: '#F57C00', fontSize: '15px', textDecoration: 'none', boxShadow: '0 3px 10px rgba(245,124,0,0.3)' }}
        >
          購入備品ガイドを見る →
        </Link>
      </div>

      {/* まとめ */}
      <div className="rounded-xl p-6 mb-10" style={{ backgroundColor: '#F3F8F5', border: '2px solid #2E7D52' }}>
        <h2 className="text-xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
          まとめ：「今できること」から1つ始めてみよう
        </h2>
        <p className="text-base mb-3">
          8つすべてを一度にやる必要はありません。
          今日からできる「1つのこと」を決めて、まず動いてみることが大切です。
        </p>
        <ul className="space-y-2 mb-3">
          {[
            '今夜、親に電話してみる',
            '次の帰省で家の中の危険な場所を確認する',
            '「老人ホームの資料を取り寄せてみよう」と親に声をかける',
            '地域包括支援センターの連絡先をスマホに登録しておく',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span style={{ color: '#2E7D52', flexShrink: 0 }}>✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-bold text-primary">
          「気づいてくれた」「動いてくれた」——それだけで、親はとても安心するものです。
        </p>
      </div>

      {/* 関連記事 */}
      <h2 className="text-xl font-bold mb-4 text-primary">次に読んでほしい記事</h2>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/care-items',    label: '購入備品ガイド｜転倒防止・健康管理・見守りグッズ一覧', icon: '🛒' },
          { href: '/tell-parents',  label: '親に老人ホームを前向きに考えてもらうために', icon: '👪' },
          { href: '/for-you',       label: '状況別｜あなたはどのケース？悩み別ガイド', icon: '🎯' },
          { href: '/types',         label: '老人ホームの種類と違いをわかりやすく解説', icon: '🏠' },
          { href: '/cost',          label: '費用はどのくらい？月額・初期費用の相場', icon: '💴' },
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
    </>
  )
}
