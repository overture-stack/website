// keep at top of file
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');
const startCase = require('lodash.startcase');

const SHOW_DOCS = process.env.GATSBY_SHOW_DOCS === 'true';

export function onCreateNode({ node, getNode, actions: { createNodeField } }) {
  // nodes in gatsby are the main data interface. everything is a node.
  // gatsby creates nodes (data) THEN creates pages.
  if (node.internal.type === 'Mdx') {
    // markdown nodes/pages
    const mdxPage = getNode(node.parent);

    const slug =
      // make index.md the root page of its directory.
      // without this step you'll get /SECTION_NAME/index/ pages
      // and we just want /SECTION_NAME/
      mdxPage.name === 'index'
        ? mdxPage.relativeDirectory
        : mdxPage.relativePath.replace(mdxPage.ext, '');

    createNodeField({
      // overture.bio/SLUG_HERE/
      // we want trailing slashes
      name: `slug`,
      node,
      value: `/${slug}`,
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
      value: node.frontmatter.title || startCase(mdxPage.name),
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
    query {
      allMdx {
        edges {
          node {
            fields {
              id
              slug
            }
          }
        }
      }
    }
  `);

  data.allMdx.edges.forEach(({ node }) => {
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
