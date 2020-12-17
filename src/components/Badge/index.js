import React from 'react';
import { LinkHelper as Link } from 'components';
import './styles.scss';

const Badge = ({ children, className = '', color, link, style }) =>
  link ? (
    <Link to={link}>
      <div className={`Badge ${className} ${color}`} style={style}>
        {children}
      </div>
    </Link>
  ) : (
    <div className={`Badge ${className} ${color}`} style={style}>
      {children}
    </div>
  );

export default Badge;
