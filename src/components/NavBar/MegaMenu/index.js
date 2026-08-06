/**
 * Component: Display the Megamenu on mouse over / tap.
 */
import React from 'react';
import { Badge, ComingSoonBadge, Icon, LinkHelper as Link } from 'components';
import {
  ADMINISTRATION_GUIDES,
  API_REFERENCE_GUIDE,
  ARRANGER_DOCS_LINK,
  DEPLOYMENT_GUIDES,
  DOWNLOAD_GUIDES,
  LECTERN_DOCS_LINK,
  LYRIC_DOCS_LINK,
  MAESTRO_DOCS_LINK,
  PRELUDE_DOCS_LINK,
  SCORE_DOCS_LINK,
  SONG_DOCS_LINK,
  STAGE_DOCS_LINK,
  SUBMISSION_GUIDES,
} from 'constants/external-links';
import './styles.scss';

const ENABLE_DRAFTS = process.env.GATSBY_ENABLE_DRAFTS === 'true';

const verticalMobileMenuSections = ['Deploy', 'Use'];

const data = {
  documentation: {
    explore: {
      title: 'Explore our documentation',
      text: 'Reference for building on Overture, guides for deploying a platform, and walkthroughs for using one.',
      link: {
        to: '/getting-started/',
        text: 'Get Started',
      },
    },
    // These sections mirror the audience journeys docs.overture.bio is
    // organized into, so the vocabulary a visitor reads here is the vocabulary
    // they meet on arrival.
    sections: [
      {
        title: 'Develop',
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
          {
            to: LECTERN_DOCS_LINK,
            text: 'Lectern',
          },
          {
            to: LYRIC_DOCS_LINK,
            text: 'Lyric',
          },
          {
            to: API_REFERENCE_GUIDE,
            text: 'API reference',
          },
        ],
      },
      {
        title: 'Deploy',
        color: 'yellow-green',
        links: [
          {
            to: DEPLOYMENT_GUIDES,
            text: 'Deployment guides',
          },
          {
            to: PRELUDE_DOCS_LINK,
            text: 'Prelude',
          },
        ],
      },
      {
        title: 'Use',
        color: 'dark-blue',
        links: [
          {
            to: SUBMISSION_GUIDES,
            text: 'Submitting data',
          },
          {
            to: DOWNLOAD_GUIDES,
            text: 'Downloading data',
          },
          {
            to: ADMINISTRATION_GUIDES,
            text: 'Administration',
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
