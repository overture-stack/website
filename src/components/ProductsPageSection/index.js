import React from 'react';
import { Button, H2, H3, P1, YellowButton } from 'components';
import { DOCS_DEVELOP } from 'constants/external-links';
import './styles.scss';

export default function ProductPageSection({
  src,
  title,
  subtitle,
  description,
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
  // Component reference lives under the Develop journey on docs.overture.bio,
  // where the path segment is the component's capitalized name.
  const userDocsLink = `${DOCS_DEVELOP}/${title}/overview`;
  const gitHubLink = `https://github.com/overture-stack/${title}`;

  return (
    <section
      className={`ProductsSection ${isGrey && `grey-bg`}`}
      id={title.toLowerCase()}
    >
      <div className={`container`}>
        <div className="holder">
          {/* image/logo container */}
          <div className="image-holder">
            <img alt={`${title} logo`} src={src} />
          </div>

          {/* container of text and button */}
          <div className="text-content-holder">
            {/* title text */}
            <div className="title-holder">
              <H2>{title}</H2>
            </div>
            {/* subtitle text */}
            <div className="subtitle-holder">
              <H3>{subtitle}</H3>
            </div>
            {/* description text */}
            <div className="description-holder">
              <P1 className="description">{description}</P1>
            </div>
            {/* contianer of the two blue coloured buttons */}
            <div className="buttons-holder">
              <Button link={gitHubLink} type="primary" size="medium">
                GitHub
              </Button>
              <Button link={userDocsLink} type="primary" size="medium">
                Documentation
              </Button>
            </div>
          </div>

          {/* container of the three yellow buttons */}
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
