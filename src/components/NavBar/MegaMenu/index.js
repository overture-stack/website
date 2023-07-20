/**
 * Component: Display the Megamenu on mouse over / tap.
 */
import React from 'react';
import productsDict from 'constants/products';
import { PRODUCTS_PATH } from 'constants/pages';
import { Badge, ComingSoonBadge, Icon, IconCommon, LinkHelper as Link } from 'components';
import './styles.scss';

const ENABLE_DRAFTS = process.env.GATSBY_ENABLE_DRAFTS === 'true';

const verticalMobileMenuSections = ['DMS Bundle'];

const data = {
  products: {
    explore: {
      title: 'Explore our products',
      text: 'Overture is a collection of open-source products for big-data genomic science.',
      link: {
        to: PRODUCTS_PATH,
        text: 'All products',
      },
    },
    sections: [
      {
        title: 'Generate & Upload',
        color: 'pink',
        hasCoreIcon: true,
        links: [
          { to: productsDict.song.productsPath, text: 'Song' },
          { to: productsDict.score.productsPath, text: 'Score' },
        ],
      },
      {
        title: 'Access & Download',
        color: 'blue',
        hasCoreIcon: true,
        links: [
          { to: productsDict.ego.productsPath, text: 'Ego' },
          { to: productsDict.maestro.productsPath, text: 'Maestro' },
          { to: productsDict.arranger.productsPath, text: 'Arranger' },
        ],
      },
      {
        title: 'Analyze & Discover',
        color: 'red',
        links: [
          { to: productsDict.jukebox.productsPath, text: 'Jukebox' },
          { to: productsDict.oncojs.productsPath, text: 'OncoJS' },
        ],
      },
      {
        title: 'Collaborate & Share',
        color: 'light-green',
        links: [
          { to: productsDict.persona.productsPath, text: 'Persona' },
          { to: productsDict.riff.productsPath, text: 'Riff' },
        ],
      },
      {
        title: 'Track & Manage',
        color: 'yellow',
        links: [
          {
            to: productsDict.billing.githubUrl,
            text: 'Billing & Usage',
            hasGithubIcon: true,
          },
          {
            to: productsDict.enrolment.githubUrl,
            text: 'Enrolment',
            hasGithubIcon: true,
          },
        ],
      },
    ],
  },
  documentation: {
    explore: {
      title: 'Explore our documentation',
      text: 'Learn how to install the Data Management System (DMS) or individual products using our easy-to-use guides.',
      link: {
        to: '/documentation/',
        text: 'Documentation Overview',
      },
    },
    sections: [
      {
        title: 'Products',
        color: 'dark-blue',
        links: [
          [
            {
              to: 'documentation/song',
              text: 'Song',
            },
            {
              to: 'documentation/score',
              text: 'Score',
            },
          ],
          [
            {
              to: 'documentation/maestro',
              text: 'Maestro',
            },
            {
              to: 'documentation/arranger',
              text: 'Arranger',
            },
          ],
          [
            {
              to: 'documentation/ego',
              text: 'Ego',
            },
            {
              to: 'documentation/dms',
              text: 'DMS-UI',
            },
          ],
        ],
      },
      {
        title: 'dms bundle',
        color: 'yellow-green',
        links: [
          [
            {
              to: '/documentation/dms/',
              text: 'Introduction',
            },
            {
              to: '/documentation/dms/installation/installation',
              text: 'How to Install',
            },
          ],
          [
            {
              to: '/documentation/dms/admin-guide/',
              text: 'For Administrators',
            },
            {
              to: '/documentation/dms/user-guide/',
              text: 'For Users',
            },
          ],
        ],
      },
    ],
  },
};

const MegaMenu = ({ className, closeMenus, megaMenuType, path }) => {
  if (!megaMenuType) {
    // leave an empty element to help with CSS animations
    return <div className={`MegaMenu ${className}`} />;
  }
  const { explore, sections } = data[megaMenuType];

  const MenuItem = (link) =>
    link.comingSoon && !ENABLE_DRAFTS ? (
      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {link.text} <ComingSoonBadge />
      </span>
    ) : (
      <Link
        className={`menu-section-link ${path.startsWith(link.to) ? 'active' : ''}`}
        onClick={() => closeMenus()}
        to={link.to}
      >
        {link.text}
      </Link>
    );

  return (
    <div className={`MegaMenu ${className}`}>
      <div className={`menu-items ${className}`}>
        {/* section: Text overview - Desktop only */}
        <section className="menu-section explore-text">
          <div className="heading-text">{explore.title}</div>
          <div className="body-text">
            <div>{explore.text}</div>
          </div>

          <div className="chevron-link">
            <Link to={explore.link.to} onClick={() => closeMenus()}>
              {explore.link.text} <Icon size={12} img="arrowRightMagenta" />
            </Link>
          </div>
        </section>

        {sections.map((section) => (
          <section className="menu-section" key={section.title}>
            <div className="menu-section-heading">
              {/* {megaMenuType === 'products' &&
                (section.hasCoreIcon ? (
                  <IconCommon.Core />
                ) : (
                  <span className="core-placeholder">&nbsp;</span>
                ))} */}
              <Badge color={section.color}>{section.title}</Badge>
            </div>
            <div className="menu-select-container">
              {section.links.map((link) => (
                <ul
                  className={`menu-section-links ${
                    verticalMobileMenuSections.includes(section.title) ? 'vertical' : ''
                  }`}
                >
                  <li key={link[0].text}>{MenuItem(link[0])}</li>
                  <li key={link[1].text}>{MenuItem(link[1])}</li>
                </ul>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
