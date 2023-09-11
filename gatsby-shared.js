import React from 'react';
import { Layout, RootElement } from 'components';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element, props }) {
  return <RootElement {...props}>{element}</RootElement>;
}
