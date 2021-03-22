import React from 'react';
import Helmet from 'react-helmet';
import {
  BottomCallout,
  Button,
  Callout,
  GettingStarted,
  H2,
  H3,
  LinkHelper as Link,
  ProductFeature,
  ProductFeatureRow,
  ProductHero,
  Terminal,
} from 'components';
import productsDict from 'constants/products';
import { EGO_SQL_LINK, EGO_UPDATES_LINK } from 'constants/external-links';
import screenshot from './assets/screenshot.png';
import './style.scss';

const EgoPage = () => (
  <main className="Ego">
    {/* Metadata */}
    <Helmet>
      <title>Overture Products - Ego </title>
      <meta
        name="description"
        content="Ego provides single sign-on through Facebook, Google and Github, a well as providing an intuitive GUI for painless user management."
      />
      <meta
        name="keywords"
        content="Overture, data science software, bioinformatics software, open-source software, cancer research, single sign-on, facebook authentication, google authentication, user management, JSON web tokens, Spring Security, Ontario Institute for Cancer Research, OICR"
      />
    </Helmet>

    {/* Hero */}
    <ProductHero
      title="Ego"
      subTitle="A stateless authorization and user management service."
      cardText="Ego provides single sign-on through Facebook, Google and Github, as well as providing an intuitive GUI for painless user management."
      getStartedLink={productsDict.ego.githubUrl}
      badge={{ color: 'blue', text: 'Access & Download' }}
      logo="logoEgo"
      progressType="ga"
    />

    {/* Features  */}
    <ProductFeatureRow>
      <ProductFeature
        header="Single sign on"
        icon="security"
        details={<div>No more usernames and passwords for your users to remember.</div>}
      />

      <ProductFeature
        header="Scalable"
        icon="barGraph"
        details={<div>No sessions management means less code to write.</div>}
      />

      <ProductFeature
        header="User Administration"
        icon="user"
        details={<div>Manage users, groups and applications.</div>}
      />
    </ProductFeatureRow>

    {/* Target Features + Screenshot */}
    <section className="bg-curve-grey pb4">
      <div className="container">
        <div className="columns target-feature-container">
          {/* targets */}

          <div className="column pt2 is-4-desktop">
            <div className="py2">
              <ProductFeature
                size="small"
                icon="target"
                header="It’s stateless"
                details={<div>Ego uses JSON Web Tokens (JWT) for authorization.</div>}
              />
            </div>

            <div className="py2">
              <ProductFeature
                size="small"
                icon="target"
                header="It's secure"
                details={
                  <div>
                    Built with modern frameworks such as Spring Security, you can rest assured that
                    users will be authorized securely.
                  </div>
                }
              />
            </div>

            <div className="py2">
              <ProductFeature
                size="small"
                icon="target"
                header="Scale up"
                details={
                  <div>
                    There are no limits to the number of applications you can use Ego alongside.
                  </div>
                }
              />
            </div>
          </div>

          {/* screenshot */}
          <div className="column is-8-desktop  is-offset-1 flex items-center">
            <img alt="" src={screenshot} />
          </div>
        </div>
      </div>
    </section>

    {/* Getting Started Terminals / steps */}

    <GettingStarted pinnedLink={EGO_UPDATES_LINK}>
      {/* Getting Started: Step 1 */}

      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">1</H2>
          <div>
            <H3>To get started, you’ll first need to set up a database.</H3>
            <ul className="step-text">
              <li className="bullet">Install Postgres. </li>
              <li className="bullet">
                Create a database: ego with user postgres and empty password
              </li>
            </ul>
          </div>
          <div className="yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal
            prompts={['sudo -u postgres psql', 'create database ego;', 'q  exit out of psql']}
          />
        </div>
      </div>

      {/* Getting Started: step 2 */}

      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">2</H2>
          <div>
            <H3>Define the tables in your database.</H3>

            <ul className="step-text">
              <li className="bullet">
                Copy the <Link to={EGO_SQL_LINK}>psql-schema.sql</Link> file locally.{' '}
                {/* TJS NEEDS LINK */}
              </li>
              <li className="bullet">
                Execute the SQL script to setup the tables. {/* TJS NEEDS LINK */}
              </li>
            </ul>
          </div>
          <div className="yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['psql -U postgres -d ego -a -f psql-schema.sql']} />
        </div>
      </div>

      {/* Getting Started: step 3 */}

      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">3</H2>
          <div>
            <H3>Run one of the three supported Ego profiles.</H3>

            <ul className="step-text">
              <li className="bullet">
                <span className="bold">Default: </span>The most simple profile which allows you to
                test API endpoints with a valid JWT.
              </li>

              <li className="bullet">
                <span className="bold">Auth: </span>
                The next step up, which allows you to include JWT validations.
              </li>

              <li className="bullet">
                <span className="bold">Secure: </span>
                Our highest level, which allows integration with https protocol.
              </li>
            </ul>
          </div>
          <div className="yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['mvn clean package', 'mvn spring-boot:run']} />
        </div>
      </div>
    </GettingStarted>

    <BottomCallout>
      <Callout
        icon="githubYellow"
        description="Single sign on functionality for your users in multiple microservices."
        className="center"
      >
        <Button
          icon="githubWhite"
          iconAlt="github icon"
          link={productsDict.ego.githubUrl}
          size="medium"
          type="primary"
        >
          Get Started
        </Button>
      </Callout>
    </BottomCallout>
  </main>
);

export default EgoPage;
