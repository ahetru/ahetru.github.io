import { useState, type ReactNode } from 'react'

export interface SectionProps {
  id: string
  title: string
  subtitle?: string
  collapsible?: boolean
  children: ReactNode
}

export function Section({
  id,
  title,
  subtitle,
  collapsible = false,
  children,
}: SectionProps) {
  const [expanded, setExpanded] = useState(!collapsible)

  return (
    <section id={id} className="section">
      {collapsible ? (
        <button
          type="button"
          className="section__title section__title--toggle"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          <span className="section__title-text">{title}</span>
          <span className="section__chevron" aria-hidden="true">
            {expanded ? '▾' : '▸'}
          </span>
        </button>
      ) : (
        <h2 className="section__title">{title}</h2>
      )}
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
      {expanded && <div className="section__body">{children}</div>}
    </section>
  )
}
