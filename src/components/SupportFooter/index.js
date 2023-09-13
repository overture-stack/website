import React, { useState } from 'react';
import './styles.scss';
import { P1, LinkHelper as Link } from 'components';
import { SLACK_LINK } from '../../../constants/external-links';
import smileyFace from './svgs/smileyFace.svg';
import unsmileyFace from './svgs/unsmileyFace.svg';

function SupportFooter({ location }) {
  const [feedback, setFeedback] = useState(null);

  const handleFeedbackClick = (isPositive) => {
    if (feedback === null) {
      // Ensure feedback has not been given before
      setFeedback(isPositive);
    }
  };

  //contribution url is the github prefix + current pathname - "/" + ".md" except for two edge cases
  //case 1: when pathname ends with a product name which is also when the pathname is short and only has three "/"
  //case 2: when parth name contains ("arranger" OR "dmi-ui") AND must ends with "configuration/"
  //for both of these edge cases, the contribution url is github prefix + current pathname + "index.md"
  function getContributionURL() {
    const githubPrefix = 'https://github.com/overture-stack/website/tree/develop/markdown';
    const url = location.pathname && location.pathname;
    if (url.replace(/[^/]/g, '').length === 3) {
      return githubPrefix + url + 'index.md';
    } else if (
      (url.includes('arranger') || url.includes('dms-ui')) &&
      url.slice(url.length - 14, url.length) === 'configuration/'
    ) {
      return githubPrefix + url + 'index.md';
    } else {
      return githubPrefix + url.slice(0, url.length - 1) + '.md';
    }
  }

  const contributionURL = getContributionURL();

  return (
    <div className="support-footer__container">
      <p className="support-footer__title">Help and Support</p>
      <div className="support-footer__columns">
        <div>
          <p className="support-footer__sub-title">Did this page help you?</p>
          <div className="feedback-icons">
            <img
              onClick={() => handleFeedbackClick(true)}
              src={smileyFace}
              alt="Positive Feedback"
              className={`icon ${feedback === true ? 'icon-inverted' : ''}`}
              id="postive-feedback"
            />
            <img
              onClick={() => handleFeedbackClick(false)}
              src={unsmileyFace}
              alt="Negative Feedback"
              className={`icon ${feedback === false ? 'icon-inverted' : ''}`}
              id="negative-feedback"
            />
          </div>
        </div>
        <div>
          <p className="support-footer__sub-title">Help make our docs better</p>
          <ul>
            <li>
              <a
                href="https://github.com/overture-stack/website/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=BUG+-+"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit an issue
              </a>
            </li>
            <li>
              <a
                href="https://github.com/overture-stack/website/issues/new?assignees=&labels=new-feature&projects=&template=Feature_Request.md&title=Feature+Request+"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit a feature request
              </a>
            </li>
            <li>
              <a href={contributionURL} target="_blank" rel="noopener noreferrer">
                Make a contribution
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="support-footer__sub-title">Still need help?</p>
          <Link to={SLACK_LINK}>Ask us on Slack</Link>
        </div>
      </div>
    </div>
  );
}

export default SupportFooter;
