import React from 'react'
import ProductFeature from '../../../components/ProductFeature'
import ProductTarget from '../../../components/ProductTarget'
import ProductHero from '../../../components/ProductHero'
import GettingStarted from '../../../components/GettingStarted/index'
import BottomCallout from '../../../components/BottomCallout/index'
import Icon from '../../../components/Icon/index'
import Terminal from '../../../components/Terminal/index'
import { H2, H4 } from '../../../components/Typography/index'
import screenshot from './images/screenshot.png'
import bg from './images/bg_grey_curved.svg'
import './style.scss'

const EgoPage = () => (
  <main className="Ego">
    {/* Hero */}
    <ProductHero
      title="Ego"
      subTitle="A stateless authority system and user management service for identity providers such as Google and Facebook."
      cardText="Ego provides single sign-on through Facebook, Google and Github, a well as providing an intuitive GUI for painless user management."
      logo="logoEgo"
    />

    {/* Features  */}
    <section className="columns column is-10 is-offset-1 my2">
      <div className="column is-one-third px3">
        <ProductFeature
          header="Single Sign On"
          icon="security"
          details="No more usernames and passwords for your users to remember."
        />
      </div>

      <div className="column is-one-third px3">
        <ProductFeature
          header="Scalable"
          icon="barGraph"
          details="No sessions management means less code to write"
        />
      </div>

      <div className="column is-one-third px3">
        <ProductFeature
          header="User Administration"
          icon="user"
          details="Manage users, groups and applications"
        />
      </div>
    </section>

    {/* Target Features + Screenshot */}
    <section className="bg-curve-grey">
      <div className="columns column is-10 is-offset-1">
        {/* targets */}

        <div className="column pt4 is-3-desktop">
          <div className="py3">
            <ProductTarget
              header="It’s stateless"
              details="Ego uses JSON Web Tokens (JWT) for authentication."
            />
          </div>

          <div className="py3">
            <ProductTarget
              header="It's secure"
              details="Built with modern frameworks such as Spring Security, you can rest assured that users will be authorized securely."
            />
          </div>

          <div className="py3">
            <ProductTarget
              header="Scale up"
              details="There are no limits to the number of applications you can use Ego alongside."
            />
          </div>
        </div>

        {/* screenshot */}
        <div className="column is-8  is-offset-1 flex items-center">
          <img src={screenshot} />
        </div>
      </div>
    </section>

    {/* Getting Started Terminals / steps */}

    <GettingStarted pinnedLink="hii">
      {/* Getting Started: Step 1 */}

      <div className="columns py3">
        <div className="column is-3">
          <H2 className="pb1">1</H2>
          <div>
            <H4>To get started, you’ll first need to setup a database.</H4>
            <ul className="py3">
              <li className="list">Install Postgres. </li>
              <li className="list">
                Create a database: ego with user postgres and empty password
              </li>
            </ul>
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


    <BottomCallout>
      <div className="columns column is-12 is-offset-1">
        <div className="column is-half pr4">
          <Icon size={32} img="githubYellow" />
          <div className="pt3 columns column is-8-desktop text-white">
            Single sign on functionality for your users in multiple microservices.
          </div>
          <button className="button is-primary is-medium mt3">
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
              Kids First DRC >
            </a>
            <a className="text-green bold" href="#">
              HCMI Searchable Catalog >
            </a>
          </div>
        </div>
      </div>
    </BottomCallout>

  </main>
)

export default EgoPage
