/// <reference types="vite/client" />

// vite.config.ts의 define으로 빌드 때 주입되는 대표 주소(끝 슬래시 없음)
declare const __SITE_URL__: string

// 검색엔진 소유 확인 코드(선택). Vercel 환경 변수로 넣으면 홈 <head>에 meta 태그가 들어갑니다(src/seo.ts).
interface ImportMetaEnv {
  readonly VITE_GOOGLE_SITE_VERIFICATION?: string
  readonly VITE_NAVER_SITE_VERIFICATION?: string
  readonly VITE_BING_SITE_VERIFICATION?: string
}
