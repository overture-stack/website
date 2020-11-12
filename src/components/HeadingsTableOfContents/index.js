import React from 'react';
import { useActiveId } from 'hooks';
import './styles.scss';

const getIds = items =>
  items.reduce(
    (acc, curr) => [
      ...acc,
      ...(curr.url ? [curr.url.slice(1)] : []),
      ...(curr.items ? getIds(curr.items) : []),
    ],
    []
  );

const RenderItems = ({ activeId, items }) => {
  return (
    <ol className="toc-headings__list">
      {items.map(item => {
        const linkActive = activeId === item.url.slice(1);
        const linkClassName = linkActive ? 'active' : '';
        return (
          <li key={item.url}>
            <a href={item.url} className={linkClassName}>
              <span>{item.title}</span>
            </a>
            {item.items && <RenderItems activeId={activeId} items={item.items} />}
          </li>
        );
      })}
    </ol>
  );
};

export default function HeadingsTableOfContents({ items }) {
  const idList = getIds(items);
  const activeId = useActiveId(idList);
  return (
    <div className="toc-headings">
      <RenderItems activeId={activeId} items={items} />
    </div>
  );
}
