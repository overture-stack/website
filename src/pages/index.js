import React from "react";
import "./home/styles.scss";
import { Badge, H1, H2, H4, Hero, Icon, Layout } from "../components";
import Helmet from "react-helmet";
import Link from "gatsby-link";

const BundleCard = ({ header, icon, children }) => (
  <div className="BundleCard">
    <header className="card-header">
      <div className="text-white">{header}</div>
      <Icon img={icon} />
    </header>

    <section className="card-body">{children}</section>
  </div>
);

const HomePage = () => (
  <Layout>
    <main className="HomePage">
      {/* HERO */}

      <Helmet>
        <title>Overture - Software for big data genomic science</title>
        <meta
          name="description"
          content="Overture is a collection of open-source, extendable solutions for big-data genomic science that you can use to support your research."
        />
        <meta
          name="keywords"
          content="Overture, data science software, bioinformatics software, open-source software, cancer research, genomic data, big data, data portals, Ontario Institute for Cancer Research, OICR"
        />
      </Helmet>

      <Hero
        title="Worry less, science more"
        fgImage="img_home"
        subtitle="Overture is a collection of open-source, extendable solutions for big-data genomic science that you can use to support your research."
      >
        <span className="display flex align-center">
          <Link className="py2 pr1 link-magenta" to="case-studies">Check out our products in action</Link>
          <Icon size={12} img="arrowRightMagenta"></Icon>
        </span>
      </Hero>

      {/* Bundle Section */}

      <section className="container">
        <div className="bioinformatics-bundle column ">
          <H2 className="flex-auto pr2">Bioinformatics Core Bundle</H2>
          <div className="pt2" style={{ maxWidth: "700px" }}>
            Data is the essence of our field, Overture’s bioinformatics bundle
            focuses on tracking, transferring and securing genomic data across
            multiple cloud providers.
          </div>

          {/* Hiding for now

        <button className="button is-primary is-medium">Download Core</button>
          * */}
        </div>

        <div className="columns column">
          <Link className="column" to="/products/ego">
            <BundleCard icon="lock" header="Ego">
              <div className="py2">
                Authorization service for identity providers such as Google and
                Facebook.
              </div>
              <div className="link-magenta">
                Learn More <Icon size={12} img="arrowRightMagenta"/>
              </div>
            </BundleCard>
          </Link>

          <Link className="column" to="/products/score">
            <BundleCard icon="database" header="Score">
              <div className="py2">
                Facilitates the transfer and storage of data seamlessly for
                cloud-based projects.
              </div>
              <div className="link-magenta">
                Learn More <Icon size={12} img="arrowRightMagenta"/>
              </div>
            </BundleCard>
          </Link>

          <Link className="column" to="/products/song">
            <BundleCard icon="shield" header="Song">
              <div className="py2">
                Tracks genomic data scattered across multiple cloud storage
                systems.
              </div>
              <div className="link-magenta">
                Learn More <Icon size={12} img="arrowRightMagenta"/>
              </div>
            </BundleCard>
          </Link>

          {/*
        <div className="column ">
          <BundleCard icon="cardStack" header="Indexer">
            <div className="py2">
              Sources and combines data from multiple remote repositories into a single reference index.
            </div>
            <a href="#" className="link-magenta">Learn More &gt;</a>
          </BundleCard>

        </div>
        */}
        </div>

        {/* BADGES */}
        <div className="flex column justify-center">
          <div className="explore-solutions-box">
            <div className="explore-solutions-header">
              {" "}
              Also explore our solutions for:
            </div>
            <div className="badges">
              <div>
                <Badge className="mr2" color="blue">
                  Discovery
                </Badge>
                <Badge className="mr2" color="yellow">
                  Analysis
                </Badge>
              </div>

              <div>
                <Badge className="mr2" color="green">
                  Social
                </Badge>
                <Badge className="mr2" color="red">
                  Management
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Hero */}

      <section className="hero bottom-hero bg-grey">
        <div className="container">
          <div className="columns py3">
            <div className="column is-half">
              <H1 className="bottom-header">
                We created Overture to share our data science components with
                the community.
              </H1>
            </div>

            <div className="column is-half pb4 mt2">
              <span className="pt3">
                Our team has extensive experience building
              </span>
              <span className="bold">
                {" "}
                large scale infrastructures, big data ETL and portals supporting
                genomic research.{" "}
              </span>
              <p className="pt2">
                Built to be reusable and scalable, Overture’s components are
                well documented, actively supported and welcome{" "}
                <a target="_blank" href="https://github.com/overture-stack">
                  external feedback and contributions
                </a>
                . If you need assistance, we also offer{" "}
                <Link to="/services">
                  consulting, support and collaborative services.
                </Link>
              </p>

              <div className="mt3">
                <a
                  className="button is-primary is-medium"
                  href="http://softeng.oicr.on.ca/team/"
                  target="_blank"
                >
                  Meet the team
                </a>

                {/* Hiding for now:
              <button className="button is-primary is-medium">Case studies</button>
                * */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default HomePage;
