'use strict';

let fs = require('fs');
let path = require('path');
let HttpStatus = require('http-status');

exports.initialize = function (app, models) {
  fs
    .readdirSync(__dirname)
    .filter(function (file) {
      return file.indexOf('.') !== 0 && file !== 'index.js';
    })
    .forEach(function (file) {
      require(path.join(__dirname, file))(app, models, HttpStatus);
    });
};
