const indexName = 'test_overturedocs';

const docsAlgoliaQuery = `
  {
    allMdx(filter: { fields: { draft: { ne: true } } }) {
      nodes {
        id
        fields {
          draft
          sectionSlug
          slug
          title
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
`;

function pageToAlgoliaRecord({ id, fields = {}, ...rest }) {
  const { sectionSlug, slug, title } = fields;
  return {
    objectID: id,
    sectionSlug,
    slug,
    title,
    ...rest,
  };
}

const queries = [
  {
    query: docsAlgoliaQuery,
    transformer: ({ data }) => data.allMdx.nodes.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:10`] },
  },
];

module.exports = queries;
