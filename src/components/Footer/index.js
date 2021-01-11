/**
 * Declarative footer. Loops over links object and spit out routes.
 */
import React from 'react';
import { Icon, LinkHelper as Link } from 'components';
import productsDict from 'constants/products';
import { ABOUT_US_PATH, PRIVACY_PATH, TERMS_PATH } from 'constants/pages';
import {
  NETLIFY_LINK,
  NETLIFY_IMAGE_LINK,
  OICR_LINK,
  TEAM_BLOG_LINK,
} from 'constants/external-links';
import './styles.scss';
import logo from './logo.svg';

const SHOW_DOCS = process.env.GATSBY_SHOW_DOCS === 'true';

const columns = {
  'Generate & Upload': [
    {
      Score: {
        link: productsDict.score.productsPath,
        icon: null,
        newTab: false,
        className: '',
      },
      Song: {
        link: productsDict.song.productsPath,
        icon: null,
        newTab: false,
        className: '',
      },
    },
  ],
  'Access & Download': [
    {
      Ego: {
        link: productsDict.ego.productsPath,
        icon: null,
        newTab: false,
        className: '',
      },
      Maestro: {
        icon: null,
        newTab: false,
        className: '',
        link: productsDict.maestro.productsPath,
      },
      Arranger: {
        icon: null,
        newTab: false,
        className: '',
        link: productsDict.arranger.productsPath,
      },
    },
  ],
  'Analyze & Discover': [
    {
      Jukebox: {
        link: productsDict.jukebox.productsPath,
        newTab: false,
        className: '',
      },
      OncoJS: {
        link: productsDict.oncojs.productsPath,
        className: '',
      },
    },
  ],
  'Collaborate & Share': [
    {
      Persona: {
        className: '',
        link: productsDict.persona.productsPath,
      },
      Riff: {
        link: productsDict.riff.productsPath,
        newTab: false,
        className: '',
      },
    },
  ],
  'Track & Manage': [
    {
      'Billing & Usage': {
        link: productsDict.billing.githubUrl,
        icon: 'githubGrey',
        newTab: true,
        className: '',
      },
      Enrolment: {
        link: productsDict.enrolment.githubUrl,
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
        link: ABOUT_US_PATH,
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
        link: TEAM_BLOG_LINK,
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
          <Link className="oicr-logo" to={OICR_LINK}>
            <img src={logo} alt="OICR" />
          </Link>
          <FooterColumns />
        </div>
      </div>
      <div className="bg-grey px1 footer-credits">
        <div className="footer-credits__text">
          <div className="px1 copyright">© {new Date().getFullYear()} Overture.</div>
          <div className="px1">
            <Link to={PRIVACY_PATH}>Privacy</Link>
            <span>|</span>
            <Link to={TERMS_PATH}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
      <div className="netlify-badge">
        <Link to={NETLIFY_LINK}>
          <img src={NETLIFY_IMAGE_LINK} alt="Deploys by Netlify" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
