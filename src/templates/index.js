/**
 * Site wide shared templates (headers, footers, etc.)
 **/
import React from 'react';
import PropTypes from 'prop-types';
import { Footer, NavBar } from 'components';
import 'styles/main.scss';

export default function TemplateWrapper({ children }) {
  return (
    <div>
      <NavBar />
      <div>{children()}</div>
      <Footer />
    </div>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};
