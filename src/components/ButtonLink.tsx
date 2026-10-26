import type { ReactNode } from 'react'
import { Icon } from './Icon'

type Variant = 'primary' | 'accent' | 'secondary' | 'ghost' | 'ondark'

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'm',
  arrow = true,
  className,
}: {
  href: string
  children: ReactNode
  variant?: Variant
  size?: 'l' | 'm'
  arrow?: boolean
  className?: string
}) {
  const external = /^https?:/.test(href)
  return (
    <a
      href={href}
      className={['btn', `btn--${variant}`, `btn--${size}`, className].filter(Boolean).join(' ')}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      <span>{children}</span>
      {arrow && <Icon name="arrow-right" size={size === 'l' ? 18 : 16} />}
    </a>
  )
}
