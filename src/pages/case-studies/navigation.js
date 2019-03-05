import React from "react";

// Logos
import caseData from "./data";

const Navigation = ({currentCase, isFixed}) => {
  let fixedClass = isFixed ? "nav-fixed" : "" 

  return (
    <div className={`CaseStudies-Navigation ${fixedClass}`}>
      {caseData.map((d, i) => (
        <NavigationItem currentCase={currentCase} key={i} data={d} />
      ))}
    </div>
  );
};

const NavigationItem = ({ data, currentCase }) => {
  let active = currentCase == data.title ? "active" : "";

  return (
    <div className={`nav-item-border ${active}`}>
      <img alt={data.title} className="nav-item" src={data.logo} />
    </div>
  );
};

export default Navigation;
