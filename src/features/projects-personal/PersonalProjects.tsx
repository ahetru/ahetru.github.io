import { Section } from '@/components/Section'
import { useDict } from '@/i18n/useDict'
import '@/features/projects42/Projects42.css'
import './PersonalProjects.css'

export function PersonalProjects() {
  const t = useDict()

  return (
    <Section
      id="projects-personal"
      title={t.sections.projectsPersonal.title}
      subtitle={t.sections.projectsPersonal.subtitle}
      collapsible
    >
      <div className="projects-list" role="list">
        {t.projectsPersonal.items.map((project) => (
          <div className="projects-list__item" key={project.title} role="listitem">
            <a
              href={project.github}
              className="linked-list__node"
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} — ${project.description}`}
            >
              <span className="linked-list__name">{project.title}</span>
              <span className="linked-list__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="linked-list__tag">
                    {tag}
                  </span>
                ))}
              </span>
              <span className="linked-list__desc">{project.description}</span>
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}
