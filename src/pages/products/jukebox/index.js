import React from 'react';
import Helmet from 'react-helmet';
import {
  BottomCallout,
  Button,
  Callout,
  GettingStarted,
  GridFeature,
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

import './style.scss';

const featureGridData = [
  [
    {
      header: 'Learn',
      details:
        'This environment allows you to learn as you go without having to do any of the setup yourself.',
      icon: 'target',
    },

    {
      header: 'Experiment',
      details:
        'Forget the expense. Now you can run experiments on datasets cost effectively and worry free.',
      icon: 'target',
    },
  ],

  [
    {
      header: 'Collaborative',
      details:
        'Jupyter Hub allows multiple people within your group to use and access the notebooks.',
      icon: 'target',
    },

    {
      header: 'Cloud-based',
      details: 'Cloud deployment for data co-location, take your analysis to the data.',
      icon: 'target',
    },
  ],
];

const JukeboxPage = () => (
  <main className="Jukebox">
    {/* Metadata */}
    <Helmet>
      <title>Overture Products - Jukebox </title>
      <meta name="description" content="" />
      <meta
        name="keywords"
        content="Overture, data science software, bioinformatics software, open-source software, cancer research, cloud-based storage, genomic metadata, data submission, REST API, JSON, YAML, REST, Amazon Web Services, Microsoft Azure, PostgreSQL, Ontario Institute for Cancer Research, OICR"
      />
    </Helmet>

    {/* Hero */}
    {/*  Ugly html inside props so that I can add links to the cardText..*/}
    <ProductHero
      title="Jukebox"
      subTitle="Spinning up interactive development environments is hard!"
      cardText={
        <div>
          Jukebox automates set-up and deployment of{' '}
          <Link to="http://jupyter.org/index.html">JupyterHub</Link>. Your users can access personal{' '}
          <Link to="http://jupyter.org/install.html">Jupyter notebooks</Link> in one click to do
          science right from the web browser in a live, collaborative environment.
        </div>
      }
      getStartedLink={productsDict.jukebox.githubUrl}
      logo="logoJukebox"
      progressType="rc"
      badge={{ color: 'red', text: 'Analyze & Discover' }}
    />

    {/* Features  */}
    <ProductFeatureRow>
      <ProductFeature
        header="Quick start"
        icon="power"
        iconSize={92}
        details={
          <div>
            The setup has been done for you, all that’s left for you to do is your research.
          </div>
        }
      />
      <ProductFeature
        header="Contained"
        icon="spiral"
        iconSize={72}
        details={
          <div>
            Users operate in a virtual machine, so everything is contained. Nothing can be broken,
            so experiment away with the API and data sets.
          </div>
        }
      />

      <ProductFeature
        header="Automation"
        icon="cloudSquare"
        iconSize={82}
        details={<div>Cloud deployment automation through OpenStack Ansible.</div>}
      />
    </ProductFeatureRow>

    {/* Target Features Things */}
    <GridFeature data={featureGridData} />

    {/* Getting Started /  Terminals */}
    <GettingStarted pinnedLink={productsDict.jukebox.githubUrl}>
      {/* Getting Started: Step 1 */}

      <div className="columns Step">
        <div className="column is-3-desktop">
          <H2 className="pb1">1</H2>
          <div>
            <H4> To set up locally, clone the Jupyter repository. </H4>
            <div className="step-text">
              {' '}
              Edit default permissions and configurations if needed.{' '}
            </div>
          </div>
          <div className="mt1 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['git clone https://github.com/overture-stack/Jupyter.git']} />
        </div>
      </div>

      {/* Getting Started: step 2 */}

      <div className="columns Step">
        <div className="column is-3-desktop">
          <H2 className="pb1">2</H2>
          <div>
            <H4>Use Ansible to deploy Jukebox.</H4>
          </div>
          <div className="yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['ansible-playbook setup-jukebox.yml']} />
        </div>
      </div>

      {/* Getting Started: step 3 */}

      <div className="columns Step">
        <div className="column is-3-desktop">
          <H2 className="pb1">3</H2>
          <div>
            <H4>Learn, explore, experiment.</H4>
            <div className="step-text">
              Experiment with scientific packages such as NumPy, SciPy, Pandas and Seaborn and
              languages including Python, Scala and R.
            </div>
          </div>
          <div className="yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <UrlBar prompts={[<div>Visit http://localhost: &lt;your port number&gt;</div>]} />
        </div>
      </div>
    </GettingStarted>

    {/* Footer */}
    <BottomCallout>
      <Callout
        icon="githubYellow"
        description="Explore and manipulate data without having to set up the environment yourself."
      >
        <Button
          className="mt2"
          icon="githubWhite"
          link={productsDict.jukebox.githubUrl}
          size="medium"
          type="primary"
        >
          Get Started
        </Button>
      </Callout>

      <Callout
        icon="pageWhite"
        description="Drops of Jupyter...or, How I Learned To Stop Worrying and Dockerized JupyterHub"
      >
        <Button
          className="mt2"
          link="http://softeng.oicr.on.ca/kevin_hartmann/2018/03/28/Drops-of-Jupyter/"
          size="medium"
          type="primary"
        >
          Related Blog Post
        </Button>
      </Callout>
    </BottomCallout>
  </main>
);

export default JukeboxPage;
