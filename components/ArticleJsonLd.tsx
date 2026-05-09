type ArticleJsonLdProps = {
  /** 記事のパス。例: "/how-to-choose"。先頭スラッシュ必須。 */
  path: string
  /** 記事タイトル（H1相当） */
  title: string
  /** 記事の説明文（meta description と同等） */
  description: string
  /** 公開日（ISO 8601、省略時は固定値） */
  datePublished?: string
  /** 更新日（ISO 8601、省略時は datePublished と同じ） */
  dateModified?: string
  /** OGP画像のパス（省略時はサイト共通の hero.jpg） */
  imagePath?: string
}

const SITE = 'https://2ndhappiness.com'
const DEFAULT_DATE = '2024-01-01T09:00:00+09:00'
const DEFAULT_IMAGE = '/images/hero.jpg'

/**
 * Article 構造化データ（schema.org）を出力する共通コンポーネント。
 * ページ毎に <ArticleJsonLd path="..." title="..." description="..." /> を1行追加するだけで
 * Google Rich Results の「Article」必須項目を満たします。
 */
export default function ArticleJsonLd({
  path,
  title,
  description,
  datePublished = DEFAULT_DATE,
  dateModified,
  imagePath = DEFAULT_IMAGE,
}: ArticleJsonLdProps) {
  const url = `${SITE}${path}`
  const image = imagePath.startsWith('http') ? imagePath : `${SITE}${imagePath}`
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: [image],
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Organization',
      name: 'やさしい老人ホームガイド編集部',
      url: SITE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'やさしい老人ホームガイド編集部',
      url: SITE,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE}/images/hero.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
    />
  )
}
