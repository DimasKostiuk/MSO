import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import { project } from './project.js';

export const webpack = {
  mode: project.IS_DEV ? 'development' : 'production',
  devtool: project.IS_DEV ? 'source-map' : false,
  output: {
    filename: `app${project.IS_DEV ? '' : '.min'}.js`,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js'],
  },
  optimization: {
    chunkIds: 'named',
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            unsafe: true,
            inline: true,
            passes: 2,
            keep_fargs: false,
          },
          output: {
            beautify: false,
          },
          mangle: true,
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
};
