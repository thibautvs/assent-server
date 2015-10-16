'use strict';

const fs = require('fs');
const path = require('path');
const sequelizeUtils = require('../utils/sequelize');
const HttpStatus = require('http-status');

exports.initialize = (app, models) => {
  fs
    .readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
    .forEach(file => require(path.join(__dirname, file))(app, models, sequelizeUtils, HttpStatus));
};
