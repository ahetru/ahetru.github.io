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

  it('renders 4 education entries', () => {
    const { getAllByRole } = render(<Education />)
    expect(getAllByRole('listitem')).toHaveLength(4)
  })

  it('renders 42 School as the first entry', () => {
    const { getByText } = render(<Education />)
    expect(getByText('42 School')).toBeInTheDocument()
  })
})
