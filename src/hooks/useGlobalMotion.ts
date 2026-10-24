import { useEffect } from 'react'

const REDUCED = '(prefers-reduced-motion: reduce)'
const FINE_POINTER = '(hover: hover) and (pointer: fine)'

/**
 * 페이지 전체 모션을 한 번에 연결합니다. React 상태를 쓰지 않고 DOM 속성만 바꿔
 * 미리 렌더링된 HTML과 어긋나지 않습니다.
 * - [data-reveal]            화면에 들어오면 data-in을 붙여 등장(값 'stagger'면 자식이 순서대로)
 * - [data-spotlight]         카드 위 마우스 위치를 --mx/--my로 전달(라임 조명)
 * - [data-tilt]              마우스 위치에 따라 --rx/--ry로 3D 기울기
 * - [data-magnetic]          버튼이 커서 쪽으로 살짝 끌림(--tx/--ty)
 */
export function useGlobalMotion() {
  useEffect(() => {
    const reduced = window.matchMedia(REDUCED).matches
    const cleanups: (() => void)[] = []

    // ---- reveal ----
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const show = (el: HTMLElement) => {
      if (el.dataset.reveal === 'stagger') {
        Array.from(el.children).forEach((c, i) => (c as HTMLElement).style.setProperty('--i', String(Math.min(i, 8))))
      }
      el.dataset.in = ''
    }
    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach(show)
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue
            show(e.target as HTMLElement)
            io.unobserve(e.target)
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
      )
      targets.forEach((t) => io.observe(t))
      cleanups.push(() => io.disconnect())
    }

    // ---- pointer effects ----
    if (!reduced && window.matchMedia(FINE_POINTER).matches) {
      let tilt: HTMLElement | null = null
      let magnet: HTMLElement | null = null
      let frame = 0
      let last: PointerEvent | null = null

      const resetTilt = (el: HTMLElement) => {
        el.classList.remove('is-tilting')
        el.style.setProperty('--rx', '0deg')
        el.style.setProperty('--ry', '0deg')
      }
      const resetMagnet = (el: HTMLElement) => {
        el.style.setProperty('--tx', '0px')
        el.style.setProperty('--ty', '0px')
      }

      const update = () => {
        frame = 0
        const e = last
        if (!e) return
        const target = e.target instanceof Element ? e.target : null

        const spot = target?.closest<HTMLElement>('[data-spotlight]')
        if (spot) {
          const r = spot.getBoundingClientRect()
          spot.style.setProperty('--mx', `${e.clientX - r.left}px`)
          spot.style.setProperty('--my', `${e.clientY - r.top}px`)
        }

        const nextTilt = target?.closest<HTMLElement>('[data-tilt]') ?? null
        if (tilt && tilt !== nextTilt) resetTilt(tilt)
        if (nextTilt) {
          const r = nextTilt.getBoundingClientRect()
          const px = (e.clientX - r.left) / r.width - 0.5
          const py = (e.clientY - r.top) / r.height - 0.5
          const max = Number(nextTilt.dataset.tilt) || 8
          nextTilt.classList.add('is-tilting')
          nextTilt.style.setProperty('--rx', `${(-py * max).toFixed(2)}deg`)
          nextTilt.style.setProperty('--ry', `${(px * max).toFixed(2)}deg`)
        }
        tilt = nextTilt

        const nextMagnet = target?.closest<HTMLElement>('[data-magnetic]') ?? null
        if (magnet && magnet !== nextMagnet) resetMagnet(magnet)
        if (nextMagnet) {
          const r = nextMagnet.getBoundingClientRect()
          nextMagnet.style.setProperty('--tx', `${((e.clientX - r.left - r.width / 2) * 0.22).toFixed(1)}px`)
          nextMagnet.style.setProperty('--ty', `${((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1)}px`)
        }
        magnet = nextMagnet
      }

      const onMove = (e: PointerEvent) => {
        last = e
        if (!frame) frame = requestAnimationFrame(update)
      }
      const onLeave = () => {
        if (tilt) resetTilt(tilt)
        if (magnet) resetMagnet(magnet)
        tilt = magnet = null
      }
      document.addEventListener('pointermove', onMove, { passive: true })
      document.documentElement.addEventListener('pointerleave', onLeave)
      cleanups.push(() => {
        document.removeEventListener('pointermove', onMove)
        document.documentElement.removeEventListener('pointerleave', onLeave)
        cancelAnimationFrame(frame)
      })
    }

    return () => cleanups.forEach((c) => c())
  }, [])
}
