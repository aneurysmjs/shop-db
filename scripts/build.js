const webpack = require('webpack');
const rimraf = require('rimraf');

const webpackConfig = require('../config/webpack-config')(process.env.NODE_ENV || 'production');

const paths = require('../config/paths');
const { logMessage, compilerPromise, findCompiler } = require('./utils');

const build = async () => {
  rimraf.sync(paths.serverBuild);

  const [serverConfig] = webpackConfig;
  const multiCompiler = webpack([serverConfig]);

  const getCompiler = findCompiler(multiCompiler);

  const serverCompiler = getCompiler('server');

  const serverPromise = compilerPromise('server', serverCompiler);

  serverCompiler.watch({}, (error, stats) => {
    if (!error && !stats.hasErrors()) {
      // eslint-disable-next-line no-console
      console.log(stats.toString(serverConfig.stats));
      return;
    }
  });

  // wait until client and server is compiled
  try {
    await serverPromise;
    logMessage('Done!', 'info');
  } catch (error) {
    logMessage(error, 'error');
  }
};

build();
