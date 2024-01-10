import { useState } from 'react';
import React from 'react';
import Helmet from 'react-helmet';
import Modal from 'react-modal';
import imgScreenshotDMS from './home/assets/img_DMS_screenshot.png';
import {
  ABOUT_US_PATH,
  DOCUMENTATION_PATH,
  PRODUCTS_PATH,
  SERVICES_PATH,
  caseStudyAnchors,
  productsAnchors,
  DOCS_DMS_INSTALL_LINK,
  EGO_UPDATES_LINK,
} from 'constants/pages';
import { EGO_SQL_LINK, OVERTURE_GITHUB_LINK, SLACK_LINK } from '../../constants/external-links.js';
import { Button, H1, H2, H3, P1, Icon, HomeProductLink, YellowButton, P2, Terminal, GettingStarted } from 'components';
import caseData from 'data/case_studies';
import bodyImg from './home/assets/img_DMS_screenshot.png';
import cubeMaroon from './home/assets/cube_maroon.svg';
import cubeBrightTealInverted from './home/assets/cube_bright_teal_inverted.svg';
import cubeYellow from './home/assets/cube_yellow.svg';
import cubeChartreuse from './home/assets/cube_chartreuse.svg';
import cubeTealBlue from './home/assets/cube_teal_blue.svg';
import cubeBrightTeal from './home/assets/cube_bright_teal.svg';
import './home/styles.scss';
import './documentation/styles.scss'
import { Link } from 'gatsby';
import { Construction, Space } from 'lucide-react';

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

      {/* top hero - blue background  */}
      <div className="Hero">
        <div className="container">
          <section className="Hero__section">
            <H1>Build. Deploy. Discover.</H1>
            <P1>
              Overture is a collection of open-source software used to create discovery platforms where
              researchers manage, share and access genomics data.
            </P1>
            <div className="Hero__small-buttons-container">
              <Button link={DOCUMENTATION_PATH} size="medium" type="primary">
                Get Started
              </Button>
              <Button link={DOCUMENTATION_PATH} size="medium" type="primary">
              <Construction style={{ marginRight: '8px' }}/>View Our Demo Portal
              </Button>
            </div>
          </section>
        </div>
      </div>


      {/* middle white section - titled our products */}
      <section className="middle-white section bg-white">
        <div className="middle-white__titles-holder">
          <H2>Craft tomorrow's genomics data application, today.</H2>
        </div>

          <div className="middle-white__image-column">
  
            <img className="middle-white__image" src={bodyImg} alt="" />
          </div>
          <div className="middle-white__image-column">
          <Construction/>1 Minute Explainer Video<Construction/>
          </div>
         
          
          <div className='middle-white__image-column' style={{ display: 'flex', gap: '20px', fontWeight: '400' }}>
            <Button link={DOCUMENTATION_PATH} size="medium" type="primary">
            <Construction style={{ marginRight: '8px' }}/>View our Demo Portal
            </Button>
          <Button link={DOCUMENTATION_PATH} size="medium" type="primary">
          <Construction style={{ marginRight: '8px' }}/>Request a Demo
            </Button>
            </div>
      </section>

      <section className="section upper-grey bg-grey">
      <div className="middle-white__content">
          <H2>Our Products</H2>
    <br></br>    

    <br></br>
    <div className="middle-white__text-wrapper">
    <br></br>
    <P1 className="middle-white__text-wrapper">
    Open-source and free-to-use our modular software works in concert to build and deploy scalable genomics data platforms 
    </P1>
    <br></br>    
    <Construction/>Informative Diagram/Illustration<Construction/>
    <br></br>
    </div>
        </div>


   
        <div className="middle-white__content" >
    
          <div className="middle-white__text-wrapper">
            <HomeProductLink
              icon={'productSong'}
              title={'Song'}
              text={'Manages and stores metadata with custom validations.'}
              link={productsAnchors.song}
            />
            <HomeProductLink
              icon={'productScore'}
              title={'Score'}
              text={'Securely transfers file data to and from the cloud.'}
              link={productsAnchors.score}
            />
            <HomeProductLink
              icon={'productMaestro'}
              title={'Maestro'}
              text={'Organizes scattered metadata into one index.'}
              link={productsAnchors.maestro}
            />
            <HomeProductLink
              icon={'productArranger'}
              title={'Arranger'}
              text={'Generates search APIs and portal UIs from indexed data.'}
              link={productsAnchors.arranger}
            />
            <HomeProductLink
              icon={'productEgo'}
              title={'Ego'}
              text={'Authorizes and Authenticates users and applications.'}
              link={productsAnchors.ego}
            />
            <HomeProductLink
              icon={'productDMS'}
              title={'DMS-UI'}
              text={'Rapidly integrates overture into a React-based web portal.'}
              link={'documentation/dms-ui'}
            />
          </div>
        </div>

        <Button link={PRODUCTS_PATH} size="medium" type="primary">
                Learn More
            </Button>


        
       
      </section>

            {/* top white section - titled powering big-data at scale */}
      <section className="section top-white bg-white">
        <div className="top-white__title-container">
          <H2 className="top-white__title">Powering big-data at scale</H2>
          <br></br>
          <P1>Overture has been successfully deployed in a diversity of large-scale projects.</P1>
          <br></br>
        </div>

        {/* logos scroll bar  */}
        <div className="top-white__logos">
          {caseData.map((data, idx) => {
            let active = idx === carouselPage ? 'top-white__logo-container-active' : '';
            return (
              <div className={`top-white__logo-container ${active}`} key={data.slug}>
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
              <a href={caseData[carouselPage].portalLink} target="_blank" rel="noopener noreferrer">
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
                <H3 className="top-white__blue-container-title">{caseData[carouselPage].title}</H3>
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
                type="secondary"
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

         {/* middle white background section */}
    <section className="middle-white section bg-grey">
          <GettingStarted>
              {/* Getting Started: Step 1 */}
              <div className="top-white__title-container">
              <Construction/>
              <br></br>
              <P2>To get up and running quickly, we provide a turnkey installation of Overtures Data Management Suite (DMS) using Docker. </P2>
              <br></br>
              </div>
              <div className="columns Step">
        <div className="column is-3">
          <div>
            <H3>1. Clone and open the repo</H3>
            <ul className="step-text">
              <li className="bullet">You will need Docker is installed </li>
            </ul>
          </div>
          <div className="yellow-bar" />
        </div>
                <div className="column is-8 is-offset-1 self-center">
                  <Terminal
                    prompts={['git clone https://github.com/overture-stack/overture-docker-compose.git', 'cd overture-docker-compose']}
                  />
                </div>
              </div>

           {/* Getting Started: Step 2 */}
        <div className="columns Step">
        <div className="column is-3">
          <div>
            <H3>2. Run our quickstart configuration script</H3>
            <ul className="step-text">
              <li className="bullet">This automates the data and configurations needed to get up and running quickly.</li>
            </ul>
          </div>
          <div className="yellow-bar" />
        </div>
                <div className="column is-8 is-offset-1 self-center">
                  <Terminal
                    prompts={['./init.sh']}
                  />
                </div>
              </div>


           {/* Getting Started: Step 2 */}
        <div className="columns Step">
        <div className="column is-3">
          <div>
            <H3>3. Start Docker</H3>
            <ul className="step-text">
              <li className="bullet">Your Portal will be accessible from your <code>localhost:8000</code></li>
            </ul>
          </div>
          <div className="yellow-bar" />
        </div>
                <div className="column is-8 is-offset-1 self-center">
                  <Terminal
                    prompts={['docker compose up']}
                  />
                </div>
              </div>
            <div className='top-white__title-container'>
              <div className='upper-grey-section__non-img-holder' style={{ display: 'flex', gap: '20px', fontWeight: '400' }}>
              <Button link={DOCUMENTATION_PATH} size="medium" type="secondary">
              <Construction style={{ marginRight: '8px' }}/>Detailed Quick Start Instructions
              </Button>
              <Button link={DOCUMENTATION_PATH} size="medium" type="secondary">
              <Construction style={{ marginRight: '8px' }}/>Configuring your DMS
              </Button>
            </div>
            </div>
          </GettingStarted>
      </section>
      
      {/* floating marron cuve */}
      <img src={cubeMaroon} alt="Floating Maroon Cube" className="maroon-cube" />

      {/* upper grey about us section */}
      <section className="section upper-grey bg-white">
      <div className="top-white__title-container">
          <H2 className="top-white__title">About Us</H2>
        </div>
        <div className="upper-grey__mobile">
          <h2 className="upper-grey__text">
            We are a team of software engineers, data scientists, and cloud infrastructure
            specialists creating applications that store, manage, and explore massive genomic
            datasets.
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
              size="40px"
              className="upper-grey__icon"
            />
            <span className="upper-grey__text">software</span>
            <span className="upper-grey__text">engineers,</span>
            <Icon alt="Data Icon" img="data" size="40px" className="upper-grey__icon" />
            <span className="upper-grey__text">data</span>
            <span className="upper-grey__text">scientists</span>
            <span className="upper-grey__text">and</span>
            <Icon alt="Cloud Icon" img="cloudWeather" size="40px" className="upper-grey__icon" />
            <span className="upper-grey__text">cloud </span>
            <span className="upper-grey__text">infrastructure</span>
            <span className="upper-grey__text">specialists </span>
            <span className="upper-grey__text">creating</span>
            <span className="upper-grey__text">applications</span>
            <Icon alt="Big Data Icon" img="bigData" size="40px" className="upper-grey__icon" />
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

      <section className="section lower-white bg-grey">
        <div className="lower-white__title-container">
          <H2 className=" lower-white__title ">Here to Help</H2>
          <P1>Ready to jump in? We've got some resources to help.</P1>
        </div>
        <div className="lower-white__yellow-buttons">
        <YellowButton
            img_src="exploreDocs"
            alt="exploreDocs Icon"
            title="Explore our Docs"
            text="See how to deploy, configure and use our software."
            link="/documentation/"
          />
          <YellowButton
            img_src="identifyNeeds"
            alt="identifyNeeds Icon"
            title="Checkout our Tutorials"
            text="Learn about our core components and how they work."
            link="http://localhost:8000/documentation/#:~:text=Search%20all%20documentation...-,Guides%20%26%20Tutorials,-Covering%20a%20range"
          />

          <YellowButton
            img_src="joinCommunity"
            alt="joinCommunity Icon"
            title="Join Our Community"
            text="Get help, share knowledge, and stay current."
            link={SLACK_LINK}
          />
        </div>
      </section>

      <img src={cubeTealBlue} alt="Floating Blueish Teal Cube" className="teal-blue-cube" />

      <img src={cubeChartreuse} alt="Floating Yellowish Green Cube" className="chartreuse-cube" />

      <section className="lower-grey section">
        <div className="lower-grey__container">
          <h2 className="upper-grey__text lower-grey__text">
            Build. Deploy. Discover. <br></br>Craft tomorrow's data solution, today.
          </h2>
          <div className="mt3 lower-grey__buttons">
            <Button type="primary" size="medium" link={DOCUMENTATION_PATH}>
              Get Started
            </Button>
            <Button type="primary" size="medium" link={PRODUCTS_PATH}>
            <Construction style={{ marginRight: '8px' }}/>Request a Demo
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
