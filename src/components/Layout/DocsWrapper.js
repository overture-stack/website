import React, { useState } from 'react';
import productsDict from 'constants/products';
import { DOCUMENTATION_PATH } from 'constants/pages';
import {
  CanarieCredits,
  Icon,
  LinkHelper as Link,
  Search,
  SectionTableOfContents,
} from 'components';

const searchIndex = process.env.GATSBY_ALGOLIA_INDEX_NAME;
const searchIndices = [{ name: searchIndex, title: searchIndex }];

export default function DocsWrapper({ children, data, path }) {
  // this wrapper is used to persist state,
  // e.g. the menu toggles in the left sidebar,
  // across different pages in the docs section.

  const { pages } = data.allYaml.nodes[0];
  const { sectionSlug } = data.mdx.fields;
  const { iconWhite, title } = productsDict[sectionSlug];

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <main className="docs__page">
      <div className="docs__mobile-sidebar__button">
        <button
          type="button"
          className={`button navbar-burger ${isMobileSidebarOpen ? 'is-active' : ''}`}
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="docs__header">
        <div className="docs__header-title">
          <Icon className="icon" size={45} img={iconWhite} />
          <h1>{title} Documentation</h1>
        </div>
        <div className="docs__header-search">
          <Search indices={searchIndices} />
        </div>
      </div>
      <div className="docs__columns">
        {/* SECTION TABLE OF CONTENTS */}
        <div
          className={`docs__sidebar docs__mobile-sidebar  ${
            isMobileSidebarOpen ? 'docs__mobile-sidebar__active' : ''
          }`}
        >
          <div className="docs__sidebar__sticky">
            <Link to={DOCUMENTATION_PATH} className="docs__sidebar__overview">
              <Icon size={6} img="arrowLeftBlue" />
              Documentation Overview
            </Link>
            <SectionTableOfContents pages={pages} path={path} />
            {sectionSlug === 'dms' && <CanarieCredits />}
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
