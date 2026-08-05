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

  it('renders email and GitHub links', () => {
    const { getAllByRole } = render(<Contact />)
    const links = getAllByRole('link')
    expect(links).toHaveLength(2)
  })

  it('renders the email link with the correct mailto href', () => {
    const { getByRole } = render(<Contact />)
    const emailLink = getByRole('link', { name: 'Send an email to Axel Hetru' })
    expect(emailLink.getAttribute('href')).toBe('mailto:axel.hetru@gmail.com')
  })

  it('renders the GitHub link with the correct URL', () => {
    const { getByRole } = render(<Contact />)
    const ghLink = getByRole('link', { name: "Axel Hetru's GitHub profile" })
    expect(ghLink.getAttribute('href')).toBe('https://github.com/ahetru')
    expect(ghLink.getAttribute('target')).toBe('_blank')
  })
})
