import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateBlock from '@/components/AffiliateBlock'

export const metadata: Metadata = {
  title: '老人ホームへの入居を検討すべき6つのタイミング｜迷っている方へ',
  description: '「まだ早いかな」と迷っているうちに手遅れになるケースは少なくありません。配偶者との死別・入院後・認知症の進行など、専門家が勧める「施設を考えるべき6つのタイミング」を解説します。',
  openGraph: {
    title: '老人ホームへの入居を検討すべき6つのタイミング',
    description: '配偶者との死別・入院後・認知症の進行など、施設を考えるべきタイミングを解説します。',
    siteName: 'やさしい老人ホームガイド', locale: 'ja_JP', type: 'article',
  },
}

const summaryItems = [
  '「まだ早い」と思っているうちに<mark class="highlight">緊急入院・急な介護</mark>が始まるケースが最も多いです',
  '配偶者を亡くした後の<mark class="highlight">一人暮らし期間</mark>は生活力・健康が急速に低下しやすい',
  '施設探しには平均<mark class="highlight">3〜6ヶ月</mark>かかります。余裕があるうちに動き始めるのが正解です',
  '入居を決断した家族の約7割が<mark class="highlight">「もっと早く相談すればよかった」</mark>と答えています',
]

const timings = [
  {
    num: '01',
    icon: '🕊️',
    title: '配偶者（パートナー）が先に亡くなったとき',
    color: '#EFEBE9', border: '#795548', labelColor: '#5D4037',
    lead: '「妻（夫）がいなければ何もできない」という方が、急激に生活力を失うケースは非常に多いです。',
    signs: [
      '食事をほとんど作れない・食べていない様子がある',
      '部屋が急に散らかり始めた、掃除ができていない',
      '薬の管理・病院の予約を自分でできなくなった',
      '気力が落ちて日中もほぼ横になっている',
      '急激に体重が落ちた、または生活習慣が乱れた',
    ],
    message: '配偶者を亡くしてから1〜2年以内に健康状態が急変するケースが多くあります。「しばらく様子を見よう」の期間が長くなるほど、選べる施設の選択肢も体力も減っていきます。',
  },
  {
    num: '02',
    icon: '🏥',
    title: '入院・手術・骨折の後、自宅に戻るのが難しいとき',
    color: '#FFEBEE', border: '#EF5350', labelColor: '#C62828',
    lead: '脳梗塞・心筋梗塞・大腿骨骨折——これらは「施設を考え始めるきっかけ」として最も多い出来事です。',
    signs: [
      '退院後、一人での歩行・移動が難しくなった',
      '病院から「自宅での生活は難しい」と言われた',
      '後遺症（麻痺・言語障害・認知機能低下）が残った',
      '家族が介護のために仕事を辞めなければならない状況になった',
      '再入院のリスクが高く、常時見守りが必要と言われた',
    ],
    message: '入院中に病院のソーシャルワーカーに相談するのが最短ルートです。退院後の行き先を「入院中から」探し始めることが、慌てない秘訣です。',
  },
  {
    num: '03',
    icon: '🧠',
    title: '認知症の症状が日常生活に支障を来し始めたとき',
    color: '#F3E5F5', border: '#7B1FA2', labelColor: '#6A1B9A',
    lead: '認知症は「少し物忘れが多い」段階では施設は不要なことが多いですが、日常生活への影響が出始めたら本格的に考え時です。',
    signs: [
      '火の消し忘れ・水の出しっぱなしが頻発している',
      '薬を飲んだかどうか管理できなくなった',
      '夜中に徘徊・外出するようになった',
      '同じ話を1日に何度もする、日時の感覚がなくなった',
      '一人での外出で迷子になったことがある',
    ],
    message: '認知症対応の施設（グループホーム・認知症対応型有料老人ホーム）は空き待ちになる場合があります。「症状が軽いうちに」動き出すことで、本人の意思を尊重した施設選びができます。',
  },
  {
    num: '04',
    icon: '🏠',
    title: '一人暮らしの生活が立ち行かなくなってきたとき',
    color: '#E3F2FD', border: '#1A5E9E', labelColor: '#1565C0',
    lead: '遠方に住む子どもが「帰省のたびに親の部屋が変わっている」と感じ始めたら、すでにサインが出ています。',
    signs: [
      '食事が「パンだけ」「カップ麺だけ」など偏ってきた',
      '体重が明らかに落ちた、または太りすぎた',
      '郵便物が溜まっている、請求書の支払い忘れがある',
      '掃除・洗濯が滞り、衛生面が心配になってきた',
      '電話のたびに同じことを繰り返し話す',
    ],
    message: '一人暮らしの生活力低下は、本人が「大丈夫」と言っていても気づかないうちに進んでいます。年に数回の帰省時に冷蔵庫・ゴミ箱・郵便受けを確認するだけで、状況が見えてきます。',
  },
  {
    num: '05',
    icon: '👨‍👩‍👧',
    title: '在宅介護をしている家族が限界を感じたとき',
    color: '#E8F5E9', border: '#2E7D52', labelColor: '#2E7D52',
    lead: '「施設に入れるのは罪悪感がある」と感じながら在宅介護を続ける家族は多いですが、介護者自身が倒れてからでは遅いです。',
    signs: [
      '夜中に何度も起こされて睡眠が取れない',
      '介護のために仕事を減らした・辞めた',
      '自分自身の健康診断に行けていない',
      'ケアマネから「限界に近い」と言われたことがある',
      'イライラして親に当たってしまうことが増えた',
    ],
    message: '介護者が燃え尽きてしまうと、本人も家族も共倒れになります。施設入居は「見捨てること」ではなく「プロに任せることで、家族としての関係を続けること」です。多くの方が入居後に「もっと早くすればよかった」と言います。',
  },
  {
    num: '06',
    icon: '⚠️',
    title: '転倒・ヒヤリハットを繰り返しているとき',
    color: '#FFF8E1', border: '#FFC107', labelColor: '#E65100',
    lead: '「今回は軽く済んだ」が続くうちに、取り返しのつかない転倒骨折や火災が起きるのが現実です。',
    signs: [
      '家の中で転んだことが2回以上ある',
      'コンロの消し忘れ・鍵のかけ忘れが何度もある',
      '夜間に一人でトイレへ行くのが不安定',
      'ふらつきが多く、外出のたびに家族が心配している',
      '一人でいる時間に何かあっても気づけない環境にある',
    ],
    message: '高齢者の転倒による大腿骨骨折は、そのまま寝たきりへとつながるリスクがあります。「何かあってから」では手遅れになることも。今の状態が続いた場合のリスクを、かかりつけ医やケアマネに相談してみましょう。',
  },
]

