import React from 'react';
import { CANARIE_LINK } from 'constants/external-links';
import { LinkHelper as Link } from 'components';
import canarieLogo from '../../../static/img/canarie-logo.png';
import './styles.scss';

const CanarieCredits = ({ wide = false }) => (
  <div className={`canarie-credits__wrapper ${wide ? 'wide' : ''}`}>
    <div className="canarie-credits__text">
      DMS development supported by:
    </div>
    <Link to={CANARIE_LINK} className="canarie-credits__link">
      <img src={canarieLogo} alt="Canarie" width="120" />
    </Link>
  </div>
);

export default CanarieCredits;
