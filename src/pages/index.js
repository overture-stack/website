import React from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';
import colors from 'common/colors';
import { container } from 'common/layout';

import Header from 'components/Header';
import AboutUs from 'components/home/AboutUs';
import ProductsSection from 'components/home/ProductsSection';

const HeroSectionStyled = styled(`div`)`
  position: relative;
  background-color: ${colors.green};
  min-height: 300px;
  color: ${colors.blueDark};
`;

const PreHeadingStyled = styled(`div`)`
  position: relative;
  color: #fff;
  font-size: 30px;
  line-height: 1.25;
  padding-top: 3em;
  padding-bottom: 1em;
  &:after {
    content: '';
    display: block;
    width: 3em;
    height: 5px;
    background-color: #fff;
    margin-top: 1em;
    margin-left: 0.1em;
  }
`;

const HeadingStyled = styled(`div`)`
  line-height: 1.25;
`;

const SubHeadingStyled = styled(`div`)`
  font-size: 24px;
  line-height: 1.6;
  margin-top: 2em;
  margin-bottom: 3.2em;
`;

const HeroIllustrationStyled = styled(`div`)`
  position: absolute;
  background-image: url(${require('assets/hero-illustration.svg')});
  background-size: cover;
  top: 0;
  right: 0;
  width: 45%;
  height: 100%;
`;

const TextWrapperStyled = styled(`div`)`
  position: relative;
  font-size: 56px;
  overflow: hidden;
  ${container};
  @media (min-width: 1000px) {
    padding-right: 8.5em;
  }
`;

const IndexPage = () => (
  <React.Fragment>
    <Header aboutUs />
    <HeroSectionStyled>
      <HeroIllustrationStyled />
      <TextWrapperStyled>
        <PreHeadingStyled>Overture</PreHeadingStyled>
        <HeadingStyled>
          Open, composable and extendable components for data science in the
          cloud
        </HeadingStyled>
        <SubHeadingStyled>
          Each component can operate on its own or interact with the rest of the
          overture stack, your&nbsp;choice!
        </SubHeadingStyled>
      </TextWrapperStyled>
    </HeroSectionStyled>
    <ProductsSection />
    <AboutUs />
  </React.Fragment>
);

export default IndexPage;
