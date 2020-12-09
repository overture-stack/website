const indexName = 'test_overturedocs';

const docsAlgoliaQuery = `
  {
    allMdx {
      nodes {
        id
        fields {
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
  return {
    objectID: id,
    ...fields,
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
