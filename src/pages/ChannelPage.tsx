import { ButtonLink } from '../components/ButtonLink'
import { Icon } from '../components/Icon'
import { PageHeader } from '../components/PageHeader'
import type { Channel } from '../content/channels'
import { chapterByNo } from '../content/chapters'
import type { Crumb } from '../routes'
import { mailto } from '../site'

const pad = (n: number) => String(n).padStart(2, '0')

export function ChannelPage({ channel, crumbs }: { channel: Channel; crumbs: Crumb[] }) {
  return (
    <>
      <PageHeader crumbs={crumbs} title={channel.h1} lead={channel.lead} />
      <div className="container channel-page">
        <section aria-labelledby="steps-title">
          <h2 id="steps-title" className="prose-h2">
            할 일 순서
          </h2>
          <ol className="step-list">
            {channel.steps.map((s, i) => (
              <li key={s.title}>
                <span className="step-list__num">{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="related-chapters-title">
          <h2 id="related-chapters-title" className="prose-h2">
            관련 가이드
          </h2>
          <ol className="chapter-list chapter-list--boxed">
            {channel.related.map((no) => {
              const c = chapterByNo(no)
              return (
                <li key={no}>
                  <a href={c.path} className="chapter-row">
                    <span className="chapter-row__no">{pad(c.no)}</span>
                    <span className="chapter-row__title">
                      {c.title}
                      <span className="chapter-row__summary">{c.summary}</span>
                    </span>
                    <Icon name="chevron-right" size={18} />
                  </a>
                </li>
              )
            })}
          </ol>
        </section>

        <section className="references" aria-labelledby="tools-title">
          <h2 id="tools-title">공식 도구와 문서</h2>
          <ul>
            {channel.tools.map((t) => (
              <li key={t.href}>
                <a href={t.href} target="_blank" rel="noopener">
                  <Icon name="external-link" size={14} />
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="closing-card">
          <p className="closing-card__title">{channel.name} 노출, 점검해 드릴까요?</p>
          <p>서치콘솔·서치어드바이저 데이터와 체크리스트로 막힌 곳을 찾아 드립니다.</p>
          <div className="btn-row">
            <ButtonLink href={mailto(`[SEO is fun] ${channel.name} 점검 문의`)} variant="accent">
              이메일로 문의하기
            </ButtonLink>
            <ButtonLink href="/checklist" variant="ondark" arrow={false}>
              체크리스트 보기
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  )
}
