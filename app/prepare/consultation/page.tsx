'use client'

import { useState } from 'react'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

const NURSING_HOME_URL = 'https://www.minnanokaigo.com/'

const summaryItems = [
  '相談先は大きく<mark class="highlight">4種類</mark>あり、それぞれ得意なことが違います',
  '施設紹介会社は<mark class="highlight">無料</mark>で使えます（施設側が費用を負担）',
  '地域包括支援センターは<mark class="highlight">地域密着の公的相談窓口</mark>です',
  '相談前に<mark class="highlight">予算・エリア・要介護度</mark>を整理しておくとスムーズです',
]

const consultTypes = [
  {
    name: '地域包括支援センター',
    icon: '🏛',
    cost: '無料',
    costColor: '#2E7D52',
    who: '自治体が設置した公的窓口',
    merit: ['公平な情報を得られる', '介護保険の手続きも相談可', '地域の施設情報に詳しい'],
    demerit: ['紹介できる施設数は限られる', '担当者の知識に差がある'],
    best: '「何から始めればよいか」わからない方の最初の相談先',
    badge: '公的',
    badgeColor: '#2E7D52',
    badgeBg: '#E8F5E9',
  },
  {
    name: '老人ホーム紹介会社',
    icon: '🔍',
    cost: '無料（施設が費用負担）',
    costColor: '#2E7D52',
    who: '民間の施設紹介・マッチングサービス',
    merit: ['多数の施設を一括比較できる', '空き状況をリアルタイムで確認', '施設見学の手配もしてくれる'],
    demerit: ['提携施設のみの紹介になる場合も', '施設によって紹介料が異なる'],
    best: '複数の施設を効率よく比較したい方',
    badge: '民間',
    badgeColor: '#E65100',
    badgeBg: '#FFF3E0',
  },
  {
    name: 'ケアマネジャー',
    icon: '👩‍⚕️',
    cost: '無料（介護保険で負担）',
    costColor: '#2E7D52',
    who: '介護支援専門員。要介護認定を受けた方のサポート担当',
    merit: ['本人の状態をよく把握している', 'ケアプランと合わせて施設を提案', '専門的な介護知識がある'],
    demerit: ['要介護認定が必要', '担当ケアマネの知識・経験に差'],
    best: 'すでに介護保険サービスを使っている方',
    badge: '公的',
    badgeColor: '#2E7D52',
    badgeBg: '#E8F5E9',
  },
  {
    name: '市区町村の窓口',
    icon: '🏢',
    cost: '無料',
    costColor: '#2E7D52',
    who: '市役所・区役所の介護保険担当窓口',
    merit: ['要介護認定の申請ができる', '補助金・助成制度の情報が得られる', '生活保護に関する相談も可'],
    demerit: ['施設の個別情報は少ない', '待ち時間が発生することも'],
    best: '要介護認定の申請や公的支援を知りたい方',
    badge: '公的',
    badgeColor: '#2E7D52',
    badgeBg: '#E8F5E9',
  },
]

const faqs = [
  { q: '施設紹介会社は本当に無料ですか？', a: 'はい、入居者（ご利用者）からの費用は発生しません。紹介料は入居先の施設から支払われます。ただし、紹介できる施設が提携先に限られることがあるため、複数のサービスを活用することをおすすめします。' },
  { q: '地域包括支援センターはどこにありますか？', a: 'お住まいの市区町村に必ず1ヶ所以上設置されています。市区町村のホームページや、市役所の窓口に問い合わせると教えてもらえます。' },
  { q: '相談は何回でもできますか？', a: 'はい、何度でも相談できます。最初の相談で決める必要はありません。複数の窓口に相談して情報を集めるのが理想的です。' },
  { q: '遠方の施設でも紹介してもらえますか？', a: '紹介会社によっては全国対応しています。まず希望エリアを伝えてみましょう。地域包括支援センターは原則として自分の地域の情報が中心です。' },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-2">
      <button
        className="w-full text-left px-5 font-bold text-base bg-white hover:bg-gray-50 transition flex items-center justify-between"
        style={{ minHeight: '60px', paddingTop: '14px', paddingBottom: '14px' }}
        onClick={() => setOpen(!open)}
      >
        <span>Q. {q}</span>
        <span className="text-primary text-xl flex-shrink-0 ml-3">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-5 py-4 text-base border-t border-gray-200" style={{ background: '#F9FAFB', lineHeight: 1.8 }}>
          A. {a}
        </div>
      )}
    </div>
  )
}

