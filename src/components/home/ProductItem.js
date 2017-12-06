import React from 'react';
import Link from 'gatsby-link';
import colors from 'common/colors';
import styled, { css } from 'react-emotion';

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
  @media (max-height: 700px) {
    width: 30%;
  }
`;

const ProductHeaderStyled = styled(`div`)`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-image: linear-gradient(to right, #00a1d9, #47d9bf);
  color: #fff;
  font-weight: 300;
  padding: 15px 17px;
`;

const ProductDescriptionStyled = styled(`div`)`
  line-height: 1.67;
  margin: 16px;
  font-size: 16px;
`;

const LearnMore = ({ link }) => (
  <Link
    className={css`
      margin: 16px;
      color: ${colors.blueLight};
      &:not(:hover) {
        text-decoration: none;
      }
    `}
    to={link}
  >
    Learn More
  </Link>
);

class ProductItem extends React.Component {
  render() {
    const {
      title,
      className,
      description,
      learnMoreLink,
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
            @media (max-height: 700px) {
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          {learnMoreLink && <LearnMore link={learnMoreLink} />}
          <LogoStyled src={logoUrl} />
        </div>
      </WrapperStyled>
    );
  }
}
export default ProductItem;
