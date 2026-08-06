/**
 * Component: Display the Megamenu on mouse over / tap.
 */
import React from 'react';
import { Badge, ComingSoonBadge, Icon, LinkHelper as Link } from 'components';
import {
  ADMINISTRATION_GUIDES,
  ARRANGER_DOCS_LINK,
  DEPLOYMENT_GUIDES,
  DOWNLOAD_GUIDES,
  MAESTRO_DOCS_LINK,
  SCORE_DOCS_LINK,
  SONG_DOCS_LINK,
  STAGE_DOCS_LINK,
  SUBMISSION_GUIDES,
} from 'constants/external-links';
import './styles.scss';

const ENABLE_DRAFTS = process.env.GATSBY_ENABLE_DRAFTS === 'true';

const verticalMobileMenuSections = ['Platform Guides'];

const data = {
  documentation: {
    explore: {
      title: 'Explore our documentation',
      text: 'Build, deploy, and discover with our documentation, guides and Quickstart resources.',
      link: {
        to: '/getting-started/',
        text: 'Get Started',
      },
    },
    sections: [
      {
        title: 'Platform Guides',
        color: 'yellow-green',
        links: [
          {
            to: DEPLOYMENT_GUIDES,
            text: 'Deployment',
          },
          {
            to: SUBMISSION_GUIDES,
            text: 'Submission',
          },
          {
            to: ADMINISTRATION_GUIDES,
            text: 'Administration',
          },
          {
            to: DOWNLOAD_GUIDES,
            text: 'Download',
          },
        ],
      },
      {
        title: 'Product Documentation',
        color: 'dark-blue',
        links: [
          {
            to: SONG_DOCS_LINK,
            text: 'Song',
          },
          {
            to: SCORE_DOCS_LINK,
            text: 'Score',
          },
          {
            to: MAESTRO_DOCS_LINK,
            text: 'Maestro',
          },
          {
            to: ARRANGER_DOCS_LINK,
            text: 'Arranger',
          },
          {
            to: STAGE_DOCS_LINK,
            text: 'Stage',
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
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {link.text} <ComingSoonBadge />
      </span>
    ) : (
      <Link
        className={`menu-section-link ${
          path.startsWith(link.to) ? 'active' : ''
        }`}
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
                verticalMobileMenuSections.includes(section.title)
                  ? 'vertical'
                  : ''
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
