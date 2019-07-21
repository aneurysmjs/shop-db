import express from 'express';

import api from './api/api';
import errorHandler from './middleware/error-handler';
import appMiddleware from './middleware/app-middleware';

const app = express();
// setup app middleware, it just a function without returning anything
appMiddleware(app);

app.use('/api', api);
// error handler should be the last middleware
app.use(errorHandler());

export default app; // we make the app exportable so it can be use by other apps
