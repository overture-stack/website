/**
 * Component: Display the Product Sub-Menu on mouse over / tap.
 */
import React from 'react';
import Link from 'gatsby-link';
import { Icon, IconCommon, Badge } from 'components';
import './styles.scss';

const ProductsPopup = ({ closeMenus, className }) => {
  return (
    <div className={`ProductsPopup ${className}`}>
      <div className={`menu-items ${className}`}>
        {/* section: Text overview - Desktop only */}
        <section className="menu-section explore-text">
          <div className="heading-text">Explore our products</div>
          <div className="body-text">
            <div>
              Overture is a collection of open-source products for big-data genomic science.
            </div>
          </div>

          <div className="all-products-link">
            <Link to="/products">
              All products <Icon size={12} img="arrowRightMagenta" />{' '}
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

export default ProductsPopup;
