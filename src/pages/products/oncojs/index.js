import React from 'react';
import Helmet from 'react-helmet';
import {
  BottomCallout,
  Button,
  Callout,
  H2,
  LinkHelper as Link,
  ProductFeature,
  ProductHero,
  WindowGui,
} from 'components';
import productsDict from 'constants/products';
import { GDC_LINK, LOLLIPLOT_EXAMPLE_LINK, ONCOGRID_EXAMPLE_LINK } from 'constants/external-links';

// Screenshots
import lolliplotScreen from './assets/lolliplot_screen.png';
import oncogridScreen from './assets/oncogrid_screen.jpg';
import sapienScreen from './assets/sapien_screen.jpg';
import survivalplotScreen from './assets/survivalplot_screen.jpg';
import pathwayviewerScreen from './assets/pathwayviewer_screen.jpg';

const TargetHeader = ({ children }) => (
  <div>
    <H2>{children}</H2>
    <div className="my3 yellow-bar" />
  </div>
);

const OncoPage = () => (
  <main className="OncoJs">
    {/* Metadata TODO - get updated metadata */}
    <Helmet>
      <title>Overture Products - Oncojs </title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
    </Helmet>

    {/* Hero */}
    <ProductHero
      title="OncoJS"
      subTitle="Bring data to life with stunning visualizations and real-time analysis."
      cardText="A picture is worth a thousand data points, so we created OncoJS to help see the science! Interactive and beautifully styled components that complete real-time analysis can bring your visualizations to the next level."
      getStartedLink={productsDict.oncojs.githubUrl}
      badge={{ color: 'red', text: 'Analyze & Discover' }}
      logo="logoOncojs"
      progressType="ga"
    />

    {/* Target Features + Screenshot */}

    {/* SAPIEN */}
    <section className="pb4">
      <div className="container">
        <div className="columns column items-center pt4">
          <div className="column is-5-desktop pt2">
            <TargetHeader>Sapien</TargetHeader>

            <p>Correlate data to an interactive map of the human body.</p>

            <div className="">
              <ProductFeature
                size="small"
                icon="target"
                className="p0"
                details={
                  <div>
                    Provide an opportunity for your users to learn and explore data visually.
                  </div>
                }
              />
            </div>

            <div className="">
              <ProductFeature
                size="small"
                icon="target"
                className="p0"
                details={
                  <div>
                    Deliver an interactive experience for users to consume key information and data.
                  </div>
                }
              />
            </div>

            <div className="mt2">
              <Link className="bold text-magenta" to={GDC_LINK}>
                Live example &gt;
              </Link>
            </div>
          </div>
          {/* screenshot */}
          <div className="column is-offset-1 flex items-center">
            <WindowGui>
              <img src={sapienScreen} />
            </WindowGui>
          </div>
        </div>
      </div>
    </section>

    {/* LOLLIPOP */}
    <section className="pb4 bg-grey">
      <div className="container">
        <div className="columns column items-center pt4">
          {/* screenshot */}
          <div className="column is-6 flex items-center">
            <WindowGui>
              <img src={lolliplotScreen} />
            </WindowGui>
          </div>
          <div className="column pt2 is-5-desktop pl3 pt2">
            <TargetHeader>Lollipop</TargetHeader>

            <p className="pb2"> Visualize the location of mutations on a protein structure. </p>

            <div className="">
              <ProductFeature
                size="small"
                icon="target"
                className="p0"
                details={<div>Lollipop height is based on cohort frequency.</div>}
              />
            </div>

            <div className="">
              <ProductFeature
                size="small"
                icon="target"
                className="p0"
                details={<div>Zoom in/out of protein domains.</div>}
              />
            </div>

            <div className="">
              <ProductFeature
                size="small"
                icon="target"
                className="p0"
                details={<div>Pass in a d3 object (v3 or v4) to generate your plot.</div>}
              />
            </div>

            <div className="mt2">
              <Link className="bold text-magenta" to={LOLLIPLOT_EXAMPLE_LINK}>
                Live example &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ONCOGRID */}
    <section className="pb4">
      <div className="container">
        <div className="columns column items-center pt4">
          <div className="column pt2 is-5-desktop pt2">
            <TargetHeader>Oncogrid</TargetHeader>

            <p className="pb2">
              Identify trends in mutation co-occurrence by plotting mutations and donors together on
              an Oncogrid.
            </p>

            <div className="">
              <ProductFeature
                size="small"
                icon="target"
                className="p0"
                details={
                  <div>
                    Customize your grid by plotting clinical data tracks along the same axis.
                  </div>
                }
              />
            </div>

            <div className="">
              <ProductFeature
                size="small"
                icon="target"
                className="p0"
                details={
                  <div>Interactively explore mutation trends with heat-map view and scrolling.</div>
                }
              />
            </div>

            <div className="">
              <ProductFeature
                size="small"
                icon="target"
                className="p0"
                details={<div>Get started easily with examples in API documents.</div>}
              />
            </div>

            <div className="mt2">
              <Link className="bold text-magenta" to={ONCOGRID_EXAMPLE_LINK}>
                Live example &gt;
              </Link>
            </div>
          </div>
          {/* screenshot */}
          <div className="column is-offset-1 flex items-center">
            <WindowGui>
              <img src={oncogridScreen} />
            </WindowGui>
          </div>
        </div>
      </div>
    </section>

    {/* SURVIVAL PLOT */}

    <section className="pb4 bg-grey">
      <div className="container">
        <div className="columns column items-center pt4">
          {/* screenshot */}
          <div className="column is-6 flex items-center">
            <WindowGui>
              <img src={survivalplotScreen} />
            </WindowGui>
          </div>
          <div className="column pt2 is-5-desktop pl3 pt2">
            <TargetHeader>Survivalplot</TargetHeader>

            <p className="pb2">
              Visualize and compare datasets to determine probable health outcomes and their
              frequency in patient groups.
            </p>

            <div className="">
              <ProductFeature
                size="small"
                icon="target"
                className="p0"
                details={<div>View summary data and observe survival patterns over time.</div>}
              />
            </div>

            <div className="">
              <ProductFeature
                size="small"
                icon="target"
                className="p0"
                details={<div>Compare different patterns and trends using expansive datasets.</div>}
              />
            </div>

            <div className="">
              <ProductFeature
                size="small"
                icon="target"
                className="p0"
                details={<div>Easily download summaries and graphs for 360 degree analysis.</div>}
              />
            </div>

            <div className="mt2">
              <Link className="bold text-magenta" to={SURVIVALPLOT_EXAMPLE_LINKS}>
                Live example &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* PATHWAYVIEWER */}

    <section className="pb4">
      <div className="container">
        <div className="columns column items-center pt4">
          <div className="column pt2 is-5-desktop pt2">
            <TargetHeader>Pathwayviewer</TargetHeader>

            <p className="pb2">
              {' '}
              A straightforward component for visualization of reactome pathways.
            </p>

            <div className="">
              <ProductFeature
                size="small"
                icon="target"
                className="p0"
                details={
                  <div>See the biology: visualize reactome data in a quick and easy way.</div>
                }
              />
            </div>

            <div className="">
              <ProductFeature
                size="small"
                icon="target"
                className="p0"
                details={
                  <div>Explore your data: understand pathways and predict their implications.</div>
                }
              />
            </div>

            <div className="">
              <ProductFeature
                size="small"
                icon="target"
                className="p0"
                details={<div> View and synthesize data in the context of different pathways.</div>}
              />
            </div>

            <div className="mt2">
              <Link className="bold text-magenta" to={GDC_LINK}>
                Live example &gt;
              </Link>
            </div>
          </div>

          {/* screenshot */}
          <div className="column is-offset-1 flex items-center">
            <WindowGui>
              <img src={pathwayviewerScreen} />
            </WindowGui>
          </div>
        </div>
      </div>
    </section>

    {/* Getting Started Terminals / steps */}

    <BottomCallout>
      <Callout
        icon="githubYellow"
        description="Bring data to life with stunning visualizations and real-time analysis."
        className="center"
      >
        <Button
          icon="githubWhite"
          link={productsDict.oncojs.githubUrl}
          size="medium"
          type="primary"
        >
          Get Started
        </Button>
      </Callout>
    </BottomCallout>
  </main>
);

export default OncoPage;
