import { chaptersInPart } from '../content/chapters'
import { AI_TOPICS, type Part } from '../content/parts'
import { ButtonLink } from './ButtonLink'
import { Icon } from './Icon'

const pad = (n: number) => String(n).padStart(2, '0')

/** 가이드 파트 패널: 왼쪽 소개 + 오른쪽 장 목록. 홈 슬라이더와 가이드 목록 페이지가 함께 씁니다. */
export function PartPanel({ part, as: Heading = 'h3' }: { part: Part; as?: 'h2' | 'h3' }) {
  const ai = part.id === 5
  return (
    <article className={ai ? 'part-panel part-panel--ai' : 'part-panel'}>
      <div className="part-panel__intro">
        <div className="part-panel__head">
          <span className="part-panel__numeral" aria-hidden="true">
            {ai ? '14' : pad(part.id)}
          </span>
          <Heading className="part-panel__title">{part.title}</Heading>
          <p className="part-panel__desc">{part.description}</p>
        </div>
        <div className="segments" aria-hidden="true">
          {[1, 2, 3, 4, 5].map((s) => (
            <span key={s} className={s === part.id ? 'is-on' : undefined} />
          ))}
        </div>
      </div>
      <div className="part-panel__body">
        <ol className="chapter-list">
          {ai
            ? AI_TOPICS.map((t, i) => (
                <li key={t.title}>
                  <a href={t.href} className="chapter-row">
                    <span className="chapter-row__no">{pad(i + 1)}</span>
                    <span className="chapter-row__title">{t.title}</span>
                    <Icon name="chevron-right" size={18} />
                  </a>
                </li>
              ))
            : chaptersInPart(part.id).map((c) => (
                <li key={c.no}>
                  <a href={c.path} className="chapter-row">
                    <span className="chapter-row__no">{pad(c.no)}</span>
                    <span className="chapter-row__title">{c.title}</span>
                    <Icon name="chevron-right" size={18} />
                  </a>
                </li>
              ))}
        </ol>
        {ai && (
          <div className="part-panel__actions">
            <ButtonLink href="/guide/ai-search" variant="accent">
              14장 읽기
            </ButtonLink>
            <ButtonLink href="/ai" variant="ondark" arrow={false}>
              AI 검색 채널 보기
            </ButtonLink>
          </div>
        )}
      </div>
    </article>
  )
}
