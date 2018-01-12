import React from 'react';
import Link from 'gatsby-link';
import colors from 'common/colors';
import styled, { css } from 'react-emotion';
import { smallHeight } from 'common/dimensions';
import Octocat from '../Octocat';

const WrapperStyled = styled(`div`)`
  color: ${colors.blueDark};
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 0 7.5px 0 rgba(0, 0, 0, 0.2);
  }
`;

const LogoStyled = styled(`img`)`
  width: 40%;
  align-self: flex-end;
  margin-top: auto;
  margin-bottom: 0;
  @media (max-height: ${smallHeight}px) {
    width: 30%;
    margin-top: 0;
  }
`;

const ProductHeaderStyled = styled(`div`)`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-image: linear-gradient(to right, #00a1d9, #47d9bf);
  color: #fff;
  font-weight: 300;
  font-size: 20px;
  font-weight: 700;
  padding: 20px 25px;
`;

const ProductDescriptionStyled = styled(`div`)`
  line-height: 1.67;
  margin: 20px 25px 0;
  font-size: 18px;
`;

const LearnMore = ({ link }) => (
  <Link
    className={css`
      margin-top: 1em;
      color: ${colors.blueLight};
      &:not(:hover) {
        text-decoration: none;
      }
      @media (max-height: ${smallHeight}px) {
        margin-top: 0;
      }
    `}
    to={link}
  >
    Learn More
  </Link>
);

const LearnMoreGithub = ({ link }) => (
  <a
    className={css`
      margin-top: 1em;
      color: ${colors.blueLight};
      &:not(:hover) {
        text-decoration: none;
      }
      @media (max-height: ${smallHeight}px) {
        margin-top: 0;
      }
    `}
    href={link}
  >
    Learn More &nbsp;<Octocat width={12} height={12} fill="rgb(96, 102, 126)" />
  </a>
);

class ProductItem extends React.Component {
  render() {
    const {
      title,
      className,
      description,
      learnMoreLink,
      github,
      logoUrl,
    } = this.props;
    return (
      <WrapperStyled className={className}>
        <ProductHeaderStyled>{title}</ProductHeaderStyled>
        <ProductDescriptionStyled>{description}</ProductDescriptionStyled>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            margin: 0 24px 32px;
            height: 100%;
            @media (max-height: ${smallHeight}px) {
              margin-top: auto;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              height: auto;
            }
          `}
        >
          {learnMoreLink && <LearnMore link={learnMoreLink} />}
          {!learnMoreLink && github && <LearnMoreGithub link={github} />}
          {logoUrl && <LogoStyled src={logoUrl} />}
        </div>
      </WrapperStyled>
    );
  }
}
export default ProductItem;
