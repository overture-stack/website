import React from "react";
import Link from "gatsby-link";
import Helmet from 'react-helmet'
import {
  ProductFeature,
  ProductFeatureRow
} from "../../../components/ProductFeature";
import ProductTarget from "../../../components/ProductTarget";
import ProductHero from "../../../components/ProductHero";
import Terminal from "../../../components/Terminal/index";
import GettingStarted from "../../../components/GettingStarted/index";
import {
  BottomCallout,
  Callout
} from "../../../components/BottomCallout/index";
import { H2, H4 } from "../../../components/Typography/index";
import Icon from "../../../components/Icon/index";
import "./style.scss";

// images
import azure from "./imgs/azure.svg";
import pgsql from "./imgs/pgsql.png";
import aws from "./imgs/aws.svg";

const SongPage = () => (
  <main className="Song">

    {/* Metadata */}
    <Helmet>
      <title>Overture Products - Song </title>
      <meta name="description" content="Song is an open source system for validating and tracking metadata from genomic  raw data submissions, assigning identifiers to entities of interest, and managing the state of the raw data with regards to publication and access."/>
      <meta name="keywords" content="Overture, data science software, bioinformatics software, open-source software, cancer research, cloud-based storage, genomic metadata, data submission, REST API, JSON, YAML, REST, Amazon Web Services, Microsoft Azure, PostgreSQL, Ontario Institute for Cancer Research, OICR"/>
    </Helmet>

    {/* Hero */}
    <ProductHero
      title="Song"
      subTitle="Quickly and reliably track genome metadata scattered across multiple Cloud storage systems."
      cardText="Song is an open source system for validating and tracking metadata about raw data submissions, assigning identifiers to entities of interest, and managing the state of the raw data with regards to publication and access."
      getStartedLink="https://github.com/overture-stack/song"
      badge={{ color: "pink", text: "Core" }}
      progressType="ga"
      logo="logoSong"
    />

    {/* Features  */}
    <ProductFeatureRow>
      <ProductFeature
        header="Scalable"
        icon="barGraph"
        details="Designed to handle the volume of your requests in an efficient and timely manner."
      />
      <ProductFeature
        header="Easy to adopt"
        icon="download"
        iconSize={54}
        details="Relying on a standard REST API. Get started running Song with two Docker commands."
      />

      <ProductFeature
        header="Accurate and efficient"
        icon="user"
        details="Specifically designed to track genome data, Song tracks and validates your submissions."
      />
    </ProductFeatureRow>

    {/* Target Section */}
    <div className="bg-grey">
      <section className="" style={{ borderBottom: "2px solid white" }}>
        <div className="container">
          {/* top row */}
          <article className="columns">
            <div
              className="column is-half py0"
              style={{ borderRight: "2px solid white" }}
            >
              <div className="target-box">
                <ProductTarget
                  header="It's fast"
                  details="Allows asynchronous uploads, so that invalid uploads don't stops valid ones from going through. Processes submissision with billlions of entities in hours."
                  icon="security"
                />
              </div>
            </div>

            <div className="column is-half py0">
              <div className="target-box">
                <ProductTarget
                  header="Turn-key Solution"
                  details="Uses industry standard technologies, like JSON, YAML, and REST, so you don't have to learn anything new or difficult to use Song."
                  icon="security"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="" style={{ borderBottom: "2px solid white" }}>
        <div className="container">
          {/* top row */}
          <article className="columns">
            <div
              className="column is-half py0"
              style={{ borderRight: "2px solid white" }}
            >
              <div className="target-box">
                <ProductTarget
                  header="Tracks and validate"
                  details="Automatically validates your metadata submissions against a JSON schema to ensure that all your metadata is correct before it gets published."
                  icon="security"
                />
              </div>
            </div>

            <div className="column is-half py0">
              <div className="target-box">
                <ProductTarget
                  header="Connected metadata"
                  details="Supports ACLs out of the box, so you control who and how your metadata gets published. Easy to keep track of which researcher updated which data set, and when."
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>

    {/* Getting Started /  Terminals */}

    <GettingStarted pinnedLink="https://song-docs.readthedocs.io/en/develop/introduction.html">
      {/* Getting Started: Step 1 */}
      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">1</H2>
          <div>
            <H4>
              Download the Song client - Sing, our command line interface.
            </H4>
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal
            prompts={["git clone https://github.com/overture-stack/SONG.git"]}
          />
        </div>
      </div>

      {/* Getting Started: step 2 */}
      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">2</H2>
          <div>
            <H4>
              Build and run the source using maven with simple instructions.
            </H4>
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal
            prompts={[
              "cd SONG/song-server",
              "mvn spring-boot:run -Drun.profiles=dev,test"
            ]}
          />
        </div>
      </div>

      {/* Getting Started: step 3 */}

      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">3</H2>
          <div>
            <H4>Get started running Song with just two Docker commands.</H4>
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={["docker-compose build", "docker-compose up"]} />
        </div>
      </div>

      {/* Storage Solutions */}

      <section className="py4">
        <H2 className="center pb3">Compatible storage partners</H2>

        <div className="column storage-partners">
          <img src={aws} style={{ width: "120px" }} />
          <img src={azure} style={{ width: "175px" }} />
          <img src={pgsql} style={{ width: "120px" }} />
        </div>

        <div className="center h3">
          Or use our storage system
          <Link className="link-magenta pl1" to="/products/score">
            Score >
          </Link>
        </div>
      </section>
    </GettingStarted>

    {/* Footer */}
    <BottomCallout>
      <Callout
        icon="githubYellow"
        description="A flexible data model for tracking your genomic data across the cloud."
      >
        <a
          target="_blank"
          href="https://github.com/overture-stack/song"
          className="button is-primary is-medium mt2"
        >
          <Icon size={24} img="githubWhite" />
          <div className="ml1 text-white">Get Started</div>
        </a>
      </Callout>

      <Callout
        icon="pageWhite"
        description="Using JWT's with Spring Security's @PreAuthorize annotation for method specific security."
      >
        <a
          target="_blank"
          href="http://softeng.oicr.on.ca/alex_lepsa/2018/03/22/Spring-Method-Security-Using-JWTs/"
          className="button is-primary is-medium mt2"
        >
          <div className="ml1 text-white">Related blog post</div>
        </a>
      </Callout>
    </BottomCallout>
  </main>
);

export default SongPage;
