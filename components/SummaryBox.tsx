interface SummaryBoxProps {
  items: string[]
}

export default function SummaryBox({ items }: SummaryBoxProps) {
  return (
    <div
      className="mb-8 rounded-2xl overflow-hidden"
      style={{
        border: '2px solid #2E7D52',
        boxShadow: '0 2px 12px rgba(46,125,82,0.10)',
      }}
    >
      {/* ヘッダー帯 */}
      <div
        style={{
          background: 'linear-gradient(135deg, #2E7D52 0%, #43A066 100%)',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{ fontSize: '16px' }}>📌</span>
        <p style={{ color: '#fff', fontWeight: 700, fontSize: '15px', margin: 0 }}>
          この記事のポイント
        </p>
      </div>

      {/* 本文 */}
      <div style={{ backgroundColor: '#F0FAF4', padding: '16px 20px' }}>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {items.map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              {/* 番号バッジ */}
              <span
                style={{
                  background: '#2E7D52',
                  color: '#fff',
                  borderRadius: '50%',
                  minWidth: '22px',
                  height: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: 700,
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                {i + 1}
              </span>
              <span
                style={{ fontSize: '14px', lineHeight: 1.7, color: '#1A1A1A' }}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
