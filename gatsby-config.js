/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: `Sam Finney`,
    description: `Portfolio website for the cinematographer, Sam Finney`,
    author: `Sam Finney`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      apiToken: process.env.DATOCMS_API_TOKEN,
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `sam-finney`,
      icon: `src/images/finney-icon.avif`, // This path is relative to the root of the site.
    },
  },]
};