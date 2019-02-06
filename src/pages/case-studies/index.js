import React, { Component } from "react";
import {
  H1,
  H2,
  H4,
  Button,
  Layout,
  Icon,
  BottomCallout,
  Callout
} from "../../components";
import "./styles.scss";
import CaseStudy from "./case-study";
import caseData from "./data";

class CaseStudiesPage extends Component {
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

          {/* Case Study Component */}
          {caseData.map(d => {
            return (
              <CaseStudy
                title={d.title}
                description={{ __html: d.description}}
                clientListItem={d.listItems}
                clientLink={d.checkItOutLink}
                logo={d.logo}
                details={d.details}
              />
            );
          })}
        </main>
      </Layout>
    );
  }
}

export default CaseStudiesPage;
