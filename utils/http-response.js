'use strict';

const HttpStatus = require('http-status');

exports.validationFailed = res => {
  this.badRequest(res, 'validation_failed');
};

exports.badRequest = (res, error) => {
  res.status(HttpStatus.BAD_REQUEST).send({error: error});
};

exports.conflict = (res, error) => {
  res.status(HttpStatus.CONFLICT).send({error: error});
};
