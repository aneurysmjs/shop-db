import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

// setup a global middleware
export default app => {
  app.use(cors())
  app.use(morgan('combined'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
}; // we make the app exportable so it can be use by other apps