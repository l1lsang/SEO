import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { findRoute } from './routes'
import { renderHead } from './seo'

export { routes } from './routes'
export { llmsTxt, robotsTxt, rssXml, sitemapXml } from './seo'

/** scripts/prerender.mjs가 경로마다 호출합니다. */
export function render(path: string) {
  const html = renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  )
  return { html, head: renderHead(findRoute(path)) }
}
