import { Section } from '@/components/Section'
import { useDict } from '@/i18n/useDict'
import './Education.css'

export function Education() {
  const t = useDict()

  return (
    <Section
      id="education"
      title={t.sections.education.title}
      subtitle={t.sections.education.subtitle}
    >
      <ol className="timeline">
        {t.education.entries.map((entry) => (
          <li key={`${entry.org}-${entry.dates}`} className="timeline__item">
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__content">
              <h3 className="timeline__role">
                {entry.role} — <span className="timeline__org">{entry.org}</span>
              </h3>
              <p className="timeline__dates">{entry.dates}</p>
              {entry.description && <p className="timeline__desc">{entry.description}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
