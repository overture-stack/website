import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';
import Footer from 'components/Footer';

const TemplateWrapper = ({ children }) => (
  <React.Fragment>
    <Helmet
      title="Overture"
      meta={[
        { name: 'description', content: 'Open, composable and extendable components for data science in the cloud. Each component can operate on its own or interact with the rest of the overture stack, your choice!' },
        { name: 'keywords', content: 'data, genomic, cloud, software, big data, openstack, oicr, softeng, open-source' },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
        rel="stylesheet"
      />
    </Helmet>
    {children()}
    <Footer />
  </React.Fragment>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
