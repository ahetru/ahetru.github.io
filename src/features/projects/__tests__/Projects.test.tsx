import { describe, it, expect, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import { Projects } from '@/features/projects/Projects'
import { PROJECTS } from '@/features/projects/projects.data'

describe('Projects', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders one card per project in the data source', () => {
    const { getAllByRole } = render(<Projects />)

    const articles = getAllByRole('article')
    expect(articles).toHaveLength(PROJECTS.length)
  })

  it('exposes each project title as a heading', () => {
    const { getByRole } = render(<Projects />)

    for (const project of PROJECTS) {
      expect(getByRole('heading', { level: 3, name: project.title })).toBeInTheDocument()
    }
  })

  it('links every card to a GitHub URL over https', () => {
    const { getAllByRole } = render(<Projects />)
    const articles = getAllByRole('article')

    expect(articles).toHaveLength(PROJECTS.length)

    for (const article of articles) {
      const links = article.querySelectorAll('a')
      const github = Array.from(links).find((link) => link.textContent === 'GitHub')
      expect(github).not.toBeUndefined()
      expect(github!.getAttribute('href')).toMatch(/^https:\/\//)
    }
  })
})