import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useSSRWorkaround } from 'hooks';
import { Icon } from 'components';
import './styles.scss';

// first level: buttons + dropdowns
// subsequent levels: <Link> tags + dropdowns

// flatten to find partial match??

export default function SectionTableOfContents({ pages, path, isSubmenu = false, sectionSlug }) {
  const { key } = useSSRWorkaround();
  const [isOpen, setIsOpen] = useState(false);
  const sectionPath = `/documentation/${sectionSlug}/`;
  return (
    <ol className="toc-section" key={key}>
      {pages.map(page => {
        const linkTo = `/documentation/${page.url}/`;
        const linkActive = linkTo === path;
        const menuActive = page.pages && linkTo !== sectionPath && path.startsWith(linkTo);
        const linkClassName = linkActive ? 'active' : '';
        const menuClassName = menuActive ? 'active' : '';
        console.log(page.title, menuActive);
        return (
          <li key={page.title}>
            {!isSubmenu && page.pages ? (
              <button className={menuClassName} type="button" onClick={() => setIsOpen(!isOpen)}>
                <span>
                  {page.pages && (
                    <Icon
                      img="chevronSmall"
                      size={7}
                      style={{
                        ...(isOpen ? { transform: 'rotate(90deg)' } : {}),
                      }}
                    />
                  )}
                  {page.title}
                </span>
              </button>
            ) : (
              <Link to={linkTo} className={linkClassName}>
                <span>
                  {page.pages && (
                    <Icon
                      img="chevronSmall"
                      size={7}
                      style={{
                        ...(isOpen ? { transform: 'rotate(90deg)' } : {}),
                      }}
                    />
                  )}
                  {page.title}
                </span>
              </Link>
            )}
            {page.pages && isOpen && (
              <SectionTableOfContents isSubmenu={true} pages={page.pages} path={path} />
            )}
          </li>
        );
      })}
    </ol>
  );
}
