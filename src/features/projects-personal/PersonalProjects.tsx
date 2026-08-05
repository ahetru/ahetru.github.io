import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/ProjectCard'
import { useDict } from '@/i18n/useDict'
import './PersonalProjects.css'

export function PersonalProjects() {
  const t = useDict()

  return (
    <Section
      id="projects-personal"
      title={t.sections.projectsPersonal.title}
      subtitle={t.sections.projectsPersonal.subtitle}
    >
      <div className="projects-grid">
        {t.projectsPersonal.items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}
