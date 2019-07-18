const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const paths = {
  serverBuild: resolveApp('build'),
  dotenv: resolveApp('.env'),
  src: resolveApp('src'),
  srcServer: resolveApp('src/server'),
  publicPath: '/static/',
};

paths.resolveModules = [
  paths.srcServer,
  paths.src,
  'node_modules',
];

module.exports = paths;
