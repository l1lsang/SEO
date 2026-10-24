import type { PartId } from './types'

export type Part = { id: PartId; title: string; description: string }

export const PARTS: Part[] = [
  { id: 1, title: '기초 다지기', description: 'SEO가 무엇을 평가하는지, 내 페이지가 어떤 유형인지부터 잡습니다.' },
  { id: 2, title: '페이지 만들기', description: '대표페이지와 상세페이지를 템플릿대로 작성합니다.' },
  { id: 3, title: '기술과 신뢰', description: '검색엔진이 읽고 믿을 수 있는 사이트를 만듭니다.' },
  { id: 4, title: '운영과 실행', description: '등록·측정부터 출시 점검, 4주 로드맵까지 실행합니다.' },
  {
    id: 5,
    title: 'AI 검색 최적화',
    description: 'AI 개요, 네이버 AI 브리핑, ChatGPT 검색이 답변 근거로 인용하는 페이지의 조건.',
  },
]

/** 홈 슬라이더의 AI 파트에 보이는 14장 주제 */
export const AI_TOPICS = [
  { title: '검색용·학습용 크롤러 구분', href: '/guide/ai-search#robots' },
  { title: '질문에 첫 문장으로 답하기', href: '/guide/ai-search#writing' },
  { title: '출처와 엔티티 일관성', href: '/guide/ai-search#writing' },
  { title: 'AI 유입 측정', href: '/guide/ai-search#measure' },
]
