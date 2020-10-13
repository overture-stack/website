import React from 'react';
import { graphql } from 'gatsby';
import { find, findIndex } from 'lodash';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { SectionTableOfContents, PageTableOfContents } from 'components';
import documentationPages from 'meta/documentationPages';

export default function DocumentationPage({ data: { mdx } }) {
  const pageTableOfContents = mdx.tableOfContents.items || null;

  // prev/next buttons
  // assume 2 level navigation
  // borrowed from previous gatsby project
  const slugArr = '/documentation/song/get-started/docker-for-song/subsection'
    // mdx.fields.slug
    .split('/')
    .filter(item => item)
    .slice(1);

  const firstLevel = find(documentationPages, { url: slugArr[0] }).items;
  const secondLevel = find(firstLevel, { url: slugArr[1] }).items;
  const thirdLevel = find(secondLevel, { url: slugArr[2] }).items;
  const thisIndex = findIndex(thirdLevel, { url: slugArr[3] });
  const prevItem = thisIndex < 1 ? null : thirdLevel[thisIndex - 1];
  const nextItem = thisIndex === slugArr.length - 1 ? null : thirdLevel[thisIndex + 1];

  console.log({ slugArr, thisIndex, prevItem, nextItem });

  return (
    <main className="documentation-page">
      <h1>{mdx.fields.title}</h1>
      <SectionTableOfContents items={documentationPages} />
      {pageTableOfContents && <PageTableOfContents items={pageTableOfContents} />}
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
