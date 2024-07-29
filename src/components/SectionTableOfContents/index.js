import React, { useLayoutEffect, useState, useCallback, useMemo } from 'react';
import { useSSRWorkaround } from 'hooks';
import { Icon, LinkHelper as Link } from 'components';
import './styles.scss';

// Makes URL for our documentation pages
const makeUrl = (url) => `/documentation/${url}/`;

// Custom Hook that manages the state and logic of the menu items, also handles opening and closing of menu items
const useMenuItem = (page, path) => {
  // Initialize isOpen state as undefined (null)
  const [isOpen, setIsOpen] = useState(null);
  // Destructure propeties from the page object being passed (represented in the contents.yaml within the markdown folder)
  const { isHeading, pages: subpages, title, url: pageUrl } = page;
  // Generate the URL for the current menu item using the makeURL function
  const url = makeUrl(pageUrl);
  // isLinkActive will be set to the path that matches the URL
  const isLinkActive = path === url;
  // If the menu item has subpages and is not just a heading inable toggling
  const hasToggle = !!(subpages && !isHeading);
  // Check if the menu item should be active based on its toggle ability and path
  const isMenuActive = hasToggle && path.includes(url);

  // Logic dictating if the menu should be open on initial load
  const isMenuOpenOnLoad = useMemo(
    () => hasToggle && isOpen === null && isMenuActive,
    [hasToggle, isOpen, isMenuActive]
  );

  // Logic dicating if the menu should be open based on the toggle state and intial load state
  const isMenuOpen = useMemo(
    () => hasToggle && (isMenuOpenOnLoad || isOpen),
    [hasToggle, isMenuOpenOnLoad, isOpen]
  );

  // Memoize the toggle function to prevent unnecessary re-renders unless dependencies change
  const toggle = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  // Automatically open the menu if it's active when the component mounts or updates
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

// Component that renders a single menu item using the custom useMenuItem hook for its logic
// Different elements are rendered based on the item type (heading, link, or toggle)
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

// Component that reders our list of menu items, also handles nesting of menu items
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

// This is the main component that wraps everything
//    Uses useSSRWorkaround hook as a work around for server-side rendering issues related to gatsby
export default function SectionTableOfContents({ pages, path }) {
  const { key } = useSSRWorkaround();
  return (
    <div className="toc-section" key={key}>
      <MenuItems pages={pages} path={path} />
    </div>
  );
}
