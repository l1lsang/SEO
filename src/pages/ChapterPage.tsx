import { useMemo } from 'react'
import { Blocks } from '../components/Blocks'
import { ButtonLink } from '../components/ButtonLink'
import { ChecklistSummary } from '../components/Checklist'
import { Icon } from '../components/Icon'
import { Byline, PageHeader } from '../components/PageHeader'
import { Lines } from '../components/Rich'
import { Toc, type TocItem } from '../components/Toc'
import { CHAPTERS, chapterByNo } from '../content/chapters'
import type { Chapter } from '../content/types'
import type { Crumb } from '../routes'
import { mailto } from '../site'

export function ChapterPage({ chapter, crumbs }: { chapter: Chapter; crumbs: Crumb[] }) {
  const toc = useMemo<TocItem[]>(
    () => [
      { id: 'summary', label: '핵심 답 요약' },
      ...chapter.sections.map((s) => ({ id: s.id, label: s.title })),
      ...(chapter.references.length ? [{ id: 'references', label: '참고 자료' }] : []),
    ],
    [chapter],
  )
  const prev = CHAPTERS.find((c) => c.no === chapter.no - 1)
  const next = CHAPTERS.find((c) => c.no === chapter.no + 1)
  const sibling = prev ?? next
  const isAI = chapter.no === 14
  const subject = `[SEO is fun] ${chapter.title} 관련 문의`

  return (
    <>
      <article className="chapter" aria-labelledby="page-title">
        <PageHeader crumbs={crumbs} title={chapter.h1} lead={chapter.lead}>
          <Byline published={chapter.published} updated={chapter.updated} />
        </PageHeader>

        <div className="container chapter__layout">
          <aside className="chapter__aside">
            <Toc items={toc} />
            <div className="aside-cta">
              <p className="aside-cta__title">
                <Lines text={isAI ? 'AI 검색 노출,\n점검해 드릴까요?' : '우리 사이트 SEO,\n점검해 드릴까요?'} />
              </p>
              <p>서치콘솔·robots.txt·구조화 데이터를 함께 확인합니다.</p>
              <ButtonLink href={mailto(subject)} variant="accent" arrow={false}>
                이메일 문의
              </ButtonLink>
            </div>
          </aside>

          <div className="chapter__content">
            <section id="summary" className="key-answer" aria-labelledby="summary-title">
              <h2 id="summary-title" className="key-answer__title">
                <Icon name="list-checks" size={20} />
                핵심 답 요약
              </h2>
              <ol>
                {chapter.keyAnswer.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ol>
            </section>

            {chapter.no === 11 && <ChecklistSummary />}

            {chapter.sections.map((s) => (
              <section key={s.id} id={s.id} className="prose-section" aria-labelledby={`${s.id}-title`}>
                <h2 id={`${s.id}-title`} className="prose-h2">
                  {s.title}
                </h2>
                <Blocks blocks={s.blocks} />
              </section>
            ))}

            {chapter.references.length > 0 && (
              <section id="references" className="references" aria-labelledby="references-title">
                <h2 id="references-title">참고 자료</h2>
                <ul>
                  {chapter.references.map((r) => (
                    <li key={r.href}>
                      <a href={r.href} target="_blank" rel="noopener">
                        <Icon name="external-link" size={14} />
                        {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="closing-card">
              <p className="closing-card__title">
                <Lines text={chapter.closing.title} />
              </p>
              <p>{chapter.closing.text}</p>
              <div className="btn-row">
                <ButtonLink href={mailto(subject)} variant="accent">
                  이메일로 점검 문의
                </ButtonLink>
                <ButtonLink href={isAI ? '/checklist#ai' : '/checklist'} variant="ondark" arrow={false}>
                  {isAI ? '체크리스트 AI 항목 보기' : '체크리스트 보기'}
                </ButtonLink>
              </div>
            </div>

            <nav className="pager-links" aria-label="장 이동">
              {sibling && (
                <a href={sibling.path} className="pager-link">
                  <span className="pager-link__cap">
                    {prev ? <Icon name="arrow-left" size={14} /> : null}
                    {prev ? '이전 장' : '다음 장'}
                    {!prev ? <Icon name="arrow-right" size={14} /> : null}
                  </span>
                  <span className="pager-link__title">
                    {sibling.no}. {sibling.title}
                  </span>
                </a>
              )}
              <a href="/guide" className="pager-link pager-link--end">
                <span className="pager-link__cap">
                  가이드 목록
                  <Icon name="arrow-right" size={14} />
                </span>
                <span className="pager-link__title">전체 14장 보기</span>
              </a>
            </nav>
          </div>
        </div>
      </article>

      <section className="section section--subtle related" aria-labelledby="related-title">
        <div className="container">
          <div className="section-head-row">
            <h2 id="related-title" className="related__title">
              함께 읽으면 좋은 가이드
            </h2>
            <ButtonLink href="/guide" variant="ghost">
              전체 가이드
            </ButtonLink>
          </div>
          <div className="related__grid">
            {chapter.related.map((no) => {
              const r = chapterByNo(no)
              return (
                <a key={no} href={r.path} className="related-card">
                  <h3>{r.title}</h3>
                  <p>{r.description}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
