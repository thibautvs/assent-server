'use strict';

const fs = require('fs');
const path = require('path');
const winston = require('winston');
const models = require('../models');
const validator = require('../utils/validator');
const sequelizeUtils = require('../utils/sequelize');
const httpResponseUtils = require('../utils/http-response');
const HttpStatus = require('http-status');

exports.initialize = app => {
  initializeRoutes(path.join(__dirname, 'public'), app);
  initializeTokenCheck(app);
  initializeRoutes(path.join(__dirname, 'protected'), app);
  initializeGlobalErrorHandler(app);
};

function initializeRoutes(routesPath, app) {
  fs
    .readdirSync(routesPath)
    .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
    .forEach(file => require(path.join(routesPath, file))(app, models, validator, sequelizeUtils, httpResponseUtils));
}

function initializeTokenCheck(app) {
  app.use((req, res, next) => {
    if (req.headers['authorization'] === 'Bearer a1b09800-f8b6-4fb6-8e40-75ebd5744ab8') {
      next();
    } else {
      res.status(HttpStatus.UNAUTHORIZED).send({ message: HttpStatus[HttpStatus.UNAUTHORIZED] });
    }
  });
}

function initializeGlobalErrorHandler(app) {
  winston.add(winston.transports.File, { filename: path.join(__dirname, '../..', 'logs.log') });
  app.use((err, req, res, next) => {
    winston.error(err.stack);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: HttpStatus[HttpStatus.INTERNAL_SERVER_ERROR] });
  });
}
