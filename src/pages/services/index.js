import React from 'react';
import Helmet from 'react-helmet';
import { Button, H2, Hero, MarketingSection } from 'components';
import academicImg from './assets/academic.svg';
import techImg from './assets/tech_support.svg';
import './styles.scss';

const ServicesPage = () => (
  <main className="ServicesPage">
    {/* Metadata */}
    <Helmet>
      <title>Overture Services</title>
      <meta
        name="description"
        content="Interested by our expertise or the Overture software stack and need help getting started? Want to collaborate with us on exciting new projects?  We operate as a not-for-profit organization, so all our funds are reinvested into our projects."
      />
      <meta
        name="keywords"
        content="Overture, data science software, bioinformatics software, open-source software, cancer research, academic collaborations, grant co-applicant, software consulting, project architecture, migration, custom development, scalability, technical support, troubleshooting, Ontario Institute for Cancer Research, OICR"
      />
    </Helmet>

    {/* HERO */}
    <Hero
      title="Services"
      bgImage="img_services"
      subtitle="Interested by our expertise or software stack and need help getting started? Want to collaborate with us on exciting new projects? We are here to help!"
    />

    {/* Academic Collaborations  */}
    <MarketingSection>
      <div className="column">
        <H2>Academic Collaborations.</H2>
        <div className="my3 yellow-bar" />
        <p className="">
          We welcome collaborations in the academic domain. We have extensive experience and can
          team up with you as a co-applicant for your grant proposals. Our team’s extensive
          knowledge can help deliver high-profile projects by deploying or modifying our software
          stacks and building custom solutions for joint projects.
        </p>

        <Button type="primary" size="medium" className="mt3" internalLink="/contact">
          Request a collaboration
        </Button>
      </div>

      {/* Img  */}
      <div className="column is-half is-offset-1 is-hidden-mobile">
        <img alt="" src={academicImg} />
      </div>
    </MarketingSection>

    {/* Consulting  */}

    <MarketingSection className="consulting">
      {/* Img  placeholder */}
      <div className="column consulting-hero is-5 is-hidden-mobile" />

      {/* Copy  */}
      <div className="column is-offset-1">
        <H2>Consulting.</H2>
        <div className="my3 yellow-bar" />
        <p>
          {' '}
          We will work autonomously or alongside your team to fully understand your business needs
          and integrate Overture into your projects. We will help accelerate your success at any
          stage of your project!
        </p>
        <ul className="py3">
          <li className="bullet">Project architecture, best practices</li>
          <li className="bullet">Migration & software integration</li>
          <li className="bullet">Custom development</li>
          <li className="bullet">Scalability</li>
        </ul>

        <Button type="primary" size="medium" internalLink="/contact">
          Request consulting
        </Button>
      </div>
    </MarketingSection>

    {/* Academic Collaborations  */}
    <MarketingSection>
      {/* Copy  */}
      <div className="column">
        <H2>Technical support.</H2>
        <div className="my3 yellow-bar" />
        <p>
          Our team of professionals speak business but dream in code. We love building open-source
          solutions and are passionate about helping you worry less, science more.
        </p>
        <ul className="py3">
          <li className="bullet">Technical audits</li>
          <li className="bullet">Step-by-step guidance</li>
          <li className="bullet">Troubleshooting</li>
        </ul>

        <Button type="primary" size="medium" internalLink="/contact">
          Request technical support
        </Button>
      </div>

      {/* Img  */}
      <div className="column is-half is-offset-1 is-hidden-mobile">
        <img alt="" src={techImg} />
      </div>
    </MarketingSection>

    {/* Bottom Hero */}
  </main>
);

export default ServicesPage;
