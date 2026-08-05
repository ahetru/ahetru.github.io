import { describe, it, expect, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import { Education } from '@/features/education/Education'
import { DICT } from '@/i18n/dictionary'
import { vi } from 'vitest'

vi.mock('@/i18n/useDict', () => ({
  useDict: () => DICT.en,
}))

describe('Education', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders 3 education entries', () => {
    const { getAllByRole } = render(<Education />)
    const items = getAllByRole('listitem')
    expect(items).toHaveLength(3)
  })

  it('renders 42 Barcelona as the first entry', () => {
    const { getByText } = render(<Education />)
    expect(getByText('42 Barcelona')).toBeInTheDocument()
  })
})
