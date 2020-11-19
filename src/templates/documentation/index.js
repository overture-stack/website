import React from 'react';
import ReactMarkdown from 'react-markdown';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import flatten from 'flat';
import gfm from 'remark-gfm';
import { preToCodeBlock } from 'mdx-utils';
import {
  AnchorHeading,
  Button,
  Code,
  LinkHelper,
  HeadingsTableOfContents,
  Icon,
  NoteBox,
  SectionTableOfContents,
  WarningBox,
} from 'components';
import { useScrollToHash } from 'hooks';
import NotFoundPage from 'pages/404';
import { githubLinks } from 'meta/config';
import { findNextPrevPages, sectionIcons } from './utils';
import './styles.scss';

const SHOW_DOCS = process.env.GATSBY_SHOW_DOCS === 'true';

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
  if (!SHOW_DOCS) return <NotFoundPage />;

  const {
    body,
    fields: { slug, title },
    tableOfContents,
  } = data.mdx;

  // get section info
  const sectionObj = data.allYaml.nodes[0];
  const sectionPages = flatten(sectionObj.pages);
  const { sectionSlug, sectionTitle } = sectionObj;
  const sectionIcon = sectionIcons[sectionSlug];

  // get page info
  const headingsTableOfContents = tableOfContents.items || null;
  const { nextPage, prevPage } = findNextPrevPages({ sectionPages, sectionSlug, slug });

  useScrollToHash(location);

  return (
    <main className="docs__page">
      <div className="docs__header">
        <div className="docs__header-title">
          <Icon className="icon" size={45} img={sectionIcon} />
          <h1>{sectionTitle} Documentation</h1>
        </div>
        <div className="docs__header-search">
          <div>Search will go here</div>
        </div>
      </div>
      <div className="docs__columns">
        {/* SECTION TABLE OF CONTENTS */}
        <div className="docs__toc-section">
          <Link to="/documentation/" className="docs__toc-section__overview">
            <Icon size={6} img="arrowLeftBlue" />
            Documentation Overview
          </Link>

          <SectionTableOfContents pages={sectionObj.pages} path={path} sectionSlug={sectionSlug} />

          {/* GITHUB BUTTON */}
          <Button
            className="docs__toc-section__github"
            externalLink={githubLinks[sectionSlug]}
            type="primary"
          >
            <Icon img="githubWhite" size={20} /> {sectionTitle} Github
          </Button>
        </div>

        {/* MAIN CONTENT */}
        <div className="docs__main">
          <div className="docs__main-container">
            <h1 className="docs__main-title">{title}</h1>

            {/* MARKDOWN PAGE CONTENT */}
            <MDXProvider
              components={{
                ...replacedComponents,
                ...shortcodes,
                a: props => <LinkHelper {...props} location={location} />,
                // the page title is h1
                // so demote markdown headings by one level
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
                      <Icon size={12} img="arrowRightMagenta" style={{ transform: 'scaleX(-1)' }} />{' '}
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
          </div>
        </div>

        {/* PAGE/HEADINGS TABLE OF CONTENTS */}
        {headingsTableOfContents && (
          <div className="docs__toc-headings">
            <HeadingsTableOfContents items={headingsTableOfContents} location={location} />
          </div>
        )}
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
    allYaml(filter: { sectionSlug: { eq: $section } }) {
      nodes {
        sectionTitle
        sectionSlug
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
            }
          }
        }
      }
    }
  }
`;
