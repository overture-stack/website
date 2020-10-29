import React from 'react';
import { Link } from 'gatsby';
import { Badge, Button, Icon, Layout } from '../../components';
import NotFoundPage from '../404';
import './styles.scss';
import consultingSvg from './assets/consulting.svg';
import techSupportSvg from './assets/techSupport.svg';

const SHOW_DOCS = process.env.GATSBY_SHOW_DOCS;

const productSections = [
  {
    title: 'Generate & Upload',
    color: 'pink',
    cards: [
      {
        icon: 'productScore',
        link: '/documentation/score',
        text: 'Facilitates the transfer and storage of data seamlessly for cloud-based products.',
        title: 'Score',
      },
      {
        icon: 'productSong',
        link: '/documentation/song',
        text: 'Tracks genomic data scattered across multiple cloud storage systems.',
        title: 'Song',
      },
    ],
  },
  {
    title: 'Access & Download',
    color: 'blue',
    cards: [
      {
        icon: 'productEgo',
        link: '/documentation/ego',
        text: 'Authorization services for identity providers such as Google and Facebook.',
        title: 'Ego',
      },
      {
        icon: 'productMaestro',
        link: '/documentation/maestro',
        text: 'Manages geographically distributed data with a single, configurable index.',
        title: 'Maestro',
      },
      {
        icon: 'productArranger',
        link: '/documentation/arranger',
        text: 'Provides the power to organize your data into an intuitive search interface.',
        title: 'Arranger',
      },
    ],
  },
  {
    title: 'Analyze & Discover',
    color: 'red',
    cards: [
      {
        icon: 'productJukebox',
        link: '/documentation/jukebox',
        text: 'Automates set-up and deployment of JupyterHub.',
        title: 'Jukebox',
      },
      {
        icon: 'productOnco',
        link: '/documentation/oncojs',
        text: 'Bring data to life with stunning visualizations and real-time analysis.',
        title: 'OncoJS',
      },
    ],
  },
  {
    title: 'Collaborate & Share',
    color: 'green',
    cards: [
      {
        icon: 'productPersona',
        link: '/documentation/persona',
        text: 'Provides an easy-to-use solution for storing profile information.',
        title: 'Persona',
      },
      {
        icon: 'productRiff',
        link: '/documentation/riff',
        text: 'Allows you to save user queries and states and share them through short URLs.',
        title: 'Riff',
      },
    ],
  },
];

export default function DocumentationLandingPage() {
  return SHOW_DOCS ? (
    <Layout>
      <main className="DocumentationLandingPage">
        {/* HERO */}
        <div className="hero">
          <div className="container">
            <div className="image image-consulting">
              <img src={consultingSvg} />
            </div>
            <div className="search-container">
              <h1>How can we help?</h1>
            </div>
            <div className="image image-techsupport">
              <img src={techSupportSvg} />
            </div>
          </div>
        </div>
        {/* DMS & HELP BY TOPIC */}
        <div className="documentation-section">
          <section className="container">
            <div className="columns">
              <div className="column">
                <h2>Data Management System (DMS)</h2>
                <p>
                  The DMS is an Overture product bundle that allows users to easily install a data
                  portal for their own data with a few simple configurations.
                </p>
                <div className="dms-row">
                  <Icon img="productDMS" size={40} />
                  <div className="dms-row__text">
                    {'DMS = Score + Song + Ego + Maestro + Arranger'.split(' ').map(word => (
                      <span>{word}</span>
                    ))}
                  </div>
                </div>
                <Button type="primary" size="medium" internalLink="/documentation/TODO">
                  Installation Instructions
                </Button>
              </div>
              <div className="column">
                <h2>Help by Topic</h2>
                <ul>
                  <li>
                    How can I <Link to="/documentation/TODO">extend the DMS system</Link> to include
                    other Overture products?
                  </li>
                  <li>
                    How do I <Link to="/documentation/TODO">customize the look of my DMS</Link>?
                  </li>
                  <li>
                    Where can I find the <Link to="/documentation/TODO">release notes</Link> for the
                    DMS and each product?
                  </li>
                  <li>
                    How can I <Link to="/documentation/TODO">get involved</Link> with this open
                    source project?
                  </li>
                  <li>
                    Where can I <Link to="/documentation/TODO">see these products in action</Link>?
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        {/* PRODUCT DOCUMENTATION SECTION */}
        <div className="product-section bg-grey-light">
          <section className="container">
            <h2>Product Documentation</h2>
            <div class="columns">
              {productSections.map(section => (
                <div className="product-column column" key={section.title}>
                  <Badge color={section.color}>{section.title}</Badge>
                  {section.cards.map(card => (
                    <Link to={card.link} key={card.title}>
                      <div className="product-card">
                        <div className="product-card__title">
                          <Icon size={32} img={card.icon} />
                          <h3>{card.title}</h3>
                        </div>
                        <p>{card.text}</p>
                        <div className="chevron-link">
                          <span>Docs</span> <Icon size={12} img="arrowRightMagenta" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  ) : (
    <Layout>
      <NotFoundPage />
    </Layout>
  );
}
