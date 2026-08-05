import { useDict } from '@/i18n/useDict'
import { SUPPORTED_LOCALES } from '@/i18n/locales'
import type { Locale } from '@/i18n/locales'
import './LanguageSwitcher.css'

function localeLabel(locale: Locale): string {
  if (locale === 'fr') return 'FR'
  if (locale === 'en') return 'EN'
  return 'ES'
}

export function LanguageSwitcher() {
  const t = useDict()
  const pathParts = window.location.pathname.split('/').filter(Boolean)
  const current = pathParts[0] as Locale | undefined
  const rest = pathParts.length > 1 ? '/' + pathParts.slice(1).join('/') : '/'
  const hash = window.location.hash

  return (
    <div className="lang-switcher">
      <span className="lang-switcher__label" aria-hidden="true">
        {t.lang}:
      </span>
      {SUPPORTED_LOCALES.map((locale) => (
        <a
          key={locale}
          href={`/${locale}${rest === '/' ? '' : rest}${hash}`}
          className={`lang-switcher__link${locale === current ? ' is-active' : ''}`}
          aria-label={`${t.lang}: ${localeLabel(locale)}`}
          aria-current={locale === current ? 'true' : undefined}
        >
          {localeLabel(locale)}
        </a>
      ))}
    </div>
  )
}
