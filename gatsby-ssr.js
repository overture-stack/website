import React from 'react';
import { Layout } from 'components';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
