import React from "react";
import "./styles.scss";
import ProductFeature from "../ProductFeature";

/**
 * "GridFeature" creates blocks of text with headers, icons and text;
 * Often used to describe features on a product, used quite a bit across the site.
 * You can see examples on AboutUs, Song, Score, Jukebox, etc
 *
 * Mostly, this adds some conditional classes to enable containerized divs
 * while still maintaining a full width grey background + white divider lines.
 * Essentially, helps make markups for these kinds of UI structures:
 *
 *      +---------+---------+            +---------+---------+
 *      |         |         |            |         |         |
 *      |    F1   |    F2   |            |    F1   |    F2   |
 *      |         |         |            |         |         |
 *      +---------+---------+    -OR-    +---------+---------+
 *      |         |         |            |                   |
 *      |    F3   |    F4   |            |        F3         |
 *      |         |         |            |                   |
 *      +-------------------+            +-------------------+
 *
 */

/**
 * A single feature; creates a Product Feature wrapped to fit in a grid.
 */
const FeatureItem = ({ feature, className, iconSize = 100 }) => {
  return (
    <div className={`column feature-item ${className}`}>
      <ProductFeature
        header={feature.header}
        details={feature.details}
        icon={feature.icon}
        iconSize={iconSize}
        size="small"
        className="p0"
      />
    </div>
  );
};

/**
 * Returns a css class (string) based on how many "product feature" boxes there are.
 * Necessary to style based on the position of the boxes;
 * ex: the 2nd box (on the right) in a row must have a white border
 * ex: There are three features describing a product, therefore, the last one must be full width.
 */
function buildStyle(arr, idx) {
  let isEvenFeature = idx % 2 == 0 ? false : true;

  if (arr.length === 1) {
    return "is-7-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-12-mobile";
  } else if (isEvenFeature) {
    return "is-half right-item";
  } else {
    return "is-half";
  }
}

/**
 * Loops through a 2D array of feature items;
 * makes a row of grids for each items in the array;
 * can also take a child component for custom content
 */
const GridFeature = ({ data, iconSize = 32 }) => {
  return (
    <div className="bg-grey GridFeature">
      {data.map(arr => {
        return (
          <section className="white-border-bottom">
            <div className="container">
              <article className="columns m0">
                {arr.map((feat, idx) => {
                  {/* If child component is passed in, loop over and create it. */ }
                  if (feat.ChildComponent) {
                    return <feat.ChildComponent {...feat} />;
                  {/* otherwise, just iterate and create boxes as needed. */ }
                  } else {
                    return (
                      <FeatureItem
                        feature={feat}
                        iconSize={iconSize}
                        className={buildStyle(arr, idx)}
                      />
                    );
                  }
                })}
              </article>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default GridFeature;
