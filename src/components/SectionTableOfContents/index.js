import React from 'react';
import { Link } from 'gatsby';
import { Icon } from 'components';
import './styles.scss';

const makeUrl = url => `/documentation/${url}/`;

const RenderItems = ({ pages, path }) => (
  <ol>
    {pages.map(page => {
      const { isHeading, pages, title } = page;
      const url = makeUrl(page.url);
      const isLinkActive = path === url;
      const aClassName = isLinkActive ? 'link-active' : '';

      // submenus
      const isMenuActive = pages && path.includes(url);
      const liClassName = isMenuActive ? 'menu-active' : '';
      const iconImg = isMenuActive ? 'chevronMagenta' : 'chevronGrey';
      const iconStyle = isMenuActive ? { transform: 'rotate(90deg)' } : {};

      // headings
      // change link destination to first child page
      const linkUrl = isHeading && pages ? makeUrl(pages[0].url) : url;

      return (
        <li key={url} className={liClassName}>
          <Link to={linkUrl} className={aClassName}>
            <span>
              {pages && <Icon img={iconImg} size={7} style={iconStyle} />}
              {title}
            </span>
          </Link>
          {isMenuActive && <RenderItems pages={pages} path={path} />}
        </li>
      );
    })}
  </ol>
);

export default function SectionTableOfContents({ pages, path }) {
  return (
    <div className="toc-section">
      <RenderItems pages={pages} path={path} />
      <RenderItems pages={pages} path={path} />
      <RenderItems pages={pages} path={path} />
    </div>
  );
}
