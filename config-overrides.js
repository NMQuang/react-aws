module.exports = {
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
};
