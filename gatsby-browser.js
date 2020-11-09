import React from 'react';
import { Layout } from 'components';
import { MDXProvider } from '@mdx-js/react';
import { AnchorHeading, WarningBox as Warning } from 'components';

const headings = {
  // for the documentation section:
  // the page title is h1
  // so demote markdown headings by one level
  h1: props => <AnchorHeading size="h2" {...props} />,
  h2: props => <AnchorHeading size="h3" {...props} />,
  h3: props => <AnchorHeading size="h4" {...props} />,
  h4: props => <AnchorHeading size="h5" {...props} />,
  h5: props => <AnchorHeading size="h6" {...props} />,
  h6: props => <AnchorHeading size="h6" {...props} />,
};

const shortcodes = { Warning };

export function wrapPageElement({ element, props }) {
  return (
    // MDX provider can *only* be used here.
    <MDXProvider
      components={{
        ...headings,
        ...shortcodes,
      }}
    >
      <Layout {...props}>{element}</Layout>
    </MDXProvider>
  );
}
