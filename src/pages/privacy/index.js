import React from 'react';
import { H1, H3 } from 'components';
import './styles.scss';

const Heading = ({ children }) => (
  <div className="pt2">
    <H3 className="">{children}</H3>
    <div className="my2 yellow-bar" />
  </div>
);

const PrivacyPage = () => (
  <main className="PrivacyPage pb3">
    {/* HERO */}
    <section className="hero bg-green">
      <div className="hero-body">
        <div className="container ">
          <H1 className="py3">Website Privacy Statement</H1>
        </div>
      </div>
    </section>

    {/* Application  */}
    <article className="container section py2">
      <section>
        <Heading>Application</Heading>
        <p>
          This Privacy Statement applies to the Overture website. Information collected through this
          website falls into two categories: aggregate information and personal information.
        </p>
      </section>

      {/* Collection and Use */}
      <section>
        <Heading>Collection and Use</Heading>
        <p>
          Aggregate information is information from which individual user identities or
          characteristics have been removed. When a user accesses the Overture website, aggregate
          information is collected automatically in order to better understand website traffic
          patterns (e.g., total number of visitors, most visited sections, peak traffic times). None
          of this information is personally identifiable.
        </p>
        <p>
          Personal information is any information about an identifiable individual. When we collect
          personal information about you through the website, we do so only if you consent to
          provide it to us. Specifically, If you send us an inquiry through our website, we only
          collect your email address in order to respond to you.
        </p>
        <p>
          OICR will not disclose your personal information other than in the following two
          situations:
        </p>
        <ol>
          <li>
            <p>
              Aggregate information is information from which individual user identities or
              characteristics have been removed. When a user accesses the OICR website, aggregate
              information is collected automatically in order to better understand website traffic
              patterns (e.g., total number of visitors, most visited sections, peak traffic times).
              None of this information is personally identifiable.
            </p>
          </li>
          <li>
            <p>
              Personal information is any information about an identifiable individual. When we
              collect personal information about you through the website, we do so only if you
              consent to provide it to us. Specifically, If you send us an inquiry through our
              website, we only collect your email address in order to respond to you.
            </p>
          </li>
        </ol>
      </section>

      {/* Digital Markers */}
      <section>
        <Heading>Digital Markers</Heading>
        <p>
          Ontario Institute for Cancer Research (OICR) websites use sessional digital markers
          (“cookies”), which are small text files stored by your browser on your computer or phone.
          OICR uses cookies on its websites to allow for the integration of third-party services
          (e.g., Twitter), which require this information for their own analytics and measurement
          purposes. The cookies on OICR’s websites do not allow OICR or third parties to identify
          individuals and do not contain personal information and OICR does not have access to the
          information in such third-party cookies. The third-party service providers that place
          cookies have their own privacy policies.
        </p>
        <p>
          If you wish to disable cookies you may adjust your browser settings to reject digital
          markers, including cookies. This may affect the performance of some services on the
          site(s).
        </p>
      </section>

      {/* Disclosure */}
      <section>
        <Heading>Disclosure</Heading>
        <p className="bold">Links</p>
        <p>
          The Overture website may contain links to one or more third party websites. Please note
          that third party websites are not controlled by OICR, and this Privacy Statement does not
          apply in regard to any personal information that you provide to third party websites.
        </p>
      </section>

      {/* Additional Information */}
      <section>
        <Heading>Additional Information</Heading>
        <p>
          If you would like to learn more about OICR’s commitment to protecting privacy, please see
          our{' '}
          <a href="https://oicr.on.ca/oicr-policies-and-procedures/" target="_blank">
            organizational Privacy Policy
          </a>
          . You may also view our{' '}
          <a
            href="https://oicr.on.ca/information-practices-frequently-asked-questions/"
            target="_blank"
          >
            Information Practices Frequently Asked Questions
          </a>
          .
        </p>
        <p>
          If you have any questions or concerns about privacy at OICR, please send a written request
          to:
        </p>

        <div className="bold"> Attn: Privacy Officer</div>
        <div>Ontario Institute for Cancer Research</div>
        <div>MaRS Centre, South Tower</div>
        <div>661 University Avenue, Suite 510</div>
        <div>Toronto, Ontario</div>
        <div>Canada M5G 0A3</div>
        <div>
          <span className="bold pr1">Email:</span>
          <a href="mailto:privacy@oicr.on.ca">privacy@oicr.on.ca</a>
        </div>
      </section>
    </article>
  </main>
);

export default PrivacyPage;
