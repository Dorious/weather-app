import { render } from '@testing-library/react';
import Daily from '.';

import { ForecastTimeStep } from '@dorious/weather-api/dist/locationforecast';

import weatherData from '../../__mocks__/weatherData.json';

describe('Hourly', () => {
  it('should render properly', () => {
    const { container } = render(
      <Daily
        timeseries={
          weatherData.data.properties.timeseries as ForecastTimeStep[]
        }
      />
    );
    expect(container).toMatchSnapshot();
  });
});
