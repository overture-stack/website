import React from 'react';
import { navigate } from '@reach/router';
import scrollToElement from 'scroll-to-element';
import { LinkHelper as Link } from 'components';

// https://www.gatsbyjs.com/docs/gatsby-link#recommendations-for-programmatic-in-app-navigation

export default function HashLink({ location: { hash = '' }, to, ...props }) {
  return (
    <Link
      {...props}
      onClick={e => {
        e.preventDefault();
        if (hash === to) {
          // navigate() won't work but
          // we still want to scroll
          scrollToElement(to, {
            offset: -70,
            duration: 250,
          });
        } else {
          // see: gatsby-browser.js onPreRouteUpdate
          // page scrolls just before hash change
          navigate(to);
        }
      }}
      to={to}
    />
  );
}
