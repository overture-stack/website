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
          content="We thank the following organizations for helping support and fund the development of Overture."
        />
        <meta
          name="keywords"
          content="Overture, data science software, bioinformatics software, open-source software, cancer research, academic collaborations, grant co-applicant, software consulting, project architecture, migration, custom development, scalability, technical support, troubleshooting, Ontario Institute for Cancer Research, OICR, Canarie, DMS Command Line Interface, The National Cancer Institutes Informatics Technology for Cancer Research Program, NCI ITCR, Overture DMS, GA4GH passport system"
        />
      </Helmet>

      {/* HERO */}
      <Hero
        title="Acknowledgements"
        subtitle="We thank the following organizations for helping support and fund the development of Overture."
      ></Hero>

      {/* NCI ITCR */}
      <section>
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
              <H3>ITCR is funding the development of the following:</H3>
              <L1>
                <li>A multi-scale Overture DMS</li>
                <li>Visualization and analysis plug-ins</li>
                <li>GA4GH passport Integration</li>
                <li>Arranger federated search</li>
                <li>User support, outreach and community engagement</li>
              </L1>
            </div>
          </div>
        </div>
      </section>

      {/* Canarie  */}
      <section  className="grey-bg">
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
                <li>The creation of the Overture DMS.</li>
                <li>
                  The DMS Command Line Tool
                </li>
                <li>
                  The DMS-UI which provides a hosted login page, user profile, and customizable UI.
                </li>
                <li>Improved documentation to help DMS administrators</li>
              </L1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
