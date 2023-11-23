import React, { useEffect, useState } from 'react';
import { useSSRWorkaround } from 'hooks';
import { Icon, LinkHelper as Link } from 'components';
import './styles.scss';

// Helper function to construct the URL
const makeUrl = (url) => `/documentation/${url}/`;

const MenuItems = ({ level, pages, path }) => {
  // Initialize isOpen states for all menu items
  const [openStates, setOpenStates] = useState({});

  // Effect to set initial open states based on the active path
  useEffect(() => {
    const initialOpenStates = pages.reduce((states, page) => {
      const url = makeUrl(page.url);
      states[url] = page.subpages && path.includes(url);
      return states;
    }, {});
    setOpenStates(initialOpenStates);
  }, [pages, path]);

  // Function to toggle the open state of a menu item
  const toggle = (url) => {
    setOpenStates((prevOpenStates) => ({
      ...prevOpenStates,
      [url]: !prevOpenStates[url],
    }));
  };

  return (
    <ol className={`menu-level-${level}`}>
      {pages.map((page) => {
        const { isHeading, pages: subpages, title, url: pageUrl } = page;
        const url = makeUrl(pageUrl);
        const isLinkActive = path === url;
        const isMenuActive = subpages && path.includes(url);
        const isOpen = openStates[url];

        const liClassName = `${isHeading ? 'menu-heading' : ''} ${isMenuActive ? 'menu-active' : ''} ${isOpen ? 'menu-open' : ''} ${isLinkActive ? 'link-active' : ''}`;
        const iconImg = isLinkActive ? 'chevronMagenta' : 'chevronGrey';
        const iconStyle = isOpen ? { transform: 'rotate(90deg)' } : {};

        return (
          <li key={url} className={liClassName}>
            {isHeading && subpages && <h4>{title}</h4>}
            {!isHeading && !subpages && <Link to={url}>{title}</Link>}
            {subpages && (
              <>
                <Link onClick={() => toggle(url)} to={url} className="menu-toggle-link">
                  {title}
                </Link>
                <button className="menu-toggle-btn" onClick={() => toggle(url)}>
                  <Icon img={iconImg} size={10} style={iconStyle} />
                </button>
                {isOpen && <MenuItems level={level + 1} pages={subpages} path={path} />}
              </>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default function SectionTableOfContents({ pages, path }) {
  const { key } = useSSRWorkaround();
// useSSRWorkaround will force a re-render after the component mounts
  // in order to correctly highlight the active page.
  return (
    <div className="toc-section" key={key}>
      <MenuItems level={1} pages={pages} path={path} />
    </div>
  );
}
