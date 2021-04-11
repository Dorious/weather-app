import { render, screen } from '@testing-library/react';
import CurrentWeather from '.';

describe('Background', () => {
  it('should render properly', () => {
    const { container } = render(<CurrentWeather />);
    expect(container).toMatchSnapshot();
  });
});