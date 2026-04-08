import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A2A1E', color: '#fff' }} className="mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">

        {/* サイト名・タグライン */}
        <div className="mb-8 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
          <p style={{ fontSize: '18px', fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>
            🌿 やさしい老人ホームガイド
          </p>
          <p style={{ fontSize: '12px', color: '#9EB59E', marginTop: '6px', lineHeight: 1.7 }}>
            大切な家族のために、はじめての老人ホーム選びをわかりやすく解説します。
          </p>
        </div>

        {/* リンク群 */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/types" style={{ color: '#B8D4B8', textDecoration: 'none', fontSize: '13px' }}>施設の種類</Link>
            <Link href="/cost" style={{ color: '#B8D4B8', textDecoration: 'none', fontSize: '13px' }}>費用・料金</Link>
            <Link href="/how-to-choose" style={{ color: '#B8D4B8', textDecoration: 'none', fontSize: '13px' }}>選び方</Link>
            <Link href="/process" style={{ color: '#B8D4B8', textDecoration: 'none', fontSize: '13px' }}>入居の流れ</Link>
            <Link href="/faq" style={{ color: '#B8D4B8', textDecoration: 'none', fontSize: '13px' }}>よくある質問</Link>
            <Link href="/checklist" style={{ color: '#B8D4B8', textDecoration: 'none', fontSize: '13px' }}>終活チェックリスト</Link>
            <Link href="/transport" style={{ color: '#B8D4B8', textDecoration: 'none', fontSize: '13px' }}>送迎サービス</Link>
            <Link href="/funeral-guide" style={{ color: '#B8D4B8', textDecoration: 'none', fontSize: '13px' }}>葬儀ガイド</Link>
            <Link href="/ending-activity" style={{ color: '#B8D4B8', textDecoration: 'none', fontSize: '13px' }}>終活ガイド</Link>
          </div>
        </div>

        {/* 法的リンク */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '18px' }}>
          <Link href="/about" style={{ color: '#999', textDecoration: 'none', fontSize: '12px' }}>運営者情報</Link>
          <Link href="/editorial-policy" style={{ color: '#999', textDecoration: 'none', fontSize: '12px' }}>編集ポリシー</Link>
          <Link href="/privacy" style={{ color: '#999', textDecoration: 'none', fontSize: '12px' }}>プライバシーポリシー</Link>
          <Link href="/disclaimer" style={{ color: '#999', textDecoration: 'none', fontSize: '12px' }}>免責事項</Link>
          <Link href="/contact" style={{ color: '#999', textDecoration: 'none', fontSize: '12px' }}>お問い合わせ</Link>
        </div>

        {/* 広告表示 */}
        <div className="mb-5 rounded-lg px-4 py-3" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <p style={{ color: '#888', fontSize: '11px', lineHeight: 1.8 }}>
            【広告に関する表示】本サイトには広告が含まれます。掲載している広告リンク（みんなの介護・家族葬のこれから・ガーデン等）はアフィリエイト広告であり、クリックや申し込みにより当サイトが報酬を受け取る場合があります。コンテンツの内容は広告主から独立して作成しています。
          </p>
        </div>

        <p style={{ color: '#666', fontSize: '12px' }}>© 2026 やさしい老人ホームガイド. All rights reserved.</p>
      </div>
    </footer>
  )
}
