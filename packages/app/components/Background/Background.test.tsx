import { render } from '@testing-library/react';
import Background from '.';

describe('Background', () => {
  it('should render properly', () => {
    const { container } = render(<Background symbolCode="clearsky_day" />);
    expect(container).toMatchSnapshot();
  });
});
