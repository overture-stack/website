/**
 * Component for displaying a terminal + text
 **/

import React from 'react'
import './styles.scss'

export const TrafficLights = ({style}) => (
  <div className="Traffic-Lights" style={style}>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
)


export const Terminal = ({ prompts }) => (
  <div className="Terminal">
    <TrafficLights/>
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


export const UrlBar = ({ prompts }) => (
  <div className="Browser">
    <TrafficLights/>
    <div className="url-bar mx2">
      {prompts.map(p => (
        <div key={p} className="url-text" dangerouslySetInnerHTML={{ __html: p }}>
        </div>
      ))}
    </div>
  </div>
)

export default Terminal
