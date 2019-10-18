/**
 * Site wide shared templates (headers, footers, etc.)
 **/
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import config from '../../meta/config'
import '../styles/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>{config.siteTitle}</title>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
