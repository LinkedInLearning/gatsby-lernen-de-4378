/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Angepasster Starter`,
    titleTemplate: `%s · ein Startpunkt`,
    author: {
      name: `Morten Rand-Hendriksen`,
      summary: `a ballroom dancer playing at being a developer.`,
    },
    description: `Angepasster Starter für Gatsby`,
    url: `https://something.or.other`,
    logo: `static/logo.png`,
    twitter: `mor10`,
    //pages: [`index`, `about`, `events`],
    menuLinks: [
      {
        name: `Start`,
        link: `/`,
      },
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Events`,
        link: `/events`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-css-customs`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/content/events/`,
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `Event`, // a fixed string
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/content/articles/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              //Es ist wichtig die maxWidth (in Pixeln) vom Inhalts-Container anzugeben
              //weil dieses Plugin das für die Erzeugung der Bilder benötigt
              maxWidth: 1080,
              quality: 100,
            },
          },
        ],
      },
    },
  ],
}
