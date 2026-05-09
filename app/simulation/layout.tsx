import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '老人ホーム費用シミュレーター｜タイプ別の月額試算',
  description: '老人ホームの費用シミュレーター。特養・サ高住・有料老人ホームなどタイプ別に月額・初期費用を試算できます。介護保険の自己負担割合・地域・要介護度を加味した目安が即わかります。',
  alternates: { canonical: '/simulation' },
  openGraph: {
    title: '老人ホーム費用シミュレーター｜タイプ別の月額試算',
    description: 'タイプ別に月額・初期費用を試算できる老人ホーム費用シミュレーター。',
    url: 'https://2ndhappiness.com/simulation',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
