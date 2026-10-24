// 로컬 미리보기용 정적 서버. Vercel의 cleanUrls 규칙을 흉내 냅니다.
// /guide/ai-search → dist/client/guide/ai-search.html, 없는 주소 → 404.html(상태 404)
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { dirname, extname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = resolve(dirname(fileURLToPath(import.meta.url)), '../dist/client')
const port = Number(process.env.PORT ?? 4173)
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
}

const isFile = async (p) => {
  try {
    return (await stat(p)).isFile()
  } catch {
    return false
  }
}

createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url ?? '/', 'http://localhost').pathname)
  const candidates = path === '/' ? ['index.html'] : [path.slice(1), `${path.slice(1)}.html`]
  for (const c of candidates) {
    const file = join(dir, c)
    if (file.startsWith(dir) && (await isFile(file))) {
      res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' })
      res.end(await readFile(file))
      return
    }
  }
  res.writeHead(404, { 'Content-Type': types['.html'] })
  res.end(await readFile(join(dir, '404.html')))
}).listen(port, () => console.log(`http://localhost:${port}`))
