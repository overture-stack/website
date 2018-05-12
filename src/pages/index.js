import Icon from "../components/Icon/index";
import React, { Component } from "react";
import PropTypes from "prop-types";
import heroImg from "./home/hero_img.svg";
import "./home/styles.scss";
import { H1, H2, H4 } from "../components/Typography/index";
import Badge from "../components/Badge/index";
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
  <main className="HomePage">
    {/* HERO */}

    <section className="hero bg-green science-hero">
      <div className="hero-body">
        <div className="container flex">
          <div className="flex flex-column column is-half justify-center">
            <h1 className="t-jumbo mb3">Worry less, Science More</h1>
            <H4 className="py3">
              Overture is a collection of open-source, extendable solutions for
              big-data genomic science that you can use to support your
              research.
            </H4>
          </div>

          <div className="column is-half is-hidden-mobile">
            <img src={heroImg} />
          </div>
        </div>
      </div>
    </section>

    {/* Bundle Section */}

    <section className="container mt4 pt2">
      <div className="flex column items-center py4">
        <H1 className="flex-auto pr2">
          Get started with our bioinformatics core bundle:
        </H1>

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
            <Link to="/products/ego" className="link-magenta">
              Learn More &gt;
            </Link>
          </BundleCard>
        </Link>

        <Link className="column" to="/products/score">
          <BundleCard icon="database" header="Score">
            <div className="py2">
              Facilitates the transfer and storage of data seamlessly for
              cloud-based projects.
            </div>
            <Link to="/products/score" className="link-magenta">
              Learn More &gt;
            </Link>
          </BundleCard>
        </Link>

        <Link className="column" to="/products/song">
          <BundleCard icon="shield" header="Song">
            <div className="py2">
              Tracks genomic data scattered across multiple cloud storage
              systems.
            </div>
            <Link to="/products/song" className="link-magenta">
              Learn More &gt;
            </Link>
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
      <div className="flex column py3">
        <div className="flex items-center">
          <H2 className="flex-auto pr2"> Then explore our solutions for:</H2>
          <div>
            <Badge className="mr2" color="blue">
              Discovery
            </Badge>
            <Badge className="mr2" color="yellow">
              Analysis
            </Badge>
            <Badge className="mr2" color="green">
              Social
            </Badge>
            <Badge className="mr2" color="red">
              Management
            </Badge>
          </div>
        </div>
      </div>
    </section>

    {/* Bottom Hero */}

    <section className="hero bottom-hero bg-grey">
      <div className="hero-body container">
        <div className="columns">
          <div className="column is-half">
            <h1 className="bottom-header">
              We created Overture to share our data science components with the
              community.
            </h1>
          </div>

          <div className="column is-half mt2">
            <span className="pt3">
              Overture uses OICR’s experience in building
            </span>
            <span className="bold">
              {" "}
              large scale infrastructures, big data ETL and portals supporting
              genomic research.{" "}
            </span>
            <p className="pt3">
              Built to be reusable and scalable, Overture’s components are well
              documented, actively supported and welcome{" "}
              <a href="#">external feedback and contributions</a>. If you need
              assistance, we also offer{" "}
              <a href="#">consulting, support and collaborative services.</a>
            </p>

            <div className="mt3">
              <a href="http://softeng.oicr.on.ca/team/" target="_blank">
                <button className="button is-primary is-medium mr2">
                  Meet the team
                </button>
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
);

export default HomePage;
