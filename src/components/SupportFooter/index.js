import React from 'react';
import './styles.scss';
import { P1, LinkHelper as Link, } from 'components';
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
            <img id="postive-feedback" src={smileyFace} alt="Positive Feedback" className="icon"/>
            <img id="postive-feedback" src={unsmileyFace} alt="Negative Feedback" className="icon"/>
          </div>
        </div>
        <div>
          <p className="support-footer__sub-title">Help make our docs better</p>
            <ul>
            <li><a href="https://github.com/overture-stack/website/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=BUG+-+" target="_blank" rel="noopener noreferrer">Submit an issue</a></li>
            <li><a href="https://github.com/overture-stack/website/issues/new?assignees=&labels=new-feature&projects=&template=Feature_Request.md&title=Feature+Request+" target="_blank" rel="noopener noreferrer">Submit a feature request,</a></li>
            <li><a href="https://github.com/overture-stack/website/blob/develop/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Submit a pull request.</a></li>
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
