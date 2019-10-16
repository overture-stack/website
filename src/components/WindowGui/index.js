import React from 'react'
import './styles.scss'

/**
 * Image frame that makes an image look like it's in a window gui.
 * Ie; adds traffic lights in the top corner and a grey border.
 *
 */
export default ({ children }) => (
  <div className="outer-wrapper">
    <section className="window-wrapper">
      <div className="Traffic-Lights">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
      <div className="window-wrapper">{children}</div>
    </section>
  </div>
)
