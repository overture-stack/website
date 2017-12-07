import React from 'react';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';

import { green } from 'common/colors';
import ButtonStyled from './ButtonStyled';
import ButtonPrimaryStyled from './ButtonPrimaryStyled';

const HeaderStyled = styled('div')`
  background: #fff;
  padding: 20px 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
`;

const LogoStyled = styled('img')`
  width: 40px;
  height: auto;
`;
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
    <Link to="/">
      <LogoStyled src={require('assets/logo-small.png')} />
    </Link>
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
