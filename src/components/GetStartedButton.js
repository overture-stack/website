import React from 'react';
import { css } from 'react-emotion';

export default () => {
  return (
    <button
      css={`
        min-width: 163px;
        min-height: 52px;
        border-radius: 5px;
        background-color: #47d9bf;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
        font-size: 20px;
        text-align: center;
        color: #ffffff;
        border: none;
        padding: 9px 32px;
      `}
    >
      Get Started
    </button>
  );
};
