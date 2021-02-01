import React from 'react';
import { connectHits, Highlight, Index, Snippet, PoweredBy } from 'react-instantsearch-dom';
import { LinkHelper as Link } from 'components';
import productsDict from 'constants/products';

// TODO: not sure if we're using this
// const HitCount = connectStateResults(({ searchResults }) => {
//   const hitCount = searchResults && searchResults.nbHits;
//   return (
//     <div className="HitCount">
//       {hitCount} result{hitCount === 1 ? '' : 's'}
//     </div>
//   );
// });

const CustomHits = connectHits(({ hits, hitComponent: HitComponent, className, query }) => {
  const hitsBySection = hits.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.sectionSlug]: [...(acc[curr.sectionSlug] || []), curr],
    }),
    {}
  );

  return (
    <div className={className}>
      {Object.keys(hitsBySection).length === 0 && query && (
        <div className="search__result search__no-results">
          No results were found for the keyword: <mark>{query}</mark>
        </div>
      )}
      {Object.keys(hitsBySection).map(hitSection => (
        <div className="search__result" key={hitSection}>
          <div className="search__result__section">{productsDict[hitSection].title} Docs</div>
          {hitsBySection[hitSection].map(hit => (
            <HitComponent key={hit.slug} hit={hit} />
          ))}
        </div>
      ))}
    </div>
  );
});

const PageHit = ({ hit }) => (
  <Link to={hit.slug}>
    <div className="search__result__page">
      <div className="search__result__page-title">
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </div>
      <div className="search__result__page-snippet">
        <Snippet attribute="excerpt" hit={hit} tagName="mark" />
      </div>
    </div>
  </Link>
);

const HitsInIndex = ({ index, query }) => (
  <Index indexName={index.name}>
    {/* <HitCount /> */}
    <CustomHits className="Hits" hitComponent={PageHit} query={query} />
  </Index>
);

const SearchResult = ({ className = '', indices, query, show }) => (
  <div className={`${className} ${show ? 'open' : 'closed'}`}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} query={query} />
    ))}
    <PoweredBy />
  </div>
);

export default SearchResult;
