import React from 'react';
import { Link } from 'gatsby';
import './styles.scss';

export default function TableOfContents({ items }) {
  return (
    <ol>
      {items.map(item => (
        <li key={item.title}>
          {item.url ? (
            <Link to={`/documentation/${item.url}`}>{item.title}</Link>
          ) : (
            <span>{item.title}</span>
          )}
          {item.items && <TableOfContents items={item.items} />}
        </li>
      ))}
    </ol>
  );
}
