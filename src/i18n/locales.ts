export type Locale = 'fr' | 'en' | 'es'

export const SUPPORTED_LOCALES: Locale[] = ['fr', 'en', 'es']
export const DEFAULT_LOCALE: Locale = 'en'

export function isValidLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as string[]).includes(value)
}
