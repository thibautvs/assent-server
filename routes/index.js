'use strict';

const fs = require('fs');
const path = require('path');
const sequelizeUtils = require('../utils/sequelize');
const HttpStatus = require('http-status');

exports.initialize = (app, models) => {
  initializeRoutes(path.join(__dirname, 'public'), app, models);
  initializeTokenCheck(app);
  initializeRoutes(path.join(__dirname, 'protected'), app, models);
  initializeGlobalErrorHandler(app);
};

function initializeRoutes(routesPath, app, models) {
  fs
    .readdirSync(routesPath)
    .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
    .forEach(file => require(path.join(routesPath, file))(app, models, sequelizeUtils, HttpStatus));
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
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: HttpStatus[HttpStatus.INTERNAL_SERVER_ERROR] });
  });
}
