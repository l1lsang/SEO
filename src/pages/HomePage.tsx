import type { CSSProperties } from 'react'
import { ButtonLink } from '../components/ButtonLink'
import { Carousel } from '../components/Carousel'
import { ChecklistPreview } from '../components/Checklist'
import { CodeBlock } from '../components/CodeBlock'
import { CopyEmail } from '../components/CopyEmail'
import { Faq } from '../components/Faq'
import { GuidePager } from '../components/GuidePager'
import { HeroCanvas } from '../components/HeroCanvas'
import { HeroDemo } from '../components/HeroDemo'
import { HubDiagram } from '../components/HubDiagram'
import { Icon } from '../components/Icon'
import type { IconName } from '../components/icons'
import { Marquee } from '../components/Marquee'
import { Lines } from '../components/Rich'
import { WeekCard } from '../components/WeekCard'
import { CHANNELS } from '../content/channels'
import { chapterByNo } from '../content/chapters'
import { WEEKS } from '../content/roadmap'
import { absUrl, host, mailto } from '../site'

const CHANNEL_ICON: Record<string, IconName> = { google: 'search', naver: 'compass', ai: 'sparkles' }

const STEPS: { title: string; goal: string; icon: IconName; href: string; ai?: boolean }[] = [
  { title: '발견·색인', goal: '검색엔진이 페이지를 찾고 저장', icon: 'search', href: '/guide/technical' },
  { title: '선택·클릭', goal: '검색 결과에서 눈에 띄고 클릭됨', icon: 'pointer', href: '/guide/on-page' },
  { title: '만족·신뢰', goal: '방문자가 원하는 답을 얻고 머무름', icon: 'shield-check', href: '/guide/eeat' },
  { title: '인용·답변', goal: 'AI가 답변 근거로 페이지를 인용', icon: 'quote', href: '/guide/ai-search', ai: true },
]

const COMPARE: [string, string, string][] = [
  ['정의', '사이트·서비스를 대표하는 입구. 홈, 서비스 소개, 분야별 랜딩, 카테고리 목록', '하나의 주제를 깊게 다루는 개별 페이지. 글, 사례, 상품, 후기, 가이드'],
  ['역할', '브랜드 신뢰 형성, 핵심 서비스 안내, 하위 페이지로 연결하는 허브', '구체적인 질문에 답하고 검색 유입을 만드는 여러 개의 입구'],
  ['노리는 검색어', '브랜드명, 넓은 키워드 (예: "OO 학원", "서울 인테리어")', '구체적이고 긴 키워드 (예: "겨울 보일러 소음 원인")'],
  ['콘텐츠 성격', '상대적으로 안정적, 자주 바뀌지 않음', '지속적으로 추가·수정됨, 개수가 많음'],
  ['핵심 지표', '브랜드 검색 노출, 문의·전환율', '비브랜드 검색 유입, 체류, 하위 전환'],
  ['SEO 핵심', '명확한 정체성, 신뢰 요소, 구조화된 내부 링크', '검색의도 충족, 고유한 정보, 올바른 색인 관리'],
  ['AI 인용 포인트', '회사·서비스 정보의 일관성 (Organization, sameAs)', '질문에 바로 답하는 문장, 출처와 기준일이 있는 수치'],
]

const TACTICS = [
  ['검색용 AI 크롤러 허용', 'robots.txt에서 OAI-SearchBot, PerplexityBot 같은 검색용 크롤러를 막지 않았는지 확인합니다. 학습용 크롤러는 따로 결정합니다.'],
  ['질문에 첫 문장으로 답하기', '질문형 소제목 바로 아래 1~2문장에 결론을 씁니다. 정의는 "A는 B입니다" 형태로.'],
  ['인용하기 쉬운 단위', '비교는 표, 절차는 번호 목록으로. 수치에는 단위와 기준일을 함께 적습니다.'],
  ['출처와 작성자 명시', '공식 자료 링크, 작성자·감수자, 수정일을 표시합니다. AI도 신뢰 신호를 봅니다.'],
  ['엔티티 정보 일관성', '이름·주소·연락처·서비스명을 웹사이트, 지도, SNS에서 동일하게. Organization이나 Person과 sameAs로 연결합니다.'],
  ['JS 없이 읽히는 본문', '상당수 AI 크롤러는 자바스크립트를 실행하지 않습니다. 핵심 내용은 처음 받는 HTML에 넣습니다.'],
]

const ROBOTS = `# 모든 크롤러: 관리자·내부 검색만 차단
User-agent: *
Disallow: /admin/
Disallow: /search

# 학습용 크롤러만 별도 차단 (선택)
User-agent: GPTBot
Disallow: /

Sitemap: ${absUrl('/sitemap.xml')}`

const SPARK = 'M0 70 C40 66 60 58 90 60 S150 44 180 40 S240 26 270 18 S300 12 320 8'

const d = (n: number) => ({ '--d': n }) as CSSProperties

