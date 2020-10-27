import React from 'react';
import { Link } from 'gatsby';
import { Icon } from 'components';
import NotFoundPage from '../404';
import './styles.scss';

const SHOW_DOCS = process.env.GATSBY_SHOW_DOCS === 'true';

export default function DocumentationPage() {
  return SHOW_DOCS ? (
    <main className="DocumentationPage">
      {/* HERO */}
      <div style={{ padding: 100, textAlign: 'center', width: '100%' }}>
        <h1 className="t-h1" style={{ marginBottom: 50 }}>
          Documentation
        </h1>

        <Link className="hero-link pl3" to="/documentation/song">
          Song
          <Icon size={16} img="arrowRightMagenta" />
        </Link>
      </div>
    </main>
  ) : (
    <NotFoundPage />
  );
}
