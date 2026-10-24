import type { Week } from '../content/roadmap'
import { Icon } from './Icon'

export function WeekCard({ week }: { week: Week }) {
  return (
    <div className="week-card">
      <span className="week-card__pill">{week.label}</span>
      <h3 className="week-card__title">{week.title}</h3>
      <ul className="week-card__tasks">
        {week.tasks.map((t) => (
          <li key={t.text} className={t.ai ? 'is-ai' : undefined}>
            <Icon name={t.ai ? 'sparkles' : 'check'} size={16} />
            <span>
              {t.text}
              {t.ai && <span className="sr-only"> (AI 검색 추가 작업)</span>}
            </span>
          </li>
        ))}
      </ul>
      <p className="week-card__output">산출물: {week.output}</p>
    </div>
  )
}
