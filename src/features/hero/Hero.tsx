import './Hero.css'

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <p className="hero__hello">Bonjour, je suis</p>
        <h1 className="hero__name">Axel Hetru</h1>
        <p className="hero__role">Junior Software Engineer</p>
        <p className="hero__tagline">
          Construit des interfaces web sobres et performantes.
        </p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects">Voir mes projets</a>
          <a className="btn btn--ghost" href="#contact">Me contacter</a>
        </div>
      </div>
    </section>
  )
}