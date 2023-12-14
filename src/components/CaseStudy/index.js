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
      <div className="container">
        <div className="case-heading">
          <H2>{caseData.title}</H2>
        </div>
        {/* top segment */}
        <div className=" top-segment">
          <div className="columns">
            {/* left paragraph */}
            <div className="column is-6">
              {React.cloneElement(descriptionEl, { className: 'case-description' })}
            </div>
            {/* right list */}
            <div className="column is-offset-0 top-bullets">
              <ul>
                {caseData.listItems[0].map((listItem) => {
                  return (
                    <L1 key={listItem}>
                      <li className="client-list-item indent-group">{listItem}</li>
                    </L1>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Lower Container */}
        <div className="bottom-segment">
          <div className="columns">
            <div className="column is-6 img-holder">
              <img src={caseData.details[currentScreenshot].screenshot} />
            </div>

            <div className="column is-offset-0 ">
              <div className="lower-title-holder indent-group">
                <H3>How was Overture used?</H3>
              </div>
              <ul>
                {caseData.listItems[1].map((listItem) => {
                  return (
                    <L1 key={Object.keys(listItem)}>
                      <li className="client-list-item indent-group">
                        <b>{Object.keys(listItem)}</b> {Object.values(listItem)}
                      </li>
                    </L1>
                  );
                })}
              </ul>
              <div className="button-holder indent-group">
                <Button type="primary" size="medium" link={caseData.clientLink}>
                  Check it out!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
