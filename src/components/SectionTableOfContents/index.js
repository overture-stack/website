import React, { useEffect, useState } from 'react';
import { useSSRWorkaround } from 'hooks';
import { Icon, LinkHelper as Link } from 'components';
import './styles.scss';

const makeUrl = (url) => `/documentation/${url}/`;

const MenuItems = ({ level = 1, pages = [], path }) => {
  if (!pages.length) return null;
  const [isOpen, setIsOpen] = useState(null);
  // when the user closes a parent menu
  const olClassName = `menu-level-${level}`;
  const nextLevel = level + 1;

  return (
    <ol className={olClassName}>
      {pages.map((page) => {
        const { isHeading, pages: subpages, title } = page;
        const url = makeUrl(page.url);
        const isLinkActive = path === url;

        // submenus
        const hasToggle = !!(subpages && !isHeading);
        const isMenuActive = hasToggle && path.includes(url);
        const isMenuOpenOnLoad = hasToggle && isOpen === null && isMenuActive;
        const isMenuOpen = hasToggle && (isMenuOpenOnLoad || isOpen);

        const toggle = () => {
          setIsOpen(!isMenuOpen);
        };

        if (isMenuActive) {
          useEffect(() => {
            setIsOpen(true);
          }, []);
        }

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
          <li key={url} className={liClassName}>
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
              <MenuItems level={nextLevel} pages={subpages} path={path} />
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
      <MenuItems pages={pages} path={path} />
    </div>
  );
}
