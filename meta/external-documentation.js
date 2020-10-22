// EXAMPLE
// {
//   resolve: `gatsby-source-git`,
//   options: {
//     branch: name of the release tag,
//     name: project name that will go in the URL of the pages,
//     i.e. overture.bio/documentation/NAME/installation
//     patterns: [`documentation/**`], << this means documentation folder is in the top level and we're pulling ALL files from it
//     remote: github repo HTTPS URL,
//   },
// },
// MORE INFO: https://github.com/stevetweeddale/gatsby-source-git

module.exports = [
  {
    resolve: `gatsby-source-git`,
    options: {
      branch: 'v1.1',
      name: `maestro`,
      patterns: [`documentation/**`],
      remote: `https://github.com/samrichca/fake-markdown.git`,
    },
  },
];
