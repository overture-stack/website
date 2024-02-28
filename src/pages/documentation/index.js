import React from 'react';
import Helmet from 'react-helmet';
import { Button, H1, H2, H3, P1, P3, Search, YellowButton, LinkHelper as Link } from 'components';
import imgScreenshotDMS from './assets/img_DMS_screenshot.png';
import {
  OVERTURE_GITHUB_LINK,
  GITHUB_ISSUES_LINK,
  SLACK_LINK,
  EGO_GITHUB_LINK,
  SONG_GITHUB_LINK,
  MAESTRO_GITHUB_LINK,
  ARRANGER_GITHUB_LINK,
  SCORE_GITHUB_LINK,
  STAGE_GITHUB_LINK,
} from 'constants/external-links';
import { DOCS_DMS_INSTALL_LINK } from 'constants/docs';
import './styles.scss';

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

      {/* upper grey section */}

      <section className="upper-grey-section grey-bg">
        <div className="container">
          <div className="upper-grey-section__holder">
            {/* top left floating hexagons */}
            <div className="upper-grey-section__titles-holder">
              <H1>Explore Our Documentation</H1>
            </div>
            <div className="upper-grey-section__search-bar-holder">
              <Search indices={searchIndices} />
            </div>

            {/* User Documentation Section */}
            <div className="upper-grey-section__docs-holder">
              <div className="upper-grey-section__doc-holder">
                <div className="upper-grey-section__doc-title">
                  <H3>User Documentation</H3>
                </div>
                <div className="upper-grey-section__doc-columns-holder">
                  {/* User Documentation bullets left */}
                  <div>
                    <ul className="upper-grey-section__doc-column">
                      <li className="upper-grey-section__bullets-item menu-selection-link">
                        <Link className="menu-selection-link" to="/documentation/ego">
                          Ego
                        </Link>
                      </li>
                      <li className="upper-grey-section__bullets-item">
                        <Link to="/documentation/song">Song</Link>
                      </li>
                      <li className="upper-grey-section__bullets-item">
                        <Link to="/documentation/score">Score</Link>
                      </li>
                    </ul>
                  </div>
                  {/* User Documentation bullets right */}
                  <div>
                    <ul className="upper-grey-section__doc-column">
                      <li className="upper-grey-section__bullets-item">
                        <Link to="/documentation/maestro">Maestro</Link>
                      </li>
                      <li className="upper-grey-section__bullets-item">
                        <Link to="/documentation/arranger">Arranger</Link>
                      </li>
                      <li className="upper-grey-section__bullets-item">
                        <Link to="/documentation/Stage">Stage</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Developer Documentation Section */}
              <div className="upper-grey-section__doc-holder">
                <div className="upper-grey-section__doc-title">
                  <H3>Developer Documentation</H3>
                </div>
                <div className="upper-grey-section__doc-columns-holder">
                  {/* Developer Documentation bullets left */}
                  <div>
                    <ul className="upper-grey-section__doc-column">
                      <li className="upper-grey-section__bullets-item">
                        <Link to={EGO_GITHUB_LINK}>Ego</Link>
                      </li>
                      <li className="upper-grey-section__bullets-item">
                        <Link to={SONG_GITHUB_LINK}>Song</Link>
                      </li>
                      <li className="upper-grey-section__bullets-item">
                        <Link to={SCORE_GITHUB_LINK}>Score</Link>
                      </li>
                    </ul>
                  </div>
                  {/* Developer Documentation bullets right */}
                  <div>
                    <ul className="upper-grey-section__doc-column">
                      <li className="upper-grey-section__bullets-item">
                        <Link to={MAESTRO_GITHUB_LINK}>Maestro</Link>
                      </li>
                      <li className="upper-grey-section__bullets-item">
                        <Link to={ARRANGER_GITHUB_LINK}>Arranger</Link>
                      </li>
                      <li className="upper-grey-section__bullets-item">
                        <Link to={STAGE_GITHUB_LINK}>Stage</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* middle white background section */}
      <section className="mid-white-section">
        <div className="container">
          <div className="mid-white-section__holder">
            {/* div that holds non-image */}
            <div className="mid-white-section__non-img-holder">
              <div className="mid-white-section__title-holder">
                <H2>Getting Started</H2>
              </div>
              <div className="mid-white-section__subtitle-holder">
                <H3>The Overture Data Management System (DMS)</H3>
              </div>

              <div className="mid-white-section__content-holder">
                {/* this img holding div only display in mobile/tablet view. This is for grouping and for the order of divs that appear on the page */}
                <div className="mid-white-section__mobile-tablet-img-holder mid-white-section__img-holder">
                  <img
                    alt="DMS screenshot"
                    src={imgScreenshotDMS}
                    className="mid-white-section__img"
                  />
                </div>
                <div className="mid-white-section__text-button-holder">
                  <div className="mid-white-section__text-holder">
                    <P1>
                      <span>
                        Built from our core collection of microservices, the DMS offers turnkey
                        installation, configuration, and deployment of the Overture software.
                      </span>
                      <br />
                      <br />
                      <span>
                        While a custom solution will offer greater scalability, the DMS is an ideal
                        starting point for anyone looking to explore Overture and experience how our
                        microservices work in concert to create comprehensive data management
                        systems.
                      </span>
                    </P1>
                  </div>
                  <div className="mid-white-section__button-holder">
                    <Button
                      type="primary"
                      size="medium"
                      className="mid-white-section__button"
                      link={DOCS_DMS_INSTALL_LINK}
                    >
                      Installation Instructions
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* this img holding div is for desktop and larger view */}
            <div className="mid-white-section__desktop-img-holder mid-white-section__img-holder">
              <img alt="DMS screenshot" src={imgScreenshotDMS} className="mid-white-section__img" />
            </div>
          </div>
        </div>
      </section>

      {/* lower grey section */}
      <section className="lower-grey-section grey-bg">
        <div className="container">
          <div className="lower-grey-section__holder">
            <div className="lower-grey-section__titles-holder">
              <div className="lower-grey-section__title-holder">
                <h1 className="lower-grey-section__title">Connect with Our Community</h1>
              </div>
              <div className="lower-grey-seciton__subtitle-holder">
                <P3 className="lower-grey-section__subtitle-mobile-tablet">
                  Join us in contributing software tools that accelerate scientific discovery.
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

      {/* lower blue section - only shows in desktop viewport */}
      <section className="lower-blue-section blue-bg">
        <div className="lower-blue-section__text-holder">
          <H3 className="lower-blue-section__text">
            Do you have a suggestion? Are we missing anything?
            <Link to={GITHUB_ISSUES_LINK}>Let us know</Link>
          </H3>
        </div>
      </section>
    </main>
  );
}
