const path = require("path");

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title:
      "Britt Clennett - seasoned journalist with almost a decade of experience covering stories for multiple networks across Asia and the world",
    description:
      "The Hong Kong-raised Australian has reported on some of the biggest stories in the region. She’s gauged the impact of the US-China trade war for Al Jazeera and reported live for TRT World as protesters in Hong Kong demand greater democracy. Britt also covered the 2018 Thai cave rescue and the historic first meeting between the leaders of North and South Korea",
    author: "Jordan",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-twitter",
    "gatsby-plugin-styled-components",
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
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Britt Clennett",
        short_name: "Britt",
        start_url: "/",
        background_color: "#f43",
        theme_color: "#f43",
        display: "minimal-ui",
        icon: "src/images/britt-head-shot-square.png", // This path is relative to the root of the site.
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-144234610-1",
      },
    },
  ],
};
