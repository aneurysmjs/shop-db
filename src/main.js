import mongoose from 'mongoose';

import config from './config/config';

const { port, db } = config;

import app from './server';

const connect = () => mongoose.connect(db.url);

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