import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateBlock from '@/components/AffiliateBlock'

// ===== アフィリエイトURL（A8.netのURLに差し替えてください） =====
// ※ 電話番号 0120-595-026 / 050-1809-2115 への誘導は成果対象外のため掲載不可
const FUNERAL_URL = 'https://px.a8.net/svt/ejp?a8mat=XXXXXX' // ← A8.netのURLに変更

export const metadata: Metadata = {
  title: '家族葬とは？費用・流れ・葬儀社の選び方を徹底解説【2026年最新版】',
  description: '家族葬の費用相場（直葬79,000円〜）・流れ・葬儀社の選び方をわかりやすく解説。事前に資料請求すると最大5万円割引になる仕組みも紹介。',
  openGraph: {
    title: '家族葬とは？費用・流れ・葬儀社の選び方を徹底解説【2026年最新版】',
    description: '家族葬の費用相場・流れ・選び方をわかりやすく解説。事前資料請求で最大5万円割引。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

const summaryItems = [
  '家族葬は一般葬より<mark class="highlight">費用を50〜70%削減</mark>できます',
  '事前に資料請求するだけで<mark class="highlight">最大5万円の割引</mark>が適用されます',
  '「直葬」なら<mark class="highlight">79,000円〜</mark>で行えます（プランにより異なります）',
  '老人ホームで亡くなった場合も<mark class="highlight">同じ流れ</mark>で対応できます',
]

const plans = [
  { name: '直葬（火葬のみ）', price: '79,000円〜', desc: '通夜・告別式なし。ご遺体を直接火葬場へ。最も費用を抑えたい方向け。', time: '1日', attendees: '家族のみ', color: '#2E7D52', bg: '#E8F5E9' },
  { name: '火葬式', price: '159,000円〜', desc: '火葬場の告別室でお別れの時間を設けます。費用を抑えつつ、きちんとお別れしたい方に。', time: '1日', attendees: '5〜10名', color: '#1565C0', bg: '#E3F2FD' },
  { name: '一日葬', price: '299,000円〜', desc: '通夜なし・告別式のみ。1日で完結するためご遺族の負担が少ない。', time: '1日', attendees: '10〜30名', color: '#6A1B9A', bg: '#F3E5F5' },
  { name: '家族葬', price: '399,000円〜', desc: '通夜・告別式・火葬まで。家族・親しい友人のみで行う最も一般的なプラン。', time: '2日', attendees: '10〜30名', color: '#E65100', bg: '#FFF3E0' },
]

const choosingPoints = [
  { icon: '💴', title: '価格の透明性', desc: '見積もりに「追加費用なし」と明記しているか確認。「一式」表記は追加費用が発生しやすいため注意。' },
  { icon: '⏱', title: '24時間対応か', desc: '深夜・休日でも連絡が取れるか。亡くなるタイミングは選べないため、24時間対応必須。' },
  { icon: '📍', title: '自宅・病院からの距離', desc: '搬送距離が長いと追加費用が発生することがある。近隣の葬儀社を選ぶと費用を抑えやすい。' },
  { icon: '📋', title: '事前見積もりの詳細さ', desc: '棺・骨壷・霊柩車・斎場使用料などが明細として出ているか確認。' },
  { icon: '⭐', title: '口コミ・評判', desc: 'Googleマップや葬儀ポータルの口コミを事前に確認。特に「対応の丁寧さ」「追加費用」に関するコメントを重点的に。' },
]

const regions = [
  { area: '東京', avg: '約40〜50万円', note: '都市部のため斎場使用料が高め' },
  { area: '大阪', avg: '約35〜45万円', note: '火葬費用・斎場費用が比較的安い' },
  { area: '神奈川', avg: '約38〜48万円', note: '横浜市は公営斎場が充実' },
  { area: '埼玉', avg: '約32〜42万円', note: '首都圏の中では比較的リーズナブル' },
  { area: '千葉', avg: '約30〜40万円', note: '市区町村の公営斎場を使うと安い' },
  { area: '福岡', avg: '約28〜38万円', note: '九州は全体的に葬儀費用が低め' },
  { area: '北海道', avg: '約25〜35万円', note: '地方は費用が低い傾向' },
]

// 家族葬のこれから CTAコンポーネント
function FuneralCTA({ size = 'normal' }: { size?: 'normal' | 'large' }) {
  return (
    <AffiliateBlock>
      <div className="my-8">
        <a
          href={FUNERAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', display: 'block' }}
        >
          <div
            className="rounded-2xl px-6 py-5 flex items-center gap-4 transition hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #A04000, #D35400)' }}
          >
            <span style={{ fontSize: size === 'large' ? '40px' : '32px', flexShrink: 0 }}>⚡</span>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#FFF9C4', fontWeight: 800, fontSize: '13px', marginBottom: '4px' }}>
                今すぐ資料請求で最大5万円割引キャンペーン実施中！
              </p>
              <p style={{ color: '#fff', fontWeight: 800, fontSize: size === 'large' ? '18px' : '16px' }}>
                無料で資料請求する →（家族葬のこれから）
              </p>
            </div>
          </div>
        </a>
        <p style={{ fontSize: '11px', color: '#999', textAlign: 'right', marginTop: '4px' }}>※広告（家族葬のこれから）</p>
      </div>
    </AffiliateBlock>
  )
}

export default function FuneralPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '家族葬・葬儀の基礎知識' }]} />

      {/* 冒頭：割引バナー（仕様書指定） */}
      <AffiliateBlock>
        <div
          className="rounded-xl px-5 py-4 mb-6 flex items-start gap-3"
          style={{ background: '#FEF9E7', borderLeft: '5px solid #D35400', border: '1px solid #F0C040' }}
        >
          <span style={{ fontSize: '24px', flexShrink: 0 }}>🎁</span>
          <div>
            <p style={{ fontWeight: 800, fontSize: '16px', color: '#D35400', marginBottom: '4px' }}>
              今すぐ資料請求で葬儀費用 最大5万円割引キャンペーン実施中！
            </p>
            <p style={{ fontSize: '13px', color: '#795548', lineHeight: 1.65 }}>
              家族葬のこれからでは、事前に資料請求をした方に割引が適用されます。いざという時に慌てないためにも、今のうちに無料請求しておきましょう。
            </p>
            <a
              href={FUNERAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', marginTop: '10px', background: '#D35400', color: '#fff', fontWeight: 800, fontSize: '14px', padding: '8px 20px', borderRadius: '8px', textDecoration: 'none' }}
            >
              今すぐ無料で資料請求する →
            </a>
            <p style={{ fontSize: '10px', color: '#999', marginTop: '4px' }}>※広告（家族葬のこれから）</p>
          </div>
        </div>
      </AffiliateBlock>

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        家族葬とは？費用・流れ・葬儀社の選び方を徹底解説【2026年最新版】
      </h1>

      <SummaryBox items={summaryItems} />

      {/* H2① 家族葬とは */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">家族葬とは？一般葬との違いをわかりやすく比較</h2>
      <p className="text-base mb-5">
        家族葬とは、家族や親しい友人など少人数（5〜30名程度）で行う葬儀のスタイルです。
        大人数が参列する一般葬と異なり、費用を抑えながら故人をゆっくりお見送りできます。
      </p>
      <div className="rounded-2xl overflow-hidden mb-8" style={{ border: '1px solid #e5e7eb' }}>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr style={{ background: '#2E7D52', color: '#fff' }}>
              <th className="px-4 py-3 text-left">項目</th>
              <th className="px-4 py-3 text-center">一般葬</th>
              <th className="px-4 py-3 text-center" style={{ background: '#D35400' }}>家族葬</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['参列者数', '50〜200名以上', '5〜30名程度'],
              ['費用目安', '100〜300万円', '30〜80万円'],
              ['準備の手間', '多い（返礼品・案内状等）', '少ない'],
              ['香典収入', 'ある（費用の一部を補填）', 'ほぼなし'],
              ['ゆっくりお別れ', '難しい', 'できる'],
              ['後日の弔問', '少ない', '多くなることがある'],
            ].map(([item, general, family], i) => (
              <tr key={i} style={{ borderTop: '1px solid #e5e7eb', background: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                <td className="px-4 py-3 font-bold">{item}</td>
                <td className="px-4 py-3 text-center text-gray-600">{general}</td>
                <td className="px-4 py-3 text-center font-bold" style={{ color: '#D35400' }}>{family}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* H2② 費用相場 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">家族葬の費用相場【プラン別一覧表】</h2>
      <p className="text-base mb-5">
        家族葬には複数のプランがあり、規模・内容によって費用が異なります。
        ご家族の状況に合ったプランを選びましょう。
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${plan.color}22`, background: plan.bg }}>
            <div className="px-4 py-3 flex items-center justify-between" style={{ background: plan.color }}>
              <span style={{ color: '#fff', fontWeight: 800, fontSize: '15px' }}>{plan.name}</span>
              <span style={{ color: '#fff', fontWeight: 900, fontSize: '18px' }}>{plan.price}</span>
            </div>
            <div className="px-4 py-4">
              <p style={{ fontSize: '14px', color: '#444', lineHeight: 1.7, marginBottom: '10px' }}>{plan.desc}</p>
              <div className="flex gap-3">
                <span style={{ background: 'rgba(255,255,255,0.8)', fontSize: '12px', padding: '3px 10px', borderRadius: '20px', fontWeight: 600 }}>⏱ {plan.time}</span>
                <span style={{ background: 'rgba(255,255,255,0.8)', fontSize: '12px', padding: '3px 10px', borderRadius: '20px', fontWeight: 600 }}>👥 {plan.attendees}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FuneralCTA />

      {/* H2③ 事前資料請求で5万円割引 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">事前に資料請求するだけで最大5万円安くなる理由</h2>
      <p className="text-base mb-5">
        「なぜ資料請求するだけで割引されるの？」と疑問に思う方も多いと思います。
        その仕組みを簡単に説明します。
      </p>
      <div className="space-y-4 mb-6">
        {[
          { step: '01', title: '事前相談ユーザーは「計画的な顧客」', desc: '葬儀社にとって、いざという時に慌てる顧客より、事前に準備している顧客の方が対応しやすく、価格設定に余裕が生まれます。', icon: '🤝' },
          { step: '02', title: '資料請求＝事前登録として扱われる', desc: '家族葬のこれからでは、資料請求した方を「事前相談者」として登録し、優遇価格を適用するキャンペーンを実施しています。', icon: '📋' },
          { step: '03', title: '急ぎでない分、葬儀社が最適なプランを提案できる', desc: '急な依頼は割高になりやすいです。事前に相談することで、ご予算に合った最適なプランを冷静に選べます。', icon: '💡' },
        ].map((item) => (
          <div key={item.step} className="flex items-start gap-4 rounded-xl p-4" style={{ background: '#FEF9E7', border: '1px solid #F0C040' }}>
            <span style={{ fontSize: '28px', flexShrink: 0 }}>{item.icon}</span>
            <div>
              <p style={{ fontWeight: 800, fontSize: '15px', color: '#D35400', marginBottom: '4px' }}>STEP {item.step}: {item.title}</p>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* H2④ 葬儀社の選び方 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">葬儀社を選ぶ5つのポイント</h2>
      <div className="space-y-3 mb-8">
        {choosingPoints.map((pt, i) => (
          <div key={i} className="flex items-start gap-4 rounded-xl p-4" style={{ background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
            <span style={{ fontSize: '28px', flexShrink: 0 }}>{pt.icon}</span>
            <div>
              <p style={{ fontWeight: 800, fontSize: '15px', marginBottom: '4px' }}>
                <span style={{ background: '#D35400', color: '#fff', fontSize: '12px', fontWeight: 800, padding: '1px 8px', borderRadius: '20px', marginRight: '8px' }}>Point {i + 1}</span>
                {pt.title}
              </p>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.7 }}>{pt.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <FuneralCTA />

      {/* H2⑤ 地域別費用 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-8 text-primary">地域別 家族葬の費用相場</h2>
      <p className="text-base mb-4">斎場の使用料・搬送距離などにより、地域によって費用が異なります。</p>
      <div className="rounded-2xl overflow-hidden mb-8" style={{ border: '1px solid #e5e7eb' }}>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr style={{ background: '#D35400', color: '#fff' }}>
              <th className="px-4 py-3 text-left">地域</th>
              <th className="px-4 py-3 text-left">家族葬の平均費用</th>
              <th className="px-4 py-3 text-left">特記事項</th>
            </tr>
          </thead>
          <tbody>
            {regions.map((r, i) => (
              <tr key={i} style={{ borderTop: '1px solid #e5e7eb', background: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                <td className="px-4 py-3 font-bold">{r.area}</td>
                <td className="px-4 py-3 font-bold" style={{ color: '#D35400' }}>{r.avg}</td>
                <td className="px-4 py-3 text-gray-600 text-xs">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* H2⑥ 老人ホームで亡くなった場合 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">老人ホームで亡くなった場合の葬儀の流れ</h2>
      <p className="text-base mb-5">
        老人ホーム入居中に亡くなった場合も、葬儀の流れは基本的に同じです。ただし、いくつか確認が必要な点があります。
      </p>
      <div className="space-y-3 mb-8">
        {[
          { icon: '📞', step: 'STEP 1', title: '施設スタッフへの連絡・死亡確認', desc: '夜間・休日でも施設スタッフが対応。医師による死亡確認が行われます。' },
          { icon: '🚗', step: 'STEP 2', title: '葬儀社への連絡・ご遺体の搬送', desc: '施設から指定の葬儀社を紹介されることがありますが、自分で選ぶ権利があります。' },
          { icon: '📋', step: 'STEP 3', title: '死亡診断書の受け取り', desc: '施設の担当医から発行されます。葬儀・火葬に必要な書類です。' },
          { icon: '🏠', step: 'STEP 4', title: '葬儀の打ち合わせ・実施', desc: '一般の葬儀と同じ流れです。事前に葬儀社に登録しておくとスムーズです。' },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 rounded-xl p-4" style={{ background: '#FEF9E7', border: '1px solid #F0C040' }}>
            <span style={{ fontSize: '24px', flexShrink: 0 }}>{item.icon}</span>
            <div>
              <p style={{ fontWeight: 800, fontSize: '14px', color: '#D35400', marginBottom: '3px' }}>{item.step}: {item.title}</p>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-4 mb-8" style={{ background: '#FFF3E0', border: '1px solid #FFCC80' }}>
        <p style={{ fontSize: '14px', color: '#5D4037', lineHeight: 1.7 }}>
          💡 <strong>ポイント：</strong>施設から葬儀社を紹介されることがありますが、自分で選んだ葬儀社を利用することも可能です。
          事前に資料請求をしておくと、いざという時に慌てずに済みます。
        </p>
      </div>

      <CTABox compact />

      {/* 関連リンク */}
      <h2 className="text-lg font-bold mb-3 mt-10 text-primary">老人ホーム探しも同時に</h2>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {[
          { href: '/types', label: '施設の種類を知る', emoji: '🏠' },
          { href: '/cost', label: '施設費用の相場', emoji: '💰' },
          { href: '/checklist', label: '終活チェックリスト', emoji: '📝' },
          { href: '/prepare', label: '入居前の準備4つ', emoji: '✅' },
        ].map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div className="rounded-xl px-4 py-3 flex items-center gap-2 transition hover:shadow-md" style={{ background: '#fff', border: '1px solid #e5e7eb' }}>
              <span style={{ fontSize: '18px' }}>{item.emoji}</span>
              <span style={{ fontWeight: 600, fontSize: '13px', color: '#2E7D52' }}>{item.label} →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* 末尾大型CTA */}
      <FuneralCTA size="large" />
    </>
  )
}
