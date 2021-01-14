import React from 'react';
import Helmet from 'react-helmet';
import {
  H2,
  H3,
  ProductFeature,
  ProductFeatureRow,
  ProductHero,
  GridFeature,
  GettingStarted,
  BottomCallout,
  Button,
  Callout,
  Terminal,
} from 'components';
import productsDict from 'meta/products-dict';

const featureGridData = [
  [
    {
      header: 'Short URLs',
      details: 'Each Riff can be mapped to by a Short URL which is generated on saving or sharing.',
      icon: 'target',
    },
    {
      header: 'Social',
      details: 'Allow users to share urls via link, Facebook, Twitter, or LinkedIn.',
      icon: 'target',
    },
  ],
];

const RiffPage = () => (
  <main className="Riff">
    {/* Metadata */}
    <Helmet>
      <title>Overture Products - Riff </title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
    </Helmet>

    {/* Hero */}
    <ProductHero
      title="Riff"
      subTitle="Quintessential sharing."
      cardText="Riff is a service that allows you to save user queries and state and share them through convenient short URLs."
      getStartedLink={productsDict.riff.github}
      logo="logoRiff"
      progressType="rc"
      badge={{ color: 'light-green', text: 'COLLABORATE & SHARE' }}
    />

    {/* Features  */}

    <ProductFeatureRow>
      <ProductFeature
        header="Simple"
        icon="magnify"
        details="A tiny service for a specific problem."
      />

      <ProductFeature
        header="Flexible"
        icon="history"
        details="Store arbitrary information about a user’s state."
      />

      <ProductFeature
        header="Collaborative"
        icon="share"
        details="Sharing is just one click away."
      />
    </ProductFeatureRow>

    {/* Target Section */}
    <GridFeature data={featureGridData} />

    {/* Getting Started */}

    <GettingStarted>
      {/* Getting Started: Step 1 */}

      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">1</H2>
          <div>
            <H3>Install Postgres.</H3>
            <div className="step-text">
              To get started, you'll first need to install a database.
            </div>
          </div>
          <div className="yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['sudo -u postgres psql']} />
        </div>
      </div>

      {/* Getting Started: step 2 */}

      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">2</H2>
          <div>
            <H3>Clone the git repo.</H3>
          </div>
          <div className="yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['git clone git@github.com:overture-stack/riff.git']} />
        </div>
      </div>

      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">3</H2>
          <div>
            <H3>Set up Riff.</H3>
            <div className="step-text">
              The database schema will be preconfigured as part of the set up!
            </div>
          </div>
          <div className="yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['mvn spring-boot:run']} />
        </div>
      </div>
    </GettingStarted>

    {/*Footer */}

    <BottomCallout className="justify-center">
      <Callout
        icon="githubYellow"
        className="center"
        description="Save user queries and state and share them through convenient short URLs."
      >
        <Button
          type="primary"
          size="medium"
          externalLink={productsDict.riff.github}
          icon="githubWhite"
        >
          Get Started
        </Button>
      </Callout>
    </BottomCallout>
  </main>
);

export default RiffPage;
