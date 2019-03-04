import React from "react";

// Logos
import caseData from "./data";

const Navigation = () => {
  return (
    <div className="CaseStudies-Navigation">
      {caseData.map((d, i) => (
        <NavigationItem key={i} data={d} />
      ))}
    </div>
  );
};

const NavigationItem = ({ data }) => {
  return (
    <div className="nav-item-border">
      <img alt={data.title} className="nav-item" src={data.logo} />
    </div>
  );
};

export default Navigation;
