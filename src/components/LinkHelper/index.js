import React from 'react';
import { Link } from 'gatsby';
import { HashLink } from 'components';

export default function LinkHelper({ href = '', location = {}, to = '', ...props }) {
  const dest = to || href || '';

  return dest.charAt(0) === '#' ? (
    // scroll-to-anchor link
    <HashLink {...props} location={location} to={dest} />
  ) : dest.charAt(0) === '/' || dest.charAt(0) === '.' ? (
    // internal link
    <Link {...props} to={dest} />
  ) : dest ? (
    // external link
    <a {...props} href={dest} target="_blank" />
  ) : (
    // probably <a name="string" />
    <a {...props} />
  );
}
