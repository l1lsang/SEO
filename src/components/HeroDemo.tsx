import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icon'

const QUERY = 'AI 검색 최적화'
const QUESTION = 'AI 검색에 내 사이트가 인용되려면 어떻게 해야 해?'
const ANSWER =
  'AI 검색도 검색 색인을 바탕으로 답합니다. 기본 SEO 위에 질문에 바로 답하는 구조와 명확한 출처를 더하면 인용될 가능성이 높아집니다.'

type Serp = 'ready' | 'loading' | 'hidden'

/**
 * 히어로 오른쪽 데모: 검색어 입력 → 결과 → AI 답변 타이핑 → 출처 인용을 반복합니다.
 * 미리 렌더링된 HTML은 완성된 상태이고, 글자 자리를 미리 잡아 두어 레이아웃이 흔들리지 않습니다(CLS 0).
 */
export function HeroDemo({ title, description, host }: { title: string; description: string; host: string }) {
  const root = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState(QUERY.length)
  const [serp, setSerp] = useState<Serp>('ready')
  const [answer, setAnswer] = useState(ANSWER.length)
  const [cited, setCited] = useState(true)
  const [typing, setTyping] = useState<'none' | 'query' | 'answer'>('none')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !root.current) return
    let cancelled = false
    let visible = true
    const timers: number[] = []
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms))
      })
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.2 })
    io.observe(root.current)

    const run = async () => {
      await wait(2400)
      while (!cancelled) {
        if (!visible || document.hidden) {
          await wait(600)
          continue
        }
        setCited(false)
        setAnswer(0)
        setSerp('hidden')
        setQuery(0)
        setTyping('query')
        await wait(350)
        for (let i = 1; i <= QUERY.length && !cancelled; i++) {
          setQuery(i)
          await wait(85)
        }
        setTyping('none')
        setSerp('loading')
        await wait(800)
        setSerp('ready')
        await wait(500)
        setTyping('answer')
        for (let i = 2; i <= ANSWER.length + 1 && !cancelled; i += 2) {
          setAnswer(Math.min(i, ANSWER.length))
          await wait(30)
        }
        setTyping('none')
        await wait(250)
        setCited(true)
        await wait(5200)
      }
    }
    void run()
    return () => {
      cancelled = true
      timers.forEach((t) => clearTimeout(t))
      io.disconnect()
    }
  }, [])

  return (
    <div className="hero-demo" ref={root} data-tilt="10" aria-hidden="true">
      <div className={`serp-card is-${serp}`}>
        <div className="search-bar">
          <Icon name="search" size={16} />
          <span className="type-slot">
            <span className="type-slot__ghost">{QUERY}</span>
            <span className="type-slot__text">
              {QUERY.slice(0, query)}
              {typing === 'query' && <span className="caret" />}
            </span>
          </span>
        </div>
        <div className="serp-card__result">
          <div className="serp-card__site">
            <span className="serp-card__fav">
              <Icon name="search" size={14} />
            </span>
            <span>
              <b>SEO is fun</b>
              <span>{host} › guide › ai-search</span>
            </span>
          </div>
          <p className="serp-card__title">{title}</p>
          <p className="serp-card__desc">{description}</p>
          <span className="skeleton">
            <span />
            <span />
            <span />
          </span>
        </div>
      </div>

      <div className={cited ? 'answer-card is-cited' : 'answer-card'}>
        <div className="answer-card__head">
          <span className="answer-card__icon">
            <Icon name="sparkles" size={16} />
          </span>
          AI 답변
          {!cited && <span className="answer-card__dots" />}
        </div>
        <p className="answer-card__q">{QUESTION}</p>
        <p className="answer-card__a type-slot">
          <span className="type-slot__ghost">
            {ANSWER} <em>[1]</em>
          </span>
          <span className="type-slot__text">
            {ANSWER.slice(0, answer)}
            {typing === 'answer' && <span className="caret" />}
            {cited && <em> [1]</em>}
          </span>
        </p>
        <span className="answer-card__source">
          <Icon name="link" size={12} />
          [1] {host}
        </span>
      </div>
    </div>
  )
}
