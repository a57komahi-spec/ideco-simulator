import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '親の老後準備｜何から始めればいいか',
  description: '親の老後準備、何から始めればいい？相続・保険・不動産・専門家相談など、家族で進める「親の暮らしの整え方」をテーマ別に解説します。',
  alternates: { canonical: '/prepare' },
  openGraph: {
    title: '親の老後準備｜何から始めればいいか',
    description: '相続・保険・不動産・専門家相談など、親の老後を支えるテーマ別ガイド。',
    url: 'https://2ndhappiness.com/prepare',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
