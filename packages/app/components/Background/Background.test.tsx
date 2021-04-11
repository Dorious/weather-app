import { render, screen } from '@testing-library/react';
import Background from '.';

describe('SearchBar', () => {
  it('should render input', () => {
    const { container } = render(<Background symbolCode="clearsky_day" />);
    expect(container).toMatchSnapshot();
  });
});