import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'プライバシーポリシー｜やさしい老人ホームガイド',
  description: 'やさしい老人ホームガイドのプライバシーポリシーです。個人情報の取り扱い・Cookie・アフィリエイト広告について説明します。',
}

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'プライバシーポリシー' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        プライバシーポリシー
      </h1>
      <div className="space-y-10 text-base" style={{ lineHeight: 1.9 }}>

        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">はじめに</h2>
          <p>
            「やさしい老人ホームガイド」（以下「当サイト」）は、ユーザーの個人情報保護を重要な責務と考え、
            以下のプライバシーポリシーに従って個人情報を適切に取り扱います。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">個人情報の収集と利用目的</h2>
          <p>当サイトでは、お問い合わせフォームを通じて以下の情報をお預かりする場合があります。</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>お名前（ニックネーム可）</li>
            <li>メールアドレス</li>
            <li>お問い合わせ内容</li>
          </ul>
          <p className="mt-3">
            取得した個人情報は、お問い合わせへの回答・ご連絡の目的のみに使用します。
            ご本人の同意なく第三者に提供することはありません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">Cookieの使用について</h2>
          <p>
            当サイトでは、ユーザー体験の向上・アクセス解析・広告配信のためにCookie（クッキー）を使用しています。
            Cookieはブラウザに保存される小さなテキストファイルです。
          </p>
          <p className="mt-3">
            ブラウザの設定からCookieを無効にすることができますが、その場合、当サイトの一部機能が正常に動作しない場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">アクセス解析ツールについて</h2>
          <p>
            当サイトでは、Googleが提供するアクセス解析ツール「Googleアナリティクス」を利用しています。
            Googleアナリティクスはデータ収集のためにCookieを使用します。
            このデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <p className="mt-3">
            Googleアナリティクスのデータ収集を無効にしたい場合は、
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              Googleアナリティクス オプトアウト アドオン
            </a>
            をご利用ください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">アフィリエイト広告について</h2>
          <p>
            当サイトは、以下のアフィリエイトサービスプロバイダー（ASP）を通じた広告プログラムに参加しています。
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>A8.net（株式会社ファンコミュニケーションズ）</li>
            <li>バリューコマース株式会社</li>
            <li>その他ASPを通じた提携広告主（みんなの介護、ガーデン、家族葬のこれから 等）</li>
          </ul>
          <p className="mt-3">
            これらのプログラムでは、広告配信のためにCookieが使用される場合があります。
            ユーザーが当サイト経由で広告リンクをクリック・申し込みを行った場合、
            当サイトに報酬が発生することがあります。
          </p>
          <p className="mt-3">
            広告の掲載はコンテンツの内容・評価に影響を与えません。
            広告リンクには「※広告」と明示しています。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">外部サービスの利用について</h2>
          <p>当サイトは以下の外部サービスを利用しており、それぞれのプライバシーポリシーが適用されます。</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Google Analytics（Googleのプライバシーポリシーに準拠）</li>
            <li>各アフィリエイト広告主のサービス</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">個人情報の開示・訂正・削除について</h2>
          <p>
            ご自身の個人情報の開示・訂正・削除をご希望の場合は、
            <a href="/contact" style={{ color: '#1A5E9E' }}>お問い合わせフォーム</a>よりご連絡ください。
            ご本人確認のうえ、合理的な範囲で対応いたします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">プライバシーポリシーの変更</h2>
          <p>
            本ポリシーは、法令の改正や当サイトの運営方針の変更に伴い、予告なく改定する場合があります。
            変更後のポリシーは、当ページに掲載した時点より効力を生じます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">お問い合わせ先</h2>
          <p>
            個人情報の取り扱いに関するお問い合わせは、
            <a href="/contact" style={{ color: '#1A5E9E' }}>お問い合わせページ</a>よりご連絡ください。
          </p>
        </section>

        <div className="rounded-xl px-4 py-3" style={{ backgroundColor: '#F3F4F6', border: '1px solid #e5e7eb' }}>
          <p className="text-sm text-gray-500">制定日：2024年1月1日　／　最終改定：2026年4月9日</p>
        </div>
      </div>
    </>
  )
}
