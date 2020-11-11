import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useSSRWorkaround } from 'hooks';
import './styles.scss';
import { Icon } from 'components/Icon';

export default function TableOfContents({ items, path, type }) {
  const { key } = useSSRWorkaround();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ol className="toc" key={key}>
      {items.map(item => {
        const linkTo = `${type === 'headings' ? '' : '/documentation/'}${item.url}/`;
        const linkActive = path === item.url;
        const linkClassName = linkActive ? 'active' : '';
        return (
          <li key={item.title}>
            {item.url ? (
              <Link to={linkTo} activeClassName="active" className={linkClassName}>
                <span>
                  {item.items && (
                    <Icon
                      img="chevronSmall"
                      size={7}
                      style={{
                        ...(isOpen ? { transform: 'rotate(90deg)' } : {}),
                      }}
                    />
                  )}
                  {item.title}
                </span>
              </Link>
            ) : (
              <button type="button" onClick={() => setIsOpen(!isOpen)}>
                <span>
                  {item.items && (
                    <Icon
                      img="chevronSmall"
                      size={7}
                      style={{
                        ...(isOpen ? { transform: 'rotate(90deg)' } : {}),
                      }}
                    />
                  )}
                  {item.title}
                </span>
              </button>
            )}
            {item.items && isOpen && <TableOfContents items={item.items} type={type} />}
          </li>
        );
      })}
    </ol>
  );
}
