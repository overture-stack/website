// keep at top of file
// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

const path = require('path');
const startCase = require('lodash.startcase');

export function onCreateNode({ node, getNode, actions: { createNodeField } }) {
  // nodes in gatsby are the main data interface. everything is a node.
  // gatsby creates nodes (data) THEN creates pages.

  if (node.internal.type === 'Mdx') {
    // markdown nodes/pages
    const mdxPage = getNode(node.parent);
    const { ext, name: pageName, relativeDirectory, relativePath, sourceInstanceName } = mdxPage;

    // make index the root page of the folder
    const isIndex = pageName === 'index';
    const pageSlug = isIndex ? '' : `/${pageName}`;

    // documentation section
    const isDocs = sourceInstanceName === 'docs';

    const slug = isDocs
      ? `/documentation/${relativeDirectory}${pageSlug}`
      : `/${relativePath.replace(ext, '')}`;

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
        (isDocs && isIndex && startCase(relativeDirectory)) ||
        '',
    });
  }
}

export async function createPages(params) {
  // use promise.all to build different page types concurrently.
  // required when using external APIs for content.
  await Promise.all([createMarkdownPages(params)]);
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
      const section = slug.split('/').filter(x => x)[1];
      createPage({
        path: slug,
        component: path.resolve('src/templates/documentation/index.js'),
        context: {
          // use for graphQL query in template
          id,
          section,
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
