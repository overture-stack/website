import React from 'react';
import { GoLink as LinkIcon } from 'react-icons/go';
import { HashLink } from 'components';

export default function AnchorHeading({ children, id, size: H, ...props }) {
  return (
    <H {...props} id={id}>
      {/* need ID for the table of contents sidebar in docs section*/}
      {/* styling is to offset scrolling */}
      <HashLink to={`#${id}`} className="anchor before">
        <LinkIcon size="16" />
      </HashLink>
      {children}
    </H>
  );
}
