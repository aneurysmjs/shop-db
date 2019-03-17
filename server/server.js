const express = require('express');
const app = express();

const api = require('./api/api');
const errorHandler = require('./middleware/error-handler');

// setup app middleware, it just a function without returning anything
require('./middleware/app-middleware')(app);

app.use('/api', api);
app.use(errorHandler());

module.exports = app; // we make the app exportable so it can be use by other apps
