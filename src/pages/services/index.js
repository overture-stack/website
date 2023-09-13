import React from 'react';
import Helmet from 'react-helmet';
import { Button, P1, H2, Hero, ServicesPageSection } from 'components';
import { CONTACT_US_PATH } from 'constants/pages';
import imgTechnicalSupport from './assets/img_top_white_section.svg';
import imgConsulting from './assets/img_grey_section.svg';
import imgAcademicCollaborations from './assets/img_bottom_white_section.svg';

import './styles.scss';

const ServicesPage = () => {
  return (
    <main className="ServicesPage">
      <Helmet>
        <title>Overture Services</title>
        <meta
          name="description"
          content="Interested by our expertise or the Overture software stack and need help getting started? Want to collaborate with us on exciting new projects?  We operate as a not-for-profit organization, so all our funds are reinvested into our projects."
        />
        <meta
          name="keywords"
          content="Overture, data science software, bioinformatics software, open-source software, cancer research, academic collaborations, grant co-applicant, software consulting, project architecture, migration, custom development, scalability, technical support, troubleshooting, Ontario Institute for Cancer Research, OICR, Canarie, DMS Command Line Interface, The National Cancer Institutes Informatics Technology for Cancer Research Program, NCI ITCR, Overture DMS, GA4GH passport system"
        />
      </Helmet>

      {/* hero */}
      <Hero
        title="Services"
        subtitle="We believe in the collective power of expertise and shared resources. If you want to collaborate here's how you can connect."
      ></Hero>

      {/* top white section */}
      <ServicesPageSection
        src={imgTechnicalSupport}
        alt="Technical Support Image"
        title="Technical Support"
        subtitle="Our team of professionals speaks business and dreams code. We take pride in our software and are passionate about helping others use them."
        list1="Technical audits"
        list2="Step-by-step guidance"
        list3="Troubleshooting"
        buttonText="Contact us on Slack"
        contactMessage="or email us at contact@overture.bio"
      />
      {/* grey section */}
      <ServicesPageSection
        src={imgConsulting}
        alt="Consulting Image"
        title="Consulting"
        subtitle=" We will work autonomously or alongside your team to fully understand your business
  needs and integrate Overture into your projects. We will help accelerate your
  success at any stage of your project!"
        list1="Project architecture, best practices"
        list2="Migration & software integration"
        list3="Custom development"
        list4="Scalability"
        isGrey={true}
        contactMessage="Email us at contact@overture.bio"
      />

      {/* bottom white section */}
      <ServicesPageSection
        src={imgAcademicCollaborations}
        alt="Academic Collaborations Image"
        title="Academic Collaborations"
        subtitle=" We welcome collaborations in the academic domain. We have extensive experience and can team up with you as a co-applicant for your grant proposals. Our team’s extensive knowledge can help deliver high-profile projects by deploying or modifying Overture and building custom solutions for joint projects."
        isNoList={true}
        contactMessage="Email us at contact@overture.bio"
      />
    </main>
  );
};

export default ServicesPage;
