import type { NavKey, Reference } from './types'

export type ChannelKey = 'google' | 'naver' | 'ai'

export type Channel = {
  key: ChannelKey
  nav: NavKey
  path: string
  name: string
  metaTitle: string
  description: string
  h1: string
  lead: string
  /** 홈 카드에 쓰는 요약 */
  cardText: string
  cardLink: string
  steps: { title: string; text: string }[]
  related: number[]
  tools: Reference[]
}

const B = ' | SEO is fun'

export const CHANNELS: Channel[] = [
  {
    key: 'google',
    nav: 'google',
    path: '/google',
    name: '구글 검색',
    metaTitle: '구글 SEO 하는 법: 서치콘솔·CWV' + B,
    description:
      '구글 서치콘솔 등록과 사이트맵 제출, Core Web Vitals, 구조화 데이터 점검까지 구글 검색에 잘 잡히기 위한 작업을 순서대로 안내합니다.',
    h1: '구글 SEO 하는 법',
    lead: '서치콘솔로 색인과 실적을 확인하고, Core Web Vitals와 구조화 데이터로 기술 기반을 다집니다.',
    cardText: '서치콘솔로 색인과 실적을 확인하고, Core Web Vitals와 구조화 데이터로 기술 기반을 다집니다.',
    cardLink: '구글 SEO 가이드',
    steps: [
      { title: '서치콘솔 등록과 사이트맵 제출', text: '소유권을 확인한 뒤 사이트맵을 제출하고, "URL 검사"로 주요 페이지의 색인·렌더링을 확인합니다.' },
      { title: '색인 제외 사유 확인', text: '"페이지 색인 생성" 보고서에서 제외된 페이지와 사유를 보고, 링크 부족·중복·기술 오류를 고칩니다.' },
      { title: '모바일과 Core Web Vitals', text: '검색은 모바일 기준으로 평가됩니다. LCP 2.5초, INP 200ms, CLS 0.1 이하를 목표로 합니다.' },
      { title: '구조화 데이터 점검', text: '리치 결과 테스트로 오류를 확인합니다. 화면에 보이는 내용과 일치해야 합니다.' },
    ],
    related: [6, 7, 10, 5],
    tools: [
      { label: 'Google 서치콘솔', href: 'https://search.google.com/search-console' },
      { label: 'PageSpeed Insights', href: 'https://pagespeed.web.dev/' },
      { label: 'Google 리치 결과 테스트', href: 'https://search.google.com/test/rich-results' },
    ],
  },
  {
    key: 'naver',
    nav: 'naver',
    path: '/naver',
    name: '네이버 검색',
    metaTitle: '네이버 SEO 하는 법: 서치어드바이저' + B,
    description:
      '네이버 서치어드바이저 등록과 소유 확인, 사이트맵·RSS 제출, 웹 페이지 수집 요청, 오픈그래프 정비까지 네이버 검색 노출을 위한 작업을 정리했습니다.',
    h1: '네이버 SEO 하는 법',
    lead: '서치어드바이저에 사이트를 등록하고 사이트맵·RSS 제출, 웹 페이지 수집 요청으로 노출을 앞당깁니다.',
    cardText: '서치어드바이저에 사이트를 등록하고 사이트맵·RSS 제출, 웹 페이지 수집 요청으로 노출을 앞당깁니다.',
    cardLink: '네이버 SEO 가이드',
    steps: [
      { title: '사이트 등록·소유 확인', text: '서치어드바이저에 사이트를 추가하고 소유를 확인합니다.' },
      { title: '사이트맵·RSS 제출', text: '색인하고 싶은 URL만 담은 사이트맵과 RSS를 제출합니다.' },
      { title: '웹 페이지 수집 요청', text: '중요한 페이지는 "웹 페이지 수집"으로 수집을 요청합니다. 요청은 순서를 앞당길 뿐 노출을 보장하지 않습니다.' },
      { title: '진단 보고서 확인', text: '수집·노출 현황과 진단 결과를 정기적으로 확인합니다.' },
      { title: '오픈그래프·대표 이미지', text: '공유 미리보기용 title·description·이미지(권장 1200×630)를 정비합니다.' },
    ],
    related: [6, 7, 10, 3],
    tools: [
      { label: '네이버 서치어드바이저', href: 'https://searchadvisor.naver.com/' },
      { label: '네이버 서치어드바이저 — 웹마스터 가이드', href: 'https://searchadvisor.naver.com/guide' },
    ],
  },
  {
    key: 'ai',
    nav: 'ai',
    path: '/ai',
    name: 'AI 검색',
    metaTitle: 'AI 검색 최적화(GEO) 가이드 모음' + B,
    description:
      'AI 개요, 네이버 AI 브리핑, ChatGPT 검색, Perplexity에 인용되는 페이지를 만드는 방법과 크롤러 설정, 측정 방법을 한곳에 모았습니다.',
    h1: 'AI 검색 최적화 가이드',
    lead: 'AI 개요, 네이버 AI 브리핑, ChatGPT 검색이 답변 근거로 인용하도록, 질문에 바로 답하는 구조와 출처를 갖춥니다.',
    cardText: 'AI 개요, 네이버 AI 브리핑, ChatGPT 검색이 답변 근거로 인용하도록 질문에 바로 답하는 구조와 출처를 갖춥니다.',
    cardLink: 'AI 검색 가이드',
    steps: [
      { title: '검색용 AI 크롤러 허용', text: 'robots.txt에서 OAI-SearchBot, PerplexityBot 같은 검색용 크롤러를 막지 않았는지 확인합니다. 학습용 크롤러는 따로 결정합니다.' },
      { title: '질문에 첫 문장으로 답하기', text: '질문형 소제목 바로 아래 1~2문장에 결론을 씁니다. 정의는 "A는 B입니다" 형태로.' },
      { title: '인용하기 쉬운 단위', text: '비교는 표, 절차는 번호 목록으로. 수치에는 단위와 기준일을 함께 적습니다.' },
      { title: '출처와 작성자 명시', text: '공식 자료 링크, 작성자·감수자, 수정일을 표시합니다. AI도 신뢰 신호를 봅니다.' },
      { title: '엔티티 정보 일관성', text: '이름·주소·연락처·서비스명을 웹사이트, 지도, SNS에서 동일하게. Organization 또는 Person과 sameAs로 연결합니다.' },
      { title: 'JS 없이 읽히는 본문', text: '상당수 AI 크롤러는 자바스크립트를 실행하지 않습니다. 핵심 내용은 처음 받는 HTML에 넣습니다.' },
    ],
    related: [14, 5, 7, 9],
    tools: [
      { label: 'Google 검색 센터 — AI 기능과 웹사이트', href: 'https://developers.google.com/search/docs/appearance/ai-features?hl=ko' },
      { label: 'OpenAI — 크롤러 개요', href: 'https://platform.openai.com/docs/bots' },
      { label: 'Perplexity — 크롤러 안내', href: 'https://docs.perplexity.ai/guides/bots' },
    ],
  },
]

export const channelByKey = (key: ChannelKey) => CHANNELS.find((c) => c.key === key)!
