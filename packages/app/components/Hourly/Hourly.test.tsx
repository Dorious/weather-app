import { render } from '@testing-library/react';
import { ForecastTimeStep } from '@dorious/weather-api/dist/locationforecast';
import Hourly from '.';
import weatherData from '../../__mocks__/weatherData.json';

describe('Hourly', () => {
  it('should render properly', () => {
    const { container } = render(
      <Hourly
        timeseries={
          weatherData.data.properties.timeseries as ForecastTimeStep[]
        }
      />
    );
    expect(container).toMatchSnapshot();
  });
});
