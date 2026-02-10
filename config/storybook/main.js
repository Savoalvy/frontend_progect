const path = require('path');

module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: true,
        backgrounds: true,
        controls: true,
        docs: false,
        viewport: true,
        toolbars: true,
      },
    },
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
  ],
  framework: {
    name: '@storybook/react',
    options: {
      fastRefresh: true,
    },
  },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async config => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@app': path.resolve(__dirname, '../../src/app'),
        '@shared': path.resolve(__dirname, '../../src/shared'),
        '@entities': path.resolve(__dirname, '../../src/entities'),
        '@features': path.resolve(__dirname, '../../src/features'),
        '@pages': path.resolve(__dirname, '../../src/pages'),
        '@widgets': path.resolve(__dirname, '../../src/widgets'),
        'react/jsx-runtime.js': 'react/jsx-runtime',
      },
    },
  }),
};
