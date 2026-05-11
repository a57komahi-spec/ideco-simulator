import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: '掲載停止・削除ポリシー｜やさしい老人ホームガイド',
  description: '当サイトの掲載情報の削除・修正・停止依頼への対応方針。受付窓口、24時間以内の対応SLA、自動生成コンテンツの開示、データ出典について明示しています。',
  alternates: { canonical: '/deletion-policy' },
  openGraph: {
    title: '掲載停止・削除ポリシー',
    description: '掲載情報の削除・修正依頼への対応方針と24時間SLA。',
    url: 'https://2ndhappiness.com/deletion-policy',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

export default function DeletionPolicyPage() {
  return (
    <>
      <ArticleJsonLd
        path="/deletion-policy"
        title="掲載停止・削除ポリシー"
        description="掲載情報の削除・修正依頼への対応方針と24時間SLA。"
      />
      <Breadcrumb items={[{ label: '掲載停止・削除ポリシー' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        掲載停止・削除ポリシー
      </h1>

      <p className="mb-6">
        「やさしい老人ホームガイド」（当サイト）における、掲載情報の削除・修正・停止依頼への対応方針を以下に定めます。
      </p>

      <h2 className="text-xl font-bold mt-10 mb-4 text-primary">1. 受付窓口</h2>
      <p className="mb-4">掲載停止・修正のご依頼は以下より承ります。</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>お問い合わせフォーム：<a href="/contact" style={{ color: '#1A5E9E', textDecoration: 'underline' }}>https://2ndhappiness.com/contact</a></li>
        <li>メールアドレス：contact@2ndhappiness.com</li>
      </ul>

      <h2 className="text-xl font-bold mt-10 mb-4 text-primary">2. 受付内容</h2>
      <p className="mb-4">以下のいずれにも対応します。</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>当サイトに掲載されている特定の施設情報の削除・修正</li>
        <li>当サイトに掲載されている特定の自治体ページ全体の削除</li>
        <li>データ提供元・出典に関する問い合わせ</li>
        <li>その他、掲載内容に関するご指摘</li>
      </ul>

      <h2 className="text-xl font-bold mt-10 mb-4 text-primary">3. SLA（サービス品質）</h2>
      <div className="rounded-xl p-5 mb-6" style={{ background: '#FFF3E0', border: '2px solid #F57C00' }}>
        <ul className="space-y-2">
          <li>掲載停止依頼の受付から <strong>24時間以内</strong> に対象ページの削除またはアクセス停止（HTTP 410 Gone）を実施します。</li>
          <li>修正依頼の場合、内容を確認のうえ可能な限り <strong>48時間以内</strong> に対応します。</li>
          <li>受付確認の自動返信を行い、対応完了時に再度ご連絡します。</li>
        </ul>
      </div>

      <h2 className="text-xl font-bold mt-10 mb-4 text-primary">4. 削除実施フロー</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li>依頼内容の確認・記録（依頼者情報・対象URL・依頼理由）</li>
        <li>対象ページの物理削除（GitHubリポジトリから該当ファイルを除去）</li>
        <li>ブロックリストへの追加 — 同一自治体は再生成されません</li>
        <li>Cloudflare Pagesの自動再ビルドにより、本番環境から該当URLが消える</li>
        <li>Google Search ConsoleでのURL削除リクエスト送信</li>
        <li>対応完了報告（依頼者へのメール）</li>
      </ol>

      <h2 className="text-xl font-bold mt-10 mb-4 text-primary">5. 自動生成コンテンツの開示</h2>
      <p className="mb-4">
        当サイトの一部ページ（<code>/ranking/&#123;自治体名&#125;/</code> 形式）は、厚生労働省「介護サービス情報公表システム」の公開データを基に<strong>自動的に集計・生成</strong>されています。
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>各ページ末尾に「このページは自動的に集計・生成されています」と明示</li>
        <li>HTMLの <code>&lt;meta name="generator"&gt;</code> で自動生成であることを宣言</li>
        <li>一次データの正確性は各施設・自治体への直接ご確認をお願いします</li>
      </ul>

      <h2 className="text-xl font-bold mt-10 mb-4 text-primary">6. データ出典</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>介護施設の所在地・定員・運営法人・サービス種別：厚生労働省「介護サービス情報公表システム」</li>
        <li>自治体の人口・高齢化率：総務省統計局「住民基本台帳に基づく人口」</li>
        <li>全国地方公共団体コード：総務省</li>
      </ul>
      <p className="mb-6">これら公的機関のオープンデータは、出典を明記したうえで利用しています。</p>

      <h2 className="text-xl font-bold mt-10 mb-4 text-primary">7. 著作権・出典に関する申し立て</h2>
      <p className="mb-4">掲載内容に著作権・知的財産権の侵害があると思われる場合、以下の情報を添えてご連絡ください。</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>申立者の連絡先（氏名・メールアドレス）</li>
        <li>著作権者であることの確認できる情報</li>
        <li>該当URLと侵害内容の具体的な記述</li>
        <li>削除を希望する旨の明記</li>
      </ul>
      <p className="mb-6">申立内容を確認のうえ、24時間以内に該当ページを削除します。</p>

      <h2 className="text-xl font-bold mt-10 mb-4 text-primary">8. 改定</h2>
      <p className="mb-6">本ポリシーは予告なく改定する場合があります。改定内容は本ページに掲載した時点から有効となります。</p>

      <p className="text-sm text-gray-500 mt-10">最終更新日：2026年5月10日</p>
    </>
  )
}
