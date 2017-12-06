import React from 'react';
import styled, { css } from 'react-emotion';

import colors from 'common/colors';

const KeyPoint = ({ iconSrc, title, body }) => (
  <div
    className={
      `key-point ` +
      css`
        color: ${colors.blueDark};
        padding-left: 42px;
        padding-right: 42px;
      `
    }
  >
    <img src={iconSrc} />
    <h1
      className={css`
        margin-top: 27px;
        margin-bottom: 43px;
        font-size: 30px;
        font-weight: 300;
        line-height: 1.23;
      `}
    >
      {title}
    </h1>
    <p
      className={css`
        font-size: 18px;
        line-height: 1.67;
      `}
    >
      {body}
    </p>
  </div>
);

export default KeyPoint;
