import React from 'react';
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
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
}
