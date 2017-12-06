import React from 'react';
import styled, { css } from 'react-emotion';

import colors from 'common/colors';

const SecondaryPoint = ({ title, body }) => (
  <div
    className={
      `secondary-point ` +
      css`
        color: ${colors.blueDark};
      `
    }
  >
    <div className={'secondary-point__wrapper'}>
      <h1
        className={css`
          font-size: 20px;
          font-weight: 700;
          display: flex;
          align-items: center;
          margin-bottom: 0.5em;
        `}
      >
        <img
          className={css`
            margin-right: 0.8em;
          `}
          src={require('assets/icons/target.svg')}
        />
        {title}
      </h1>
      <p
        className={
          `secondary-point__body ` +
          css`
            font-size: 18px;
            line-height: 1.67;
          `
        }
      >
        {body}
      </p>
    </div>
  </div>
);

export default SecondaryPoint;
