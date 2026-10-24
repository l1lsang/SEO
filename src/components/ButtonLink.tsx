import type { ReactNode } from 'react'
import { Icon } from './Icon'

type Variant = 'primary' | 'accent' | 'secondary' | 'ghost' | 'ondark'

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'm',
  arrow = true,
  magnetic = false,
  className,
}: {
  href: string
  children: ReactNode
  variant?: Variant
  size?: 'l' | 'm'
  arrow?: boolean
  /** 커서 쪽으로 살짝 끌리는 효과(주요 행동 버튼에만) */
  magnetic?: boolean
  className?: string
}) {
  const external = /^https?:/.test(href)
  return (
    <a
      href={href}
      className={['btn', `btn--${variant}`, `btn--${size}`, className].filter(Boolean).join(' ')}
      data-magnetic={magnetic ? '' : undefined}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      <span>{children}</span>
      {arrow && <Icon name="arrow-right" size={size === 'l' ? 18 : 16} />}
    </a>
  )
}
