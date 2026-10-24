import { useEffect, useState } from 'react'
import { Icon } from './Icon'

export type TocItem = { id: string; label: string }

/** 상세페이지 목차. 데스크톱은 사이드바 고정, 모바일은 접힌 상태로 시작합니다. 읽는 위치를 표시합니다. */
export function Toc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const targets = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => !!el)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-96px 0px -60% 0px' },
    )
    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [items])

  const current = items.find((i) => i.id === active)

  return (
    <nav className={open ? 'toc is-open' : 'toc'} aria-label="목차">
      <button type="button" className="toc__toggle" aria-expanded={open} aria-controls="toc-list" onClick={() => setOpen((o) => !o)}>
        <Icon name="list-checks" size={18} />
        <span>목차{current ? ` · ${current.label}` : ''}</span>
        <Icon name="chevron-down" size={18} />
      </button>
      <p className="toc__heading">목차</p>
      <ol className="toc__list" id="toc-list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={item.id === active ? 'is-active' : undefined}
              aria-current={item.id === active ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
