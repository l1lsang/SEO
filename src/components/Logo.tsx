export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="/" className={dark ? 'logo logo--dark' : 'logo'} aria-label="SEO is fun 홈">
      <svg className="logo__mark" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="9" className="logo__bg" />
        <circle cx="14.5" cy="14.5" r="6.5" strokeWidth="3" className="logo__glass" />
        <path d="M19.5 19.5 24 24" strokeWidth="3" strokeLinecap="round" className="logo__glass" />
      </svg>
      <span className="logo__word">
        <b>SEO</b> <span>is fun</span>
      </span>
    </a>
  )
}
