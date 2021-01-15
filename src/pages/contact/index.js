import React from 'react';
import heroImg from './assets/hero_img.svg';
import Helmet from 'react-helmet';
import { H2, Button, Hero } from 'components';
import { SLACK_LINK } from 'constants/external-links';
import './styles.scss';

export default function ContactPage() {
  return (
    <main className="ContactPage">
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
      <Hero
        title="Contact Us"
        ImgComponent={() => <img className="contact-hero-img" src={heroImg} />}
        fgImage="img_contact"
        fgImageClass="contact-hero-img"
      />

      <div className="is-hidden-mobile" style={{ width: '1px', height: '72px' }} />

      {/* Details / info */}
      <section className="section">
        <div className="container">
          {/* Header */}
          <div className="column is-offset-1 mb3">
            <H2>Get in touch!</H2>
            <div className="yellow-bar mt3" />
          </div>

          <div className="columns contact-details">
            {/* Copy: Bullets: laern more  */}
            <div className="column is-half is-offset-1">
              <div>
                <ul className="pb3">
                  <li className="bullet">Looking for help with our software stack?</li>
                  <li className="bullet">Want to learn more about Overture?</li>
                  <li className="bullet">Want to collaborate?</li>
                  <li className="bullet">Looking for employment? </li>
                </ul>
              </div>
            </div>

            {/* Contact / slack button. */}
            <div className="column">
              <div>
                There are many reasons to get in touch with us and we want to hear from you!
              </div>

              <div className="flex" style={{ alignItems: 'center' }}>
                <Button
                  className="my2 mr2"
                  icon="mail"
                  link="mailto:contact@overture.bio"
                  size="medium"
                  type="primary"
                >
                  Contact Us
                </Button>

                <Button icon="slack" link={SLACK_LINK} size="medium" type="secondary">
                  Join us on Slack
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
