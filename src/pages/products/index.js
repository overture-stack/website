import React from 'react';
import { Button, H1, H2, P1, ProductPageSection } from 'components';
import Helmet from 'react-helmet';
import imgDMS from './assets/img_DMS.svg';
import imgArranger from './assets/img_products_arranger.svg';
import imgEgo from './assets/img_products_ego.svg';
import imgMaestro from './assets/img_products_maestro.svg';
import imgScore from './assets/img_products_score.svg';
import imgSong from './assets/img_products_song.svg';
import './styles.scss';

export default function ProductsPage() {
  return (
    <main className="ProductsPage">
      <Helmet>
        <title>Overture Products</title>
        <meta
          name="description"
          content="Modular software components for scalable data management systems."
        />
        <meta
          name="keywords"
          content="Overture, data science software, bioinformatics software, open-source software, cancer research, academic collaborations, grant co-applicant, software consulting, project architecture, migration, custom development, scalability, technical support, troubleshooting, Ontario Institute for Cancer Research, OICR, Canarie, DMS Command Line Interface, The National Cancer Institutes Informatics Technology for Cancer Research Program, NCI ITCR, Overture DMS, GA4GH passport system"
        />
      </Helmet>

      {/* HERO */}
      <div className="Hero grey">
        <div className="container">
          <section className="Hero__section">
            <H1>Our Products</H1>
            <P1 className="Hero__subtitle">
              Modular software components for scalable data management systems
            </P1>
          </section>
        </div>
      </div>

      {/* Sections - There are five of these of each product, Song, Score, Ego, Maestro, Arranger. See the component, ProductPageSection and YellowButton */}

      {/* Song section - white background */}
      <ProductPageSection
        src={imgSong}
        title="Song"
        subtitle="Metadata Submission, Tracking & Validation"
        description="Song governs the submission, validation and tracking of genomic metadata across multiple cloud storage systems. With minimal human intervention, multiple contributors can create structured metadata repositories full of accessible, interoperable, and reusable data."
        links={null}
        yellowButtonIcon1="productMetadataValidation"
        yellowButtonIcon2="productMetadataTracking"
        yellowButtonIcon3="productStateControls"
        yellowButtonTitle1="Metadata Validation"
        yellowButtonTitle2="Metadata Tracking"
        yellowButtonTitle3="State Controls"
        yellowButtonText1="All data submissions adhere to user-defined standards and structure"
        yellowButtonText2="Automated global identifiers tracks metadata across geographically distributed Song repositories"
        yellowButtonText3="Control the publication status of data with configurable data states"
        isGrey={false}
      />

      {/* Score section - grey background */}
      <ProductPageSection
        src={imgScore}
        title="Score"
        subtitle="File transfer and Object Storage"
        description="Score simplifies data transfer and storage to and from the cloud. File bundling and resumable download features make it easy to transfer large data sets, while BAM and CRAM slicing enables users to segment large genomic files into manageable portions."
        links={null}
        yellowButtonIcon1="productHighTransfer"
        yellowButtonIcon2="productSamtools"
        yellowButtonIcon3="productCloudSupport"
        yellowButtonTitle1="High-performance transfers with multipart uploads and downloads"
        yellowButtonTitle2="Built-in Samtools functionality, including BAM and CRAM file slicing"
        yellowButtonTitle3="Support for AWS S3, Azure Storage, Google Cloud and more"
        isGrey={true}
      />

      {/* Maestro section - white background */}
      <ProductPageSection
        src={imgMaestro}
        title="Maestro"
        subtitle="Indexing of Distributed Data"
        description="Unifies genomic metadata dispersed across numerous Song repositories into a single, searchable Elasticsearch index."
        links={null}
        yellowButtonIcon1="productMultipleSongsIndex"
        yellowButtonIcon2="productMultipleIndexLevels"
        yellowButtonIcon3="productSlackIntegration"
        yellowButtonTitle1="Multiple “Songs” Index"
        yellowButtonTitle2="Multiple Indexing Levels"
        yellowButtonTitle3="Slack Integration"
        yellowButtonText1="Connect to one or multiple Song servers and produce a single Elasticsearch index"
        yellowButtonText2="Control indexing of discrete units of data"
        yellowButtonText3="Send notifications through a Slack webhook integration"
        isGrey={false}
      />

      {/* Arranger section - grey background */}
      <ProductPageSection
        src={imgArranger}
        title="Arranger"
        subtitle="Configurable Search Portals"
        description="A search API built alongside a collection of reusable UI components. Arranger allows admins to configure functional data portals for users to query data, build cohorts, and export filtered data for further analysis and interpretation."
        yellowButtonIcon1="productSearchAPI"
        yellowButtonIcon2="productBuiltInUIComponents"
        yellowButtonIcon3="productAdministrativeUI"
        yellowButtonTitle1="Search API"
        yellowButtonTitle2="Built-In UI Components"
        yellowButtonTitle3="Administrative UI"
        yellowButtonText1="A GraphQL API layered aboce an Elasticsearch Index "
        yellowButtonText2="Configured to speak to the search API"
        yellowButtonText3="Enabling the customization of the search API and UI components"
        isGrey={true}
      />

      {/* Ego section - white background */}
      <ProductPageSection
        src={imgEgo}
        title="Ego"
        subtitle="Authorization and User Management"
        description="Ego safeguards data with a secure protocol for authenticating users and authorizing the information and applications those users can access. Ego provides a secure permission management system and an administrative UI, making administrative tasks accessible to all collaborators."
        links={null}
        yellowButtonIcon1="productSingleSignOn"
        yellowButtonIcon2="productStateless"
        yellowButtonIcon3="productScalable"
        yellowButtonTitle1="Single Sign-on"
        yellowButtonTitle2="Stateless"
        yellowButtonTitle3="Scalable"
        yellowButtonText1="Sign in using credentials from popular identity providers"
        yellowButtonText2="Uses JSON Web Tokens (JWT) for authorization eliminating the need for session management"
        yellowButtonText3="No limits to the number of applications you can govern Ego with"
        isGrey={false}
      />

      {/* lower blue section */}
      <section className="lower-blue-section">
        <div className="lower-blue-section__container container">
          <div className="lower-blue-section__holder">
            <div className="lower-blue-section__title-holder">
              <H2>The Overture Data Management System (DMS)</H2>
            </div>
            {/* div with the blue background */}
            <div className="lower-blue-section__content-holder">
              <div className="lower-blue-section__img-holder">
                <img src={imgDMS} alt="DMS screenshot" className="lower-blue-section__img" />
              </div>
              <div className="lower-blue-section__text-button-holder">
                <div className="lower-blue-section__text-holder">
                  <P1 className="lower-blue-section__text">
                    <span>
                      Built from our core collection of microservices, the DMS offers turnkey
                      installation, configuration, and deployment of the Overture software.
                    </span>
                    <br />
                    <br />
                    <br />
                    <span>
                      While a custom solution will offer greater scalability, the DMS is an ideal
                      starting point for anyone looking to explore Overture and experience how our
                      microservices work in concert to create comprehensive data management systems.
                    </span>
                  </P1>
                </div>
                <div className="lower-blue-section__button-holder">
                  <Button type="primary" size="medium" className="lower-blue-section__button">
                    Installation Instructions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
