import { H4, Button } from "../../components";
import React from "react";
import bg from "./assets/bg_curve_gradient.svg";

/**
 * A case study is made up of a:
 * title, description, logo, list items, url, and a set of details and corresponding screenshots.
 * TODO These components will need to be stateful to indicate which screenshot/detail is currently highlighted.
 * @param {*} p: all the data represent a single case study (as found in ./data.js)
 */
const CaseStudy = p => {
  return (
    <section className="Case-Study">
      {/* Top Container - client overview: title, desc / Logo, list desc, button. */}
      <div className="container top-segment">
        <div className="columns">
          <div className="column is-6">
            <H4 className="case-title">{p.title}</H4>
            <div className="my2 yellow-bar" />
            <div
              className="case-description"
              dangerouslySetInnerHTML={p.description}
            />
          </div>

          {/*  Client Logo */}
          <div className="column is-offset-1 is-5">
            <img className="client-logo" src={p.logo} />
            <ul>
              {p.clientListItem.map((i, idx) => {
                return (
                  <li className="client-list-item" key={idx}>
                    {i}
                  </li>
                );
              })}
            </ul>
            <Button className="my2" type="primary" externalLink={p.clientLink}>
              Check it out!
            </Button>
          </div>
        </div>
      </div>

      {/* Lower Container: Screenshots */}
      <div className="bg-curve" style={{ backgroundImage: `url(${bg})` }}>
        <div className="container">
          <div className="details">
            <div className="details-left">
              {p.details.map(detail => (
                <div className="details-left-item" key={detail.title}>
                  <div className="details-left-title">{detail.title}</div>
                  <div className="details-left-description">
                    {detail.description}
                  </div>
                </div>
              ))}
            </div>

            <div className="details-right">
              <img
                className="details-right-screenshot"
                src={p.details[0].screenshot}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
