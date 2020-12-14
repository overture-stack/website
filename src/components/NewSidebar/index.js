import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useSSRWorkaround } from 'hooks';

const makeUrl = url => `/documentation/${url}/`;

const MenuItems = ({ pages = [], path }) => {
  if (!pages.length) return null;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ol>
      {pages.map(page => {
        const { isHeading, pages: subpages, title } = page;
        const url = makeUrl(page.url);
        return (
          <li key={url}>
            {isHeading && subpages && <h4>{title}</h4>}
            {!isHeading && subpages && (
              <React.Fragment>
                <Link to={url}>{title}</Link>
                <button onClick={toggle}>***</button>
              </React.Fragment>
            )}
            {!isHeading && !subpages && <Link to={url}>{title}</Link>}
            {subpages && (isHeading || isOpen) && <MenuItems pages={subpages} path={path} />}
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
