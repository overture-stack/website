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
    <div className={`column ${className}`}>
      <div className="target-box">
        <ProductTarget
          header={feature.header}
          details={feature.details}
          icon={feature.icon}
        />
      </div>
    </div>
  );
};

function buildStyle(data, idx) {
  let lastFeatureOdd = data.length % 2 !== 0 ? true : false;
  let lastFeatureClass = lastFeatureOdd && idx === data.length - 1
    ? "is-full"
    : "is-half";
  let isEvenFeature = idx % 2 == 0 ? false : true;

  if (lastFeatureOdd && idx === data.length - 1) {
    return "is-full";
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
          <section className="" style={{ borderBottom: "2px solid white" }}>
            <div className="container">
              <article className="columns m0">
                {arr.map((feat, idx) => (
                  <FeatureItem
                    feature={feat}
                    className={buildStyle(feat, idx)}
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
