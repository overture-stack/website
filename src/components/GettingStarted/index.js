/**
 * getting started + documentation header.
 **/

import React from 'react';
import { H2, LinkHelper as Link } from 'components';
import './styles.scss';

const GettingStarted = ({ pinnedLink, children }) => (
  <div className="pt1">
    <section className="GettingStarted container py1">
      <div className="columns column flex-column">
        <div className="header-wrap">
          <div className="center">
            <H2 className="header-offset">Getting Started</H2>
          </div>
          {pinnedLink ? (
            <Link className="button is-medium is-primary pinned-link" to={pinnedLink}>
              Documentation
            </Link>
          ) : (
            <div />
          )}
        </div>

        {children}
      </div>
    </section>
  </div>
);

export default GettingStarted;
