import { useSyncExternalStore } from 'react'

// 체크 상태는 이 브라우저의 localStorage에만 저장합니다(서버 전송 없음).
const KEY = 'seoisfun:checklist'
const EMPTY: string[] = []
const listeners = new Set<() => void>()
let cache: string[] | null = null

function read(): string[] {
  if (cache) return cache
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(KEY) ?? '[]')
    cache = Array.isArray(parsed) ? parsed.filter((v): v is string => typeof v === 'string') : []
  } catch {
    cache = []
  }
  return cache
}

function write(next: string[]) {
  cache = next
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    // 저장이 막힌 환경(사생활 보호 모드 등)에서는 현재 화면에서만 유지됩니다.
  }
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  const onStorage = (e: StorageEvent) => {
    if (e.key !== KEY) return
    cache = null
    listener()
  }
  window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', onStorage)
  }
}

export function useChecklist() {
  const checked = useSyncExternalStore(subscribe, read, () => EMPTY)
  const toggle = (id: string) => write(checked.includes(id) ? checked.filter((x) => x !== id) : [...checked, id])
  const reset = () => write([])
  return { checked, toggle, reset }
}
