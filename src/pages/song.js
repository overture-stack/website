import React from 'react';
import Link from 'gatsby-link';

import Header from 'components/Header';

const Song = () => (
  <React.Fragment>
    <Header />
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </div>
  </React.Fragment>
);

export default Song;
