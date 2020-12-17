import React from 'react';
import { Link } from 'gatsby';
import { HashLink } from 'components';

export default function LinkHelper({ location = {}, to = '', ...props }) {
  return to.charAt(0) === '#' ? (
    // scroll-to-anchor link
    <HashLink {...props} location={location} to={to} />
  ) : to.charAt(0) === '/' || to.charAt(0) === '.' ? (
    // internal link
    <Link {...props} to={to} />
  ) : to ? (
    // external link
    <a {...props} href={to} target="_blank" />
  ) : (
    // probably <a name="string" />
    <a {...props} />
  );
}
