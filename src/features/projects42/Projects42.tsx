import { Section } from '@/components/Section'
import { useDict } from '@/i18n/useDict'
import { PROJECTS_42 } from './projects42.data'
import './Projects42.css'

export function Projects42() {
  const t = useDict()

  return (
    <Section
      id="projects-42"
      title={t.sections.projects42.title}
      subtitle={t.sections.projects42.subtitle}
      collapsible
    >
      <div className="linked-list" role="list" aria-label={t.nav.projects42}>
        {PROJECTS_42.map((project, i) => {
          const desc = t.projects42Descs[project.slug] ?? project.name

          return (
            <div key={project.slug}>
              <div className="linked-list__group" role="listitem">
                {project.github ? (
                  <a
                    href={project.github}
                    className="linked-list__node"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${project.name} — ${desc}`}
                  >
                    <span className="linked-list__name">{project.name}</span>
                    <span className="linked-list__tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="linked-list__tag">
                          {tag}
                        </span>
                      ))}
                    </span>
                    <span className="linked-list__desc">{desc}</span>
                  </a>
                ) : (
                  <span
                    className="linked-list__node linked-list__node--muted"
                    aria-label={`${project.name} — pas de dépôt`}
                  >
                    <span className="linked-list__name">{project.name}</span>
                    <span className="linked-list__tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="linked-list__tag">
                          {tag}
                        </span>
                      ))}
                    </span>
                    <span className="linked-list__desc">{desc}</span>
                  </span>
                )}
              </div>
              {i < PROJECTS_42.length - 1 && (
                <span className="linked-list__arrow" aria-hidden="true">
                  ↓
                </span>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
