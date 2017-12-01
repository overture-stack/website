import React from 'react';
import styled, { css } from 'react-emotion';
import { green } from 'common/colors';
import ButtonStyled from './ButtonStyled';
import ButtonPrimaryStyled from './ButtonPrimaryStyled';

const HeaderStyled = styled('div')`
  background: #fff;
  padding: 26px 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoStyled = styled('img')``;
const NavItemStyled = styled(ButtonStyled)`
  &:hover {
    text-decoration: underline;
  }
`;

const greenBg = css`
  background-color: ${green};
`;

export default () => (
  <HeaderStyled>
    <LogoStyled src={require('assets/logo-small.svg')} />
    <NavItemStyled
      className={css`
        margin-left: auto;
      `}
    >
      About Us
    </NavItemStyled>
    <ButtonPrimaryStyled className={greenBg}>Get Started</ButtonPrimaryStyled>
  </HeaderStyled>
);
