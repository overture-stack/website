import React from 'react';
import Helmet from 'react-helmet';
import { Button, H1, H2, H3, P1, P3, Search, YellowButton, LinkHelper as Link, Terminal, P2 } from 'components';
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
  DMS_UI_GITHUB_LINK,
} from 'constants/external-links';
import { DOCS_DMS_INSTALL_LINK } from 'constants/docs';
import './styles.scss';
import { Construction } from 'lucide-react';

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

            {/* middle white background geting started section */}
        <section className="mid-white-section grey-bg">
        <div className="container">
          <div className="mid-white-section__holder">
            {/* div that holds non-image */}
            <div className="mid-white-section__non-img-holder">
              <div className="mid-white-section__title-holder">
                <H2>Getting Started</H2>
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
                    <P2>
                      <span>
                        Composed from our core collection of microservices, the Overture DMS offers turnkey
                        installation, configuration, and deployment of Overture software.
                      </span>
                    </P2>
                  </div>

                  <div className="relative">
                        <Terminal prompts={['## Clone the Repo and go to the root directory.','git clone https://github.com/over-stack/overture-docker-compose.git', 'cd overture-docker-compose.git', '## Initialize quick start data and configs.', './init.sh', '## Run docker!', 'docker compose up']} />
                        <p>
                      <span>
                        Your DMS Portal will now be accessible from your: <code>localhost:8000</code>
                      </span>
                    </p>
                    
                </div>
                <div className='upper-grey-section__non-img-holder' style={{ display: 'flex', gap: '20px' }}>
              <Button link={DMS_UI_GITHUB_LINK} size="medium" type="secondary">
              <Construction style={{ marginRight: '8px' }}/>Detailed Quick Start Instructions
              </Button>
              <Button link={DMS_UI_GITHUB_LINK} size="medium" type="secondary">
              <Construction style={{ marginRight: '8px' }}/>Configuring your DMS
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


      <section className="upper-grey-section white-bg">
        
        <div className="container">

        <div className="upper-grey-section__holder">
            {/* top left floating hexagons */}
            <div className="upper-grey-section__titles-holder">
              <H1>Explore Our Resources</H1>
            </div>
            <div className="upper-grey-section__search-bar-holder">
              <Search indices={searchIndices} />
            </div>

            {/* top left floating hexagons */}
            <div className="upper-grey-section_-holder">
            <H2 className="left">
            <span>
            <Construction style={{ marginRight: '8px' }}/>Guides & Tutorials
            </span>
            </H2> 

             <P2 className="left">  
             <br/>
             <span>
              Covering a range of topics for data consumers, providers, and administrators, these step-by-step tutorials provide practical insight and hands-on experience.
            </span>
             </P2>
            </div>

            {/* User Documentation Section */}
            <div className="upper-grey-section__docs-holder">
              <div className="upper-grey-section__doc-holder">
                <div className="upper-grey-section__doc-title">
                  <H3>Data Consumers</H3>
                </div>
                <div className="upper-grey-section__doc-columns-holder">
                  {/* User Documentation bullets left */}
                  <div>
                    <ul className="upper-grey-section__doc-column">
                      <li className="upper-grey-section__bullets-item">
                        <Link to="/documentation/arranger">Navigating the exploration page</Link>
                      </li>
                    </ul>
                  </div>
                  {/* User Documentation bullets right */}
                  <div>
                    <ul className="upper-grey-section__doc-column">
                      <li className="upper-grey-section__bullets-item menu-selection-link">
                        <Link className="menu-selection-link" to="/documentation/ego">
                          Downloading data
                        </Link>
                      </li>
                      <li className="upper-grey-section__bullets-item">
                        <Link to="/documentation/maestro"> Visualization with JBrowse2</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Developer Documentation Section */}
              <div className="upper-grey-section__doc-holder">
                <div className="upper-grey-section__doc-title">
                  <H3>Data Providers</H3>
                </div>
                <div className="upper-grey-section__doc-columns-holder">
                  {/* Developer Documentation bullets left */}
                  <div>
                    <ul className="upper-grey-section__doc-column">
                      <li className="upper-grey-section__bullets-item">
                        <Link to={EGO_GITHUB_LINK}>CLI data submission</Link>
                      </li>
                    </ul>
                  </div>
                  {/* Developer Documentation bullets right */}
                  <div>
                    <ul className="upper-grey-section__doc-column">
                      <li className="upper-grey-section__bullets-item">
                        <Link to={MAESTRO_GITHUB_LINK}>Programatic data submission</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
    

              {/* Developer Documentation Section */}
              <div className="upper-grey-section__doc-holder">
                <div className="upper-grey-section__doc-title">
                  <H3>Data Administrators</H3>
                </div>
                <div className="upper-grey-section__doc-columns-holder">
                  {/* Developer Documentation bullets left */}
                  <div>
                    <ul className="upper-grey-section__doc-column">
                      <li className="upper-grey-section__bullets-item">
                        <Link to={SONG_GITHUB_LINK}>Schema generation and management</Link>
                      </li>
                      <li className="upper-grey-section__bullets-item">
                        <Link to={EGO_GITHUB_LINK}>Creating a data dictionary</Link>
                      </li>
                    </ul>
                  </div>
                  {/* Developer Documentation bullets right */}
                  <div>
                    <ul className="upper-grey-section__doc-column">
                      <li className="upper-grey-section__bullets-item">
                        <Link to={MAESTRO_GITHUB_LINK}>Customizing your search interface</Link>
                      </li>
                      <li className="upper-grey-section__bullets-item">
                        <Link to={ARRANGER_GITHUB_LINK}>Managing user permissions</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            <div className="upper-grey-section_-holder">
            <H2 className="left">
            <span>
              Documentation
            </span>
            </H2> 
             <P2 className="left">  
             <br/>
              Documentation for users, developers, and system administrators. Lorem ispsum dimsum Lorem ispsum dimsum Lorem ispsum dimsum          
             </P2>
            </div>
                        {/* User Documentation Section */}
                        <div className="upper-grey-section__docs-holder">
              <div className="upper-grey-section__doc-holder">
                <div className="upper-grey-section__doc-title">
                  <H3>User Docs</H3>
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
                        <Link to="/documentation/dms-ui">DMS-UI</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            {/* Developer Documentation Section */}
            <div className="upper-grey-section__doc-holder">
                <div className="upper-grey-section__doc-title">
                  <H3><Construction style={{ marginRight: '8px' }}/>Developer Docs</H3>
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
                        <Link to={DMS_UI_GITHUB_LINK}>DMS-UI</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Developer Documentation Section */}
              <div className="upper-grey-section__doc-holder">
                <div className="upper-grey-section__doc-title">
                <H3><Construction style={{ marginRight: '8px' }}/>System Admin Docs</H3>
                </div>
                <div className="upper-grey-section__doc-columns-holder">
                  {/* Developer Documentation bullets left */}
                  <div>
                    <ul className="upper-grey-section__doc-column">
                      <li className="upper-grey-section__bullets-item">
                        <Link to={EGO_GITHUB_LINK}>Deployment procedures</Link>
                      </li>
                      <li className="upper-grey-section__bullets-item">
                        <Link to={EGO_GITHUB_LINK}>Backup and Recovery</Link>
                      </li>
                    </ul>
                  </div>
                  {/* Developer Documentation bullets right */}
                  <div>
                    <ul className="upper-grey-section__doc-column">
                      <li className="upper-grey-section__bullets-item">
                        <Link to={ARRANGER_GITHUB_LINK}>Load balancing and scaling</Link>
                      </li>
                      <li className="upper-grey-section__bullets-item">
                        <Link to={ARRANGER_GITHUB_LINK}>Monitoring and logging</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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

