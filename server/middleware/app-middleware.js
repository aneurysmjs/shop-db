const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// setup a global middleware
module.exports = app => {
  app.use(cors())
  app.use(morgan('combined'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
}; // we make the app exportable so it can be use by other apps