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
      text: 'Learn how to install and use o individual products using our easy-to-use tutorials.',
      link: {
        to: '/documentation/',
        text: 'Documentation Overview',
      },
    },
    sections: [
      {
        title: 'User Docs',
        color: 'blue',
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
            to: 'documentation/dms-ui',
            text: 'DMS-UI',
          },
        ],
      },
      {
        title: 'Developer Docs',
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
            to: 'documentation/dms-ui',
            text: 'DMS-UI',
          },
        ],
      },
      {
        title: 'System Admin Docs',
        color: 'yellow',
        links: [
          {
            to: 'documentation/song',
            text: 'Deployment Procedures',
          },
          {
            to: 'documentation/score',
            text: 'Load Balancing & Scaling',
          },
          {
            to: 'documentation/ego',
            text: 'Monitoring & Logging',
          },
        ],
      },
    ],
  },
  tutorials: {
    explore: {
      title: 'Explore our tutorials and Tutorials',
      text: 'Covering a range of topics for data consumers, providers, and administrators, these step-by-step tutorials provide practical insight and hands-on experience.',
      link: {
        to: '/tutorials/',
        text: 'tutorials and Tutorials',
      },
    },
    sections: [
      {
        title: 'Data Consumers',
        color: 'blue',
        links: [
        ],
      },
      {
        title: 'Data Providers',
        color: 'dark-blue',
        links: [
   
        ],
      },
      {
        title: 'Data Administrators',
        color: 'yellow',
        links: [

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
              <Icon size={12} img="arrowRightMagenta" className="red-arrow" />
            </Link>
          </div>
        </section>

        {sections.map((section) => (
          <section className="menu-section-right" key={section.title}>
            <div className="menu-section-heading">
              <Badge color={section.color}>{section.title}</Badge>
            </div>

            <ul
              className={`menu-section-links ${section.color}-section ${
                verticalMobileMenuSections.includes(section.title) ? 'vertical' : ''
              }`}
            >
              {section.links.map((link) => (
                <li key={link.text}>{MenuItem(link)}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
