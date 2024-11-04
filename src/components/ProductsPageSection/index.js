import React from 'react';
import { Button, H2, H3, P1, YellowButton } from 'components';
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
  // To line up the AnchorLink scroll, we need to place id={`${title.toLowerCase()}`} at the correct height of the section at different screen width.
  // see the gatsby anchor link plugin for more detail. current offset value is -300 to line up with sections in the  CaseStudies page, which has a nav bar

  let isBrowser = typeof window !== 'undefined';
  let width = isBrowser && window.innerWidth;
  const mobileViewPort = isBrowser && width <= 767;
  const tabletViewPort = isBrowser && 767 < width && width <= 1023;
  const desktopViewPort = isBrowser && 1023 < width && width <= 1215;
  const desktopWideViewPort = isBrowser && 1215 < width && width <= 1407;
  const desktopUltraWideViewPort = isBrowser && 1408 < width;

  const userDocsLink = `https://overture.bio/documentation/${title.toLowerCase()}`;
  const gitHubLink = `https://github.com/overture-stack/${title}`;

  return (
    <section className={`ProductsSection ${isGrey && `grey-bg`}`}>
      <div className={`container`}>
        <div className="holder">
          {/* image/logo container */}
          <div className="image-holder">
            <img alt={`${title} logo`} src={src} />
          </div>

          {/* container of text and button */}
          <div className="text-content-holder">
            {/* title text */}
            <div
              className="title-holder"
              id={`${mobileViewPort && title.toLowerCase()}`}
            >
              <H2>{title}</H2>
            </div>
            {/* subtitle text */}
            <div
              className="subtitle-holder"
              id={`${
                (desktopUltraWideViewPort ||
                  desktopWideViewPort ||
                  desktopViewPort ||
                  tabletViewPort) &&
                title.toLowerCase()
              }`}
            >
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
