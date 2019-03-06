import React from "react";

// Logos
import caseData from "./data";

const Navigation = ({currentCase, isFixed, scrollTo}) => {
  let fixedClass = isFixed ? "nav-fixed" : "" 

  return (
    <div className={`CaseStudies-Navigation ${fixedClass}`}>
      {caseData.map((d, i) => (
        <NavigationItem scrollTo={scrollTo} currentCase={currentCase} key={i} data={d} />
      ))}
    </div>
  );
};

const NavigationItem = ({ data, currentCase, scrollTo }) => {
  let active = currentCase == data.title ? "active" : "";

  return (
    <div onClick={() => scrollTo(data.slug)} className={`nav-item-border ${active}`}>
      <img alt={data.title} className="nav-item" src={data.logo} />
    </div>
  );
};

export default Navigation;
