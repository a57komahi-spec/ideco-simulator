import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '親の相続準備｜手続きと税金の基礎',
  description: '親の相続準備、何から始めればいい？遺言・相続税・名義変更・実家の不動産など、家族で揉めないための手続きと税金の基礎を整理しました。',
  alternates: { canonical: '/prepare/inheritance' },
  openGraph: {
    title: '親の相続準備｜手続きと税金の基礎',
    description: '遺言・相続税・名義変更・実家の不動産など、相続の基本を家族目線で解説。',
    url: 'https://2ndhappiness.com/prepare/inheritance',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
