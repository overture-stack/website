import React from "react";
import {
  ProductFeature,
  ProductFeatureRow
} from "../../../components/ProductFeature";
import ProductTarget from "../../../components/ProductTarget";
import ProductHero from "../../../components/ProductHero";
import {Terminal, UrlBar} from "../../../components/Terminal/index";
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
  <main className="Jukebox">
    {/* Hero */}
    {/*  Ugly html inside props so that I can add links to the cardText..*/}
    <ProductHero
      title="Jukebox"
      subTitle="Spinning up interactive development environments is hard!"
      cardText={
        <div>
          Jukebox automates set-up and deployment of
          <a target="_blank" href="http://jupyter.org/index.html">
              {" "} JupyterHub
          </a>. Your users can access personal
          <a target="_blank" href="http://jupyter.org/install.html">
              {" "} Jupyter notebooks {" "}
          </a>
          in one click to do science right from the web browser in a live,
          collaborative environment.
        </div>
      }
      getStartedLink="https://github.com/overture-stack/jupyter"
      logo="logoJukebox"
      badge={{ color: "yellow", text: "Analysis" }}
    />

    {/* Features  */}
    <ProductFeatureRow>
      <ProductFeature
        header="Quick start"
        icon="power"
        iconSize={92}
        details="The setup has been done for you, all that’s left for you to do is your research."
      />
      <ProductFeature
        header="Contained"
        icon="spiral"
        iconSize={72}
        details="Users operate in a virtual machine, so everything is contained. Nothing can be broken, so experiment away with the API and data sets."
      />

      <ProductFeature
        header="Automation"
        icon="cloudSquare"
        iconSize={82}
        details="Cloud deployment automation through OpenStack Ansible. "
      />
    </ProductFeatureRow>

    {/* Target Features Things */}
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
                  header="Learn"
                  details="This environment allows you to learn as you go without having to do any of the setup yourself."
                />
              </div>
            </div>

            <div className="column is-half py0">
              <div className="target-box">
                <ProductTarget
                  header="Experiment"
                  details="Forget the expense. Now you can run experiments on datasets cost effectively and worry free."
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
                  header="Collaborative"
                  details="Jupyter Hub allows multiple people within your group to use and access the notebooks."
                  icon="security"
                />
              </div>
            </div>

            <div className="column is-half py0">
              <div className="target-box">
                <ProductTarget
                  header="Cloud-based"
                  details="Cloud deployment for data co-location, take your analysis to the data."
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>

    {/* Getting Started /  Terminals */}

    <GettingStarted pinnedLink="https://github.com/overture-stack/Jupyter">
      {/* Getting Started: Step 1 */}

      <div className="columns py3">
        <div className="column is-3">
          <H2 className="pb1">1</H2>
          <div>
            <H4> To set up locally, clone the Jupyter repository. </H4>
            <div className="py3">
              Edit default permissions and configurations if needed.
            </div>
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal
            prompts={[
              "git clone https://github.com/overture-stack/Jupyter.git"
            ]}
          />
        </div>
      </div>

      {/* Getting Started: step 2 */}

      <div className="columns py3">
        <div className="column is-3">
          <H2 className="pb1">2</H2>
          <div>
            <H4>Use Ansible to deploy Jukebox.</H4>
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal
            prompts={["ansible-playbook setup-jukebox.yml"]}
          />
        </div>
      </div>


      {/* Getting Started: step 3 */}

      <div className="columns py3">
        <div className="column is-3">
          <H2 className="pb1">3</H2>
          <div>
              <H4>Learn, explore, experiment.</H4>
            <div className="py3">
                Experiment with scientific packages such as NumPy, SciPy, Pandas and Seaborn and languages including Python, Scala and R.
            </div>
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <UrlBar
            prompts={["Visit http://localhost:<your port number>"]}
          />
        </div>
      </div>

    </GettingStarted>

    {/* Footer */}
    <BottomCallout>
      <Callout
        icon="githubYellow"
        description="Explore and manipulate data without having to set up the environment yourself."
      >
        <a
          target="_blank"
          href="http://github.com/overture-stack/jupyter"
          className="button is-primary is-medium mt2"
        >
          <Icon size={24} img="githubWhite" />
          <div className="ml1 text-white">Get started</div>
        </a>
      </Callout>

      <Callout
        icon="pageWhite"
        description="Drops of Jupyter...or, How I Learned To Stop Worrying and Dockerized JupyterHub"
      >
        <a
          target="_blank"
          href="http://softeng.oicr.on.ca/kevin_hartmann/2018/03/28/Drops-of-Jupyter/"
          className="button is-primary is-medium mt2"
        >
          <div className="ml1 text-white">Related blog post</div>
        </a>
      </Callout>
    </BottomCallout>
  </main>
);

export default SongPage;
