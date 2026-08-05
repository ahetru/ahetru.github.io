import { useDict } from '@/i18n/useDict'
import './Hero.css'

export function Hero() {
  const t = useDict()

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <p className="hero__role">{t.hero.role}</p>
        <p className="hero__location">{t.hero.location}</p>
        <div className="hero__text">
          {t.hero.paragraphs.map((paragraph, index) => (
            <p key={index} className="hero__paragraph">{paragraph}</p>
          ))}
        </div>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects-42">
            {t.hero.ctaProjects}
          </a>
        </div>
      </div>
    </section>
  )
}
