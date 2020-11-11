import React from 'react';
import TableOfContents from '../TableOfContents';
import './styles.scss';

export default function SectionTableOfContents({ items, path }) {
  return (
    <div className="toc-section">
      <TableOfContents items={items} path={path} type="section" />
    </div>
  );
}
