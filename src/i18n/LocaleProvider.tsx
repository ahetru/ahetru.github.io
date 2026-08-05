import { LocaleContext } from './LocaleContext'
import { isValidLocale, type Locale } from './locales'
import { DICT } from './dictionary'
import { useLocale } from './useLocale'

function getPathLocale(): Locale | null {
  const segment = window.location.pathname.split('/').filter(Boolean)[0]
  if (!segment) return null
  return isValidLocale(segment) ? segment : null
}

function detectLocale(): Locale {
  const stored = localStorage.getItem('locale')
  if (stored && isValidLocale(stored)) return stored
  const navLang = navigator.language?.split('-')[0]
  if (navLang && isValidLocale(navLang)) return navLang
  return 'en'
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathLocale = getPathLocale()

  if (!pathLocale) {
    const detected = detectLocale()
    localStorage.setItem('locale', detected)
    const parts = window.location.pathname.split('/').filter(Boolean)
    const rest = parts.length > 0 ? '/' + parts.join('/') : ''
    window.location.replace('/' + detected + rest + window.location.hash)
    return null
  }

  document.title = DICT[pathLocale].pageTitle
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', DICT[pathLocale].pageDescription)
  }

  const value = {
    locale: pathLocale,
    setLocale: (_next: Locale) => {},
  }

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export { useLocale }
