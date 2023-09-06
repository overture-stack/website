import React from 'react';
import Helmet from 'react-helmet';
import { Button, H1, H2, H3, P1, P3, Hero, Search, YellowButton, LinkHelper } from 'components';
import { OVERTURE_GITHUB_LINK, GITHUB_ISSUES_LINK, SLACK_LINK } from 'constants/external-links';
import { DOCS_DMS_INSTALL_LINK } from 'constants/docs';
import './styles.scss';

const AboutUsPage = () => {
  return (
    <main className="AboutUsPage">
      <Helmet>
        <title>Overture About Us</title>
        <meta
          name="description"
          content="We are OICR's team of software engineers, data scientists and cloud architects developing and promoting open-source big-data tools for those advancing the knowledge and treatment of cancer."
        />
        <meta
          name="keywords"
          content="Overture, data science software, bioinformatics software, open-source software, cancer research, academic collaborations, grant co-applicant, software consulting, project architecture, migration, custom development, scalability, technical support, troubleshooting, Ontario Institute for Cancer Research, OICR, Canarie, DMS Command Line Interface, The National Cancer Institutes Informatics Technology for Cancer Research Program, NCI ITCR, Overture DMS, GA4GH passport system"
        />
      </Helmet>

      {/* Hero */}
      <Hero
        title="About Us"
        subtitle="We are OICR's team of software engineers, data scientists and cloud architects developing and promoting open-source big-data tools for those advancing the knowledge and treatment of cancer."
      />

      {/* white background section */}
      <section className="white-section">
        <div className="container">
          <div className="white-section__holder">
            {/* titles */}
            <div className="white-section__titles-holder">
              <div className="white-section__title-holder">
                <H2>The Overture Story</H2>
              </div>
              <div className="white-section__subtitle-holder">
                <P1>
                  Our team has established a strong foundation in building software that fills the
                  gaps between data and discovery across the genomics data lifecycle. The Overture
                  stack is designed under the following four principles.
                </P1>
              </div>
            </div>
            {/* yellow buttons */}
            <div className="white-section__yellow-button-holder">
              <YellowButton
                title="Open Source"
                img_src="aboutUsOpenSource"
                alt="Open Source Icon"
                text="The software components should be freely available, accessible and open to contributions from the community."
              />
              <YellowButton
                title="Modular"
                img_src="aboutUsModular"
                alt="Modular Icon"
                text="The components should be designed as self-contained units with narrow responsibilities that can be combined to form a complete solution."
              />
              <YellowButton
                title="Extensible"
                img_src="aboutUsExtensible"
                alt="Extensible Icon"
                text="The components should be designed to be expandable and customizable to meet the specific needs of researchers."
              />
              <YellowButton
                title="Reusable"
                img_src="aboutUsReusable"
                alt="Reusable Icon"
                text="The components should be designed to be expandable and customizable to meet the specific needs of researchers."
              />
            </div>
          </div>
        </div>
      </section>

      {/* grey background section */}
      <section className="grey-section grey-bg">
        <div className="container">
          <div className="grey-section__holder">
            <div className="grey-section__titles-holder">
              {/* titles div */}
              <div className="grey-section__title-holder">
                <H1>Connect with Our Community</H1>
              </div>
              <div className="grey-section__subtitle-holder">
                <P3>
                  Join us in contributing software tools that accelerate scientific discovery.
                </P3>
              </div>
            </div>
            {/* yellow button div */}
            <div className="grey-section__yellow-button-holder">
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
    </main>
  );
};

export default AboutUsPage;
