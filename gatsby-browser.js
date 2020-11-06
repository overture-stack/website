import React from 'react';
import { Layout } from 'components';
import { MDXProvider } from '@mdx-js/react';
import { AnchorHeading, WarningBox as Warning } from 'components';

const headingsMax = 6;
const limitHeadings = n => (n > headingsMax ? headingsMax : n);
const headings = [...Array(headingsMax)]
  // h1 becomes h2-with-anchor-tag, etc up to h6 (edge case, h6 is rarely used)
  .reduce(
    (acc, curr, i) => ({
      ...acc,
      [`h${limitHeadings(i + 1)}`]: ({ children }) => (
        <AnchorHeading priority={limitHeadings(i + 2)}>boop {children}</AnchorHeading>
      ),
    }),
    {}
  );

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
