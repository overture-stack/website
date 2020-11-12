import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useSSRWorkaround } from 'hooks';
import './styles.scss';
import { Icon } from 'components/Icon';

export default function SectionTableOfContents({ items, path }) {
  const { key } = useSSRWorkaround();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ol className="toc-section" key={key}>
      {items.map(item => {
        const linkTo = `/documentation/${item.url}/`;
        const linkActive = path === linkTo;
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
            {item.items && isOpen && <SectionTableOfContents items={item.items} path={path} />}
          </li>
        );
      })}
    </ol>
  );
}
