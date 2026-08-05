import { useMemo } from 'react'
import { useLocale } from './useLocale'
import { DICT } from './dictionary'
import type { Dictionary } from './dictionary'

export function useDict(): Dictionary {
  const { locale } = useLocale()
  return useMemo(() => DICT[locale], [locale])
}
