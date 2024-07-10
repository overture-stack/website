import { useState } from 'react';
import React from 'react';
import Helmet from 'react-helmet';
import Modal from 'react-modal';
import {
  ABOUT_US_PATH,
  PRODUCTS_PATH,
  SERVICES_PATH,
  caseStudyAnchors,
  productsAnchors,
  GETTING_STARTED_PATH,
} from 'constants/pages';
import {
  OVERTURE_GITHUB_LINK,
  SLACK_LINK,
  DEMO_LINK,
  DOCKER_DOWNLOAD,
} from '../../constants/external-links.js';
import {
  Button,
  H1,
  H2,
  H3,
  P1,
  Icon,
  HomeProductLink,
  YellowButton,
  P2,
  Terminal,
} from 'components';
import caseData from 'data/case_studies';
import bodyImg from './home/assets/overture_illustration.svg';
import cubeMaroon from './home/assets/cube_maroon.svg';
import cubeBrightTealInverted from './home/assets/cube_bright_teal_inverted.svg';
import cubeYellow from './home/assets/cube_yellow.svg';
import cubeChartreuse from './home/assets/cube_chartreuse.svg';
import cubeTealBlue from './home/assets/cube_teal_blue.svg';
import cubeBrightTeal from './home/assets/cube_bright_teal.svg';
import imgQuickStartPortal from './home/assets/img_overtureQuickstartPortal.webp';
import './home/styles.scss';
import { Link } from 'gatsby';

Modal.setAppElement('#___gatsby');
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.85)';

