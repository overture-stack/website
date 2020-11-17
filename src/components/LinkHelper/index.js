import React from 'react';
import { Link } from 'gatsby';
import { HashLink } from 'components';

// gatsby requires different treatment/elements for different link types.

export default function LinkHelper({ href = '', location = {}, to = '', ...props }) {
  const dest = to || href || '';

  const linkType =
    dest.charAt(0) === '#'
      ? 'hash'
      : dest.charAt(0) === '/' || dest.charAt(0) === '.'
      ? 'internal'
      : dest
      ? 'external'
      : 'other';

  // console.log(dest, linkType);

  return linkType === 'hash' ? (
    // scroll-to-anchor link
    <HashLink {...props} location={location} to={dest} />
  ) : linkType === 'internal' ? (
    // internal link
    <Link {...props} to={dest} />
  ) : linkType === 'external' ? (
    // external link
    <a {...props} href={dest} target="_blank" />
  ) : (
    // probably <a name="string" />
    <a {...props} />
  );
}
