import React from 'react';
import { Layout } from 'components';
import { MDXProvider } from '@mdx-js/react';
import { WarningBox as Warning } from 'components';

const shortcodes = { Warning };

export function wrapPageElement({ element, props }) {
  return (
    <MDXProvider
      components={{
        h1: ({ children }) => <h4 style={{ color: 'red' }}>{children}</h4>,
        ...shortcodes,
      }}
    >
      <Layout {...props}>{element}</Layout>
    </MDXProvider>
  );
}
