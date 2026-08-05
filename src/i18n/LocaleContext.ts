import { createContext } from 'react'
import type { Locale } from './locales'

export interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {
    throw new Error('LocaleContext not mounted')
  },
})
