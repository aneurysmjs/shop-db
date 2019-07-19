import mongoose from 'mongoose'
;
const { port, db } = require('./config/config');
const app = require('./server');

const connect = () => {
  return mongoose.connect(db.url);
};

(async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`REST API on http://localhost:${port}/api`);
    });
  } catch (err) {
    console.error('==== err ===', err);
  }
})();