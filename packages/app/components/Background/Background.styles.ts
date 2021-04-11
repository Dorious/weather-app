import styled from 'styled-components'

import { AbsoluteDiv } from '../styles'

export type StyledBackgroundProps = {
  sky: string
  daytime: string
}

export const Background = styled(AbsoluteDiv)<StyledBackgroundProps>`
  background: #d1d1d1;
  z-index: -1;
  position: fixed;
`
