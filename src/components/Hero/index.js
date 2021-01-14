/**
 * Commonly used site banner that displays
 * text describing the page, and an image.
 **/

import React from 'react';
import { H1, H3 } from 'components';
import './styles.scss';
import img_services from './assets/img_services.svg';

// some images
const imgs = { img_services };

const Hero = ({
  title,
  titleClass,
  subtitle,
  children,
  bgImage,
  bgImageStyles = {},
  ImgComponent,
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
          {subtitle && <H3 className="pt3">{subtitle}</H3>}
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
