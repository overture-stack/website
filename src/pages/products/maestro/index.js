import React from 'react';
import Helmet from 'react-helmet';
import {
  BottomCallout,
  Button,
  Callout,
  GettingStarted,
  GridFeature,
  H2,
  H4,
  LinkHelper as Link,
  ProductFeature,
  ProductFeatureRow,
  ProductHero,
  Terminal,
} from 'components';
import productsDict from 'constants/products';
import { MAESTRO_UPDATES_LINK } from 'constants/external-links';

import './style.scss';

const featureGridData = [
  [
    {
      header: 'Slack integration',
      details:
        'Keep on top of your indexing service by receiving convenient notifications in Slack.',
      icon: 'target',
    },
    {
      header: 'Exclusion rule',
      details: (
        <div>
          Manage data release by exclusion of specific analyses based on any metadata tags found in{' '}
          <Link to={productsDict.song.productsPath}>Song</Link>.
        </div>
      ),
      icon: 'target',
    },
  ],

  [
    {
      header: 'Event Based Indexing',
      details:
        'Instant data release with configurable event based indexing with Apache Kafka messaging queue.',
      icon: 'target',
    },
    {
      header: 'Multiple Repository Management',
      details: (
        <div>
          Connect multiple <Link to={productsDict.song.productsPath}>Song</Link> servers to the same
          Maestro to query data distributed across different repositories.
        </div>
      ),
      icon: 'target',
    },
  ],
];

const MaestroPage = () => (
  <main className="Maestro">
    {/* Metadata */}
    <Helmet>
      <title>Overture Products - Maestro </title>
      <meta name="description" content="" />
      <meta
        name="keywords"
        content="Overture, data science software, bioinformatics software, open-source software, cancer research, cloud-based storage, genomic metadata, data submission, REST API, JSON, YAML, REST, Amazon Web Services, Microsoft Azure, PostgreSQL, Ontario Institute for Cancer Research, OICR"
      />
    </Helmet>

    {/* Hero */}
    {/*  Ugly html inside props so that I can add links to the cardText..*/}
    <ProductHero
      title="Maestro"
      subTitle="Organizing your distributed data into one index."
      cardText={
        <div>
          Maestro helps you manage geographically distributed data stored in{' '}
          <Link to={productsDict.song.productsPath}>Song</Link> and{' '}
          <Link to={productsDict.score.productsPath}>Score</Link> with a single, configurable index.
        </div>
      }
      getStartedLink={productsDict.maestro.githubUrl}
      logo="logoMaestro"
      progressType="rc"
      badge={{ color: 'blue', text: 'Access & Download' }}
    />

    {/* Features  */}
    <ProductFeatureRow>
      <ProductFeature
        header="Customizable record indexing"
        icon="arrowsRight"
        iconSize={96}
        details={
          <div>
            Index a single analysis, a study or a full{' '}
            <Link to={productsDict.song.productsPath}>Song</Link> repository with one request.
          </div>
        }
      />
      <ProductFeature
        header="Different indexing APIs"
        icon="kafka"
        iconSize={52}
        details={<div>Receive requests through Kafka or JSON Web API.</div>}
      />

      <ProductFeature
        header="Seamless integration"
        icon="vennDiagram"
        iconSize={64}
        details={
          <div>
            Built to interact natively with <Link to={productsDict.song.productsPath}>Song</Link>{' '}
            and <Link to={productsDict.arranger.productsPath}>Arranger</Link>.
          </div>
        }
      />
    </ProductFeatureRow>

    {/* Target Features Things */}
    <GridFeature data={featureGridData} />

    {/* Getting Started /  Terminals */}
    <GettingStarted pinnedLink={MAESTRO_UPDATES_LINK}>
      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">1</H2>
          <div>
            <H4>Clone the repo.</H4>
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['git@github.com:overture-stack/maestro.git']} />
        </div>
      </div>

      {/* Getting Started: step 2 */}

      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">2</H2>
          <div>
            <H4>Build and run the source code with maven.</H4>{' '}
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['./mvnw spring-boot:run']} />
        </div>
      </div>

      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">3</H2>
          <div>
            <H4>Or run using docker compose.</H4>{' '}
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['cd run/docker-compose', 'docker-compose up']} />
        </div>
      </div>
    </GettingStarted>

    <BottomCallout className="justify-center">
      <Callout
        icon="githubYellow"
        className="center"
        description="Index a single analysis, a study or a full Song with one request."
      >
        <Button
          icon="githubWhite"
          link={productsDict.maestro.githubUrl}
          size="medium"
          type="primary"
        >
          Get Started
        </Button>
      </Callout>
    </BottomCallout>
  </main>
);

export default MaestroPage;
