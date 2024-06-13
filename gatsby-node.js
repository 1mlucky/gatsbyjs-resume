/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  const { createRedirect } = actions

  // https://levelup.gitconnected.com/programmatic-redirects-in-gatsby-7009a855e973
  // https://github.com/gatsbyjs/gatsby/issues/26218

  createRedirect({
    fromPath: "/abc/",
    toPath: "/ab",
    redirectInBrowser: false,
    isPermanent: true,
    statusCode: 200,
  })
}

exports.onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: false,
          },
        },
      ],
    },
  })
}