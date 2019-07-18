const path = require('path');
const nodeExternals = require('webpack-node-externals');

const paths = require('../../paths');
const resolvers = require('../resolvers');
const plugins = require('../plugins');

module.exports = {
  mode: 'development',
  name: 'server',
  target: 'node',
  entry: {
    server: [path.resolve(paths.src, 'main.js')],
  },
  externals: [
    nodeExternals(),
  ],
  output: {
    path: paths.serverBuild,
    filename: 'server.js',
    publicPath: paths.publicPath,
  },
  resolve: {
    ...resolvers
  },
  plugins: [
    ...plugins.shared,
    ...plugins.server
  ],
  stats: {
    colors: true,
  },
};
