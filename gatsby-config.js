// needs to be at the top of the file.
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require('./meta/config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
  },
  plugins: [
    'gatsby-plugin-react-helmet', // adds meta tags
    'gatsby-plugin-remove-serviceworker', // Supposedly this fixes possible caching issues. https://stackoverflow.com/a/56548989/5378196
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        // /src/pages is a "gatsby thing".
        // these pages are created based on folder structure.
        // e.g. pages/index.js is the homepage.
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Default output is /sitemap/sitemap-index.xml, which nothing links to.
        output: '/',
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: config.themeColor,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: `/icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -200,
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: process.env.GATSBY_MATOMO_SITE_ID,
        matomoUrl: process.env.GATSBY_MATOMO_URL,
        siteUrl: process.env.GATSBY_MATOMO_SITE_URL,
        // Tracking in development would send local hits to production statistics
        // and ignore the browser's Do Not Track header.
        dev: false,
      },
    },
  ],
};
