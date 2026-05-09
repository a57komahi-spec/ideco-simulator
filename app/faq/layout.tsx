import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '老人ホームのよくある質問FAQ｜入居条件・費用・面会まで',
  description: '老人ホーム選びでよくある質問FAQ。入居条件・費用・面会・介護保険の使い方・施設タイプの違いまで、家族目線でわかりやすく回答しています。',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: '老人ホームのよくある質問FAQ',
    description: '入居条件・費用・面会・介護保険の使い方など、家族目線で回答するFAQ集。',
    url: 'https://2ndhappiness.com/faq',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
