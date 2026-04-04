'use client'

import { useState } from 'react'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

// ===== アフィリエイトURL（差し替え箇所） =====
const NURSING_HOME_URL = 'https://www.minnanokaigo.com/'
const REAL_ESTATE_URL  = 'https://www.home4u.jp/'
const INSURANCE_URL    = 'https://www.hokennomadoguchi.com/'
const INHERITANCE_URL  = 'https://www.souzoku-pro.net/'

const summaryItems = [
  '老人ホーム探しと同時に「家・保険・相続・相談先」の<mark class="highlight">4つの準備</mark>が必要です',
  '準備が遅れると<mark class="highlight">資金計画が崩れる</mark>ことがあります',
  '早めに動くほど選択肢が増え、<mark class="highlight">家族の負担も減ります</mark>',
  'まずは<mark class="highlight">全体像を把握</mark>して、できることから始めましょう',
]

const topics = [
  {
    href: '/prepare/real-estate',
    emoji: '🏠',
    title: '自宅・不動産の整理',
    subtitle: '売る？貸す？残す？早めの判断が肝心',
    tags: ['不動産売却', '空き家対策', '資金計画'],
    desc: '老人ホームの費用を工面するうえで、自宅の売却・賃貸は大きな選択肢です。名義や相続の問題が絡むことも多く、早期に動き出すことが重要です。',
    impact: '資金への影響：大',
    impactColor: '#C62828',
    timing: '入居の1〜2年前から',
    ctaLabel: '不動産の相談をする（無料）→',
    ctaHref: REAL_ESTATE_URL,
    ctaColor: '#2E7D52',
  },
  {
    href: '/prepare/consultation',
    emoji: '💬',
    title: '相談先の選び方',
    subtitle: '一人で悩まず、プロに頼る',
    tags: ['地域包括支援センター', 'ケアマネ', '紹介会社'],
    desc: '老人ホーム選びは情報量が多く、一人で決めにくいものです。相談先によって提供できる情報や費用が異なるため、違いを知ってから動きましょう。',
    impact: '時間の節約：大',
    impactColor: '#1565C0',
    timing: 'できるだけ早めに',
    ctaLabel: '老人ホームの無料相談をする →',
    ctaHref: NURSING_HOME_URL,
    ctaColor: '#F57C00',
  },
  {
    href: '/prepare/insurance',
    emoji: '📋',
    title: '保険の見直し',
    subtitle: '入居後は保障の考え方が変わります',
    tags: ['医療保険', '介護保険', '終身保険'],
    desc: '老人ホームに入居すると、医療費・介護費の多くは施設が対応します。そのため、今の保険が「無駄」になったり「足りない」部分が変わることがあります。',
    impact: '月々の出費：中',
    impactColor: '#6A1B9A',
    timing: '入居の半年〜1年前',
    ctaLabel: '保険の無料相談をする →',
    ctaHref: INSURANCE_URL,
    ctaColor: '#6A1B9A',
  },
  {
    href: '/prepare/inheritance',
    emoji: '📝',
    title: '相続の準備',
    subtitle: '元気なうちに話しておくと家族が助かります',
    tags: ['遺言', '財産整理', '家族信託'],
    desc: '老人ホームへの入居は、相続を意識するきっかけになります。財産の一覧を整理し、家族と話し合っておくだけで、後のトラブルを大きく減らせます。',
    impact: '家族の負担：大',
    impactColor: '#E65100',
    timing: '入居の1年前〜',
    ctaLabel: '相続の無料相談をする →',
    ctaHref: INHERITANCE_URL,
    ctaColor: '#E65100',
  },
]

const mistakes = [
  { emoji: '😰', title: '施設費用だけ計算して資金不足に', desc: '月額費用だけを見て入居を決め、後から不動産の整理や初期費用の工面に追われるケースが多いです。' },
  { emoji: '😓', title: '保険の見直しを忘れて二重払い', desc: '入居後は不要になる保険が出てきます。放置すると月々数万円の無駄な支出が続きます。' },
  { emoji: '😣', title: '相続で家族がもめてしまった', desc: '入居後に認知症が進み、本人の意向を確認できなくなることがあります。元気なうちに財産の話し合いを。' },
  { emoji: '🤯', title: '一人で調べて疲れ果てた', desc: '情報量が多すぎて「何から手をつければよいかわからない」状態になる方が多いです。早めに相談窓口を使いましょう。' },
]

