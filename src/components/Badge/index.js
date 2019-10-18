import React from 'react'
import './styles.scss'

const Badge = ({ children, className, style, color, link }) => {
  if (link) {
    return (
      <a href={link}>
        <div
          className={`Badge ${className ? className : ''} ${color}`}
          style={style}
        >
          {children}
        </div>
      </a>
    )
  } else {
    return (
      <div
        className={`Badge ${className ? className : ''} ${color}`}
        style={style}
      >
        {children}
      </div>
    )
  }
}

export default Badge
