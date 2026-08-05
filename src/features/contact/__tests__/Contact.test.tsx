import { describe, it, expect, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import { Contact } from '@/features/contact/Contact'
import { DICT } from '@/i18n/dictionary'
import { vi } from 'vitest'

vi.mock('@/i18n/useDict', () => ({
  useDict: () => DICT.en,
}))

describe('Contact', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders a contact section', () => {
    const { container } = render(<Contact />)
    const section = container.querySelector('section#contact')
    expect(section).not.toBeNull()
    expect(section!.tagName).toBe('SECTION')
  })

  it('renders GitHub and LinkedIn links', () => {
    const { getAllByRole } = render(<Contact />)
    const links = getAllByRole('link')
    expect(links).toHaveLength(2)
  })

  it('renders the GitHub link with the correct URL', () => {
    const { getByRole } = render(<Contact />)
    const ghLink = getByRole('link', { name: "Axel Hetru's GitHub profile" })
    expect(ghLink.getAttribute('href')).toBe('https://github.com/ahetru')
    expect(ghLink.getAttribute('target')).toBe('_blank')
  })

  it('renders the LinkedIn link with the correct URL', () => {
    const { getByRole } = render(<Contact />)
    const liLink = getByRole('link', { name: "Axel Hetru's LinkedIn profile" })
    expect(liLink.getAttribute('href')).toBe('https://www.linkedin.com/in/axel-hetru/')
    expect(liLink.getAttribute('target')).toBe('_blank')
  })
})
