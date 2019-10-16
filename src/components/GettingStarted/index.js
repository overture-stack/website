/**
 * getting started + documentation header.
 **/

import React from 'react'
import './styles.scss'
import { H2 } from '../Typography/index'

const GettingStarted = ({ pinnedLink, children }) => (
  <div className="pt1">
    <section className="GettingStarted container py1">
      <div className="columns column flex-column">
        <div className="header-wrap">
          <div className="center">
            <H2 className="header-offset">Getting Started</H2>
          </div>
          {pinnedLink ? (
            <a
              target="_blank"
              className="button is-medium is-primary pinned-link"
              href={pinnedLink}
            >
              Documentation
            </a>
          ) : (
            <div />
          )}
        </div>

        {children}
      </div>
    </section>
  </div>
)

export default GettingStarted
