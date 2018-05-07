import GettingStarted from '../../../components/GettingStarted/index'
import ProductFeature from '../../../components/ProductFeature'
import ProductHero from '../../../components/ProductHero'
import BottomCallout from '../../../components/BottomCallout/index'
import Icon from '../../../components/Icon/index'
import Terminal from '../../../components/Terminal/index'
import { H2, H4 } from '../../../components/Typography/index'
import ProductTarget from '../../../components/ProductTarget'
import React from 'react'
import './style.scss'

const ScorePage = () => (
  <main className="Score">
    {/* Hero */}
    <ProductHero
      title="Score"
      subTitle="Transfer data quickly and easily to and from any cloud-based storage system."
      cardText="Score facilitates the transfer and storage of your data seamlessly for cloud-based projects. File bundling, resumable downloads, and BAM/CRAM slicing make data transfer fast and smooth."
      logo="logoScore"
    />

    {/* Features  */}

    <section className="container mt4">
      <div className="columns column is-10 is-offset-1">
        <div className="column is-one-third px3">
          <ProductFeature
            header="Genomic solutions"
            icon="dna"
            details="Slice and dice BAM and CRAM files with integrated command line tools."
          />
        </div>

        <div className="column is-one-third px3">
          <ProductFeature
            header="Accessible"
            icon="fingerSnap"
            iconSize={45}
            details="Once your server is set up, transferring data is simple. Access any data, anytime on all major cloud services."
          />
        </div>

        <div className="column is-one-third px3">
          <ProductFeature
            header="Streamlined"
            icon="cloud"
            iconSize={68}
            details="Score’s parallel solution makes the upload and download of files efficient and fast."
          />
        </div>
      </div>
    </section>

    {/* Target Features Things */}
    <section className="my4">
      {/* top row */}
      <article className="columns p0 mb0">
        <div className="target-box column is-half bg-grey">
          <div className="">
            <ProductTarget
              header="Data Integrity"
              details="Leave corrupted files behind as downloaded files are always verified against their MD5sum."
            />
          </div>
        </div>

        <div className="target-box column is-half bg-grey">
          <div className="">
            <ProductTarget
              header="Tracks and validate"
              details="The transfer protocols allow setup with any public or private cloud service."
            />
          </div>
        </div>
      </article>

      {/* bottom row */}
      <article className="column p0">
        <div className="target-box bg-grey">
          <div className="">
            <ProductTarget
              header="Pick up where you left off"
              details="Score allows you to resume file transfer when a process stops mid-transfer."
            />
          </div>
        </div>
      </article>
    </section>

    {/* Getting Started */}

    <GettingStarted pinnedLink="hii">
      {/* Getting Started: Step 1 */}

      <div className="columns py3">
        <div className="column is-3">
          <H2 className="pb1">1</H2>
          <div>
            <H4>Build the Score server</H4>
            <div className="py3">
              This will be your users method of interfacing with the cloud-based
              service you choose to store your data on.
            </div>
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['mvn -am -pl score-server']} />
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
          <Terminal prompts={['mvn -am -pl score-client']} />
        </div>
      </div>
    </GettingStarted>

    {/*Footer */}

    <BottomCallout>
      <div className="columns column is-12 is-offset-1">
        <div className="column is-half pr4">
          <Icon size={32} img="githubYellow" />
          <div className="pt3 columns column is-8-desktop text-white">
            Transfer and store your data seamlessly for cloud-based projects.
          </div>
          <button className="button is-primary is-medium mt2">
            <Icon size={24} img="githubWhite" />
            <div className="ml1 text-white">Get Started</div>
          </button>
        </div>

        <div className="column is-half pr4">
          <Icon size={32} img="rocketWhite" />
          <div className="pt3 columns column is-8-desktop text-white">
            Read about how this product has been utilized within our case
            studies:
          </div>
          <div className="flex flex-column pt2">
            <a className="text-green bold" href="#">
              ICGC Data Portal >
            </a>
          </div>
        </div>
      </div>
    </BottomCallout>
  </main>
)

export default ScorePage
