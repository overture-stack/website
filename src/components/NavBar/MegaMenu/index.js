/**
 * Component: Display the Product Sub-Menu on mouse over / tap.
 */
import React from 'react';
import Link from 'gatsby-link';
import { Icon, IconCommon, Badge } from '../../index.js';
import './styles.scss';

const data = {
  products: {
    explore: {
      title: 'Explore our products',
      text:
        'Overture is a collection of open-source products for big-data genomic science.',
      link: {
        to: '/products',
        text: 'All products',
      },
    },
    sections: [
      {
        title: 'Generate & Upload',
        color: 'pink',
        hasCoreIcon: true,
        links: [
          { to: '/products/song', text: 'Song' },
          { to: '/products/score', text: 'Score' },
        ],
      },
      {
        title: 'Access & Download',
        color: 'blue',
        hasCoreIcon: true,
        links: [
          { to: '/products/ego', text: 'Ego' },
          { to: '/products/maestro', text: 'Maestro' },
          { to: '/products/arranger', text: 'Arranger' },
        ],
      },
      {
        title: 'Analyze & Discover',
        color: 'red',
        links: [
          { to: '/products/jukebox', text: 'Jukebox' },
          { to: '/products/oncojs', text: 'OncoJS' },
        ],
      },
      {
        title: 'Collaborate & Share',
        color: 'light-green',
        links: [
          { to: '/products/persona', text: 'Persona' },
          { to: '/products/riff', text: 'Riff' },
        ],
      },
      {
        title: 'Track & Manage',
        color: 'yellow',
        links: [
          {
            to: 'https://github.com/overture-stack/billing',
            text: 'Billing & Usage',
            hasGithubIcon: true,
          },
          {
            to: 'https://github.com/overture-stack/enrolment',
            text: 'Enrolment',
            hasGithubIcon: true,
          },
        ],
      },
    ],
  },
  docs: {
    explore: {
      title: 'Explore our documentation',
      text:
        'Learn how to install the Data Management System (DMS) or individual products using our easy-to-use guides.',
      link: {
        to: '/documentation',
        text: 'Documentation Overview',
      },
    },
    sections: [
      {
        title: 'DMS Bundle',
        color: 'dark-blue',
        links: [
          {
            to: '/documentation',
            text: 'Introduction',
          },
          {
            to: '/documentation',
            text: 'How to Install',
          },
          {
            to: '/documentation',
            text: 'For Administrators',
          },
        ],
      },
      {
        title: 'Generate & Upload',
        color: 'pink',
        links: [
          {
            to: '/documentation',
            text: 'Score',
          },
          {
            to: '/documentation',
            text: 'Song',
          },
        ],
      },
      {
        title: 'Access & Download',
        color: 'blue',
        links: [
          {
            to: '/documentation',
            text: 'Ego',
          },
          {
            to: '/documentation',
            text: 'Maestro',
          },
          {
            to: '/documentation',
            text: 'Arranger',
          },
        ],
      },
      {
        title: 'Analyze & Discover',
        color: 'red',
        links: [
          {
            to: '/documentation',
            text: 'Jukebox',
          },
          {
            to: '/documentation',
            text: 'OncoJs',
          },
        ],
      },
      {
        title: 'Collaborate & Share',
        color: 'light-green',
        links: [
          {
            to: '/documentation',
            text: 'Persona',
          },
          {
            to: '/documentation',
            text: 'Riff',
          },
        ],
      },
    ],
  },
};

const MegaMenu = ({ className, megaMenuType }) => {
  if (!megaMenuType) {
    return <div className={`MegaMenu ${className}`} />;
  }
  const { explore, sections } = data[megaMenuType];
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
            <Link to={explore.link.to}>
              {explore.link.text} <Icon size={12} img="arrowRightMagenta" />
            </Link>
          </div>
        </section>

        {sections.map((section) => (
          <section className="menu-section">
            <div className="menu-section-heading">
              {megaMenuType === 'products' &&
                (section.hasCoreIcon ? (
                  <IconCommon.Core />
                ) : (
                  <span className="core-placeholder">&nbsp;</span>
                ))}
              <Badge color={section.color}>{section.title}</Badge>
            </div>
            <ul className="menu-section-links">
              {section.links.map((link) => (
                <li>
                  {link.to.charAt(0) === '/' ? (
                    <Link className="menu-section-link" to={link.to}>
                      {link.text}
                    </Link>
                  ) : (
                    <a
                      className="menu-section-link"
                      href={link.to}
                      target="_blank"
                    >
                      {link.text}
                      {link.hasGithubIcon && (
                        <Icon className="pl1" img="githubGrey" />
                      )}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
