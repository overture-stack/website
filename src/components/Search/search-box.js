import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { Icon } from 'components';

export default connectSearchBox(({ refine, currentRefinement, className, onFocus }) => (
  <form className={className}>
    <input
      className="search__box-input"
      type="text"
      placeholder="Search all documentation"
      aria-label="Search all documentation"
      onChange={e => refine(e.target.value)}
      value={currentRefinement}
      onFocus={onFocus}
    />
    <Icon className="search__box-icon" img="searchBar" size={20} />
  </form>
));
