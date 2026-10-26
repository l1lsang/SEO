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

// canonical·sitemap·RSS·구조화 데이터에 쓰는 대표 주소(메인 도메인).
// Vercel에 다른 도메인이 붙어도 대표 주소가 저절로 바뀌지 않도록 고정해 둡니다.
// 커스텀 도메인으로 옮길 때만 Vercel 환경 변수 VITE_SITE_URL에 새 주소를 넣고 다시 배포하세요.
const siteUrl = process.env.VITE_SITE_URL ?? 'https://seoisfun.vercel.app'

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
