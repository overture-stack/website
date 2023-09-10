import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { graphql, navigate } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import flatten from 'flat';
import gfm from 'remark-gfm';
import { preToCodeBlock } from 'mdx-utils';
import {
  AnchorHeading,
  Button,
  Code,
  HeadingsTableOfContents,
  Icon,
  LinkHelper as Link,
  NoteBox,
  SupportFooter,
  WarningBox,
} from 'components';
import { useScrollToHash } from 'hooks';
import productsDict from 'constants/products';
import { findNextPrevPages } from './utils';
import './styles.scss';

const shortcodes = {
  // custom react components.
  // gatsby mdx won't process markdown inside shortcodes &
  // react-markdown won't process URLs on its own,
  // so we're using the github markdown (gfm) plugin,
  // and react-markdown rather than dangerouslySetInnerHTML
  Note: ({ children, title, ...props }) => (
    <NoteBox title={title} {...props}>
      <ReactMarkdown plugins={[gfm]} children={children} />
    </NoteBox>
  ),
  Warning: ({ children, ...props }) => (
    <WarningBox {...props}>
      <ReactMarkdown plugins={[gfm]} children={children} />
    </WarningBox>
  ),
};

const replacedComponents = {
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />;
    }
  },
  wrapper: props => <div className="docs__mdx" {...props} />,
};

export default function DocumentationPage({ data, location, path }) {
  const {
    body,
    fields: { sectionSlug, slug, title },
    tableOfContents,
  } = data.mdx;

  // get section info
  const sectionObj = data.allYaml.nodes[0];
  const pagesFlat = flatten(sectionObj.pages);
  const sectionTitle = productsDict[sectionSlug].title;
  const pagePath = slug.split('/documentation/')[1].slice(0, -1); // remove trailing slash

  // get page info
  const headingsTableOfContents = tableOfContents.items || null;
  const { nextPage, prevPage } = findNextPrevPages({ pagesFlat, sectionSlug, pagePath });

  // REDIRECTS:
  // if this page is marked 'isHeading' in _contents.yaml,
  // and someone manually navigates to it,
  // redirect to the first of its child pages.

  const pagePathIndex = Object.values(pagesFlat).indexOf(pagePath);
  const pagePathKey = pagePathIndex >= 0 && Object.keys(pagesFlat)[pagePathIndex];
  const pageIsHeading = pagePathKey && pagesFlat[pagePathKey.replace('url', 'isHeading')];
  const redirectDest =
    pageIsHeading && `/documentation/${pagesFlat[pagePathKey.replace('url', 'pages.0.url')]}/`;
  // redirectDest will be undefined if there are no child pages

  useEffect(() => {
    redirectDest && navigate(redirectDest);
  }, []);

  useScrollToHash(location);

  return (
    <React.Fragment>
        {/* MAIN CONTENT */}
        <div className="docs__main">
          <div className="docs__main-container">
            {/* GITHUB BUTTON */}
            <div className="docs__github-btn">
              <Button
                icon="githubWhite"
                link={productsDict[sectionSlug].githubUrl}
                size="navGithub"
                type="primary"
              >
                {sectionTitle} Github
              </Button>
            </div>
            <h1 className="docs__main-title">{redirectDest ? 'Redirecting...' : title}</h1>
            {!redirectDest && (
              <React.Fragment>
                <MDXProvider
                  components={{
                    ...replacedComponents,
                    ...shortcodes,
                    a: props => <Link {...props} location={location} />,
                    h1: props => <AnchorHeading location={location} size="h2" {...props} />,
                    h2: props => <AnchorHeading location={location} size="h3" {...props} />,
                    h3: props => <AnchorHeading location={location} size="h4" {...props} />,
                    h4: props => <AnchorHeading location={location} size="h5" {...props} />,
                    h5: props => <AnchorHeading location={location} size="h6" {...props} />,
                    h6: props => <AnchorHeading location={location} size="h6" {...props} />,
                  }}
                >
                  <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>

                {/* PREV/NEXT BUTTONS */}
                <div className="docs__main-pagination">
                <div>
                  {prevPage && (
                    <div className="chevron-link">
                      <Link to={prevPage.url}>
                        <Icon
                          size={12}
                          img="arrowRightMagenta"
                          style={{ transform: 'scaleX(-1)' }}
                        />{' '}
                        {prevPage.title}
                      </Link>
                    </div>
                  )}
                </div>
                <div>
                  {nextPage && (
                    <div className="chevron-link">
                      <Link to={nextPage.url}>
                        {nextPage.title} <Icon size={12} img="arrowRightMagenta" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </React.Fragment>
          )}
          {/* SUPPORT FOOTER */}
          <SupportFooter />
        </div>
        </div>
{/* PAGE/HEADINGS TABLE OF CONTENTS */}
      <div className="docs__toc-headings">
        {/* GITHUB BUTTON */}
        <Button
          className="docs__github-btn"
          link={productsDict[sectionSlug].githubUrl}
          type="primary"
        >
          <Icon img="githubWhite" size={20} /> {sectionTitle} Github
        </Button>
        {!redirectDest && headingsTableOfContents && (
          <HeadingsTableOfContents items={headingsTableOfContents} location={location} />
        )}
      </div>
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query($id: String!, $sectionSlug: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        sectionSlug
        slug
        title
      }
      body
      tableOfContents(maxDepth: 2)
      parent {
        ... on File {
          relativePath
        }
      }
    }
    allYaml(filter: { sectionSlug: { eq: $sectionSlug } }) {
      nodes {
        pages {
          isHeading
          title
          url
          pages {
            title
            url
            pages {
              title
              url
              pages {
                title
                url
              }
            }
          }
        }
      }
    }
  }
`;
