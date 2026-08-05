import { Section } from '@/components/Section'
import { ABOUT } from './about.data'
import './About.css'

export function About() {
  return (
    <Section id="about" title="À propos" subtitle="Un peu de contexte.">
      <div className="about">
        <div className="about__monogram" aria-hidden="true">A</div>
        <div className="about__text">
          {ABOUT.paragraphs.map((paragraph, index) => (
            <p key={index} className="about__paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  )
}