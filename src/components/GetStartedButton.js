import React from 'react';
import { css } from 'react-emotion';
// import ButtonStyled from './ButtonStyled';
// import ButtonPrimaryStyled from './ButtonPrimaryStyled';
// <ButtonPrimaryStyled className={greenBg}>Get Started</ButtonPrimaryStyled>

export default ({ to }) => {
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
        cursor: pointer;
      `}
      onClick={() => {
        window.open(to || 'https://github.com/overture-stack');
      }}
    >
      Get Started
    </button>
  );
};
