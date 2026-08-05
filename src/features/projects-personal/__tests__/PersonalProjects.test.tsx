import { describe, it, expect, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import { PersonalProjects } from '@/features/projects-personal/PersonalProjects'
import { DICT } from '@/i18n/dictionary'
import { vi } from 'vitest'

vi.mock('@/i18n/useDict', () => ({
  useDict: () => DICT.en,
}))

describe('PersonalProjects', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders one card per personal project in the dictionary', () => {
    const { getAllByRole } = render(<PersonalProjects />)
    expect(getAllByRole('article')).toHaveLength(DICT.en.projectsPersonal.items.length)
  })

  it('renders the project title and GitHub link', () => {
    const { getByRole } = render(<PersonalProjects />)
    const title = getByRole('heading', { level: 3 })
    expect(title).toHaveTextContent('Chess Visualization Trainer')

    const links = getByRole('link', { name: 'GitHub' })
    expect(links).toHaveAttribute('href', 'https://github.com/ahetru/chess-visualization-trainer')
  })
})
