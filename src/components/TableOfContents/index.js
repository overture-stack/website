import React from 'react';

export default function TableOfContents({ items }) {
  return (
    <ol>
      {items.map(item => (
        <li key={item.url}>
          <a href={item.url}>{item.title}</a>
          {item.items && <TableOfContents items={item.items} />}
        </li>
      ))}
    </ol>
  );
}
