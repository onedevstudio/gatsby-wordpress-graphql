module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    description: `Gatsby + WordPress + GraphQL`,
    author: `Fernando Moreira`,
    siteUrl: `https://gatsby-wordpress-graphql.netlify.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby`,
        short_name: `gatsby`,
        start_url: `/`,
        background_color: `#F46912`,
        theme_color: `#FCB826`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
