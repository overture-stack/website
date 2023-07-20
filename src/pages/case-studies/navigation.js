import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

// Logos
// import caseData from "./data";

const Navigation = ({ caseData, currentCase, isFixed, scrollTo }) => {
  let fixedClass = isFixed ? 'nav-fixed' : '';

  return (
    <div className={`CaseStudies-Navigation ${fixedClass}`}>
      {caseData &&
        caseData.map((data, idx) => (
          <NavigationItem scrollTo={scrollTo} currentCase={currentCase} key={idx} data={data} />
        ))}
    </div>
  );
};

const NavigationItem = ({ data, currentCase, scrollTo }) => {
  let active = currentCase == data.title ? 'active' : '';

  return (
    <div onClick={() => scrollTo(data.slug)}>
      <img alt={`${data.title} logo`} className={`nav-item ${active}`} src={data.logo} />
    </div>
  );
};

export default Navigation;
