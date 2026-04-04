import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className="mb-6">
      <ol
        className="flex flex-wrap items-center gap-1 text-sm text-gray-600"
        style={{ minHeight: '44px', listStyle: 'none', padding: 0, margin: 0 }}
      >
        <li>
          <Link href="/" style={{ color: '#1A5E9E' }}>ホーム</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span className="text-gray-400">›</span>
            {item.href ? (
              <Link href={item.href} style={{ color: '#1A5E9E' }}>{item.label}</Link>
            ) : (
              <span className="text-gray-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
