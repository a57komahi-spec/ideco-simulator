interface SummaryBoxProps {
  items: string[]
}

export default function SummaryBox({ items }: SummaryBoxProps) {
  return (
    <div
      className="mb-8 p-6 rounded-xl"
      style={{
        backgroundColor: '#E8F5E9',
        border: '2px solid #2E7D52',
        borderRadius: '12px',
      }}
    >
      <p className="font-bold mb-4" style={{ fontSize: '18px', color: '#2E7D52' }}>
        📌 この記事のポイント
      </p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-base flex items-start gap-2">
            <span style={{ color: '#2E7D52', flexShrink: 0 }}>・</span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    </div>
  )
}
