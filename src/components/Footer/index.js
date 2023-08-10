/**
 * Declarative footer. Loops over links object and spit out routes.
 */
import React from 'react';
import { LinkHelper as Link } from 'components';
import {
  ABOUT_US_PATH,
  ACKNOWLEDGEMENTS_PATH,
  CASE_STUDIES_PATH,
  CONTACT_US_PATH,
  COMMUNITY_PATH,
  DOCUMENTATION_PATH,
  PRIVACY_PATH,
  PRODUCTS_PATH,
  SERVICES_PATH,
  TERMS_PATH,
} from 'constants/pages';
import { NETLIFY_LINK, NETLIFY_IMAGE_LINK, OICR_LINK } from 'constants/external-links';
import './styles.scss';
import logo from './logo.svg';

const links = [
  {
    name: 'Products',
    url: PRODUCTS_PATH,
    icon: null,
    newTab: true,
    className: '',
  },
  {
    name: 'Documentation',
    url: DOCUMENTATION_PATH,
    icon: null,
    newTab: false,
    className: '',
  },
  {
    name: 'About Us',
    url: ABOUT_US_PATH,
    icon: null,
    newTab: false,
    className: '',
  },
  {
    name: 'Acknowledgements',
    url: ACKNOWLEDGEMENTS_PATH,
    icon: null,
    newTab: false,
    className: '',
  },
  {
    name: 'Services',
    url: SERVICES_PATH,
    icon: null,
    newTab: false,
    className: '',
  },
  {
    name: 'Case Studies',
    url: CASE_STUDIES_PATH,
    icon: null,
    newTab: false,
    className: '',
  },
  {
    name: 'Contact Us',
    url: CONTACT_US_PATH,
    icon: null,
    newTab: false,
    className: '',
  },

  {
    name: 'Community',
    url: COMMUNITY_PATH,
    icon: null,
    newTab: false,
    className: '',
  },
];

const FooterLinks = () => {
  return (
    <div className="links-container">
      {links.map((link) => (
        <Link className="links-container__link" to={link.url}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-white">
        <Link className="footer-white__oicr-logo" to={OICR_LINK}>
          <img src={logo} alt="OICR" />
        </Link>
        <div className="footer-white__links-holder">
          <FooterLinks />
        </div>
        <div className="netlify-badge-desktop">
          <Link to={NETLIFY_LINK}>
            <img src={NETLIFY_IMAGE_LINK} alt="Deploys by Netlify" />
          </Link>
        </div>
      </div>
      <div className="bg-grey px1 footer-grey">
        <div className="footer-grey__text ">
          <div className="footer-grey__top-container-mobile">
            <div className="px1">© {new Date().getFullYear()} Overture.</div>
            <div className="netlify-badge-mobile">
              <Link to={NETLIFY_LINK}>
                <img src={NETLIFY_IMAGE_LINK} alt="Deploys by Netlify" />
              </Link>
            </div>
          </div>

          <div className="px2 ">
            <Link to={PRIVACY_PATH}>Privacy</Link>
            <span>|</span>
            <Link to={TERMS_PATH}>Terms & Conditions</Link>
            <span>|</span>
            <Link to={ACKNOWLEDGEMENTS_PATH}>Acknowledgements</Link>
          </div>
          <div className="netlify-badge-tablet">
            <Link to={NETLIFY_LINK}>
              <img src={NETLIFY_IMAGE_LINK} alt="Deploys by Netlify" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
