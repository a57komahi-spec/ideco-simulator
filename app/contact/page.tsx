import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'お問い合わせ｜やさしい老人ホームガイド',
  description: 'やさしい老人ホームガイドへのお問い合わせはこちらから。記事の内容に関するご質問・誤りのご指摘・ご意見をお受けしています。',
}

// ★ Googleフォームを作成したら、下記URLを差し替えてください
// 形式: https://docs.google.com/forms/d/e/【フォームID】/viewform
const GOOGLE_FORM_URL = 'https://forms.google.com/' // ← 実際のGoogleフォームURLに変更してください

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'お問い合わせ' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        お問い合わせ
      </h1>

      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base">
          当サイトへのお問い合わせ・記事内容の誤りのご指摘・ご意見・ご要望は、以下のフォームよりお送りください。
          確認後、2〜5営業日以内にご返信します。
        </p>
      </div>

      {/* 受付内容 */}
      <div className="space-y-2 mb-8">
        {[
          '記事の内容に関するご質問・ご意見',
          '掲載情報の誤りや古い情報のご指摘',
          'サイトの不具合・表示の問題',
          'その他ご要望',
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
            <span style={{ color: '#2E7D52', fontWeight: 700 }}>✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* フォームボタン */}
      <div className="rounded-2xl p-8 bg-white mb-6" style={{ border: '2px solid #2E7D52', textAlign: 'center' }}>
        <p className="text-base mb-6 text-gray-600">
          下のボタンをタップすると、お問い合わせフォームが開きます。<br />
          <span className="text-sm">（Googleフォームが別タブで開きます）</span>
        </p>
        <div className="flex flex-col items-center gap-3">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #2E7D52 0%, #43A066 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '17px',
              width: '100%',
              maxWidth: '400px',
              minHeight: '58px',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(46,125,82,0.40)',
              padding: '0 24px',
            }}
          >
            📩 お問い合わせフォームを開く
          </a>
          <p className="text-xs text-gray-400">※ Googleフォームが開きます（無料・登録不要）</p>
        </div>
      </div>

      {/* 注意事項 */}
      <div className="rounded-xl p-4" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="text-sm font-bold mb-2" style={{ color: '#E65100' }}>ご注意</p>
        <ul className="text-sm text-gray-600 space-y-1" style={{ lineHeight: 1.8 }}>
          <li>・施設への入居相談・資料請求は、各施設または<a href="https://www.minnanokaigo.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1A5E9E' }}>みんなの介護</a>へ直接お問い合わせください</li>
          <li>・個人情報はお問い合わせへの回答のみに使用し、第三者への提供は行いません</li>
          <li>・広告・リンク掲載の依頼はお断りしています</li>
        </ul>
      </div>
    </>
  )
}
