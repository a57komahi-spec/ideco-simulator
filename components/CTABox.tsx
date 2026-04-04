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
        style={{ backgroundColor: '#FFF3E0', border: '2px solid #F57C00' }}
      >
        <p className="text-base font-bold flex-1" style={{ color: '#E65100' }}>
          📋 気になる施設をすぐに比較できます
        </p>
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white text-center rounded-xl transition hover:opacity-90"
            style={{
              backgroundColor: '#F57C00',
              fontSize: '16px',
              minHeight: '52px',
              borderRadius: '10px',
              boxShadow: '0 3px 10px rgba(245,124,0,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'white',
              padding: '0 20px',
              whiteSpace: 'nowrap',
            }}
          >
            無料で施設を比較する（最短1分） →
          </a>
          <span style={{ fontSize: '10px', color: '#999' }}>※広告</span>
        </div>
      </div>
    )
  }

  return (
    <div
      className="rounded-2xl p-8 my-10"
      style={{
        backgroundColor: '#FFF3E0',
        border: '2px solid #F57C00',
        borderRadius: '16px',
      }}
    >
      <h3 className="text-xl font-bold mb-2" style={{ color: '#1A1A1A', borderLeft: 'none', paddingLeft: 0 }}>
        もっと詳しく施設を探したい方へ
      </h3>
      <p className="text-base mb-6">
        全国1万件以上の老人ホーム・介護施設を無料で比較できます。
        資料請求や見学予約もすべて無料です。
      </p>
      <div className="flex flex-col items-center gap-1">
        <a
          href={AFFILIATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center font-bold text-white"
          style={{
            backgroundColor: '#F57C00',
            fontSize: '20px',
            width: '100%',
            maxWidth: '480px',
            minHeight: '60px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(245,124,0,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            color: 'white',
            padding: '0 24px',
          }}
        >
          無料で施設を比較する（最短1分） →
        </a>
        <span style={{ fontSize: '11px', color: '#999' }}>※広告（みんなの介護）</span>
      </div>
    </div>
  )
}
