import { useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import { PARTS } from '../content/parts'
import { DESKTOP, useMediaQuery } from '../hooks/useMediaQuery'
import { useScrollIndex } from '../hooks/useScrollIndex'
import { Icon } from './Icon'
import { PartPanel } from './PartPanel'

/**
 * 가이드 파트 슬라이더.
 * 데스크톱: 탭·화살표로 트랙을 옆으로 넘김(transform).
 * 모바일: 같은 패널이 scroll-snap 캐러셀. 5개 패널은 항상 HTML에 있어 모든 장 링크가 크롤러에 보입니다.
 */
export function GuidePager() {
  const [index, setIndex] = useState(0)
  const desktop = useMediaQuery(DESKTOP)
  const trackRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const swipeIndex = useScrollIndex(trackRef, PARTS.length)

  const go = (i: number) => setIndex((i + PARTS.length) % PARTS.length)

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!delta) return
    e.preventDefault()
    const next = (index + delta + PARTS.length) % PARTS.length
    setIndex(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="pager" style={{ '--idx': index } as CSSProperties}>
      <div className="pager__controls">
        <div className="pager__tabs" role="tablist" aria-label="가이드 파트">
          {PARTS.map((p, i) => (
            <button
              key={p.id}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`part-tab-${p.id}`}
              aria-selected={i === index}
              aria-controls={`part-${p.id}`}
              tabIndex={i === index ? 0 : -1}
              className="pager__tab"
              onClick={() => go(i)}
              onKeyDown={onTabKey}
            >
              {p.id === 5 ? 'AI 검색' : p.title}
            </button>
          ))}
        </div>
        <div className="pager__arrows">
          <button type="button" className="pager__arrow" aria-label="이전 파트" onClick={() => go(index - 1)}>
            <Icon name="arrow-left" size={18} />
          </button>
          <button type="button" className="pager__arrow pager__arrow--next" aria-label="다음 파트" onClick={() => go(index + 1)}>
            <Icon name="arrow-right" size={18} />
          </button>
        </div>
      </div>

      <div className="pager__viewport">
        <div className="pager__track" ref={trackRef}>
          {PARTS.map((p, i) => (
            <div
              key={p.id}
              id={`part-${p.id}`}
              className="pager__panel"
              role={desktop ? 'tabpanel' : undefined}
              aria-labelledby={desktop ? `part-tab-${p.id}` : undefined}
              inert={desktop && i !== index}
            >
              <PartPanel part={p} />
            </div>
          ))}
        </div>
      </div>

      <div className="pager__progress" aria-hidden="true">
        <span />
      </div>
      <div className="carousel__dots pager__dots" aria-hidden="true">
        {PARTS.map((p, i) => (
          <span key={p.id} className={i === swipeIndex ? 'is-active' : undefined} />
        ))}
      </div>
    </div>
  )
}
