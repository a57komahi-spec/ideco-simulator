import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '親の不動産・実家どうする？｜売却・賃貸・空き家対策',
  description: '親が施設に入った後の実家、売却・賃貸・そのまま残すの3つの選択肢を整理。空き家のままだと税負担が増える理由と、家族で揉めない決め方を解説します。',
  alternates: { canonical: '/prepare/real-estate' },
  openGraph: {
    title: '親の不動産・実家どうする？｜売却・賃貸・空き家対策',
    description: '実家の3つの選択肢（売却・賃貸・空き家）と家族で揉めない決め方。',
    url: 'https://2ndhappiness.com/prepare/real-estate',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
