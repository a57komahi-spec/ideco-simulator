'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AFFILIATE_ENABLED } from '@/lib/featureFlags'

const NURSING_HOME_URL = 'https://www.minnanokaigo.com/'
const FUNERAL_URL = 'https://px.a8.net/svt/ejp?a8mat=XXXXXX_FUNERAL'
const GARDEN_URL = 'https://px.a8.net/svt/ejp?a8mat=XXXXXX_GARDEN'

const categories = [
  {
    id: 'care',
    title: '介護・施設の準備',
    icon: '🏡',
    color: '#2E7D52',
    bg: '#E8F5E9',
    border: '#C8E6C9',
    items: [
      '要介護認定の手続きについて調べた',
      '地域包括支援センターの場所を確認した',
      '入居したい施設の種類（特養・有料老人ホームなど）を決めた',
      '施設の見学を1〜2件行った',
      '月額費用の目安を調べた',
      '入居資金の用意ができているか確認した',
      'かかりつけ医に相談した',
      '家族と入居の希望を話し合った',
      'ケアマネジャーに相談した（または予定している）',
      '入居申込書・必要書類を確認した',
    ],
    cta: {
      text: '全国51,000件の施設を無料で比較・資料請求する →',
      url: NURSING_HOME_URL,
      label: '※広告（みんなの介護）',
      bg: '#2E7D52',
    },
  },
  {
    id: 'funeral',
    title: '葬儀・お墓の準備',
    icon: '🕊️',
    color: '#5D4037',
    bg: '#EFEBE9',
    border: '#D7CCC8',
    items: [
      '自分の葬儀の希望（家族葬・一般葬など）を家族に伝えた',
      '葬儀社の資料を取り寄せた・比較した',
      '宗教・宗派・お布施の目安を確認した',
      '喪主・連絡してほしい人のリストを作った',
      '遺影にしたい写真を選んだ',
      'お墓の方針（継ぐ・樹木葬・散骨など）を決めた',
      'エンディングノートに葬儀の希望を記載した',
      '葬儀費用の積立・保険の確認をした',
    ],
    cta: {
      text: '今すぐ資料請求で葬儀費用5万円割引 →',
      url: FUNERAL_URL,
      label: '※広告（家族葬のこれから）',
      bg: '#5D4037',
    },
  },
  {
    id: 'asset',
    title: 'お金・資産の整理',
    icon: '💴',
    color: '#1565C0',
    bg: '#E3F2FD',
    border: '#BBDEFB',
    items: [
      '預貯金口座の一覧を作った',
      '株式・投資信託・保険の一覧を作った',
      '不動産（自宅・土地）の権利書の場所を確認した',
      '年金の受給見込み額を確認した（ねんきんネット）',
      '遺言書（公正証書遺言）の作成を検討した',
      '相続人・法定相続分を確認した',
      'NISA・iDeCoの活用を検討・開始した',
      '老後の月額生活費の目安を計算した',
      'FP（ファイナンシャルプランナー）に相談した（または予定）',
      'エンディングノートに資産情報を記載した',
    ],
    cta: {
      text: '老後・介護費用の不安を無料でFPに相談する（21歳以上・会社員・公務員の方向け） →',
      url: GARDEN_URL,
      label: '※広告（ガーデン）',
      bg: '#1565C0',
    },
  },
]

