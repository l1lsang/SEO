import { useSyncExternalStore } from 'react'

/** 미리 렌더링한 HTML과 어긋나지 않도록 서버에서는 항상 false로 시작합니다. */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

export const DESKTOP = '(min-width: 1024px)'
