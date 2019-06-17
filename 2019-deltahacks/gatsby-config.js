module.exports = {
  siteMetadata: {
    title: "DeltaHacks V",
    author: "Abhayraj Jain, Daniel Rooks",
    description: "The homepage for DeltaHacks V"
  },
  pathPrefix: '/dhv',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    {
      resolve: `anchorate`,
      options: {
        scroller: function (element) {
          if (!element) return false
          element.scrollIntoView({ behavior: 'smooth' })
          return true
        },
        callback: function (error) {
          if (error) {
            console.log("didn't work")
          }
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
