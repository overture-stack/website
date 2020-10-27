import React from 'react';
import { graphql, Link } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import flatten from 'flat';
import { SectionTableOfContents, HeadingsTableOfContents } from 'components';
import { findPrevPage, findNextPage } from './utils';
import NotFoundPage from '../../pages/404';

const SHOW_DOCS = process.env.GATSBY_SHOW_DOCS === 'true';

export default function DocumentationPage({ data }) {
  if (!SHOW_DOCS) return <NotFoundPage />;

  const {
    body,
    fields: { slug, title },
    tableOfContents,
  } = data.mdx;

  // get section info
  const sectionSlug = slug.split('/').filter(x => x)[1];
  const sectionObj = data.allYaml.nodes[0];
  const sectionPages = flatten(sectionObj.items);
  const sectionTitle = sectionObj.title;

  // get page info
  const headingsTableOfContents = tableOfContents.items || null;
  const pageSlug = slug.split('/documentation/')[1];
  const pageIndex = Object.values(sectionPages).indexOf(pageSlug);
  const isFirstPage = Object.keys(sectionPages)[pageIndex] === '0.url';
  const isLandingPage = pageSlug === sectionSlug && title === sectionTitle;

  const prevPage = findPrevPage({
    isLandingPage,
    isFirstPage,
    pageIndex,
    sectionPages,
    sectionSlug,
    sectionTitle,
  });

  const nextPage = findNextPage({
    isLandingPage,
    pageIndex,
    sectionPages,
  });

  return (
    <main className="documentation-page" style={{ width: '90%', margin: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        <div style={{ background: 'AliceBlue', padding: 10, width: 250 }}>
          <Link to="/documentation">
            <h2 className="t-h2">&larr; Docs</h2>
          </Link>
          <ol>
            <li>
              <Link to={`/documentation/${sectionSlug}`}>{sectionTitle}</Link>
            </li>
            <SectionTableOfContents items={sectionObj.items} />
          </ol>
        </div>
        <div style={{ flex: '1', padding: '10px 20px' }}>
          <h1 className="t-h1">{title}</h1>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <div style={{ background: 'WhiteSmoke', padding: 10, width: 250 }}>
          <h2 className="t-h2">Headings</h2>
          {headingsTableOfContents && <HeadingsTableOfContents items={headingsTableOfContents} />}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 0' }}>
        <div>
          {prevPage && (
            <span className="t-h4">
              &laquo; <Link to={prevPage.url}>{prevPage.title}</Link>
            </span>
          )}
        </div>
        <div>
          {nextPage && (
            <span className="t-h4">
              <Link to={nextPage.url}>{nextPage.title}</Link> &raquo;
            </span>
          )}
        </div>
      </div>
    </main>
  );
}

export const pageQuery = graphql`
  query($id: String!, $section: String!) {
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
    allYaml(filter: { url: { eq: $section } }) {
      nodes {
        title
        url
        items {
          title
          url
          items {
            title
            url
            items {
              title
              url
            }
          }
        }
      }
    }
  }
`;
