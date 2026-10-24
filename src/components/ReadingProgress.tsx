import { useEffect, useRef } from 'react'

/** 헤더 아래 3px 읽기 진행 막대(장식). 스크롤 비율만큼 채웁니다. */
export function ReadingProgress() {
  const bar = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0
        bar.current?.style.setProperty('--progress', String(ratio))
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="reading-progress" aria-hidden="true">
      <span ref={bar} />
    </div>
  )
}
