import React from 'react';
import scrollToElement from 'scroll-to-element';
import { Layout } from 'components';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

const scrollToHash = (prevLocation) => {
  const { hash } = prevLocation;
  if (hash) {
    scrollToElement(hash, {
      offset: -70,
      duration: 250,
    });
  }
};

export function onPreRouteUpdate(args) {
  const { prevLocation = '' } = args;
  // scroll to ID before updating the route/browser address bar
  // (pre-empts the browser's own scrolling)
  if (prevLocation) scrollToHash(prevLocation);
}
