import React from 'react';
import { useActiveId } from 'hooks';
import { LinkHelper as Link } from 'components';
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

const RenderItems = ({ activeId, items, location }) => (
  <ol className="toc-headings__list">
    {items.map(item => {
      const linkActive = activeId === item.url.slice(1);
      const linkClassName = linkActive ? 'active' : '';
      return (
        <li key={item.url}>
          <Link className={linkClassName} location={location} to={item.url}>
            <span>{item.title}</span>
          </Link>
          {item.items && <RenderItems activeId={activeId} items={item.items} location={location} />}
        </li>
      );
    })}
  </ol>
);

export default function HeadingsTableOfContents({ items, location }) {
  const idList = getIds(items);
  const activeId = useActiveId(idList);
  return (
    <div className="toc-headings">
      <RenderItems activeId={activeId} items={items} location={location} />
    </div>
  );
}
