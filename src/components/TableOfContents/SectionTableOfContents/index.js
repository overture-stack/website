import React from 'react';
import TableOfContents from '../TableOfContents';
import './styles.scss';

export default function SectionTableOfContents({ items }) {
  return (
    <div className="toc-section">
      <TableOfContents items={items} type="section" />
    </div>
  );
}
