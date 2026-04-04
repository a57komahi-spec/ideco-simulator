'use client'

import { useState } from 'react'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

const REAL_ESTATE_URL  = 'https://www.home4u.jp/'
const MOVING_URL       = 'https://www.suumo.jp/'
const NURSING_HOME_URL = 'https://www.minnanokaigo.com/'

const summaryItems = [
  '自宅をどうするかは<mark class="highlight">施設費用の計画</mark>に直結する大問題です',
  '売る・貸す・残すの<mark class="highlight">3択</mark>をメリット・デメリットで比較しましょう',
  '名義・ローン・相続問題が絡む場合は<mark class="highlight">早めの専門家相談</mark>が必須です',
  '不動産査定は<mark class="highlight">無料</mark>で申し込めます',
]

const faqs = [
  { q: '老人ホーム入居後も自宅の固定資産税はかかりますか？', a: 'はい、かかります。空き家のままにすると固定資産税・管理費・修繕費がかかり続けます。早めに売却か賃貸の判断をしましょう。' },
  { q: '自宅に住宅ローンが残っていても売れますか？', a: '売却代金でローンを完済できれば売却可能です。残債が売却価格を上回る「オーバーローン」の場合は、金融機関と相談が必要です。' },
  { q: '自宅の売却を急かされた場合はどうしますか？', a: '急いで売ると相場より安くなることがあります。複数の不動産会社から査定を取り、市場価格を把握してから決めましょう。' },
  { q: '名義が親のままで子どもが売却できますか？', a: '基本的に名義人本人の同意が必要です。認知症の場合は成年後見制度が必要になることもあるため、早めの準備が重要です。' },
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

export default function RealEstatePage() {
  return (
    <>
      <Breadcrumb items={[
        { label: '入居前の準備', href: '/prepare' },
        { label: '自宅・不動産の整理' },
      ]} />

      {/* 戻りリンク */}
      <Link href="/prepare" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#2E7D52', fontSize: '14px', fontWeight: 700, textDecoration: 'none', marginBottom: '16px' }}>
        ← 入居前の準備まとめに戻る
      </Link>

      <div className="rounded-2xl mb-8 p-7" style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #388E3C 100%)' }}>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', letterSpacing: '0.1em', marginBottom: '8px' }}>🏠 REAL ESTATE</p>
        <h1 style={{ color: '#fff', fontSize: '24px', fontWeight: 900, lineHeight: 1.45, marginBottom: '12px' }}>
          老人ホーム入居前の<br />自宅・不動産の整理ガイド
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', lineHeight: 1.75 }}>
          「家をどうするか」は、老人ホームの費用計画に直結する大きな問題です。
          売る・貸す・残すの3択を比較し、名義や相続などの注意点も含めて解説します。
        </p>
      </div>

      <SummaryBox items={summaryItems} />

      {/* 3択比較表 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        自宅は「売る・貸す・残す」どれが正解？
      </h2>
      <p className="text-base mb-5">自宅の扱いには大きく3つの選択肢があります。それぞれのメリット・デメリットを比較しましょう。</p>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          {
            icon: '💴',
            title: '売る',
            merit: ['まとまった資金が手に入る', '維持費・固定資産税がなくなる', '管理の手間がなくなる'],
            demerit: ['売却に時間がかかる場合がある', '売値は市況に左右される', '相続問題が出ることがある'],
            best: 'まとまった施設費用が必要な方',
            color: '#2E7D52',
            bg: '#E8F5E9',
            border: '#A5D6A7',
          },
          {
            icon: '🔑',
            title: '貸す',
            merit: ['毎月の家賃収入が得られる', '将来的に戻ることも可能', '資産を保持できる'],
            demerit: ['管理・修繕費が発生する', '入居者トラブルのリスク', '空室期間は収入ゼロ'],
            best: '自宅に戻る可能性がある方',
            color: '#1565C0',
            bg: '#E3F2FD',
            border: '#90CAF9',
          },
          {
            icon: '🏡',
            title: '残す',
            merit: ['家族が使える', '相続財産として残せる', '判断を先送りできる'],
            demerit: ['維持費・税金がかかり続ける', '空き家は劣化が早まる', '将来的な売却が難しくなることも'],
            best: '家族が使う予定がある方',
            color: '#E65100',
            bg: '#FFF3E0',
            border: '#FFCC80',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${item.border}`, background: item.bg }}>
            <div className="px-4 py-3 flex items-center gap-2" style={{ background: item.color }}>
              <span style={{ fontSize: '20px' }}>{item.icon}</span>
              <span style={{ color: '#fff', fontWeight: 800, fontSize: '18px' }}>{item.title}</span>
            </div>
            <div className="px-4 py-4">
              <p style={{ fontSize: '12px', fontWeight: 700, color: item.color, marginBottom: '6px' }}>✅ メリット</p>
              <ul className="space-y-1 mb-4">
                {item.merit.map(m => <li key={m} style={{ fontSize: '13px', color: '#333' }}>・{m}</li>)}
              </ul>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#C62828', marginBottom: '6px' }}>⚠ デメリット</p>
              <ul className="space-y-1 mb-4">
                {item.demerit.map(d => <li key={d} style={{ fontSize: '13px', color: '#555' }}>・{d}</li>)}
              </ul>
              <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.7)' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, color: item.color }}>👤 こんな方に：{item.best}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 不動産査定CTA */}
      <a href={REAL_ESTATE_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', marginBottom: '32px' }}>
        <div className="rounded-2xl px-6 py-5 flex items-center gap-4 transition hover:opacity-90" style={{ background: 'linear-gradient(135deg, #1B5E20, #2E7D52)' }}>
          <span style={{ fontSize: '32px' }}>🏡</span>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#fff', fontWeight: 800, fontSize: '17px', marginBottom: '4px' }}>まず自宅の価格を無料で調べる</p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>複数の不動産会社に一括査定依頼ができます（無料・60秒）</p>
          </div>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: '18px' }}>→</span>
        </div>
      </a>

      {/* 売却前の確認チェックリスト */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
        自宅を売却する前に確認すること
      </h2>
      <div className="rounded-2xl overflow-hidden mb-8" style={{ border: '1px solid #e5e7eb' }}>
        {[
          { icon: '📄', item: '名義の確認', detail: '単独名義か共有名義かを確認。共有の場合は全員の同意が必要', important: true },
          { icon: '💳', item: '住宅ローンの残債', detail: '売却価格でローンを完済できるか試算する', important: true },
          { icon: '👨‍👩‍👧', item: '家族全員の合意', detail: '売却後に「知らなかった」というトラブルを防ぐため事前共有を', important: true },
          { icon: '📦', item: '家財・不用品の整理', detail: '売却前の片付けには想像以上に時間がかかります', important: false },
          { icon: '🧾', item: '確定申告の準備', detail: '売却益が出た場合は翌年の確定申告が必要です', important: false },
          { icon: '🏛', item: '相続との関係確認', detail: '相続税の計算に影響することがあります。専門家への相談を推奨', important: true },
        ].map((row, i) => (
          <div key={i} className="flex items-start gap-3 px-5 py-4" style={{ background: i % 2 === 0 ? '#fff' : '#FAFAFA', borderTop: i > 0 ? '1px solid #e5e7eb' : 'none' }}>
            <span style={{ fontSize: '20px', flexShrink: 0, marginTop: '1px' }}>{row.icon}</span>
            <div style={{ flex: 1 }}>
              <div className="flex items-center gap-2 mb-1">
                <span style={{ fontWeight: 700, fontSize: '15px' }}>{row.item}</span>
                {row.important && (
                  <span style={{ background: '#C62828', color: '#fff', fontSize: '10px', fontWeight: 800, padding: '1px 7px', borderRadius: '20px' }}>重要</span>
                )}
              </div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.65 }}>{row.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* よくある失敗 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">不動産整理でよくある失敗</h2>
      <div className="space-y-3 mb-8">
        {[
          { emoji: '😰', text: '「まだ大丈夫」と先送りにして、売るに売れない状態になった' },
          { emoji: '💸', text: '1社にしか査定を依頼せず、相場より大幅に安く売ってしまった' },
          { emoji: '⚠️', text: '家族に黙って話を進め、後から相続問題に発展した' },
          { emoji: '😓', text: '認知症が進んで名義人本人の同意が取れなくなった' },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 rounded-xl p-4" style={{ background: '#FFF3E0', border: '1px solid #FFCC80' }}>
            <span style={{ fontSize: '24px', flexShrink: 0 }}>{item.emoji}</span>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#5D4037' }}>{item.text}</p>
          </div>
        ))}
      </div>

      <CTABox compact />

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">よくある質問</h2>
      <div className="mb-10">
        {faqs.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
      </div>

      {/* 記事下CTA */}
      <div className="space-y-3 mb-6">
        <a href={REAL_ESTATE_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
          <div className="rounded-xl px-5 py-4 flex items-center gap-3 transition hover:opacity-90" style={{ background: '#2E7D52' }}>
            <span style={{ fontSize: '22px' }}>🏠</span>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#fff', fontWeight: 800, fontSize: '15px' }}>無料で不動産査定を依頼する →</p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>複数社に一括依頼・比較できます</p>
            </div>
          </div>
        </a>
        <div className="grid grid-cols-2 gap-3">
          <a href={MOVING_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className="rounded-xl px-4 py-3 flex items-center gap-2 transition hover:opacity-90" style={{ background: '#1565C0' }}>
              <span style={{ fontSize: '18px' }}>📦</span>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '13px' }}>引越し・不用品整理 →</p>
            </div>
          </a>
          <Link href="/cost" style={{ textDecoration: 'none' }}>
            <div className="rounded-xl px-4 py-3 flex items-center gap-2 transition hover:shadow-md" style={{ background: '#F9FAFB', border: '1px solid #e5e7eb' }}>
              <span style={{ fontSize: '18px' }}>💰</span>
              <p style={{ fontWeight: 700, fontSize: '13px', color: '#2E7D52' }}>施設費用の相場を見る →</p>
            </div>
          </Link>
        </div>
      </div>

      {/* 関連記事 */}
      <h2 className="text-lg font-bold mb-3 text-primary">他のテーマも読む</h2>
      <div className="grid grid-cols-2 gap-3">
        {[
          { href: '/prepare/consultation', label: '相談先の選び方', emoji: '💬' },
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
