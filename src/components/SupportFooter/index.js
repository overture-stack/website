import React, { useState } from 'react';
import './styles.scss';
import { LinkHelper as Link } from 'components';
import {
  GITHUB_REQUEST_FEATURES_LINK,
  GITHUB_SUBMIT_ISSUES_LINK,
  SLACK_LINK,
} from '../../../constants/external-links';
import urlJoin from 'proper-url-join';
import smileyFace from './assets/smileyFace.svg';
import unsmileyFace from './assets/unsmileyFace.svg';

function SupportFooter({ location }) {
  const [feedback, setFeedback] = useState(null);

  const handleFeedbackClick = (isPositive) => {
    if (feedback === null) {
      // Ensure feedback has not been given before
      setFeedback(isPositive);
    }
  };

  /**
   * Constructs a GitHub contribution URL based on the current page's pathname.
   * The URL format is determined by specific rules to accommodate various scenarios.
   */
  function getContributionURL() {
    // Base URL prefix for GitHub repository links (updated to main)
    const githubPrefix = 'https://github.com/overture-stack/website/tree/main/markdown';
    // Extract the pathname from the current location object
    const url = location.pathname;

    /*
     * The following logic determines the contribution URL format based on the URL.
     * Non-ideal solution as there are several hardcoded edge cases, however this works for now
     */
    switch (true) {
      /*
       * Edge Case 1: When the pathname is short (only three segments), indicating a direct link to a product.
       * In this case, the contribution URL points to the index.md file of the relevant directory.
       */
      case url.replace(/[^/]/g, '').length === 3:
        return urlJoin(githubPrefix, url, 'index.md');

      /*
       * Edge Case 2: When the pathname ends with 'configuration/'.
       * The contribution URL again points to the index.md file, facilitating contributions to these configurations.
       */
      case url.endsWith('configuration/'):
        return urlJoin(githubPrefix, url, 'index.md');

      /*
       * The rest is logic for handling paths unique paths where the url points to an index.md file in the relevant directory.
       */
      case url.includes('song') && (url.endsWith('schemas/') || url.endsWith('api/')):
        return urlJoin(githubPrefix, url, 'index.md');

      case url.includes('maestro') && url.endsWith('user-guide/'):
        return urlJoin(githubPrefix, url, 'index.md');

      case url.includes('ego') && (url.endsWith('prerequisites/') || url.endsWith('admin-ui/')):
        return urlJoin(githubPrefix, url, 'index.md');

      /*
       * For all other paths, the contribution URL is constructed by removing the trailing '/' from the pathname
       * and appending '.md', creating the typical Markdown file structure in our documentation folder.
       */
      default:
        return urlJoin(githubPrefix, url.slice(0, url.length - 1) + '.md');
    }
  }

  const contributionURL = getContributionURL();

  return (
    <div className="support-footer">
      <div className="support-footer__container">
        <p className="support-footer__title">Help and Support</p>
        <div className="support-footer__columns">
          {/* first column - smiley/unsmiley faces */}
          <div className="support-footer__first-column">
            <p className="support-footer__sub-title">Did this page help you?</p>
            <div className="feedback-buttons-holder">
              <button
                onClick={() => handleFeedbackClick(true)}
                className={`feedback-button ${feedback === true && 'icon-inverted'}`}
                aria-label="Positive feedback"
                id="postive-feedback"
              >
                <img src={smileyFace} alt="" className="feedback-img" />
              </button>
              <button
                onClick={() => handleFeedbackClick(false)}
                className={`feedback-button ${feedback === false && 'icon-inverted'}`}
                aria-label="Negative feedback"
                id="negative-feedback"
              >
                <img src={unsmileyFace} alt="" className="feedback-img" />
              </button>
            </div>
          </div>
          {/* second column - submit issues and make contribution */}
          <div className="support-footer__second-column">
            <p className="support-footer__sub-title">Help make our docs better</p>
            <ul>
              <li>
                <a href={GITHUB_SUBMIT_ISSUES_LINK} target="_blank" rel="noopener noreferrer">
                  Submit an issue
                </a>
              </li>
              <li>
                <a href={GITHUB_REQUEST_FEATURES_LINK} target="_blank" rel="noopener noreferrer">
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
          {/* third column - slack link */}
          <div className="support-footer__third-column">
            <p className="support-footer__sub-title">Still need help?</p>
            <Link to={SLACK_LINK}>Ask us on Slack</Link>
          </div>
          {/* joint column - second and third column*/}
          <div className="support-footer__joint-second-third-column">
            <div className="support-footer__joint-second-column">
              <p className="support-footer__sub-title">Help make our docs better</p>
              <ul>
                <li>
                  <a href={GITHUB_SUBMIT_ISSUES_LINK} target="_blank" rel="noopener noreferrer">
                    Submit an issue
                  </a>
                </li>
                <li>
                  <a href={GITHUB_REQUEST_FEATURES_LINK} target="_blank" rel="noopener noreferrer">
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
            {/* third column - slack link */}
            <div className="support-footer__joint-third-column">
              <p className="support-footer__sub-title">Still need help?</p>
              <Link to={SLACK_LINK}>Ask us on Slack</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportFooter;
