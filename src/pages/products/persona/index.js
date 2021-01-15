import React from 'react';
import Helmet from 'react-helmet';
import {
  BottomCallout,
  Button,
  Callout,
  GettingStarted,
  GridFeature,
  H2,
  H3,
  LinkHelper as Link,
  ProductFeature,
  ProductFeatureRow,
  ProductHero,
  Terminal,
} from 'components';
import productsDict from 'constants/products';
import { PERSONA_LOCAL_LINK, PERSONA_ENV_SCHEMA_LINK } from 'constants/external-links';

const featureGridData = [
  [
    {
      header: 'Adaptable user information',
      details:
        'MondoDB backend enables user profiles with different roles to have different fields',
      icon: 'target',
    },
    {
      header: 'Scalable',
      details: 'As your user base grows, Persona grows to accommodate the profile information.',
      icon: 'target',
    },
  ],
  [
    {
      header: 'Pairs with Ego',
      details: (
        <div>
          Built to interact seamlessly with the user authorization product,{' '}
          <Link to={productsDict.ego.productsPath}>Ego.</Link>
        </div>
      ),
      icon: 'target',
    },
  ],
];

const PersonaPage = () => (
  <main className="Persona">
    {/* Metadata */}
    <Helmet>
      <title>Overture Products - Persona </title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
    </Helmet>

    {/* Hero */}
    <ProductHero
      title="Persona"
      subTitle="An effortless solution for storing profile information."
      cardText="Persona provides an easy-to-use solution for storing profile information. In tandem with Ego, users’ personas can be validated and expanded upon with custom fields."
      getStartedLink={productsDict.persona.githubUrl}
      logo="logoPersona"
      progressType="rc"
      badge={{ color: 'light-green', text: 'COLLABORATE & SHARE' }}
    />

    {/* Features  */}

    <ProductFeatureRow>
      <ProductFeature
        header="Extensible"
        icon="extensible"
        iconSize={48}
        details={<div>Add, expand and validate user information.</div>}
      />

      <ProductFeature
        header="Proactive"
        icon="fingerSnap"
        iconSize={40}
        details={<div>Let us do the set up for you. Focus on the details that matter.</div>}
      />

      <ProductFeature
        header="Efficient"
        icon="checkmark"
        iconSize={60}
        details={
          <div>An efficient way to organize user profiles in one place for easy reference.</div>
        }
      />
    </ProductFeatureRow>

    {/* Target Features Things */}
    <GridFeature data={featureGridData} />

    {/* Getting Started */}

    <GettingStarted>
      {/* Getting Started: Step 1 */}

      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">1</H2>
          <div>
            <H3>Download Persona.</H3>
          </div>
          <div className="yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['git clone https://github.com/overture-stack/persona.git']} />
        </div>
      </div>

      {/* Getting Started: step 2 */}

      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">2</H2>
          <div>
            <H3>Set up your environment.</H3>

            <ul className="step-text">
              <li className="bullet">
                Add the required environment variables, documented in{' '}
                <Link to={PERSONA_ENV_SCHEMA_LINK}>.env.schema.</Link>
              </li>
              <li className="bullet">Install required dependencies node, mongodb, and npm.</li>
            </ul>
          </div>
          <div className="yellow-bar" />
        </div>
      </div>

      <div className="columns py3">
        <div className="column is-3">
          <H2 className="pb1">3</H2>
          <div>
            <H3>Start your server.</H3>

            <div className="py3">
              <div>
                Persona is now running and you can access it at{' '}
                <Link to={PERSONA_LOCAL_LINK}>{PERSONA_LOCAL_LINK}</Link>.
              </div>
            </div>
          </div>
          <div className="yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['npm start']} />
        </div>
      </div>
    </GettingStarted>

    {/*Footer */}

    <BottomCallout className="justify-center">
      <Callout
        icon="githubYellow"
        className="center"
        description="Persona provides an easy-to-use solution for storing profile information"
      >
        <Button
          icon="githubWhite"
          iconAlt="github icon"
          link={productsDict.persona.githubUrl}
          size="medium"
          type="primary"
        >
          Get Started
        </Button>
      </Callout>
    </BottomCallout>
  </main>
);

export default PersonaPage;
