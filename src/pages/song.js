import React from 'react';

import Header from 'components/Header';
import Intro from 'components/song/Intro';
import KeyPoints from 'components/song/KeyPoints';
import SecondaryPoints from 'components/song/SecondaryPoints';
import GettingStarted from 'components/song/GettingStarted';
import StorageSystem from 'components/song/StorageSystem';
import GetStarted from 'components/song/GetStarted';
import { products } from 'common/products';

const Song = () => (
  <React.Fragment>
    <Header getStartedTo={products.song.getStarted} />
    <Intro />
    <KeyPoints />
    <SecondaryPoints />
    <GettingStarted />
    <StorageSystem />
    <GetStarted />
  </React.Fragment>
);

export default Song;
