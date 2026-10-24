import type { ReactNode } from 'react'
import { BackToTop } from './components/BackToTop'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useGlobalMotion } from './hooks/useGlobalMotion'
import { ChannelPage } from './pages/ChannelPage'
import { ChapterPage } from './pages/ChapterPage'
import { GuideHubPage } from './pages/GuideHubPage'
import { HomePage } from './pages/HomePage'
import { AboutPage, NotFoundPage, PrivacyPage } from './pages/SimplePages'
import { breadcrumbsFor, findRoute } from './routes'

export default function App({ path }: { path: string }) {
  const route = findRoute(path)
  const crumbs = breadcrumbsFor(route)
  useGlobalMotion()

  let page: ReactNode
  switch (route.kind) {
    case 'home':
      page = <HomePage />
      break
    case 'hub':
      page = <GuideHubPage crumbs={crumbs} />
      break
    case 'chapter':
      page = <ChapterPage chapter={route.chapter} crumbs={crumbs} />
      break
    case 'channel':
      page = <ChannelPage channel={route.channel} crumbs={crumbs} />
      break
    case 'about':
      page = <AboutPage crumbs={crumbs} />
      break
    case 'privacy':
      page = <PrivacyPage crumbs={crumbs} />
      break
    case 'notfound':
      page = <NotFoundPage />
      break
  }

  return (
    <>
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>
      <Header dark={route.kind === 'home'} active={route.nav} path={route.path} />
      <main id="main">{page}</main>
      <Footer />
      <BackToTop />
    </>
  )
}
