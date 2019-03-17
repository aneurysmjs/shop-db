const { port, db } = require('./server/config/config');
const app = require('./server/server');
// const logger = require('./server/utils/logger');
const mongoose = require('mongoose');

const connect = () => {
  return mongoose.connect(db.url);
};

(async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`REST API on http://localhost:${port}/api`);
    });
  } catch (e) {
    console.error('e===', e);
  }
})();
