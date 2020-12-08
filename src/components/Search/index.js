import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom';

const GATSBY_ALGOLIA_APP_ID = process.env.GATSBY_ALGOLIA_APP_ID;
const GATSBY_ALGOLIA_SEARCH_KEY = process.env.GATSBY_ALGOLIA_SEARCH_KEY;
const GATSBY_ALGOLIA_INDEX_NAME = process.env.GATSBY_ALGOLIA_INDEX_NAME;

const searchClient = algoliasearch(GATSBY_ALGOLIA_APP_ID, GATSBY_ALGOLIA_SEARCH_KEY);

export default function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName={GATSBY_ALGOLIA_INDEX_NAME}>
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
}
