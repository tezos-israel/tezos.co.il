const rssFeedConfig = require('./src/gatsby-config/rss-feed');

const siteUrl = 'https://tezos.co.il';

module.exports = {
  siteMetadata: {
    title: `Tezos Israel`,
    description: `Tezos Israel is an innovation lab that serves the Israeli ecosystem in educating, training, and onboarding blockchain technology.`,
    author: `@TezosIsrael`,
    siteUrl,
    lang: `en-US`,
  },
  plugins: [
    process.env.NODE_ENV === 'production' && {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id:
          process.env.GOOGLE_TAGMANAGER_ID ||
          (() => {
            throw new Error('missing google tagmanager id');
          })(),

        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl,
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/blog`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        path: `${__dirname}/data/blog/_authors`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `src/images/favicon-32x32.png`,
      },
    },
    rssFeedConfig(siteUrl),
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [process.env.GOOGLE_TAGMANAGER_ID],
    //   },
    // },
  ].filter(Boolean),
};
