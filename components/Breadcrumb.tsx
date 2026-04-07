import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

const BASE_URL = 'https://2nd-lifesearch.pages.dev'

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: BASE_URL },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
      })),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
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
    </>
  )
}
