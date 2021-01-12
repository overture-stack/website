import React from 'react';
import Helmet from 'react-helmet';
import {
  H2,
  H3,
  ProductFeature,
  ProductFeatureRow,
  GridFeature,
  ProductHero,
  GettingStarted,
  BottomCallout,
  Button,
  Callout,
  Terminal,
} from 'components';
import productsDict from 'meta/products-dict';

const featureGridData = [
  [
    {
      header: 'Data Integrity',
      details:
        'Leave corrupted files behind as downloaded files are always verified against their MD5sum.',
      icon: 'target',
    },

    {
      header: 'Tracks and validate',
      details: 'The transfer protocols allow setup with any public or private cloud service.',
      icon: 'target',
    },
  ],

  [
    {
      header: 'Pick up where you left off',
      details: 'Score allows you to resume file transfer when a process stops mid-transfer.',
      icon: 'target',
    },
  ],
];

const ScorePage = () => (
  <main className="Score">
    {/* Metadata */}
    <Helmet>
      <title>Overture Products - Score </title>
      <meta
        name="description"
        content="Score facilitates the transfer and storage of your data seamlessly for cloud-based projects. File bundling, resumable downloads, and BAM/CRAM slicing make data transfer fast and smooth."
      />
      <meta
        name="keywords"
        content="Overture, data science software, bioinformatics software, open-source software, cancer research, cloud-based storage, BAM slicing, CRAM slicing, data integrity, data transfer, genomic solutions, Ontario Institute for Cancer Research, OICR"
      />
    </Helmet>

    {/* Hero */}
    <ProductHero
      title="Score"
      subTitle="Transfer data quickly and easily to and from any cloud-based storage system."
      cardText="Score facilitates the transfer and storage of your data seamlessly for cloud-based projects. File bundling, resumable downloads, and BAM/CRAM slicing make data transfer fast and smooth."
      getStartedLink={productsDict.score.github}
      logo="logoScore"
      progressType="ga"
      badge={{ color: 'pink', text: 'Generate & Upload' }}
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

    {/* List of Features on Grey Background*/}
    <GridFeature data={featureGridData} />

    {/* Getting Started */}
    <GettingStarted>
      {/* Getting Started: Step 1 */}

      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">1</H2>
          <div>
            <H3>Build the Score server.</H3>
            <div className="py3">
              This will be your users method of interfacing with the cloud-based service you choose
              to store your data on.
            </div>
          </div>
          <div className="yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['mvn -am -pl score-server']} />
        </div>
      </div>

      {/* Getting Started: step 2 */}

      <div className="columns Step">
        <div className="column is-3">
          <H2 className="pb1">2</H2>
          <div>
            <H3>Build the Score client.</H3>

            <div className="py3">
              The Score client communicates with the Score server, which uploads and downloads your
              files.
            </div>
          </div>
          <div className="yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['mvn -am -pl score-client']} />
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
        <Button
          type="primary"
          size="medium"
          externalLink={productsDict.score.github}
          icon="githubWhite"
        >
          Get Started
        </Button>
      </Callout>
    </BottomCallout>
  </main>
);

export default ScorePage;
