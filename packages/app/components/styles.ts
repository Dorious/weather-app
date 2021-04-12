import styled, { keyframes } from 'styled-components';

export const AbsoluteDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const animateEntry = keyframes`
  from {
    opacity: 0;
    filter: blur(1rem);
    transform: translateY(-2rem);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
`;

export const AnimatedEntry = styled.div<{ delay: number }>`
  opacity: 0;
  animation: ${animateEntry} 1s ease-in forwards;
  animation-delay: ${({ delay }): string => `${delay / 1000}s`};
`;
