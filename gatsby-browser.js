import scrollToElement from 'scroll-to-element';

export { wrapPageElement, wrapRootElement } from './gatsby-shared';

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
