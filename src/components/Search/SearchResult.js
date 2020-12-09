import React from 'react';
import { Link } from 'gatsby';
import {
  connectHits,
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from 'react-instantsearch-dom';

const sectionTitleDict = {
  arranger: 'Arranger',
  dms: 'DMS',
  ego: 'Ego',
  jukebox: 'Jukebox',
  maestro: 'Maestro',
  oncojs: 'OncoJs',
  persona: 'Persona',
  riff: 'Riff',
  score: 'Score',
  song: 'Song',
};

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;
  return (
    <div className="HitCount">
      {hitCount} result{hitCount === 1 ? '' : 's'}
    </div>
  );
});

const CustomHits = connectHits(({ hits, hitComponent: HitComponent, className }) => {
  return (
    <div className={className}>
      {hits.map(hit => (
        <HitComponent key={hit.slug} hit={hit} />
      ))}
    </div>
  );
});

const PageHit = ({ hit }) => {
  // const isFirstInSection = hits.filter()
  return (
    <div className="search__result">
      <div className="search__result__section">{sectionTitleDict[hit.sectionSlug]} Docs</div>
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
    </div>
  );
};

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <CustomHits className="Hits" hitComponent={PageHit} />
  </Index>
);

const SearchResult = ({ className = '', indices, show }) => (
  <div className={`${className} ${show ? 'open' : 'closed'}`}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
    <PoweredBy />
  </div>
);

export default SearchResult;
