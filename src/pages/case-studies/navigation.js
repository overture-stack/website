import React from 'react';

// Logos
// import caseData from "./data";

const Navigation = ({ caseData, currentCase, isFixed, scrollTo }) => {
  let fixedClass = isFixed ? 'nav-fixed' : '';

  return (
    <div className={`CaseStudies-Navigation ${fixedClass}`}>
      <div className="CaseStudies-Navigation__scroll-container">
        {caseData &&
          caseData.map((data, index) => (
            <NavigationItem scrollTo={scrollTo} currentCase={currentCase} key={index} data={data} />
          ))}
      </div>
    </div>
  );
};

const NavigationItem = ({ data, currentCase, scrollTo }) => {
  let active = currentCase == data.title ? 'active' : '';

  return (
    <img
      alt={`${data.title} logo`}
      className={`nav-item ${active}`}
      src={data.logo}
      onClick={() => scrollTo(data.slug)}
    />
  );
};

export default Navigation;
