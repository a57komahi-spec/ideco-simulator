import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '親の保険見直し｜介護・医療保険の選び方',
  description: '親の保険、見直すべきタイミングと判断軸。介護保険・医療保険・終身保険・がん保険まで、シニア世代に必要な保障とそうでない保障を家族目線で整理しました。',
  alternates: { canonical: '/prepare/insurance' },
  openGraph: {
    title: '親の保険見直し｜介護・医療保険の選び方',
    description: 'シニア世代の保険、本当に必要な保障とそうでない保障を判断する基準。',
    url: 'https://2ndhappiness.com/prepare/insurance',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
