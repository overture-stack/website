import React from "react";
import "./styles.scss";
import ProductTarget from "../ProductTarget/index.js";

/**
 * A bit of hackery to make easier creation of grid features
 * Mostly just adds some conditional classes to enable containerized divs
 * while still maintaining a full width grey background + white divider lines.
 *
 */

const FeatureItem = ({ feature, className }) => {
  return (
    <div className={`column feature-item ${className}`}>
        <ProductTarget
          header={feature.header}
          details={feature.details}
          icon={feature.icon}
          className="p0"
        />
    </div>
  );
};

/**
 * Returns a string based on how many "product feature" boxes there are.
 *
 */
function buildStyle(arr, idx) {
  // let onlyOne = arr.length % 2 !== 0 ? true : false;
  let isEvenFeature = idx % 2 == 0 ? false : true;


  if (arr.length === 1) {
    return "is-8-desktop is-offset-4-desktop is-6-tablet is-offset-4-tablet is-12-mobile";
  } else if (isEvenFeature) {
    return "is-half white-border-left";
  } else {
    return "is-half";
  }
}

const GridFeature = ({ data }) => {
  return (
    <div className="bg-grey GridFeature">
      {data.map(arr => {
        return (
          <section className="white-border-bottom" >
            <div className="container">
              <article className="columns m0">
                {arr.map((feat, idx) => (
                  <FeatureItem
                    feature={feat}
                    className={buildStyle(arr, idx)}
                  />
                ))}
              </article>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default GridFeature;
