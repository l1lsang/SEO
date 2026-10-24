import { FAQ } from '../content/faq'
import { Icon } from './Icon'

/** 네이티브 <details> 아코디언. 답변은 닫혀 있어도 HTML에 있어 검색엔진이 읽습니다. */
export function Faq() {
  return (
    <div className="faq">
      {FAQ.map((f, i) => (
        <details key={f.q} className="faq__item" open={i === 0}>
          <summary>
            <span className="faq__q" aria-hidden="true">
              Q
            </span>
            <span className="faq__question">{f.q}</span>
            <span className="faq__toggle" aria-hidden="true">
              <Icon name="plus" size={16} className="faq__plus" />
              <Icon name="minus" size={16} className="faq__minus" />
            </span>
          </summary>
          <p className="faq__answer">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
