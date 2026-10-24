// 빌드된 서버 번들로 모든 경로를 HTML로 미리 렌더링합니다(SSG).
// 결과물은 dist/client에 쌓이고, Vercel은 이 폴더를 정적 파일로 배포합니다.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const clientDir = join(root, 'dist/client')
const serverEntry = join(root, 'dist/server/entry-server.js')

const template = await readFile(join(clientDir, 'index.html'), 'utf8')
const { render, routes, sitemapXml, robotsTxt } = await import(pathToFileURL(serverEntry).href)

// 폰트 CSS는 렌더링을 막지 않도록 preload → stylesheet로 바꿔 불러옵니다.
const manifestPath = join(clientDir, '.vite/manifest.json')
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))
const fontCss = manifest['src/fonts.ts']?.css?.[0]
if (!fontCss) throw new Error('fonts CSS not found in manifest')
const fontHead = [
  `<link rel="preload" href="/${fontCss}" as="style" onload="this.onload=null;this.rel='stylesheet'" />`,
  `<noscript><link rel="stylesheet" href="/${fontCss}" /></noscript>`,
].join('\n    ')
await rm(join(clientDir, '.vite'), { recursive: true, force: true })

const fileFor = (path) => {
  if (path === '/') return 'index.html'
  if (path === '/404') return '404.html'
  return `${path.slice(1)}.html`
}

const warnings = []
for (const route of routes) {
  const { head, html } = render(route.path)
  const page = template.replace('<!--app-head-->', `${head}\n    ${fontHead}`).replace('<!--app-html-->', html)
  const out = join(clientDir, fileFor(route.path))
  await mkdir(dirname(out), { recursive: true })
  await writeFile(out, page)

  // 가이드 6장 기준: title 25~35자, description 80~120자 안팎
  if (!route.noindex && !route.skipLengthCheck) {
    const t = route.title.length
    const d = route.description.length
    if (t < 24 || t > 36) warnings.push(`${route.path} title ${t}자`)
    if (d < 75 || d > 125) warnings.push(`${route.path} description ${d}자`)
  }
}

await writeFile(join(clientDir, 'sitemap.xml'), sitemapXml())
await writeFile(join(clientDir, 'robots.txt'), robotsTxt())

console.log(`prerendered ${routes.length} pages + sitemap.xml + robots.txt`)
if (warnings.length) console.warn(`길이 기준 밖:\n  ${warnings.join('\n  ')}`)
