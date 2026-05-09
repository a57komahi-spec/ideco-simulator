import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '老人ホーム入居前 準備チェックリスト｜全カテゴリ完全版',
  description: '老人ホーム入居前に確認すべき準備項目をチェックリスト形式で整理。介護・施設・お金・書類・実家の片付けなど、家族で共有しながら進められる完全版チェックリストです。',
  alternates: { canonical: '/checklist' },
  openGraph: {
    title: '老人ホーム入居前 準備チェックリスト｜全カテゴリ完全版',
    description: '入居前の準備項目をカテゴリ別に整理した完全チェックリスト。',
    url: 'https://2ndhappiness.com/checklist',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
