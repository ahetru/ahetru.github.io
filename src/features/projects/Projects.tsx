import { Section } from '@/components/Section'
import { ProjectCard } from './ProjectCard'
import { PROJECTS } from './projects.data'
import './Projects.css'

export function Projects() {
  return (
    <Section id="projects" title="Projets" subtitle="Quelques réalisations récentes.">
      <div className="projects">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.marker} project={project} />
        ))}
      </div>
    </Section>
  )
}