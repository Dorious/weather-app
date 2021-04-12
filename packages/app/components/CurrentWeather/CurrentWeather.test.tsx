import { render } from '@testing-library/react';
import CurrentWeather from '.';

describe('CurrentWeather', () => {
  it('should render properly', () => {
    const { container } = render(<CurrentWeather />);
    expect(container).toMatchSnapshot();
  });
});
