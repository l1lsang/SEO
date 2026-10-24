import { CHAPTERS } from './content/chapters'
import { breadcrumbsFor, routes, type Route } from './routes'
import { absUrl, SITE } from './site'

const esc = (s: string) =>
  s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

const personId = `${SITE.url}/about#person`
const websiteId = `${SITE.url}/#website`

const person = {
  '@type': 'Person',
  '@id': personId,
  name: SITE.author.name,
  email: `mailto:${SITE.email}`,
  url: absUrl('/about'),
}

const website = {
  '@type': 'WebSite',
  '@id': websiteId,
  name: SITE.name,
  url: absUrl('/'),
  inLanguage: 'ko-KR',
  publisher: { '@id': personId },
}

const breadcrumbList = (route: Route) => ({
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbsFor(route).map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: absUrl(c.path),
  })),
})

function structuredData(route: Route): object[] {
  const url = absUrl(route.path)
  switch (route.kind) {
    case 'home':
      return [website, person]
    case 'hub':
      return [
        { '@type': 'CollectionPage', '@id': url, url, name: route.title, description: route.description, isPartOf: { '@id': websiteId } },
        breadcrumbList(route),
        {
          '@type': 'ItemList',
          itemListElement: CHAPTERS.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.title, url: absUrl(c.path) })),
        },
      ]
    case 'chapter': {
      const c = route.chapter
      return [
        {
          '@type': 'Article',
          '@id': `${url}#article`,
          headline: c.h1,
          description: c.description,
          datePublished: c.published,
          dateModified: c.updated,
          author: { '@id': personId },
          publisher: { '@id': personId },
          mainEntityOfPage: url,
          image: absUrl(SITE.ogImage),
          inLanguage: 'ko-KR',
        },
        breadcrumbList(route),
        person,
      ]
    }
    case 'channel':
      return [
        { '@type': 'CollectionPage', '@id': url, url, name: route.title, description: route.description, isPartOf: { '@id': websiteId } },
        breadcrumbList(route),
      ]
    case 'about':
      return [{ '@type': 'ProfilePage', '@id': url, url, name: route.title, mainEntity: person }, breadcrumbList(route)]
    case 'privacy':
      return [{ '@type': 'WebPage', '@id': url, url, name: route.title }, breadcrumbList(route)]
    case 'notfound':
      return []
  }
}

export function renderHead(route: Route): string {
  const url = absUrl(route.path)
  const image = absUrl(SITE.ogImage)
  const tags = [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
  ]
  if (route.noindex) {
    tags.push('<meta name="robots" content="noindex" />')
  } else {
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      `<meta property="og:type" content="${route.kind === 'chapter' ? 'article' : 'website'}" />`,
      `<meta property="og:site_name" content="${SITE.name}" />`,
      `<meta property="og:locale" content="ko_KR" />`,
      `<meta property="og:title" content="${esc(route.title)}" />`,
      `<meta property="og:description" content="${esc(route.description)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${image}" />`,
      '<meta property="og:image:width" content="1200" />',
      '<meta property="og:image:height" content="630" />',
      '<meta name="twitter:card" content="summary_large_image" />',
    )
  }
  const graph = structuredData(route)
  if (graph.length) {
    const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replaceAll('<', '\\u003c')
    tags.push(`<script type="application/ld+json">${json}</script>`)
  }
  return tags.join('\n    ')
}

export function sitemapXml(): string {
  const urls = routes
    .filter((r) => !r.noindex)
    .map((r) => `  <url>\n    <loc>${absUrl(r.path)}</loc>\n    <lastmod>${r.updated}</lastmod>\n  </url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

export function robotsTxt(): string {
  // 검색용·AI 검색용 크롤러 모두 허용. 학습용 크롤러 차단 예시는 14장 참고.
  return `User-agent: *\nAllow: /\n\nSitemap: ${absUrl('/sitemap.xml')}\n`
}
