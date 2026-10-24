// 사이트 전역 설정. 이름·연락처·작성자는 여기서만 바꾸면 모든 페이지와 구조화 데이터에 반영됩니다.
export const SITE = {
  name: 'SEO is fun',
  url: __SITE_URL__,
  email: 'jkm0831123@gmail.com',
  // 작성자 실명(또는 활동명)을 정하면 name을 바꾸세요. 상세페이지 작성자 표기와 Person 구조화 데이터에 쓰입니다.
  author: {
    name: 'SEO is fun 운영자',
    role: '구글·네이버·AI 검색 최적화 가이드 운영',
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
