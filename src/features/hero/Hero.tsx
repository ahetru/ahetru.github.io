import { useDict } from '@/i18n/useDict'
import './Hero.css'

export function Hero() {
  const t = useDict()

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <p className="hero__hello">{t.hero.hello}</p>
        <h1 className="hero__name">Axel Hetru</h1>
        <p className="hero__role">{t.hero.role}</p>
        <p className="hero__location">{t.hero.location}</p>
        <p className="hero__tagline">{t.hero.tagline}</p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects-42">
            {t.hero.ctaProjects}
          </a>
        </div>
      </div>
    </section>
  )
}
