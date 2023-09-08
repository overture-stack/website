/**
 * Component: Display the Megamenu on mouse over / tap.
 */
import React from 'react';
import { Badge, ComingSoonBadge, Icon, LinkHelper as Link } from 'components';
import './styles.scss';

const ENABLE_DRAFTS = process.env.GATSBY_ENABLE_DRAFTS === 'true';

const verticalMobileMenuSections = ['DMS Bundle'];

const data = {
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
          {
            to: 'documentation/song',
            text: 'Song',
          },
          {
            to: 'documentation/score',
            text: 'Score',
          },

          {
            to: 'documentation/maestro',
            text: 'Maestro',
          },
          {
            to: 'documentation/arranger',
            text: 'Arranger',
          },

          {
            to: 'documentation/ego',
            text: 'Ego',
          },
          {
            to: 'documentation/dms',
            text: 'DMS-UI',
          },
        ],
      },
      {
        title: 'dms bundle',
        color: 'yellow-green',
        links: [
          {
            to: '/documentation/dms/',
            text: 'Introduction',
          },
          {
            to: '/documentation/dms/installation/installation',
            text: 'How to Install',
          },

          {
            to: '/documentation/dms/admin-guide/',
            text: 'For Administrators',
          },
          {
            to: '/documentation/dms/user-guide/',
            text: 'For Users',
          },
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
        <section className="menu-section-left explore-text">
          <div className="heading-text">{explore.title}</div>
          <div className="body-text">
            <div>{explore.text}</div>
          </div>

          <div className="documentation-link">
            <Link to={explore.link.to} onClick={() => closeMenus()}>
              {explore.link.text}
              {/* <Icon size={12} img="arrowRightMagenta" /> */}
            </Link>
          </div>
        </section>

        {sections.map((section) => (
          <section className="menu-section-right" key={section.title}>
            <div className="menu-section-heading">
              <Badge color={section.color}>{section.title}</Badge>
            </div>
            <div className={`menu-select-container ${section.color}-section`}>
              {section.links.map((link) => (
                <ul
                  className={`menu-section-links ${
                    verticalMobileMenuSections.includes(section.title) ? 'vertical' : ''
                  }`}
                >
                  <li key={link.text}>{MenuItem(link)}</li>
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
