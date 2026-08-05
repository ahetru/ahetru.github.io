export interface ProjectCardData {
  title: string
  description: string
  tags: string[]
  github: string
  demo?: string
}

export interface ProjectCardProps {
  project: ProjectCardData
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>
      <ul className="project-card__tags">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
      <div className="project-card__links">
        <a
          href={project.github}
          className="project-card__link"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            className="project-card__link"
            target="_blank"
            rel="noreferrer noopener"
          >
            Démo
          </a>
        )}
      </div>
    </article>
  )
}
