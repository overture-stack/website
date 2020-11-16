import React from 'react';
import { Link } from 'gatsby';
import { HashLink } from 'components';

// gatsby requires different treatment/elements for different link types.

// returns an anchor HTML element.

export default function DynamicLink({ href = '', to = '', ...props }) {
  const dest = to || href || '';

  return dest.charAt(0) === '#' ? (
    <HashLink {...props} to={dest} />
  ) : dest.charAt(0) === '/' ? (
    <Link {...props} to={dest} />
  ) : dest ? (
    <a {...props} target="_blank" />
  ) : (
    <a {...props} />
  );
}
