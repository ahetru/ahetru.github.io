import { Section } from '@/components/Section'
import { useDict } from '@/i18n/useDict'
import './Experience.css'

export function Experience() {
  const t = useDict()

  return (
    <Section
      id="experience"
      title={t.sections.experience.title}
      subtitle={t.sections.experience.subtitle}
    >
      <ol className="timeline">
        {t.experience.entries.map((entry) => (
          <li key={`${entry.org}-${entry.dates}`} className="timeline__item">
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__content">
              <h3 className="timeline__role">
                {entry.role} — <span className="timeline__org">{entry.org}</span>
              </h3>
              <p className="timeline__dates">{entry.dates}</p>
              <p className="timeline__desc">{entry.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
