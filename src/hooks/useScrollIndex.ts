import { useEffect, useState, type RefObject } from 'react'

/** 가로 스크롤 트랙에서 지금 맨 앞에 있는 항목의 순서를 구합니다(점 표시 동기화용). */
export function useScrollIndex(ref: RefObject<HTMLElement | null>, count: number): number {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const first = el.firstElementChild as HTMLElement | null
        if (!first) return
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
          setIndex(count - 1)
          return
        }
        const gap = parseFloat(getComputedStyle(el).columnGap) || 0
        setIndex(Math.min(count - 1, Math.round(el.scrollLeft / (first.offsetWidth + gap))))
      })
    }
    el.addEventListener('scroll', update, { passive: true })
    return () => {
      el.removeEventListener('scroll', update)
      cancelAnimationFrame(frame)
    }
  }, [ref, count])

  return index
}
