// keep at top of file
// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

const path = require('path');
const startCase = require('lodash.startcase');
const properUrlJoin = require('proper-url-join');

const urlJoin = (url = []) => properUrlJoin(...url, { leadingSlash: true, trailingSlash: true });

const onCreateNode = ({ actions, getNode, node }) => {
  // nodes in gatsby are the main data interface. everything is a node.
  // gatsby creates nodes (data) THEN creates pages.

  if (node.internal.type === 'Mdx') {
    // markdown nodes/pages
    const mdxPage = getNode(node.parent);
    const { ext, name: pageName, relativeDirectory, relativePath, sourceInstanceName } = mdxPage;

    // make index the root page of the folder
    const isIndex = pageName === 'index';
    const pageSlug = isIndex ? '' : pageName;

    // documentation section
    const isDocs = sourceInstanceName === 'docs';

    const slug = isDocs
      ? urlJoin(['documentation', relativeDirectory, pageSlug])
      : urlJoin([relativePath.replace(ext, '')]);
    actions.createNodeField({
      // relative URL of the page
      name: `slug`,
      node,
      value: slug,
    });

    actions.createNodeField({
      // need this to make per-page graphQL queries
      name: 'id',
      node,
      value: node.id,
    });

    const title =
      node.frontmatter.title ||
      startCase(pageSlug) ||
      (isDocs &&
        isIndex &&
        startCase(
          relativeDirectory
            .split('/')
            .filter(x => x)
            .pop()
        )) ||
      '';
    actions.createNodeField({
      // frontmatter title field
      name: 'title',
      node,
      value: title,
    });

    const sectionSlug = relativeDirectory
      .split('/')
      .filter(x => x)
      .shift();
    actions.createNodeField({
      name: 'sectionSlug',
      node,
      value: sectionSlug,
    });
  }
};

const createPages = async params => {
  // use promise.all to build different page types concurrently.
  // required when using external APIs for content.
  await Promise.all([createMarkdownPages(params)]);
};

const createMarkdownPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    {
      allMdx {
        nodes {
          fields {
            id
            sectionSlug
            slug
          }
        }
      }
      allYaml {
        nodes {
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
  `);

  data.allMdx.nodes.forEach(node => {
    const { id, sectionSlug, slug } = node.fields;

    // documentation section
    if (slug.match(/^\/documentation/)) {
      actions.createPage({
        path: slug,
        component: path.resolve('src/templates/documentation/index.js'),
        context: {
          // use for graphQL query in template
          id,
          sectionSlug,
        },
      });
    }
  });
};

const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        constants: path.resolve(__dirname, 'constants'),
        data: path.resolve(__dirname, 'src/data'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        meta: path.resolve(__dirname, 'meta'),
        pages: path.resolve(__dirname, 'src/pages'),
        styles: path.resolve(__dirname, 'src/styles'),
        templates: path.resolve(__dirname, 'src/templates'),
        utils: path.resolve(__dirname, 'utils.js'),
      },
    },
  });
};

const createSchemaCustomization = ({ actions }) => {
  // DOCUMENTATION PAGE TYPES
  // - describe structure of _contents.yaml
  // - throw descriptive errors if required fields are missing
  // - prevent build failures if optional fields are missing,
  //   i.e. if none of the sections are nested 4 levels deep.
  const documentationTypeDefs = `
    type Yaml implements Node {
      sectionSlug: String!
      pages: [YamlPages!]
    }
    type YamlPages implements Node {
      isHeading: Boolean
      title: String!
      url: String!
      pages: [YamlPagesPages!]
    }
    type YamlPagesPages implements Node {
      skipPage: Boolean
      title: String!
      url: String!
      pages: [YamlPagesPagesPages!]
    }
    type YamlPagesPagesPages implements Node {
      title: String!
      url: String!
    }
  `;
  actions.createTypes(documentationTypeDefs);
};

module.exports = { createPages, createSchemaCustomization, onCreateNode, onCreateWebpackConfig };
