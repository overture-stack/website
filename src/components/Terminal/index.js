/**
 * Component for displaying a terminal + text
 **/

import React from 'react'
import './styles.scss'

const Terminal = ({ prompts }) => (
  <div className="Terminal">
    <div className="Terminal-inner">
      {prompts.map(p => (
        <div className="Terminal-text">
          <span className="pr2">$</span>
          {p}
        </div>
      ))}
    </div>
  </div>
)

export default Terminal
