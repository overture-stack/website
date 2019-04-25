import { H4, Button } from "../../components";
import React from "react";
import bg from "./assets/bg_curve_gradient.svg";

/**
 * A case study is made up of a:
 * title, description, logo, list items, url, and a set of details and corresponding screenshots.
 * @param {*} p: all the data represent a single case study (as found in ./data.js)
 */
const CaseStudy = ({ caseData, handleDetailChange, currentScreenshot }) => {
  const _handleDetailChange = idx => {
    handleDetailChange({ section: caseData.slug, screenNumber: idx });
  };

  return (
    <section className="Case-Study">
      {/* Top Container - client overview: title, desc / Logo, list desc, button. */}
      <div className="container top-segment">
        <div className="case-heading">
          <H4>{caseData.title}</H4>
          <div className="yellow-bar" />
        </div>
        <div className="columns">
          <div className="column is-6">
            <div
              className="case-description"
              dangerouslySetInnerHTML={{ __html: caseData.description }}
            />
          </div>

          {/*  Client Logo */}
          <div className="column is-offset-1 is-5">
            <img className="client-logo" src={caseData.logo} />
            <ul>
              {caseData.listItems.map((i, idx) => {
                return (
                  <li className="client-list-item" key={idx}>
                    {i}
                  </li>
                );
              })}
            </ul>
            <Button
              className="my2"
              type="primary"
              externalLink={caseData.clientLink}
            >
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
              {caseData.details.map((detail, idx) => {
                let activeClass = currentScreenshot == idx ? "active" : "";
                return (
                  <div
                    className={`details-left-item ${activeClass}`}
                    onClick={() => _handleDetailChange(idx)}
                    key={detail.title}
                  >
                    <div className={`details-left-title ${activeClass}`}>
                      {detail.title}
                    </div>
                    <div className="details-left-description">
                      {detail.description}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="details-right">
              <img
                className="details-right-screenshot"
                src={caseData.details[currentScreenshot].screenshot}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
