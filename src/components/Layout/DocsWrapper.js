import React, { useState } from 'react';
import { Link } from 'gatsby';
import productsDict from 'meta/products-dict';
import { Icon, Search, SidebarMenu } from 'components';

const searchIndex = process.env.GATSBY_ALGOLIA_INDEX_NAME;
const searchIndices = [{ name: searchIndex, title: searchIndex }];

export default function DocsWrapper({ children, docsSectionSlug, docsSectionTitle }) {
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
          <Icon className="icon" size={45} img={productsDict[docsSectionSlug].iconWhite} />
          <h1>{docsSectionTitle} Documentation</h1>
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
            <Link to="/documentation/" className="docs__sidebar__overview">
              <Icon size={6} img="arrowLeftBlue" />
              Documentation Overview
            </Link>
            <SidebarMenu />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
