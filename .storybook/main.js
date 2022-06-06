const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/addon-interactions',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    // "@storybook/preset-create-react-app",
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...(config.resolve ?? {}),
      plugins: [...(config.resolve.plugins || []), new TsconfigPathsPlugin()],
    },
    plugins: config.plugins.filter((plugin) => {
      if (plugin.constructor.name === 'ESLintWebpackPlugin') {
        return false;
      }
      return true;
    }),
  }),
};
