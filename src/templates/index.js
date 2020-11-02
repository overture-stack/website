/**
 * Site wide shared templates (headers, footers, etc.)
 **/
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Footer, NavBar } from 'components';
import config from 'meta/config';
import 'styles/main.scss';

export default function TemplateWrapper({ children }) {
  return (
    <div>
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <NavBar />
      <div>{children()}</div>
      <Footer />
    </div>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};
