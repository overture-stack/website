import React, { useState } from 'react';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';
import { useSSRWorkaround } from 'hooks';
import { Icon } from 'components';
import './styles.scss';

// first level: buttons + dropdowns
// subsequent levels: <Link> tags + dropdowns

// flatten to find partial match??

// if page has pages then make it a button
// if !isHeading then navigate with reach/router

const makeUrl = url => `/documentation/${url}/`;

export default function SectionTableOfContents({ pages, path }) {
  return (
    <ol className="test-toc">
      {pages.map(page => {
        const url = makeUrl(page.url);
        const { isHeading = false, pages, title } = page;
        const isLinkActive = path === url;
        const isMenuActive = pages && path !== url && path.includes(url);
        const className = `${isLinkActive ? 'link-active' : ''} ${
          isMenuActive ? 'menu-active' : ''
        }`;
        return (
          <li key={url}>
            {pages ? (
              <button className={className} onClick={() => isHeading || navigate(url)}>
                {title}
              </button>
            ) : (
              <Link className={className} to={url}>
                {title}
              </Link>
            )}
            {pages && <SectionTableOfContents pages={pages} path={path} />}
          </li>
        );
      })}
    </ol>
  );
}

{
  /* export default function SectionTableOfContents({ pages, path, isSubmenu = false, sectionSlug }) {
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
} */
}
