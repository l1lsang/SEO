import { PageHeader } from '../components/PageHeader'
import { PartPanel } from '../components/PartPanel'
import { PARTS } from '../content/parts'
import type { Crumb } from '../routes'

/** 가이드 허브: 14개 장 링크를 모두 펼쳐 보여 줍니다(대표페이지 역할). */
export function GuideHubPage({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        title="SEO 가이드 전체 목차"
        lead="기존 가이드 13개 장을 4개 파트로 묶고, AI 검색 최적화를 다섯 번째 파트로 더했습니다. 순서대로 읽어도, 필요한 장만 골라 읽어도 됩니다."
      />
      <div className="container hub-list" data-reveal="stagger">
        {PARTS.map((p) => (
          <PartPanel key={p.id} part={p} as="h2" />
        ))}
      </div>
    </>
  )
}
