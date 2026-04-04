import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'やさしい老人ホームガイドへのお問い合わせはこちらから。',
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'お問い合わせ' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        お問い合わせ
      </h1>
      <p className="text-base mb-6">
        当サイトへのお問い合わせ・ご意見・ご要望は、以下のフォームよりお送りください。
        お返事まで2〜3営業日いただく場合があります。
      </p>
      <div className="rounded-xl p-8 bg-white border-2 border-primary text-center">
        <p className="text-base mb-6">
          下のボタンをタップすると、お問い合わせフォームが開きます。
        </p>
        <a
          href="https://forms.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-center font-bold text-white"
          style={{
            backgroundColor: '#2E7D52',
            fontSize: '20px',
            width: '100%',
            maxWidth: '400px',
            minHeight: '60px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            color: 'white',
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          📩 お問い合わせフォームを開く
        </a>
        <p className="text-sm text-gray-500 mt-4">
          ※ Googleフォームが開きます（無料・登録不要）
        </p>
      </div>
    </>
  )
}
