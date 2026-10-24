import { useState } from 'react'
import type { NavKey } from '../content/types'
import { mailto } from '../site'
import { Icon } from './Icon'
import { Logo } from './Logo'
import { SearchDialog } from './SearchDialog'

const NAV: { key: NavKey; label: string; href: string }[] = [
  { key: 'guide', label: '가이드', href: '/guide' },
  { key: 'google', label: '구글 SEO', href: '/google' },
  { key: 'naver', label: '네이버 SEO', href: '/naver' },
  { key: 'ai', label: 'AI 검색', href: '/ai' },
  { key: 'checklist', label: '체크리스트', href: '/checklist' },
  { key: 'roadmap', label: '로드맵', href: '/roadmap' },
]

export function Header({ dark, active, path }: { dark: boolean; active?: NavKey; path: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className={['site-header', dark && 'site-header--dark', menuOpen && 'is-open'].filter(Boolean).join(' ')}>
      <div className="container site-header__bar">
        <Logo dark={dark} />
        <nav id="site-nav" className="site-nav" aria-label="주 메뉴">
          <ul>
            {NAV.map((n) => (
              <li key={n.key}>
                <a
                  href={n.href}
                  className={active === n.key ? 'is-active' : undefined}
                  aria-current={path === n.href ? 'page' : undefined}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--accent btn--m site-nav__cta" href={mailto()}>
            <Icon name="mail" size={16} />
            <span>이메일 문의</span>
          </a>
        </nav>
        <div className="site-header__actions">
          <button type="button" className="icon-btn icon-btn--ring" aria-label="가이드 검색" onClick={() => setSearchOpen(true)}>
            <Icon name="search" size={18} />
          </button>
          <a className={`btn btn--m ${dark ? 'btn--accent' : 'btn--primary'} site-header__cta`} href={mailto()}>
            이메일 문의
          </a>
          <button
            type="button"
            className="icon-btn site-header__menu"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <Icon name={menuOpen ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </div>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
