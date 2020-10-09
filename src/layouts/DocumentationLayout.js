import React, { Component } from 'react';
// import heroImg from './assets/hero_img.svg'
import Helmet from 'react-helmet';
import { H1, H2, Button, Layout, Hero } from '../components';
// import './styles.scss'

class DocumentationLayout extends Component {
  render() {
    return (
      <Layout>
        <main className="documentation-page">
          <p>I'm a docs page!</p>
        </main>
      </Layout>
    );
  }
}

export default DocumentationLayout;
