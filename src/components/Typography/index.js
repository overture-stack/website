/**
 * Misc typography batch.
 **/

import React from 'react'
import './styles.scss'


export const H1 = ({ className, children }) => (
  <h1 className={`${className ? className : ''} t-h1`}>{children}</h1>
)

export const H2 = ({ className, children }) => (
  <h2 className={`${className ? className : ''} t-h2`}>{children}</h2>
)

export const H4 = ({ className, children }) => (
  <h4 className={`${className ? className : ''} t-h4`}>{children}</h4>
)
