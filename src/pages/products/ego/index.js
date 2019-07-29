import React from "react";
import Helmet from "react-helmet";
import {
  H2,
  H4,
  Button,
  Layout,
  ProductFeature,
  ProductFeatureRow,
  ProductHero,
  GettingStarted,
  BottomCallout,
  Callout,
  Terminal
} from "../../../components";
import screenshot from "./assets/screenshot.png";
import "./style.scss";

const EgoPage = () => (
  <Layout>
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
        getStartedLink="https://github.com/overture-stack/ego"
        badge={{ color: "blue", text: "Access & Download" }}
        logo="logoEgo"
        progressType="rc"
      />

      {/* Features  */}
      <ProductFeatureRow>
        <ProductFeature
          header="Single sign on"
          icon="security"
          details="No more usernames and passwords for your users to remember."
        />

        <ProductFeature
          header="Scalable"
          icon="barGraph"
          details="No sessions management means less code to write."
        />

        <ProductFeature
          header="User Administration"
          icon="user"
          details="Manage users, groups and applications."
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
                  details="Ego uses JSON Web Tokens (JWT) for authorization."
                />
              </div>

              <div className="py2">
                <ProductFeature
                  size="small"
                  icon="target"
                  header="It's secure"
                  details="Built with modern frameworks such as Spring Security, you can rest assured that users will be authorized securely."
                />
              </div>

              <div className="py2">
                <ProductFeature
                  size="small"
                  icon="target"
                  header="Scale up"
                  details="There are no limits to the number of applications you can use Ego alongside."
                />
              </div>
            </div>

            {/* screenshot */}
            <div className="column is-8-desktop  is-offset-1 flex items-center">
              <img src={screenshot} />
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Terminals / steps */}

      <GettingStarted pinnedLink="http://ego.readthedocs.io/en/latest/">
        {/* Getting Started: Step 1 */}

        <div className="columns Step">
          <div className="column is-3">
            <H2 className="pb1">1</H2>
            <div>
              <H4>To get started, you’ll first need to set up a database.</H4>
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
              prompts={[
                "sudo -u postgres psql",
                "create database ego;",
                "q  exit out of psql"
              ]}
            />
          </div>
        </div>

        {/* Getting Started: step 2 */}

        <div className="columns Step">
          <div className="column is-3">
            <H2 className="pb1">2</H2>
            <div>
              <H4>Define the tables in your database.</H4>

              <ul className="step-text">
                <li className="bullet">
                  Copy the{" "}
                  <a
                    target="_blank"
                    href="https://github.com/overture-stack/ego/blob/develop/src/main/resources/schemas/01-psql-schema.sql"
                  >
                    psql-schema.sql
                  </a>{" "}
                  file locally. {/* TJS NEEDS LINK */}
                </li>
                <li className="bullet">
                  Execute the SQL script to setup the tables.{" "}
                  {/* TJS NEEDS LINK */}
                </li>
              </ul>
            </div>
            <div className="yellow-bar" />
          </div>

          <div className="column is-8 is-offset-1 self-center">
            <Terminal
              prompts={["psql -U postgres -d ego -a -f psql-schema.sql"]}
            />
          </div>
        </div>

        {/* Getting Started: step 3 */}

        <div className="columns Step">
          <div className="column is-3">
            <H2 className="pb1">3</H2>
            <div>
              <H4>Run one of the three supported Ego profiles.</H4>

              <ul className="step-text">
                <li className="bullet">
                  <span className="bold">Default: </span>The most simple profile
                  which  allows you to test API endpoints with a valid JWT.
                </li>

                <li className="bullet">
                  <span className="bold">Auth: </span>
                  The next step up, which allows you to include JWT validations.
                </li>

                <li className="bullet">
                  <span className="bold">Secure: </span>
                  Our highest level, which allows integration with https
                  protocol.
                </li>
              </ul>
            </div>
            <div className="yellow-bar" />
          </div>

          <div className="column is-8 is-offset-1 self-center">
            <Terminal prompts={["mvn clean package", "mvn spring-boot:run"]} />
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
            type="primary"
            size="medium"
            externalLink="https://github.com/overture-stack/ego"
            icon="githubWhite"
          >
            Get Started
          </Button>
        </Callout>
      </BottomCallout>
    </main>
  </Layout>
);

export default EgoPage;
