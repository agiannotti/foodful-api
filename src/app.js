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
app.use(cors());
app.use(helmet());
app.use(validateBearerToken);
app.use(morgan(morganOption));

app.use(ResourceRouter);
app.use(errorHandler);

module.exports = app;
