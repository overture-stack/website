// needs to be at the top of the file.
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const remarkSlug = require('remark-slug');
const config = require('./meta/config');
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

const ENABLE_SEARCH_INDEXING = process.env.ENABLE_SEARCH_INDEXING === 'true';

const REMARK_MAX_WIDTH = 1035;

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    rssMetadata: {
      site_url: config.siteUrl + pathPrefix,
      feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl + pathPrefix}/icons/icon-512x512.png`,
      author: config.userName,
      copyright: config.copyright,
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet', // adds meta tags
    'gatsby-plugin-remove-serviceworker', // Supposedly this fixes possible caching issues. https://stackoverflow.com/a/56548989/5378196
    // Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsTrackingId,
        // Puts tracking script in the head instead of the body
        head: false,
        anonymize: true, // optional
        respectDNT: true, // optional
        // Avoids sending pageview hits from custom paths
        exclude: [],
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/markdown/documentation`,
      },
    },
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        // required for headings table of contents
        // adds ID to H# tags
        remarkPlugins: [remarkSlug],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: REMARK_MAX_WIDTH,
            },
          },
          {
            // copies over *any* random files you linked to
            // from a markdown page
            resolve: 'gatsby-remark-copy-linked-files',
          },
        ],
        extensions: ['.mdx', '.md'],
        plugins: ['gatsby-remark-images'],
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: 'Yaml',
      },
    },
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
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: REMARK_MAX_WIDTH,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: config.themeColor,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    // {
    // TODO: get a google tag manager ID if we're using it
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: {
    //     id: config.googleTagManagerID,
    //     includeInDevelopment: false,
    //   },
    // },
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
      resolve: 'gatsby-plugin-algolia',
      options: {
        apiKey: process.env.ALGOLIA_ADMIN_API_KEY,
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        chunkSize: 10000, // default 1000
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries: require('./meta/algolia-queries.js'),
        skipIndexing: !ENABLE_SEARCH_INDEXING,
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '74',
        matomoUrl: 'https://webstats.oicr.on.ca/piwik/',
        siteUrl: 'https://www.overture.bio/',
      },
    },
  ],
};
