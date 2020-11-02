import React from 'react';
import TableOfContents from '../TableOfContents';

export default function SectionTableOfContents({ items }) {
  return <TableOfContents items={items} type="section" />;
}
