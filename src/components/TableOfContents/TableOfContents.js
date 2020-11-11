import React from 'react';
import { Link } from 'gatsby';

export default function TableOfContents({ type, items }) {
  return (
    <ol>
      {items.map(item => (
        <li key={item.title}>
          {item.url ? (
            <Link to={`${type === 'headings' ? '' : '/documentation/'}${item.url}`}>
              {item.title}
            </Link>
          ) : (
            <span>{item.title}</span>
          )}
          {item.items && <TableOfContents items={item.items} type={type} />}
        </li>
      ))}
    </ol>
  );
}
