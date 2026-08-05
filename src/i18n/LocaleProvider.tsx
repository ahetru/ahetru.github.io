import { useSyncExternalStore } from 'react'
import { LocaleContext } from './LocaleContext'
import { isValidLocale, DEFAULT_LOCALE, type Locale } from './locales'
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

  return DEFAULT_LOCALE
}

function getSnapshot(): Locale {
  return getPathLocale() ?? getDetectedLocale()
}

function subscribe(onStoreChange: () => void): () => void {
  window.addEventListener('popstate', onStoreChange)
  return () => window.removeEventListener('popstate', onStoreChange)
}

function getDetectedLocale(): Locale {
  const stored = localStorage.getItem('locale')
  if (stored && isValidLocale(stored)) return stored
  const navLang = navigator.language?.split('-')[0]
  if (navLang && isValidLocale(navLang)) return navLang
  return DEFAULT_LOCALE
}

function redirectToLocale(locale: Locale) {
  const parts = window.location.pathname.split('/').filter(Boolean)
  if (parts.length > 0 && isValidLocale(parts[0])) {
    parts[0] = locale
  } else {
    parts.unshift(locale)
  }
  const newPath = '/' + parts.join('/') + window.location.hash
  window.history.replaceState(null, '', newPath)
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathLocale = getPathLocale()

  if (!pathLocale) {
    const detected = detectLocale()
    localStorage.setItem('locale', detected)
    redirectToLocale(detected)
  }

  const activeLocale = getPathLocale() ?? getDetectedLocale()

  const setLocale = (next: Locale) => {
    localStorage.setItem('locale', next)
    redirectToLocale(next)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  const value = { locale: activeLocale, setLocale }

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export { useLocale }
