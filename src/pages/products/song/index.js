import React from 'react'
import ProductFeature from '../../../components/ProductFeature'
import ProductTarget from '../../../components/ProductTarget'
import ProductHero from '../../../components/ProductHero'
import Terminal from '../../../components/Terminal/index'
import GettingStarted from '../../../components/GettingStarted/index'
import BottomCallout from '../../../components/BottomCallout/index'
import { H2, H4 } from '../../../components/Typography/index'
import Icon from '../../../components/Icon/index'
import './style.scss'

// images
import azure from './imgs/azure.png'
import pgsql from './imgs/pgsql.png'
import aws from './imgs/aws.png'

const SongPage = () => (
  <main className="Song">
    {/* Hero */}
    <ProductHero
      title="Song"
      subTitle="Quickly and reliably track genome data scattered across multiple Cloud storage systems."
      cardText="Song is an open source system for validating and tracking metadata about raw data submissions, assigning identifiers to entities of interest, and managing the state of the raw data with regards to publication and access."
      logo="logoSong"
    />

    {/* Features  */}
    <section className="container py4">
      <div className="columns column is-10 is-offset-1">
        <div className="column is-one-third px3">
          <ProductFeature
            header="Scalable"
            icon="security"
            details="Designed to handle the volume of your requests in an efficient and timely manner."
          />
        </div>

        <div className="column is-one-third px3">
          <ProductFeature
            header="Easy to adopt"
            icon="download"
            iconSize={54}
            details="Relying on a standard REST API. Get started running SONG with two Docker commands."
          />
        </div>

        <div className="column is-one-third px3">
          <ProductFeature
            header="Accurate and efficient"
            icon="user"
            details="Specifically designed to track genome data, SONG tracks and validates your submissions."
          />
        </div>
      </div>
    </section>

    {/* Target Features Things */}
    <section className="columns is-12 my4">
      {/* top row */}
      <article className="column is-half p0">
        <div className="target-box bg-grey">
          <div className="">
            <ProductTarget
              header="It's fast"
              details="Allows asynchronous uploads, so that invalid uploads don't stops valid ones from going through. Processes submissision with billlions of entities in hours."
              icon="security"
            />
          </div>
        </div>

        <div className="target-box bg-grey">
          <div className="">
            <ProductTarget
              header="Tracks and validate"
              details="Automatically validates your metadata submissions against a JSON schema to ensure that all your metadata is correct before it gets published."
              icon="security"
            />
          </div>
        </div>
      </article>

      {/* bottom row */}
      <article className="column is-half p0">
        <div className="target-box bg-grey">
          <div className="">
            <ProductTarget
              header="Turn-key Solution"
              details="Uses industry standard technologies, like JSON, YAML, and REST, so you don't have to learn anything new or difficult to use Song."
              icon="security"
            />
          </div>
        </div>

        <div className="target-box bg-grey">
          <div className="">
            <ProductTarget
              header="Connected metadata"
              details="Supports ACLs out of the box, so you control who and how your metadata gets published. Easy to keep track of which researcher updated which data set, and when."
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
            <H4>
              Download the Song client - Sing, our command line interface.
            </H4>
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal
            prompts={['git clone https://github.com/overture-stack/SONG.git']}
          />
        </div>
      </div>

      {/* Getting Started: step 2 */}

      <div className="columns py3">
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
              'cd SONG/song-server',
              'mvn spring-boot:run -Drun.profiles=dev,test',
            ]}
          />
        </div>
      </div>

      {/* Getting Started: step 3 */}

      <div className="columns py3">
        <div className="column is-3">
          <H2 className="pb1">3</H2>
          <div>
            <H4>Get started running Song with just two Docker commands.</H4>
          </div>
          <div className="mt3 yellow-bar" />
        </div>

        <div className="column is-8 is-offset-1 self-center">
          <Terminal prompts={['docker-compose build', 'docker-compose up']} />
        </div>
      </div>

      {/* Storage Solutions */}

      <section className="py4">
        <H2 className="center pb3">Your choice of storage system</H2>

        <div className="flex column items-center is-10 is-offset-1 justify-around pb4">
          <img src={aws} style={{ width: '120px' }} />
          <img src={azure} style={{ width: '175px' }} />
          <img src={pgsql} style={{ width: '120px' }} />
        </div>

        <div className="center">
          Or use our storage system
          <a href="#"> Score ></a>
        </div>
      </section>
    </GettingStarted>

    {/* Footer */}
    <BottomCallout>
      <div className="column is-third pr4">
          <Icon size={32} img="githubYellow" />
          <div className="pt3 text-white">
            {' '}
            A flexible data model for tracking your genomic data across the
            cloud.{' '}
          </div>
          <button className="button is-primary is-medium mt3">
            <Icon size={24} img="githubWhite" />
            <div className="ml1 text-white">Get Started</div>
          </button>
        </div>

        <div className="column is-third pr4">
          <Icon size={32} img="rocketWhite" />
          <div className="pt3 text-white">
            {' '}
            Read about how this product has been utilized within our case
            studies:{' '}
          </div>
          <div className="flex flex-column pt2">
            <a className="text-green bold py1" href="#">
              Kids First DRC >
            </a>
            <a className="text-green bold" href="#">
              ICGC ARGO >
            </a>
          </div>
        </div>

        <div className="column is-third pr4">
          <Icon size={32} img="pageWhite" />
          <div className="pt3 text-white">
            Using JWT's with Spring Security's @PreAuthorize annotation for
            method specific security.
          </div>

          <button className="button is-primary is-medium mt3">
            <Icon size={24} img="githubWhite" />
            <div className="ml1 text-white">Get Started</div>
          </button>
        </div>
    </BottomCallout>
  </main>
)

export default SongPage
