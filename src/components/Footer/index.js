/**
 * Declarative footer. Loops over links object and spit out routes.
 */
import React from 'react';
import { Icon, LinkHelper as Link } from 'components';
import productsDict from 'constants/products';
import {
  ABOUT_US_PATH,
  ACKNOWLEDGEMENTS_PATH,
  CASE_STUDIES_PATH,
  CONTACT_US_PATH,
  DOCUMENTATION_PATH,
  PRIVACY_PATH,
  PRODUCTS_PATH,
  TERMS_PATH,
} from 'constants/pages';
import {
  NETLIFY_LINK,
  NETLIFY_IMAGE_LINK,
  OICR_LINK,
  SLACK_LINK,
  TEAM_BLOG_LINK,
} from 'constants/external-links';
import './styles.scss';
import logo from './logo.svg';

const column = [
  [
    {
      name: 'Products',
      link: PRODUCTS_PATH,
      icon: null,
      newTab: true,
      className: '',
    },
    {
      name: 'Documentation',
      link: DOCUMENTATION_PATH,
      icon: null,
      newTab: false,
      className: '',
    },
  ],
  [
    {
      name: 'About Us',
      link: ABOUT_US_PATH,
      icon: null,
      newTab: false,
      className: '',
    },
    {
      name: 'Acknowledgements',
      link: ACKNOWLEDGEMENTS_PATH,
      icon: null,
      newTab: false,
      className: '',
    },
  ],
  [
    {
      name: 'Team Blog',
      link: TEAM_BLOG_LINK,
      icon: null,
      newTab: true,
      className: '',
    },
    {
      name: 'Case Studies',
      link: CASE_STUDIES_PATH,
      icon: null,
      newTab: false,
      className: '',
    },
  ],
  [
    {
      name: 'Contact Us',
      link: CONTACT_US_PATH,
      icon: null,
      newTab: false,
      className: '',
    },

    {
      name: 'Get Involved',
      link: SLACK_LINK,
      icon: null,
      newTab: true,
      className: '',
    },
  ],
];

const FooterColumns = () => {
  return (
    <div className="column-container flex-auto ">
      {column.map((item) => (
        <div className="column-container__group column ">
          <Link className="column-container__link mt1 mb1" to={item[0].link}>
            {item[0].name}
          </Link>
          <Link className="column-container__link mt1 mb1" to={item[1].link}>
            {item[1].name}
          </Link>
        </div>
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
        <FooterColumns />
      </div>
      <div className="bg-grey px1 footer-grey">
        <div className="footer-grey__text ">
          <div className="px1 copyright">© {new Date().getFullYear()} Overture.</div>
          <div className="px2 ">
            <Link to={PRIVACY_PATH}>Privacy</Link>
            <span>|</span>
            <Link to={TERMS_PATH}>Terms & Conditions</Link>
            <span>|</span>
            <Link to={ACKNOWLEDGEMENTS_PATH}>Acknowledgements</Link>
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
