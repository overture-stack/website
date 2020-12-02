import React from 'react';
import scrollToElement from 'scroll-to-element';
import { Layout } from 'components';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

const scrollToHash = prevLocation => {
  const { hash } = prevLocation;
  if (hash) {
    scrollToElement(hash, {
      offset: -70,
      duration: 500,
    });
  }
};

export function onPreRouteUpdate(args) {
  const { prevLocation = '' } = args;
  // scroll to hash before updating the route
  // to get a nice smooth animation with offset positioning,
  // so that the fixed navbar doesn't cover the content.
  if (prevLocation) scrollToHash(prevLocation);
  // add useScrollToHash() hook in the page template
  // in order to scroll on page load.
}
