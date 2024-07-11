import React, { useLayoutEffect, useState, useCallback, useMemo } from 'react';
import { useSSRWorkaround } from 'hooks';
import { Icon, LinkHelper as Link } from 'components';
import './styles.scss';

const makeUrl = (url) => `/documentation/${url}/`;

// Custom hook for menu item logic
const useMenuItem = (page, path) => {
  const [isOpen, setIsOpen] = useState(null);
  const { isHeading, pages: subpages, title, url: pageUrl } = page;
  const url = makeUrl(pageUrl);
  const isLinkActive = path === url;

  const hasToggle = !!(subpages && !isHeading);
  const isMenuActive = hasToggle && path.includes(url);

  const isMenuOpenOnLoad = useMemo(
    () => hasToggle && isOpen === null && isMenuActive,
    [hasToggle, isOpen, isMenuActive]
  );
  const isMenuOpen = useMemo(
    () => hasToggle && (isMenuOpenOnLoad || isOpen),
    [hasToggle, isMenuOpenOnLoad, isOpen]
  );

  const toggle = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  useLayoutEffect(() => {
    if (isMenuActive) setIsOpen(true);
  }, [isMenuActive]);

  return {
    isHeading,
    subpages,
    title,
    url,
    isLinkActive,
    hasToggle,
    isMenuActive,
    isMenuOpen,
    toggle,
  };
};

const MenuItem = ({ page, path, level }) => {
  const {
    isHeading,
    subpages,
    title,
    url,
    isLinkActive,
    hasToggle,
    isMenuActive,
    isMenuOpen,
    toggle,
  } = useMenuItem(page, path);

  const liClassName = `${
    isHeading
      ? 'menu-heading'
      : isMenuActive
      ? 'menu-active'
      : isMenuOpen
      ? 'menu-open'
      : ''
  } ${isLinkActive ? 'link-active' : ''}`;
  const iconImg = isLinkActive ? 'chevronMagenta' : 'chevronGrey';
  const iconStyle = isMenuOpen ? { transform: 'rotate(90deg)' } : {};

  return (
    <li className={liClassName}>
      {isHeading && subpages && <h4>{title}</h4>}
      {!isHeading && !subpages && <Link to={url}>{title}</Link>}
      {hasToggle && (
        <React.Fragment>
          <Link onClick={toggle} to={url} className="menu-toggle-link">
            {title}
          </Link>
          <button className="menu-toggle-btn" onClick={toggle}>
            <Icon img={iconImg} size={10} style={iconStyle} />
          </button>
        </React.Fragment>
      )}
      {(isHeading || isMenuOpen) && (
        <MenuItems level={level + 1} pages={subpages} path={path} />
      )}
    </li>
  );
};

const MenuItems = ({ level = 1, pages = [], path }) => {
  if (!pages.length) return null;
  const olClassName = `menu-level-${level}`;

  return (
    <ol className={olClassName}>
      {pages.map((page) => (
        <MenuItem key={page.url} page={page} path={path} level={level} />
      ))}
    </ol>
  );
};

export default function SectionTableOfContents({ pages, path }) {
  const { key } = useSSRWorkaround();
  return (
    <div className="toc-section" key={key}>
      <MenuItems pages={pages} path={path} />
    </div>
  );
}
