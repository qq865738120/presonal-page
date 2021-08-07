exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    toPath: `/app/`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}

exports.onCreateDevServer = ({ app }) => {
  console.log(app);
}
