import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useSSRWorkaround } from 'hooks';
import { Icon } from 'components';

const makeUrl = url => `/documentation/${url}/`;

const MenuItems = ({ pages = [], path }) => {
  if (!pages.length) return null;
  const [isOpen, setIsOpen] = useState(null);

  return (
    <ol>
      {pages.map(page => {
        const { isHeading, pages: subpages, title } = page;
        const url = makeUrl(page.url);
        const isLinkActive = path === url;
        const aClassName = isLinkActive ? 'link-active' : '';

        // submenus
        const isMenuActive = pages && path.includes(url);
        const isMenuOpenOnLoad = isOpen === null && isMenuActive;
        const isMenuOpen = isMenuOpenOnLoad || isOpen;

        const toggle = () => {
          setIsOpen(!isMenuOpen);
        };

        const liClassName = isMenuActive ? 'menu-active' : '';
        const iconImg = isMenuOpen ? 'chevronMagenta' : 'chevronGrey';
        const iconStyle = isMenuOpen ? { transform: 'rotate(90deg)' } : {};

        return (
          <li key={url} className={liClassName}>
            {isHeading && subpages && <h4>{title}</h4>}
            {!isHeading && !subpages && <Link to={url}>{title}</Link>}
            {!isHeading && subpages && (
              <React.Fragment>
                <Link to={url} style={{ display: 'inline-block' }}>
                  {title} {isLinkActive && 'active'}
                </Link>
                <button style={{ display: 'inline-block' }} onClick={toggle}>
                  <Icon img={iconImg} size={7} style={iconStyle} />
                </button>
              </React.Fragment>
            )}
            {subpages && (isHeading || isMenuOpen) && <MenuItems pages={subpages} path={path} />}
          </li>
        );
      })}
    </ol>
  );
};

export default function NewSidebar({ pages, path }) {
  const { key } = useSSRWorkaround();
  // useSSRWorkaround will force a re-render after the component mounts
  // in order to correctly highlight the active page.
  return (
    <div className="toc-section" key={key}>
      <MenuItems pages={pages} path={path} />
    </div>
  );
}
