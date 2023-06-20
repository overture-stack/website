import React from 'react';
import Helmet from 'react-helmet';
import { Hero, H2, H3 } from 'components';
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
        subtitle="We want to thank the following organizations for their funding and support, without which Overture could not have been possible."
        bgImage="img_acknowledgements"
      />

      {/* Canarie  */}
      <section>
        <div className="container">
          {/* header */}
          <div className="header column mb3">
            <div>
              <H2>Canarie</H2>
              <div className="my3 yellow-bar" />
            </div>
          </div>

          <div className="content">
            {/* left column */}
            <div className="column is-half">
              <H3>2020 to 2023.</H3>
              <div className="my3 yellow-bar" />
              <p>
                Under the CANARIE research grant, we were given the opportunity to create the
                Overture Data Management system, which simplifies the Overture setup and removes
                technical barriers by bundling the core components (Song, Score, Maestro, Arranger
                and Ego) together and making it easy for both large and small projects to install,
                configure, and deploy these services.
              </p>
            </div>

            {/* right column */}
            <div className="column is-offset-1">
              <H3>Canarie Funded the development of the following:</H3>
              <div className="my3 yellow-bar" />
              <ul className="">
                <li className="bullet">
                  Packaging the core components together with all software and dependencies.
                </li>
                <li className="bullet">
                  The DMS Command Line Interface (CLI) which serves as the single point of
                  interaction with the DMS.
                </li>
                <li className="bullet">
                  A hosted login page, user profile, and user interface for data exploration that
                  allows for intuitive querying and logo customization
                </li>
                <li className="bullet">
                  Improved documentation to help DMS administrators launch the portal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NCI ITCR */}
      <section className="grey">
        <div className="container">
          {/* header */}
          <div className="header column mb3">
            <div>
              <H2>
                The National Cancer Institutes Informatics Technology for Cancer Research Program
                (NCI ITCR).
              </H2>
              <div className="my3 yellow-bar" />
            </div>
          </div>

          <div className="content">
            {/* left column */}
            <div className="column is-half">
              <H3>2021 to 2026.</H3>
              <div className="my3 yellow-bar" />
              <p>
                The National Cancer Institutes Informatics Technology for Cancer Research Program
                (NCI ITCR) supports investigator-initiated, research-driven informatics technology
                development across all aspects of cancer research. ITCR funding is greatly aiding
                the development of Overture services. We are excited to share these developments in
                the near future. Thank you, NCI ITCR, for your invaluable contribution to the
                Overture project.
              </p>
            </div>

            {/* right column */}
            <div className="column is-offset-1">
              <H3>ITCR is currently funding the development of the following:</H3>
              <div className="my3 yellow-bar" />
              <ul className="">
                <li className="bullet">A multi-scale Overture DMS</li>
                <li className="bullet">
                  A framework for visualization and analysis tools to plug into the DMS
                </li>
                <li className="bullet">
                  The Implementation of the GA4GH passport system within Ego
                </li>
                <li className="bullet">Overture federated search and data harmonization</li>
                <li className="bullet">
                  Expanding user supports, outreach and community engagement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
