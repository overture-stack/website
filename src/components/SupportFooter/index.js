import React from 'react';
import './styles.scss';
import { P1 } from 'components';
import { Link } from 'gatsby';
import {
  SLACK_LINK
}
from '../../../constants/external-links';
import smileyFace from './svgs/smileyFace.svg'; 
import unsmileyFace from './svgs/unsmileyFace.svg';

function SupportFooter() {
  return (
    <div className="support-footer__container">
      <p className="support-footer__title">Help and Support</p>
      <div className="support-footer__columns">
        <div>
          <p className="support-footer__sub-title">Did this page help you?</p>
          <div className="feedback-icons">
            <img src={smileyFace} alt="Positive Feedback" className="icon"/>
            <img src={unsmileyFace} alt="Negative Feedback" className="icon"/>
          </div>
        </div>
        <div>
          <p className="support-footer__sub-title">Help make our docs better</p>
          <p>Like Overture our documentation is open source. If you have any feedback or ideas <a>submit an issue or feature request.</a></p>
        </div>
        <div>
          <p className="support-footer__sub-title">Still need help?</p>
          <p><a href="https://join.slack.com/t/overture-bio/shared_invite/zt-21tdumtdh-9fP1TFeLepK4~Lc377rOYw" target="_blank" rel="noopener noreferrer">Ask us on Slack</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default SupportFooter;
