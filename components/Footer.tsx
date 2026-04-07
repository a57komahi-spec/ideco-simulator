import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-sm mt-16 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/about" className="text-gray-300 hover:text-white" style={{ color: '#d1d5db', textDecoration: 'none' }}>運営者情報</Link>
          <Link href="/editorial-policy" className="text-gray-300 hover:text-white" style={{ color: '#d1d5db', textDecoration: 'none' }}>編集ポリシー</Link>
          <Link href="/privacy" className="text-gray-300 hover:text-white" style={{ color: '#d1d5db', textDecoration: 'none' }}>プライバシーポリシー</Link>
          <Link href="/disclaimer" className="text-gray-300 hover:text-white" style={{ color: '#d1d5db', textDecoration: 'none' }}>免責事項</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white" style={{ color: '#d1d5db', textDecoration: 'none' }}>お問い合わせ</Link>
        </div>
        <div className="mb-4 rounded-lg px-4 py-3" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: 1.7 }}>
            【広告に関する表示】本サイトには広告が含まれます。掲載している広告リンク（みんなの介護・家族葬のこれから・ガーデン等）はアフィリエイト広告であり、クリックや申し込みにより当サイトが報酬を受け取る場合があります。コンテンツの内容は広告主から独立して作成しています。
          </p>
        </div>
        <p className="text-gray-400 text-sm">© 2026 やさしい老人ホームガイド. All rights reserved.</p>
      </div>
    </footer>
  )
}
