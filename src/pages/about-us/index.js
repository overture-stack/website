import React from 'react';
import Helmet from 'react-helmet';
import {
  H1,
  H2,
  H3,
  P1,
  P2,
  P3,
  Hero,
  YellowButton,
  LinkHelper as Link,
} from 'components';
import {
  OVERTURE_GITHUB_LINK,
  GI_PROGRAM_LINK,
} from 'constants/external-links';
import './styles.scss';
import {
  OVERTURE_DOCUMENTATION_CONTRIBUTION_LINK,
  OVERTURE_DOCUMENTATION_SUPPORT_LINK,
} from '../../../constants/external-links';

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
        subtitle="We build and deploy applications that help the data science community organize and share massive genomics datasets."
      />

      {/* white background section */}
      <section className="white-section">
        <div className="container">
          <div className="white-section__holder">
            {/* titles */}
            <div className="white-section__titles-holder">
              <div className="white-section__title-holder">
                <H3>Making big-data discoverable one byte at a time.</H3>
              </div>

              <P2>
                We are the{' '}
                <Link to={GI_PROGRAM_LINK}>
                  Genome Informatics Software Engineering team from Ontario
                  Institute for Cancer Research
                </Link>
                . At OICR we develop new software, databases and other necessary
                components to store, organize and compute over the large and
                complex datasets being generated by our cancer research
                programs. Embodying OICR's values of collaboration and
                community, we are firm believers in open-source and
                open-science. As such our resources and expertise are shared
                with the data science community at large.
              </P2>

              <div className="white-section__title-holder">
                <H3>The Overture Story</H3>
              </div>
              <P2>
                Overture's story began in 2017 when organizations started
                approaching us, seeking guidance on deploying ICGC components
                within their environments. At the same time, we were picking up
                new projects and found ourselves rebuilding the same
                foundational features. In pursuit of efficiency, we created
                Overture, a collection of modular microservices designed to
                expedite our application development in a scalable manner.
                Learning from past challenges, we've refined our toolkit, which
                we're now eager to extend to the broader data science and
                research software community.
              </P2>
            </div>

            <div className="white-section__title-holder">
              <H2>Our Values</H2>
            </div>

            {/* yellow buttons */}
            <div className="white-section__yellow-button-holder">
              <YellowButton
                title="Open Source"
                img_src="aboutUsOpenSource"
                alt="Open Source Icon"
                text="We are firm believers in open science. Our software is freely available, accessible and open to contributions from the community.                "
              />
              <YellowButton
                title="Modular"
                img_src="aboutUsModular"
                alt="Modular Icon"
                text="Each component is a distinct unit with a specific responsibility, designed to seamlessly integrate and scale into a comprehensive solution."
              />
              <YellowButton
                title="Extensible"
                img_src="aboutUsExtensible"
                alt="Extensible Icon"
                text="Our components are expandable and customizable, allowing them to meet the specific needs of software engineers and data scientists."
              />
              <YellowButton
                title="Reusable"
                img_src="aboutUsReusable"
                alt="Reusable Icon"
                text="Each component is designed for various contexts with minimal modifications, helping free developers from redundant tasks."
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
                <H1>Lets Connect</H1>
              </div>
              <div className="grey-section__subtitle-holder">
                <P3>
                  Join us in contributing software tools that accelerate
                  scientific discovery.
                </P3>
              </div>
            </div>
            {/* yellow button div */}
            <div className="grey-section__yellow-button-holder">
              <YellowButton
                link={OVERTURE_DOCUMENTATION_CONTRIBUTION_LINK}
                img_src="githubYellow"
                alt="Get Involved"
                title="Get Involved"
              />
              <YellowButton
                link={OVERTURE_DOCUMENTATION_SUPPORT_LINK}
                img_src="githubFindUs"
                alt="Get in touch"
                title="Get in Touch"
              ></YellowButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