function SectionHead({ title, lead, center, dark }: { title: string; lead?: string; center?: boolean; dark?: boolean }) {
  return (
    <div className={['section-head', center && 'section-head--center', dark && 'section-head--dark'].filter(Boolean).join(' ')} data-reveal="">
      <h2 className="section-head__title">
        <Lines text={title} />
      </h2>
      {lead && <p className="section-head__lead">{lead}</p>}
    </div>
  )
}

export function HomePage() {
  const ai = chapterByNo(14)
  return (
    <>
      <section className="hero grain">
        <HeroCanvas />
        <div className="container hero__inner">
          <div className="hero__copy">
            <h1 className="hero__title">
              <span className="w" style={d(0)}>
                구글·네이버·
              </span>
              <span className="w" style={d(1)}>
                <em>AI 검색</em>에
              </span>
              <br />
              <span className="w" style={d(2)}>
                잘
              </span>{' '}
              <span className="w" style={d(3)}>
                잡히는
              </span>{' '}
              <span className="w" style={d(4)}>
                페이지
              </span>{' '}
              <span className="w" style={d(5)}>
                만드는
              </span>{' '}
              <span className="w" style={d(6)}>
                법
              </span>
            </h1>
            <p className="hero__lead">
              검색엔진이 찾고, 검색 결과에서 선택받고, AI 답변에 인용되는 페이지. 대표페이지와 상세페이지로 나눠 무엇을 어떻게 고칠지
              실무 기준으로 정리했습니다.
            </p>
            <div className="btn-row hero__ctas">
              <ButtonLink href="/guide" variant="accent" size="l" magnetic>
                가이드 시작하기
              </ButtonLink>
              <ButtonLink href="/checklist" variant="ondark" size="l" arrow={false} magnetic>
                출시 전 체크리스트
              </ButtonLink>
            </div>
          </div>
          <div className="hero__visual">
            <HeroDemo title={ai.metaTitle} description={ai.description} host={host} />
          </div>
        </div>
      </section>

      <Marquee />

      <section className="section">
        <div className="container">
          <SectionHead
            center
            title="하나의 원칙, 세 개의 검색 채널"
            lead="구글·네이버·AI 검색은 화면은 달라도 같은 기준으로 페이지를 평가합니다. 공통 원칙 위에 채널별 차이만 더하세요."
          />
          <Carousel className="carousel--cols-3">
            {CHANNELS.map((c) => (
              <a
                key={c.key}
                href={c.path}
                className={`channel-card channel-card--${c.key}${c.key === 'ai' ? ' glow-border' : ''}`}
                data-spotlight=""
                data-tilt="6"
              >
                <span className="icon-tile">
                  <Icon name={CHANNEL_ICON[c.key]} size={24} />
                </span>
                <h3>{c.name}</h3>
                <p>{c.cardText}</p>
                <span className="link-arrow">
                  {c.cardLink}
                  <Icon name="arrow-right" size={16} />
                </span>
              </a>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="section section--subtle">
        <div className="container">
          <SectionHead
            center
            title="발견 → 선택 → 만족, 그리고 인용"
            lead="검색엔진은 “이 검색어를 입력한 사람에게 가장 도움이 되는 페이지”를 위로 올립니다. 기존 3축에 AI 답변 인용을 더해 4단계로 정리했습니다."
          />
          <Carousel className="carousel--cols-4 carousel--narrow steps">
            {STEPS.map((s, i) => (
              <a
                key={s.title}
                href={s.href}
                className={s.ai ? 'step-card step-card--ai glow-border' : 'step-card'}
                style={{ '--s': i } as CSSProperties}
                data-spotlight=""
              >
                <span className="icon-tile icon-tile--s">
                  <Icon name={s.icon} size={20} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.goal}</p>
              </a>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="section">
        <div className="container page-types">
          <div className="page-types__intro">
            <SectionHead
              title={'대표페이지와 상세페이지는\nSEO 방식이 다릅니다'}
              lead="대표페이지(허브)는 주제별로 상세페이지(스포크)를 모으고, 상세페이지는 다시 허브로 연결합니다. 이 양방향 구조가 “이 사이트는 이 주제를 깊이 다룬다”는 신호가 됩니다."
            />
            <div data-reveal="">
              <HubDiagram />
            </div>
          </div>
          <div className="page-types__table" data-reveal="">
            <div className="table-wrap" tabIndex={0} role="region" aria-label="대표페이지와 상세페이지 비교 표">
              <table className="data-table data-table--compare">
                <thead>
                  <tr>
                    <th scope="col">구분</th>
                    <th scope="col">대표페이지</th>
                    <th scope="col">상세페이지</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map(([k, a, b]) => (
                    <tr key={k} className={k === 'AI 인용 포인트' ? 'is-ai' : undefined}>
                      <th scope="row">{k}</th>
                      <td>{a}</td>
                      <td>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="btn-row">
              <ButtonLink href="/guide/main-page" variant="secondary">
                대표페이지 SEO 방법
              </ButtonLink>
              <ButtonLink href="/guide/detail-page" variant="secondary">
                상세페이지 SEO 방법
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--subtle">
        <div className="container">
          <div className="section-head-row">
            <SectionHead
              title={'기초부터 AI 검색까지,\n14개 장의 SEO 실무'}
              lead="기존 가이드 13개 장을 4개 파트로 묶고, AI 검색 최적화를 다섯 번째 파트로 더했습니다. 필요한 파트부터 골라 읽으세요."
            />
            <ButtonLink href="/guide" variant="secondary" magnetic>
              가이드 전체 보기
            </ButtonLink>
          </div>
          <div data-reveal="">
            <GuidePager />
          </div>
        </div>
      </section>

      <section className="section section--dark ai-section grain">
        <div className="container">
          <div className="section-head-row">
            <div className="section-head section-head--dark" data-reveal="">
              <h2 className="section-head__title">
                AI가 답변할 때
                <br />
                <em>인용</em>하는 페이지의 조건
              </h2>
              <p className="section-head__lead">
                AI 개요, 네이버 AI 브리핑, ChatGPT 검색, Perplexity는 웹 페이지를 읽고 요약한 뒤 출처를 붙입니다. 기본 SEO 위에 “인용하기
                쉬운 구조”를 더하세요.
              </p>
            </div>
            <ButtonLink href="/guide/ai-search" variant="accent" size="l" magnetic>
              AI 검색 가이드 읽기
            </ButtonLink>
          </div>
          <div className="ai-section__body">
            <Carousel className="carousel--cols-2 carousel--narrow" dark>
              {TACTICS.map(([t, desc]) => (
                <div key={t} className="tactic-card" data-spotlight="">
                  <h3>{t}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </Carousel>
            <div className="ai-section__side">
              <CodeBlock file="robots.txt" code={ROBOTS} dark />
              <div className="measure-card" data-reveal="" data-spotlight="">
                <p className="measure-card__title">
                  <span className="icon-tile icon-tile--xs icon-tile--glass">
                    <Icon name="bar-chart" size={18} />
                  </span>
                  AI 유입 측정
                </p>
                <p>GA4 트래픽 획득 보고서에서 chatgpt.com, perplexity.ai 같은 AI 서비스 유입을 세션 소스로 따로 봅니다.</p>
                <svg className="sparkline" viewBox="0 0 320 80" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#c8f25a" stopOpacity="0.32" />
                      <stop offset="1" stopColor="#c8f25a" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path className="sparkline__area" d={`${SPARK} L320 80 L0 80 Z`} fill="url(#spark-fill)" />
                  <path className="sparkline__line" d={SPARK} pathLength={1} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            title="4주면 기본기가 갖춰집니다"
            lead="기존 4주 로드맵에 AI 검색 항목을 더했습니다. ✦ 표시가 새로 추가된 AI 검색 작업입니다."
          />
          <div className="timeline" aria-hidden="true" data-reveal="">
            {WEEKS.map((w, i) => (
              <span key={w.label} style={{ '--t': i } as CSSProperties} />
            ))}
          </div>
          <Carousel className="carousel--cols-4 carousel--narrow">
            {WEEKS.map((w) => (
              <WeekCard key={w.label} week={w} />
            ))}
          </Carousel>
        </div>
      </section>

      <section className="section section--subtle">
        <div className="container split split--center">
          <div className="split__aside">
            <SectionHead
              title={'출시 전,\n이것만은 확인하세요'}
              lead="기존 체크리스트 20개 항목에 AI 검색 4개 항목을 더했습니다. 공통 → 유형별 → AI 순서로 점검하세요."
            />
            <ButtonLink href="/checklist" variant="primary" size="l" magnetic>
              체크리스트 전체 보기
            </ButtonLink>
          </div>
          <ChecklistPreview />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split__aside">
            <SectionHead title="자주 묻는 질문" lead="답변은 페이지에 보이는 텍스트로 작성합니다. 검색엔진과 AI가 그대로 읽을 수 있도록." />
            <ButtonLink href={mailto('[SEO is fun] 질문')} variant="ghost">
              이메일로 질문하기
            </ButtonLink>
          </div>
          <div data-reveal="">
            <Faq />
          </div>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="container">
          <div className="cta-card glow-border grain" data-reveal="">
            <div className="cta-card__copy">
              <h2>
                우리 사이트는 지금
                <br />
                어디서 막혀 있을까요?
              </h2>
              <p>서치콘솔 데이터와 체크리스트로 색인·클릭·전환 중 어디가 문제인지 진단해 드립니다.</p>
              <CopyEmail subject="[SEO is fun] SEO 진단 문의" />
            </div>
            <div className="btn-row">
              <ButtonLink href={mailto('[SEO is fun] SEO 진단 문의')} variant="accent" size="l" magnetic>
                이메일로 문의하기
              </ButtonLink>
              <ButtonLink href="/checklist" variant="ondark" size="l" arrow={false} magnetic>
                체크리스트 먼저 해보기
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
