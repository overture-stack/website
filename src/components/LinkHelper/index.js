import React from 'react';
import { navigate } from '@reach/router';
import scrollToElement from 'scroll-to-element';
import urlJoin from 'proper-url-join';

// use this instead of anchor (<a href=""></a>) tags

// hash links: https://www.gatsbyjs.com/docs/gatsby-link#recommendations-for-programmatic-in-app-navigation

export default function LinkHelper({ location = {}, onClick = undefined, to = '', ...props }) {
  const samePageHash = to.charAt(0) === '#';
  const isExternal = to.match(/^\b(http|mailto)/);
  const isInternal = to && !isExternal && !samePageHash;
  const differentPageHash = isInternal && to.includes('#');
  const url = isInternal
    ? urlJoin(to, { leadingSlash: true, trailingSlash: !differentPageHash })
    : to;

  const hashOnClick = (event) => {
    event.preventDefault();
    const { hash = '' } = location;
    if (hash === url) {
      // navigate() won't work but
      // we still want to scroll
      scrollToElement(url, {
        offset: -70,
        duration: 250,
      });
    } else {
      // see: gatsby-browser.js onPreRouteUpdate
      // page scrolls just before hash change
      navigate(url);
    }
  };

  return isExternal ? (
    <a {...props} href={url} onClick={onClick} target="_blank" />
  ) : url ? (
    <a {...props} href={url} onClick={samePageHash ? hashOnClick : onClick} />
  ) : (
    // probably <a name="string" />
    <a {...props} onClick={onClick} />
  );
}
