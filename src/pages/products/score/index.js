import GettingStarted from "../../../components/GettingStarted/index";
import Helmet from 'react-helmet'
import {
  ProductFeature,
  ProductFeatureRow
} from "../../../components/ProductFeature";
import ProductHero from "../../../components/ProductHero";
import {
  BottomCallout,
  Callout
} from "../../../components/BottomCallout/index";
import Icon from "../../../components/Icon/index";
import Terminal from "../../../components/Terminal/index";
import { H2, H4 } from "../../../components/Typography/index";
import ProductTarget from "../../../components/ProductTarget";
import React from "react";
import "./style.scss";

const ScorePage = () => (
  <main className="Score">
    {/* Metadata */}
    <Helmet>
      <title>Overture Products - Score </title>
      <meta name="description" content="Score facilitates the transfer and storage of your data seamlessly for cloud-based projects. File bundling, resumable downloads, and BAM/CRAM slicing make data transfer fast and smooth."/>
      <meta name="keywords" content="Overture, data science software, bioinformatics software, open-source software, cancer research, cloud-based storage, BAM slicing, CRAM slicing, data integrity, data transfer, genomic solutions, Ontario Institute for Cancer Research, OICR"/>
    </Helmet>

    {/* Hero */}
    <ProductHero
      title="Score"
      subTitle="Transfer data quickly and easily to and from any cloud-based storage system."
      cardText="Score facilitates the transfer and storage of your data seamlessly for cloud-based projects. File bundling, resumable downloads, and BAM/CRAM slicing make data transfer fast and smooth."
      getStartedLink="https://github.com/overture-stack/score"
      logo="logoScore"
      badge={{ color: "pink", text: "Core" }}
    />

    {/* Features  */}

    <ProductFeatureRow>
      <ProductFeature
        header="Genomic solutions"
        icon="dna"
        details="Slice and dice BAM and CRAM files with integrated command line tools."
      />

      <ProductFeature
        header="Accessible"
        icon="fingerSnap"
        iconSize={45}
        details="Once your server is set up, transferring data is simple. Access any data, anytime on all major cloud services."
      />

      <ProductFeature
        header="Streamlined"
        icon="cloud"
        iconSize={68}
        details="Score’s parallel solution makes the upload and download of files efficient and fast."
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
                  header="Data Integrity"
                  details="Leave corrupted files behind as downloaded files are always verified against their MD5sum."
                />
              </div>
            </div>

            <div className="column is-half ">
              <div className="target-box">
                <ProductTarget
                  header="Tracks and validate"
                  details="The transfer protocols allow setup with any public or private cloud service."
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
            <div className="column flex justify-center">
              <div className="target-box">
                <ProductTarget
                  header="Pick up where you left off"
                  details="Score allows you to resume file transfer when a process stops mid-transfer."
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

      <div className="columns py3">
        <div className="column is-3">
          <H2 className="pb1">1</H2>
          <div>
            <H4>Build the Score server.</H4>
            <div className="py3">
              This will be your users method of interfacing with the cloud-based
              service you choose to store your data on.
            </div>
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={["mvn -am -pl score-server"]} />
        </div>
      </div>

      {/* Getting Started: step 2 */}

      <div className="columns py3">
        <div className="column is-3">
          <H2 className="pb1">2</H2>
          <div>
            <H4>Build the Score client.</H4>

            <div className="py3">
              The Score client communicates with the Score server, which uploads
              and downloads your files.
            </div>
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={["mvn -am -pl score-client"]} />
        </div>
      </div>
    </GettingStarted>

    {/*Footer */}

    <BottomCallout className="justify-center">
      <Callout
        icon="githubYellow"
        className="center"
        description="Transfer and store your data seamlessly for cloud-based projects."
      >

        <a
          target="_blank"
          href="https://github.com/overture-stack/score"
          className="button is-primary is-medium mt2"
        >
          <Icon size={24} img="githubWhite" />
          <div className="ml1 text-white">Get Started</div>
        </a>
      </Callout>
    </BottomCallout>
  </main>
);

export default ScorePage;
