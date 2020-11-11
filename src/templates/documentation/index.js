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
  HeadingsTableOfContents,
  Icon,
  NoteBox,
  SectionTableOfContents,
  WarningBox,
} from 'components';
import NotFoundPage from 'pages/404';
import { githubLinks } from 'meta/config';
import { findPrevPage, findNextPage, sectionIcons } from './utils';
import './styles.scss';

const SHOW_DOCS = process.env.GATSBY_SHOW_DOCS === 'true';

const headings = {
  // the page title is h1
  // so demote markdown headings by one level
  h1: props => <AnchorHeading size="h2" {...props} />,
  h2: props => <AnchorHeading size="h3" {...props} />,
  h3: props => <AnchorHeading size="h4" {...props} />,
  h4: props => <AnchorHeading size="h5" {...props} />,
  h5: props => <AnchorHeading size="h6" {...props} />,
  h6: props => <AnchorHeading size="h6" {...props} />,
};

const shortcodes = {
  // gatsby mdx will not process markdown inside shortcodes.
  // react-markdown won't process URLs on its own,
  // so we're using the github markdown plugin
  Note: ({ children, title, ...props }) => (
    <NoteBox title={title} {...props}>
      <ReactMarkdown plugins={[gfm]} children={children} />
    </NoteBox>
  ),
  Warning: ({ children, title, ...props }) => (
    <WarningBox {...props}>
      <ReactMarkdown plugins={[gfm]} children={children} />
    </WarningBox>
  ),
};

const components = {
  ...headings,
  ...shortcodes,
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
  const sectionIcon = sectionIcons[sectionSlug];

  // get page info
  const headingsTableOfContents = tableOfContents.items || null;
  const pageSlug = slug
    .split('/documentation/')[1]
    // remove trailing slash from page slug
    .slice(0, -1);
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
        <div className="docs__column" style={{ background: 'AliceBlue', padding: 10, width: 250 }}>
          <Link to="/documentation/">
            <h2 className="t-h2">&larr; Docs</h2>
          </Link>
          <ol>
            <li>
              <Link to={`/documentation/${sectionSlug}/`}>{sectionTitle}</Link>
            </li>
            <SectionTableOfContents items={sectionObj.items} />
          </ol>
          {/* GITHUB BUTTON */}
          <Button
            className="docs__toc-github"
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
            <MDXProvider components={components}>
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
        <div className="docs__column" style={{ background: 'WhiteSmoke', padding: 10, width: 250 }}>
          <h2 className="t-h2">Headings</h2>
          {headingsTableOfContents && <HeadingsTableOfContents items={headingsTableOfContents} />}
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
