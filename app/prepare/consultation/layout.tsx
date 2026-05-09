import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '親の老後の専門家相談｜誰に何を相談すべきか',
  description: '親の老後について、誰に何を相談すべきかを整理。FP・税理士・司法書士・ケアマネ・地域包括支援センターなど、相談先別の活用方法を解説します。',
  alternates: { canonical: '/prepare/consultation' },
  openGraph: {
    title: '親の老後の専門家相談｜誰に何を相談すべきか',
    description: 'FP・税理士・司法書士・ケアマネなど、親の老後の相談先別の活用方法。',
    url: 'https://2ndhappiness.com/prepare/consultation',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
