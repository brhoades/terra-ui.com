const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
  entry: [
    './app/bundles/HelloWorld/startup/registration',
  ],

  output: {
    filename: 'webpack-bundle.js',
    path: path.resolve('../app/assets/webpack'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [{
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader"
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')({
                    browsers: [
                      'ie >= 10',
                      'last 2 versions',
                      'last 2 android versions',
                      'last 2 and_chr versions',
                      'iOS >= 8',
                    ],
                  })
                ];
              }
            }
          }, {
            loader: "sass-loader",
            options: {
              data: `@import "${path.resolve(path.join(__dirname, 'node_modules/terra-legacy-theme/src/LegacyTheme.scss'))}"; @import "${path.resolve(path.join(__dirname, 'node_modules/terra-application/src/Application.scss'))}"; $terra-bidi: true;`,
            }
          }, ]
        })

      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
};

module.exports = config;
