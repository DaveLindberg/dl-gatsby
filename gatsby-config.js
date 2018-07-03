module.exports = {
  siteMetadata: {
    title: 'Dave Lindberg Marketing &amp; Design'
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorsYaml'
  },
  plugins: [
    // Adding various source folders to the GraphQL layer.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-1350255-1`,
        // Puts tracking script in the head instead of the body
        head: true
        // Setting this parameter is optional
        // anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-behance`,
      options: {
        // Visit your profile and grab the name after behance.net/<< username >>
        username: 'DaveLindberg',
        // You can get your API Key here: https://www.behance.net/dev/register
        apiKey: 'IMFOXfsNlR5RXIJS4gqXvMDCqsiXw0Ag'
      }
    },
    'gatsby-plugin-react-next',
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-netlify` // make sure to put last in the array
  ]
};
