import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '老後の資産形成・FP無料相談｜介護費用に備える方法',
  description: '老後・介護費用の不安をプロのFPに無料相談する方法。介護費用の試算・保険の見直し・家計の総点検まで、老後資金の準備に必要な相談窓口を解説します。',
  alternates: { canonical: '/asset' },
  openGraph: {
    title: '老後の資産形成・FP無料相談｜介護費用に備える方法',
    description: '老後・介護費用の不安をプロのFPに無料相談する方法と、介護費用への備え方を解説します。',
    url: 'https://2ndhappiness.com/asset',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