export default function CareTimingPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '老人ホームへの入居を検討すべき6つのタイミング' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホームへの入居を<br className="md:hidden" />検討すべき6つのタイミング
        <span className="block text-lg md:text-xl mt-1 font-normal text-gray-600">「まだ早い」が一番のリスクかもしれません</span>
      </h1>
      <p className="text-sm text-gray-500 mb-6">更新：2026年4月 ｜ やさしい老人ホームガイド編集部</p>
      <SummaryBox items={summaryItems} />

      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF8E1', border: '2px solid #FFC107' }}>
        <p className="text-base mb-2 font-bold">「いつ施設を考え始めればいいの？」</p>
        <p className="text-base">この問いに正解はありませんが、「何かが起きてから慌てて探す」ケースほど、選択肢が少なく・費用も高く・本人の意思も反映されにくくなります。以下の6つのタイミングに一つでも当てはまったら、まず情報収集だけでも始めてみてください。</p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-6 mt-10 text-primary">施設入居を考えるべき6つのタイミング</h2>
      <div className="space-y-8 mb-12">
        {timings.map((t, i) => (
          <div key={i} className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${t.border}` }}>
            {/* ヘッダー */}
            <div className="px-5 py-4 flex items-center gap-4" style={{ backgroundColor: t.color }}>
              <div
                style={{
                  background: t.border,
                  color: '#fff',
                  borderRadius: '8px',
                  padding: '4px 10px',
                  fontSize: '12px',
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {t.num}
              </div>
              <span style={{ fontSize: '28px' }}>{t.icon}</span>
              <h3 className="font-bold text-base md:text-lg" style={{ color: '#1A1A1A', borderLeft: 'none', paddingLeft: 0, lineHeight: 1.4 }}>
                {t.title}
              </h3>
            </div>

            {/* 本文 */}
            <div className="px-5 py-5 bg-white">
              <p className="text-base mb-4 text-gray-700">{t.lead}</p>

              {/* サインリスト */}
              <div className="mb-4">
                <p className="text-xs font-bold mb-2" style={{ color: t.labelColor }}>▼ こんなサインが出ていたら要注意</p>
                <ul className="space-y-1">
                  {t.signs.map((sign, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <span className="font-bold flex-shrink-0" style={{ color: t.labelColor }}>□</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* アドバイス */}
              <div className="rounded-lg px-4 py-3" style={{ backgroundColor: t.color }}>
                <p className="text-sm" style={{ color: t.labelColor, lineHeight: 1.8 }}>
                  <span className="font-bold">💡 </span>{t.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 迷っている方へ */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">「まだ早いかも」と思っている方へ</h2>
      <div className="space-y-3 mb-10">
        {[
          {
            q: '「本人が嫌がっている」',
            a: '無理に決める必要はありません。まず見学だけ一緒に行ってみると、本人の気持ちが変わることがよくあります。施設のイメージは実際と大きく違います。',
          },
          {
            q: '「施設に入れるのは可哀想」',
            a: '施設には同年代の友人・プロの介護・毎日の食事・レクリエーションがあります。家族だけの在宅介護より、豊かに過ごせるケースは少なくありません。',
          },
          {
            q: '「まだ介護が必要というほどではない」',
            a: '人気施設には数ヶ月〜数年の待機があります。今すぐ入居しなくても、早めに資料請求・見学・仮申込みをしておくことが、いざというときの備えになります。',
          },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1" style={{ color: '#1A1A1A' }}>😟 {item.q}</p>
            <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>→ {item.a}</p>
          </div>
        ))}
      </div>

      {/* タイムラインの目安 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">施設探しにかかる時間の目安</h2>
      <div className="rounded-2xl overflow-hidden mb-10" style={{ border: '2px solid #2E7D52' }}>
        <div className="px-5 py-3" style={{ backgroundColor: '#2E7D52' }}>
          <p className="font-bold text-white text-sm">入居までの一般的なスケジュール</p>
        </div>
        <div className="bg-white divide-y divide-gray-100">
          {[
            { period: '1ヶ月目', action: '情報収集・資料請求・施設の種類を理解する', color: '#E8F5E9' },
            { period: '2〜3ヶ月目', action: '候補施設の見学（2〜3件）・費用の確認', color: '#F0FAF4' },
            { period: '3〜5ヶ月目', action: '申し込み・入居審査・契約手続き', color: '#E8F5E9' },
            { period: '5〜6ヶ月目', action: '引越し準備・入居', color: '#F0FAF4' },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-3" style={{ backgroundColor: row.color }}>
              <span className="text-sm font-bold flex-shrink-0" style={{ color: '#2E7D52', minWidth: '90px' }}>{row.period}</span>
              <span className="text-sm">{row.action}</span>
            </div>
          ))}
        </div>
      </div>

      <AffiliateBlock>
        <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)', border: '2px solid #2E7D52' }}>
          <p className="font-bold text-lg mb-1" style={{ color: '#1B5E20' }}>今の状況を無料で相談してみませんか</p>
          <p className="text-sm mb-4 text-gray-700">「うちの親はどの施設が合うか」「費用はどのくらいか」など、専門スタッフが無料でサポートします。資料請求だけでもOKです。</p>
          <div className="flex flex-col items-center gap-1">
            <a href="https://www.minnanokaigo.com/" target="_blank" rel="noopener noreferrer" className="btn-shine"
              style={{ display:'flex', alignItems:'center', justifyContent:'center', background:'linear-gradient(135deg, #2E7D52 0%, #43A066 100%)', color:'#fff', fontWeight:700, fontSize:'16px', borderRadius:'10px', padding:'14px 24px', textDecoration:'none', boxShadow:'0 4px 14px rgba(46,125,82,0.45)', width:'100%', maxWidth:'480px' }}>
              施設を無料で探してみる →
            </a>
            <span style={{ fontSize: '11px', color: '#999' }}>※広告（みんなの介護）</span>
          </div>
        </div>
      </AffiliateBlock>

      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/how-to-choose', label: '施設選びのポイント7つ', icon: '✅' },
          { href: '/dementia-facility', label: '認知症対応施設の選び方', icon: '🧠' },
          { href: '/after-hospital', label: '退院後の施設入居・最短ガイド', icon: '🏥' },
          { href: '/tell-parents', label: '親に「施設入居」を伝えるコツ', icon: '👪' },
        ].map(link => (
          <Link key={link.href} href={link.href} className="card-hover flex items-center gap-3 rounded-xl px-4 py-3 bg-white" style={{ border: '1px solid #e5e7eb', textDecoration: 'none', color: 'inherit' }}>
            <span style={{ fontSize: '20px' }}>{link.icon}</span>
            <p className="font-bold text-sm" style={{ color: '#2E7D52' }}>{link.label} →</p>
          </Link>
        ))}
      </div>
      <CTABox />
    </>
  )
}
