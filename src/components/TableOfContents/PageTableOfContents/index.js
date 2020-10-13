import React from 'react';
import './styles.scss';

export default function PageTableOfContents({ items }) {
  return (
    <ol>
      {items.map(item => (
        <li key={item.url}>
          <a href={item.url}>{item.title}</a>
          {item.items && <PageTableOfContents items={item.items} />}
        </li>
      ))}
    </ol>
  );
}
