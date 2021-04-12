import styled from 'styled-components';

import { AbsoluteDiv } from '../styles';

function getLinearGradient(sky, daytime) {
  let colors = ['#777', '#ccc'];

  if (daytime === 'night') {
    colors = ['#001020', '#038'];
  }

  return colors.join(', ');
}

export type StyledBackgroundProps = {
  sky: string;
  daytime: string;
};

export const Background = styled(AbsoluteDiv)<StyledBackgroundProps>`
  background: linear-gradient(
    ${(props): string => getLinearGradient(props.sky, props.daytime)}
  );
  z-index: -1;
  position: fixed;
`;
