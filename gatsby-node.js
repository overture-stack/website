const path = require('path');

const onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  if (stage === 'develop') {
    // Gatsby 4 injects its own ESLint plugin into the develop bundle and only
    // recognizes eslintrc-style config, so it ignores eslint.config.mjs and
    // enforces its own rules instead: a second lint authority that can fail the
    // dev bundle over rules this project has deliberately turned off. Lint runs
    // through `npm run lint` (and any editor reading the flat config).
    const config = getConfig();
    config.plugins = config.plugins.filter(
      (plugin) => plugin.constructor.name !== 'ESLintPlugin'
    );
    actions.replaceWebpackConfig(config);
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        constants: path.resolve(__dirname, 'constants'),
        data: path.resolve(__dirname, 'src/data'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        meta: path.resolve(__dirname, 'meta'),
        pages: path.resolve(__dirname, 'src/pages'),
        styles: path.resolve(__dirname, 'src/styles'),
        utils: path.resolve(__dirname, 'utils.js'),
      },
    },
  });
};

module.exports = {
  onCreateWebpackConfig,
};
