import type { Crumb } from '../routes'
import { Icon } from './Icon'

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="현재 위치" className="breadcrumb">
      <ol>
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1
          return (
            <li key={c.path}>
              {last ? <span aria-current="page">{c.name}</span> : <a href={c.path}>{c.name}</a>}
              {!last && <Icon name="chevron-right" size={14} />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
