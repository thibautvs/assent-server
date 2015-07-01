'use strict';

var fs = require('fs');
var path = require('path');
var HttpStatus = require('http-status');

exports.initialize = function (app) {
  fs
    .readdirSync(__dirname)
    .filter(function (file) {
      return file.indexOf('.') !== 0 && file !== 'index.js';
    })
    .forEach(function (file) {
      require(path.join(__dirname, file))(app, HttpStatus);
    });
};
