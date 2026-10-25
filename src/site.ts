// 사이트 전역 설정. 이름·연락처·작성자는 여기서만 바꾸면 모든 페이지와 구조화 데이터에 반영됩니다.
export const SITE = {
  name: 'SEO is fun',
  // 검색 결과 사이트 이름 후보(WebSite 구조화 데이터의 alternateName)
  alternateName: 'SEOisfun',
  url: __SITE_URL__,
  email: 'jkm0831123@gmail.com',
  // 작성자 실명(또는 활동명)을 정하면 name을 바꾸세요. 상세페이지 작성자 표기와 Person 구조화 데이터에 쓰입니다.
  author: {
    name: 'SEO is fun 운영자',
    role: '구글·네이버·AI 검색 최적화 가이드 운영',
    // 블로그·SNS·GitHub 등 같은 사람임을 확인할 수 있는 공식 주소. Person 구조화 데이터의 sameAs에 들어갑니다(14장 엔티티 일관성).
    sameAs: [] as string[],
  },
  published: '2026-10-24',
  updated: '2026-10-24',
  ogImage: '/og.png',
} as const

export const host = SITE.url.replace(/^https?:\/\//, '')

export const absUrl = (path: string) => (path === '/' ? `${SITE.url}/` : `${SITE.url}${path}`)

export const mailto = (subject = '[SEO is fun] 문의') =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`

export const formatDate = (iso: string) => iso.replaceAll('-', '.')
