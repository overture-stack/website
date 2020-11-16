import React from 'react';
import { GoLink as LinkIcon } from 'react-icons/go';
import { HashLink } from 'components';

export default function AnchorHeading({ children, id, size: H, ...props }) {
  return (
    <H {...props}>
      {/* need ID for the table of contents sidebar */}
      <HashLink id={id} to={`#${id}`} className="anchor before">
        <LinkIcon size="16" />
      </HashLink>
      {children}
    </H>
  );
}
