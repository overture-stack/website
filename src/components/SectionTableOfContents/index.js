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

const RenderItems = ({ isMenuActive = false, pages, path }) => (
  <ol className={isMenuActive ? 'menu-active' : ''}>
    {pages.map(page => {
      const url = makeUrl(page.url);
      const { isHeading = false, pages, title } = page;
      const isLinkActive = path === url;
      const isNextMenuActive = pages && path !== url && path.includes(url);
      const className = `${isLinkActive ? 'link-active' : ''} ${
        isNextMenuActive ? 'menu-active__heading' : ''
      }`;
      return (
        <li key={url}>
          {pages ? (
            <button className={className} onClick={() => isHeading || navigate(url)}>
              <span>{title}</span>
            </button>
          ) : (
            <Link className={className} to={url}>
              <span>{title}</span>
            </Link>
          )}
          {pages && <RenderItems isMenuActive={isNextMenuActive} pages={pages} path={path} />}
        </li>
      );
    })}
  </ol>
);

export default function SectionTableOfContents({ pages, path }) {
  return (
    <div className="test-toc">
      <RenderItems pages={pages} path={path} />
    </div>
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
