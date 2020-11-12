import React from 'react';
import { useSSRWorkaround } from 'hooks';
import './styles.scss';

export default function HeadingsTableOfContents({ hash, items }) {
  const { key } = useSSRWorkaround();
  return (
    <ol className="toc-headings" key={key}>
      {items.map(item => {
        const linkActive = hash === item.url;
        const linkClassName = linkActive ? 'active' : '';
        return (
          <li key={item.url}>
            <a href={item.url} className={linkClassName}>
              {item.title}
            </a>
            {item.items && <HeadingsTableOfContents items={item.items} hash={hash} />}
          </li>
        );
      })}
    </ol>
  );
}
