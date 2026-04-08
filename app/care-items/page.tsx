import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import Breadcrumb from '@/components/Breadcrumb'
import SummaryBox from '@/components/SummaryBox'

export const metadata: Metadata = {
  title: '親のために揃えておきたい介護・生活補助グッズ一覧｜購入備品ガイド',
  description: '高齢の親が安全・快適に暮らせるよう、子どもが揃えておきたい介護用品・生活補助グッズをカテゴリ別に紹介。転倒防止・健康管理・緊急対応・日常生活補助の4分野で解説します。',
  openGraph: {
    title: '親のために揃えておきたい介護・生活補助グッズ一覧｜購入備品ガイド',
    description: '高齢の親が安全・快適に暮らせるよう、子どもが揃えておきたい介護用品・生活補助グッズをカテゴリ別に紹介します。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

const summaryItems = [
  'まず最優先は<mark class="highlight">転倒防止グッズ</mark>。滑り止めマット・手すりは早めに設置しましょう',
  '健康管理には<mark class="highlight">血圧計・体温計</mark>の自宅備えが必須です',
  '緊急時に備えた<mark class="highlight">GPS見守りサービス・緊急コール機器</mark>も検討を',
  '日常の「ちょっとした不便」を解消する<mark class="highlight">生活補助グッズ</mark>が自立支援につながります',
]

const categories = [
  {
    id: 'fall',
    icon: '🛡️',
    title: '転倒・事故防止グッズ',
    priority: '最優先',
    priorityColor: '#B71C1C',
    priorityBg: '#FFEBEE',
    color: '#FFF3E0',
    border: '#F57C00',
    labelColor: '#E65100',
    intro: '高齢者の転倒は骨折・入院につながり、その後の生活に大きく影響します。特にトイレ・お風呂・廊下での転倒が多いため、まずここから対策しましょう。',
    items: [
      {
        name: '浴室・トイレ用手すり（後付け型）',
        price: '3,000〜15,000円',
        where: 'ホームセンター・Amazon',
        note: '壁に穴を開けずに設置できる突っ張り型が賃貸にもおすすめ',
        priority: true,
      },
      {
        name: '滑り止めマット（浴室・玄関用）',
        price: '1,000〜3,000円',
        where: '100均・ドラッグストア',
        note: '浴室・玄関の両方に設置。薄くて洗えるタイプが衛生的',
        priority: true,
      },
      {
        name: '段差解消スロープ',
        price: '2,000〜8,000円',
        where: 'ホームセンター・Amazon',
        note: '玄関・部屋の境目など小さな段差につまずく事故を防ぐ',
        priority: false,
      },
      {
        name: '夜間用フットライト（センサー付き）',
        price: '1,000〜3,000円',
        where: 'Amazon・家電量販店',
        note: 'トイレに行くときの暗い廊下での転倒を防止。コンセント挿すだけ',
        priority: false,
      },
      {
        name: '床置き手すり（移乗補助台）',
        price: '5,000〜15,000円',
        where: '介護用品専門店・Amazon',
        note: '立ち上がりが大変になってきた方のソファ・トイレ横に',
        priority: false,
      },
    ],
  },
  {
    id: 'health',
    icon: '💊',
    title: '健康管理グッズ',
    priority: '早めに準備',
    priorityColor: '#1565C0',
    priorityBg: '#E3F2FD',
    color: '#E3F2FD',
    border: '#1A5E9E',
    labelColor: '#1A5E9E',
    intro: '血圧・体温・血糖値などを自宅で記録しておくことで、医師の診断に役立ちます。また「最近少し変だな」という早期気づきにもつながります。',
    items: [
      {
        name: '上腕式血圧計',
        price: '3,000〜8,000円',
        where: 'ドラッグストア・Amazon',
        note: '手首式より正確。毎朝起床後と夜就寝前の2回測定が理想',
        priority: true,
      },
      {
        name: '非接触体温計',
        price: '2,000〜5,000円',
        where: 'ドラッグストア・薬局',
        note: '感染症対策にも。ワンタッチで測れるので高齢者でも使いやすい',
        priority: true,
      },
      {
        name: 'パルスオキシメーター（血中酸素濃度計）',
        price: '2,000〜5,000円',
        where: 'Amazon・ドラッグストア',
        note: '指に挟むだけで血中酸素濃度と脈拍を確認できる。呼吸器疾患の早期発見に',
        priority: false,
      },
      {
        name: '服薬管理ケース（ピルケース）',
        price: '500〜2,000円',
        where: '100均・薬局',
        note: '曜日・時間帯ごとに仕切られているタイプで飲み忘れ・二重服薬を防ぐ',
        priority: false,
      },
      {
        name: '健康記録ノート（血圧手帳）',
        price: '200〜500円',
        where: '薬局・文具店',
        note: '毎日の血圧・体温・体重を記録。通院時に医師に見せると診察がスムーズ',
        priority: false,
      },
    ],
  },
  {
    id: 'emergency',
    icon: '🆘',
    title: '緊急・見守りグッズ',
    priority: '離れて暮らす場合は必須',
    priorityColor: '#7B1FA2',
    priorityBg: '#F3E5F5',
    color: '#F3E5F5',
    border: '#7B1FA2',
    labelColor: '#7B1FA2',
    intro: '遠距離に住んでいる場合、緊急時にすぐ気づけないことへの不安は大きいです。テクノロジーを使った見守りグッズで、物理的な距離を補いましょう。',
    items: [
      {
        name: 'GPS見守りサービス（携帯タイプ）',
        price: '月額1,000〜2,000円程度',
        where: 'キャリアショップ・介護用品店',
        note: '外出時の居場所をスマホで確認。認知症が少し心配な方に特に有効',
        priority: true,
      },
      {
        name: '緊急通報ボタン（首から下げるタイプ）',
        price: '月額2,000〜5,000円（レンタルも可）',
        where: '市区町村窓口・介護用品店',
        note: 'ボタン1つで家族またはコールセンターに通知。自治体の補助がある場合も',
        priority: true,
      },
      {
        name: '室内見守りカメラ（スマホ連動）',
        price: '3,000〜10,000円',
        where: 'Amazon・家電量販店',
        note: '親の同意を得た上で設置。転倒後の早期発見・生活確認に',
        priority: false,
      },
      {
        name: '感震ブレーカー（コンセント型）',
        price: '1,500〜3,000円',
        where: 'ホームセンター・Amazon',
        note: '地震の揺れを感知して自動でコンセントを遮断。火災リスクを下げる',
        priority: false,
      },
      {
        name: '電気ポット（ネット連動型）',
        price: '10,000〜20,000円',
        where: 'Amazon・家電量販店',
        note: 'ポットを使った記録をスマホで確認。「今日お茶を飲んでいるか」が遠隔でわかる',
        priority: false,
      },
    ],
  },
  {
    id: 'daily',
    icon: '🏠',
    title: '日常生活補助グッズ',
    priority: '困ったら都度追加',
    priorityColor: '#2E7D52',
    priorityBg: '#E8F5E9',
    color: '#E8F5E9',
    border: '#2E7D52',
    labelColor: '#2E7D52',
    intro: '「ちょっとしたこと」が高齢者には大きな壁になります。瓶のふたが開けられない、字が見えにくいなど、日常の不便を解消するグッズで自立を支援しましょう。',
    items: [
      {
        name: '瓶オープナー・ビン開け器',
        price: '500〜1,500円',
        where: '100均・キッチン用品店',
        note: '握力が弱くなった方に。ペットボトル・缶蓋・瓶ふたをカバーする万能タイプが便利',
        priority: false,
      },
      {
        name: '拡大鏡（ルーペ）・老眼鏡',
        price: '1,000〜3,000円',
        where: '100均・眼鏡店・ドラッグストア',
        note: '薬の説明書・郵便物の小さな文字が読めないストレスを解消',
        priority: false,
      },
      {
        name: '長柄ブラシ・着替え補助具',
        price: '1,000〜3,000円',
        where: '介護用品店・Amazon',
        note: '体が硬くなり背中が洗いにくい・靴下が履きにくい方に',
        priority: false,
      },
      {
        name: 'シャワーチェア（浴室椅子）',
        price: '3,000〜8,000円',
        where: 'ホームセンター・介護用品店',
        note: '立ったまま浴室で疲れる方に。高さ調整できるタイプが◎',
        priority: false,
      },
      {
        name: '伸縮式ステッキ（折りたたみ杖）',
        price: '3,000〜10,000円',
        where: '介護用品店・Amazon',
        note: '「杖はまだ早い」と感じる方にも使いやすいおしゃれなデザインも増えている',
        priority: false,
      },
      {
        name: 'リモコンラック・引き出しやすい収納',
        price: '1,000〜3,000円',
        where: '100均・ホームセンター',
        note: 'テレビリモコンや薬を決まった場所に置く習慣をつけると「どこ置いた？」が減る',
        priority: false,
      },
    ],
  },
]

export default function CareItemsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: '親のためにやるべきこと', href: '/parents-support' },
          { label: '購入備品ガイド' },
        ]}
      />

      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        親のために揃えておきたい<br className="md:hidden" />介護・生活補助グッズ一覧
      </h1>
      <p className="text-sm text-gray-500 mb-6">子どもが準備する購入備品ガイド ｜ カテゴリ別リスト</p>

      <SummaryBox items={summaryItems} />

      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base mb-2">
          「何を買えばいいかわからない」という方のために、高齢の親の自宅生活をサポートするグッズを4カテゴリにまとめました。
        </p>
        <p className="text-base">
          すべてを一度に揃える必要はありません。<strong>まず「転倒防止」と「健康管理」から始め</strong>、生活の変化に合わせて追加していきましょう。
        </p>
      </div>

      {/* カテゴリ一覧ナビ */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="rounded-full px-4 py-2 text-sm font-bold transition hover:opacity-80"
            style={{ backgroundColor: cat.color, color: cat.labelColor, border: `1px solid ${cat.border}`, textDecoration: 'none' }}
          >
            {cat.icon} {cat.title}
          </a>
        ))}
      </div>

      {/* 各カテゴリ */}
      <div className="space-y-14 mb-12">
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id}>
            {/* カテゴリヘッダー */}
            <div className="rounded-2xl px-5 py-4 mb-5 flex flex-wrap items-center gap-3" style={{ backgroundColor: cat.color, border: `2px solid ${cat.border}` }}>
              <span style={{ fontSize: '32px' }}>{cat.icon}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h2 className="text-xl font-bold" style={{ color: '#1A1A1A', borderLeft: 'none', paddingLeft: 0 }}>{cat.title}</h2>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: cat.priorityBg, color: cat.priorityColor, border: `1px solid ${cat.priorityColor}40` }}
                  >
                    {cat.priority}
                  </span>
                </div>
                <p className="text-sm" style={{ color: '#555', lineHeight: 1.7 }}>{cat.intro}</p>
              </div>
            </div>

            {/* アイテムリスト */}
            <div className="space-y-3">
              {cat.items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white p-4"
                  style={{ border: `1px solid ${item.priority ? cat.border : '#e5e7eb'}`, boxShadow: item.priority ? `0 2px 8px ${cat.border}20` : 'none' }}
                >
                  <div className="flex flex-wrap items-start gap-2 mb-2">
                    {item.priority && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0" style={{ backgroundColor: cat.priorityBg, color: cat.priorityColor }}>
                        ★ おすすめ
                      </span>
                    )}
                    <p className="font-bold text-base text-text-main flex-1">{item.name}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-2">
                    <span className="text-sm text-gray-600">💴 <strong>{item.price}</strong></span>
                    <span className="text-sm text-gray-500">🛒 {item.where}</span>
                  </div>
                  <p className="text-sm text-gray-600" style={{ lineHeight: 1.7 }}>💡 {item.note}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* 介護保険でレンタルできるものについて */}
      <div className="rounded-2xl p-6 mb-10" style={{ backgroundColor: '#FFF8E1', border: '2px solid #FFC107' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: '#E65100', borderLeft: 'none', paddingLeft: 0 }}>
          💡 介護保険で安く借りられるものもあります
        </h2>
        <p className="text-base mb-3">
          要介護認定を受けた方は、<strong>手すり・歩行器・車いす・介護ベッド</strong>などを介護保険の1〜3割負担でレンタルできます。
          購入より費用を抑えられる場合があるため、ケアマネジャーに相談してみましょう。
        </p>
        <p className="text-sm text-gray-600">
          ※ 対象品目・負担割合は要介護度によって異なります。市区町村の担当窓口またはケアマネジャーにご確認ください。
        </p>
      </div>

      {/* 関連リンク */}
      <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: '#F3F8F5', border: '1px solid #C8E6C9' }}>
        <p className="font-bold text-base mb-3 text-primary">📎 あわせて読みたい</p>
        <div className="flex flex-col gap-2">
          {[
            { href: '/parents-support', label: '親のためにやるべきこと特集に戻る', icon: '◀' },
            { href: '/cost', label: '費用・料金の目安を確認する', icon: '💴' },
            { href: '/process', label: '入居までの流れを確認する', icon: '📋' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-sm font-bold hover:underline"
              style={{ color: '#1A5E9E', textDecoration: 'none' }}
            >
              <span>{link.icon}</span>
              <span>{link.label} →</span>
            </Link>
          ))}
        </div>
      </div>

      <CTABox />
    </>
  )
}
