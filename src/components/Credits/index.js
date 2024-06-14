import React from 'react';
import { CANARIE_LINK } from 'constants/external-links';
import { LinkHelper as Link } from 'components';
import './styles.scss';

const Credits = ({ wide = false }) => (
  <div className={`credits__wrapper ${wide ? 'wide' : ''}`}>
    <div className="credits__text">
      <b>The work here is supported by:</b>
      <p>
        <br></br>
        Grant #U24CA253529 from the National Cancer Institute at the US National Institutes of
        Health.
      </p>
    </div>
  </div>
);

export default Credits;
