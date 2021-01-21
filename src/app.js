require('dotenv').config();
const { NODE_ENV } = require('./config');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./error-handler');
const helmet = require('helmet');
const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';
const app = express();
const validateBearerToken = require('./validate-bearer-token');

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(errorHandler);
app.use(validateBearerToken);

module.exports = app;
