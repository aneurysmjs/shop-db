module.exports = (env = 'production') => {
  if (env === 'development' || env === 'dev') {
    process.env.NODE_ENV = 'development';
    return [require('./server/server.dev')];
  }
  process.env.NODE_ENV = 'production';
  return [require('./server/server.prod')];
};
