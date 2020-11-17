import React from 'react';
import { GoLink as LinkIcon } from 'react-icons/go';
import { HashLink } from 'components';

export default function AnchorHeading({ children, id, location, size: H, ...props }) {
  return (
    <H {...props} id={id}>
      {/* need ID for the table of contents sidebar in docs section*/}
      <HashLink to={`#${id}`} className="anchor before" location={location}>
        <LinkIcon size="16" />
      </HashLink>
      {children}
    </H>
  );
}
