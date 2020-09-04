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
    columns: [
      {
        title: 'DMS Bundle',
        color: 'blue-dark',
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
        color: 'blue-light',
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
        color: 'green',
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
  const { explore } = data[megaMenuType];
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
              {explore.link.text} <Icon size={12} img="arrowRightMagenta" />{' '}
            </Link>
          </div>
        </section>

        {/* section: Generate & Upload */}
        <section className="menu-section">
          <div className="menu-section-heading">
            <IconCommon.Core />
            <Badge color="pink">Generate & Upload</Badge>
          </div>
          <div className="menu-section-links">
            <Link className="menu-section-link" to="/products/song">
              Song
            </Link>
            <Link className="menu-section-link" to="/products/score">
              Score
            </Link>
          </div>
        </section>

        {/* section: ACCESS & DOWNLOAD */}

        <section className="menu-section">
          <div className="menu-section-heading">
            <IconCommon.Core />
            <Badge color="blue">Access & Download</Badge>
          </div>
          <div className="menu-section-links">
            <Link className="menu-section-link" to="/products/ego">
              {' '}
              Ego{' '}
            </Link>

            <Link className="menu-section-link" to="/products/maestro">
              Maestro
            </Link>

            <Link className="menu-section-link" to="/products/arranger">
              Arranger
            </Link>
          </div>
        </section>

        {/* section: DISCOVERY */}

        <section className="menu-section">
          <div className="menu-section-heading">
            <span className="core-placeholder">&nbsp;</span>
            <Badge color="red">Analyze & Discover</Badge>
          </div>

          <div className="menu-section-links">
            <Link className="menu-section-link" to="/products/jukebox">
              Jukebox
            </Link>

            <Link className="menu-section-link" to="/products/oncojs/">
              OncoJS
            </Link>
          </div>
        </section>

        {/* section: DISCOVERY */}

        <section className="menu-section">
          <div className="menu-section-heading">
            <span className="core-placeholder">&nbsp;</span>
            <Badge color="light-green">Collaborate & Share</Badge>
          </div>
          <div className="menu-section-links">
            <Link className="menu-section-link" to="/products/persona">
              Persona
            </Link>
            <Link className="menu-section-link" to="/products/riff">
              Riff
            </Link>
          </div>
        </section>

        {/* section: MANAGEMENT */}

        <section className="menu-section" style={{ flexShrink: 0 }}>
          <div className="menu-section-heading">
            <span className="core-placeholder">&nbsp;</span>
            <Badge color="yellow">Track & Manage</Badge>
          </div>
          <div className="menu-section-links">
            <a
              href="https://github.com/overture-stack/billing"
              className="menu-section-link"
              target="_blank"
            >
              Billing & Usage
              <Icon className="pl1" img="githubGrey" />
            </a>
            <a
              className="menu-section-link"
              href="https://github.com/overture-stack/enrolment"
              target="_blank"
            >
              Enrolment
              <Icon className="pl1" img="githubGrey" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MegaMenu;
