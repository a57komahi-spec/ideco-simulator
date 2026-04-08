import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://2nd-lifesearch.pages.dev'
  const pages = [
    '',
    '/types',
    '/cost',
    '/how-to-choose',
    '/process',
    '/faq',
    '/privacy',
    '/about',
    '/contact',
    '/disclaimer',
    '/parents-support',
    '/care-items',
    '/tell-parents',
    '/editorial-policy',
    '/tokuyou-waiting',
    '/after-hospital',
    '/dementia-facility',
    '/review-guide',
    '/sakouju',
    '/care-resignation',
    '/care-cost-split',
    '/retirement-cost',
    '/insurance-gap',
    '/after-death',
    '/funeral-guide',
    '/ending-activity',
    '/transport',
  ]
  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}
