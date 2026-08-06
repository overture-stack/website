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
import './styles.scss';
import {
  API_REFERENCE_GUIDE,
  DOCKER_DOWNLOAD,
  DOCS_COMMUNITY,
  DOCS_DEPLOY,
  DOCS_DEVELOP,
  DOCS_USE,
  DOCUMENTATION_LINK,
  OVERTURE_DOCUMENTATION_CONTRIBUTION_LINK,
  OVERTURE_GITHUB_DISCUSSION_LINK,
} from 'constants/external-links';

export default function GettingStartedPage() {
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
            <H3>Four Ways In</H3>
            <P2>
              Our documentation is organized by what you are trying to do. Each
              section below is a starting point on{' '}
              <a href={DOCUMENTATION_LINK}>docs.overture.bio</a>.
            </P2>
          </div>

          <div className="list-section">
            <ul className="doc-column">
              <li className="bullet-item">
                {' '}
                <a href={DOCS_DEPLOY}>Deploy:</a> stand up an Overture platform,
                component by component, from authorization through to the data
                portal.
              </li>
              <li className="bullet-item">
                {' '}
                <a href={DOCS_USE}>Use:</a> submit and retrieve data, and
                administer a running platform.
              </li>
              <li className="bullet-item">
                {' '}
                <a href={DOCS_DEVELOP}>Develop:</a> reference for each
                component, including configuration and the{' '}
                <a href={API_REFERENCE_GUIDE}>API reference</a>.
              </li>
              <li className="bullet-item">
                {' '}
                <a href={DOCS_COMMUNITY}>Community:</a> support, contributing,
                licensing, and how to cite Overture.
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
                <Link to={OVERTURE_GITHUB_DISCUSSION_LINK}>
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
                link={OVERTURE_GITHUB_DISCUSSION_LINK}
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
