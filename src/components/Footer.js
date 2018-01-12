import React from 'react';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';
import colors from 'common/colors';
import { container } from 'common/layout';
import tabs from '../common/products';
import Octocat from './Octocat';

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

const OicrLogo = () => (
  <img
    alt=""
    className={css`
      width: 70%;
    `}
    src={require('assets/logos/oicr.svg')}
  />
);

const NavLink = ({ to, children, href }) =>
  to ? (
    <Link className={navItemStyles} to={to}>
      {children}
    </Link>
  ) : (
    <a className={navItemStyles} href={href}>
      {children} &nbsp;<Octocat
        width={12}
        height={12}
        fill="rgb(96, 102, 126)"
      />
    </a>
  );

export default () => (
  <WrapperStyled>
    <FooterRowStyled>
      <ColumnStyled>
        <OicrLogo />
      </ColumnStyled>
      <ColumnStyled>
        <NavHeadingStyled>About</NavHeadingStyled>
        <a
          className={navItemStyles}
          href={`mailto:dcc-support@oicr.on.ca`}
          target="_blank"
        >
          Contact
        </a>
      </ColumnStyled>

      {tabs.map(tab => {
        return (
          <ColumnStyled key={tab.key}>
            <NavHeadingStyled>{tab.tabText}</NavHeadingStyled>
            {tab.cards.map(card => (
              <NavLink
                key={card.title}
                to={card.learnMoreLink}
                href={card.github}
              >
                {card.title}
              </NavLink>
            ))}
          </ColumnStyled>
        );
      })}
    </FooterRowStyled>
  </WrapperStyled>
);
