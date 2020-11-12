import React from 'react';
import { GoLink as LinkIcon } from 'react-icons/go';

export default function AnchorHeading({ children, id, size: H, ...props }) {
  return (
    <H {...props}>
      <a id={id} href={`#${id}`} className="anchor before">
        <LinkIcon size="16" />
      </a>
      {children}
    </H>
  );
}
