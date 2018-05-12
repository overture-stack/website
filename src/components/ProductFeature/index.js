import React from 'react'
import './styles.scss'
import Icon from '../Icon/index'

// consistent container for product feature row
export const ProductFeatureRow = ({children}) => (
  <div className="section">
  <div className="container ">
    <div className="ProductFeatureRow flex justify-around my2">
      {children}
    </div>
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
