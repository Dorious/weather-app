import styled from 'styled-components';

import Symbol from '../Symbol';

export const Container = styled.header`
  padding: 1rem 0;
  text-align: center;
`;

export const Coords = styled.div`
  font-size: 1rem;
`;

export const City = styled.h1`
  font-weight: normal;
  font-size: 3rem;
`;
export const Country = styled.h2`
  font-weight: normal;
  font-size: 1rem;
  margin-top: -2rem;
  margin-bottom: 2rem;
`;
export const Sky = styled.h3``;

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
