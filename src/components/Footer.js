import React from 'react';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';
import colors from 'common/colors';
import { container } from 'common/layout';

import ButtonStyled from './ButtonStyled';
import ButtonPrimaryStyled from './ButtonPrimaryStyled';

const WrapperStyled = styled('div')`
  border-top: 1px solid #ddd;
  padding-top: 70px;
  padding-bottom: 70px;
  line-height: calc(5/3);
`;

const FooterRowStyled = styled(`div`)`
  ${container} display: flex;
  justify-content: space-between;
`;

const ColumnStyled = styled(`div`)`
  flex-grow: 1;
  flex-basis: calc(100% / 7);
  font-size: 18px;
`;

const NavHeadingStyled = styled(`div`)`
  color: ${colors.green};
  font-weight: 400;
`;

const navItemStyles = css`
  display: block;
  color: ${colors.blueDark};
  font-weight: 300;
  opacity: 0.85;
  &:not(:hover) {
    text-decoration: none;
  }
`;

const NavItemStyled = styled(`div`)`
  ${navItemStyles};
`;

const OicrLogo = () => (
  <img
    className={css`
      width: 70%;
    `}
    src={require('assets/logos/oicr.svg')}
  />
);

const NavLink = ({ to, children }) => (
  <Link className={navItemStyles} to={to}>
    {children}
  </Link>
);

export default () => (
  <WrapperStyled>
    <FooterRowStyled>
      <ColumnStyled>
        <OicrLogo />
      </ColumnStyled>
      <ColumnStyled>
        <NavHeadingStyled>About</NavHeadingStyled>
        <NavLink to="">About ICGC</NavLink>
        <a
          className={navItemStyles}
          href={`mailto:dcc-support@oicr.on.ca`}
          target="_blank"
        >
          Contact
        </a>
      </ColumnStyled>
      <ColumnStyled>
        <NavHeadingStyled>Operate</NavHeadingStyled>
        <NavItemStyled>Enrolment app</NavItemStyled>
        <NavItemStyled>Usage</NavItemStyled>
        <NavItemStyled>Billing</NavItemStyled>
      </ColumnStyled>
      <ColumnStyled>
        <NavHeadingStyled>Transfer & Store</NavHeadingStyled>
        <NavItemStyled>Song</NavItemStyled>
        <NavItemStyled>Score</NavItemStyled>
        <NavItemStyled>Ego</NavItemStyled>
      </ColumnStyled>
      <ColumnStyled>
        <NavHeadingStyled>Do science</NavHeadingStyled>
        <NavItemStyled>ICGC</NavItemStyled>
        <NavItemStyled>Component 2</NavItemStyled>
      </ColumnStyled>
      <ColumnStyled>
        <NavHeadingStyled>Share</NavHeadingStyled>
        <NavItemStyled>OncoJS</NavItemStyled>
        <NavItemStyled>Component 2</NavItemStyled>
      </ColumnStyled>
    </FooterRowStyled>
  </WrapperStyled>
);
