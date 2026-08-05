import { useState } from 'react'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useDict } from '@/i18n/useDict'
import { ThemeToggle } from '@/features/theme/ThemeToggle'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import './Header.css'

export function Header() {
  const [open, setOpen] = useState(false)
  const t = useDict()

  const SECTION_IDS = [
    'hero',
    'about',
    'skills',
    'projects-42',
    'projects-personal',
    'experience',
    'education',
    'contact',
  ] as const

  const NAV_ITEMS = [
    { id: 'hero', label: t.nav.hero },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects-42', label: t.nav.projects42 },
    { id: 'projects-personal', label: t.nav.projectsPersonal },
    { id: 'experience', label: t.nav.experience },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact },
  ]

  const activeId = useScrollSpy(SECTION_IDS as unknown as readonly string[])

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#hero" className="header__brand" aria-label="Accueil — Axel Hetru">
          Axel H.
        </a>

        <nav aria-label="Navigation principale" className="header__nav">
          <ul className="header__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`header__link${activeId === item.id ? ' is-active' : ''}`}
                  aria-current={activeId === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <LanguageSwitcher />
        <ThemeToggle />

        <button
          type="button"
          className="header__burger"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            {open ? (
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="header__mobile">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`header__mobile-link${activeId === item.id ? ' is-active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
