import React from 'react';
import { useSSRWorkaround } from 'hooks';
import './styles.scss';

function RenderItems({ hash, items }) {
  return (
    <ol className="toc-headings__list">
      {items.map(item => {
        const linkActive = hash === item.url;
        const linkClassName = linkActive ? 'active' : '';
        return (
          <li key={item.url}>
            <a href={item.url} className={linkClassName}>
              <span>{item.title}</span>
            </a>
            {item.items && <RenderItems items={item.items} hash={hash} />}
          </li>
        );
      })}
    </ol>
  );
}

export default function HeadingsTableOfContents({ hash, items }) {
  const { key } = useSSRWorkaround();
  return (
    <div className="toc-headings" key={key}>
      <RenderItems hash={hash} items={items} />
    </div>
  );
}
