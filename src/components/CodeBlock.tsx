import { useState, type CSSProperties } from 'react'
import { Icon } from './Icon'

// robots.txt처럼 "키: 값" 형식이면 키와 주석에 색을 입힙니다. 그 외 형식은 그대로 보여 줍니다.
// 줄마다 --l(순서)을 붙여 화면에 들어올 때 한 줄씩 나타나게 합니다.
function highlight(code: string, file: string) {
  if (!file.endsWith('.txt')) return code
  return code.split('\n').map((line, i, all) => {
    const nl = i < all.length - 1 ? '\n' : ''
    const style = { '--l': i } as CSSProperties
    if (line.startsWith('#'))
      return (
        <span key={i} className="code-line tok-comment" style={style}>
          {line + nl}
        </span>
      )
    const k = line.indexOf(':')
    if (k > 0)
      return (
        <span key={i} className="code-line" style={style}>
          <span className="tok-key">{line.slice(0, k + 1)}</span>
          {line.slice(k + 1) + nl}
        </span>
      )
    return (
      <span key={i} className="code-line" style={style}>
        {line + nl}
      </span>
    )
  })
}

export function CodeBlock({ file, code, dark = false }: { file: string; code: string; dark?: boolean }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }
  return (
    <figure className={dark ? 'code-block code-block--raised' : 'code-block'} data-reveal="">
      <figcaption className="code-block__head">
        <span>{file}</span>
        <button type="button" className="code-block__copy" onClick={copy} aria-label={`${file} 코드 복사`}>
          <Icon name={copied ? 'check' : 'copy'} size={14} />
          <span aria-live="polite">{copied ? '복사됨' : ''}</span>
        </button>
      </figcaption>
      <pre>
        <code>{highlight(code, file)}</code>
      </pre>
    </figure>
  )
}
