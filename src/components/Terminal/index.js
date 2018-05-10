/**
 * Component for displaying a terminal + text
 **/

import React from 'react'
import './styles.scss'

const Terminal = ({ prompts }) => (
  <div className="Terminal">
    <div className="circle-container">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
    <div className="Terminal-inner">
      {prompts.map(p => (
        <div key={p} className="Terminal-text">
          <span className="pr2">$</span>
          {p}
        </div>
      ))}
    </div>
  </div>
)

export default Terminal
