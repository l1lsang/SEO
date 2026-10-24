import { Fragment } from 'react'

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g
const LINK = /^\[([^\]]+)\]\(([^)]+)\)$/

/** 콘텐츠 문자열의 **굵게**, `코드`, [링크](주소) 표기를 요소로 바꿉니다. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
        if (part.startsWith('`') && part.endsWith('`')) return <code key={i}>{part.slice(1, -1)}</code>
        const m = LINK.exec(part)
        if (m) {
          const external = /^https?:/.test(m[2])
          return (
            <a key={i} href={m[2]} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
              {m[1]}
            </a>
          )
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}

/** 줄바꿈(\n)을 <br>로 바꿉니다. 큰 제목의 의도한 줄바꿈에 씁니다. */
export function Lines({ text }: { text: string }) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  )
}
