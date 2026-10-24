import { SITE } from '../site'
import type { Chapter, Reference } from './types'

const REF = {
  starter: { label: 'Google 검색 센터 — 검색엔진 최적화(SEO) 기본 가이드', href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko' },
  helpful: { label: 'Google 검색 센터 — 유용하고 신뢰할 수 있는 콘텐츠 만들기', href: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=ko' },
  aiFeatures: { label: 'Google 검색 센터 — AI 기능과 웹사이트', href: 'https://developers.google.com/search/docs/appearance/ai-features?hl=ko' },
  robots: { label: 'Google 검색 센터 — robots.txt 소개', href: 'https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=ko' },
  sitemaps: { label: 'Google 검색 센터 — 사이트맵 개요', href: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=ko' },
  canonical: { label: 'Google 검색 센터 — 중복 URL 통합', href: 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=ko' },
  jsSeo: { label: 'Google 검색 센터 — 자바스크립트 SEO 기본사항', href: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=ko' },
  cwv: { label: 'Google 검색 센터 — Core Web Vitals', href: 'https://developers.google.com/search/docs/appearance/core-web-vitals?hl=ko' },
  mobileFirst: { label: 'Google 검색 센터 — 모바일 중심 색인 생성', href: 'https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=ko' },
  titleLink: { label: 'Google 검색 센터 — 제목 링크', href: 'https://developers.google.com/search/docs/appearance/title-link?hl=ko' },
  snippet: { label: 'Google 검색 센터 — 스니펫과 meta description', href: 'https://developers.google.com/search/docs/appearance/snippet?hl=ko' },
  links: { label: 'Google 검색 센터 — 크롤링 가능한 링크', href: 'https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=ko' },
  structured: { label: 'Google 검색 센터 — 구조화 데이터 소개', href: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=ko' },
  article: { label: 'Google 검색 센터 — Article 구조화 데이터', href: 'https://developers.google.com/search/docs/appearance/structured-data/article?hl=ko' },
  organization: { label: 'Google 검색 센터 — Organization 구조화 데이터', href: 'https://developers.google.com/search/docs/appearance/structured-data/organization?hl=ko' },
  breadcrumb: { label: 'Google 검색 센터 — 탐색경로(BreadcrumbList)', href: 'https://developers.google.com/search/docs/appearance/structured-data/breadcrumb?hl=ko' },
  faqChange: { label: 'Google 검색 센터 블로그 — HowTo·FAQ 리치 결과 변경', href: 'https://developers.google.com/search/blog/2023/08/howto-faq-changes?hl=ko' },
  spam: { label: 'Google 검색 센터 — 스팸 정책', href: 'https://developers.google.com/search/docs/essentials/spam-policies?hl=ko' },
  crawlers: { label: 'Google 검색 센터 — Google 크롤러 개요(Google-Extended 포함)', href: 'https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers?hl=ko' },
  richTest: { label: 'Google 리치 결과 테스트', href: 'https://search.google.com/test/rich-results' },
  psi: { label: 'PageSpeed Insights', href: 'https://pagespeed.web.dev/' },
  gsc: { label: 'Google 서치콘솔', href: 'https://search.google.com/search-console' },
  naver: { label: '네이버 서치어드바이저', href: 'https://searchadvisor.naver.com/' },
  naverGuide: { label: '네이버 서치어드바이저 — 웹마스터 가이드', href: 'https://searchadvisor.naver.com/guide' },
  bing: { label: 'Bing 웹마스터 도구', href: 'https://www.bing.com/webmasters' },
  indexnow: { label: 'IndexNow', href: 'https://www.indexnow.org/' },
  openai: { label: 'OpenAI — 크롤러 개요 (OAI-SearchBot, GPTBot)', href: 'https://platform.openai.com/docs/bots' },
  perplexity: { label: 'Perplexity — 크롤러 안내 (PerplexityBot)', href: 'https://docs.perplexity.ai/guides/bots' },
  ogp: { label: 'The Open Graph protocol', href: 'https://ogp.me/' },
} satisfies Record<string, Reference>

const B = ' | SEO is fun'
const dates = { published: SITE.published, updated: SITE.updated }

export const CHAPTERS: Chapter[] = [
  {
    no: 1,
    slug: 'basics',
    path: '/guide/basics',
    part: 1,
    nav: 'guide',
    title: 'SEO 기본 개념',
    summary: '발견·선택·만족 세 가지 축',
    metaTitle: 'SEO 기본 개념: 발견·선택·만족' + B,
    description:
      'SEO의 세 가지 축인 발견·색인, 선택·클릭, 만족·신뢰를 목표와 주요 작업으로 정리했습니다. AI 답변 인용까지 이어지는 흐름과 이 가이드를 읽는 순서를 안내합니다.',
    h1: 'SEO 기본 개념: 검색엔진이 페이지를 고르는 세 가지 축',
    lead: 'SEO는 검색엔진이 찾고 이해하게 하기, 검색 결과에서 선택받기, 방문 후 만족시키기 세 가지로 나뉩니다. 각 축의 목표와 해야 할 일을 정리했습니다.',
    keyAnswer: [
      'SEO는 ① 발견·색인 ② 선택·클릭 ③ 만족·신뢰 세 축으로 나뉩니다.',
      '기술 작업은 평가받을 자격을 만들고, 실제 순위는 콘텐츠 품질이 좌우합니다.',
      '어떤 작업도 순위를 보장하지 않습니다. 검색한 사람에게 가장 도움이 되는 페이지를 목표로 하세요.',
    ],
    sections: [
      {
        id: 'three-axes',
        title: '1. SEO의 세 가지 축',
        blocks: [
          { type: 'p', text: 'SEO 작업은 목적에 따라 세 갈래로 나눌 수 있습니다. 어느 축이 약한지에 따라 손볼 곳이 달라집니다.' },
          {
            type: 'table',
            head: ['축', '목표', '주요 작업'],
            rows: [
              ['① 발견·색인', '검색엔진이 페이지를 찾고 저장', '사이트맵, 내부 링크, 올바른 상태 코드, robots/noindex 관리, 중복 URL 정리'],
              ['② 선택·클릭', '검색 결과에서 눈에 띄고 클릭됨', 'title, description, 구조화 데이터, 대표 이미지, URL'],
              ['③ 만족·신뢰', '방문자가 원하는 답을 얻고 머무름', '검색의도에 맞는 본문, 전문성·출처, 읽기 쉬운 구성, 빠른 속도, 명확한 다음 행동(CTA)'],
              ['④ 인용·답변', 'AI가 답변 근거로 페이지를 인용', '질문형 구조, 인용하기 쉬운 문장, 출처·수치, 엔티티 일관성 — [14장](/guide/ai-search)'],
            ],
          },
        ],
      },
      {
        id: 'ranking',
        title: '2. 검색엔진은 어떤 페이지를 올리나요?',
        blocks: [
          {
            type: 'p',
            text: '검색엔진은 결국 "이 검색어를 입력한 사람에게 가장 도움이 되는 페이지"를 위로 올립니다. 기술 작업은 그 평가를 받을 **자격**을 만들어 주고, 콘텐츠 품질이 실제 순위를 좌우합니다.',
          },
          {
            type: 'callout',
            tone: 'info',
            title: 'AI 검색도 같습니다',
            text: 'AI 개요나 ChatGPT 검색도 검색 색인과 웹 페이지를 근거로 답합니다. 세 축이 갖춰진 페이지가 인용될 가능성도 높습니다.',
          },
        ],
      },
      {
        id: 'how-to-read',
        title: '3. 이 가이드를 읽는 순서',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '[2장](/guide/page-types)에서 내 페이지가 대표페이지인지 상세페이지인지 먼저 정합니다.',
              '[3장](/guide/search-intent)에서 페이지마다 노릴 주 키워드를 정합니다.',
              '유형에 맞춰 [4장 대표페이지](/guide/main-page) 또는 [5장 상세페이지](/guide/detail-page)를 따라 작성합니다.',
              '[6장](/guide/on-page)과 [7장](/guide/technical)으로 온페이지·기술 항목을 점검합니다.',
              '출시 전에는 [체크리스트](/checklist)로, 이후에는 [10장](/guide/measure)의 지표로 개선합니다.',
            ],
          },
        ],
      },
    ],
    references: [REF.starter, REF.helpful, REF.naverGuide],
    closing: { title: '세 축 중 가장 약한 곳부터 고치세요.', text: '서치콘솔의 노출·클릭·색인 데이터를 보면 어느 축이 약한지 알 수 있습니다.' },
    related: [2, 3, 7],
    ...dates,
  },
  {
    no: 2,
    slug: 'page-types',
    path: '/guide/page-types',
    part: 1,
    nav: 'guide',
    title: '대표페이지와 상세페이지',
    summary: '역할 구분과 허브 & 스포크 구조',
    metaTitle: '대표페이지와 상세페이지 차이' + B,
    description:
      '대표페이지와 상세페이지의 정의, 역할, 노리는 검색어, 핵심 지표를 한 표로 비교하고 두 페이지를 잇는 허브 & 스포크 내부 링크 구조를 설명합니다.',
    h1: '대표페이지와 상세페이지, 무엇이 다를까요?',
    lead: '대표페이지와 상세페이지는 역할이 달라 SEO 방식도 다릅니다. 내 페이지가 어느 유형인지 먼저 정하면 해야 할 일이 분명해집니다.',
    keyAnswer: [
      '대표페이지는 브랜드와 넓은 키워드를 맡는 허브, 상세페이지는 구체적인 질문에 답하는 여러 개의 입구입니다.',
      '대표페이지는 상세페이지로, 상세페이지는 다시 대표페이지로 링크해 양방향 구조를 만듭니다.',
      '페이지 하나에 역할 하나. 섞이면 어느 검색어에서도 힘을 받기 어렵습니다.',
    ],
    sections: [
      {
        id: 'compare',
        title: '1. 한눈에 비교',
        blocks: [
          {
            type: 'table',
            head: ['구분', '대표페이지', '상세페이지'],
            rows: [
              ['정의', '사이트·서비스를 대표하는 입구. 홈, 서비스 소개, 분야별 랜딩, 카테고리 목록', '하나의 주제를 깊게 다루는 개별 페이지. 글, 사례, 상품, 후기, 가이드'],
              ['역할', '브랜드 신뢰 형성, 핵심 서비스 안내, 하위 페이지로 연결하는 **허브**', '구체적인 질문에 답하고 검색 유입을 만드는 **입구 여러 개**'],
              ['노리는 검색어', '브랜드명, 넓은 키워드 (예: "OO 학원", "서울 인테리어")', '구체적이고 긴 키워드 (예: "겨울 보일러 소음 원인", "30평 도배 비용")'],
              ['콘텐츠 성격', '상대적으로 안정적, 자주 바뀌지 않음', '지속적으로 추가·수정됨, 개수가 많음'],
              ['핵심 지표', '브랜드 검색 노출, 문의·전환율', '비브랜드 검색 유입, 체류, 하위 전환'],
              ['SEO 핵심', '명확한 정체성, 신뢰 요소, 구조화된 내부 링크', '검색의도 충족, 고유한 정보, 올바른 색인 관리'],
              ['AI 인용 포인트', '회사·서비스 정보의 일관성 (Organization, sameAs)', '질문에 바로 답하는 문장, 출처와 기준일이 있는 수치'],
            ],
          },
        ],
      },
      {
        id: 'hub-spoke',
        title: '2. 허브 & 스포크 구조',
        blocks: [
          {
            type: 'p',
            text: '대표페이지(허브)는 주제별로 상세페이지(스포크)를 링크로 모으고, 상세페이지는 다시 허브로 연결합니다. 이 양방향 구조가 검색엔진에는 "이 사이트는 이 주제를 깊이 다룬다"는 신호가 되고, 방문자에게는 다음에 볼 곳을 알려줍니다.',
          },
          { type: 'hub' },
          {
            type: 'list',
            items: [
              '대표페이지에서 주제별 상세페이지로 **텍스트 링크**를 겁니다.',
              '상세페이지에는 브레드크럼과 상위 허브로 돌아가는 링크를 둡니다.',
              '같은 주제의 상세페이지끼리는 문맥 속에서 서로 연결합니다.',
            ],
          },
        ],
      },
      {
        id: 'which-one',
        title: '3. 내 페이지는 어느 쪽인가요?',
        blocks: [
          {
            type: 'list',
            items: [
              '사이트·서비스 전체를 소개하거나 하위 페이지를 모아 보여 준다면 **대표페이지**입니다.',
              '하나의 질문이나 주제를 깊게 다룬다면 **상세페이지**입니다.',
              '애매하다면 노리는 검색어를 적어 보세요. 브랜드명·넓은 키워드면 대표, 구체적이고 긴 키워드면 상세입니다.',
            ],
          },
        ],
      },
    ],
    references: [REF.links, REF.starter],
    closing: { title: '유형을 정했다면 해당 장으로 넘어가세요.', text: '대표페이지는 4장, 상세페이지는 5장에 작성 템플릿이 있습니다.' },
    related: [4, 5, 8],
    ...dates,
  },
  {
    no: 3,
    slug: 'search-intent',
    path: '/guide/search-intent',
    part: 1,
    nav: 'guide',
    title: '검색의도와 키워드',
    summary: '4가지 검색의도, 페이지당 주 키워드 하나',
    metaTitle: '검색의도와 키워드 고르는 법' + B,
    description:
      '정보형·탐색형·비교형·행동형 4가지 검색의도와 각각에 맞는 페이지, 페이지당 주 키워드 하나 원칙, 서치콘솔로 개선할 키워드를 찾는 방법을 정리했습니다.',
    h1: '검색의도 4유형과 키워드 고르는 법',
    lead: '같은 키워드라도 사람마다 원하는 것이 다릅니다. 검색의도를 먼저 구분하고 페이지마다 주 키워드 하나를 정하세요.',
    keyAnswer: [
      '검색의도는 정보형·탐색형·비교형·행동형 4가지이고, 의도마다 알맞은 페이지 형식이 다릅니다.',
      '페이지 하나에 주 키워드 하나. 여러 페이지가 같은 키워드를 노리면 서로 순위를 깎아먹습니다.',
      '새 키워드보다 서치콘솔에서 이미 노출되는데 클릭이 적은 키워드부터 개선하세요.',
    ],
    sections: [
      {
        id: 'intents',
        title: '1. 검색의도 4유형',
        blocks: [
          {
            type: 'table',
            head: ['유형', '사용자가 원하는 것', '알맞은 페이지'],
            rows: [
              ['정보형', '알고 싶다 ("~란", "~방법", "~원인")', '상세 가이드·칼럼'],
              ['탐색형', '특정 사이트·브랜드를 찾는다', '홈, 대표페이지'],
              ['비교형', '고르려고 비교한다 ("추천", "비교", "후기")', '비교 글, 사례·후기 상세'],
              ['행동형', '바로 하고 싶다 ("상담", "신청", "구매")', '서비스 랜딩, 상품·서비스 상세'],
            ],
          },
        ],
      },
      {
        id: 'keywords',
        title: '2. 키워드 선정 원칙',
        blocks: [
          {
            type: 'list',
            items: [
              '**페이지 하나에 주 키워드 하나.** 같은 키워드를 여러 페이지가 노리면 서로 순위를 깎아먹습니다(키워드 잠식). 연관 표현은 한 페이지 안에서 자연스럽게 함께 다룹니다.',
              '검색창 자동완성, 연관 검색어, 검색 결과 하단 "관련 검색어"에서 실제 사용 표현을 수집합니다.',
              '구글 서치콘솔의 "검색어" 보고서에서 이미 노출되는데 클릭이 적은 키워드를 찾으면, 새 키워드를 찾기보다 먼저 개선할 대상이 됩니다.',
            ],
          },
        ],
      },
      {
        id: 'serp',
        title: '3. 검색 결과 1페이지 직접 보기',
        blocks: [
          {
            type: 'p',
            text: '검색 결과 1페이지를 직접 열어, 상위 페이지가 **어떤 형식(목록·가이드·상품)**이고 **무엇을 다루는지** 확인한 뒤 그보다 유용하게 만듭니다.',
          },
          {
            type: 'list',
            items: [
              '상위 페이지의 형식: 목록형인지, 가이드인지, 상품·서비스 페이지인지',
              '공통으로 다루는 소주제와 빠져 있는 내용',
              '검색 결과에 AI 개요나 질문 목록이 보이는지 — 질문형 답변이 필요하다는 신호',
            ],
          },
        ],
      },
    ],
    references: [REF.starter, REF.gsc, REF.naver],
    closing: { title: '키워드 표를 만들어 두면 이후 작업이 빨라집니다.', text: '페이지 목록 옆에 주 키워드와 검색의도를 적어 두세요. 4주 로드맵의 1주차 산출물입니다.' },
    related: [2, 5, 10],
    ...dates,
  },
  {
    no: 4,
    slug: 'main-page',
    path: '/guide/main-page',
    part: 2,
    nav: 'guide',
    title: '대표페이지 SEO',
    summary: '첫 화면 h1, 신뢰 요소, 텍스트 링크',
    metaTitle: '대표페이지 SEO 작성 방법' + B,
    description:
      '홈·서비스 소개처럼 사이트를 대표하는 페이지의 구성 템플릿과 점검 포인트를 정리했습니다. h1, 신뢰 요소, 텍스트 링크, Organization 구조화 데이터까지 다룹니다.',
    h1: '대표페이지 SEO: 홈과 서비스 페이지 만드는 법',
    lead: '대표페이지는 브랜드 신뢰를 만들고 상세페이지로 연결하는 허브입니다. 첫 화면, 신뢰 요소, 내부 링크 순서로 정비하세요.',
    keyAnswer: [
      '가장 먼저 달성할 목표는 브랜드명으로 검색했을 때 1위가 되는 것입니다.',
      '첫 화면 h1에 "누구를 위한 무엇인지"를 브랜드명과 함께 한 문장으로 씁니다.',
      '중요한 상세페이지로는 메뉴뿐 아니라 본문 텍스트 링크를 겁니다.',
    ],
    sections: [
      {
        id: 'template',
        title: '1. 대표페이지 구성 템플릿',
        blocks: [
          {
            type: 'table',
            head: ['영역', '작성 기준'],
            rows: [
              ['첫 화면', '`h1` 하나에 "누구를 위한 무엇인지"를 한 문장으로. 브랜드명 + 핵심 서비스가 함께 드러나게'],
              ['핵심 서비스 소개', '서비스·분야별 섹션 + 각 상세페이지로 가는 링크 (허브 역할)'],
              ['신뢰 요소', '실적·수치, 자격·인증, 담당자 소개, 고객 후기, 언론·협력 기관. 실제 확인 가능한 정보만'],
              ['자주 묻는 질문', '검색에 실제로 쓰이는 질문 형태로, 본문에 보이는 텍스트로 작성'],
              ['연락·행동 유도', '전화, 폼, 위치 정보를 쉽게 찾게. 회사 정보(상호, 주소, 연락처)는 모든 페이지 하단에 동일하게'],
              ['최신 콘텐츠', '최근 글·소식 링크를 걸어 새 페이지 발견과 사이트 활동 신호 제공'],
            ],
          },
        ],
      },
      {
        id: 'checkpoints',
        title: '2. 대표페이지 점검 포인트',
        blocks: [
          {
            type: 'list',
            items: [
              '**브랜드명으로 검색했을 때 1위가 되는 것**이 가장 먼저 달성할 목표입니다. 홈 `title` 앞부분에 브랜드명을 두고, 사이트 이름·로고·연락처 정보를 일관되게 유지합니다.',
              '글자가 이미지 안에만 있는 디자인은 검색엔진이 읽지 못합니다. 핵심 문구는 **실제 텍스트**로 넣습니다.',
              '키워드를 억지로 반복하지 않습니다. 한 화면에 같은 단어가 부자연스럽게 반복되면 오히려 품질이 낮게 평가됩니다.',
              '대표페이지에서 중요한 상세페이지로 **텍스트 링크**를 걸어 줍니다. 메뉴 링크만으로는 부족한 경우가 많습니다.',
              '구조화 데이터는 `Organization`(또는 업종에 맞는 `LocalBusiness` 등)과 `WebSite`를 사용합니다. 상호, 로고, 주소, 연락처, 공식 SNS 링크(`sameAs`)를 담습니다.',
            ],
          },
        ],
      },
      {
        id: 'schema',
        title: '3. 구조화 데이터 예시',
        blocks: [
          { type: 'p', text: '화면에 보이는 정보와 같은 값만 넣습니다. 보이지 않는 정보를 넣으면 제재 대상이 될 수 있습니다.' },
          {
            type: 'code',
            file: 'organization.json',
            code: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OO설비",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "telephone": "+82-2-000-0000",
  "sameAs": ["https://blog.naver.com/example"]
}`,
          },
          {
            type: 'callout',
            tone: 'info',
            title: '개인이 운영하는 사이트라면',
            text: '`Organization` 대신 `Person`(이름, 이메일, `sameAs`)을 사용합니다. 이 사이트도 Person으로 표시하고 있습니다.',
          },
        ],
      },
    ],
    references: [REF.organization, REF.structured, REF.starter],
    closing: { title: '대표페이지는 자주 바꾸지 않습니다.', text: '대신 최신 글·소식 링크로 새 페이지가 발견되도록 하세요.' },
    related: [2, 6, 9],
    ...dates,
  },
  {
    no: 5,
    slug: 'detail-page',
    path: '/guide/detail-page',
    part: 2,
    nav: 'guide',
    title: '상세페이지 SEO',
    summary: '핵심 답, 목차, 고유한 정보, 연결',
    metaTitle: '상세페이지 SEO 작성 템플릿' + B,
    description:
      '글·사례·상품 같은 상세페이지를 7단계 템플릿으로 작성하는 방법과 좋은 상세페이지의 조건, 피해야 할 것, 페이지 유형별 구조화 데이터를 정리했습니다.',
    h1: '상세페이지 SEO: 검색 유입을 만드는 글 작성 템플릿',
    lead: '상세페이지는 하나의 주제를 깊게 다루는 검색 유입의 입구입니다. 도입부 핵심 답부터 연결까지 7단계 템플릿을 따르세요.',
    keyAnswer: [
      '검색한 사람의 질문에 첫 화면에서 답하세요. 긴 인사말이나 배경 설명으로 시작하지 않습니다.',
      '다른 곳에 없는 고유한 정보, 직접 확인한 사실·수치·사례를 넣습니다.',
      '작성자·작성일·수정일·출처를 표시하고, 관련 글과 상위 허브로 연결합니다.',
    ],
    sections: [
      {
        id: 'template',
        title: '1. 상세페이지 작성 템플릿',
        blocks: [
          {
            type: 'table',
            head: ['순서', '작성 기준'],
            rows: [
              ['1. 제목(h1)', '검색어를 담은 구체적인 제목. 읽는 사람이 무엇을 얻는지 보이게'],
              ['2. 도입부', '처음 몇 문장 안에 **핵심 답**을 제시. 긴 인사말·배경 설명으로 시작하지 않기'],
              ['3. 목차', '긴 글은 목차(앵커 링크) 제공. 소제목(`h2`, `h3`)이 목차 역할'],
              ['4. 본문', '소제목마다 한 가지 주제. 근거·수치·사례·이미지로 구체화. 다른 곳에 없는 **고유한 정보** 포함'],
              ['5. 신뢰 정보', '작성자·감수자, 작성일·수정일, 출처 표기'],
              ['6. 마무리', '요약 + 다음 행동(문의, 관련 서비스 보기)'],
              ['7. 연결', '관련 글 링크, 상위 허브(카테고리·대표페이지)로 돌아가는 링크, 브레드크럼'],
            ],
          },
          { type: 'callout', tone: 'info', text: '지금 보고 계신 이 페이지도 같은 7단계 템플릿으로 만들었습니다.' },
        ],
      },
      {
        id: 'good-page',
        title: '2. 좋은 상세페이지의 조건',
        blocks: [
          {
            type: 'compare',
            good: [
              '검색한 사람의 질문에 **첫 화면에서** 답하기',
              '사실·수치·사례 등 **직접 확인한 정보** 넣기',
              '이미지에 설명 `alt`, 파일명도 내용에 맞게',
              '수정할 때 수정일 갱신, 오래된 정보 점검',
              '유사 페이지는 합치거나 서로 차별화',
            ],
            bad: [
              '글 수만 늘리는 **얇은 콘텐츠**(비슷한 문장 복붙)',
              '업체명·지역명만 바꾼 대량 생성 페이지',
              '다른 사이트 글 재가공, 출처 없는 통계',
              '제목과 다른 내용, 과장·낚시성 문구',
              '검색어를 억지로 나열한 문장',
            ],
          },
        ],
      },
      {
        id: 'schema',
        title: '3. 페이지 유형별 구조화 데이터',
        blocks: [
          {
            type: 'table',
            head: ['페이지 유형', '권장 스키마', '비고'],
            rows: [
              ['글·칼럼·사례', '`Article` / `BlogPosting`', '제목, 작성자, 발행일·수정일, 대표 이미지'],
              ['상품', '`Product` + `Offer`', '가격·재고·평점은 페이지에 실제 보이는 값과 일치해야 함'],
              ['매장·지점', '`LocalBusiness`', '주소, 영업시간, 전화번호'],
              ['계층 경로', '`BreadcrumbList`', '모든 상세페이지에 권장'],
              ['FAQ', '`FAQPage`', '구글이 리치 결과를 정부·의료 사이트 위주로만 보여주므로 노출 효과는 제한적. 본문 FAQ 자체는 방문자에게 유용'],
            ],
          },
          {
            type: 'callout',
            tone: 'warning',
            text: '구조화 데이터는 화면에 보이는 내용과 반드시 일치해야 하며, 보이지 않는 정보를 넣으면 제재 대상이 될 수 있습니다. 적용 후 구글 "리치 결과 테스트"로 오류를 확인하세요.',
          },
        ],
      },
    ],
    references: [REF.helpful, REF.article, REF.breadcrumb, REF.faqChange, REF.richTest],
    closing: { title: '템플릿은 확정하고, 내용은 계속 보강하세요.', text: '수정할 때는 수정일을 갱신하고 오래된 정보를 점검합니다.' },
    related: [4, 6, 14],
    ...dates,
  },
  {
    no: 6,
    slug: 'on-page',
    path: '/guide/on-page',
    part: 2,
    nav: 'guide',
    title: '온페이지 작성 규칙',
    summary: 'title·description·h1·URL·canonical',
    metaTitle: '온페이지 SEO 작성 규칙' + B,
    description:
      'title·meta description·h1·h2·URL·본문·이미지 alt·링크·canonical·Open Graph까지 페이지 안에서 다루는 요소별 작성 규칙을 좋은 예와 나쁜 예로 정리했습니다.',
    h1: '온페이지 작성 규칙: title부터 canonical까지',
    lead: 'title, description, 제목, URL, 이미지, 링크, canonical처럼 페이지 안에서 직접 다루는 요소의 작성 규칙입니다.',
    keyAnswer: [
      'title은 페이지마다 고유하게, 핵심어를 앞에, 브랜드는 뒤에 두고 25~35자 안팎으로 씁니다.',
      'h1은 페이지당 하나, h2·h3는 목차처럼 논리적인 계층으로 씁니다.',
      'canonical은 자기 자신의 절대 URL을 지정하고, URL은 한번 정하면 바꾸지 않습니다.',
    ],
    sections: [
      {
        id: 'title',
        title: '1. title과 meta description',
        blocks: [
          {
            type: 'table',
            head: ['요소', '규칙'],
            rows: [
              ['title', '페이지마다 고유. 핵심어를 앞쪽에. 브랜드는 뒤에. 25~35자 안팎(검색 결과에서 잘리지 않는 정도). 클릭하고 싶은 이유 포함'],
              ['meta description', '순위에 직접 영향은 작지만 **클릭률**에 영향. 페이지 내용 요약 80~120자 안팎, 페이지마다 고유, 행동 유도 문구'],
            ],
          },
          { type: 'example', good: '겨울 보일러 소음 원인 5가지와 해결법 | OO설비', bad: '홈 | 홈페이지 | OO설비 보일러 수리 설치 교체' },
          {
            type: 'p',
            text: 'description 예: "소음이 나는 이유를 유형별로 정리하고, 직접 점검할 수 있는 방법과 수리가 필요한 경우를 안내합니다."',
          },
        ],
      },
      {
        id: 'headings',
        title: '2. 제목 구조와 URL',
        blocks: [
          {
            type: 'table',
            head: ['요소', '규칙', '예시'],
            rows: [
              ['h1', '페이지당 **하나**. title과 비슷하되 완전히 같을 필요는 없음', '겨울철 보일러 소음, 원인별로 확인하기'],
              ['h2·h3', '목차처럼 논리적 계층. 디자인용으로 크기만 키우려 쓰지 않기', 'h2 원인 1 · h3 확인 방법'],
              ['URL', '짧고 읽기 쉽게, 영문 소문자·하이픈 권장. 한번 정하면 **바꾸지 않음**. 날짜·불필요한 파라미터 지양', '`/guide/boiler-noise`'],
            ],
          },
        ],
      },
      {
        id: 'body',
        title: '3. 본문, 이미지, 링크',
        blocks: [
          {
            type: 'table',
            head: ['요소', '규칙', '예시'],
            rows: [
              ['본문', '중복 없이 고유하게. 주 키워드는 title·h1·도입부에 자연스럽게, 나머지는 문맥 속에서', '-'],
              ['이미지', '`alt`에 이미지 설명, 파일명에 의미, 적절한 크기·최신 포맷(WebP/AVIF), 지연 로딩', '`alt="보일러 압력계 확인 방법"`'],
              ['링크', '앵커 텍스트는 "여기 클릭"이 아닌 **도착 페이지 내용**. 외부 출처 링크도 신뢰도에 도움', '"보일러 압력 점검 방법 보기"'],
            ],
          },
        ],
      },
      {
        id: 'canonical',
        title: '4. canonical과 Open Graph',
        blocks: [
          {
            type: 'table',
            head: ['요소', '규칙'],
            rows: [
              ['canonical', '자기 자신의 **절대 URL**을 지정. 파라미터·슬래시 변형이 있어도 대표 주소를 알려줌'],
              ['Open Graph', 'SNS·메신저 공유 미리보기용. title, description, 이미지(권장 1200×630)'],
            ],
          },
          { type: 'code', file: 'head.html', code: '<link rel="canonical" href="https://example.com/guide/boiler-noise">' },
          {
            type: 'callout',
            tone: 'info',
            title: 'meta keywords는 쓰지 않아도 됩니다',
            text: '구글은 meta keywords를 사용하지 않습니다. 시간을 들일 곳은 title, description, 본문입니다.',
          },
        ],
      },
    ],
    references: [REF.titleLink, REF.snippet, REF.canonical, REF.ogp],
    closing: { title: '템플릿을 쓰더라도 제목·요약은 변수로.', text: '모든 페이지가 같은 title·description이 되지 않도록 글 제목과 요약을 변수로 넣으세요.' },
    related: [5, 7, 12],
    ...dates,
  },
  {
    no: 7,
    slug: 'technical',
    path: '/guide/technical',
    part: 3,
    nav: 'guide',
    title: '기술 SEO 필수 항목',
    summary: '상태 코드, robots.txt, 사이트맵, CWV',
    metaTitle: '기술 SEO 필수 항목 체크' + B,
    description:
      '상태 코드, robots.txt와 noindex, 사이트맵, 중복 URL 정리, 렌더링, Core Web Vitals(LCP·INP·CLS)까지 기술 SEO 필수 항목과 기준을 정리했습니다.',
    h1: '기술 SEO 필수 항목: 크롤링·색인·속도',
    lead: '검색엔진이 페이지를 찾고 저장하려면 상태 코드, robots.txt, 사이트맵, 렌더링이 바르게 설정돼 있어야 합니다. 모바일과 속도도 함께 점검하세요.',
    keyAnswer: [
      '있는 페이지는 200, 옮긴 페이지는 301, 없는 페이지는 진짜 404를 반환하세요.',
      'robots.txt로 막은 페이지의 noindex는 읽히지 않습니다. 색인 제외가 목적이면 noindex만 쓰세요.',
      'title·본문·링크는 자바스크립트 실행 전 HTML에도 있어야 안전합니다.',
    ],
    sections: [
      {
        id: 'crawl',
        title: '1. 크롤링과 색인',
        blocks: [
          {
            type: 'table',
            head: ['항목', '기준'],
            rows: [
              ['상태 코드', '있는 페이지 200, 옮긴 페이지 301, 없는 페이지 **진짜 404**(내용은 "없음"인데 200으로 응답하는 soft 404 금지), 영구 삭제 410'],
              ['robots.txt', '크롤링 허용 범위. 관리자·내부 검색 결과 등만 차단하고 **CSS·JS는 차단하지 않기**'],
              ['noindex', '검색에 나오면 안 되는 페이지(감사·완료 페이지, 관리자, 광고 전용 랜딩)에 사용. **robots.txt로 막은 페이지의 noindex는 읽히지 않으므로** 둘을 함께 쓰지 않기'],
              ['사이트맵', '색인하고 싶은 URL만 포함, `lastmod`는 실제 수정일. 한 파일 최대 5만 URL. 서치콘솔·서치어드바이저에 제출하고 robots.txt에 위치 표기'],
              ['중복 URL 정리', 'http/https, www/non-www, 끝 슬래시, 파라미터 변형은 301 또는 canonical로 하나로 통일'],
              ['렌더링', 'title, 본문, 링크는 **JavaScript 실행 전 HTML**에도 있는 것이 안전. 클라이언트에서만 그려지는 페이지는 색인이 늦거나 누락될 수 있음'],
            ],
          },
        ],
      },
      {
        id: 'robots',
        title: '2. robots.txt 예시',
        blocks: [
          {
            type: 'code',
            file: 'robots.txt',
            code: `# 관리자·내부 검색 결과만 차단
User-agent: *
Disallow: /admin/
Disallow: /search

Sitemap: https://example.com/sitemap.xml`,
          },
          {
            type: 'callout',
            tone: 'warning',
            title: 'robots.txt와 noindex를 함께 쓰지 마세요',
            text: '색인 제외가 목적이면 robots.txt로 막지 말고 noindex만 사용합니다. 막혀 있으면 검색엔진이 noindex를 읽지 못합니다.',
          },
        ],
      },
      {
        id: 'cwv',
        title: '3. 모바일과 속도 (Core Web Vitals)',
        blocks: [
          {
            type: 'table',
            head: ['지표', '좋은 기준', '개선 방법'],
            rows: [
              ['LCP (최대 콘텐츠 표시)', '2.5초 이하', '대표 이미지 최적화·크기 지정, 불필요한 스크립트 지연, 서버 응답 단축'],
              ['INP (반응성)', '200ms 이하', '무거운 JS 분할, 서드파티 스크립트 최소화'],
              ['CLS (화면 흔들림)', '0.1 이하', '이미지·광고 영역 크기 미리 지정, 폰트 로딩 방식 정리'],
            ],
          },
          {
            type: 'list',
            items: [
              '검색은 모바일 기준으로 평가됩니다(모바일 우선 색인). 모바일에서 글자 크기, 버튼 간격, 가로 스크롤을 점검하세요.',
              'HTTPS 필수. 혼합 콘텐츠(https 페이지에 http 이미지) 경고가 없게 합니다.',
              '측정 도구: PageSpeed Insights, 서치콘솔의 "Core Web Vitals" 보고서.',
            ],
          },
        ],
      },
    ],
    references: [REF.robots, REF.sitemaps, REF.canonical, REF.jsSeo, REF.cwv, REF.mobileFirst, REF.psi],
    closing: { title: '출시 전과 큰 개편 후에는 꼭 측정하세요.', text: 'PageSpeed Insights와 서치콘솔 Core Web Vitals 보고서로 확인합니다.' },
    related: [8, 10, 14],
    ...dates,
  },
  {
    no: 8,
    slug: 'internal-links',
    path: '/guide/internal-links',
    part: 3,
    nav: 'guide',
    title: '내부 링크와 사이트 구조',
    summary: '3클릭 이내 도달, 고아 페이지 없애기',
    metaTitle: '내부 링크와 사이트 구조 설계' + B,
    description:
      '모든 중요한 페이지를 홈에서 3클릭 이내로, 고아 페이지 없애기, 브레드크럼, 문맥 속 관련 글 링크, 목록 페이지 canonical까지 내부 링크 설계 원칙을 정리했습니다.',
    h1: '내부 링크와 사이트 구조: 3클릭 안에 닿게',
    lead: '내부 링크는 검색엔진이 페이지를 발견하는 길이자 중요도를 판단하는 신호입니다. 방문자에게는 다음에 볼 곳을 알려줍니다.',
    keyAnswer: [
      '모든 중요한 페이지는 홈에서 3번 이내 클릭으로 도달할 수 있게 합니다.',
      '사이트맵에만 있고 링크가 없는 고아 페이지는 중요도가 낮게 평가됩니다.',
      '링크는 버튼의 JS 이동이 아니라 일반 `<a href>` 링크로 만듭니다.',
    ],
    sections: [
      {
        id: 'principles',
        title: '1. 내부 링크 5원칙',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '**모든 중요한 페이지는 홈에서 3번 이내 클릭**으로 도달할 수 있게 합니다.',
              '링크가 하나도 없는 **고아 페이지**가 없게 합니다. 사이트맵에만 있고 링크가 없으면 중요도가 낮게 평가됩니다.',
              '브레드크럼(홈 > 카테고리 > 글)으로 계층을 보여주고 구조화 데이터와 함께 씁니다.',
              '글 안에 관련 글 링크를 **문맥 속에서** 자연스럽게 넣습니다. 하단에 "관련 글" 목록도 유용합니다.',
              '목록·카테고리 페이지가 여러 쪽이면 각 쪽이 자기 자신을 canonical로 하고, 상세페이지로 가는 링크는 일반 `<a href>` 링크로 만듭니다(버튼의 JS 이동만 쓰지 않기).',
            ],
          },
        ],
      },
      {
        id: 'anchor',
        title: '2. 앵커 텍스트 쓰는 법',
        blocks: [
          { type: 'p', text: '앵커 텍스트는 "여기 클릭"이 아니라 **도착 페이지의 내용**을 알려줘야 합니다. 신뢰할 만한 외부 출처로 가는 링크도 신뢰도에 도움이 됩니다.' },
          { type: 'example', good: '보일러 압력 점검 방법 보기', bad: '여기 클릭' },
        ],
      },
      {
        id: 'structure',
        title: '3. 이 사이트의 구조',
        blocks: [
          {
            type: 'p',
            text: 'SEO is fun도 같은 원칙으로 만들었습니다. 홈 → [가이드 목록](/guide) → 각 장으로 내려가고, 각 장에는 가이드 목록으로 돌아가는 링크와 브레드크럼, 관련 장 링크가 있습니다.',
          },
          { type: 'hub' },
        ],
      },
    ],
    references: [REF.links, REF.breadcrumb, REF.starter],
    closing: { title: '새 글을 쓰면 기존 글에서 링크를 거세요.', text: '관련 있는 기존 글의 본문에서 새 글로 연결하면 발견이 빨라집니다.' },
    related: [2, 7, 4],
    ...dates,
  },
  {
    no: 9,
    slug: 'eeat',
    path: '/guide/eeat',
    part: 3,
    nav: 'guide',
    title: '콘텐츠 품질과 신뢰',
    summary: 'E-E-A-T를 페이지에서 보이게',
    metaTitle: 'E-E-A-T 콘텐츠 품질과 신뢰' + B,
    description:
      '경험·전문성·권위·신뢰(E-E-A-T) 신호를 페이지에 구현하는 방법과 법률·의료·금융처럼 사람의 건강·재산·권리에 영향을 주는 분야에서 더 지켜야 할 기준을 정리했습니다.',
    h1: '콘텐츠 품질과 신뢰: E-E-A-T를 페이지에서 보이게',
    lead: '구글은 경험, 전문성, 권위, 신뢰(E-E-A-T)를 품질 판단의 틀로 사용합니다. 점수를 직접 올리는 설정은 없고, 신호를 페이지에서 확인 가능하게 만드는 것이 방법입니다.',
    keyAnswer: [
      'E-E-A-T를 직접 올리는 설정은 없습니다. 신호를 페이지에서 확인 가능하게 만드세요.',
      '직접 해 본 사례, 작성자·감수자, 출처 링크, 운영자 정보·연락처가 대표적인 신호입니다.',
      '건강·재산·권리에 영향을 주는 분야는 단정·보장 표현을 피하고 근거를 분명히 합니다.',
    ],
    sections: [
      {
        id: 'signals',
        title: '1. E-E-A-T 신호와 구현 방법',
        blocks: [
          {
            type: 'table',
            head: ['신호', '구현 방법'],
            rows: [
              ['경험', '직접 수행·관찰한 사례, 실제 사진·결과, 구체적인 상황 설명'],
              ['전문성', '작성자·감수자 이름과 자격·경력, 전문 용어를 쉽게 풀어 설명'],
              ['권위', '공식 자료·법령·논문 등 **출처 링크**, 다른 신뢰할 만한 사이트의 인용·언급'],
              ['신뢰', '회사(운영자) 정보·연락처·정책 페이지, 개인정보처리방침, 수정일과 정정 이력, 보안 연결'],
            ],
          },
        ],
      },
      {
        id: 'ymyl',
        title: '2. 민감 분야는 기준이 더 높습니다',
        blocks: [
          {
            type: 'p',
            text: '법률·의료·금융처럼 사람의 건강·재산·권리에 영향을 주는 분야는 검색엔진이 더 엄격하게 평가합니다. 결과를 단정하거나 보장하는 표현을 피하고, 근거·출처·작성자를 분명히 하며, 광고·표시 관련 규정도 함께 점검하세요.',
          },
          { type: 'example', good: '상황에 따라 돌려받을 수 있는 경우가 있으며, 정확한 판단은 전문가 상담이 필요합니다.', bad: '반드시 돌려받을 수 있습니다. 100% 해결!' },
        ],
      },
      {
        id: 'this-site',
        title: '3. 이 사이트에 적용한 것',
        blocks: [
          {
            type: 'list',
            items: [
              '모든 글에 작성자와 작성일·수정일을 표시합니다.',
              '주장과 수치에는 공식 문서 링크를 붙입니다.',
              '정정 요청은 이메일로 받고, 반영하면 수정일을 갱신합니다.',
            ],
          },
        ],
      },
    ],
    references: [REF.helpful, REF.spam],
    closing: { title: '신뢰는 한 페이지가 아니라 사이트 전체에서 쌓입니다.', text: '소개 페이지, 연락처, 정책 페이지까지 함께 갖추세요.' },
    related: [5, 4, 14],
    ...dates,
  },
  {
    no: 10,
    slug: 'measure',
    path: '/guide/measure',
    part: 4,
    nav: 'guide',
    title: '등록·측정·개선',
    summary: '서치콘솔·서치어드바이저와 월간 지표',
    metaTitle: '서치콘솔·서치어드바이저 등록과 측정' + B,
    description:
      '구글 서치콘솔, 네이버 서치어드바이저, Bing 웹마스터 도구 등록 절차와 GA4 측정, 매달 볼 지표의 해석과 대응, 한 번에 하나씩 바꾸는 개선 원칙을 정리했습니다.',
    h1: '등록·측정·개선: 검색엔진에 알리고 지표로 고치기',
    lead: '사이트를 검색엔진에 등록하고, 매달 같은 지표를 보며 한 번에 하나씩 개선합니다.',
    keyAnswer: [
      '서치콘솔·서치어드바이저에 사이트를 등록하고 사이트맵을 제출합니다.',
      '새 페이지 색인은 보통 며칠에서 몇 주가 걸리며, 색인 요청은 순서만 앞당깁니다.',
      '개선은 한 번에 하나씩 바꾸고 2~4주 뒤 결과를 비교합니다.',
    ],
    sections: [
      {
        id: 'register',
        title: '1. 검색엔진에 사이트 알리기',
        blocks: [
          {
            type: 'table',
            head: ['도구', '할 일'],
            rows: [
              ['구글 서치콘솔', '사이트 소유권 확인 → 사이트맵 제출 → "URL 검사"로 주요 페이지의 색인·렌더링 확인 → "페이지 색인 생성" 보고서로 제외 사유 확인'],
              ['네이버 서치어드바이저', '사이트 등록·소유 확인 → 사이트맵·RSS 제출 → 중요한 페이지는 "웹 페이지 수집" 요청 → 진단 보고서 확인'],
              ['Bing 웹마스터 도구', '서치콘솔 설정 가져오기 가능. 새 URL 알림 프로토콜(IndexNow) 사용 가능'],
              ['GA4 등 분석 도구', '검색 유입 방문자의 이동·전환(문의, 신청) 측정'],
            ],
          },
          { type: 'p', text: '새 페이지가 색인되기까지 보통 며칠에서 몇 주가 걸립니다. 색인 요청은 순서를 앞당길 뿐 색인과 순위를 보장하지 않습니다.' },
        ],
      },
      {
        id: 'metrics',
        title: '2. 매달 볼 지표',
        blocks: [
          {
            type: 'table',
            head: ['지표', '해석과 대응'],
            rows: [
              ['노출수는 높고 클릭률 낮음', '순위는 있으나 매력이 부족 → **title·description 개선**'],
              ['평균 순위 8~20위', '1페이지 문턱 → 본문 보강, 내부 링크 추가, 관련 질문 답변 추가'],
              ['색인 안 됨·"발견됨"에 머묾', '링크 부족, 얇거나 중복된 콘텐츠, 기술 오류 → 보고서의 사유 확인'],
              ['클릭은 있으나 전환 낮음', '검색의도와 페이지 불일치, CTA 불명확 → 첫 화면·행동 유도 개선'],
              ['브랜드 검색 증가', '인지도 지표. 대표페이지 신뢰 요소와 콘텐츠 홍보 효과 확인'],
            ],
          },
          {
            type: 'callout',
            tone: 'warning',
            title: '한 번에 하나씩',
            text: '개선은 한 번에 하나씩 바꾸고 2~4주 뒤 결과를 비교하세요. 여러 가지를 동시에 바꾸면 무엇이 효과였는지 알 수 없습니다.',
          },
        ],
      },
      {
        id: 'ai-traffic',
        title: '3. AI 유입도 따로 보기',
        blocks: [
          {
            type: 'p',
            text: 'GA4에서 chatgpt.com, perplexity.ai 같은 세션 소스를 묶어 보면 AI 검색 유입 추이를 볼 수 있습니다. 자세한 방법은 [14장](/guide/ai-search#measure)에 있습니다.',
          },
        ],
      },
    ],
    references: [REF.gsc, REF.naver, REF.bing, REF.indexnow],
    closing: { title: '지표 기준값을 먼저 기록하세요.', text: '비교할 기준이 있어야 개선 효과를 판단할 수 있습니다.' },
    related: [7, 11, 13],
    ...dates,
  },
  {
    no: 11,
    slug: 'checklist',
    path: '/checklist',
    part: 4,
    nav: 'checklist',
    title: '출시 전 체크리스트',
    summary: '공통·대표·상세·AI 24개 항목',
    metaTitle: 'SEO 출시 전 체크리스트 24항목' + B,
    description:
      'title·description, h1, canonical, 상태 코드, 사이트맵부터 AI 크롤러 허용까지 출시 전에 확인할 24개 항목을 공통·대표·상세·AI로 나눴습니다. 체크 상태가 저장됩니다.',
    h1: '출시 전 SEO 체크리스트 24항목',
    lead: '공통 10개, 대표페이지 4개, 상세페이지 6개, AI 검색 4개 항목입니다. 체크한 내용은 이 브라우저에 저장됩니다.',
    keyAnswer: [
      '공통 항목부터 확인하고, 페이지 유형에 맞는 항목을 이어서 봅니다.',
      'AI 검색 4개 항목은 크롤러 허용, 첫 문장 답변, 출처·기준일, 연락처 일관성입니다.',
      '체크 표시는 이 브라우저에만 저장되며 어디로도 전송되지 않습니다.',
    ],
    sections: [
      { id: 'common', title: '1. 공통 (10)', blocks: [{ type: 'checklist', group: 'common' }] },
      { id: 'main', title: '2. 대표페이지 (4)', blocks: [{ type: 'checklist', group: 'main' }] },
      { id: 'detail', title: '3. 상세페이지 (6)', blocks: [{ type: 'checklist', group: 'detail' }] },
      { id: 'ai', title: '4. AI 검색 (4)', blocks: [{ type: 'checklist', group: 'ai' }] },
    ],
    references: [REF.gsc, REF.naver, REF.richTest, REF.psi],
    closing: { title: '체크가 끝나면 등록과 측정으로.', text: '10장의 매달 볼 지표로 출시 후 변화를 확인하세요.' },
    related: [10, 13, 12],
    ...dates,
  },
  {
    no: 12,
    slug: 'mistakes',
    path: '/guide/mistakes',
    part: 4,
    nav: 'guide',
    title: '자주 하는 실수',
    summary: '순위를 깎는 8가지 실수와 대응',
    metaTitle: 'SEO 자주 하는 실수 8가지' + B,
    description:
      '모든 페이지가 같은 title, 지역명만 바꾼 대량 페이지, 잦은 URL 변경, robots.txt와 noindex 동시 사용 등 SEO에서 자주 하는 실수 8가지와 대응 방법을 정리했습니다.',
    h1: 'SEO 자주 하는 실수 8가지와 대응',
    lead: '순위를 올리려다 오히려 깎는 실수들입니다. 하나씩 확인해 보세요.',
    keyAnswer: [
      '고유한 정보가 없는 페이지는 만들지 말고, 비슷한 페이지는 합치세요.',
      '색인 제외가 목적이면 robots.txt로 막지 말고 noindex만 사용합니다.',
      '키워드 도배·링크 구매 같은 조작은 순위 하락과 검색 제외 위험이 있습니다.',
    ],
    sections: [
      {
        id: 'list',
        title: '1. 실수와 대응',
        blocks: [
          {
            type: 'table',
            head: ['실수', '대응'],
            rows: [
              ['모든 페이지가 같은 title·description', '페이지 내용에 맞춰 개별 작성. 템플릿 사용 시에도 글 제목·요약을 변수로'],
              ['페이지를 대량 복제(지역명·업체명만 교체)', '각 페이지에 고유한 정보가 없으면 만들지 않기. 비슷한 페이지는 통합'],
              ['URL을 수시로 변경', '한번 정한 URL 유지. 변경이 불가피하면 301 리다이렉트'],
              ['robots.txt로 막고 noindex도 사용', '색인 제외가 목적이면 차단하지 않고 noindex만 사용'],
              ['핵심 문구를 이미지로만 제작', '텍스트로 넣고 이미지는 보조. 이미지에는 alt'],
              ['속도·모바일 점검 누락', '출시 전과 큰 개편 후 PageSpeed Insights로 측정'],
              ['순위 추적만 하고 전환을 안 봄', '유입 → 문의·구매까지 지표를 연결해 판단'],
              ['단기 순위를 위해 과장·조작(키워드 도배, 링크 구매)', '검색엔진 스팸 정책 위반으로 순위 하락·제외 위험. 정공법 유지'],
            ],
          },
        ],
      },
      {
        id: 'ai-mistakes',
        title: '2. AI 검색에서 새로 생긴 실수',
        blocks: [
          {
            type: 'avoid',
            items: [
              'AI에게만 보이도록 숨긴 텍스트나 지시 문구 넣기',
              '비슷한 페이지를 대량으로 생성해 개수만 늘리기',
              '출처 없는 통계, "100% 노출 보장" 같은 과장 표현',
              'llms.txt만 만들고 기본 SEO는 건너뛰기',
            ],
          },
        ],
      },
    ],
    references: [REF.spam, REF.helpful],
    closing: { title: '정공법이 가장 빠릅니다.', text: '검색엔진 스팸 정책을 한 번 읽어 두면 피해야 할 것이 분명해집니다.' },
    related: [6, 7, 9],
    ...dates,
  },
  {
    no: 13,
    slug: 'roadmap',
    path: '/roadmap',
    part: 4,
    nav: 'roadmap',
    title: '4주 실행 로드맵',
    summary: '주차별 작업과 산출물',
    metaTitle: 'SEO 4주 실행 로드맵과 산출물' + B,
    description:
      '검색의도·키워드 정리부터 대표페이지 정비, 상세페이지 제작, 기술 점검과 AI 유입 측정까지 4주 동안 할 일과 주차별 산출물을 정리했습니다.',
    h1: 'SEO 4주 실행 로드맵',
    lead: '4주 동안 할 일과 주차별 산출물입니다. ✦ 표시는 새로 추가한 AI 검색 작업입니다.',
    keyAnswer: [
      '1주는 키워드·페이지 목록, 2주는 대표페이지, 3주는 상세페이지, 4주는 기술 점검과 측정입니다.',
      '주차마다 산출물을 남겨야 다음 단계로 넘어가기 쉽습니다.',
      '4주 뒤에는 매달 같은 지표를 보는 개선 루틴을 시작합니다.',
    ],
    sections: [
      { id: 'weeks', title: '1. 주차별 작업', blocks: [{ type: 'weeks' }] },
      {
        id: 'after',
        title: '2. 4주 이후',
        blocks: [
          { type: 'p', text: '매달 [10장](/guide/measure)의 지표를 확인하고, 개선은 한 번에 하나씩 바꿔 2~4주 뒤 비교합니다.' },
        ],
      },
    ],
    references: [REF.gsc, REF.naver],
    closing: { title: '오늘 할 일은 1주차 첫 줄입니다.', text: '페이지 목록과 주 키워드 표부터 만드세요.' },
    related: [3, 11, 10],
    ...dates,
  },
  {
    no: 14,
    slug: 'ai-search',
    path: '/guide/ai-search',
    part: 5,
    nav: 'ai',
    title: 'AI 검색 최적화',
    summary: 'AI 답변에 인용되는 페이지의 조건',
    metaTitle: 'AI 검색 최적화: 인용되는 페이지 조건' + B,
    description:
      'AI 개요, 네이버 AI 브리핑, ChatGPT 검색이 답변 근거로 인용하는 페이지의 조건과 robots.txt 설정, AI 유입 측정 방법까지 정리했습니다.',
    h1: 'AI 검색 최적화: AI 답변에 인용되는 페이지 만드는 법',
    lead: 'AI 개요, 네이버 AI 브리핑, ChatGPT 검색은 웹 페이지를 읽고 요약한 뒤 출처를 붙입니다. 인용되는 페이지의 조건과 robots.txt 설정, 측정 방법까지 정리했습니다.',
    keyAnswer: [
      'AI 검색도 검색 색인을 바탕으로 답합니다. 색인·콘텐츠 품질 같은 기본 SEO가 먼저입니다.',
      '질문형 소제목 아래 첫 1~2문장에 결론을 쓰면 답변에 인용되기 쉽습니다.',
      'robots.txt에서 검색용 AI 크롤러를 막지 않았는지 확인하세요. 학습용 차단과는 별개입니다.',
    ],
    sections: [
      {
        id: 'how',
        title: '1. AI 검색은 어떻게 답을 만드나요?',
        blocks: [
          {
            type: 'p',
            text: 'AI 검색은 사용자의 질문을 받아 검색 색인에서 관련 페이지를 찾고, 그 내용을 읽어 요약한 답변을 만듭니다. 답변 아래나 문장 끝에는 근거가 된 페이지가 출처 링크로 붙습니다.',
          },
          { type: 'flow', steps: ['질문 입력', '검색·색인 조회', '페이지 읽기·요약', '답변 + 출처'] },
          {
            type: 'p',
            text: '그래서 색인되지 않은 페이지는 인용될 수 없습니다. AI 검색을 위한 첫 작업은 새로운 설정이 아니라 [7장 기술 SEO 필수 항목](/guide/technical)을 갖추는 것입니다.',
          },
        ],
      },
      {
        id: 'channels',
        title: '2. 채널별 AI 검색 한눈에 보기',
        blocks: [
          {
            type: 'p',
            text: '서비스마다 답변의 근거가 되는 데이터와 확인할 설정이 다릅니다. 아래는 2026년 10월 기준이며, 공통점은 모두 웹 페이지를 크롤링하거나 검색 색인을 사용한다는 것입니다.',
          },
          {
            type: 'table',
            head: ['서비스', '답변 근거', '확인할 것'],
            rows: [
              ['구글 AI 개요·AI 모드', '구글 검색 색인', '색인 여부, 스니펫 허용 (`nosnippet` 주의)'],
              ['네이버 AI 브리핑', '네이버 검색 수집 문서', '서치어드바이저 등록·웹 페이지 수집 요청'],
              ['ChatGPT 검색', 'OAI-SearchBot 크롤링, 검색 파트너 색인', 'robots.txt에서 `OAI-SearchBot` 허용'],
              ['Perplexity', 'PerplexityBot 크롤링', 'robots.txt에서 `PerplexityBot` 허용'],
              ['Microsoft Copilot', 'Bing 색인', 'Bing 웹마스터 도구, IndexNow'],
            ],
          },
        ],
      },
      {
        id: 'writing',
        title: '3. 인용되는 문장 쓰는 법',
        blocks: [
          {
            type: 'p',
            text: 'AI는 페이지 전체가 아니라 질문에 맞는 문장과 문단을 골라 인용합니다. 한 문단이 하나의 질문에 완결된 답이 되도록 쓰세요.',
          },
          { type: 'h3', text: '질문에 첫 문장으로 답하기' },
          {
            type: 'example',
            good: '보일러 소음의 가장 흔한 원인은 배관 속 공기입니다. 분배기의 에어 밸브를 열어 공기를 빼면 대부분 해결됩니다.',
            bad: '많은 분들이 궁금해하시는 보일러 소음! 오늘은 그 원인을 차근차근 알아보도록 하겠습니다.',
          },
          { type: 'h3', text: '인용하기 쉬운 단위로 쓰기' },
          {
            type: 'list',
            items: [
              '정의는 "A는 B입니다" 한 문장으로 씁니다.',
              '비교는 표로, 절차는 번호 목록으로 정리합니다.',
              '수치에는 단위·기준일·출처를 함께 적습니다. (예: 2026년 10월 기준)',
              '한 문단에는 한 가지 주장만 담습니다.',
              '상호·이름·주소·연락처 같은 엔티티 정보는 웹사이트, 지도, SNS에서 똑같이 씁니다.',
            ],
          },
        ],
      },
      {
        id: 'robots',
        title: '4. robots.txt: 검색용과 학습용 크롤러 구분하기',
        blocks: [
          {
            type: 'p',
            text: 'AI 서비스의 크롤러는 검색(답변 노출)용과 모델 학습용으로 나뉩니다. 학습용만 막으면 AI 검색 노출은 유지하면서 학습 사용은 거부할 수 있습니다.',
          },
          {
            type: 'code',
            file: 'robots.txt',
            code: `# 모든 크롤러: 관리자·내부 검색만 차단
User-agent: *
Disallow: /admin/
Disallow: /search

# 학습용 크롤러만 별도 차단 (선택)
User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

Sitemap: https://example.com/sitemap.xml`,
          },
          {
            type: 'callout',
            tone: 'warning',
            title: '알아두세요',
            text: 'Google-Extended 차단은 구글 검색과 AI 개요 노출에 영향을 주지 않습니다. Gemini 모델 학습 등 다른 용도로의 사용 여부만 제어합니다. 반대로 OAI-SearchBot을 막으면 ChatGPT 검색 결과에 나타나지 않을 수 있습니다.',
          },
        ],
      },
      {
        id: 'measure',
        title: '5. AI 유입 측정하기',
        blocks: [
          {
            type: 'p',
            text: 'GA4의 트래픽 획득 보고서에서 세션 소스를 필터링하면 AI 서비스에서 들어온 방문을 따로 볼 수 있습니다. chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com을 하나의 세그먼트로 묶어 매달 추이를 기록하세요.',
          },
          {
            type: 'callout',
            tone: 'info',
            text: '구글 AI 개요·AI 모드에서 발생한 클릭은 서치콘솔 웹 검색 실적에 합산되어 따로 구분되지 않습니다.',
          },
        ],
      },
      {
        id: 'avoid',
        title: '6. 피해야 할 것',
        blocks: [
          {
            type: 'avoid',
            items: [
              'AI에게만 보이도록 숨긴 텍스트나 지시 문구 넣기',
              '비슷한 페이지를 대량으로 생성해 개수만 늘리기',
              '출처 없는 통계, "100% 노출 보장" 같은 과장 표현',
              'llms.txt만 만들고 기본 SEO는 건너뛰기 — 아직 주요 검색엔진이 공식 지원하지 않는 제안 규격입니다',
            ],
          },
        ],
      },
    ],
    references: [REF.aiFeatures, REF.openai, REF.perplexity, REF.crawlers, REF.naverGuide, REF.indexnow],
    closing: {
      title: 'AI 검색 최적화는 새로운 기술이 아니라,\n잘 만든 상세페이지의 연장입니다.',
      text: '색인 → 답변형 구조 → 출처와 엔티티 일관성 순서로 점검하세요.',
    },
    related: [5, 7, 9],
    ...dates,
  },
]

export const chapterByNo = (no: number) => {
  const c = CHAPTERS.find((ch) => ch.no === no)
  if (!c) throw new Error(`chapter ${no} not found`)
  return c
}

export const chaptersInPart = (part: number) => CHAPTERS.filter((c) => c.part === part)
