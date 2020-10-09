// keep at top of file
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

const startCase = require('lodash.startcase');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  fields {
                    id
                  }
                  tableOfContents
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        if (process.env.GATSBY_SHOW_DOCS === 'true') {
          result.data.allMdx.edges.forEach(({ node }) => {
            // NOTE: currently only /documentation uses markdown
            if (node.fields.slug.includes('/documentation/')) {
              createPage({
                path: node.fields.slug || '/',
                component: path.resolve('./src/layouts/DocumentationLayout.js'),
                context: {
                  id: node.fields.id,
                },
              });
            }
          });
        }
      })
    );
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);

    // make index.md the root page of its directory
    // TODO: stub index if it's not provided?

    const slug =
      parent.name === 'index'
        ? parent.relativeDirectory
        : parent.relativePath.replace(parent.ext, '');

    createNodeField({
      name: `slug`,
      node,
      value: `/${slug}/`,
    });

    createNodeField({
      name: 'id',
      node,
      value: node.id,
    });

    // use page filename as title if title field isn't provided

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title || startCase(parent.name),
    });
  }
};
