import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '在宅介護と施設入居の比較｜介護リフォーム・便利グッズ・見守りカメラ完全ガイド',
  description: '在宅介護と老人ホーム入居、どちらが正解？介護リフォームの費用・補助金、便利な介護グッズ・見守りカメラの選び方まで徹底解説します。',
  openGraph: {
    title: '在宅介護と施設入居の比較｜介護リフォーム・便利グッズ・見守りカメラ完全ガイド',
    description: '在宅介護と老人ホーム入居の比較、介護リフォーム費用・補助金、便利グッズ・見守りカメラを徹底解説。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

// =============================================
// アフィリエイトURL管理（後でIDを差し替えてください）
// =============================================
const AMAZON_BASE = 'https://www.amazon.co.jp/s?k='
const RAKUTEN_BASE = 'https://search.rakuten.co.jp/search/mall/'
const REFORM_CONSULT_URL = 'https://www.minnanokaigo.com/' // 介護リフォーム相談先（差し替え可）

// 介護グッズ
const careGoods = [
  {
    emoji: '🚿',
    name: 'シャワーチェア（入浴用椅子）',
    why: '高齢者の転倒事故で最も多い場所が「浴室」です。濡れた床・立ち上がりの動作・狭い空間が重なり、骨折につながるケースが後を絶ちません。「まだ大丈夫」と思っていた矢先に転倒したという話は珍しくありません。',
    desc: '背もたれ・肘掛き付きで立ち上がりをしっかりサポート。折りたたみ式なら収納も簡単。高さ調整ができるものを選ぶと体格に合わせられます。',
    priceRange: '3,000〜15,000円',
    amazonQuery: '介護+シャワーチェア',
    rakutenQuery: '介護シャワーチェア',
    tag: '転倒防止',
    tagColor: '#2E7D52',
  },
  {
    emoji: '🪑',
    name: '介護用手すり（取付式）',
    why: 'トイレの立ち上がり、玄関の段差、廊下でのふらつき——これらは毎日何十回も繰り返される動作です。筋力が落ちてくると、今まで何でもなかった動作が転倒のきっかけになります。工事なしで設置できる手すりなら今日から安全を確保できます。',
    desc: 'つっぱり式なら壁に穴を開けず賃貸でも設置可能。トイレ・浴室・玄関・ベッドサイドなど用途別に選べます。耐荷重150kg以上の製品を選ぶと安心です。',
    priceRange: '5,000〜30,000円',
    amazonQuery: '介護+手すり+取付',
    rakutenQuery: '介護手すり 取付',
    tag: '転倒防止',
    tagColor: '#2E7D52',
  },
  {
    emoji: '🛏️',
    name: '介護ベッド（電動・レンタル対応）',
    why: '床に敷いた布団からの立ち上がりは、足腰が弱った高齢者にとって大きな負担です。毎回介助が必要になると、介護する家族も体を痛めてしまいます。また夜間の急変時も、ベッドであれば発見・対応がスムーズです。',
    desc: '背上げ・高さ調整ができる電動ベッドで、自力での起き上がりをサポート。介護保険のレンタル対象品のため、月額1,000〜2,000円程度の自己負担で利用できます。購入より先にレンタルで試すのがおすすめです。',
    priceRange: 'レンタル月額1,000〜2,000円',
    amazonQuery: '介護ベッド+電動',
    rakutenQuery: '介護ベッド 電動',
    tag: '介護保険対象',
    tagColor: '#1A5E9E',
  },
  {
    emoji: '🚽',
    name: 'ポータブルトイレ',
    why: '夜中に暗い廊下をトイレまで歩く——この行動が転倒事故の大きな原因です。特に就寝後2〜3時間は血圧が下がりやすく、ふらつきが起きやすい時間帯。実際に高齢者の転倒の多くが「夜間のトイレ移動中」に発生しています。',
    desc: 'ベッドのすぐそばに置けるので夜間の移動距離をゼロに。消臭機能付きで臭いも気になりません。防水加工・丸洗いできるものが衛生的です。補高便座タイプなら自宅のトイレにかぶせて使えます。',
    priceRange: '8,000〜30,000円',
    amazonQuery: 'ポータブルトイレ+介護',
    rakutenQuery: 'ポータブルトイレ 介護',
    tag: '生活支援',
    tagColor: '#E65100',
  },
  {
    emoji: '🦯',
    name: '歩行器・シルバーカー',
    why: '「転ぶのが怖くて外に出なくなった」という高齢者は多くいます。外出頻度が下がると筋力がさらに低下し、認知機能の衰えも加速します。歩行器は「もう少し歩ける」という自信を取り戻し、社会とのつながりを維持するための道具です。',
    desc: '屋内用・屋外用・兼用タイプがあります。シルバーカーは荷物が入るバッグ付きで買い物にも便利。折りたたみ式なら車のトランクにも積めます。介護保険のレンタル対象品もあります。',
    priceRange: '10,000〜40,000円',
    amazonQuery: '歩行器+介護',
    rakutenQuery: '歩行器 介護 シルバーカー',
    tag: '介護保険対象',
    tagColor: '#1A5E9E',
  },
  {
    emoji: '💊',
    name: '服薬管理ケース（アラーム付き）',
    why: '高齢者は複数の薬を毎日服用していることが多く、飲み忘れ・二重服用が深刻なリスクになります。薬の飲み忘れが続くと血圧・血糖値のコントロールが乱れ、入院につながるケースも。一人暮らしの親を持つ家族が最も心配する問題の一つです。',
    desc: '時間になるとアラームが鳴り、該当する曜日・時間の仕切りが光るタイプが使いやすい。スマホ連動で家族にも通知できる高機能タイプも人気です。週1回セットするだけで管理できます。',
    priceRange: '1,500〜5,000円',
    amazonQuery: '服薬管理+アラーム+ケース',
    rakutenQuery: '服薬管理 アラーム',
    tag: '健康管理',
    tagColor: '#7B1FA2',
  },
]

// 見守りカメラ・センサー
const cameras = [
  {
    emoji: '📷',
    name: 'スマホ連動見守りカメラ',
    desc: '外出先からスマホで確認できるカメラ。動体検知でアラートを受け取れます。設置が簡単で工事不要。',
    priceRange: '3,000〜15,000円',
    unit: '約1,000〜3,000円/月（通信費込みプランあり）',
    amazonQuery: '見守りカメラ+スマホ+室内',
    rakutenQuery: '見守りカメラ スマホ 室内',
    point: '離れて暮らす家族に人気No.1',
    pointColor: '#F57C00',
  },
  {
    emoji: '🚶',
    name: '人感センサー（動き検知）',
    desc: '一定時間動きがないとスマホに通知が届くセンサー。電話よりも自然に見守れます。',
    priceRange: '3,000〜10,000円',
    unit: '通知料無料のものもあり',
    amazonQuery: '人感センサー+見守り+高齢者',
    rakutenQuery: '人感センサー 見守り 高齢者',
    point: 'プライバシーを守りながら見守れる',
    pointColor: '#2E7D52',
  },
  {
    emoji: '🛎️',
    name: '緊急通報ボタン（ペンダント型）',
    desc: '首にかけるだけの緊急ボタン。ボタン1つで家族・コールセンターに連絡できます。防水タイプが安心。',
    priceRange: '月額2,000〜3,000円（レンタル）',
    unit: '24時間オペレーター対応サービスあり',
    amazonQuery: '緊急通報ボタン+高齢者+ペンダント',
    rakutenQuery: '緊急通報ボタン 高齢者',
    point: '一人暮らしの親に最もおすすめ',
    pointColor: '#C62828',
  },
  {
    emoji: '🌡️',
    name: '健康管理デバイス（血圧・心拍）',
    desc: '血圧・心拍数を計測してスマホに記録。データを家族と共有できるタイプが人気です。',
    priceRange: '5,000〜20,000円',
    unit: 'データ共有アプリ無料のものが多い',
    amazonQuery: '血圧計+スマホ連動+高齢者',
    rakutenQuery: '血圧計 スマホ連動',
    point: '介護予防・早期発見に役立つ',
    pointColor: '#1A5E9E',
  },
]

// リフォーム項目
const reformItems = [
  { place: 'トイレ', work: '手すり設置・ドア拡張・段差解消', cost: '5〜30万円', subsidy: '最大18万円' },
  { place: '浴室', work: '手すり・すべり止め・介護浴槽', cost: '20〜80万円', subsidy: '最大18万円' },
  { place: '玄関', work: '段差解消・スロープ設置・手すり', cost: '10〜30万円', subsidy: '最大18万円' },
  { place: '廊下・居室', work: '手すり・段差解消・床材変更', cost: '5〜40万円', subsidy: '最大18万円' },
  { place: '寝室', work: '手すり・照明改善・扉の引き戸化', cost: '10〜30万円', subsidy: '最大18万円' },
]

const summaryItems = [
  '在宅介護と施設入居、それぞれに<mark class="highlight">メリット・デメリット</mark>があります',
  '介護リフォームには国から<mark class="highlight">最大20万円の補助金</mark>が出ます',
  '見守りカメラは<mark class="highlight">3,000円〜</mark>で設置でき、離れた家族も安心できます',
  '便利な介護グッズを使うと<mark class="highlight">介護の負担を大幅に軽減</mark>できます',
]

export default function HomeCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: '在宅介護と施設入居の比較｜介護リフォーム・便利グッズ・見守りカメラ完全ガイド',
            author: { '@type': 'Organization', name: 'やさしい老人ホームガイド' },
          }),
        }}
      />

      <Breadcrumb items={[{ label: '在宅介護・介護用品ガイド' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        在宅介護と施設入居の比較｜介護リフォーム・便利グッズ・見守りカメラ完全ガイド
      </h1>

      {/* ヒーロー */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <Image
          src="/images/homecare_hero.jpg"
          alt="自宅で介護を受ける高齢者と家族のイメージ"
          width={600}
          height={400}
          style={{ width: '50%', height: 'auto', borderRadius: '12px' }}
          priority
        />
      </div>

      <SummaryBox items={summaryItems} />

      <p className="text-base mb-10">
        「老人ホームを検討しているけど、まず自宅で介護できないか試したい」
        そう思っているご家族はとても多いです。
        在宅介護を続けるための道具・環境整備から、施設入居との比較まで、
        このページで必要な情報をまとめました。
      </p>

      {/* ============================
          1. 在宅 vs 施設 比較
      ============================= */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-2 text-primary">
        在宅介護と施設入居、どちらを選ぶべきか？
      </h2>
      <p className="text-base mb-6">
        どちらが正解かは、介護度・家族の状況・経済状況によって異なります。
        まず両者のメリット・デメリットを整理しましょう。
      </p>

      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {/* 在宅介護 */}
        <div className="rounded-2xl overflow-hidden border-2 border-primary">
          <div className="bg-primary px-5 py-3">
            <p className="text-white font-bold text-lg">🏠 在宅介護</p>
          </div>
          <div className="p-5 bg-white space-y-4">
            <div>
              <p className="font-bold text-base text-primary mb-2">✅ メリット</p>
              <ul className="space-y-1 text-base">
                <li>・住み慣れた自宅で生活できる</li>
                <li>・費用を抑えられる場合がある</li>
                <li>・家族と密に関われる</li>
                <li>・本人の自由度が高い</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-base mb-2" style={{ color: '#C62828' }}>⚠️ デメリット</p>
              <ul className="space-y-1 text-base">
                <li>・家族の介護負担が大きい</li>
                <li>・夜間の急変に対応しにくい</li>
                <li>・要介護度が上がると限界がある</li>
                <li>・リフォーム費用がかかる</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 施設入居 */}
        <div className="rounded-2xl overflow-hidden border-2 border-accent">
          <div className="px-5 py-3" style={{ background: '#E65100' }}>
            <p className="text-white font-bold text-lg">🏢 施設入居</p>
          </div>
          <div className="p-5 bg-white space-y-4">
            <div>
              <p className="font-bold text-base mb-2" style={{ color: '#E65100' }}>✅ メリット</p>
              <ul className="space-y-1 text-base">
                <li>・24時間専門スタッフが対応</li>
                <li>・急変時も安心</li>
                <li>・食事・リハビリが充実</li>
                <li>・家族の負担が大幅に減る</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-base mb-2" style={{ color: '#C62828' }}>⚠️ デメリット</p>
              <ul className="space-y-1 text-base">
                <li>・月額費用がかかる</li>
                <li>・環境の変化に慣れるまで時間がかかる</li>
                <li>・入居一時金が必要な場合がある</li>
                <li>・人気施設は待機が発生する</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 判断チャート */}
      <div className="rounded-2xl p-6 mb-10" style={{ background: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="font-bold text-base text-primary mb-3">📋 どちらを選ぶ？簡易チェック</p>
        <div className="space-y-2 text-base">
          {[
            { check: '要介護3以上 → 施設入居を強く推奨', color: '#C62828' },
            { check: '認知症が進んでいる → グループホームや特養を検討', color: '#C62828' },
            { check: '夜間に一人になる → 施設または訪問介護サービス', color: '#E65100' },
            { check: '要支援〜要介護2・家族が同居 → 在宅介護＋グッズ整備が現実的', color: '#2E7D52' },
            { check: '本人が施設を強く拒否している → 在宅介護からスタートして慣らす', color: '#2E7D52' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span style={{ color: item.color, flexShrink: 0 }}>▶</span>
              <span style={{ color: item.color, fontWeight: 600 }}>{item.check}</span>
            </div>
          ))}
        </div>
      </div>

      <CTABox compact />

      {/* ============================
          2. 介護リフォーム
      ============================= */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12 text-primary">
        介護リフォームの費用と補助金
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <Image
          src="/images/homecare_reform.jpg"
          alt="介護リフォームで手すりを設置した浴室のイメージ"
          width={600}
          height={400}
          style={{ width: '50%', height: 'auto', borderRadius: '12px' }}
        />
      </div>

      {/* 補助金バナー */}
      <div
        className="rounded-2xl p-5 mb-6 flex items-start gap-4"
        style={{ background: '#FFF3E0', border: '2px solid #F57C00' }}
      >
        <span className="text-4xl flex-shrink-0">💡</span>
        <div>
          <p className="font-bold text-base mb-1" style={{ color: '#E65100' }}>
            介護保険の住宅改修費補助を活用しよう
          </p>
          <p className="text-base">
            要介護・要支援の認定を受けた方は、介護保険から住宅改修費として
            <mark className="highlight">最大20万円の補助</mark>が受けられます。
            自己負担は1〜3割（1〜3万円程度）で工事できます。
          </p>
        </div>
      </div>

      {/* リフォーム費用表 */}
      <div className="table-wrapper mb-6">
        <table className="w-full border-collapse text-base">
          <thead>
            <tr className="bg-primary text-white">
              <th className="text-left">場所</th>
              <th className="text-left">主な工事内容</th>
              <th className="text-left">費用目安</th>
              <th className="text-left">補助上限</th>
            </tr>
          </thead>
          <tbody>
            {reformItems.map((item, i) => (
              <tr key={i} className={i % 2 === 0 ? 'border-b border-gray-200' : 'border-b border-gray-200 bg-gray-50'}>
                <td className="font-bold">{item.place}</td>
                <td>{item.work}</td>
                <td>{item.cost}</td>
                <td className="font-bold" style={{ color: '#F57C00' }}>{item.subsidy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500 mb-4">※補助は同一住宅・同一被保険者につき上限20万円（通算）。市区町村により異なります。</p>

      {/* リフォーム会社相談CTA */}
      <a
        href={REFORM_CONSULT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full rounded-2xl font-bold text-white transition hover:opacity-90 mb-10"
        style={{
          background: 'linear-gradient(90deg, #E65100, #F57C00)',
          fontSize: '18px',
          minHeight: '60px',
          textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(245,124,0,0.35)',
        }}
      >
        🏠 介護リフォームの無料相談・見積もりはこちら →
      </a>

      {/* ============================
          3. 便利な介護グッズ
      ============================= */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-4 text-primary">
        便利な介護グッズ紹介
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <Image
          src="/images/homecare_goods.jpg"
          alt="在宅介護に役立つ介護グッズのイメージ"
          width={600}
          height={400}
          style={{ width: '50%', height: 'auto', borderRadius: '12px' }}
        />
      </div>

      <div className="grid gap-6 mb-10">
        {careGoods.map((item) => {
          return (
            <div
              key={item.name}
              className="rounded-2xl bg-white overflow-hidden"
              style={{ border: '1px solid #e5e7eb', boxShadow: '0 3px 12px rgba(0,0,0,0.08)' }}
            >
              {/* ヘッダー */}
              <div className="px-5 pt-5 pb-3">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <p className="font-bold text-lg">{item.name}</p>
                      <span
                        className="text-sm px-2 py-0.5 rounded-full font-bold text-white flex-shrink-0"
                        style={{ background: item.tagColor, fontSize: '13px' }}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-base font-bold" style={{ color: '#F57C00' }}>目安価格：{item.priceRange}</p>
                  </div>
                </div>

                {/* ① なぜ必要か */}
                <div className="rounded-xl p-4 mb-4" style={{ background: '#FFF8E1', border: '1px solid #FFE082' }}>
                  <p className="text-sm font-bold mb-1.5" style={{ color: '#E65100' }}>⚠️ こんな状況になっていませんか？</p>
                  <p className="text-base">{item.why}</p>
                </div>

                {/* ② 商品説明 */}
                <p className="text-base mb-4">{item.desc}</p>

                {/* ③ 購入ボタン＋口コミリンク */}
                <div className="flex gap-3 flex-wrap items-center">
                  <a
                    href={`${AMAZON_BASE}${encodeURIComponent(item.amazonQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-5 py-3 rounded-xl font-bold text-white transition hover:opacity-90 flex-1"
                    style={{ background: '#FF9900', fontSize: '16px', textDecoration: 'none', minHeight: '52px', justifyContent: 'center' }}
                  >
                    🛒 Amazonで探す
                  </a>
                  <a
                    href={`${RAKUTEN_BASE}${encodeURIComponent(item.rakutenQuery)}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-5 py-3 rounded-xl font-bold text-white transition hover:opacity-90 flex-1"
                    style={{ background: '#BF0000', fontSize: '16px', textDecoration: 'none', minHeight: '52px', justifyContent: 'center' }}
                  >
                    🛒 楽天で探す
                  </a>
                  <a
                    href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(item.amazonQuery)}&rh=p_72%3A586496011`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#FF9900', fontSize: '14px', fontWeight: 700, textDecoration: 'underline', whiteSpace: 'nowrap' }}
                  >
                    ★ 口コミを見る →
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <CTABox compact />

      {/* ============================
          4. 見守りカメラ・センサー
      ============================= */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12 text-primary">
        見守りカメラ・センサーの選び方
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <Image
          src="/images/homecare_camera.jpg"
          alt="室内に設置された見守りカメラのイメージ"
          width={600}
          height={400}
          style={{ width: '50%', height: 'auto', borderRadius: '12px' }}
        />
      </div>

      <div className="grid gap-5 mb-10">
        {cameras.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl bg-white overflow-hidden"
            style={{ border: '1px solid #e5e7eb', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
          >
            <div className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className="font-bold text-base">{item.name}</p>
                    <span
                      className="text-sm px-2 py-0.5 rounded-full font-bold text-white flex-shrink-0"
                      style={{ background: item.pointColor, fontSize: '13px' }}
                    >
                      {item.point}
                    </span>
                  </div>
                  <p className="text-sm font-bold" style={{ color: '#F57C00' }}>目安：{item.priceRange}</p>
                  <p className="text-sm text-gray-500">{item.unit}</p>
                </div>
              </div>
              <p className="text-base mb-4">{item.desc}</p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href={`${AMAZON_BASE}${encodeURIComponent(item.amazonQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-white transition hover:opacity-90"
                  style={{ background: '#FF9900', fontSize: '15px', textDecoration: 'none', minHeight: '44px' }}
                >
                  🛒 Amazonで探す
                </a>
                <a
                  href={`${RAKUTEN_BASE}${encodeURIComponent(item.rakutenQuery)}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-white transition hover:opacity-90"
                  style={{ background: '#BF0000', fontSize: '15px', textDecoration: 'none', minHeight: '44px' }}
                >
                  🛒 楽天で探す
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* まとめ */}
      <div
        className="rounded-2xl p-7 mb-10"
        style={{ background: 'linear-gradient(135deg, #E8F5E9, #FFF8E1)', border: '2px solid #2E7D52' }}
      >
        <p className="text-xl font-bold text-primary mb-4" style={{ borderLeft: 'none', paddingLeft: 0 }}>
          📝 まとめ：在宅介護から施設入居へのステップ
        </p>
        <ol className="space-y-3 text-base">
          <li className="flex items-start gap-3">
            <span className="font-bold text-white bg-primary rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">1</span>
            <span>まず<mark className="highlight">介護グッズと住宅改修</mark>で在宅介護を試みる</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold text-white bg-primary rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">2</span>
            <span>離れて暮らす場合は<mark className="highlight">見守りカメラ・センサー</mark>で安全を確認する</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold text-white bg-primary rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">3</span>
            <span>在宅介護が難しくなったら<mark className="highlight">早めに施設を探し始める</mark></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold text-white bg-primary rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">4</span>
            <span>無料の相談窓口を使えば<mark className="highlight">最適な施設をすぐに見つけられます</mark></span>
          </li>
        </ol>
      </div>

      {/* 関連記事リンク */}
      <h2 className="text-xl font-bold mb-4 text-primary">あわせて読みたい記事</h2>
      <div className="grid gap-4 mb-10">
        <Link href="/reason" className="flex items-center gap-4 p-5 rounded-2xl bg-white transition hover:shadow-md" style={{ border: '2px solid #546E7A', textDecoration: 'none', color: 'inherit' }}>
          <span className="text-3xl flex-shrink-0">😔</span>
          <div className="flex-1">
            <p className="font-bold text-base mb-0.5" style={{ color: '#37474F' }}>なぜ老人ホームに入るのか？知っておきたい6つのリスク</p>
            <p className="text-sm text-gray-600">在宅介護を続けることのリスクを解説</p>
          </div>
          <span style={{ color: '#546E7A' }} className="font-bold flex-shrink-0">→</span>
        </Link>
        <Link href="/cost" className="flex items-center gap-4 p-5 rounded-2xl bg-white transition hover:shadow-md" style={{ border: '2px solid #F57C00', textDecoration: 'none', color: 'inherit' }}>
          <span className="text-3xl flex-shrink-0">💴</span>
          <div className="flex-1">
            <p className="font-bold text-base mb-0.5" style={{ color: '#E65100' }}>老人ホームの費用・料金の相場</p>
            <p className="text-sm text-gray-600">施設タイプ別の月額・初期費用を比較</p>
          </div>
          <span style={{ color: '#F57C00' }} className="font-bold flex-shrink-0">→</span>
        </Link>
      </div>

      <CTABox />
    </>
  )
}
