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
import bodyImg from './home/assets/home_body_img.svg';
import cubeMaroon from './home/assets/cube_maroon.svg';
import cubeChartreuse from './home/assets/cube_chartreuse.svg';
import cubeTealBlue from './home/assets/cube_teal_blue.svg';
import cubeBrightTeal from './home/assets/cube_bright_teal.svg';
import './home/styles.scss';

Modal.setAppElement('#___gatsby');
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.85)';

export default function HomePage() {
  return (
    <main className="HomePage">
      <section>
        <div>
          <H2>Scalable & Flexible</H2>
          <P1>
            Overture is a collection of modular software components that build into flexible data
            management systems.
          </P1>
        </div>

        {/* container of the image and product links */}

        <div>
          <div>
            <img src={bodyImg} alt="" />
          </div>
          <div>
            <HomeProductLink
              icon={'productSong'}
              alt=""
              title={'Song'}
              textUpper={'Manages metadata submission,'}
              textLower={'validation and tracking.'}
              link={productsDict.song.productsPath}
            />
            <HomeProductLink
              icon={'productScore'}
              alt=""
              title={'Score'}
              textUpper={'Transfers file data to and'}
              textLower={'from the cloud.'}
              link={productsDict.score.productsPath}
            />
            <HomeProductLink
              icon={'productMaestro'}
              alt=""
              title={'Maestro'}
              textUpper={'Organizes dispersed'}
              textLower={'metadata into one index.'}
              link={productsDict.maestro.productsPath}
            />
            <HomeProductLink
              icon={'productArranger'}
              alt=""
              title={'Arranger'}
              textUpper={'Arranges indexed metadata into'}
              textLower={'configurable search'}
              textThirdLine={'portals.'}
              link={productsDict.arranger.productsPath}
            />
            <HomeProductLink
              icon={'productEgo'}
              alt=""
              title={'Ego'}
              textUpper={'A stateless authorization'}
              textLower={'and user management service.'}
              link={productsDict.ego.productsPath}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
