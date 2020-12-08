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

function pageToAlgoliaRecord({ id, fields = {}, ...rest }) {
  return {
    objectID: id,
    ...fields,
    ...rest,
  };
}

export const queries = [
  {
    query: docsAlgoliaQuery,
    transformer: ({ data }) => data.allMdx.nodes.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];
