import React from 'react'
import './styles.scss'

export const MarketingSection = ({ children, className, style }) => (
  <section className={`MarketingSection ${className}`}>
    <div className="container flex items-center">{children}</div>
  </section>
)

export default MarketingSection
