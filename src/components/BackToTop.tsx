import { useEffect, useRef } from 'react'
import { Icon } from './Icon'

/** '맨 위로' 버튼. 600px 이상 내려가면 나타납니다. */
export function BackToTop() {
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const btn = ref.current
    if (!btn) return
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => btn.toggleAttribute('data-show', window.scrollY > 600))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <button
      ref={ref}
      type="button"
      className="to-top"
      aria-label="맨 위로"
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}
    >
      <Icon name="arrow-up" size={18} />
    </button>
  )
}
