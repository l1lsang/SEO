import { WEEKS } from '../content/roadmap'
import type { Block } from '../content/types'
import { ChecklistGroup } from './Checklist'
import { CodeBlock } from './CodeBlock'
import { HubDiagram } from './HubDiagram'
import { Icon } from './Icon'
import { Rich } from './Rich'
import { WeekCard } from './WeekCard'

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'p':
      return (
        <p className="prose-p">
          <Rich text={block.text} />
        </p>
      )
    case 'h3':
      return <h3 className="prose-h3">{block.text}</h3>
    case 'list': {
      const List = block.ordered ? 'ol' : 'ul'
      return (
        <List className={block.ordered ? 'prose-list prose-list--ordered' : 'prose-list'}>
          {block.items.map((item) => (
            <li key={item}>
              <Rich text={item} />
            </li>
          ))}
        </List>
      )
    }
    case 'table':
      return (
        <div className="table-wrap" tabIndex={0} role="region" aria-label={`${block.head[0]} 표`}>
          <table className="data-table">
            <thead>
              <tr>
                {block.head.map((h) => (
                  <th key={h} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th key={i} scope="row">
                        <Rich text={cell} />
                      </th>
                    ) : (
                      <td key={i}>
                        <Rich text={cell} />
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'callout':
      return (
        <aside className={`callout callout--${block.tone}`}>
          <Icon name={block.tone === 'warning' ? 'alert-triangle' : 'info'} size={20} />
          <div>
            {block.title && <p className="callout__title">{block.title}</p>}
            <p>
              <Rich text={block.text} />
            </p>
          </div>
        </aside>
      )
    case 'code':
      return <CodeBlock file={block.file} code={block.code} />
    case 'compare':
      return (
        <div className="compare">
          <div className="compare__card compare__card--good">
            <p className="compare__title">
              <Icon name="check-circle" size={18} /> 해야 할 것
            </p>
            <ul>
              {block.good.map((g) => (
                <li key={g}>
                  <Rich text={g} />
                </li>
              ))}
            </ul>
          </div>
          <div className="compare__card compare__card--bad">
            <p className="compare__title">
              <Icon name="x" size={18} /> 피해야 할 것
            </p>
            <ul>
              {block.bad.map((b) => (
                <li key={b}>
                  <Rich text={b} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    case 'example':
      return (
        <div className="compare">
          <figure className="compare__card compare__card--good">
            <figcaption className="compare__title">
              <Icon name="check-circle" size={18} /> 좋은 예
            </figcaption>
            <blockquote>{block.good}</blockquote>
          </figure>
          <figure className="compare__card compare__card--bad">
            <figcaption className="compare__title">
              <Icon name="x" size={18} /> 피해야 할 예
            </figcaption>
            <blockquote>{block.bad}</blockquote>
          </figure>
        </div>
      )
    case 'flow':
      return (
        <ol className="flow">
          {block.steps.map((s, i) => (
            <li key={s} className={i === block.steps.length - 1 ? 'is-last' : undefined}>
              <span className="flow__num">{i + 1}</span>
              <span className="flow__label">{s}</span>
            </li>
          ))}
        </ol>
      )
    case 'avoid':
      return (
        <ul className="avoid-list">
          {block.items.map((item) => (
            <li key={item}>
              <span className="avoid-list__x" aria-hidden="true">
                <Icon name="x" size={14} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      )
    case 'hub':
      return <HubDiagram />
    case 'checklist':
      return <ChecklistGroup group={block.group} />
    case 'weeks':
      return (
        <div className="week-grid">
          {WEEKS.map((w) => (
            <WeekCard key={w.label} week={w} />
          ))}
        </div>
      )
  }
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </>
  )
}
