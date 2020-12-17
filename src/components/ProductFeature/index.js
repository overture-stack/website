import React from 'react';
import { Icon } from 'components';
import './styles.scss';

// consistent container for product feature row
export const ProductFeatureRow = ({ children }) => (
  <div className="container mb4">
    <div className="ProductFeatureRow flex justify-between my2">{children}</div>
  </div>
);

/**
 * Component for displaying a header, an icon, and a paragraph of text.
 * Used exensively across product pages.
 * A ProductFeature might be large or small
 * Small versions have the icon and the header and icon are on the same line.
 */
export const ProductFeature = ({
  className = '',
  details = '',
  header,
  icon,
  iconSize = 0,
  size,
}) => {
  const detailsEl = typeof details === 'string' ? <div>{details}</div> : details;
  if (size == 'small') {
    return (
      <div className={`ProductFeature small ${className}`}>
        <div className="flex items-center py2">
          {/* Icon */}
          <Icon img={icon} size={iconSize || 32} />

          {/* header */}
          {header ? (
            <div className="header">{header}</div>
          ) : (
            React.cloneElement(detailsEl, { className: 'ml2 details ' })
          )}
        </div>

        {/* feature */}
        {header && React.cloneElement(detailsEl, { className: 'details ' })}
      </div>
    );
  } else {
    return (
      <div className="ProductFeature default">
        {/* Icon */}
        <Icon img={icon} size={iconSize || 64} />

        {/* header */}
        <div className="header">{header}</div>

        {/* feature */}
        {React.cloneElement(detailsEl, { className: 'details ' })}
      </div>
    );
  }
};
