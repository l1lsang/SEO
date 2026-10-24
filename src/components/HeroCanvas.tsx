import { useEffect, useRef } from 'react'

type Node = { x: number; y: number; vx: number; vy: number; hub: boolean }
type Pulse = { from: number; to: number; t: number; hops: number }

const LINK = 140
const LIME = '200, 242, 90'
const GREY = '167, 171, 179'

/**
 * 히어로 배경: 허브(라임)와 스포크(회색) 노드가 이어지고, 빛 점이 링크를 타고 이동합니다(크롤링).
 * 화면 밖·탭 숨김 시 멈추고, '동작 줄이기' 설정에서는 한 장면만 그립니다. 장식 요소입니다.
 */
export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let nodes: Node[] = []
    let pulses: Pulse[] = []
    let frame = 0
    let running = false
    let visible = true
    const pointer = { x: -9999, y: -9999 }

    const seed = () => {
      const count = Math.round(Math.min(96, Math.max(26, (w * h) / 15000)))
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        hub: i % 8 === 0,
      }))
      pulses = []
    }

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = r.width
      h = r.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    const neighbours = (i: number) => {
      const a = nodes[i]
      const out: number[] = []
      nodes.forEach((b, j) => {
        if (j !== i && Math.hypot(a.x - b.x, a.y - b.y) < LINK) out.push(j)
      })
      return out
    }

    const spawn = () => {
      const hubs = nodes.map((n, i) => (n.hub ? i : -1)).filter((i) => i >= 0)
      const from = hubs[Math.floor(Math.random() * hubs.length)]
      const near = neighbours(from)
      if (near.length) pulses.push({ from, to: near[Math.floor(Math.random() * near.length)], t: 0, hops: 0 })
    }

    const draw = (animate: boolean) => {
      ctx.clearRect(0, 0, w, h)

      if (animate) {
        for (const n of nodes) {
          const dx = n.x - pointer.x
          const dy = n.y - pointer.y
          const d = Math.hypot(dx, dy)
          if (d < 140 && d > 0) {
            n.vx += (dx / d) * 0.02
            n.vy += (dy / d) * 0.02
          }
          n.vx *= 0.995
          n.vy *= 0.995
          const speed = Math.hypot(n.vx, n.vy)
          if (speed < 0.08) {
            n.vx += (Math.random() - 0.5) * 0.02
            n.vy += (Math.random() - 0.5) * 0.02
          }
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1
          n.x = Math.max(0, Math.min(w, n.x))
          n.y = Math.max(0, Math.min(h, n.y))
        }
      }

      // links
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d >= LINK) continue
          const alpha = (1 - d / LINK) * (a.hub || b.hub ? 0.38 : 0.2)
          ctx.strokeStyle = `rgba(${a.hub || b.hub ? LIME : GREY}, ${alpha.toFixed(3)})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      // pulses (빛 점이 링크를 타고 이동)
      if (animate) {
        if (pulses.length < 7 && Math.random() < 0.05) spawn()
        pulses = pulses.flatMap((p) => {
          p.t += 0.018
          if (p.t < 1) return [p]
          if (p.hops >= 3) return []
          const near = neighbours(p.to).filter((j) => j !== p.from)
          if (!near.length) return []
          return [{ from: p.to, to: near[Math.floor(Math.random() * near.length)], t: 0, hops: p.hops + 1 }]
        })
        for (const p of pulses) {
          const a = nodes[p.from]
          const b = nodes[p.to]
          const x = a.x + (b.x - a.x) * p.t
          const y = a.y + (b.y - a.y) * p.t
          const glow = ctx.createRadialGradient(x, y, 0, x, y, 10)
          glow.addColorStop(0, `rgba(${LIME}, 0.9)`)
          glow.addColorStop(1, `rgba(${LIME}, 0)`)
          ctx.fillStyle = glow
          ctx.beginPath()
          ctx.arc(x, y, 10, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // nodes
      for (const n of nodes) {
        if (n.hub) {
          ctx.fillStyle = `rgba(${LIME}, 0.16)`
          ctx.beginPath()
          ctx.arc(n.x, n.y, 7, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = `rgba(${LIME}, 0.95)`
          ctx.beginPath()
          ctx.arc(n.x, n.y, 2.6, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.45)'
          ctx.beginPath()
          ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    const loop = () => {
      draw(true)
      frame = requestAnimationFrame(loop)
    }
    const start = () => {
      if (running || reduced || !visible || document.hidden) return
      running = true
      frame = requestAnimationFrame(loop)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(frame)
    }

    resize()
    draw(false)

    const ro = new ResizeObserver(() => {
      resize()
      draw(false)
    })
    ro.observe(canvas)
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
      else stop()
    })
    io.observe(canvas)
    const onVisibility = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVisibility)
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      pointer.x = e.clientX - r.left
      pointer.y = e.clientY - r.top
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    start()

    return () => {
      stop()
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return <canvas ref={ref} className="hero__canvas" aria-hidden="true" />
}
