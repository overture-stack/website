import { createRef, default as React, useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import { useClickOutside } from 'hooks';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import './styles.scss';

export default function Search({ indices }) {
  const rootRef = createRef();
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  );
  useClickOutside(rootRef, () => setFocus(false));
  return (
    <div className="search__root" ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchBox className="search__box" onFocus={() => setFocus(true)} hasFocus={hasFocus} />
        <SearchResult
          className="search__results"
          indices={indices}
          query={query}
          show={query && query.length > 0 && hasFocus}
        />
      </InstantSearch>
    </div>
  );
}
