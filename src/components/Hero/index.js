/**
 * Commonly used site banner that displays
 * text describing the page, and an image.
 **/

import React from 'react';
import { H1, H2 } from 'components';
import './styles.scss';
import img_services from './assets/img_services.svg';
import img_acknowledgements from './assets/img_acknowledgements.svg';

// add svg to this object and use the bgImage prop to use the image in the Hero
const imgs = { img_services, img_acknowledgements };

const Hero = ({
  title,
  titleClass,
  subtitle,
  children,
  bgImage, // this prop will auto-adjust the image inside the Hero
  bgImageStyles = {},
  ImgComponent, // this prop will not auto-adjust
  className,
}) => {
  // Wrapper class is at least a Hero class, + possible custom className override and backgroundImage
  let wrapperClass = ` Hero ${className && className} ${bgImage && 'bg-image'}`;
  let _titleClass = `titles column is-half-desktop ${titleClass && titleClass}`;

  // Add background image + styles if hero needs one.
  let bgImageURL = {
    backgroundImage: `url(${imgs[bgImage]})`,
    ...bgImageStyles,
  };

  return (
    <div className={wrapperClass} style={bgImageURL}>
      {/* Hero Text */}
      <div className=" flex container">
        <section className={_titleClass}>
          <H1>{title}</H1>
          {subtitle && <H2 className="pt3 t-h4">{subtitle}</H2>}
          {children}
        </section>

        {/* Only show this if we pass a component image in. */}
        <section className="image">{ImgComponent && <ImgComponent />}</section>

        {/* otherwise, we are probably using the background image: */}
        {!ImgComponent && <div className="image" />}
      </div>
    </div>
  );
};

export default Hero;
