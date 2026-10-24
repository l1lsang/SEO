import './styles/index.css'

import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App path={window.location.pathname} />
  </StrictMode>
)

// 빌드 결과물은 미리 렌더링된 HTML이 있으므로 hydrate, 개발 서버(vite)는 빈 화면이므로 새로 렌더링합니다.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)

// 빌드에서는 prerender가 폰트 CSS를 <head>에 넣고, 개발 서버에서만 여기서 불러옵니다.
if (import.meta.env.DEV) void import('./fonts')
