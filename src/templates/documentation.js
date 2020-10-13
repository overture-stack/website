import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { TableOfContents } from 'components';

export default function DocumentationPage({ data: { mdx } }) {
  const tableOfContents = mdx.tableOfContents.items || null;
  return (
    <main className="documentation-page">
      <h1>{mdx.fields.title}</h1>
      {tableOfContents && <TableOfContents items={tableOfContents} />}
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </main>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        slug
        title
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
    }
  }
`;
