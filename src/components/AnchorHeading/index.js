import React from 'react';
import { Link } from 'gatsby';
import { GoLink as LinkIcon } from 'react-icons/go';
import { makeSlug } from 'utils';

export default function AnchorHeading({ children, size: H, ...props }) {
  const slug = makeSlug(children);
  return (
    <H {...props}>
      <Link id={slug} to={`#${slug}`}>
        <LinkIcon size="16" />
      </Link>
      {children}
    </H>
  );
}
