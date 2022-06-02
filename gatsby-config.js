module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: './src/state/createStore'
      }
    },
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          'http://20.114.244.229:1337/events',
          'http://20.114.244.229:1337/categories'
        ]
      },
    },
  ],
}
