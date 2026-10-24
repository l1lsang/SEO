import type { ReactNode } from 'react'
import type { Crumb } from '../routes'
import { formatDate, SITE } from '../site'
import { Breadcrumbs } from './Breadcrumbs'
import { Icon } from './Icon'
import { Lines } from './Rich'

/** 상세·허브 페이지 공통 제목 영역: 브레드크럼, h1, 리드, (선택) 작성자 */
export function PageHeader({ crumbs, title, lead, children }: { crumbs: Crumb[]; title: string; lead?: string; children?: ReactNode }) {
  return (
    <header className="page-header">
      <div className="container">
        <Breadcrumbs crumbs={crumbs} />
        <h1 className="page-header__title" id="page-title">
          <Lines text={title} />
        </h1>
        {lead && <p className="page-header__lead">{lead}</p>}
        {children}
      </div>
    </header>
  )
}

/** 작성자·작성일·수정일(E-E-A-T 신뢰 정보) */
export function Byline({ published, updated }: { published: string; updated: string }) {
  return (
    <div className="byline">
      <div className="byline__author">
        <span className="byline__avatar" aria-hidden="true">
          SF
        </span>
        <span>
          <span className="byline__name">
            글 <a href="/about" rel="author">{SITE.author.name}</a>
          </span>
          <span className="byline__role">{SITE.author.role}</span>
        </span>
      </div>
      <span className="byline__divider" aria-hidden="true" />
      <p className="byline__dates">
        <Icon name="calendar" size={16} />
        <span>
          작성 <time dateTime={published}>{formatDate(published)}</time> · 수정 <time dateTime={updated}>{formatDate(updated)}</time>
        </span>
      </p>
    </div>
  )
}