const faqs = [
  { q: 'いつから準備を始めるべきですか？', a: '理想は入居の1〜2年前ですが、「早すぎる」ことはありません。特に不動産の売却や相続準備は時間がかかるため、元気なうちから少しずつ進めることをおすすめします。' },
  { q: '全部を一度にやる必要がありますか？', a: 'いいえ。優先順位をつけて少しずつ進めて大丈夫です。まずは「今の状況整理」から始め、無料相談を活用しながら一つずつ進めましょう。' },
  { q: '相談は有料ですか？', a: '地域包括支援センターや老人ホーム紹介会社は無料で相談できます。不動産査定も無料のサービスが多くあります。保険・相続相談も初回無料の窓口が増えています。' },
  { q: '子供（家族）にどこまで話すべきですか？', a: '財産・保険・施設の希望については、できるだけ早めに家族と共有しておくことをおすすめします。突然の入居が必要になった場合、家族が判断を求められることが多いためです。' },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-2">
      <button
        className="w-full text-left px-5 font-bold text-base bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
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

export default function PreparePage() {
  return (
    <>
      <Breadcrumb items={[{ label: '入居前の準備' }]} />

      {/* Hero */}
      <div className="rounded-2xl mb-8 p-7" style={{ background: 'linear-gradient(135deg, #1B5E37 0%, #2E7D52 60%, #388E3C 100%)' }}>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', letterSpacing: '0.1em', marginBottom: '8px' }}>PREPARATION GUIDE</p>
        <h1 style={{ color: '#fff', fontSize: '26px', fontWeight: 900, lineHeight: 1.45, marginBottom: '14px' }}>
          老人ホームに入る前に<br />準備しておきたい<span style={{ color: '#FFF176' }}>4つのこと</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.75, marginBottom: '20px', fontSize: '15px' }}>
          老人ホームを探すとき、多くの方が「施設の種類・費用・立地」だけを調べます。しかし実際には、
          <strong style={{ color: '#FFF176' }}>家の整理・保険・相続・相談先</strong>の準備も同時に必要になります。
          このページでは、入居前に知っておくべき4つのテーマをわかりやすく整理します。
        </p>
        <Link
          href={NURSING_HOME_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#F57C00',
            color: '#fff',
            fontWeight: 800,
            fontSize: '15px',
            padding: '12px 24px',
            borderRadius: '10px',
            textDecoration: 'none',
          }}
        >
          まず無料で施設の相談をする →
        </Link>
      </div>

      <SummaryBox items={summaryItems} />

      {/* 準備のタイミング可視化 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        いつから準備を始めればよい？
      </h2>
      <div className="rounded-2xl overflow-hidden mb-10" style={{ border: '1px solid #e5e7eb' }}>
        <div className="px-5 py-3" style={{ background: '#2E7D52' }}>
          <p style={{ color: '#fff', fontWeight: 700, fontSize: '14px' }}>◀ 時間軸　入居まで</p>
        </div>
        {[
          { period: '2年以上前', label: '相続・財産整理の話し合い', color: '#E8F5E9', bar: '#2E7D52', width: '100%', emoji: '📝' },
          { period: '1〜2年前', label: '自宅・不動産の方針を決める', color: '#FFF3E0', bar: '#F57C00', width: '75%', emoji: '🏠' },
          { period: '半年〜1年前', label: '保険の見直し・解約手続き', color: '#F3E5F5', bar: '#9C27B0', width: '55%', emoji: '📋' },
          { period: '3〜6ヶ月前', label: '相談先を決めて施設を探し始める', color: '#E3F2FD', bar: '#1565C0', width: '35%', emoji: '💬' },
          { period: '入居直前', label: '契約・引越し・必要書類の準備', color: '#FFF8E1', bar: '#FF8F00', width: '20%', emoji: '✅' },
        ].map((row, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-3" style={{ background: row.color, borderTop: i > 0 ? '1px solid #e5e7eb' : 'none' }}>
            <span style={{ fontSize: '20px', flexShrink: 0 }}>{row.emoji}</span>
            <div style={{ width: '90px', flexShrink: 0 }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#555' }}>{row.period}</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: '#e5e7eb', borderRadius: '20px', height: '10px', overflow: 'hidden' }}>
                <div style={{ width: row.width, background: row.bar, height: '100%', borderRadius: '20px' }} />
              </div>
              <p style={{ fontSize: '13px', marginTop: '4px', fontWeight: 600, color: '#333' }}>{row.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 4トピックカード */}
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-primary">
        4つの準備テーマ
      </h2>
      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {topics.map((t) => (
          <Link key={t.href} href={t.href} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              className="rounded-2xl p-5 h-full flex flex-col transition hover:shadow-lg"
              style={{ background: '#fff', border: '1px solid #e5e7eb', cursor: 'pointer' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span style={{ fontSize: '36px' }}>{t.emoji}</span>
                <div>
                  <p style={{ fontWeight: 800, fontSize: '17px', color: '#1a1a1a', lineHeight: 1.3 }}>{t.title}</p>
                  <p style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>{t.subtitle}</p>
                </div>
              </div>
              <div className="flex gap-1 flex-wrap mb-3">
                {t.tags.map(tag => (
                  <span key={tag} style={{ background: '#F3F4F6', color: '#555', fontSize: '11px', padding: '2px 8px', borderRadius: '20px', fontWeight: 600 }}>{tag}</span>
                ))}
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.75, color: '#444', flex: 1, marginBottom: '12px' }}>{t.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <span style={{ fontSize: '12px', color: t.impactColor, fontWeight: 700 }}>⚠ {t.impact}</span>
                  <span style={{ fontSize: '12px', color: '#888', marginLeft: '10px' }}>🕐 {t.timing}</span>
                </div>
                <span style={{ color: t.ctaColor, fontWeight: 800, fontSize: '14px' }}>くわしく見る →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <CTABox compact />

      {/* なぜ施設選びだけでは不十分か */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12 text-primary">
        なぜ「施設選び」だけでは不十分なのか
      </h2>
      <div className="rounded-2xl p-6 mb-8" style={{ background: '#FFF3E0', border: '2px solid #F57C00' }}>
        <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#5D4037' }}>
          多くの方が「施設の種類・費用・立地」を調べることに集中しますが、
          実際には入居後の生活を安定させるために<strong>4つの周辺準備</strong>も欠かせません。
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-5">
          {[
            { icon: '💰', title: '自宅を売却すれば施設費用を工面できる', desc: '年金だけでは施設費が足りない場合、自宅の売却資金が重要な財源になります。' },
            { icon: '🔍', title: '相談先を間違えると遠回りになる', desc: '施設紹介会社・ケアマネ・地域包括では、得られる情報や動ける範囲が異なります。' },
            { icon: '📋', title: '入居後に不要な保険料を払い続けるケースも', desc: '医療保険の重複や、もう使わない入院特約などをそのままにしている方が多いです。' },
            { icon: '📝', title: '認知症が進む前に相続の意向を伝えておく', desc: '本人が判断できなくなった後に家族がもめるケースが増えています。' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span style={{ fontSize: '24px', flexShrink: 0 }}>{item.icon}</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{item.title}</p>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* よくある失敗例 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        準備が遅れた方のよくある失敗例
      </h2>
      <div className="space-y-3 mb-10">
        {mistakes.map((m, i) => (
          <div key={i} className="flex items-start gap-4 rounded-xl p-4" style={{ background: '#fff', border: '1px solid #e5e7eb' }}>
            <span style={{ fontSize: '32px', flexShrink: 0 }}>{m.emoji}</span>
            <div>
              <p style={{ fontWeight: 800, fontSize: '16px', marginBottom: '4px' }}>{m.title}</p>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.7 }}>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 各テーマのリンクカード（記事下） */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">各テーマを詳しく読む</h2>
      <div className="space-y-3 mb-10">
        {topics.map((t) => (
          <Link key={t.href} href={t.href} style={{ textDecoration: 'none', display: 'block' }}>
            <div
              className="flex items-center gap-4 rounded-xl px-5 py-4 transition hover:shadow-md"
              style={{ background: '#fff', border: '1px solid #e5e7eb' }}
            >
              <span style={{ fontSize: '28px' }}>{t.emoji}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 800, fontSize: '16px', color: '#1a1a1a' }}>{t.title}</p>
                <p style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>{t.subtitle}</p>
              </div>
              <span style={{ color: '#2E7D52', fontWeight: 700, fontSize: '18px' }}>→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">よくある質問</h2>
      <div className="mb-10">
        {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
      </div>

      {/* 下部CTA群 */}
      <div className="space-y-3 mb-6">
        <a href={NURSING_HOME_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
          <div className="rounded-xl px-5 py-4 flex items-center gap-3 transition hover:opacity-90" style={{ background: '#F57C00' }}>
            <span style={{ fontSize: '24px' }}>🏠</span>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#fff', fontWeight: 800, fontSize: '16px' }}>老人ホームを無料で比較・相談する</p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>施設の選び方・費用・空き状況を専門家に相談</p>
            </div>
            <span style={{ color: '#fff', fontWeight: 700 }}>→</span>
          </div>
        </a>
        <a href={REAL_ESTATE_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
          <div className="rounded-xl px-5 py-4 flex items-center gap-3 transition hover:opacity-90" style={{ background: '#2E7D52' }}>
            <span style={{ fontSize: '24px' }}>🏡</span>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#fff', fontWeight: 800, fontSize: '16px' }}>自宅の不動産査定を無料で依頼する</p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>売る・貸す・残すの判断材料に</p>
            </div>
            <span style={{ color: '#fff', fontWeight: 700 }}>→</span>
          </div>
        </a>
        <div className="grid grid-cols-2 gap-3">
          <a href={INSURANCE_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className="rounded-xl px-4 py-3 flex items-center gap-2 transition hover:opacity-90" style={{ background: '#6A1B9A' }}>
              <span style={{ fontSize: '18px' }}>📋</span>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '14px' }}>保険相談（無料）→</p>
            </div>
          </a>
          <a href={INHERITANCE_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className="rounded-xl px-4 py-3 flex items-center gap-2 transition hover:opacity-90" style={{ background: '#E65100' }}>
              <span style={{ fontSize: '18px' }}>📝</span>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '14px' }}>相続相談（無料）→</p>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
