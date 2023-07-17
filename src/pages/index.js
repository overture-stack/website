import './home/styles.scss';
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
import bodyImg from './home/assets/home_body_img.svg';
import cubeMaroon from './home/assets/cube_maroon.svg';
import cubeChartreuse from './home/assets/cube_chartreuse.svg';
import cubeTealBlue from './home/assets/cube_teal_blue.svg';
import cubeBrightTeal from './home/assets/cube_bright_teal.svg';
import caseData from 'data/case_studies';

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

      <div className="Hero">
        <div className="container">
          <section className="Hero__section">
            <H1>Open Source Software for</H1>
            <Button size="large" type="primary" className="Hero__large-button">
              Submitting
            </Button>
            <H1>Genomics Data</H1>
            <P1>Filling the gaps between genomics data and scientific discovery</P1>
            <div className="flex Hero__small-buttons">
              <Button link={PRODUCTS_PATH} size="medium" type="primary">
                Our Products
              </Button>
              <Button size="medium" type="primary">
                Get Started
              </Button>
            </div>
          </section>
        </div>
      </div>

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

      <section className=" section upper-grey bg-grey">
        <div className="upper-grey__line">
          <h2 className="grey-section-text">We are OICR's team of</h2>
          <Icon
            alt="Software Engineers Icon"
            img="softwareEngineers"
            size="60px"
            className="upper-grey__icon"
          />
          <h2 className="grey-section-text">software engineers,</h2>
          <Icon alt="Data Icon" img="data" size="60px" className="upper-grey__icon" />
          <h2 className="grey-section-text">data</h2>
        </div>

        <div className="upper-grey__line">
          <h2 className="grey-section-text">scientists and</h2>
          <Icon alt="Cloud Icon" img="cloudWeather" size="60px" className="upper-grey__icon" />
          <h2 className="grey-section-text">cloud infrastructure specialists developing</h2>
        </div>

        <div className="upper-grey__line">
          <Icon alt="Big Data Icon" img="bigData" size="60px" className="upper-grey__icon" />
          <h2 className="grey-section-text">
            big-data tools for those advancing the knowledge and
          </h2>
        </div>

        <div className="upper-grey__line">
          <h2 className="grey-section-text">treatment of cancer.</h2>
        </div>

        <Button
          link={ABOUT_US_PATH}
          size="medium"
          type="primary"
          className="upper-grey__button mt2"
        >
          About Us
        </Button>
      </section>

      {/* floating maroon cube */}

      <img src={cubeMaroon} alt="Floating Maroon Cube" className="maroon-cube" />

      {/* lower white section */}

      <section className="section lower-white">
        <div className="lower-white__title-container">
          <H2 className="lower-white__title ">Power by Overture</H2>
          <P1>Tackling diverse challenges across several projects</P1>
        </div>

        {/* carousel */}

        <div className="lower-white__logos">
          {caseData.map((data, idx) => {
            let active = idx === carouselPage ? 'lower-white__logo-active' : '';
            return (
              <img
                src={data.logo}
                alt={data.slug}
                onClick={() => {
                  setCarouselPage(idx);
                }}
                className={`lower-white__logo ${active}`}
              />
            );
          })}
        </div>
        <div className="lower-white__blue-container">
          <Button
            icon={'arrowLeftBlack'}
            type="secondary"
            className="lower-white__blue-container-button"
            onClick={() => {
              handleLeftArrowClick();
            }}
          />
          <div className="lower-white__blue-container-content">
            <img
              src={caseData[carouselPage].details[0].screenshot}
              alt="screenshot"
              className="lower-white__blue-container-image"
            />
            <div className="lower-white__blue-container-right">
              <H3 className="lower-white__blue-container-title">{caseData[carouselPage].title}</H3>
              <ul>
                {caseData[carouselPage].listItems[2].map((i, idx) => {
                  return (
                    <L1>
                      <li className="lower-white__blue-container-list" key={idx}>
                        {i}
                      </li>
                    </L1>
                  );
                })}
              </ul>
              <Button
                type="primary"
                size="medium"
                className="mt3"
                link={caseStudyAnchors[caseData[carouselPage].slug]}
              >
                Learn More
              </Button>
            </div>
          </div>
          <Button
            icon={'arrowRightBlack'}
            type="secondary"
            className="lower-white__blue-container-button"
            onClick={() => {
              handleRightArrowClick();
            }}
          />
        </div>

        {/* section below carousel */}

        <H2 className=" lower-white__title ">Getting Started with Overture</H2>
        <div className="lower-white__yellow-buttons">
          <YellowButton
            img_src="identifyNeeds"
            alt="identifyNeeds Icon"
            title="Identify Your Needs"
            text="Learn about our core components and how they can help you achieve your goals."
          />
          <YellowButton
            img_src="exploreDocs"
            alt="exploreDocs Icon"
            title="Explore the Docs"
            text="See how to deploy, configure and use our software."
          />
          <YellowButton
            img_src="joinCommunity"
            alt="joinCommunity Icon"
            title="Join Our Community"
            text="Get help, share knowledge, and stay current."
          />
        </div>
      </section>

      {/* floating blueish teal cube */}

      <img src={cubeTealBlue} alt="Floating Blueish Teal Cube" className="teal-blue-cube" />

      {/* floating chartreuse cube */}

      <img src={cubeChartreuse} alt="Floating Yellowish Green Cube" className="chartreuse-cube" />

      {/* lower grey section */}
      <section className="lower-grey section bg-grey">
        <div className="lower-grey__container">
          <h2 className="grey-section-text lower-grey__text">
            Improving data accessibility with flexible and<br></br> scalable software components.
          </h2>
          <div className="mt3 lower-grey__buttons">
            <Button type="primary" size="medium" link={DOCUMENTATION_PATH}>
              Get Started
            </Button>
            <Button type="primary" size="medium" link={PRODUCTS_PATH}>
              Our Product
            </Button>
          </div>
        </div>
      </section>

      {/* floating bright teal cube */}

      <img src={cubeBrightTeal} alt="Floating Bright Teal Cube" className="bright-teal-cube" />
    </main>
  );
}
