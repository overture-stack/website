import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useSSRWorkaround } from 'hooks';
import { Icon } from 'components';
import './styles.scss';

// first level: buttons + dropdowns
// subsequent levels: <Link> tags + dropdowns

// flatten to find partial match??

export default function SectionTableOfContents({ items, path, isSubmenu = false, sectionSlug }) {
  const { key } = useSSRWorkaround();
  const [isOpen, setIsOpen] = useState(false);
  const sectionPath = `/documentation/${sectionSlug}/`;
  return (
    <ol className="toc-section" key={key}>
      {items.map(item => {
        const linkTo = `/documentation/${item.url}/`;
        const linkActive = linkTo === path;
        const menuActive = item.items && linkTo !== sectionPath && path.startsWith(linkTo);
        const linkClassName = linkActive ? 'active' : '';
        const menuClassName = menuActive ? 'active' : '';
        console.log(item.title, menuActive);
        return (
          <li key={item.title}>
            {!isSubmenu && item.items ? (
              <button className={menuClassName} type="button" onClick={() => setIsOpen(!isOpen)}>
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
            ) : (
              <Link to={linkTo} className={linkClassName}>
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
            )}
            {item.items && isOpen && (
              <SectionTableOfContents isSubmenu={true} items={item.items} path={path} />
            )}
          </li>
        );
      })}
    </ol>
  );
}
