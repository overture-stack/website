import { useState } from 'react';
import React from 'react';
import Helmet from 'react-helmet';
import Modal from 'react-modal';
import productsDict from 'constants/products';
import {
  ABOUT_US_PATH,
  DOCUMENTATION_PATH,
  PRODUCTS_PATH,
  caseStudyAnchors,
} from 'constants/pages';
import { Button, H1, H2, H3, P1, L1, Icon, HomeProductLink, YellowButton } from 'components';
import caseData from 'data/case_studies';
import bodyImg from './home/assets/overture_illustration.svg';
import cubeMaroon from './home/assets/cube_maroon.svg';
import cubeChartreuse from './home/assets/cube_chartreuse.svg';
import cubeTealBlue from './home/assets/cube_teal_blue.svg';
import cubeBrightTeal from './home/assets/cube_bright_teal.svg';
import './home/styles.scss';
import './homepagestyles.scss';

Modal.setAppElement('#___gatsby');
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.85)';

export default function HomePage() {
  return (
    <main className="HomePage">
      <section>
        <div>
          <H2>Scalable & Flexible</H2>
          <P1 style={{ maxWidth: '30em', textAlign: 'center', margin: '20px auto' }}>
            Overture is a collection of modular software components that build into flexible data
            management systems.
          </P1>
        </div>

        <div className="section-wrapper">
          <div className="image-column">
            <img className="overture-image" src={bodyImg} alt="" />
            <div style={{ float: 'clear' }}></div>
          </div>
          <div className="text-column">
            <div className="text-wrapper">
              <div className="text-item">
                Ut enim commodo in deserunt nisi laborum cillum elit proident eiusmod cupidatat
                nulla ut.
              </div>
              <div className="text-item">
                Ipsum elit anim aliquip irure mollit aute labore reprehenderit cillum.
              </div>
              <div className="text-item">
                Commodo voluptate officia sunt qui fugiat duis laboris ad magna.
              </div>
              <div className="text-item">
                Nostrud ipsum Lorem cillum ad laborum Lorem fugiat Lorem.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