export default function HomePage() {
  const [carouselPage, setCarouselPage] = useState(0);
  const handleLeftArrowClick = () => {
    // this allows for carousel looping from the first slide
    carouselPage === 0
      ? setCarouselPage(caseData.length - 1)
      : setCarouselPage(carouselPage - 1);
  };
  const handleRightArrowClick = () => {
    carouselPage === caseData.length - 1
      ? setCarouselPage(0)
      : setCarouselPage(carouselPage + 1);
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

      {/* top hero - blue background  */}
      <div className="Hero">
        <div className="container">
          <section className="Hero__section">
            <H1>Build. Deploy. Discover.</H1>
            <P1>
              Overture is a collection of open-source software used to create
              platforms where researchers manage, share and access genomics
              data.
            </P1>
            <div className="Hero__small-buttons-container">
              <Button link={GETTING_STARTED_PATH} size="medium" type="primary">
                Get Started
              </Button>
              <Button link={DEMO_LINK} size="medium" type="primary">
                View Demo
              </Button>
            </div>
          </section>
        </div>
      </div>

      {/* top white section - titled powering big-data at scale */}
      <section className="section top-white">
        <div className="top-white__title-container">
          <H2 className="top-white__title">Powering big-data at scale</H2>
          <P1>
            Overture has been successfully deployed in a diversity of
            large-scale projects.
          </P1>
        </div>

        {/* logos scroll bar  */}
        <div className="top-white__logos">
          {caseData.map((data, idx) => {
            let active =
              idx === carouselPage ? 'top-white__logo-container-active' : '';
            return (
              <div
                className={`top-white__logo-container ${active}`}
                key={data.slug}
              >
                <img
                  src={data.logo}
                  alt={data.slug}
                  onClick={() => {
                    setCarouselPage(idx);
                  }}
                  className={`top-white__logo`}
                />
              </div>
            );
          })}
        </div>

        {/* blue container - carasoul */}
        <div className="top-white__blue-container">
          <Button
            icon={'arrowLeftBlack'}
            type="default"
            className="top-white__blue-container-arrow-desktop top-white__blue-container-arrow"
            onClick={() => {
              handleLeftArrowClick();
            }}
          />
          <div className="top-white__blue-container-content">
            <div className="top-white__blue-container-arrows-image-container">
              <Button
                icon={'arrowLeftBlack'}
                type="default"
                className="top-white__blue-container-arrow-tablet top-white__blue-container-arrow"
                onClick={() => {
                  handleLeftArrowClick();
                }}
              />
              <a
                href={caseData[carouselPage].portalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={caseData[carouselPage].details[0].screenshot}
                  alt="screenshot"
                  className="top-white__blue-container-image"
                />
              </a>
              <Button
                icon={'arrowRightBlack'}
                type="default"
                className="top-white__blue-container-arrow-tablet top-white__blue-container-arrow ml2"
                onClick={() => {
                  handleRightArrowClick();
                }}
              />
            </div>

            <div className="top-white__blue-container-right">
              <div className="top-white__blue-container-arrows-title-container">
                <Button
                  icon={'arrowLeftBlack'}
                  type="default"
                  className="top-white__blue-container-arrow-mobile top-white__blue-container-arrow"
                  onClick={() => {
                    handleLeftArrowClick();
                  }}
                />
                <H3 className="top-white__blue-container-title">
                  {caseData[carouselPage].title}
                </H3>
                <Button
                  icon={'arrowRightBlack'}
                  type="default"
                  className="top-white__blue-container-arrow-mobile top-white__blue-container-arrow "
                  onClick={() => {
                    handleRightArrowClick();
                  }}
                />
              </div>
              <div className="top-white__blue-container-text">
                <P2> {caseData[carouselPage].listItems[2][0]}</P2>
              </div>
              <Button
                type="primary"
                size="medium"
                className="top-white__blue-container-learn-more-button"
                anchorLink={caseStudyAnchors[caseData[carouselPage].slug]}
              >
                Learn More
              </Button>
            </div>
          </div>
          <Button
            icon={'arrowRightBlack'}
            type="default"
            className="top-white__blue-container-arrow-desktop top-white__blue-container-arrow"
            onClick={() => {
              handleRightArrowClick();
            }}
          />
        </div>
      </section>

      {/* top floating teal cube */}
      <img
        src={cubeBrightTealInverted}
        alt="Top Floating Bright Teal Inverted Cube"
        className="bright-teal-cube-top"
      />

      {/* upper grey section */}
      <section className="section upper-grey bg-grey">
        <div className="upper-grey__mobile">
          <h2 className="upper-grey__text">
            We are a team of software engineers, data scientists, and cloud
            infrastructure specialists creating applications that store, manage,
            and explore massive genomic datasets.
          </h2>
        </div>

        <div className="upper-grey__not-mobile">
          <h2 className="upper-grey__line ">
            <span className="upper-grey__text">We</span>
            <span className="upper-grey__text">are</span>
            <span className="upper-grey__text">a</span>
            <span className="upper-grey__text">team</span>
            <span className="upper-grey__text">of</span>
            <Icon
              alt="Software Engineers Icon"
              img="softwareEngineers"
              size="60px"
              className="upper-grey__icon"
            />
            <span className="upper-grey__text">software</span>
            <span className="upper-grey__text">engineers,</span>
            <Icon
              alt="Data Icon"
              img="data"
              size="60px"
              className="upper-grey__icon"
            />
            <span className="upper-grey__text">data</span>
            <span className="upper-grey__text">scientists</span>
            <span className="upper-grey__text">and</span>
            <Icon
              alt="Cloud Icon"
              img="cloudWeather"
              size="60px"
              className="upper-grey__icon"
            />
            <span className="upper-grey__text">cloud </span>
            <span className="upper-grey__text">infrastructure</span>
            <span className="upper-grey__text">specialists </span>
            <span className="upper-grey__text">creating</span>
            <span className="upper-grey__text">applications</span>
            <Icon
              alt="Big Data Icon"
              img="bigData"
              size="60px"
              className="upper-grey__icon"
            />
            <span className="upper-grey__text">to</span>
            <span className="upper-grey__text">store,</span>
            <span className="upper-grey__text">manage,</span>
            <span className="upper-grey__text">and</span>
            <span className="upper-grey__text">share</span>
            <span className="upper-grey__text">massive genomic datasets.</span>
          </h2>
        </div>
        <div className="mt3 lower-grey__buttons">
          <Button
            link={ABOUT_US_PATH}
            size="medium"
            type="primary"
            className="upper-grey__button mt2"
          >
            About Us
          </Button>
          <Button
            link={SERVICES_PATH}
            size="medium"
            type="primary"
            className="upper-grey__button mt2"
          >
            Our Services
          </Button>
        </div>
      </section>

      {/* floating yellow cube */}
      <img
        src={cubeYellow}
        alt="Floating Yellow Cube"
        className="yellow-cube"
      />

      {/* middle white section - titled our products */}
      <section className="middle-white section">
        <div className="middle-white__titles-holder">
          <H2>Our Products</H2>
          <P1 className="middle-white__title-text">
            Built to be reusable and scalable, our ecosystem of research
            software tools reduces redundant efforts and enables the creation of
            robust genomics data applications
          </P1>
        </div>
        <div className="middle-white__content">
          <div className="middle-white__image-column">
            <img className="middle-white__image" src={bodyImg} alt="" />
          </div>

          <div className="middle-white__text-wrapper">
            <HomeProductLink
              icon={'productSong'}
              title={'Song'}
              text={'Manage and store metadata with custom validations.'}
              link={productsAnchors.song}
            />
            <HomeProductLink
              icon={'productScore'}
              title={'Score'}
              text={'Securely transfer file data to and from the cloud.'}
              link={productsAnchors.score}
            />
            <HomeProductLink
              icon={'productMaestro'}
              title={'Maestro'}
              text={'Organize scattered metadata into one index.'}
              link={productsAnchors.maestro}
            />
            <HomeProductLink
              icon={'productArranger'}
              title={'Arranger'}
              text={'Generate search APIs and portal UIs from indexed data.'}
              link={productsAnchors.arranger}
            />
            <HomeProductLink
              icon={'productEgo'}
              title={'Ego'}
              text={'Authorize and Authenticate users and applications.'}
              link={productsAnchors.ego}
            />
            <HomeProductLink
              icon={'productDMS'}
              title={'Stage'}
              text={'Rapidly integrate overture into a React-based web portal.'}
              link={'documentation/stage'}
            />
          </div>
        </div>
      </section>

      <img
        src={cubeMaroon}
        alt="Floating Maroon Cube"
        className="maroon-cube"
      />

      {/* lower blue section */}
      <section className="lower-blue-section">
        <div className="lower-blue-section__container">
          <div className="lower-blue-section__holder">
            <div className="lower-blue-section__title-holder">
              <H2>Getting Started</H2>
              <P2 className="text-subtitle">
                <b>
                  <code>3</code> Steps, <code>2</code> Commands, <code>1</code>{' '}
                  Platform
                </b>
              </P2>
              <P1 className="middle-white__title-text">
                The Overture Quickstart enables a fast and frictionless setup of
                our data platform locally.
              </P1>
            </div>
            {/* div with the blue background */}

            <div className="lower-blue-section__content-holder">
              <div className="lower-blue-section__img-holder">
                <img
                  src={imgQuickStartPortal}
                  alt="Overture QuickStart Portal screenshot"
                  className="lower-blue-section__img"
                />
              </div>
              <div className="upper-grey-section__content-holder">
                <div className="upper-grey-section__text-holder">
                  <div className="terminal-section">
                    <P2 className="text-section">
                      <b>
                        1. Download and configure{' '}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={DOCKER_DOWNLOAD}
                        >
                          Docker Desktop (4.32.0+)
                        </a>
                      </b>
                    </P2>
                    <span className="text-section">
                      In Docker Desktop click the cog{' '}
                      <Icon
                        alt=""
                        img="cog"
                        size={32}
                        style={{ verticalAlign: 'middle' }}
                      />{' '}
                      icon , then resources. We recommend at minimum setting
                      your CPU limit to <code>8</code>, memory to{' '}
                      <code>8GB</code>, swap to <code>2GB</code>, with
                      <code>64GB</code> of virtual disk space available. If you
                      have Docker already installed ensure it is up to date.
                    </span>
                    <P2 className="text-section">
                      <b>2. Clone the QuickStart Repository</b>
                    </P2>
                    <Terminal
                      prompts={[
                        'git clone  https://github.com/overture-stack/composer.git && cd composer',
                      ]}
                    />
                    <P2 className="text-section">
                      <b>3. Run the Docker Compose</b>
                    </P2>
                    <Terminal
                      prompts={['docker compose up --attach conductor']}
                    />
                    <div className="text-section">
                      <span>
                        Your portal should take will be accessible from your:{' '}
                        <code>localhost:3000</code>
                      </span>
                    </div>
                    <div className="mt3 lower-blue-section__buttons">
                      <Button
                        link={GETTING_STARTED_PATH}
                        size="medium"
                        type="primary"
                        className="upper-grey__button mt1"
                      >
                        Guides & Documentation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* upper grey section */}
      {/* <section className="section upper-grey">
        <div className="upper-grey__mobile">
          <h2 className="upper-grey__text">
            Our components are well documented, actively supported, and welcome
            external feedback and contributions. If you need assistance, we also
            offer consulting, support, and collaborative services.
          </h2>
        </div>

        <div className="upper-grey__not-mobile">
          <h2 className="upper-grey__line ">
            <span className="upper-grey__text">Overture’s components</span>
            <span className="upper-grey__text">are</span>
            <span className="upper-grey__text">well</span>
            <Icon
              alt="exploreDocs Icon"
              img="exploreDocs"
              size="60px"
              className="upper-grey__icon"
            />
            <span className="upper-grey__text">documented</span>
            <span className="upper-grey__text">actively</span>
            <Icon
              alt="support Icon"
              img="support"
              size="60px"
              className="upper-grey__icon"
            />
            <span className="upper-grey__text">supported,</span>
            <span className="upper-grey__text">and</span>
            <Icon
              alt="feedback Icon"
              img="feedback"
              size="60px"
              className="upper-grey__icon"
            />
            <span className="upper-grey__text">welcome</span>
            <span className="upper-grey__text">external feedback</span>
            <span className="upper-grey__text">and contributions.</span>
            <span className="upper-grey__text">If you need</span>
            <Icon
              alt="assistance Icon"
              img="assistance"
              size="60px"
              className="upper-grey__icon"
            />

            <span className="upper-grey__text">assistance,</span>
            <span className="upper-grey__text">we also offer</span>
            <span className="upper-grey__text">consulting, support,</span>
            <span className="upper-grey__text">
              and collaborative services.
            </span>
          </h2>
        </div>
        <div className="mt3 lower-grey__buttons">
          <Button
            link={SERVICES_PATH}
            size="medium"
            type="primary"
            className="upper-grey__button mt2"
          >
            Our Services
          </Button>
        </div>
      </section> */}

      <img
        src={cubeTealBlue}
        alt="Floating Blueish Teal Cube"
        className="teal-blue-cube"
      />

      <img
        src={cubeChartreuse}
        alt="Floating Yellowish Green Cube"
        className="chartreuse-cube"
      />

      <section className="lower-grey section bg-grey">
        <div className="lower-grey__container">
          <h2 className="upper-grey__text lower-grey__text">
            Build. Deploy. Discover. <br></br>Craft tomorrow's data solution,
            today.
          </h2>
        </div>
      </section>

      {/* floating bright teal cube */}
      <div>
        <img
          src={cubeBrightTeal}
          alt="Floating Bright Teal Cube"
          className="bright-teal-cube"
        />
      </div>
    </main>
  );
}
