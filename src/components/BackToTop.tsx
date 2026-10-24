import { useEffect, useRef } from 'react'
import { Icon } from './Icon'

const R = 21
const C = 2 * Math.PI * R

/** 스크롤 진행률 링이 있는 '맨 위로' 버튼. 600px 이상 내려가면 나타납니다. */
export function BackToTop() {
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const btn = ref.current
    if (!btn) return
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0
        btn.style.setProperty('--dash', String(C * (1 - ratio)))
        btn.toggleAttribute('data-show', window.scrollY > 600)
      })
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
      <svg viewBox="0 0 48 48" className="to-top__progress" aria-hidden="true">
        <circle cx="24" cy="24" r={R} className="to-top__track" />
        <circle cx="24" cy="24" r={R} className="to-top__ring" strokeDasharray={C} />
      </svg>
      <Icon name="arrow-up" size={18} />
    </button>
  )
}
