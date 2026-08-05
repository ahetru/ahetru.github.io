import { useContext } from 'react'
import { LocaleContext } from './LocaleContext'
import type { Locale } from './locales'

export function useLocale(): {
  locale: Locale
  setLocale: (locale: Locale) => void
} {
  return useContext(LocaleContext)
}
