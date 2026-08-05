import { describe, it, expect, afterEach } from 'vitest'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { PersonalProjects } from '@/features/projects-personal/PersonalProjects'
import { DICT } from '@/i18n/dictionary'
import { vi } from 'vitest'

vi.mock('@/i18n/useDict', () => ({
  useDict: () => DICT.en,
}))

function expand(container: HTMLElement) {
  fireEvent.click(container.querySelector('.section__title--toggle')!)
}

describe('PersonalProjects', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders one card per personal project in the dictionary', () => {
    const { container, getAllByRole } = render(<PersonalProjects />)
    expand(container)
    expect(getAllByRole('listitem')).toHaveLength(DICT.en.projectsPersonal.items.length)
  })

  it('renders the project title and GitHub link', () => {
    const { container, getByLabelText } = render(<PersonalProjects />)
    expand(container)
    const node = getByLabelText('Chess Visualization Trainer — Personal project to learn Java and Spring Boot through a chess training application.')
    expect(node.tagName).toBe('A')
    expect(node.getAttribute('href')).toBe('https://github.com/ahetru/chess-visualization-trainer')
  })
})
