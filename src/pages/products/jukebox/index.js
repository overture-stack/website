import React from "react";
import {
  ProductFeature,
  ProductFeatureRow
} from "../../../components/ProductFeature";
import ProductTarget from "../../../components/ProductTarget";
import ProductHero from "../../../components/ProductHero";
import Terminal from "../../../components/Terminal/index";
import GettingStarted from "../../../components/GettingStarted/index";
import {BottomCallout, Callout} from "../../../components/BottomCallout/index";
import { H2, H4 } from "../../../components/Typography/index";
import Icon from "../../../components/Icon/index";
import "./style.scss";

// images
import azure from "./imgs/azure.svg";
import pgsql from "./imgs/pgsql.png";
import aws from "./imgs/aws.svg";

const SongPage = () => (
  <main className="Jukebox">
    {/* Hero */}
      {/*  TODO : dangerously set inner html to get links in here.*/}
    <ProductHero
      title="Jukebox"
      subTitle="Spinning up interactive development environments is hard!"
      cardText="Jukebox automates set-up and deployment of JupyterHub.  Your users can access personal Jupyter notebooks in one click to do science right from the web browser in a live,  collaborative environment.  "
      getStartedLink="https://github.com/overture-stack/song"
      logo="logoJukebox"
      badge={{color: "yellow", text: "Analysis"}}
    />

    {/* Features  */}
    <ProductFeatureRow>
      <ProductFeature
        header="Quick start"
        icon="power"
        details="The setup has been done for you, all that’s left for you to do is your research."
      />
      <ProductFeature
        header="Contained"
        icon="spiral"
        iconSize={54}
        details="Users operate in a virtual machine, so everything is contained. Nothing can be broken, so experiment away with the API and data sets."
      />

      <ProductFeature
        header="Automation"
        icon="cloudSquare"
        details="Cloud deployment automation through OpenStack Ansible. "
      />
    </ProductFeatureRow>

    {/* Target Features Things */}
    <section className="columns is-12 my4">
      {/* top row */}
      <article className="column is-half p0">
        <div className="target-box box-left bg-grey">
          <div className="">
            <ProductTarget
              header="Learn"
              details="This environment allows you to learn as you go without having to do any of the setup yourself."
            />
          </div>
        </div>

        <div className="target-box box-left bg-grey">
          <div className="">
            <ProductTarget
              header="Experiment"
              details="Forget the expense. Now you can run experiments on datasets cost effectively and worry free."
            />
          </div>
        </div>
      </article>

      {/* bottom row */}
      <article className="column is-half p0">
        <div className="target-box box-right bg-grey">
          <div className="">
            <ProductTarget
              header="Collaborative"
              details="Jupyter Hub allows multiple people within your group to use and access the notebooks."
            />
          </div>
        </div>

        <div className="target-box box-right bg-grey">
          <div className="">
            <ProductTarget
              header="Cloud-based"
              details="Cloud deployment for data co-location, take your analysis to the data."
            />
          </div>
        </div>
      </article>
    </section>

    {/* Getting Started /  Terminals */}

    <GettingStarted pinnedLink="hii">
      {/* Getting Started: Step 1 */}

      <div className="columns py3">
        <div className="column is-3">
          <H2 className="pb1">1</H2>
          <div>
            <H4> To set up locally, clone the Jupyter repository. </H4>
            <div className="py3">Edit default permissions and configurations if needed.</div>
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
            <H4>Build the Score client</H4>

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

    {/* Footer */}
    <BottomCallout>

      <Callout
        icon="githubYellow"
        description="A flexible data model for tracking your genomic data across the cloud."
        >
        <button className="button is-primary is-medium mt2">
          <Icon size={24} img="githubWhite" />
          <div className="ml1 text-white">Get Started</div>
        </button>
      </Callout>

      <Callout
        icon="pageWhite"
        description="Using JWT's with Spring Security's @PreAuthorize annotation for method specific security."
        >
        <button className="button is-primary is-medium mt2">
          <Icon size={24} img="githubWhite" />
          <div className="ml1 text-white">Get Started</div>
        </button>
      </Callout>

    </BottomCallout>
  </main>
);

export default SongPage;
