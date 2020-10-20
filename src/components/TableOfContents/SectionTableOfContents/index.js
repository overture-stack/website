import React from 'react';
import { Link } from 'gatsby';
import './styles.scss';

export default function SectionTableOfContents({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.title}>
          {item.url ? (
            <Link to={`/documentation/${item.url}`}>{item.title}</Link>
          ) : (
            <span>{item.title}</span>
          )}
          {item.items && <SectionTableOfContents items={item.items} />}
        </li>
      ))}
    </ul>
  );
}
