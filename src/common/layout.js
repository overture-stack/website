import styled, { css } from 'react-emotion';
import { large, medium, small } from 'common/dimensions';

export const container = css`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: ${medium}px) {
    max-width: 600px;
  }
`;
