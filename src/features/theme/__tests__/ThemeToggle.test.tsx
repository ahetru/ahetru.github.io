import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeToggle } from '@/features/theme/ThemeToggle'

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.setAttribute('data-theme', 'dark')
  })

  afterEach(() => {
    cleanup()
  })

  it('renders an accessible theme toggle button', () => {
    const { getByRole } = render(<ThemeToggle />)
    expect(getByRole('button', { name: 'Basculer le thème' })).toBeInTheDocument()
  })

  it('flips the data-theme attribute on documentElement and persists it to localStorage', async () => {
    const user = userEvent.setup()
    const { getByRole } = render(<ThemeToggle />)

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')

    await user.click(getByRole('button', { name: 'Basculer le thème' }))

    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    expect(localStorage.getItem('theme')).toBe('light')

    await user.click(getByRole('button', { name: 'Basculer le thème' }))

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
  })
})