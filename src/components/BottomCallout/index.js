import React from 'react'
import './styles.scss'
import { Icon } from '../'

export const BottomCallout = ({ children, className }) => (
  <section className={`${className ? className : ''} BottomCallout`}>
    <div className="container">
      <div className="callout-container">{children}</div>
    </div>
  </section>
)

export const Callout = ({ icon, description, children, className }) => (
  <div className={`${className ? className : ''} Callout `}>
    <Icon size={32} img={icon} />
    <div className="text-white py2">{description}</div>
    {children}
  </div>
)

export default BottomCallout
