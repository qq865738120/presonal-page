const path = require('path')

module.exports = {
  siteMetadata: {
    title: '导航',
    siteUrl: `https://home.ddnszwj.top`,
  },
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-root-import',
    //   options: {
    //     src: path.join(__dirname, 'src'),
    //     components: path.join(__dirname, 'src/components')
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-gatsby-cloud`,
    //   options: {
    //     headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
    //     allPageHeaders: [
    //       "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
    //     ], // option to add headers for all pages. `Link` headers are transformed by the below criteria
    //     mergeSecurityHeaders: false, // boolean to turn off the default security headers
    //     mergeLinkHeaders: false, // boolean to turn off the default gatsby js headers
    //     mergeCachingHeaders: false, // boolean to turn off the default caching headers
    //     transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
    //     generateMatchPathRewrites: false, // boolean to turn off automatic creation of redirect rules for client only paths
    //   },
    // },
    `gatsby-plugin-gatsby-cloud`,
    // {
    //   resolve: `gatsby-plugin-create-client-paths`,
    //   options: { prefixes: [`/app/*`] },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    'gatsby-plugin-mantine',
    "gatsby-transformer-yaml",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/config`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },
  ],
};
