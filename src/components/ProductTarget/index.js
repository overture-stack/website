import React from 'react'
import './styles.scss'
import Icon from '../Icon/index'

const ProductTarget = ({ header, details }) => (
  <div className="ProductTarget">
    <div className="flex items-center py2">
      {/* Icon */}
      <Icon img="target" size={32} />

      {/* header */}
      <div className="bold pl2">{header}</div>
    </div>

    {/* feature */}
    <div className="details">{details}</div>
  </div>
)

export default ProductTarget
