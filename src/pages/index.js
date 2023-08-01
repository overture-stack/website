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
  const [carouselPage, setCarouselPage] = useState(0);
  const handleLeftArrowClick = () => {
    carouselPage === 0 ? setCarouselPage(caseData.length - 1) : setCarouselPage(carouselPage - 1);
  };
  const handleRightArrowClick = () => {
    carouselPage === caseData.length - 1 ? setCarouselPage(0) : setCarouselPage(carouselPage + 1);
  };

  return (
    <main className="HomePage">
      <Helmet>
        <title>Overture - Home</title>
        <meta
          name="description"
          content="Overture is a collection of modular software components that build into flexible data management systems."
        />
        <meta
          name="keywords"
          content="Overture, data science software, bioinformatics software, open-source software, cancer research, genomic data, big data, data portals, Ontario Institute for Cancer Research, OICR"
        />
      </Helmet>
      {/* top hero (blue background) */}

      {/* upper white section */}
      <section className="section upper-white mb4">
        <div className="container">
          <H2 className="upper-white__header">Scalable & Flexible</H2>
          <P1 className="upper-white__text column is-offset-1 is-10 mt1">
            Overture is a collection of modular software components that build into flexible data{' '}
            <br />
            management systems.
          </P1>
        </div>

        {/* container of the image and product links */}

        <div className="upper-white__container-img-links mt4">
          <div className="upper-white__img-container">
            <img
              className="upper-white__img"
              src={bodyImg}
              alt="Home Page Upper White Section Image"
            />
          </div>
          <div className="upper-white__product-links ">
            <HomeProductLink
              icon={'productSong'}
              alt={'Song Icon'}
              title={'Song'}
              textUpper={'Manages metadata submission,'}
              textLower={'validation and tracking.'}
              link={productsDict.song.productsPath}
            ></HomeProductLink>
            <HomeProductLink
              icon={'productScore'}
              alt={'Score Icon'}
              title={'Score'}
              textUpper={'Transfers file data to and'}
              textLower={'from the cloud.'}
              link={productsDict.score.productsPath}
            ></HomeProductLink>
            <HomeProductLink
              icon={'productMaestro'}
              alt={'Maestro Icon'}
              title={'Maestro'}
              textUpper={'Organizes dispersed'}
              textLower={'metadata into one index.'}
              link={productsDict.maestro.productsPath}
            ></HomeProductLink>
            <HomeProductLink
              icon={'productArranger'}
              alt={'Arranger Icon'}
              title={'Arranger'}
              textUpper={'Arranges indexed metadata into'}
              textLower={'configurable search'}
              textThirdLine={'portals.'}
              link={productsDict.arranger.productsPath}
            ></HomeProductLink>
            <HomeProductLink
              icon={'productEgo'}
              alt={'Ego Icon'}
              title={'Ego'}
              textUpper={'A stateless authorization'}
              textLower={'and user management service.'}
              link={productsDict.ego.productsPath}
            ></HomeProductLink>
          </div>
        </div>
      </section>

      {/* upper grey section */}
    </main>
  );
}
