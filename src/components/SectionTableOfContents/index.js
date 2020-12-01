import React from 'react';
import { Link } from 'gatsby';
import { Icon } from 'components';
import './styles.scss';

// first level: buttons + dropdowns
// subsequent levels: <Link> tags + dropdowns

// flatten to find partial match??

// if page has pages then make it a button
// if !isHeading then navigate with reach/router

const makeUrl = url => `/documentation/${url}/`;

const RenderItems = ({ pages, path }) => {
  console.log({ path, pages });
  return (
    <ol>
      {pages.map(page => {
        const { isHeading = false, pages, title } = page;
        const url = makeUrl(page.url);
        const isLinkActive = path === url;
        const isMenuActive = pages && path.includes(url);
        const liClassName = isMenuActive ? 'menu-active' : '';
        const aClassName = isLinkActive ? 'link-active' : '';
        const iconImg = isMenuActive ? 'chevronMagenta' : 'chevronGrey';
        const iconStyle = isMenuActive ? { transform: 'rotate(90deg)' } : {};
        // if this link is a heading,
        // change link to the first page of this section
        const linkUrl = isHeading && pages ? makeUrl(pages[0].url) : url;
        return (
          <li key={url} className={liClassName}>
            <Link to={linkUrl} className={aClassName}>
              <span>
                {pages && <Icon img={iconImg} size={7} style={iconStyle} />}
                {title}
              </span>
            </Link>
            {pages && isMenuActive && <RenderItems pages={pages} path={path} />}
          </li>
        );
      })}
    </ol>
  );
};

export default function SectionTableOfContents({ pages, path }) {
  return (
    <div className="toc-section">
      <RenderItems pages={pages} path={path} />
    </div>
  );
}
