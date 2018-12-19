// This component handles site wide layouts.  (new to Gatsby 2.0)
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'
import config from '../../../meta/config';
import "../../styles/main.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>{config.siteTitle}</title>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
