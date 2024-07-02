/**
 * Declarative footer. Loops over links object and spit out routes.
 */
import React from 'react';
import { LinkHelper as Link } from 'components';
import {
  ABOUT_US_PATH,
  ACKNOWLEDGEMENTS_PATH,
  CASE_STUDIES_PATH,
  PRIVACY_PATH,
  PRODUCTS_PATH,
  SERVICES_PATH,
  TERMS_PATH,
} from 'constants/pages';
import {
  NETLIFY_LINK,
  NETLIFY_IMAGE_LINK,
  OICR_LINK,
} from 'constants/external-links';
import './styles.scss';
import logo from './logo.svg';
import { GETTING_STARTED_PATH } from '../../../constants/pages';

const links = [
  {
    name: 'Products',
    url: PRODUCTS_PATH,
    icon: null,
    newTab: true,
    className: '',
    key: 1,
  },
  {
    name: 'About Us',
    url: ABOUT_US_PATH,
    icon: null,
    newTab: false,
    className: '',
    key: 3,
  },
  {
    name: 'Acknowledgements',
    url: ACKNOWLEDGEMENTS_PATH,
    icon: null,
    newTab: false,
    className: '',
    key: 4,
  },
  {
    name: 'Services',
    url: SERVICES_PATH,
    icon: null,
    newTab: false,
    className: '',
    key: 5,
  },
  {
    name: 'Case Studies',
    url: CASE_STUDIES_PATH,
    icon: null,
    newTab: false,
    className: '',
    key: 6,
  },
];

const FooterLinks = () => {
  return (
    <div className="links-container">
      {links.map((link, index) => (
        <Link className="links-container__link" to={link.url} key={index}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="Footer site-wrapper__footer">
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
