import { render, screen } from '@testing-library/react'
import SearchBar from '.'

describe('SearchBar', () => {
  it('should render input', () => {
    render(<SearchBar />)
    expect(screen.getByRole('searchbox')).toBeTruthy()
  })
})
