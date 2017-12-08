import React from 'react';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';

import { green } from 'common/colors';
import GetStartedButton from './GetStartedButton';

const HeaderStyled = styled('div')`
  background: #fff;
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
`;

const LogoStyled = styled('img')`
  width: 40px;
  height: auto;
`;
const AnchorStyled = styled('a')`
  display: inline-flex;
  padding: 13px 30px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  color: #004773;
  &:hover {
    text-decoration: underline;
  }
`;

const greenBg = css`
  background-color: ${green};
`;

export default ({ aboutUs, getStartedTo }) => (
  <HeaderStyled>
    <Link
      to="/"
      className={css`
        margin-right: auto;
      `}
    >
      <LogoStyled src={require('assets/logo-small.png')} />
    </Link>
    {aboutUs && <AnchorStyled href="#about-us">About Us</AnchorStyled>}
    <GetStartedButton to={getStartedTo} />
  </HeaderStyled>
);
