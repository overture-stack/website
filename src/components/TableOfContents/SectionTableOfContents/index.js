import React from 'react';
import './styles.scss';

export default function SectionTableOfContents({ items }) {
  return (
    <ol>
      {items.map(item => (
        <li key={item.url}>
          <a href={item.url}>{item.title}</a>
          {item.items && <SectionTableOfContents items={item.items} />}
        </li>
      ))}
    </ol>
  );
}
