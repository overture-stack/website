/**
 * Misc typography batch.
 **/

import React from 'react';
import './styles.scss';

export const H1 = ({ className, children, style }) => (
  <h1 style={style} className={`${className ? className : ''} t-h1`}>
    {children}
  </h1>
);

export const H2 = ({ className, children, style }) => (
  <h2 style={style} className={`${className ? className : ''} t-h2`}>
    {children}
  </h2>
);

export const H3 = ({ className, children, style }) => (
  <h3 style={style} className={`${className ? className : ''} t-h4`}>
    {children}
  </h3>
);
