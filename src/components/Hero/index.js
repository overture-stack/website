/**
 * Commonly used site banner that displays
 * text describing the page, and an image.
 **/

import React from 'react';
import { H1, P3 } from 'components';
import './styles.scss';

const Hero = ({ title, subtitle }) => {
  return (
    <div className="Hero grey-bg">
      <div className="container">
        <section className="Hero__section">
          <H1>{title}</H1>
          <P3 className="Hero__subtitle">{subtitle}</P3>
        </section>
      </div>
    </div>
  );
};

export default Hero;
