import { Icon } from './Icon'

const QUERY = 'AI 검색 최적화'
const QUESTION = 'AI 검색에 내 사이트가 인용되려면 어떻게 해야 해?'
const ANSWER =
  'AI 검색도 검색 색인을 바탕으로 답합니다. 기본 SEO 위에 질문에 바로 답하는 구조와 명확한 출처를 더하면 인용될 가능성이 높아집니다.'

/** 히어로 오른쪽 예시: 검색 결과 한 줄과, 같은 페이지를 출처로 단 AI 답변 */
export function HeroDemo({ title, description, host }: { title: string; description: string; host: string }) {
  return (
    <div className="hero-demo" aria-hidden="true">
      <div className="serp-card">
        <div className="search-bar">
          <Icon name="search" size={16} />
          <span>{QUERY}</span>
        </div>
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
      </div>

      <div className="answer-card">
        <div className="answer-card__head">
          <span className="answer-card__icon">
            <Icon name="message-square" size={16} />
          </span>
          AI 답변
        </div>
        <p className="answer-card__q">{QUESTION}</p>
        <p className="answer-card__a">
          {ANSWER} <em>[1]</em>
        </p>
        <span className="answer-card__source">
          <Icon name="link" size={12} />
          [1] {host}
        </span>
      </div>
    </div>
  )
}
