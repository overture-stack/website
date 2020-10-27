import React from 'react';
import { Link } from 'gatsby';
import { Hero, Icon } from 'components';
import heroImg from './assets/hero_img.svg';
import './styles.scss';

export default function DocumentationPage() {
  return (
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
  );
}
