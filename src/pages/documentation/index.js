import React from 'react';
import Helmet from 'react-helmet';
import { Button, H1, H2, H3, Search, P1 } from 'components';
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
              <P1 className="upper-grey-section__subtitle">
                Overture is about flexible solutions that meet the diverse needs of the scientific
                community. Here's how you can get started with our software.
              </P1>
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
                      <li className="upper-grey-section__bullets-item">DMS</li>
                      <li className="upper-grey-section__bullets-item">Song</li>
                      <li className="upper-grey-section__bullets-item">Score</li>
                    </ul>
                  </div>
                  {/* User Documentation bullets right */}
                  <div>
                    <ul className="upper-grey-section__doc-column">
                      <li className="upper-grey-section__bullets-item">DMS</li>
                      <li className="upper-grey-section__bullets-item">Song</li>
                      <li className="upper-grey-section__bullets-item">Score</li>
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
                      <li className="upper-grey-section__bullets-item">Overture Stack</li>
                      <li className="upper-grey-section__bullets-item">Song</li>
                      <li className="upper-grey-section__bullets-item">Score</li>
                    </ul>
                  </div>
                  {/* Developer Documentation bullets right */}
                  <div>
                    <ul className="upper-grey-section__doc-column">
                      <li className="upper-grey-section__bullets-item">Overture Stack</li>
                      <li className="upper-grey-section__bullets-item">Song</li>
                      <li className="upper-grey-section__bullets-item">Score</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