export default function ConsultationPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: '入居前の準備', href: '/prepare' },
        { label: '相談先の選び方' },
      ]} />
      <Link href="/prepare" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#2E7D52', fontSize: '14px', fontWeight: 700, textDecoration: 'none', marginBottom: '16px' }}>
        ← 入居前の準備まとめに戻る
      </Link>

      <div className="rounded-2xl mb-8 p-7" style={{ background: 'linear-gradient(135deg, #1565C0 0%, #1976D2 100%)' }}>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', letterSpacing: '0.1em', marginBottom: '8px' }}>💬 CONSULTATION</p>
        <h1 style={{ color: '#fff', fontSize: '24px', fontWeight: 900, lineHeight: 1.45, marginBottom: '12px' }}>
          老人ホーム入居前の<br />相談先の選び方ガイド
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', lineHeight: 1.75 }}>
          「誰に相談すればよいかわからない」という方のために、相談先の種類・特徴・向いている方をわかりやすく比較します。
        </p>
      </div>

      <SummaryBox items={summaryItems} />

      {/* 相談先が必要な理由 */}
      <div className="rounded-2xl p-5 mb-8" style={{ background: '#EDE7F6', border: '2px solid #9575CD' }}>
        <p style={{ fontWeight: 800, fontSize: '17px', color: '#4527A0', marginBottom: '8px' }}>💡 なぜ「相談先の選択」が重要なのか</p>
        <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#4527A0' }}>
          老人ホームは全国に数万件以上あります。インターネットで調べるだけでは比較しきれず、「結局どこがいいのかわからない」状態になる方がほとんどです。
          <strong>正しい相談先を選ぶことで、時間・労力・費用のムダを大幅に削減できます。</strong>
        </p>
      </div>

      {/* 相談先比較 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">相談先の種類と特徴を比較</h2>
      <div className="space-y-4 mb-8">
        {consultTypes.map((ct) => (
          <div key={ct.name} className="rounded-2xl overflow-hidden" style={{ border: '1px solid #e5e7eb' }}>
            <div className="flex items-center gap-3 px-5 py-3" style={{ background: '#F9FAFB', borderBottom: '1px solid #e5e7eb' }}>
              <span style={{ fontSize: '24px' }}>{ct.icon}</span>
              <span style={{ fontWeight: 800, fontSize: '17px' }}>{ct.name}</span>
              <span style={{ background: ct.badgeBg, color: ct.badgeColor, border: `1px solid ${ct.badgeColor}33`, fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '20px' }}>{ct.badge}</span>
              <span style={{ marginLeft: 'auto', fontWeight: 800, fontSize: '14px', color: ct.costColor }}>費用：{ct.cost}</span>
            </div>
            <div className="px-5 py-4">
              <p style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>{ct.who}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 700, color: '#2E7D52', marginBottom: '4px' }}>✅ メリット</p>
                  <ul className="space-y-1">
                    {ct.merit.map(m => <li key={m} style={{ fontSize: '13px', color: '#333' }}>・{m}</li>)}
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 700, color: '#C62828', marginBottom: '4px' }}>⚠ 注意点</p>
                  <ul className="space-y-1">
                    {ct.demerit.map(d => <li key={d} style={{ fontSize: '13px', color: '#555' }}>・{d}</li>)}
                  </ul>
                </div>
              </div>
              <div className="rounded-lg px-4 py-2" style={{ background: '#F0F9F4', border: '1px solid #A5D6A7' }}>
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#2E7D52' }}>👤 こんな方に向いている：{ct.best}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CTABox compact />

      {/* 相談前の準備チェックリスト */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">相談前に整理しておくと役立つこと</h2>
      <p className="text-base mb-5">事前に以下を整理しておくと、相談がスムーズに進みます。</p>
      <div className="rounded-2xl overflow-hidden mb-8" style={{ border: '1px solid #e5e7eb' }}>
        {[
          { icon: '💰', label: '月々の予算（目安）', detail: '年金・貯蓄から月にいくらまで出せるか概算で構いません' },
          { icon: '📍', label: '希望のエリア', detail: '家族が面会しやすい場所・自宅近く・地方など' },
          { icon: '🏥', label: '医療・介護のニーズ', detail: '要介護度、かかりつけ医の有無、医療処置の必要性' },
          { icon: '🤝', label: '認知症への対応が必要か', detail: 'グループホームなど専門施設が必要になる場合があります' },
          { icon: '⏱', label: '入居を検討している時期', detail: '「今すぐ」か「数年後」かで探す施設が変わります' },
          { icon: '👨‍👩‍👧', label: '家族の同意・関与の度合い', detail: '本人・家族の意向を事前にすり合わせておくとスムーズです' },
        ].map((row, i) => (
          <div key={i} className="flex items-start gap-3 px-5 py-4" style={{ background: i % 2 === 0 ? '#fff' : '#FAFAFA', borderTop: i > 0 ? '1px solid #e5e7eb' : 'none' }}>
            <span style={{ fontSize: '20px', flexShrink: 0, marginTop: '2px' }}>{row.icon}</span>
            <div>
              <p style={{ fontWeight: 700, fontSize: '15px', marginBottom: '3px' }}>{row.label}</p>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.65 }}>{row.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">よくある質問</h2>
      <div className="mb-10">
        {faqs.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
      </div>

      {/* 記事下CTA */}
      <a href={NURSING_HOME_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', marginBottom: '12px' }}>
        <div className="rounded-xl px-5 py-4 flex items-center gap-3 transition hover:opacity-90" style={{ background: '#F57C00' }}>
          <span style={{ fontSize: '24px' }}>💬</span>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#fff', fontWeight: 800, fontSize: '16px' }}>老人ホームの無料相談を申し込む →</p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>専門スタッフが施設選びをサポートします</p>
          </div>
        </div>
      </a>

      <h2 className="text-lg font-bold mb-3 mt-8 text-primary">他のテーマも読む</h2>
      <div className="grid grid-cols-2 gap-3">
        {[
          { href: '/prepare/real-estate', label: '自宅・不動産の整理', emoji: '🏠' },
          { href: '/prepare/insurance', label: '保険の見直し', emoji: '📋' },
          { href: '/prepare/inheritance', label: '相続の準備', emoji: '📝' },
          { href: '/prepare', label: '準備まとめに戻る', emoji: '↩' },
        ].map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div className="rounded-xl px-4 py-3 flex items-center gap-2 transition hover:shadow-md" style={{ background: '#fff', border: '1px solid #e5e7eb' }}>
              <span style={{ fontSize: '18px' }}>{item.emoji}</span>
              <span style={{ fontWeight: 600, fontSize: '13px', color: '#2E7D52' }}>{item.label} →</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