export default function ChecklistPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const toggle = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const getProgress = (catId: string, total: number) => {
    const done = Object.entries(checked).filter(([k, v]) => k.startsWith(catId + '_') && v).length
    return { done, total, pct: Math.round((done / total) * 100) }
  }

  const allTotal = categories.reduce((s, c) => s + c.items.length, 0)
  const allDone = Object.values(checked).filter(Boolean).length
  const allPct = Math.round((allDone / allTotal) * 100)

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
        {/* パンくず */}
        <nav style={{ fontSize: '13px', color: '#888', marginBottom: '16px' }}>
          <Link href="/" style={{ color: '#2E7D52', textDecoration: 'none' }}>トップ</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span>終活チェックリスト</span>
        </nav>

        <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#1A1A1A', lineHeight: 1.4, marginBottom: '8px' }}>
          終活チェックリスト28項目<br />
          <span style={{ fontSize: '18px', color: '#555', fontWeight: 600 }}>介護・葬儀・資産 ― 準備できているか確認しよう</span>
        </h1>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>チェックボックスをクリックすると進捗が記録されます（ページを閉じるとリセットされます）</p>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <Image
            src="/images/6.png"
            alt="終活チェックリストで準備状況を確認しているイメージ"
            width={600}
            height={400}
            style={{ width: '50%', height: 'auto', borderRadius: '12px' }}
            priority
          />
        </div>

        {/* 全体進捗 */}
        <div className="rounded-2xl p-5 mb-8" style={{ background: 'linear-gradient(135deg, #1B5E37, #2E7D52)', color: '#fff' }}>
          <div className="flex items-center justify-between mb-3">
            <p style={{ fontWeight: 700, fontSize: '16px' }}>全体の準備状況</p>
            <p style={{ fontWeight: 800, fontSize: '24px' }}>{allDone} / {allTotal}</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '999px', height: '12px', overflow: 'hidden' }}>
            <div style={{
              height: '100%', borderRadius: '999px',
              background: allPct === 100 ? '#FFD700' : '#A5D6A7',
              width: `${allPct}%`, transition: 'width 0.4s ease'
            }} />
          </div>
          <p style={{ marginTop: '6px', fontSize: '14px', opacity: 0.85 }}>
            {allPct === 100 ? '🎉 すべて完了！素晴らしいです' : `${allPct}% 完了`}
          </p>
        </div>

        {/* カテゴリ別チェックリスト */}
        {categories.map((cat) => {
          const prog = getProgress(cat.id, cat.items.length)
          return (
            <div key={cat.id} className="mb-10">
              {/* カテゴリヘッダー */}
              <div className="flex items-center gap-3 mb-3" style={{ borderBottom: `3px solid ${cat.color}`, paddingBottom: '8px' }}>
                <span style={{ fontSize: '28px' }}>{cat.icon}</span>
                <div className="flex-1">
                  <h2 style={{ fontSize: '20px', fontWeight: 800, color: cat.color, margin: 0 }}>{cat.title}</h2>
                </div>
                <div style={{
                  background: cat.bg, border: `1px solid ${cat.border}`,
                  borderRadius: '999px', padding: '4px 12px',
                  fontSize: '14px', fontWeight: 700, color: cat.color, flexShrink: 0
                }}>
                  {prog.done}/{prog.total}
                </div>
              </div>

              {/* プログレスバー */}
              <div style={{ background: '#eee', borderRadius: '999px', height: '8px', overflow: 'hidden', marginBottom: '16px' }}>
                <div style={{
                  height: '100%', borderRadius: '999px',
                  background: cat.color,
                  width: `${prog.pct}%`, transition: 'width 0.4s ease'
                }} />
              </div>

              {/* チェックリスト */}
              <div className="flex flex-col gap-2 mb-6">
                {cat.items.map((item, i) => {
                  const key = `${cat.id}_${i}`
                  const done = !!checked[key]
                  return (
                    <button
                      key={key}
                      onClick={() => toggle(key)}
                      className="flex items-center gap-3 text-left rounded-xl px-4 py-3 w-full transition"
                      style={{
                        background: done ? cat.bg : '#fff',
                        border: `1px solid ${done ? cat.color : '#ddd'}`,
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{
                        width: '24px', height: '24px', flexShrink: 0, borderRadius: '6px',
                        border: `2px solid ${done ? cat.color : '#ccc'}`,
                        background: done ? cat.color : '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s ease',
                      }}>
                        {done && <span style={{ color: '#fff', fontSize: '14px', fontWeight: 800 }}>✓</span>}
                      </div>
                      <span style={{
                        fontSize: '14px',
                        color: done ? cat.color : '#333',
                        fontWeight: done ? 600 : 400,
                        textDecoration: done ? 'line-through' : 'none',
                        lineHeight: 1.5,
                      }}>
                        {item}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* カテゴリ別CTA */}
              {AFFILIATE_ENABLED && (
                <div className="rounded-xl p-4" style={{ background: cat.bg, border: `1px solid ${cat.border}` }}>
                  <p style={{ fontSize: '13px', color: cat.color, fontWeight: 700, marginBottom: '8px' }}>
                    準備をもっとスムーズに進めたい方へ
                  </p>
                  <div className="flex flex-col items-center gap-1">
                    <a
                      href={cat.cta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: cat.cta.bg, color: '#fff',
                        fontWeight: 700, fontSize: '14px', borderRadius: '10px',
                        padding: '12px 20px', textDecoration: 'none',
                        boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
                        width: '100%', maxWidth: '480px', textAlign: 'center',
                      }}
                    >
                      {cat.cta.text}
                    </a>
                    <span style={{ fontSize: '11px', color: '#999' }}>{cat.cta.label}</span>
                  </div>
                </div>
              )}
            </div>
          )
        })}

        {/* エンディングノートについて */}
        <div className="rounded-xl p-5 mb-8" style={{ background: '#FFF8E1', border: '1px solid #FFB300' }}>
          <p style={{ fontWeight: 700, color: '#E65100', fontSize: '16px', marginBottom: '8px' }}>📓 エンディングノートをまず書こう</p>
          <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.9 }}>
            このチェックリストの項目を整理するために、<strong>エンディングノート</strong>が役立ちます。
            100円ショップや文具店でも購入でき、自分の希望・連絡先・資産情報を一冊にまとめられます。
            完成後は家族の見やすい場所に保管しましょう。
          </p>
        </div>

        {/* 関連ページ */}
        <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1A1A1A', borderLeft: '4px solid #2E7D52', paddingLeft: '12px', margin: '32px 0 16px' }}>
          関連ページ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {[
            { href: '/prepare', label: '入居前の準備4つのこと', icon: '📋', color: '#2E7D52', bg: '#E8F5E9' },
            { href: '/funeral', label: '家族葬・葬儀の選び方', icon: '🕊️', color: '#5D4037', bg: '#EFEBE9' },
            { href: '/asset', label: '老後の資産形成ガイド', icon: '💴', color: '#1565C0', bg: '#E3F2FD' },
            { href: '/prepare/inheritance', label: '相続の準備', icon: '📝', color: '#6A1B9A', bg: '#F3E5F5' },
          ].map((link) => (
            <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
              <div className="rounded-xl p-4 flex items-center gap-3 transition hover:opacity-90" style={{ background: link.bg, border: `1px solid ${link.color}30` }}>
                <span style={{ fontSize: '24px' }}>{link.icon}</span>
                <p style={{ fontWeight: 700, color: link.color, fontSize: '14px' }}>{link.label}</p>
              </div>
            </Link>
          ))}
        </div>
    </div>
  )
}
