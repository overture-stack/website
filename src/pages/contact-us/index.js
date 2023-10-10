import React from 'react';
import Helmet from 'react-helmet';
import { H3, L1, Hero, LinkHelper as Link, YellowButton } from 'components';
import { EMAIL_LINK, SLACK_LINK } from 'constants/external-links';
import './styles.scss';

export default function ContactUsPage() {
  return (
    <main className="ContactUsPage">
      {/* Metadata */}
      <Helmet>
        <title>Overture - Contact Us</title>
        <meta
          name="description"
          content=" Looking for help with our software stack? Want to collaborate? Looking for employment? Get in touch with the Overture team."
        />
        <meta
          name="keywords"
          content="Overture, data science software, bioinformatics software, open-source software, cancer research, Ontario Institute for Cancer Research, OICR, development careers"
        />
      </Helmet>

      {/* HERO */}
      <Hero title="Contact Us" bgImage="img_contact_us" />

      <section className="contact-us-section mt3">
        {/* text  */}
        <div className="column is-half ">
          <H3 className="mb3">Get in touch!</H3>
          <L1>
            <li>Looking for help with our software stack?</li>
            <li>Want to learn more about Overture?</li>
            <li>Want to collaborate?</li>
            <li>Looking for employment?</li>
          </L1>
        </div>
        {/* icons */}
        <div className="contact-us-section__buttons column">
          {/* left icon */}

          <YellowButton
            link={SLACK_LINK}
            img_src="slackJoin"
            alt="Join Us on Slack"
            title="Join Us on Slack"
          />

          {/* right icon */}
          <YellowButton link={EMAIL_LINK} img_src="emailUs" alt="Email Us" title="Email Us" />
        </div>
      </section>
    </main>
  );
}
