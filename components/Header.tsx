'use client'

import Link from 'next/link'
import { useState } from 'react'

const otherArticles: { href: string; label: string }[] = [
  { href: '/simulation', label: '費用20年シミュレーション' },
  { href: '/care-level', label: '要介護度の違いと認定手続き' },
  { href: '/prepare', label: '入居前の準備4つのこと' },
  { href: '/prepare/real-estate', label: '└ 自宅・不動産の整理' },
  { href: '/prepare/consultation', label: '└ 相談先の選び方' },
  { href: '/prepare/insurance', label: '└ 保険の見直し' },
  { href: '/prepare/inheritance', label: '└ 相続の準備' },
  { href: '/ranking', label: '検索サービス比較ランキング' },
  { href: '/funeral', label: '家族葬・葬儀の選び方' },
  { href: '/asset', label: '老後の資産形成（NISA・iDeCo）' },
  { href: '/checklist', label: '終活チェックリスト28項目' },
]

const navItems: { href: string; label: string; highlight?: boolean }[] = [
  { href: '/reason', label: 'まず読んでほしい', highlight: true },
  { href: '/types', label: '施設の種類' },
  { href: '/cost', label: '費用・料金' },
  { href: '/how-to-choose', label: '選び方' },
  { href: '/home-care', label: '在宅介護' },
  { href: '/process', label: '入居の流れ' },
  { href: '/faq', label: 'FAQ' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{ background: 'linear-gradient(135deg, #1B5E37 0%, #2E7D52 60%, #3D9966 100%)', boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>
      {/* 最上部バー：こんな方向けリンク */}
      <div style={{ background: '#F57C00' }}>
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/for-you"
            style={{ textDecoration: 'none' }}
            className="flex items-center justify-start gap-2 py-3 transition hover:opacity-90"
          >
            <span style={{ color: '#fff', fontSize: '16px' }}>👋</span>
            <span style={{ color: '#fff', fontSize: '16px', fontWeight: 700, letterSpacing: '0.04em' }}>
              はじめての方へ　―　このサイトはこんな方向け
            </span>
            <span
              style={{
                color: '#fff',
                fontSize: '14px',
                fontWeight: 700,
                border: '1px solid rgba(255,255,255,0.6)',
                borderRadius: '20px',
                padding: '2px 10px',
              }}
            >
              くわしく見る →
            </span>
          </Link>
        </div>
      </div>

      {/* 上部：ロゴ＋ハンバーガー */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-2">
        {/* ロゴ */}
        <Link
          href="/"
          style={{ textDecoration: 'none', flexShrink: 0 }}
          className="flex items-center gap-2 group"
        >
          <span
            className="flex items-center justify-center rounded-lg text-xl"
            style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', flexShrink: 0 }}
            aria-hidden="true"
          >
            🏡
          </span>
          <span className="flex flex-col leading-tight" style={{ whiteSpace: 'nowrap' }}>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '10px', letterSpacing: '0.1em' }}>
              NURSING HOME GUIDE
            </span>
            <span style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700, letterSpacing: '0.02em' }}>
              やさしい老人ホームガイド
            </span>
          </span>
        </Link>

        {/* PC用ナビ */}
        <nav className="hidden md:flex items-center gap-0.5" style={{ flexShrink: 1, minWidth: 0 }}>
          {navItems.map((item) => (
            item.highlight ? (
              <Link
                key={item.href}
                href={item.href}
                style={{ textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
                className="transition hover:opacity-90"
              >
                <span style={{
                  background: 'rgba(255,255,255,0.18)',
                  color: '#FFF176',
                  fontSize: '13px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,241,118,0.4)',
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                }}>
                  ✦ {item.label}
                </span>
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                style={{ textDecoration: 'none', whiteSpace: 'nowrap' }}
                className="group relative px-2 py-2 rounded-lg transition-all duration-200 hover:bg-white/10"
              >
                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 500 }}>
                  {item.label}
                </span>
                <span
                  className="absolute bottom-1 left-2 right-2 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                  style={{ background: 'rgba(255,255,255,0.6)' }}
                />
              </Link>
            )
          ))}
          {/* その他記事ドロップダウン（PC） */}
          <div className="relative group" style={{ flexShrink: 0 }}>
            <button
              className="px-2 py-2 rounded-lg transition-all duration-200 hover:bg-white/10 flex items-center gap-1"
              style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              その他記事 ▾
            </button>
            <div
              className="absolute left-0 top-full hidden group-hover:block z-50"
              style={{ minWidth: '200px', paddingTop: '4px' }}
            >
              <div style={{ background: '#fff', borderRadius: '10px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', overflow: 'hidden' }}>
                {otherArticles.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    style={{ textDecoration: 'none', display: 'block', padding: '10px 16px', color: '#333', fontSize: '13px', borderBottom: '1px solid #f0f0f0' }}
                    className="hover:bg-gray-50 transition"
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="https://www.minnanokaigo.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', flexShrink: 0 }}
            className="ml-2"
          >
            <span
              style={{
                background: '#F57C00',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 700,
                padding: '7px 13px',
                borderRadius: '8px',
                display: 'inline-block',
                boxShadow: '0 2px 6px rgba(245,124,0,0.4)',
                whiteSpace: 'nowrap',
              }}
            >
              無料相談 →
            </span>
          </Link>
        </nav>

        {/* ハンバーガーボタン（SP） */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
          style={{ minWidth: '44px', minHeight: '44px' }}
        >
          <span className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* SP用ドロワーメニュー */}
      {menuOpen && (
        <nav
          className="md:hidden"
          style={{ background: 'rgba(0,0,0,0.15)', backdropFilter: 'blur(4px)', borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <ul className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition"
                  style={{
                    textDecoration: 'none',
                    color: item.highlight ? '#FFF176' : '#fff',
                    fontSize: '17px',
                    fontWeight: item.highlight ? 700 : 400,
                  }}
                >
                  {item.highlight ? `✦ ${item.label}` : item.label}
                </Link>
              </li>
            ))}
            <li>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontWeight: 700, padding: '8px 16px 2px', letterSpacing: '0.08em' }}>その他記事</p>
              {otherArticles.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-8 py-2 rounded-xl hover:bg-white/10 transition"
                  style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}
                >
                  └ {a.label}
                </Link>
              ))}
            </li>
            <li className="mt-2">
              <Link
                href="/how-to-choose"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white transition hover:opacity-90"
                style={{ textDecoration: 'none', background: '#F57C00', fontSize: '18px', boxShadow: '0 2px 8px rgba(245,124,0,0.4)' }}
              >
                📋 無料で施設を探す →
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
