const indexName = 'test_overturedocs';

const docsAlgoliaQuery = `
  {
    allMdx {
      nodes {
        id
        fields {
          slug
          title
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
`;

function pageToAlgoliaRecord({ node: { id, fields = {}, ...rest } }) {
  return {
    objectID: id,
    ...fields,
    ...rest,
  };
}

const queries = [
  {
    query: docsAlgoliaQuery,
    transformer: ({ data }) => data.allMdx.nodes.map(node => pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];

module.exports = queries;
