import React from 'react';
import scrollToElement from 'scroll-to-element';
import { Layout } from 'components';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

const checkHash = location => {
  const { hash } = location;
  if (hash) {
    scrollToElement(hash, {
      offset: -70,
      duration: 500,
    });
  }
};

export function onPreRouteUpdate({ location, prevLocation }) {
  checkHash(prevLocation || location);
}
