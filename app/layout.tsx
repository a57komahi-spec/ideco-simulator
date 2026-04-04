import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'やさしい老人ホームガイド',
    template: '%s｜やさしい老人ホームガイド',
  },
  description: '老人ホーム選びで迷っているご家族へ。種類・費用・選び方を専門用語なしでわかりやすく解説します。',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="font-sans text-text-main bg-bg min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
