import { Icon } from './Icon'

const KEYWORDS = [
  'title · description',
  'canonical',
  'robots.txt',
  'sitemap.xml',
  'Core Web Vitals',
  'E-E-A-T',
  '구조화 데이터',
  '서치콘솔',
  '서치어드바이저',
  'OAI-SearchBot',
  'AI 개요',
  'IndexNow',
  '내부 링크',
  '검색의도',
]

/** 롤링 키워드 띠(장식). 같은 세트를 두 번 이어 붙여 translateX(-50%)로 끊김 없이 돕니다. */
export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...KEYWORDS, ...KEYWORDS].map((k, i) => (
          <span className="marquee__item" key={i}>
            {k}
            <Icon name="sparkles" size={14} />
          </span>
        ))}
      </div>
    </div>
  )
}
