import React from 'react'
import './styles.scss'
import Icon from '../Icon/index'

// consistent container for product feature row
export const ProductFeatureRow = ({children}) => (
  <div className="container py4">
    <div className="flex justify-around my2">
      {children}
    </div>
  </div>
)
  


export const ProductFeature = ({ header, details, icon, iconSize }) => (
  <div className="ProductFeature">
    {/* Icon */}
    <Icon img={icon} size={iconSize ? iconSize : 64} />

    {/* header */}
    <div className="header">{header}</div>

    {/* feature */}
    <div className="details">{details}</div>
  </div>
)

export default ProductFeature
