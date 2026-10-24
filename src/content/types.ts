// 본문 블록. 문자열 안에서 **굵게**, `코드`, [링크](/경로) 표기를 쓸 수 있습니다.
export type Block =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'callout'; tone: 'info' | 'warning'; title?: string; text: string }
  | { type: 'code'; file: string; code: string }
  | { type: 'compare'; good: string[]; bad: string[] }
  | { type: 'example'; good: string; bad: string }
  | { type: 'flow'; steps: string[] }
  | { type: 'avoid'; items: string[] }
  | { type: 'hub' }
  | { type: 'checklist'; group: ChecklistGroupId }
  | { type: 'weeks' }

export type Section = { id: string; title: string; blocks: Block[] }

export type Reference = { label: string; href: string }

export type NavKey = 'guide' | 'google' | 'naver' | 'ai' | 'checklist' | 'roadmap'

export type PartId = 1 | 2 | 3 | 4 | 5

export type Chapter = {
  no: number
  slug: string
  path: string
  part: PartId
  nav: NavKey
  /** 목록·링크에 쓰는 짧은 제목 */
  title: string
  /** 목록에 붙는 한 줄 요약 */
  summary: string
  metaTitle: string
  description: string
  h1: string
  lead: string
  keyAnswer: string[]
  sections: Section[]
  references: Reference[]
  closing: { title: string; text: string }
  related: number[]
  published: string
  updated: string
}

export type ChecklistGroupId = 'common' | 'main' | 'detail' | 'ai'
