import { describe, it, expect, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import { Projects42 } from '@/features/projects42/Projects42'
import { PROJECTS_42 } from '@/features/projects42/projects42.data'
import { DICT } from '@/i18n/dictionary'
import { vi } from 'vitest'

vi.mock('@/i18n/useDict', () => ({
  useDict: () => DICT.en,
}))

describe('Projects42', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders 13 nodes matching the linked list', () => {
    const { getAllByRole } = render(<Projects42 />)
    const items = getAllByRole('listitem')
    expect(items).toHaveLength(13)
  })

  it('renders every project name', () => {
    const { getByLabelText } = render(<Projects42 />)
    for (const project of PROJECTS_42) {
      expect(
        getByLabelText(
          project.github
            ? `${project.name} — ${project.tags.join(', ')}`
            : `${project.name} — pas de dépôt`,
        ),
      ).toBeInTheDocument()
    }
  })

  it('born_to_be_root (index 3 in data) is rendered without a link', () => {
    const { getByLabelText } = render(<Projects42 />)
    const node = getByLabelText('born_to_be_root — pas de dépôt')
    expect(node.tagName).not.toBe('A')
  })

  it('all other projects link to a GitHub HTTPS URL', () => {
    const { getByLabelText } = render(<Projects42 />)
    for (const project of PROJECTS_42) {
      if (!project.github) continue
      const node = getByLabelText(`${project.name} — ${project.tags.join(', ')}`)
      expect(node.tagName).toBe('A')
      expect(node.getAttribute('href')).toMatch(/^https:\/\//)
      expect(node.getAttribute('target')).toBe('_blank')
    }
  })
})
