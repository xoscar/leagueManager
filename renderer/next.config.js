const { join } = require('path');
const { sync } = require('glob');

const webpack = require('webpack');
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.load({ path: join(__dirname, '../.env') });
}

module.exports = {
  webpack: (config) => {
    config.target = 'electron-renderer';
    config.module.rules.push({
      test: /\.(css|scss)/,
      loader: 'emit-file-loader',
      options: {
        name: 'dist/[path][name].[ext]',
      },
    }, {
      test: /\.css$/,
      use: ['babel-loader', 'raw-loader', 'postcss-loader'],
    }, {
      test: /\.s(a|c)ss$/,
      use: ['babel-loader', 'raw-loader', 'postcss-loader',
        {
          loader: 'sass-loader',
          options: {
            includePaths: ['styles', 'node_modules']
              .map(d => join(__dirname, d))
              .map(g => sync(g))
              .reduce((a, c) => a.concat(c), []),
          },
        },
      ],
    }, {
      test: /\.(jpg|fig|woff|woff2|png|eot|ttf|svg)$/,
      loader: 'url-loader?limit=5000',
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.RIOT_API_TOKEN': JSON.stringify(process.env.RIOT_API_TOKEN),
      }));

    return config;
  },
  exportPathMap() {
    return {
      '/start': { page: '/start' },
    };
  },
};
