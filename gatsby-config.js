const path = require('path')

module.exports = {
    pathPrefix: '/',
    siteMetadata: {
    title: 'Britt Clennett',
    description:
      'See my latest articles, stories and showreels',
    author: 'Jordan',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/videos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `audio`,
        path: `${__dirname}/src/audio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Britt Clennett',
        short_name: 'Britt',
        start_url: '/',
        background_color: '#f43',
        theme_color: '#f43',
        display: 'minimal-ui',
        icon: 'src/images/britt-sketch-square.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
        resolve: "gatsby-source-graphql",
        options: {
            // The top level query type, can be anything you want!
            typeName: "GCMS",
            // The field you'll query against, can also be anything you want.
            fieldName: "gcms",
            // Your API endpoint, available from the dashboard and settings window.
            url: "https://api-apeast.graphcms.com/v1/cjtkv4yoq6k6201b94et96ls8/master",
        },
    },
    {
        resolve: "gatsby-plugin-google-tagmanager",
        options: {
            id: "UA-144234610-1",

            // Include GTM in development.
            // Defaults to false meaning GTM will only be loaded in production.
            includeInDevelopment: false,

            // datalayer to be set before GTM is loaded
            // should be an object or a function that is executed in the browser
            // Defaults to null
            defaultDataLayer: { platform: "gatsby" },
        },
    },
  ],
}
