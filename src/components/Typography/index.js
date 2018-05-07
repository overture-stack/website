/**
 * Misc typography batch.
 **/

import React from 'react'
import './styles.scss'

export const H2 = ({ className, children }) => (
  <h2 className={`${className ? className : ''} t-h2`}>{children}</h2>
)

export const H4 = ({ className, children }) => (
  <h4 className={`${className ? className : ''} t-h4`}>{children}</h4>
)
