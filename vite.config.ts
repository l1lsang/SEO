import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// @fontsource CSS에서 구형 woff 대체 경로를 빼고 woff2만 남깁니다.
// 렌더링을 막는 CSS 크기와 배포 파일 수가 절반 가까이 줄어듭니다(woff2는 모든 최신 브라우저 지원).
const woff2Only = (): Plugin => ({
  name: 'fontsource-woff2-only',
  enforce: 'pre',
  transform(code, id) {
    if (!/@fontsource[\\/].+\.css$/.test(id)) return null
    return code.replace(/,\s*url\([^)]+\.woff\)\s*format\('woff'\)/g, '')
  },
})

// canonical·sitemap에 쓰는 대표 주소.
// 커스텀 도메인을 연결하면 Vercel 환경 변수 VITE_SITE_URL에 넣거나,
// Vercel이 빌드 때 주는 프로덕션 도메인(VERCEL_PROJECT_PRODUCTION_URL)을 그대로 씁니다.
const siteUrl =
  process.env.VITE_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://seoisfun.vercel.app')

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [woff2Only(), react()],
  define: {
    __SITE_URL__: JSON.stringify(siteUrl.replace(/\/$/, '')),
  },
  build: {
    outDir: isSsrBuild ? 'dist/server' : 'dist/client',
    copyPublicDir: !isSsrBuild,
    // 폰트 CSS를 별도 파일로 내보내고, prerender가 manifest로 이름을 찾아 비차단 로딩합니다.
    manifest: !isSsrBuild,
    rollupOptions: isSsrBuild ? undefined : { input: { index: 'index.html', fonts: 'src/fonts.ts' } },
  },
}))
