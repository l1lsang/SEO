import { CHANNELS } from './content/channels'
import { CHAPTERS } from './content/chapters'
import { FAQ } from './content/faq'
import { breadcrumbsFor, routes, type Route } from './routes'
import { absUrl, SITE } from './site'

const esc = (s: string) =>
  s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

// 서치콘솔·서치어드바이저·Bing 웹마스터 도구 소유 확인 코드(10장).
// Vercel 환경 변수에 넣고 다시 배포하면 홈 <head>에 meta 태그가 들어갑니다.
const VERIFICATION: [name: string, content: string | undefined][] = [
  ['google-site-verification', import.meta.env.VITE_GOOGLE_SITE_VERIFICATION],
  ['naver-site-verification', import.meta.env.VITE_NAVER_SITE_VERIFICATION],
  ['msvalidate.01', import.meta.env.VITE_BING_SITE_VERIFICATION],
]

const OG_IMAGE_ALT = 'SEO is fun — 구글·네이버·AI 검색에 잘 잡히는 페이지 만드는 법'

const home = routes.find((r) => r.kind === 'home')!
const lastUpdated = routes.map((r) => r.updated).sort().at(-1)!

const personId = `${SITE.url}/about#person`
const websiteId = `${SITE.url}/#website`

const person = {
  '@type': 'Person',
  '@id': personId,
  name: SITE.author.name,
  jobTitle: SITE.author.role,
  email: `mailto:${SITE.email}`,
  url: absUrl('/about'),
  ...(SITE.author.sameAs.length ? { sameAs: SITE.author.sameAs } : {}),
}

const website = {
  '@type': 'WebSite',
  '@id': websiteId,
  name: SITE.name,
  alternateName: SITE.alternateName,
  url: absUrl('/'),
  description: home.description,
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

/** 페이지별 노드. WebSite·Person은 renderHead가 모든 페이지에 함께 넣어 @id 참조가 같은 그래프 안에서 이어집니다. */
function structuredData(route: Route): object[] {
  const url = absUrl(route.path)
  switch (route.kind) {
    case 'home':
      // 홈 FAQ 섹션에 보이는 질문·답과 같은 내용입니다.
      return [
        {
          '@type': 'FAQPage',
          '@id': `${url}#faq`,
          mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
      ]
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
          isPartOf: { '@id': websiteId },
          image: absUrl(SITE.ogImage),
          inLanguage: 'ko-KR',
        },
        breadcrumbList(route),
      ]
    }
    case 'channel':
      return [
        { '@type': 'CollectionPage', '@id': url, url, name: route.title, description: route.description, isPartOf: { '@id': websiteId } },
        breadcrumbList(route),
      ]
    case 'about':
      return [{ '@type': 'ProfilePage', '@id': url, url, name: route.title, mainEntity: { '@id': personId } }, breadcrumbList(route)]
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
      '<meta name="robots" content="max-image-preview:large" />',
      `<link rel="canonical" href="${url}" />`,
      `<link rel="alternate" type="application/rss+xml" title="${SITE.name}" href="${absUrl('/rss.xml')}" />`,
      `<meta property="og:type" content="${route.kind === 'chapter' ? 'article' : 'website'}" />`,
      `<meta property="og:site_name" content="${SITE.name}" />`,
      `<meta property="og:locale" content="ko_KR" />`,
      `<meta property="og:title" content="${esc(route.title)}" />`,
      `<meta property="og:description" content="${esc(route.description)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${image}" />`,
      '<meta property="og:image:width" content="1200" />',
      '<meta property="og:image:height" content="630" />',
      `<meta property="og:image:alt" content="${esc(OG_IMAGE_ALT)}" />`,
      '<meta name="twitter:card" content="summary_large_image" />',
    )
    if (route.kind === 'chapter') {
      tags.push(
        `<meta property="article:published_time" content="${route.chapter.published}" />`,
        `<meta property="article:modified_time" content="${route.chapter.updated}" />`,
      )
    }
    if (route.kind === 'home') {
      for (const [name, content] of VERIFICATION) {
        if (content) tags.push(`<meta name="${name}" content="${esc(content)}" />`)
      }
    }
  }
  const graph = route.kind === 'notfound' ? [] : [website, person, ...structuredData(route)]
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

// 날짜만 있는 값은 한국 시간 자정으로 봅니다.
const rfc822 = (iso: string) => new Date(`${iso}T00:00:00+09:00`).toUTCString()

/** 네이버 서치어드바이저에 제출하는 RSS(채널 페이지·10장). 새 장이 위로 오게 발행일 역순입니다. */
export function rssXml(): string {
  const items = [...CHAPTERS]
    .sort((a, b) => b.published.localeCompare(a.published))
    .map((c) =>
      [
        '    <item>',
        `      <title>${esc(c.h1)}</title>`,
        `      <link>${absUrl(c.path)}</link>`,
        `      <guid isPermaLink="true">${absUrl(c.path)}</guid>`,
        `      <description>${esc(c.description)}</description>`,
        `      <pubDate>${rfc822(c.published)}</pubDate>`,
        '    </item>',
      ].join('\n'),
    )
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE.name}</title>
    <link>${absUrl('/')}</link>
    <description>${esc(home.description)}</description>
    <language>ko</language>
    <lastBuildDate>${rfc822(lastUpdated)}</lastBuildDate>
    <atom:link href="${absUrl('/rss.xml')}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`
}

/**
 * AI용 사이트 안내(llms.txt). 주요 검색엔진이 공식 지원하는 규격은 아니므로(14장) 기본 SEO를 대신하지 않고,
 * 본문을 읽기 전 사이트 구성을 빠르게 파악하도록 돕는 보조 파일입니다.
 */
export function llmsTxt(): string {
  const link = (name: string, path: string, note: string) => `- [${name}](${absUrl(path)}): ${note}`
  const pages = (kind: Route['kind']) => routes.filter((r) => r.kind === kind)
  return [
    `# ${SITE.name}`,
    '',
    `> ${home.description}`,
    '',
    `구글 검색 센터와 네이버 서치어드바이저 공식 문서를 바탕으로 쓴 한국어 SEO 실무 가이드입니다. 모든 페이지는 자바스크립트 없이 HTML만으로 읽을 수 있고, 각 장에는 작성일·수정일과 참고한 공식 문서 링크가 있습니다. 작성: ${SITE.author.name}, 문의: ${SITE.email}, 최종 수정: ${lastUpdated}`,
    '',
    '## 가이드',
    '',
    link('가이드 전체 목차', '/guide', pages('hub')[0].description),
    ...CHAPTERS.map((c) => link(`${c.no}장. ${c.title}`, c.path, c.description)),
    '',
    '## 검색 채널별 가이드',
    '',
    ...CHANNELS.map((c) => link(c.h1, c.path, c.description)),
    '',
    '## 사이트 정보',
    '',
    ...[...pages('about'), ...pages('privacy')].map((r) => link(r.title.replace(/ \| .*$/, ''), r.path, r.description)),
    '',
  ].join('\n')
}
