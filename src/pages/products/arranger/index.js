import React from 'react';
import Helmet from 'react-helmet';
import {
  BottomCallout,
  Button,
  Callout,
  GettingStarted,
  H2,
  H4,
  LinkHelper as Link,
  ProductFeature,
  ProductFeatureRow,
  ProductHero,
  Terminal,
  UrlBar,
} from 'components';
import productsDict from 'meta/products-dict';
import screenshot from './assets/screenshot.png';
import './style.scss';

const ArrangerPage = () => (
  <main className="Arranger">
    {/* Metadata */}
    <Helmet>
      <title>Overture Products - Arranger </title>
      <meta name="" content="" />
      <meta
        name="keywords"
        content="Overture, data science software, bioinformatics software, open-source software, cancer research, single sign-on, facebook authentication, google authentication, user management, JSON web tokens, Spring Security, Ontario Institute for Cancer Research, OICR"
      />
    </Helmet>

    {/* Hero */}
    <ProductHero
      title="Arranger"
      subTitle="Data can be messy, let Arranger organize it for you. "
      cardText="Provide your administrators with the power to organize an intuitive data search interface, complete with customizable components, tables, and search terms."
      getStartedLink={productsDict.arranger.githubUrl}
      badge={{ color: 'blue', text: 'Access & Download' }}
      logo="logoArranger"
      progressType="rc"
    />

    {/* Features  */}
    <ProductFeatureRow>
      <ProductFeature
        header="User managed"
        icon="user"
        details={
          <div>Sit back and relax as your administrators determine facets and search terms.</div>
        }
      />
      <ProductFeature
        header="Customizable"
        icon="customizable"
        iconSize={80}
        details={<div>Use the default theme, or create a portal with your own branded theme.</div>}
      />
      <ProductFeature
        header="Search API"
        icon="search"
        details={
          <div>Arranger creates and manages a flexible yet powerful GraphQL search API.</div>
        }
      />
    </ProductFeatureRow>

    {/* Target Features + Screenshot */}
    <section className="bg-curve-grey pb4">
      <div className="container">
        <div className="columns column target-feature-container">
          {/* targets */}

          <div className="column pt2 is-4-desktop pt2">
            <div className="py2">
              <ProductFeature
                size="small"
                icon="target"
                header="It’s index based"
                details={<div>Simply provide an Elasticsearch index and you’re good to go!</div>}
              />
            </div>

            <div className="py2">
              <ProductFeature
                size="small"
                icon="target"
                header="Built-in components"
                details={
                  <div>
                    Search through a list of data-types and pre-built aggregation components like
                    boolean, list, string and date.
                  </div>
                }
              />
            </div>

            <div className="py2">
              <ProductFeature
                size="small"
                icon="target"
                header="Content Administration"
                details={
                  <div>
                    Customize the content of your data portal display such as filters and tables.
                  </div>
                }
              />
            </div>
          </div>

          {/* screenshot */}
          <div className="column is-offset-1 flex items-center">
            <img src={screenshot} />
          </div>
        </div>
      </div>
    </section>

    {/* Getting Started Terminals / steps */}

    <GettingStarted pinnedLink="https://arranger.readthedocs.io/en/latest/">
      {/* Getting Started: Step 1 */}

      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">1</H2>
          <div>
            <H4>Clone the repo.</H4>
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['git@github.com:overture-stack/arranger.git']} />
        </div>
      </div>

      {/* Getting Started: step 2 */}

      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">2</H2>
          <div>
            {' '}
            <H4>Run docker compose.</H4>{' '}
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['docker-compose up -d']} />
        </div>
      </div>

      {/* Getting Started: step 3 */}
      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">3</H2>
          <div>
            {' '}
            <H4>Go to localhost to see arranger server.</H4>{' '}
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <UrlBar
            prompts={[
              <div>
                <Link to="https://localhost:8080">http://localhost:8080</Link>
              </div>,
            ]}
          />
        </div>
      </div>

      {/* Getting Started: step 4 */}
      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">4</H2>
          <div>
            {' '}
            <H4>
              Follow the{' '}
              <Link to="https://arranger.readthedocs.io/en/latest/src/gettingstarted.html">
                quick guide
              </Link>{' '}
              to generate demo data and a local portal!
            </H4>{' '}
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <UrlBar
            prompts={[
              <div>
                Visit{' '}
                <Link to="https://arranger.readthedocs.io/en/latest/src/gettingstarted.html">
                  https://arranger.readthedocs.io/en/latest/src/gettingstarted.html
                </Link>
              </div>,
            ]}
          />
        </div>
      </div>
    </GettingStarted>

    <BottomCallout>
      <Callout
        icon="githubYellow"
        description="Provide your administrators with the power to organize an intuitive data search interface."
        className="center"
      >
        <Button
          icon="githubWhite"
          link={productsDict.arranger.githubUrl}
          size="medium"
          type="primary"
        >
          Get Started
        </Button>
      </Callout>
    </BottomCallout>
  </main>
);

export default ArrangerPage;
