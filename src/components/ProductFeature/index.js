import React from 'react'
import './styles.scss'
import { Icon } from '../'

// consistent container for product feature row
export const ProductFeatureRow = ({ children }) => (
  <div className="container mb4">
    <div className="ProductFeatureRow flex justify-between my2">{children}</div>
  </div>
)

/**
 * Component for displaying a header, an icon, and a paragraph of text.
 * Used exensively across product pages.
 * A ProductFeature might be large or small
 * Small versions have the icon and the header and icon are on the same line.
 */
export const ProductFeature = ({
  header,
  details,
  icon,
  iconSize,
  size,
  className,
}) => {
  if (size == 'small') {
    let _iconSize = iconSize || 32
    return (
      <div className={`ProductFeature small ${className ? className : ''}`}>
        <div className="flex items-center py2">
          {/* Icon */}
          <Icon img={icon} size={_iconSize} />

          {/* header */}
          {header ? (
            <div className="header">{header}</div>
          ) : (
            <div className="ml2 details">{details}</div>
          )}
        </div>

        {/* feature */}
        {header && (
          <div
            className="details"
            dangerouslySetInnerHTML={{ __html: details }}
          />
        )}
      </div>
    )
  } else {
    return (
      <div className="ProductFeature default">
        {/* Icon */}
        <Icon img={icon} size={iconSize ? iconSize : 64} />

        {/* header */}
        <div className="header">{header}</div>

        {/* feature */}
        <div
          className="details"
          dangerouslySetInnerHTML={{ __html: details }}
        />
      </div>
    )
  }
}

export default ProductFeature
