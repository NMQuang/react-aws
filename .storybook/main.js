module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app'],
  framework: '@storybook/react',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-resources-loader',
          options: {
            resources: ['./src/styles/index.scss', './src/components/**/*.scss'],
          },
        },
      ],
    });

    return config;
  },
  // @See https://github.com/styleguidist/react-docgen-typescript/issues/356
  typescript: {
    reactDocgen: 'none',
  },
};
