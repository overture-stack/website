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

      <div className="Hero">
        <div className="container">
          <section className="Hero__section">
            <H1>Open Source Software for</H1>
            <Button size="large" type="primary" className="Hero__large-button">
              Submitting
            </Button>
            <H1>Genomics Data</H1>
            <P1>Filling the gaps between genomics data and scientific discovery</P1>
            <div className="Hero__small-buttons-container">
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

      <section>
        <div>
          <H2>Scalable & Flexible</H2>
          <P1 style={{ maxWidth: '30em', textAlign: 'center', margin: '20px auto' }}>
            Overture is a collection of modular software components that build into flexible data
            management systems.
          </P1>
        </div>

        <div className="overture-image-section">
          <div className="image-column">
            <img className="overture-image" src={bodyImg} alt="" />
          </div>
          <div className="text-column">
            <div className="text-wrapper">
              <HomeProductLink
                icon={'productSong'}
                title={'Song'}
                text={'Manages metadata submission, validation and tracking.'}
                link={productsDict.song.productsPath}
              />
              <HomeProductLink
                icon={'productScore'}
                title={'Score'}
                text={'Transfers file data to and from the cloud.'}
                link={productsDict.score.productsPath}
              />
              <HomeProductLink
                icon={'productMaestro'}
                title={'Maestro'}
                text={'Organizes dispersed metadata into one index.'}
                link={productsDict.maestro.productsPath}
              />
              <HomeProductLink
                icon={'productArranger'}
                title={'Arranger'}
                text={'Arranges indexed metadata into configurable search portals.'}
                link={productsDict.arranger.productsPath}
              />
              <HomeProductLink
                icon={'productEgo'}
                title={'Ego'}
                text={'A stateless authorization and user management service.'}
                link={productsDict.ego.productsPath}
              />
            </div>
          </div>
        </div>
      </section>

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

      <img src={cubeMaroon} alt="Floating Maroon Cube" className="maroon-cube" />

      <section className="section lower-white">
        <div className="lower-white__title-container">
          <H2 className="lower-white__title ">Power by Overture</H2>
          <P1>Tackling diverse challenges across several projects</P1>
        </div>

        <div className="lower-white__logos">
          {caseData.map((data, idx) => {
            let active = idx === carouselPage ? 'lower-white__logo-container-active' : '';
            return (
              <img
                key={data.slug}
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
            type="plain"
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
                {caseData[carouselPage].listItems[2].map((i) => {
                  return (
                    <L1 key={i}>
                      <li className="lower-white__blue-container-list">{i}</li>
                    </L1>
                  );
                })}
              </ul>
              <Button
                type="primary"
                size="medium"
                className="mt3"
                anchorLink={caseStudyAnchors[caseData[carouselPage].slug]}
              >
                Learn More
              </Button>
            </div>
          </div>
          <Button
            icon={'arrowRightBlack'}
            type="plain"
            className="lower-white__blue-container-button"
            onClick={() => {
              handleRightArrowClick();
            }}
          />
        </div>

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

      <img src={cubeTealBlue} alt="Floating Blueish Teal Cube" className="teal-blue-cube" />

      <img src={cubeChartreuse} alt="Floating Yellowish Green Cube" className="chartreuse-cube" />

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
      <div className="bg-grey">
        <img src={cubeBrightTeal} alt="Floating Bright Teal Cube" className="bright-teal-cube" />
      </div>
    </main>
  );
}
