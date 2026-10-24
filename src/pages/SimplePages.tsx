import { ButtonLink } from '../components/ButtonLink'
import { Icon } from '../components/Icon'
import { PageHeader } from '../components/PageHeader'
import type { Crumb } from '../routes'
import { formatDate, mailto, SITE } from '../site'

export function AboutPage({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        title="운영자 소개"
        lead="SEO is fun은 구글·네이버·AI 검색 최적화 방법을 정리해 공유하는 개인 사이트입니다."
      />
      <div className="container narrow prose-page">
        <section aria-labelledby="about-what">
          <h2 id="about-what" className="prose-h2">
            이 사이트에서 하는 일
          </h2>
          <p className="prose-p">
            검색에 잘 잡히고, 클릭되고, 문의로 이어지는 페이지를 만드는 방법을 업종·기술 스택과 무관한 일반 원칙으로 정리합니다. 구글
            검색 센터와 네이버 서치어드바이저가 공통으로 권장하는 내용을 바탕으로 하고, AI 검색에 대한 내용은 각 서비스의 공식 문서를 함께
            확인해 기준일과 함께 적습니다.
          </p>
        </section>
        <section aria-labelledby="about-contact">
          <h2 id="about-contact" className="prose-h2">
            연락처
          </h2>
          <p className="prose-p">
            질문, 사이트 점검 요청, 글의 오류 제보는 이메일로 보내 주세요. 정정한 내용은 해당 글의 수정일을 갱신해 반영합니다.
          </p>
          <a className="contact-card" href={mailto()}>
            <span className="icon-tile icon-tile--s">
              <Icon name="mail" size={20} />
            </span>
            <span>
              <span className="contact-card__label">이메일</span>
              <span className="contact-card__value">{SITE.email}</span>
            </span>
          </a>
        </section>
        <div className="btn-row">
          <ButtonLink href="/guide" variant="primary">
            가이드 목차 보기
          </ButtonLink>
          <ButtonLink href="/privacy" variant="secondary" arrow={false}>
            개인정보처리방침
          </ButtonLink>
        </div>
      </div>
    </>
  )
}

export function PrivacyPage({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <PageHeader crumbs={crumbs} title="개인정보처리방침" lead={`시행일 ${formatDate(SITE.published)}`} />
      <div className="container narrow prose-page">
        <section aria-labelledby="pv-1">
          <h2 id="pv-1" className="prose-h2">
            1. 받는 정보와 이용 목적
          </h2>
          <p className="prose-p">
            이 사이트에는 회원가입이나 문의 폼이 없습니다. 이메일로 문의하시면 보내신 이메일 주소와 내용을 답장과 문의 처리에만 사용합니다.
          </p>
        </section>
        <section aria-labelledby="pv-2">
          <h2 id="pv-2" className="prose-h2">
            2. 보관 기간
          </h2>
          <p className="prose-p">문의 처리가 끝나면 지체 없이 삭제합니다. 법령에 따라 보관해야 하는 경우에는 그 기간 동안만 보관합니다.</p>
        </section>
        <section aria-labelledby="pv-3">
          <h2 id="pv-3" className="prose-h2">
            3. 방문 통계와 브라우저 저장
          </h2>
          <p className="prose-p">
            현재 방문 통계 도구나 광고 쿠키를 사용하지 않습니다. 사용하게 되면 이 문서에 도구 이름과 수집 항목을 먼저 알립니다. 출시 전
            체크리스트의 체크 표시는 방문자 브라우저(localStorage)에만 저장되며 어디로도 전송되지 않습니다.
          </p>
        </section>
        <section aria-labelledby="pv-4">
          <h2 id="pv-4" className="prose-h2">
            4. 문의처
          </h2>
          <p className="prose-p">
            개인정보와 관련한 요청은 <a href={mailto('[SEO is fun] 개인정보 문의')}>{SITE.email}</a>로 보내 주세요.
          </p>
        </section>
      </div>
    </>
  )
}

export function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="container narrow">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <h1>페이지를 찾을 수 없습니다</h1>
        <p>주소가 바뀌었거나 없는 페이지입니다. 가이드 목차에서 찾아보세요.</p>
        <div className="btn-row">
          <ButtonLink href="/guide" variant="primary">
            가이드 목차
          </ButtonLink>
          <ButtonLink href="/" variant="secondary" arrow={false}>
            홈으로
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
