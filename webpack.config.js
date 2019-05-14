const watch = process.env.WATCH === 'yes';
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

console.log(`
=============================
UI Design (React)
WATCH: ${watch}
=============================
`);

const config = {
  devtool: false,
  entry: './src/main.ts',
  mode: 'development',
  module: {
    rules: [
      { test: /\.ts[x]?$/, loader: 'ts-loader' },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          {
            loader: 'dts-css-modules-loader',
            options: {
              camelCase: 'dashesOnly',
              localIdentName: '[local]',
              modules: true,
              namedExport: true,
              url: false,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: { output: { comments: false } },
      }),
    ],
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    plugins: [new TsConfigPathsPlugin()],
  },
  output: { path: path.resolve('dist'), filename: 'index.js' },
  watch: true,
};

module.exports = config;
