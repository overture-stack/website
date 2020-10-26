// needs to be at the top of the file.
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require('./meta/config');
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

// documentation section
const SHOW_DOCS = process.env.GATSBY_SHOW_DOCS === 'true';

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
    'gatsby-plugin-react-helmet',
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
    ...(SHOW_DOCS
      ? [
          {
            resolve: 'gatsby-plugin-mdx',
            options: {
              gatsbyRemarkPlugins: [
                {
                  resolve: 'gatsby-remark-images',
                  options: {
                    maxWidth: 1035,
                    sizeByPixelDensity: true,
                  },
                },
                {
                  resolve: 'gatsby-remark-copy-linked-files',
                },
              ],
              extensions: ['.mdx', '.md'],
            },
          },
          {
            resolve: 'gatsby-source-filesystem',
            options: {
              name: 'docs',
              path: `${__dirname}/markdown/documentation`,
            },
          },
        ]
      : []),
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
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
        typeName: ({ node, object, isArray }) => object.title,
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
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: config.googleTagManagerID,
        includeInDevelopment: false,
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
  ],
};
