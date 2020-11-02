import React from 'react';
import Helmet from 'react-helmet';
import {
  H2,
  H4,
  Button,
  ProductFeature,
  ProductFeatureRow,
  ProductHero,
  GridFeature,
  GettingStarted,
  BottomCallout,
  Callout,
  Terminal,
} from 'components';

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
      details:
        "Manage data release by exclusion of specific analyses based on any metadata tags found in <a href='/products/song'>Song</a>.",
      icon: 'target',
    },
  ],

  [
    {
      header: 'Event Based Indexing',
      details:
        'Instant data release with configurable event based indexing with Apache Kafka messaging queue. ',
      icon: 'target',
    },
    {
      header: 'Multiple Repository Management',
      details:
        "Connect multiple <a href='/products/song'>Song</a> servers to the same Maestro to query data distributed across different repositories.",
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
          <a href="/products/song">Song</a> and <a href="/products/score">Score</a> with a single,
          configurable index.
        </div>
      }
      getStartedLink="https://github.com/overture-stack/maestro"
      logo="logoMaestro"
      progressType="ud"
      badge={{ color: 'blue', text: 'Access & Download' }}
    />

    {/* Features  */}
    <ProductFeatureRow>
      <ProductFeature
        header="Customizable record indexing"
        icon="arrowsRight"
        iconSize={96}
        details="Index a single analysis, a study or a full <a href='/products/song'>Song</a> repository with one request.
"
      />
      <ProductFeature
        header="Different indexing APIs"
        icon="kafka"
        iconSize={52}
        details="Receive requests through Kafka or JSON Web API."
      />

      <ProductFeature
        header="Seamless integration"
        icon="vennDiagram"
        iconSize={64}
        details="Built to interact natively with <a href='/products/song'>Song</a> and <a href='/products/arranger'>Arranger</a>. "
      />
    </ProductFeatureRow>

    {/* Target Features Things */}
    <GridFeature data={featureGridData} />

    {/* Getting Started /  Terminals */}
    <GettingStarted pinnedLink="https://maestro-overture.readthedocs.io/en/latest/">
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
          type="primary"
          size="medium"
          externalLink="https://github.com/overture-stack/maestro"
          icon="githubWhite"
        >
          Get Started
        </Button>
      </Callout>
    </BottomCallout>
  </main>
);

export default MaestroPage;
