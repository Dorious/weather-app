import styled from 'styled-components';

import Symbol from '../Symbol';

export const Container = styled.header`
  padding: 1rem 0;
  text-align: center;
`;

export const Header = styled.h1``;
export const Sky = styled.h2``;

export const TemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Temperature = styled.span`
  font-size: 5rem;
  padding: 0;
`;

export const FromTo = styled.p`
  font-size: 1rem;
  padding: 0;
`;

export const WeatherSymbol = styled(Symbol)`
  width: 6rem;
  height: 6rem;
`;