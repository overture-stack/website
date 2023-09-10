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

import { CaseStudy, Hero } from 'components';
import React from 'react';
import caseData from 'data/case_studies';
import { Component } from 'react';
import Helmet from 'react-helmet';
import { Waypoint } from 'react-waypoint';
import Navigation from './navigation';
import './styles.scss';

class CaseStudiesPage extends Component {
  constructor(props) {
    super(props);

    // Refs for scroll to navigation
    this.icgcargo = React.createRef();
    this.virusseq = React.createRef();
    this.kidsFirst = React.createRef();
    this.ihcc = React.createRef();
    this.humanCancerModels = React.createRef();
  }

  // State
  state = {
    currentCase: null,
    navFixed: false,
    caseStudyScrollPoints: [],
    // Use slugs as keys for easy changing.
    currentScreenshots: {
      icgcargo: 0,
      virusseq: 0,
      kidsFirst: 0,
      ihcc: 0,
      humanCancerModels: 0,
    },
  };

  _handleWaypointEnter(caseStudy, event) {
    this.setState({ currentCase: caseStudy.title });
  }

  _handleWaypointLeave(caseStudy, event) {
    // this.setState({currentCase: caseStudy.title})
  }

  _handleDetailChange = ({ section, screenNumber }) => {
    let currentScreenshots = { ...this.state.currentScreenshots };
    currentScreenshots[section] = screenNumber;
    this.setState({ currentScreenshots });
  };

  /**
   * Used to increment/decrement the screenshot using ui arrows.
   */
  _handlePageScreenshot = ({ section, max, dir }) => {
    let currentScreenshots = { ...this.state.currentScreenshots };
    if (dir == 'inc') {
      let inc = currentScreenshots[section] + 1;
      currentScreenshots[section] = inc;
      if (inc <= max - 1) {
        this.setState({ currentScreenshots });
      }

      if (inc == max) {
        currentScreenshots[section] = 0;
        this.setState({ currentScreenshots });
      }
    } else if (dir == 'dec') {
      let dec = currentScreenshots[section] - 1;
      currentScreenshots[section] = dec;
      if (dec >= 0) {
        this.setState({ currentScreenshots });
      }

      if (dec == -1) {
        currentScreenshots[section] = max - 1;
        this.setState({ currentScreenshots });
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 254) {
      this.setState({ navFixed: true });
    } else {
      this.setState({ navFixed: false });
    }
  };

  scrollTo = (slugName) => {
    let node = this[slugName];
    let rect = node.current.getBoundingClientRect();
    let top = rect.top + window.scrollY - 190;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  render() {
    let fixedClass = this.state.navFixed ? 'nav-fixed' : '';
    return (
      <main className="CaseStudiesPage">
        {/* Metadata */}
        <Helmet>
          <title>Overture Case Studies</title>
          <meta
            name="description"
            content="See how Overture is being used to tackle challenges across multiple projects."
          />
          <meta
            name="keywords"
            content="Overture, data science software, bioinformatics software, open-source software, cancer research, academic collaborations, grant co-applicant, software consulting, project architecture, migration, custom development, scalability, technical support, troubleshooting, Ontario Institute for Cancer Research, OICR, Canarie, DMS Command Line Interface, The National Cancer Institutes Informatics Technology for Cancer Research Program, NCI ITCR, Overture DMS, GA4GH passport system"
          />
        </Helmet>

        {/* HERO */}
        <Hero
          title="Case Studies"
          subtitle="See how Overture is tackling diverse challenges across multiple projects."
        />

        {/* Case Study Interactive NavBar */}
        <Navigation
          caseData={caseData}
          isFixed={this.state.navFixed}
          currentCase={this.state.currentCase}
          scrollTo={(position) => this.scrollTo(position)}
        />

        {/* Case Study Component */}
        {caseData &&
          caseData.map((data, index) => {
            let bgColor = index % 2 === 0 ? 'none' : '#F2F3F5';

            return (
              <Waypoint
                key={data.slug}
                onEnter={(event) => this._handleWaypointEnter(data, event)}
                onLeave={(event) => this._handleWaypointLeave(data, event)}
                threshold={0}
              >
                <div ref={this[data.slug]} style={{ backgroundColor: bgColor }}>
                  <CaseStudy
                    caseData={data}
                    currentScreenshot={this.state.currentScreenshots[data.slug]}
                    handleDetailChange={this._handleDetailChange}
                    handlePageScreenshot={this._handlePageScreenshot}
                  />
                </div>
              </Waypoint>
            );
          })}
      </main>
    );
  }
}

export default CaseStudiesPage;
