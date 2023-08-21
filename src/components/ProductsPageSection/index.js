import React from 'react';
import './styles.scss';
import { H2, H3, P1, Button, YellowButton } from 'components';
import './styles.scss';

export default function ProductPageSection({
  src,
  title,
  subtitle,
  description,
  links,
  yellowButtonIcon1,
  yellowButtonIcon2,
  yellowButtonIcon3,
  yellowButtonTitle1,
  yellowButtonTitle2,
  yellowButtonTitle3,
  yellowButtonText1,
  yellowButtonText2,
  yellowButtonText3,
  isGrey,
}) {
  return (
    <section className={`ProductsSection ${isGrey && `grey`}`}>
      <div className={`container `}>
        <div className="holder">
          <div className="image-holder">
            <img alt={`${title} logo`} src={src} />
          </div>
          <div className="title-holder">
            <H2>{title}</H2>
          </div>
          <div className="subtitle-holder">
            <H3>{subtitle}</H3>
          </div>
          <div className="description-holder">
            <P1>{description}</P1>
          </div>
          <div className="buttons-holder">
            <Button type="primary" size="medium">
              GitHub
            </Button>
            <Button type="primary" size="medium">
              User Docs
            </Button>
          </div>
          <div className="yellow-buttons-holder">
            <YellowButton
              img_src={yellowButtonIcon1}
              title={yellowButtonTitle1}
              text={yellowButtonText1}
              isProductPage={true}
            />
            <YellowButton
              img_src={yellowButtonIcon2}
              title={yellowButtonTitle2}
              text={yellowButtonText2}
              isProductPage={true}
            />
            <YellowButton
              img_src={yellowButtonIcon3}
              title={yellowButtonTitle3}
              text={yellowButtonText3}
              isProductPage={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
