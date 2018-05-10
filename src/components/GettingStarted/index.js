/**
 * getting started + documentation header.
 **/

import React from 'react'
import './styles.scss'
import { H2 } from '../Typography/index'

const GettingStarted = ({ pinnedLink, children }) => (
  <section className="GettingStarted container py3">
    <div className="columns column flex-column">
      <div className="header-wrap">
        <div className="center">
          <H2 className="header-offset">Getting Started</H2>
        </div>
        <a className="pinned-link" href={pinnedLink}>
          Documentation >
        </a>
      </div>

      {children}
    </div>
  </section>
)

export default GettingStarted
