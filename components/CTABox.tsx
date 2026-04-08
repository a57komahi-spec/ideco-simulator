import { AFFILIATE_ENABLED } from '@/lib/featureFlags'

const AFFILIATE_URL = 'https://www.minnanokaigo.com/'

interface CTABoxProps {
  compact?: boolean
}

export default function CTABox({ compact = false }: CTABoxProps) {
  if (!AFFILIATE_ENABLED) return null

  if (compact) {
    return (
      <div
        className="rounded-xl px-5 py-4 my-8 flex flex-col md:flex-row items-center gap-4"
        style={{
          background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
          border: '2px solid #F57C00',
        }}
      >
        <div className="flex-1">
          <p className="font-bold text-base" style={{ color: '#E65100' }}>
            📋 気になる施設をすぐに比較できます
          </p>
          <p style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>全国51,000件以上 ・ 資料請求・見学予約すべて無料</p>
        </div>
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine font-bold text-white text-center rounded-xl"
            style={{
              backgroundColor: '#F57C00',
              fontSize: '15px',
              minHeight: '50px',
              borderRadius: '10px',
              boxShadow: '0 4px 14px rgba(245,124,0,0.40)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'white',
              padding: '0 20px',
              whiteSpace: 'nowrap',
            }}
          >
            無料で施設を比較する →
          </a>
          <span style={{ fontSize: '10px', color: '#999' }}>※広告（みんなの介護）</span>
        </div>
      </div>
    )
  }

  return (
    <div
      className="rounded-2xl p-7 my-10"
      style={{
        background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 60%, #FFF8F0 100%)',
        border: '2px solid #F57C00',
        boxShadow: '0 4px 20px rgba(245,124,0,0.15)',
      }}
    >
      {/* 信頼バッジ行 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
        {['✓ 完全無料', '✓ 全国51,000件以上', '✓ 資料請求・見学予約OK'].map((badge) => (
          <span
            key={badge}
            style={{
              background: '#2E7D52',
              color: '#fff',
              fontSize: '11px',
              fontWeight: 700,
              borderRadius: '20px',
              padding: '3px 10px',
            }}
          >
            {badge}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-2" style={{ color: '#1A1A1A', borderLeft: 'none', paddingLeft: 0 }}>
        もっと詳しく施設を探したい方へ
      </h3>
      <p className="text-base mb-6" style={{ color: '#444' }}>
        全国51,000件以上の老人ホーム・介護施設を無料で比較できます。
        資料請求や見学予約もすべて無料です。
      </p>

      <div className="flex flex-col items-center gap-1">
        <a
          href={AFFILIATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine block text-center font-bold text-white"
          style={{
            background: 'linear-gradient(135deg, #F57C00 0%, #E65100 100%)',
            fontSize: '18px',
            width: '100%',
            maxWidth: '480px',
            minHeight: '60px',
            borderRadius: '12px',
            boxShadow: '0 5px 18px rgba(245,124,0,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            color: 'white',
            padding: '0 24px',
            letterSpacing: '0.02em',
          }}
        >
          無料で施設を比較する（最短1分） →
        </a>
        <span style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>※広告（みんなの介護）</span>
      </div>
    </div>
  )
}
