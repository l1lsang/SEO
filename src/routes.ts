import { CHANNELS, type Channel } from './content/channels'
import { CHAPTERS } from './content/chapters'
import type { Chapter, NavKey } from './content/types'
import { SITE } from './site'

type Base = {
  path: string
  title: string
  description: string
  nav?: NavKey
  noindex?: boolean
  /** 법적 고지처럼 title 길이 기준을 적용하지 않는 페이지 */
  skipLengthCheck?: boolean
  updated: string
}

export type Route =
  | (Base & { kind: 'home' })
  | (Base & { kind: 'hub' })
  | (Base & { kind: 'chapter'; chapter: Chapter })
  | (Base & { kind: 'channel'; channel: Channel })
  | (Base & { kind: 'about' })
  | (Base & { kind: 'privacy' })
  | (Base & { kind: 'notfound' })

const B = ' | SEO is fun'

export const routes: Route[] = [
  {
    kind: 'home',
    path: '/',
    title: 'SEO is fun - 구글·네이버·AI 검색 최적화 가이드',
    description:
      '구글·네이버·AI 검색에 잘 잡히는 페이지 만드는 법. 대표페이지·상세페이지 SEO와 기술 SEO, AI 검색 최적화를 14개 장과 체크리스트로 정리했습니다.',
    updated: SITE.updated,
  },
  {
    kind: 'hub',
    path: '/guide',
    nav: 'guide',
    title: 'SEO 가이드 전체 목차 14장' + B,
    description:
      'SEO 기본 개념부터 대표·상세페이지, 기술 SEO, 콘텐츠 품질, AI 검색 최적화까지 14개 장의 실무 가이드 목차입니다. 필요한 장부터 골라 읽으세요.',
    updated: SITE.updated,
  },
  ...CHAPTERS.map(
    (chapter): Route => ({
      kind: 'chapter',
      chapter,
      path: chapter.path,
      nav: chapter.nav,
      title: chapter.metaTitle,
      description: chapter.description,
      updated: chapter.updated,
    }),
  ),
  ...CHANNELS.map(
    (channel): Route => ({
      kind: 'channel',
      channel,
      path: channel.path,
      nav: channel.nav,
      title: channel.metaTitle,
      description: channel.description,
      updated: SITE.updated,
    }),
  ),
  {
    kind: 'about',
    path: '/about',
    title: '운영자 소개와 이메일 문의' + B,
    description: `SEO is fun을 운영하는 개인 운영자 소개 페이지입니다. 구글·네이버·AI 검색 최적화 관련 질문이나 사이트 점검 요청은 이메일 ${SITE.email}로 보내 주세요.`,
    updated: SITE.updated,
  },
  {
    kind: 'privacy',
    path: '/privacy',
    title: '개인정보처리방침' + B,
    description:
      'SEO is fun의 개인정보처리방침입니다. 이메일 문의 때 받는 정보와 이용 목적, 보관 기간, 방문 통계 도구 사용 여부와 체크리스트 저장 방식을 안내합니다.',
    skipLengthCheck: true,
    updated: SITE.updated,
  },
  {
    kind: 'notfound',
    path: '/404',
    title: '페이지를 찾을 수 없습니다' + B,
    description: '요청하신 주소의 페이지가 없습니다.',
    noindex: true,
    updated: SITE.updated,
  },
]

const notFound = routes.find((r) => r.kind === 'notfound')!

export function findRoute(rawPath: string): Route {
  let path = decodeURI(rawPath).replace(/\.html$/, '')
  if (path.length > 1) path = path.replace(/\/+$/, '')
  if (path === '/index') path = '/'
  return routes.find((r) => r.path === path && r.kind !== 'notfound') ?? notFound
}

export type Crumb = { name: string; path: string }

export function breadcrumbsFor(route: Route): Crumb[] {
  const home = { name: '홈', path: '/' }
  switch (route.kind) {
    case 'home':
      return [home]
    case 'hub':
      return [home, { name: '가이드', path: '/guide' }]
    case 'chapter':
      return [home, { name: '가이드', path: '/guide' }, { name: route.chapter.title, path: route.path }]
    case 'channel':
      return [home, { name: route.channel.name, path: route.path }]
    case 'about':
      return [home, { name: '운영자 소개', path: route.path }]
    case 'privacy':
      return [home, { name: '개인정보처리방침', path: route.path }]
    case 'notfound':
      return [home]
  }
}
