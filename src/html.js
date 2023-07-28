import React from 'react';
import { Script } from 'gatsby';
import favicon from './img/favicon.ico';

export default function HTML({ body, headComponents, postBodyComponents }) {
  return (
    <html lang="en" className="has-navbar-fixed-top">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        {headComponents}

        <link rel="shortcut icon" href={favicon} />
        <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap"
          rel="stylesheet"
        />
        {/*  NOTE: normally wouldn't use static folder but npm / sass imports for basscss are not working. */}
        <link href="/css/basscss.css" rel="stylesheet"></link>
        {/* <!-- Matomo Tag Manager --> */}
        <script
          id="matomo-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `var _mtm = window._mtm = window._mtm || [];
  _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
  (function() {
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://webstats.oicr.on.ca/piwik/js/container_khE7TC0F.js'; s.parentNode.insertBefore(g,s);
  })()`,
          }}
        />

        {/* <!-- End Matomo Tag Manager --> */}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
}
