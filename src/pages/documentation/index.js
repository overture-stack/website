import React from 'react';
import {
  Badge,
  CanarieCredits,
  ComingSoonBadge,
  Button,
  Icon,
  LinkHelper as Link,
  Search,
} from 'components';
import {
  DOCS_DMS_ADMIN_CUSTOMIZE_LINK,
  DOCS_DMS_INSTALL_LINK,
  DOCS_DMS_INSTALL_DEMO,
} from 'constants/docs';
import { DMS_RELEASE_NOTES, OVERTURE_GITHUB_LINK } from 'constants/external-links';
import consultingSvg from './assets/consulting.svg';
import techSupportSvg from './assets/techSupport.svg';
import './styles.scss';

const ENABLE_DRAFTS = process.env.GATSBY_ENABLE_DRAFTS === 'true';

const docsSearchIndex = process.env.GATSBY_ALGOLIA_INDEX_NAME;
const searchIndices = [{ name: docsSearchIndex, title: docsSearchIndex }];

const productSections = [
  {
    title: 'Generate & Upload',
    color: 'pink',
    cards: [
      {
        comingSoon: true,
        icon: 'productScore',
        link: '/documentation/score/',
        text: 'Facilitates the transfer and storage of data seamlessly for cloud-based products.',
        title: 'Score',
      },
      {
        icon: 'productSong',
        link: '/documentation/song/',
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
        link: '/documentation/ego/',
        text: 'Authorization services for identity providers such as Google and Facebook.',
        title: 'Ego',
      },
      {
        comingSoon: true,
        icon: 'productMaestro',
        link: '/documentation/maestro/',
        text: 'Manages geographically distributed data with a single, configurable index.',
        title: 'Maestro',
      },
      {
        icon: 'productArranger',
        link: '/documentation/arranger/',
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
        comingSoon: true,
        icon: 'productJukebox',
        link: '/documentation/jukebox/',
        text: 'Automates set-up and deployment of JupyterHub.',
        title: 'Jukebox',
      },
      {
        comingSoon: true,
        icon: 'productOnco',
        link: '/documentation/oncojs/',
        text: 'Brings data to life with stunning visualizations and real-time analysis.',
        title: 'OncoJS',
      },
    ],
  },
  {
    title: 'Collaborate & Share',
    color: 'green',
    cards: [
      {
        comingSoon: true,
        icon: 'productPersona',
        link: '/documentation/persona/',
        text: 'Provides an easy-to-use solution for storing profile information.',
        title: 'Persona',
      },
      {
        comingSoon: true,
        icon: 'productRiff',
        link: '/documentation/riff/',
        text: 'Allows you to save user queries and states and share them through short URLs.',
        title: 'Riff',
      },
    ],
  },
];

export default function DocumentationPage() {
  return (
    <main className="DocumentationLandingPage">
      {/* HERO */}
      <div className="hero">
        <div className="container">
          <div className="image image-consulting">
            <img alt="" src={consultingSvg} />
          </div>
          <div className="search__container">
            <h1>How can we help?</h1>
            <Search indices={searchIndices} />
          </div>
          <div className="image image-techsupport">
            <img alt="" src={techSupportSvg} />
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
                  {'DMS = Score + Song + Ego + Maestro + Arranger'.split(' ').map((word, i) => (
                    <span key={`${word}${i}`}>{word}</span>
                  ))}
                </div>
              </div>
              <Button type="primary" size="medium" link={DOCS_DMS_INSTALL_LINK}>
                Installation Instructions
              </Button>
              <CanarieCredits wide />
            </div>
            <div className="column">
              <h2>Help by Topic</h2>
              <ul>
                {/* <li>
                  How can I <Link to="">extend the DMS system</Link> to include other
                  Overture products?
                </li> */}
                <li>
                  How do I{' '}
                  <Link to={DOCS_DMS_ADMIN_CUSTOMIZE_LINK}>customize the look of my DMS</Link>?
                </li>
                <li>
                  Where can I find the <Link to={DMS_RELEASE_NOTES}>release notes</Link> for the DMS
                  and each product?
                </li>
                <li>
                  How can I <Link to={OVERTURE_GITHUB_LINK}>get involved</Link> with this open
                  source project?
                </li>
                <li>
                  Where can I <Link to={DOCS_DMS_INSTALL_DEMO}>see these products in action</Link>?
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* PRODUCT DOCUMENTATION SECTION */}
      <div className="product-section bg-grey">
        <section className="container">
          <h2>Product Documentation</h2>
          <div className="columns">
            {productSections.map(section => (
              <div className="product-column column" key={section.title}>
                <Badge color={section.color}>{section.title}</Badge>
                {section.cards.map(card => {
                  const SectionCard = () => (
                    <div className="product-card">
                      <div className="product-card__title">
                        <Icon size={32} img={card.icon} />
                        <h3>{card.title}</h3>
                        {card.comingSoon && !ENABLE_DRAFTS && (
                          <ComingSoonBadge style={{ position: 'absolute', right: 10, top: 10 }} />
                        )}
                      </div>
                      <p>{card.text}</p>
                      {(!card.comingSoon || ENABLE_DRAFTS) && (
                        <div className="chevron-link">
                          <span>Docs</span> <Icon size={12} img="arrowRightMagenta" />
                        </div>
                      )}
                    </div>
                  );
                  return card.comingSoon && !ENABLE_DRAFTS ? (
                    <SectionCard key={card.title} />
                  ) : (
                    <Link to={card.link} key={card.title}>
                      <SectionCard />
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
