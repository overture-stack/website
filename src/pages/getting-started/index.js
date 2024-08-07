import React from 'react';
import Helmet from 'react-helmet';
import {
  H2,
  H3,
  P3,
  Search,
  YellowButton,
  LinkHelper as Link,
  Terminal,
  P2,
  P1,
  Icon,
  NoteBox,
} from 'components';
import img_overtureQuickstartPortal from './assets/overtureQuickstartPortal.webp';
import {
  OVERTURE_GITHUB_LINK,
  SLACK_LINK,
  DOCKER_DOWNLOAD,
} from 'constants/external-links';
import './styles.scss';
import {
  ADMINISTRATION_GUIDE,
  DEPLOYMENT_GUIDE,
  DOWNLOAD_GUIDE,
  SUBMISSION_GUIDE,
} from '../../../constants/pages';
import { FEATURE_REQUESTS } from '../../../constants/external-links';

export default function GettingStartedPage() {
  const docsSearchIndex = process.env.GATSBY_ALGOLIA_INDEX_NAME;
  const searchIndices = [{ name: docsSearchIndex, title: docsSearchIndex }];
  return (
    <main className="GettingStartedPage">
      <Helmet>
        <title>Overture Getting Started</title>
        <meta
          name="description"
          content="Overture is about flexible solutions that meet the diverse needs of the scientific community. Here's how you can get started with our software."
        />
        <meta
          name="keywords"
          content="Overture, data science software, bioinformatics software, open-source software, cancer research, academic collaborations, grant co-applicant, software consulting, project architecture, migration, custom development, scalability, technical support, troubleshooting, Ontario Institute for Cancer Research, OICR, Canarie, DMS Command Line Interface, The National Cancer Institutes Informatics Technology for Cancer Research Program, NCI ITCR, Overture DMS, GA4GH passport system"
        />
      </Helmet>

      <section className="grey-bg">
        <div className="container">
          <div className="upper-grey-section__holder">
            <div className="upper-grey-section__title-holder">
              <H2>Getting Started</H2>
            </div>
            <div className="upper-grey-section__content-holder">
              {/* The img holding div below displays in mobile/tablet view.*/}
              <div className="upper-grey-section__img-holder upper-grey-section__mobile-tablet-img-holder">
                <img
                  alt="QuickStart screenshot"
                  src={img_overtureQuickstartPortal}
                  className="img"
                />
              </div>
              <div className="upper-grey-section__text-holder">
                <P2 className="text-section">
                  <b>
                    1. Download and configure{' '}
                    <Link to={DOCKER_DOWNLOAD}>Docker Desktop (4.32.0+)</Link>
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
                  icon , then resources. We recommend at minimum setting your
                  CPU limit to <code>8</code>, memory to <code>8GB</code>, swap
                  to <code>4GB</code>, with <code>64GB</code> of virtual disk
                  space available. If you have Docker already installed ensure
                  it is up to date.
                </span>

                <P2 className="text-section">
                  <b>2. Clone the QuickStart Repository</b>
                </P2>

                <div className="relative">
                  <Terminal
                    prompts={[
                      'git clone  https://github.com/overture-stack/composer.git && cd composer',
                    ]}
                  />
                </div>
                <P2 className="text-section">
                  <b>3. Run the Docker Compose</b>
                </P2>

                <div className="relative">
                  <Terminal
                    prompts={['docker compose up --attach conductor']}
                  />
                  <span className="text-section">
                    Your portal will now be accessible from your:{' '}
                    <code>localhost:3000</code>
                  </span>
                </div>
                <P1 className="text-section-centered">
                  <b></b>
                </P1>
              </div>
              {/* The img holding div below displays in desktop view.*/}
              <div className="upper-grey-section__desktop-img-holder upper-grey-section__img-holder">
                <img
                  alt="Overture Quickstart screenshot"
                  src={img_overtureQuickstartPortal}
                  className="upper-grey-section__img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="upper-grey-section white-bg">
        <div className="container">
          <div>
            <H2>Explore Our Resources</H2>

            <div className="text-subtitle">
              <P2>
                Guides and documentation to get you started using our platform
              </P2>
            </div>
          </div>
          <div className="search-bar">
            <Search indices={searchIndices} />
          </div>

          <div className="text-section">
            <H3>Platform Guides</H3>
            <P2>
              Stepwise tutorials for practical insight and hands-on experience
              using the Overture platform
            </P2>
          </div>

          <div className="list-section">
            <ul className="doc-column">
              <li className="bullet-item">
                <a href={DEPLOYMENT_GUIDE}>Deployment:</a> generalized
                instructions for deploying our platform from start to finish
              </li>
              <li className="bullet-item">
                {' '}
                <a href={SUBMISSION_GUIDE}>Submission:</a>stepwise instructions
                on submitting data to our platform
              </li>
              <li className="bullet-item">
                {' '}
                <a href={DOWNLOAD_GUIDE}>Download:</a> stepwise instructions on
                downloading data from our platform
              </li>
              <li className="bullet-item">
                {' '}
                <a href={ADMINISTRATION_GUIDE}>Administration:</a> detailed
                stepwise instructions for customizing your platform
              </li>
            </ul>
          </div>

          <div>
            <div className="text-section">
              <H3>Product Documentation</H3>
              <P2>
                Detailed product documentation for administrators and developers
              </P2>
            </div>
            <div className="upper-grey-section__docs-holder">
              <div className="list-columns">
                {/* User Documentation bullets left */}
                <div>
                  <ul>
                    <li className="bullet-item">
                      <Link to="/documentation/ego">Ego:</Link> authentication
                      and authorization for users and applications
                    </li>
                    <li className="bullet-item">
                      <Link to="/documentation/song">Song:</Link> data
                      management with automated submission validations
                    </li>
                    <li className="bullet-item">
                      <Link to="/documentation/score">Score:</Link> secure
                      multipart file transfers to and from object storage
                    </li>
                  </ul>
                </div>
                {/* User Documentation bullets right */}
                <div>
                  <ul>
                    <li className="bullet-item">
                      <Link to="/documentation/maestro">Maestro: </Link>
                      indexes published Song metadata into Elastisearch
                    </li>
                    <li className="bullet-item">
                      <Link to="/documentation/arranger">Arranger: </Link>
                      search API generation with customizable UI component
                      library
                    </li>
                    <li className="bullet-item">
                      <Link to="/documentation/stage">Stage: </Link>
                      react-based portal UI made to integrate with Overture
                      services
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <NoteBox
              icon="notes2"
              title="Help us make our docs better"
              className="getting-started-notebox"
            >
              If you can't find what you are looking for, please submit{' '}
              <b>
                <Link to={FEATURE_REQUESTS}>a GitHub request</Link>
              </b>
            </NoteBox>
          </div>
        </div>
      </section>

      {/* lower grey section */}
      <section className="lower-grey-section grey-bg">
        <div className="container">
          <div className="lower-grey-section__holder">
            <div className="lower-grey-section__titles-holder">
              <div className="lower-grey-section__title-holder">
                <h1 className="lower-grey-section__title">
                  Connect with Our Community
                </h1>
              </div>
              <div className="lower-grey-seciton__subtitle-holder">
                <P3 className="lower-grey-section__subtitle-mobile-tablet">
                  Join us in contributing software tools that accelerate
                  scientific discovery.
                </P3>
                <P3 className="lower-grey-section__subtitle-desktop">
                  Get help, share knowledge, and stay current.
                </P3>
              </div>
            </div>
            <div className="lower-grey-section__yellow-buttons-holder">
              <YellowButton
                link={SLACK_LINK}
                img_src="slackJoin"
                alt="Join Us on Slack"
                title="Join Us on Slack"
              />
              <YellowButton
                link={OVERTURE_GITHUB_LINK}
                img_src="githubFindUs"
                alt="Find Us on Github"
                title="Find Us on Github"
              ></YellowButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
