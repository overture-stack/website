import styled, { css } from 'react-emotion';
import { large, medium, small, containerMaxWidth } from 'common/dimensions';

export const container = css`
  max-width: ${containerMaxWidth}px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: ${medium}px) {
    max-width: calc(100% - 60px);
  }
`;
