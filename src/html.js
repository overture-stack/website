import React, { Component } from 'react'
import favicon from './img/favicon.ico'

export default class HTML extends Component {
  render() {
    return (
      <html lang="en" className="has-navbar-fixed-top">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          {this.props.headComponents}

          <link rel="shortcut icon" href={favicon} />
          <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet"/>
          {/*  NOTE: normally wouldn't use static folder but npm / sass imports for basscss are not working. */}
          <link href="/css/basscss.css" rel="stylesheet"></link>
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
