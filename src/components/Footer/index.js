/**
 * Declarative footer. Loops over links object and spit out routes.
 */
import React from 'react';
import { Icon, LinkHelper as Link } from 'components';
import productsDict from 'meta/products-dict';
import './styles.scss';
import logo from './logo.svg';

const SHOW_DOCS = process.env.GATSBY_SHOW_DOCS === 'true';

const columns = {
  'Generate & Upload': [
    {
      Score: {
        link: '/products/score',
        icon: null,
        newTab: false,
        className: '',
      },
      Song: {
        link: '/products/song',
        icon: null,
        newTab: false,
        className: '',
      },
    },
  ],
  'Access & Download': [
    {
      Ego: {
        link: '/products/ego',
        icon: null,
        newTab: false,
        className: '',
      },
      Maestro: {
        icon: null,
        newTab: false,
        className: '',
        link: '/products/maestro',
      },
      Arranger: {
        icon: null,
        newTab: false,
        className: '',
        link: '/products/arranger',
      },
    },
  ],
  'Analyze & Discover': [
    {
      Jukebox: {
        link: '/products/jukebox',
        newTab: false,
        className: '',
      },
      OncoJS: {
        link: '/products/oncojs',
        className: '',
      },
    },
  ],
  'Collaborate & Share': [
    {
      Persona: {
        className: '',
        link: '/products/persona',
      },
      Riff: {
        link: '/products/riff',
        newTab: false,
        className: '',
      },
    },
  ],
  'Track & Manage': [
    {
      'Billing & Usage': {
        link: productsDict.billing.github,
        icon: 'githubGrey',
        newTab: true,
        className: '',
      },
      Enrolment: {
        link: productsDict.enrolment.github,
        icon: 'githubGrey',
        newTab: true,
        className: '',
      },
    },
  ],
  Other: [
    {
      ...(SHOW_DOCS
        ? {
            Documentation: {
              link: '/documentation',
              icon: null,
              newTab: false,
              className: '',
            },
          }
        : {}),
      'Case Studies': {
        link: '/case-studies',
        icon: null,
        newTab: false,
        className: '',
      },
      'About Us': {
        link: '/about-us',
        icon: null,
        newTab: false,
        className: '',
      },
    },
    {
      Services: {
        link: '/services',
        icon: null,
        newTab: false,
        className: '',
      },
      Contact: {
        link: '/contact',
        icon: null,
        newTab: false,
        className: '',
      },
      'Team Blog': {
        link: 'http://softeng.oicr.on.ca/',
        icon: null,
        newTab: true,
        className: '',
      },
    },
  ],
};

const FooterColumns = () => {
  return (
    <div className="columns is-mobile footer-links flex-auto flex-wrap">
      {Object.keys(columns).map(columnKey => (
        <section className="footer-column" key={columnKey}>
          <div className="link-group-header">{columnKey}</div>
          {columns[columnKey].map(linksObj => (
            <ul className="list-reset" key={Object.keys(linksObj)[0]}>
              {Object.keys(linksObj).map(linkKey => {
                const { icon, link, newTab = false } = linksObj[linkKey];
                const target = newTab ? '_blank' : '_self';

                return (
                  <li key={linkKey}>
                    <Link className="link" to={link}>
                      <span>{linkKey}</span>
                      {icon && <Icon img={icon} style={{ marginLeft: 4 }} />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ))}
        </section>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="Footer site-wrapper__footer">
      <div className="container">
        <div className="footer-box">
          <Link className="oicr-logo" to="http://oicr.on.ca">
            <img src={logo} alt="OICR" />
          </Link>
          <FooterColumns />
        </div>
      </div>
      <div className="bg-grey px1 footer-credits">
        <div className="footer-credits__text">
          <div className="px1 copyright">© {new Date().getFullYear()} Overture.</div>
          <div className="px1">
            <Link to="/privacy/">Privacy</Link>
            <span>|</span>
            <Link to="/terms-conditions/">Terms & Conditions</Link>
          </div>
        </div>
      </div>
      <div className="netlify-badge">
        <Link to="https://www.netlify.com">
          <img
            src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
            alt="Deploys by Netlify"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
