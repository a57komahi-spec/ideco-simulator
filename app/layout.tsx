import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://2ndhappiness.com'),
  title: {
    default: 'やさしい老人ホームガイド',
    template: '%s｜やさしい老人ホームガイド',
  },
  description: '老人ホーム選びで迷っているご家族へ。種類・費用・選び方を専門用語なしでわかりやすく解説します。',
  viewport: 'width=device-width, initial-scale=1',
  verification: {
    google: 'YM1ETgI9LOU3Sijd8kEyHUJ8tbrTpLUn5NaCWdRjpho',
  },
  openGraph: {
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'website',
    url: 'https://2ndhappiness.com',
    images: [
      {
        url: 'https://2ndhappiness.com/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'やさしい老人ホームガイド',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://2ndhappiness.com/images/hero.jpg'],
  },
  alternates: {
    canonical: 'https://2ndhappiness.com',
  },
}

const siteLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'やさしい老人ホームガイド',
    url: 'https://2ndhappiness.com',
    description: '老人ホームの基礎知識・費用・選び方を専門用語なしで解説する情報サイト',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'やさしい老人ホームガイド編集部',
    url: 'https://2ndhappiness.com',
    logo: 'https://2ndhappiness.com/images/hero.jpg',
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* 旧 pages.dev ドメインから独自ドメインへの即時リダイレクト
            （Cloudflare Pages の pages.dev は直接 301 設定できないためクライアントサイドで対応） */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(typeof window!=='undefined'&&window.location.hostname==='2nd-lifesearch.pages.dev'){window.location.replace('https://2ndhappiness.com'+window.location.pathname+window.location.search+window.location.hash);}})();`,
          }}
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N6JYJEN4QR" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N6JYJEN4QR');
            `,
          }}
        />
      </head>
      <body className="font-sans text-text-main bg-bg min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }}
        />
        <Header />
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
