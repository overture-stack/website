import styled, { css } from 'react-emotion';

export const container = css`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1000px) {
    max-width: 600px;
  }
`;
