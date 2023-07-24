import React from 'react';
import favicon from './img/favicon.ico';

export default function HTML({ body, headComponents, postBodyComponents }) {
  var _mtm = (window._mtm = window._mtm || []);

  return (
    <html lang="en" className="has-navbar-fixed-top">
      <head>
        {/* <!-- Matomo Tag Manager --> */}
        <script>
          {_mtm.push({ 'mtm.startTime': new Date().getTime(), event: 'mtm.Start' })(function () {
            var d = document,
              g = d.createElement('script'),
              s = d.getElementsByTagName('script')[0];
            g.async = true;
            g.src = 'https://webstats.oicr.on.ca/piwik/js/container_khE7TC0F.js';
            s.parentNode.insertBefore(g, s);
          })()}
        </script>
        {/* <!-- End Matomo Tag Manager --> */}

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
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
}
