# SEO is fun

구글·네이버·AI 검색 최적화 실무 가이드 사이트. Vite + React + TypeScript로 만들고, 빌드 때 모든 페이지를 정적 HTML로 미리 렌더링(SSG)해 서버 없이 Vercel에 배포합니다.

디자인 원본: [Figma](https://www.figma.com/design/5AZKvCQKTzbR5SDI6QKrqx) (01 Foundations · 02 IA · SEO 명세 · 03 Desktop · 04 Mobile)

## 명령

```bash
npm install
npm run dev      # 개발 서버 (클라이언트 렌더링)
npm run build    # 타입 검사 → 클라이언트 빌드 → SSR 번들 → 페이지별 HTML·sitemap.xml·robots.txt·rss.xml·llms.txt 생성
npm run preview  # dist/client를 Vercel과 같은 주소 규칙(.html 없는 URL, 404)으로 미리보기
```

빌드 결과는 `dist/client`입니다. title·description 길이가 가이드 기준(25~35자, 80~120자 안팎)을 벗어나거나, 다른 페이지와 겹치거나, h1이 하나가 아니면 빌드 로그에 경고가 나옵니다.

## 어디를 고치면 되나요

| 바꿀 것 | 파일 |
| --- | --- |
| 이메일, 작성자 이름·SNS 주소(`sameAs`), 작성·수정일 | `src/site.ts` |
| 14개 장 본문, 참고 자료, 관련 장 | `src/content/chapters.ts` |
| 구글·네이버·AI 채널 페이지 | `src/content/channels.ts` |
| 체크리스트 24항목 / 4주 로드맵 / FAQ | `src/content/checklist.ts`, `roadmap.ts`, `faq.ts` |
| 페이지별 title·description, 주소 | `src/routes.ts` (장은 `chapters.ts`의 `metaTitle`·`description`) |
| 색·간격·그림자 토큰 (Figma 변수와 같은 이름) | `src/styles/tokens.css` |
| head 메타 태그, 구조화 데이터, sitemap, robots.txt, RSS, llms.txt | `src/seo.ts` |

본문 문자열 안에서는 `**굵게**`, `` `코드` ``, `[링크](/guide/technical)` 표기를 쓸 수 있습니다.
글을 고치면 해당 장의 `updated` 날짜를 바꿔 주세요. 페이지 수정일과 sitemap `lastmod`에 반영됩니다.

## 구조

```text
src/
  entry-server.tsx   빌드 때 경로별 HTML 렌더링 (scripts/prerender.mjs가 호출)
  entry-client.tsx   미리 렌더링된 HTML에 상호작용 연결(hydrate)
  App.tsx            경로 → 페이지 선택
  routes.ts          전체 페이지 목록, 브레드크럼
  seo.ts             head 태그, JSON-LD, sitemap.xml, robots.txt
  content/           모든 글 데이터
  components/        헤더·푸터·슬라이더·캐러셀·체크리스트 등
  pages/             홈, 가이드 목록, 장 상세, 채널, 소개, 개인정보처리방침, 404
  styles/            tokens · base · layout · home · article
scripts/prerender.mjs   정적 HTML 생성
scripts/serve.mjs       로컬 미리보기 서버
```

## Vercel 배포

1. 이 폴더를 GitHub 저장소에 올리고 Vercel에서 Import 합니다. 빌드 설정은 `vercel.json`에 있어 따로 고칠 필요가 없습니다(출력 폴더 `dist/client`, `.html` 없는 주소, 끝 슬래시 없음).
2. canonical·sitemap 주소는 Vercel 프로덕션 도메인을 자동으로 씁니다. 커스텀 도메인을 연결하면 Vercel 환경 변수 `VITE_SITE_URL`(예: `https://example.com`)을 넣고 다시 배포하세요. 이때 Vercel Domains 설정에서 `*.vercel.app` 주소를 커스텀 도메인으로 리다이렉트해 두면 같은 페이지가 두 주소로 열리지 않습니다.
3. 검색엔진 소유 확인을 HTML 태그 방식으로 할 때는 아래 환경 변수에 발급받은 코드(`content` 값만)를 넣고 다시 배포합니다. 홈 `<head>`에만 meta 태그가 들어갑니다.

| 환경 변수 | 도구 |
| --- | --- |
| `VITE_GOOGLE_SITE_VERIFICATION` | 구글 서치콘솔 |
| `VITE_NAVER_SITE_VERIFICATION` | 네이버 서치어드바이저 |
| `VITE_BING_SITE_VERIFICATION` | Bing 웹마스터 도구 (서치콘솔에서 가져오기를 쓰면 필요 없음) |

## 배포 후 할 일

- 구글 서치콘솔·네이버 서치어드바이저에 사이트를 등록하고 `/sitemap.xml`을 제출합니다. 네이버에는 `/rss.xml`도 함께 제출합니다.
- 리치 결과 테스트로 Article·BreadcrumbList 구조화 데이터를 확인합니다.
- PageSpeed Insights로 LCP·INP·CLS를 측정합니다.
- 공유 이미지(`public/og.png`, 1200×630)는 Figma `02 IA · SEO 명세` 페이지의 "OG Image" 프레임에서 다시 내보낼 수 있습니다.
