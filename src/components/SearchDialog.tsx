import { useEffect, useMemo, useRef, useState } from 'react'
import { CHANNELS } from '../content/channels'
import { CHAPTERS } from '../content/chapters'
import { Icon } from './Icon'

type Entry = { title: string; meta: string; href: string; text: string }

const INDEX: Entry[] = [
  ...CHAPTERS.map((c) => ({
    title: c.title,
    meta: `${String(c.no).padStart(2, '0')}장`,
    href: c.path,
    text: [c.title, c.summary, c.description, ...c.sections.map((s) => s.title)].join(' ').toLowerCase(),
  })),
  ...CHANNELS.map((c) => ({
    title: c.h1,
    meta: '채널',
    href: c.path,
    text: [c.h1, c.lead, ...c.steps.map((s) => s.title)].join(' ').toLowerCase(),
  })),
]

/** 서버 없이 브라우저에서 가이드 목차를 거르는 검색 창 */
export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const results = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
    if (!terms.length) return INDEX.slice(0, 14)
    return INDEX.filter((e) => terms.every((t) => e.text.includes(t)))
  }, [query])

  return (
    <dialog
      ref={ref}
      className="search"
      aria-label="가이드 검색"
      onClose={() => {
        setQuery('')
        onClose()
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {open && (
        <div className="search__panel">
          <div className="search__field">
            <Icon name="search" size={20} />
            <input
              type="search"
              placeholder="찾을 내용을 입력하세요 (예: canonical, 네이버)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              aria-label="검색어"
            />
            <button type="button" className="icon-btn" onClick={onClose} aria-label="검색 닫기">
              <Icon name="x" size={20} />
            </button>
          </div>
          <ul className="search__results">
            {results.map((r) => (
              <li key={r.href}>
                <a href={r.href}>
                  <span className="search__meta">{r.meta}</span>
                  <span>{r.title}</span>
                  <Icon name="chevron-right" size={18} />
                </a>
              </li>
            ))}
            {!results.length && <li className="search__empty">검색 결과가 없습니다.</li>}
          </ul>
        </div>
      )}
    </dialog>
  )
}
