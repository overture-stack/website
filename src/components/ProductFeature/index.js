import React from 'react'
import './styles.scss'
import Icon from '../Icon/index'

const ProductFeature = ({ header, details, icon, iconSize }) => (
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
