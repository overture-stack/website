import React from 'react';
import { Button, H1, H2, P1, ProductPageSection, Hero } from 'components';
import Helmet from 'react-helmet';
import imgQuickStartPortal from './assets/overtureQuickstartPortal.webp';
import imgArranger from './assets/img_products_arranger.svg';
import imgMaestro from './assets/img_products_maestro.svg';
import imgScore from './assets/img_products_score.svg';
import imgSong from './assets/img_products_song.svg';
import './styles.scss';
import { GETTING_STARTED_PATH } from '../../../constants/pages';

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

      <Hero
        title="Our Products"
        subtitle="Linking the gaps between data and discovery."
      />

      {/* Song section - white background */}
      <ProductPageSection
        src={imgSong}
        title="Song"
        subtitle="Metadata Submission, Tracking & Validation"
        description="Song governs the submission, validation and tracking of genomic metadata across multiple cloud storage systems. With minimal human intervention, multiple contributors can create structured metadata repositories full of accessible, interoperable, and reusable data."
        yellowButtonIcon1="productMetadataValidation"
        yellowButtonIcon2="productMetadataTracking"
        yellowButtonIcon3="productStateControls"
        yellowButtonTitle1="Metadata Validation"
        yellowButtonTitle2="Metadata Tracking"
        yellowButtonTitle3="State Controls"
        yellowButtonText1="All data submissions adhere to user-defined standards and structure"
        yellowButtonText2="Automated global identifiers tracks metadata across geographically distributed Song repositories"
        yellowButtonText3="Control the publication status of data with configurable data states"
        isGrey={true}
      />

      {/* Score section - grey background */}
      <ProductPageSection
        src={imgScore}
        title="Score"
        subtitle="File transfer and Object Storage"
        description="Score simplifies data transfer and storage to and from the cloud. File bundling and resumable download features make it easy to transfer large data sets, while BAM and CRAM slicing enables users to segment large genomic files into manageable portions."
        yellowButtonIcon1="productHighTransfer"
        yellowButtonIcon2="productSamtools"
        yellowButtonIcon3="productCloudSupport"
        yellowButtonTitle1="Multi-Platform Support"
        yellowButtonTitle2="Built-in SamTools"
        yellowButtonTitle3="Robust File Transfers"
        yellowButtonText1="Support for AWS S3, Azure Storage, Google Cloud and more"
        yellowButtonText2="Including BAM and CRAM file slicing"
        yellowButtonText3="Resumable multipart uploads and downloads"
        isGrey={false}
      />

      {/* Maestro section - white background */}
      <ProductPageSection
        src={imgMaestro}
        title="Maestro"
        subtitle="Indexing of Distributed Data"
        description="Unifies genomic metadata dispersed across numerous Song repositories into a single, searchable Elasticsearch index."
        yellowButtonIcon1="productMultipleSongsIndex"
        yellowButtonIcon2="productMultipleIndexLevels"
        yellowButtonIcon3="productSlackIntegration"
        yellowButtonTitle1={`Multi "Song" Indexing`}
        yellowButtonTitle2="Multiple Indexing Levels"
        yellowButtonTitle3="Slack Integration"
        yellowButtonText1="Connect to one or multiple Song servers and produce a single Elasticsearch index"
        yellowButtonText2="Control indexing of discrete units of data"
        yellowButtonText3="Send notifications through a Slack webhook integration"
        isGrey={true}
      />

      {/* Arranger section - grey background */}
      <ProductPageSection
        src={imgArranger}
        title="Arranger"
        subtitle="Data Portal API and UI component generation"
        description="A data-agnostic search API built alongside a collection of reusable UI components. Arranger allows admins to configure functional data portals from any Elasticsearch index, enabling users to query data, build cohorts, and export filtered data for further analysis and interpretation."
        yellowButtonIcon1="productSearchAPI"
        yellowButtonIcon2="productBuiltInUIComponents"
        yellowButtonIcon3="productAdministrativeUI"
        yellowButtonTitle1="Search API Generation"
        yellowButtonTitle2="Built-In UI Components"
        yellowButtonTitle3="Highly Configurable"
        yellowButtonText1="Generate a GraphQL API from any Elasticsearch Index"
        yellowButtonText2="Prop up a front end web portal for users to filter and query your data"
        yellowButtonText3="Helping you create a customized discovery portal"
        isGrey={false}
      />

      {/* lower blue section */}
      <section className="lower-blue-section">
        <div className="lower-blue-section__container">
          <div className="lower-blue-section__holder">
            <div className="lower-blue-section__title-holder">
              <H2>Getting Started</H2>
            </div>
            {/* div with the blue background */}
            <div className="lower-blue-section__top-gradient"></div>
            <div className="lower-blue-section__content-holder">
              <div className="lower-blue-section__img-holder">
                <img
                  src={imgQuickStartPortal}
                  alt="Overture QuickStart Portal screenshot"
                  className="lower-blue-section__img"
                />
              </div>
              <div className="lower-blue-section__text-button-holder">
                <div className="lower-blue-section__text-holder">
                  <P1 className="lower-blue-section__text">
                    <span>
                      Built from our core collection of microservices, we
                      provide an Overture Quickstart for a fast and frictionless
                      setup of our data platform locally.
                    </span>
                  </P1>
                </div>
                <div className="lower-blue-section__button-holder">
                  <Button
                    link={GETTING_STARTED_PATH}
                    type="primary"
                    size="medium"
                    className="lower-blue-section__button"
                  >
                    Get Started
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
