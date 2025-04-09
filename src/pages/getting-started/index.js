import React from 'react';
import Helmet from 'react-helmet';
import {
  H2,
  H3,
  P3,
  YellowButton,
  LinkHelper as Link,
  Terminal,
  P2,
  P1,
  Icon,
  NoteBox,
} from 'components';
import img_overtureQuickstartPortal from './assets/overtureQuickstartPortal.webp';
import { DOCKER_DOWNLOAD } from 'constants/external-links';
import './styles.scss';
import {
  ADMINISTRATION_GUIDES,
  API_REFERENCE_GUIDE,
  DEPLOYMENT_GUIDES,
  OVERTURE_DOCUMENTATION_CONTRIBUTION_LINK,
  OVERTURE_DOCUMENTATION_CORE_SOFTWARE,
  OVERTURE_DOCUMENTATION_UNDER_DEVELOPMENT,
  OVERTURE_GITHUB_DISSCUSSION_LINK,
  USER_GUIDES,
} from '../../../constants/external-links';

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
              <H2>Run our QuickStart</H2>
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
                    <Link to={DOCKER_DOWNLOAD}>Docker Desktop (4.39.0+)</Link>
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
                      'git clone  -b quickstart https://github.com/overture-stack/prelude.git && cd prelude',
                    ]}
                  />
                </div>
                <P2 className="text-section">
                  <b>3. Run the Docker Compose</b>
                </P2>

                <div className="relative">
                  <span className="text-section">For Unix/macOS run:</span>
                  <Terminal prompts={['make platform']} />
                  <span className="text-section">For Windows run:</span>
                  <Terminal prompts={['./make.bat platform']} />
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
                {' '}
                <a href={USER_GUIDES}>User guides:</a> stepwise guides covering
                platform usage.
              </li>
              <li className="bullet-item">
                {' '}
                <a href={ADMINISTRATION_GUIDES}>Administration:</a> detailed
                stepwise instructions for customizing our platform.
              </li>
              <li className="bullet-item">
                <a href={DEPLOYMENT_GUIDES}>Deployment:</a> generalized
                instructions for deploying our platform from start to finish.
              </li>
              <li className="bullet-item">
                {' '}
                <a href={API_REFERENCE_GUIDE}>API Reference:</a> explore
                endpoints, request parameters and response schemas through a
                Swagger UI.
              </li>
            </ul>
          </div>

          <div className="text-section">
            <H3>Developer Documentation</H3>
            <P2>
              Detailed product documentation for administrators and developers
            </P2>
          </div>

          <div className="list-section">
            <ul className="doc-column">
              <li className="bullet-item">
                {' '}
                <a href={OVERTURE_DOCUMENTATION_CORE_SOFTWARE}>
                  Core Software:
                </a>{' '}
                documentation covering the core components of the Overture
                platform.
              </li>
              <li className="bullet-item">
                {' '}
                <a href={OVERTURE_DOCUMENTATION_UNDER_DEVELOPMENT}>
                  Under Development:
                </a>{' '}
                new components not quite ready for production.
              </li>
            </ul>
          </div>

          <div>
            <NoteBox
              icon="notes2"
              title="Help us make our docs better"
              className="getting-started-notebox"
            >
              If you can't find what you are looking for, please let us know{' '}
              <b>
                <Link to={OVERTURE_GITHUB_DISSCUSSION_LINK}>
                  using our ideas discussion forum.
                </Link>
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
                link={OVERTURE_DOCUMENTATION_CONTRIBUTION_LINK}
                img_src="githubYellow"
                alt="Get Involved"
                title="Get Involved"
              />
              <YellowButton
                link={OVERTURE_GITHUB_DISSCUSSION_LINK}
                img_src="githubFindUs"
                alt="Reach Out"
                title="Reach Out"
              ></YellowButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
