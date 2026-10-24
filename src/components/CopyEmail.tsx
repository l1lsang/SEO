import { useState } from 'react'
import { mailto, SITE } from '../site'
import { Icon } from './Icon'

/** 이메일 링크 + 복사 버튼 */
export function CopyEmail({ subject }: { subject?: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }
  return (
    <span className="copy-email">
      <a className="copy-email__link" href={mailto(subject)}>
        <Icon name="mail" size={18} />
        {SITE.email}
      </a>
      <button type="button" className={copied ? 'copy-email__btn is-done' : 'copy-email__btn'} onClick={copy} aria-label="이메일 주소 복사">
        <Icon name={copied ? 'check' : 'copy'} size={16} />
        <span className="copy-email__toast" aria-live="polite">
          {copied ? '복사됨' : ''}
        </span>
      </button>
    </span>
  )
}
