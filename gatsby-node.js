// keep at top of file
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');
const startCase = require('lodash.startcase');

// documentation section
const SHOW_DOCS = process.env.GATSBY_SHOW_DOCS === 'true';

export function onCreateNode({ node, getNode, actions: { createNodeField } }) {
  // nodes in gatsby are the main data interface. everything is a node.
  // gatsby creates nodes (data) THEN creates pages.
  if (node.internal.type === 'Mdx') {
    // markdown nodes/pages
    const mdxPage = getNode(node.parent);
    const { sourceInstanceName, name: pageName, relativeDirectory, relativePath, ext } = mdxPage;
    // make index the root page of the folder
    const pageSlug = pageName === 'index' ? '' : `/${pageName}`;

    // documentation
    const isDocs = sourceInstanceName === 'docs';
    const docsSectionSlug = relativeDirectory;

    const slug = isDocs
      ? `/documentation/${docsSectionSlug}${pageSlug}`
      : `/${relativePath.replace(ext, '')}`;

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });

    createNodeField({
      // need this to make graphQL queries at the page level
      name: 'id',
      node,
      value: node.id,
    });

    createNodeField({
      // frontmatter title field
      name: 'title',
      node,
      // use filename as title if there's no title
      value: node.frontmatter.title || startCase(pageSlug) || startCase(docsSectionSlug),
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
    if (node.fields.slug.match(/^\/documentation/)) {
      // NOTE: currently only /documentation uses markdown.
      createPage({
        path: node.fields.slug,
        component: path.resolve('src/templates/documentation.js'),
        context: {
          id: node.fields.id, // use to query page content in template
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
