import { useState, useRef, useEffect } from 'react'
import { SUPPORTED_LOCALES } from '@/i18n/locales'
import type { Locale } from '@/i18n/locales'
import './LanguageSwitcher.css'

function localeLabel(locale: Locale): string {
  return locale.toUpperCase()
}

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const pathParts = window.location.pathname.split('/').filter(Boolean)
  const current = pathParts[0] as Locale | undefined
  const rest = pathParts.length > 1 ? '/' + pathParts.slice(1).join('/') : ''
  const hash = window.location.hash

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [open])

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        type="button"
        className="lang-switcher__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-label={`Langue actuelle : ${localeLabel(current || 'en')}`}
        aria-expanded={open}
      >
        {localeLabel(current || 'en')}
      </button>
      {open && (
        <div className="lang-switcher__menu" role="menu">
          {SUPPORTED_LOCALES.map((locale) => (
            <a
              key={locale}
              href={`/${locale}${rest === '/' ? '' : rest}${hash}`}
              className={`lang-switcher__option${locale === current ? ' is-active' : ''}`}
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {localeLabel(locale)}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
