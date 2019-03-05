/**
 * This component represents the `Case Studies` page.
 * The page is made up of
 * a) several case studies and;
 * b) a navigation component for scrolling / jumping between different case studies.
 * NOTE: The structure of a case studies is laregly the same, so we render
 * the UI based on a data structure in ./data.js
 * This component is a Class component because
 * a) each case study has a "slider" for displaying screenshots
 * b) for indicating the currently selected logo in the navigation.
 */

import React, { Component } from "react";
import { H1, H4, Layout } from "../../components";
import CaseStudy from "./case-study";
import caseData from "./data";
import Navigation from "./navigation";
import "./styles.scss";
import { Waypoint } from "react-waypoint";

class CaseStudiesPage extends Component {
  state = {
    currentCase: null,
    navFixed: false
  };

  _handleWaypointEnter(caseStudy, e) {
    this.setState({ currentCase: caseStudy.title });
  }

  _handleWaypointLeave(caseStudy, e) {
    // this.setState({currentCase: caseStudy.title})
  }

  componentDidMount() {
    window.addEventListener("scroll", e => {
      if (window.pageYOffset > 253) {
        this.setState({ navFixed: true });
      } else {
        this.setState({ navFixed: false });
      }
    });
  }

  render() {
    return (
      <Layout>
        <main className="CaseStudiesPage">
          {/* HERO */}
          <section className="case-hero">
            <div className="case-hero-content">
              <H1 className="case-heading">Case Studies</H1>
              <H4>
                We’ve participated in projects from small to large. We welcome
                the chance to collaborate with you and bring your data into the
                future with the Overture stack!
              </H4>
            </div>
          </section>

          {/* Case Study Interactive NavBar */}
          <Navigation
            isFixed={this.state.navFixed}
            currentCase={this.state.currentCase}
          />

          {/* Case Study Component */}
          {caseData.map(d => {
            return (
              <Waypoint
                onEnter={e => this._handleWaypointEnter(d, e)}
                onLeave={e => this._handleWaypointLeave(d, e)}
                threshold={-2.0}
              >
                <div>
                  <CaseStudy
                    title={d.title}
                    description={{ __html: d.description }}
                    clientListItem={d.listItems}
                    clientLink={d.checkItOutLink}
                    logo={d.logo}
                    details={d.details}
                  />
                </div>
              </Waypoint>
            );
          })}
        </main>
      </Layout>
    );
  }
}

export default CaseStudiesPage;
