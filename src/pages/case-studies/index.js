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
import { Waypoint } from "react-waypoint";
import "./styles.scss";

class CaseStudiesPage extends Component {
  constructor(props) {
    super(props);
    // Refs
    this.kidsFirst = React.createRef();
    this.icgcDataPortal = React.createRef();
    this.nciGdc = React.createRef();
    this.cgc = React.createRef();
    this.kidsFirst = React.createRef();
    this.humanCancerModels = React.createRef();
  }

  // State
  state = {
    currentCase: null,
    navFixed: false,
    caseStudyScrollPoints: []
  };

  _handleWaypointEnter(caseStudy, e) {
    this.setState({ currentCase: caseStudy.title });
  }

  _handleWaypointLeave(caseStudy, e) {
    // this.setState({currentCase: caseStudy.title})
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 254) {
        this.setState({ navFixed: true });
      } else {
        this.setState({ navFixed: false });
      }
    });
  }

  scrollTo = slugName => {
    let node = this[slugName];
    let rect = node.current.getBoundingClientRect();
    let top = rect.top + window.scrollY - 160;
    window.scrollTo({ top, behavior: "smooth" });
  };

  render() {
    let fixedClass = this.state.navFixed ? "nav-fixed" : "";

    return (
      <Layout>
        <main className="CaseStudiesPage">
          {/* HERO */}
          <section className={`case-hero ${fixedClass}`}>
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
            scrollTo={x => this.scrollTo(x)}
          />

          {/* Case Study Component */}
          {caseData.map(d => {
            return (
              <Waypoint
                key={d.slug}
                onEnter={e => this._handleWaypointEnter(d, e)}
                onLeave={e => this._handleWaypointLeave(d, e)}
                threshold={-2.0}
              >
                <div ref={this[d.slug]}>
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
