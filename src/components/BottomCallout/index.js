import React from 'react'
import './styles.scss'

const BottomCallout = ({children }) => (
  <section className="BottomCallout bg-blue text-white py4">
    <div className="container">
    <div className="columns column is-10 is-offset-1">
      {children}
    </div>
    </div>
  </section>
  
)

export default BottomCallout
