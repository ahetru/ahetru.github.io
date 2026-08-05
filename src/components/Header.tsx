import { useState } from 'react'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { ThemeToggle } from '@/features/theme/ThemeToggle'
import './Header.css'

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'] as const

interface NavItem {
  id: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'experience', label: 'Expérience' },
  { id: 'contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

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