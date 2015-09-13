'use strict';

let fs = require('fs');
let path = require('path');
let HttpStatus = require('http-status');

exports.initialize = (app, models) => {
  fs
    .readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
    .forEach(file => require(path.join(__dirname, file))(app, models, HttpStatus));
};
