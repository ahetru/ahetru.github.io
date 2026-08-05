import { Section } from '@/components/Section'
import { useDict } from '@/i18n/useDict'
import './About.css'

export function About() {
  const t = useDict()

  return (
    <Section id="about" title={t.sections.about.title} subtitle={t.sections.about.subtitle}>
      {t.about.paragraphs.map((paragraph, index) => (
        <p key={index} className="about__paragraph">
          {paragraph}
        </p>
      ))}
    </Section>
  )
}
