import React from "react";
import Helmet from "react-helmet";
import {
  H2,
  H4,
  Layout,
  ProductFeature,
  ProductFeatureRow,
  ProductTarget,
  ProductHero,
  GettingStarted,
  BottomCallout,
  Button,
  Callout,
  Terminal
} from "../../../components";

const RiffPage = () => (
  <Layout>
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
        getStartedLink="https://github.com/overture-stack/riff"
        logo="logoRiff"
        progressType="rc"
        badge={{ color: "green", text: "Social" }}
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

      {/* Target Features Things */}

      {/* Target Section */}
      <div className="bg-grey">
        <section className="" style={{ borderBottom: "2px solid white" }}>
          <div className="container">
            {/* top row */}
            <article className="columns mb0">
              <div
                className="column is-half"
                style={{ borderRight: "2px solid white" }}
              >
                <div className="target-box">
                  <ProductTarget
                    header="Short URLs"
                    details="Each Riff can be mapped to by a Short URL which is generated on saving or sharing."
                  />
                </div>
              </div>

              <div className="column is-half ">
                <div className="target-box">
                  <ProductTarget
                    header="Social"
                    details="Allow users to share urls via link, Facebook, Twitter, or LinkedIn."
                  />
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>

      {/* Getting Started */}

      <GettingStarted>
        {/* Getting Started: Step 1 */}

        <div className="columns Step">
          <div className="column is-3">
            <H2 className="pb1">1</H2>
            <div>
              <H4>Install Postgres.</H4>
              <div className="step-text">
                To get started, you'll first need to install a database.
              </div>
            </div>
            <div className="mt3 yellow-bar" />
          </div>

          <div className="column is-8 is-offset-1 self-center">
            <Terminal prompts={["sudo -u postgres psql"]} />
          </div>
        </div>

        {/* Getting Started: step 2 */}

        <div className="columns Step">
          <div className="column is-3">
            <H2 className="pb1">2</H2>
            <div>
              <H4>Clone the git repo.</H4>
            </div>
            <div className="mt3 yellow-bar" />
          </div>

          <div className="column is-8 is-offset-1 self-center">
            <Terminal
              prompts={["git clone git@github.com:overture-stack/riff.git"]}
            />
          </div>
        </div>

        <div className="columns Step">
          <div className="column is-3">
            <H2 className="pb1">3</H2>
            <div>
              <H4>Set up Riff.</H4>
              <div className="step-text">
                The database schema will be preconfigured as part of the set up!
              </div>
            </div>
            <div className="mt3 yellow-bar" />
          </div>

          <div className="column is-8 is-offset-1 self-center">
            <Terminal prompts={["mvn spring-boot:run"]} />
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
            externalLink="https://github.com/overture-stack/riff"
            icon="githubWhite"
          >
            Get Started
          </Button>
        </Callout>
      </BottomCallout>
    </main>
  </Layout>
);

export default RiffPage;
