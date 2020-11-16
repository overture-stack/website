import React from 'react';
import { Link } from 'gatsby';
import { HashLink } from 'components';

// gatsby requires different treatment/elements for different link types

// returns an anchor HTML element.

export default function DynamicLink({ href = '', to = '', ...props }) {
  const dest = to || href || '';
  const linkType =
    dest.charAt(0) === '#'
      ? 'hash'
      : dest.charAt(0) === '/'
      ? 'internal'
      : dest
      ? 'external'
      : 'other';

  if (linkType === 'hash') {
    return <HashLink {...props} to={dest} />;
  }

  if (linkType === 'internal') {
    return <Link {...props} to={dest} />;
  }

  if (linkType === 'external') {
    return <a {...props} target="_blank" />;
  }

  if (linkType === 'other') {
    // could be <a name="something" /> for example
    return <a {...props} />;
  }
}
