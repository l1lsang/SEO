import type { CSSProperties } from 'react'
import { Icon } from './Icon'

// 480×340 기준 좌표(%)
const SPOKES = [
  { label: '가이드', x: 17.5, y: 18.8 },
  { label: '사례', x: 50, y: 11.8 },
  { label: '상품', x: 82.5, y: 18.8 },
  { label: '후기', x: 17.5, y: 81.2 },
  { label: '칼럼', x: 50, y: 88.2 },
  { label: 'FAQ', x: 82.5, y: 81.2 },
]

export function HubDiagram() {
  return (
    <div
      className="hub-diagram"
      role="img"
      aria-label="대표페이지(허브)가 가이드·사례·상품·후기·칼럼·FAQ 상세페이지(스포크)와 양방향으로 연결된 구조"
    >
      <svg viewBox="0 0 480 340" preserveAspectRatio="none" aria-hidden="true">
        {SPOKES.map((s) => (
          <line key={s.label} x1="240" y1="170" x2={(s.x / 100) * 480} y2={(s.y / 100) * 340} />
        ))}
      </svg>
      {SPOKES.map((s, i) => (
        <span
          key={s.label}
          className="hub-diagram__spoke"
          style={{ left: `${s.x}%`, top: `${s.y}%`, '--i': i } as CSSProperties}
          aria-hidden="true"
        >
          <Icon name="file-text" size={14} />
          {s.label}
        </span>
      ))}
      <span className="hub-diagram__hub" aria-hidden="true">
        대표페이지
      </span>
    </div>
  )
}
