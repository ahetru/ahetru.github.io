import { describe, it, expect, afterEach } from 'vitest'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Projects42 } from '@/features/projects42/Projects42'
import { PROJECTS_42 } from '@/features/projects42/projects42.data'
import { DICT } from '@/i18n/dictionary'
import { vi } from 'vitest'

vi.mock('@/i18n/useDict', () => ({
  useDict: () => DICT.en,
}))

function expand(container: HTMLElement) {
  fireEvent.click(container.querySelector('.section__title--toggle')!)
}

describe('Projects42', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders 13 nodes matching the linked list', () => {
    const { container, getAllByRole } = render(<Projects42 />)
    expand(container)
    expect(getAllByRole('listitem')).toHaveLength(13)
  })

  it('renders every project name', () => {
    const { container, getByLabelText } = render(<Projects42 />)
    expand(container)
    for (const project of PROJECTS_42) {
      const desc = DICT.en.projects42Descs[project.slug]
      expect(
        getByLabelText(
          project.github
            ? `${project.name} — ${desc}`
            : `${project.name} — pas de dépôt`,
        ),
      ).toBeInTheDocument()
    }
  })

  it('born_to_be_root is rendered without a link', () => {
    const { container, getByLabelText } = render(<Projects42 />)
    expand(container)
    const node = getByLabelText('born_to_be_root — pas de dépôt')
    expect(node.tagName).not.toBe('A')
  })

  it('all other projects link to a GitHub HTTPS URL', () => {
    const { container, getByLabelText } = render(<Projects42 />)
    expand(container)
    for (const project of PROJECTS_42) {
      if (!project.github) continue
      const desc = DICT.en.projects42Descs[project.slug]
      const node = getByLabelText(`${project.name} — ${desc}`)
      expect(node.tagName).toBe('A')
      expect(node.getAttribute('href')).toMatch(/^https:\/\//)
      expect(node.getAttribute('target')).toBe('_blank')
    }
  })
})
