import { mailto, SITE } from '../site'
import { Logo } from './Logo'

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: '가이드',
    links: [
      { label: 'SEO 기본 개념', href: '/guide/basics' },
      { label: '대표페이지 SEO', href: '/guide/main-page' },
      { label: '상세페이지 SEO', href: '/guide/detail-page' },
      { label: '기술 SEO', href: '/guide/technical' },
      { label: 'AI 검색 최적화', href: '/guide/ai-search' },
    ],
  },
  {
    heading: '채널',
    links: [
      { label: '구글 SEO', href: '/google' },
      { label: '네이버 SEO', href: '/naver' },
      { label: 'AI 검색', href: '/ai' },
    ],
  },
  {
    heading: '리소스',
    links: [
      { label: '출시 전 체크리스트', href: '/checklist' },
      { label: '4주 실행 로드맵', href: '/roadmap' },
      { label: '자주 하는 실수', href: '/guide/mistakes' },
      { label: '전체 목차', href: '/guide' },
    ],
  },
  {
    heading: '소개',
    links: [
      { label: '운영자 소개', href: '/about' },
      { label: '이메일 문의', href: mailto() },
      { label: '개인정보처리방침', href: '/privacy' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Logo dark />
            <p>구글·네이버·AI 검색 최적화 실무 가이드. 검색에 잡히고, 클릭되고, 문의로 이어지는 페이지를 만드는 방법을 정리합니다.</p>
          </div>
          <div className="site-footer__cols">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="site-footer__heading">{col.heading}</p>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>
            이메일 <a href={mailto()}>{SITE.email}</a>
          </p>
          <p className="site-footer__legal">
            <a href="/privacy">개인정보처리방침</a>
            <span>© 2026 SEO is fun. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
