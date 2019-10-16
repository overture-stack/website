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

import React, { Component } from 'react'
import { H1, H4, Layout } from '../../components'
import CaseStudy from '../../components/CaseStudy'
import caseData from '../../data/case_studies'
import Navigation from './navigation'
import { Waypoint } from 'react-waypoint'
import './styles.scss'

class CaseStudiesPage extends Component {
  constructor(props) {
    super(props)
    // Refs for scroll to navigation
    this.kidsFirst = React.createRef()
    this.icgcDataPortal = React.createRef()
    this.nciGdc = React.createRef()
    this.cgc = React.createRef()
    this.kidsFirst = React.createRef()
    this.humanCancerModels = React.createRef()
  }

  // State
  state = {
    currentCase: null,
    navFixed: false,
    caseStudyScrollPoints: [],
    // Use slugs as keys for easy changing.
    currentScreenshots: {
      kidsFirst: 0,
      icgcDataPortal: 0,
      nciGdc: 0,
      cgc: 0,
      humanCancerModels: 0,
    },
  }

  _handleWaypointEnter(caseStudy, e) {
    this.setState({ currentCase: caseStudy.title })
  }

  _handleWaypointLeave(caseStudy, e) {
    // this.setState({currentCase: caseStudy.title})
  }

  _handleDetailChange = ({ section, screenNumber }) => {
    let currentScreenshots = { ...this.state.currentScreenshots }
    currentScreenshots[section] = screenNumber
    this.setState({ currentScreenshots })
  }

  /**
   * Used to increment/decrement the screenshot using ui arrows.
   */
  _handlePageScreenshot = ({ section, max, dir }) => {
    let currentScreenshots = { ...this.state.currentScreenshots }
    if (dir == 'inc') {
      let inc = currentScreenshots[section] + 1
      currentScreenshots[section] = inc
      if (inc <= max - 1) {
        this.setState({ currentScreenshots })
      }
    } else if (dir == 'dec') {
      let dec = currentScreenshots[section] - 1
      currentScreenshots[section] = dec
      if (dec >= 0) {
        this.setState({ currentScreenshots })
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.pageYOffset > 254) {
      this.setState({ navFixed: true })
    } else {
      this.setState({ navFixed: false })
    }
  }

  scrollTo = slugName => {
    let node = this[slugName]
    let rect = node.current.getBoundingClientRect()
    let top = rect.top + window.scrollY - 190
    window.scrollTo({ top, behavior: 'smooth' })
  }

  render() {
    let fixedClass = this.state.navFixed ? 'nav-fixed' : ''

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
            caseData={caseData}
            isFixed={this.state.navFixed}
            currentCase={this.state.currentCase}
            scrollTo={x => this.scrollTo(x)}
          />

          {/* Case Study Component */}
          {caseData &&
            caseData.map((d, i) => {
              let bgColor = i % 2 === 0 ? 'none' : '#F2F3F5'

              return (
                <Waypoint
                  key={d.slug}
                  onEnter={e => this._handleWaypointEnter(d, e)}
                  onLeave={e => this._handleWaypointLeave(d, e)}
                  threshold={-2.0}
                >
                  <div ref={this[d.slug]} style={{ backgroundColor: bgColor }}>
                    <CaseStudy
                      caseData={d}
                      currentScreenshot={this.state.currentScreenshots[d.slug]}
                      handleDetailChange={this._handleDetailChange}
                      handlePageScreenshot={this._handlePageScreenshot}
                    />
                  </div>
                </Waypoint>
              )
            })}
        </main>
      </Layout>
    )
  }
}

export default CaseStudiesPage
