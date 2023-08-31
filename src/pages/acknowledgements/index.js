import React from 'react';
import Helmet from 'react-helmet';
import { H2, H3, P2, L1, Hero } from 'components';
import './styles.scss';

export default function AcknowledgementsPage() {
  return (
    <main className="AcknowlegementsPage">
      {/* Metadata */}
      <Helmet>
        <title>Overture Acknowledgements</title>
        <meta
          name="description"
          content="We want to thank the following organizations for their funding and support, without which Overture could not have been possible."
        />
        <meta
          name="keywords"
          content="Overture, data science software, bioinformatics software, open-source software, cancer research, academic collaborations, grant co-applicant, software consulting, project architecture, migration, custom development, scalability, technical support, troubleshooting, Ontario Institute for Cancer Research, OICR, Canarie, DMS Command Line Interface, The National Cancer Institutes Informatics Technology for Cancer Research Program, NCI ITCR, Overture DMS, GA4GH passport system"
        />
      </Helmet>

      {/* HERO */}
      <Hero
        title="Acknowledgements"
        subtitle="We want to thank the following organizations for their funding and support, without
              which Overture could not have been possible."
      ></Hero>

      {/* Canarie  */}
      <section>
        <div className="container">
          {/* header */}
          <div className="header">
            <H2>Canarie</H2>
          </div>

          <div className="detail-holder">
            {/* left column */}
            <div className="detail">
              <H3>2020 to 2023</H3>
              <P2>
                Under the CANARIE research grant, we were given the opportunity to create the
                Overture Data Management system, which simplifies the Overture setup and removes
                technical barriers by bundling the core components (Song, Score, Maestro, Arranger
                and Ego) together and making it easy for both large and small projects to install,
                configure, and deploy these services.
              </P2>
            </div>

            {/* right column */}
            <div className="detail">
              <H3>Canarie funded the development of the following:</H3>
              <L1>
                <li>Packaging the core components together with all software and dependencies.</li>
                <li>
                  The DMS Command Line Interface (CLI) which serves as the single point of
                  interaction with the DMS.
                </li>
                <li>
                  A hosted login page, user profile, and user interface for data exploration that
                  allows for intuitive querying and logo customization
                </li>
                <li>Improved documentation to help DMS administrators launch the portal</li>
              </L1>
            </div>
          </div>
        </div>
      </section>

      {/* NCI ITCR */}
      <section className="grey-bg">
        <div className="container">
          {/* header */}
          <div className="header">
            <H2>
              The National Cancer Institutes Informatics Technology for Cancer Research Program (NCI
              ITCR)
            </H2>
          </div>

          <div className="detail-holder">
            {/* left column */}
            <div className="detail">
              <H3>2021 to 2026.</H3>
              <P2>
                The National Cancer Institutes Informatics Technology for Cancer Research Program
                (NCI ITCR) supports investigator-initiated, research-driven informatics technology
                development across all aspects of cancer research. ITCR funding is greatly aiding
                the development of Overture services. We are excited to share these developments in
                the near future. Thank you, NCI ITCR, for your invaluable contribution to the
                Overture project.
              </P2>
            </div>

            {/* right column */}
            <div className="detail">
              <H3>ITCR is currently funding the development of the following:</H3>
              <L1>
                <li>A multi-scale Overture DMS</li>
                <li>A framework for visualization and analysis tools to plug into the DMS</li>
                <li>The Implementation of the GA4GH passport system within Ego</li>
                <li>Overture federated search and data harmonization</li>
                <li>Expanding user supports, outreach and community engagement</li>
              </L1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
