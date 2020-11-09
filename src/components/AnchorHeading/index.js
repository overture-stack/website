import React from 'react';
import { GoLink as LinkIcon } from 'react-icons/go';
import { makeSlug } from 'utils';

export default function AnchorHeading({ children, size: H, ...props }) {
  const slug = makeSlug(children);
  return (
    <H {...props}>
      <a id={slug} href={`#${slug}`} className="anchor before">
        <LinkIcon size="16" />
      </a>
      {children}
    </H>
  );
}
