import { H2, H3, L1, Button, ImageCrossfade } from '..';
import React from 'react';

/**
 * A case study is made up of a:
 * title, description, logo, list items, url, and a set of details and corresponding screenshots.
 * @param {*} p: all the data represent a single case study (as found in ./data.js)
 */
const CaseStudy = ({ caseData, currentScreenshot }) => {
  const descriptionEl =
    typeof caseData.description === 'string' ? (
      <div>{caseData.description}</div>
    ) : (
      caseData.description
    );

  return (
    <section className="Case-Study" id={caseData.slug}>
      {/* Top Container - client overview: title, desc / Logo, list desc, button. */}
      <div className="container top-segment">
        <div className="case-heading">
          <H2 className="mb4">{caseData.title}</H2>
        </div>
        <div className="columns">
          <div className="column is-6">
            {React.cloneElement(descriptionEl, { className: 'case-description' })}
          </div>

          <div className="column is-offset-0 top-bullets">
            <ul>
              {caseData.listItems[0].map((i, idx) => {
                return (
                  <L1>
                    <li className="client-list-item" key={idx}>
                      {i}
                    </li>
                  </L1>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Container: Screenshots */}
      <div className="container">
        <div className="details">
          <div className="details-left">
            <div className=" details-left-browser-wrapper">
              <ImageCrossfade src={caseData.details[currentScreenshot].screenshot} />
            </div>
          </div>

          <div className="details-right column is-offset-0 mt2">
            <div>
              <H3 className="mb2">How was Overture used?</H3>
              <ul>
                {caseData.listItems[1].map((i, idx) => {
                  return (
                    <L1>
                      <li className="client-list-item" key={idx}>
                        <b>{Object.keys(i)}</b> {Object.values(i)}
                      </li>
                    </L1>
                  );
                })}
              </ul>
            </div>
            <div>
              <Button className="mt3" type="primary" size="medium" link={caseData.clientLink}>
                Check it out!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
