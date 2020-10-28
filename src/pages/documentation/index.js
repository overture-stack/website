import React from 'react';
import { Link } from 'gatsby';
import { Badge, Icon, Layout } from '../../components';
import './styles.scss';

const productSections = [
  {
    title: 'Generate & Upload',
    color: 'pink', // TODO
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
    color: 'blue', // TODO
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
    color: 'red', // TODO
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
    color: 'green', // TODO
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

export default function DocumentationPage() {
  return (
    <Layout>
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
    </Layout>
  );
}
