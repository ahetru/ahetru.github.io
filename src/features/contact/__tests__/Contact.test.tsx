import { describe, it, expect, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import { Contact } from '@/features/contact/Contact'
import { CONTACT } from '@/features/contact/contact.data'

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

  it('renders the email link with a mailto href matching the data source', () => {
    const emailLink = CONTACT.links.find((link) => link.href.startsWith('mailto:'))
    expect(emailLink).toBeDefined()

    const { getByRole } = render(<Contact />)
    const link = getByRole('link', { name: emailLink!.aria })
    expect(link.getAttribute('href')).toBe(emailLink!.href)
  })

  it('gives an aria-label to every social link rendered', () => {
    const { getAllByRole } = render(<Contact />)
    const links = getAllByRole('link')

    expect(links).toHaveLength(CONTACT.links.length)

    for (const link of links) {
      const aria = link.getAttribute('aria-label')
      expect(aria).not.toBeNull()
      expect(aria!.trim().length).toBeGreaterThan(0)
    }
  })
})