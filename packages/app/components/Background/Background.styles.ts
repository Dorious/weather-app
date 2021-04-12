import styled from 'styled-components';

import { AbsoluteDiv } from '../styles';

function getLinearGradient(sky, daytime) {
  const isClear = sky.match(/clearsky|fair/);
  const isPartlyCloudy = sky.match(/partlycloud/);
  let colors = ['#777', '#ccc'];

  if (isClear && daytime === 'day') {
    colors = ['#4af', '#adf'];
  } else if (isPartlyCloudy && daytime === 'day') {
    colors = ['#aaa', '#adf'];
  } else if (daytime === 'night') {
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
