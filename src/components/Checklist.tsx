import { useState } from 'react'
import { CHECKLIST, CHECKLIST_TOTAL } from '../content/checklist'
import type { ChecklistGroupId } from '../content/types'
import { useChecklist } from '../hooks/useChecklist'
import { ButtonLink } from './ButtonLink'
import { Icon } from './Icon'

function CheckItem({ id, text, checked, onToggle }: { id: string; text: string; checked: boolean; onToggle: (id: string) => void }) {
  return (
    <label className="check-item">
      <input type="checkbox" checked={checked} onChange={() => onToggle(id)} />
      <span className="check-item__box" aria-hidden="true">
        <Icon name="check" size={14} />
      </span>
      <span className="check-item__label">{text}</span>
    </label>
  )
}

/** 홈의 체크리스트 미리보기 카드(분류 탭 + 앞 6개 항목) */
export function ChecklistPreview() {
  const [active, setActive] = useState(0)
  const { checked, toggle } = useChecklist()
  const group = CHECKLIST[active]

  return (
    <div className="checklist-card">
      <div className="seg-tabs" role="tablist" aria-label="체크리스트 분류">
        {CHECKLIST.map((g, i) => (
          <button
            key={g.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls="checklist-preview"
            className="seg-tabs__tab"
            onClick={() => setActive(i)}
          >
            {g.label} {g.items.length}
          </button>
        ))}
      </div>
      <ul className="check-list" id="checklist-preview" role="tabpanel">
        {group.items.slice(0, 6).map((item) => (
          <li key={item.id}>
            <CheckItem id={item.id} text={item.text} checked={checked.includes(item.id)} onToggle={toggle} />
          </li>
        ))}
      </ul>
      <div className="checklist-card__footer">
        <ButtonLink href={`/checklist#${group.id}`} variant="ghost">
          전체 체크리스트
        </ButtonLink>
      </div>
    </div>
  )
}

/** 체크리스트 페이지의 분류별 목록 */
export function ChecklistGroup({ group: id }: { group: ChecklistGroupId }) {
  const { checked, toggle } = useChecklist()
  const group = CHECKLIST.find((g) => g.id === id)!
  return (
    <ul className="check-list check-list--page">
      {group.items.map((item) => (
        <li key={item.id}>
          <CheckItem id={item.id} text={item.text} checked={checked.includes(item.id)} onToggle={toggle} />
        </li>
      ))}
    </ul>
  )
}

/** 체크리스트 페이지 상단 진행률 + 초기화 */
export function ChecklistSummary() {
  const { checked, reset } = useChecklist()
  const done = checked.length
  return (
    <div className="checklist-summary">
      <div className="checklist-summary__row">
        <p>
          <strong>{done}</strong> / {CHECKLIST_TOTAL} 완료
        </p>
        <button type="button" className="text-btn" onClick={reset} disabled={!done}>
          체크 초기화
        </button>
      </div>
      <div className="progress" aria-hidden="true">
        <span style={{ width: `${(done / CHECKLIST_TOTAL) * 100}%` }} />
      </div>
    </div>
  )
}
