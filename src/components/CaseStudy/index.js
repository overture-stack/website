import { H4, Button, Icon, TrafficLights, ImageCrossfade } from '..';
import React from 'react';

/**
 * A case study is made up of a:
 * title, description, logo, list items, url, and a set of details and corresponding screenshots.
 * @param {*} p: all the data represent a single case study (as found in ./data.js)
 */
const CaseStudy = ({ caseData, handleDetailChange, handlePageScreenshot, currentScreenshot }) => {
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
            <img className="client-logo" src={caseData.logo} />
            <div
              className="case-description"
              dangerouslySetInnerHTML={{ __html: caseData.description }}
            />
          </div>

          <div className="column is-offset-1 is-5">
            <ul>
              {caseData.listItems.map((i, idx) => {
                return (
                  <li className="client-list-item" key={idx}>
                    {i}
                  </li>
                );
              })}
            </ul>
            <Button className="my2" type="primary" size="medium" link={caseData.clientLink}>
              Check it out!
            </Button>
          </div>
        </div>
      </div>

      {/* Lower Container: Screenshots */}
      <div className="container">
        <div className="details">
          <div className="details-left">
            {caseData.details.map((detail, idx) => {
              const activeClass = currentScreenshot == idx ? 'active' : '';
              return (
                <div
                  className={`details-left-item ${activeClass}`}
                  onClick={() => _handleDetailChange(idx)}
                  key={detail.title + idx}
                >
                  <div className={`details-left-title ${activeClass}`}>{detail.title}</div>
                  <div className="details-left-description">{detail.description}</div>
                </div>
              );
            })}
          </div>

          <div className="details-right">
            <div
              onClick={() =>
                handlePageScreenshot({
                  section: caseData.slug,
                  max: caseData.details.length,
                  dir: 'inc',
                })
              }
              className="screenshot-arrow-right"
            >
              <Icon img="arrowRightRound" />
            </div>

            <div
              onClick={() =>
                handlePageScreenshot({
                  section: caseData.slug,
                  max: caseData.details.length,
                  dir: 'dec',
                })
              }
              className="screenshot-arrow-left"
            >
              <Icon img="arrowLeftRound" />
            </div>

            <div className="Browser details-right-browser-wrapper">
              <TrafficLights style={{ marginLeft: 0, paddingBottom: '16px' }} />
              <ImageCrossfade src={caseData.details[currentScreenshot].screenshot} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
