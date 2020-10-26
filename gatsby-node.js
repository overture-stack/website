// keep at top of file
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');
const startCase = require('lodash.startcase');
const utils = require('./utils.js');

// setup documentation section
const SHOW_DOCS = process.env.GATSBY_SHOW_DOCS === 'true';

export function onCreateNode({ node, getNode, actions: { createNodeField } }) {
  // nodes in gatsby are the main data interface. everything is a node.
  // gatsby creates nodes (data) THEN creates pages.

  if (node.internal.type === 'Mdx') {
    // markdown nodes/pages
    const mdxPage = getNode(node.parent);
    const { ext, name: pageName, relativeDirectory, relativePath, sourceInstanceName } = mdxPage;

    // make index the root page of the folder
    const isIndex = pageName === 'index';
    const pageSlug = isIndex ? '' : `/${utils.makeURLSafeString(pageName)}`;

    // documentation section
    const isDocs = sourceInstanceName === 'docs';
    const docsSectionSlug = utils.makeURLSafeString(relativeDirectory);

    const slug = isDocs
      ? `/documentation/${docsSectionSlug}${pageSlug}`
      : `/${relativePath
          .split('/')
          .map(str => utils.makeURLSafeString(str))
          .join('/')
          .replace(ext, '')}`;

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });

    createNodeField({
      // need this to make per-page graphQL queries
      name: 'id',
      node,
      value: node.id,
    });

    createNodeField({
      // frontmatter title field
      name: 'title',
      node,
      value:
        node.frontmatter.title ||
        startCase(pageSlug) ||
        (isDocs && isIndex && startCase(docsSectionSlug)) ||
        '',
    });
  }
}

export async function createPages(params) {
  // use promise.all to build different page types concurrently.
  // required when using external APIs for content.
  await Promise.all([...(SHOW_DOCS ? [createMarkdownPages(params)] : [])]);
}

async function createMarkdownPages({ graphql, actions: { createPage } }) {
  const { data } = await graphql(`
    {
      allMdx {
        nodes {
          fields {
            id
            slug
          }
        }
      }
    }
  `);

  data.allMdx.nodes.forEach(node => {
    const { id, slug } = node.fields;

    // documentation section
    if (slug.match(/^\/documentation/)) {
      createPage({
        path: slug,
        component: path.resolve('src/templates/documentation.js'),
        context: {
          id, // use to query page content in template
        },
      });
    }
  });
}

export function onCreateWebpackConfig({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        meta: path.resolve(__dirname, 'meta'),
        data: path.resolve(__dirname, 'src/data'),
        styles: path.resolve(__dirname, 'src/styles'),
        templates: path.resolve(__dirname, 'src/templates'),
      },
    },
  });
}
