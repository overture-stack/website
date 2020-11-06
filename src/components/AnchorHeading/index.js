import React from 'react';
import { Icon } from 'components';

export default function AnchorHeading({ children, priority }) {
  const CustomTag = `h${priority}`;

  return (
    <CustomTag>
      <a href="" className="anchor before">
        <Icon img="arrowRightMagenta" size={12} />
      </a>
      {children}
    </CustomTag>
  );
}
