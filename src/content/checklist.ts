import type { ChecklistGroupId } from './types'

export type ChecklistGroup = {
  id: ChecklistGroupId
  label: string
  title: string
  items: { id: string; text: string }[]
}

const group = (id: ChecklistGroupId, label: string, title: string, items: string[]): ChecklistGroup => ({
  id,
  label,
  title,
  items: items.map((text, i) => ({ id: `${id}-${i + 1}`, text })),
})

export const CHECKLIST: ChecklistGroup[] = [
  group('common', '공통', '공통', [
    'title·description이 페이지마다 고유하다',
    'h1이 하나이고 소제목 계층이 논리적이다',
    '본문·제목이 JS 없이도 HTML에 들어 있다',
    'canonical이 자기 자신의 절대 URL이다',
    '없는 주소는 404, 이동 주소는 301이다',
    '사이트맵을 제출했고 robots.txt에 위치가 있다',
    '모바일에서 확인했고 LCP·CLS가 양호하다',
    '이미지에 alt가 있고 용량이 최적화됐다',
    'noindex 대상(관리자·감사 페이지)을 처리했다',
    '서치콘솔·서치어드바이저에 등록했다',
  ]),
  group('main', '대표', '대표페이지', [
    '브랜드명 검색 시 상위 노출된다',
    '핵심 서비스에서 상세페이지로 텍스트 링크가 있다',
    '회사(운영자) 정보·신뢰 요소·연락처가 확인된다',
    'Organization(개인은 Person) 구조화 데이터를 넣었다',
  ]),
  group('detail', '상세', '상세페이지', [
    '도입부에서 질문에 답한다',
    '고유한 정보·사례·출처가 있다',
    '작성자·작성일·수정일이 표시된다',
    '허브로 돌아가는 링크·관련 글이 있다',
    '다른 페이지와 같은 키워드를 노리지 않는다',
    'BreadcrumbList·Article 등 구조화 데이터를 확인했다',
  ]),
  group('ai', 'AI', 'AI 검색', [
    '검색용 AI 크롤러를 robots.txt에서 막지 않았다',
    '주요 질문에 첫 문장으로 답한다',
    '수치·주장에 출처와 기준일이 있다',
    '상호(이름)·주소·연락처가 모든 채널에서 같다',
  ]),
]

export const CHECKLIST_TOTAL = CHECKLIST.reduce((n, g) => n + g.items.length, 0)
