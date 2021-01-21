require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';
const validateBearerToken = require('./validate-bearer-token');
const ResourceRouter = require('./resources/resource-router');
const errorHandler = require('./error-handler');
// const logger = require('/logger');

const app = express();

app.use(validateBearerToken);
app.use(cors());
app.use(morgan(morganOption));
app.use(helmet());
app.use(errorHandler);

app.use(ResourceRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = app;
