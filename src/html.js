/**
 * Created  on 31/3/18
 */
import React, { Component } from 'react'
import favicon from './img/favicon.ico'

let inlinedStyles = ''
if (process.env.NODE_ENV === 'production') {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require('!raw-loader!../public/styles.css')
  } catch (e) {
    /* eslint no-console: "off" */
    console.log(e)
  }
}

export default class HTML extends Component {

  render() {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      )
    }
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
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src={__PATH_PREFIX__ + '/js/toggle.js'} />
          
          {/* JIRA EMBED SCRIPT TODO: Move this to JUST the contact page, via componentDidMount. 
          <script src={__PATH_PREFIX__ + '/js/jira_embed.js'} />
          <script type='text/javascript' src='https://extsd.oicr.on.ca/s/5hcqv5/75007/b6b48b2829824b869586ac216d119363/1.1.4.1/_/download/resources/com.jelldesk.apps.embeddable-widget:widget-client-resources/embeddable-client.js'></script>
          */}
        </body>
      </html>
    )
  }
}
