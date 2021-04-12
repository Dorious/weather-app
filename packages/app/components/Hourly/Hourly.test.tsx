import { render } from '@testing-library/react';
import Hourly from '.';

import { WeatherData } from '../../context/app.types';

import weatherData from '../../__mocks__/weatherData.json';

describe('Hourly', () => {
  it('should render properly', () => {
    const { container } = render(
      <Hourly weatherData={weatherData.data as WeatherData} />
    );
    expect(container).toMatchSnapshot();
  });
});
