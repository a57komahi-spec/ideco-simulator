import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'やさしい老人ホームガイドのプライバシーポリシーです。',
}

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'プライバシーポリシー' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        プライバシーポリシー
      </h1>
      <div className="space-y-8 text-base">
        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">個人情報の取り扱いについて</h2>
          <p>当サイト「やさしい老人ホームガイド」（以下、「当サイト」）は、ユーザーの個人情報の取り扱いについて以下のとおり定めます。</p>
          <p className="mt-3">当サイトでは、お問い合わせフォームなどを通じてお名前・メールアドレスなどの個人情報をお預かりする場合があります。取得した個人情報は、お問い合わせへの回答にのみ使用し、第三者への提供は行いません。</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">Cookieの使用について</h2>
          <p>当サイトでは、ユーザーの利便性向上のためCookieを使用しています。CookieはWebブラウザに保存される小さなテキストファイルです。ブラウザの設定によりCookieを無効にすることができますが、一部の機能が使用できなくなる場合があります。</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">アクセス解析ツールについて</h2>
          <p>当サイトでは、サイトの改善を目的としてGoogleアナリティクスを利用しています。Googleアナリティクスはデータ収集のためにCookieを使用します。このデータは匿名で収集されており、個人を特定するものではありません。</p>
          <p className="mt-3">Googleアナリティクスのデータ収集を拒否する場合は、Googleアナリティクス オプトアウト アドオンをご利用ください。</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">アフィリエイト広告について</h2>
          <p>当サイトは、第三者配信のアフィリエイト広告を掲載しています。広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">お問い合わせ先</h2>
          <p>個人情報の取り扱いに関するお問い合わせは、<a href="/contact">お問い合わせフォーム</a>よりご連絡ください。</p>
        </section>

        <p className="text-sm text-gray-500">制定日：2024年1月1日</p>
      </div>
    </>
  )
}
