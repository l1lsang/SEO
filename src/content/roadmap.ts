export type Week = {
  label: string
  title: string
  tasks: { text: string; ai?: boolean }[]
  output: string
}

export const WEEKS: Week[] = [
  {
    label: '1주',
    title: '진단·설계',
    tasks: [
      { text: '검색의도·키워드 정리' },
      { text: '페이지 목록 작성 (대표/상세 구분)' },
      { text: '서치콘솔·서치어드바이저 등록' },
      { text: 'robots.txt AI 크롤러 정책 결정', ai: true },
    ],
    output: '페이지별 주 키워드 표',
  },
  {
    label: '2주',
    title: '대표페이지 정비',
    tasks: [
      { text: 'h1·핵심 서비스 링크·신뢰 요소' },
      { text: 'Organization 구조화 데이터' },
      { text: 'title·description 일괄 점검' },
      { text: '상호·주소·연락처 채널별 통일', ai: true },
    ],
    output: '개선된 대표페이지',
  },
  {
    label: '3주',
    title: '상세페이지 제작',
    tasks: [
      { text: '상세페이지 템플릿 확정' },
      { text: '핵심 상세 5~10개 작성·보강' },
      { text: '질문형 소제목·첫 문장 답변 반영', ai: true },
      { text: '내부 링크 연결·사이트맵 제출' },
    ],
    output: '상세페이지 세트',
  },
  {
    label: '4주',
    title: '점검·측정',
    tasks: [
      { text: '상태 코드·속도·모바일 점검' },
      { text: '색인 보고서 제외 사유 확인' },
      { text: 'GA4 AI 유입 세그먼트 추가', ai: true },
      { text: '지표 기준값 기록, 월간 루틴 시작' },
    ],
    output: '점검 리포트',
  },
]
