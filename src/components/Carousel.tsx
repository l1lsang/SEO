import { Children, useRef, type ReactNode } from 'react'
import { useScrollIndex } from '../hooks/useScrollIndex'

/**
 * 1024px 미만에서는 CSS scroll-snap 가로 캐러셀, 이상에서는 그리드로 보이는 목록.
 * 열 수는 className(.carousel--cols-3 등)으로 정합니다. 스크롤 자체는 JS 없이 동작합니다.
 */
export function Carousel({ children, className, dark }: { children: ReactNode; className?: string; dark?: boolean }) {
  const ref = useRef<HTMLUListElement>(null)
  const items = Children.toArray(children)
  const active = useScrollIndex(ref, items.length)

  return (
    <div className={['carousel', dark && 'carousel--dark', className].filter(Boolean).join(' ')}>
      <ul className="carousel__track" ref={ref}>
        {items.map((child, i) => (
          <li className="carousel__item" key={i}>
            {child}
          </li>
        ))}
      </ul>
      <div className="carousel__dots" aria-hidden="true">
        {items.map((_, i) => (
          <span key={i} className={i === active ? 'is-active' : undefined} />
        ))}
      </div>
    </div>
  )
}
