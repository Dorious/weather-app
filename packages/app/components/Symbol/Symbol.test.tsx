import { render, screen } from '@testing-library/react'
import Symbol from '.'

describe('Symbol', () => {
  it('should render proper image', () => {
    render(<Symbol code="clearsky_day" />)
    const image = screen.getByRole('img')
    expect(image.getAttribute('src')).toEqual('/symbols/svg/clearsky_day.svg')
  })
})
