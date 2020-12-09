import React from 'react';
import { Link } from 'gatsby';
import {
  connectHits,
  connectStateResults,
  Highlight,
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
  const hitsBySection = hits.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.sectionSlug]: [...(acc[curr.sectionSlug] || []), curr],
    }),
    {}
  );

  return (
    <div className={className}>
      {Object.keys(hitsBySection).map(hitSection => (
        <div className="search__result" key={hitSection}>
          <div className="search__result__section">{sectionTitleDict[hitSection]} Docs</div>
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
