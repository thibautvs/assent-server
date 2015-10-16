'use strict';

const HttpStatus = require('http-status');
const stringUtils = require('./string');

exports.findAll = (model, res, next) => {
  let jsonRoot = stringUtils.lowercaseFirstLetter(model.name);
  jsonRoot = stringUtils.pluralize(jsonRoot);
  model
    .all()
    .then(data => res.send(buildJson(jsonRoot, data)))
    .catch(err => next(err));
};

exports.findWhere = (model, whereClause, req, res, next) => {
  let jsonRoot = stringUtils.lowercaseFirstLetter(model.name);
  model
    .find(whereClause)
    .then(data => res.send(data === null ? HttpStatus.NOT_FOUND : buildJson(jsonRoot, data)))
    .catch(err => next(err));
};

function buildJson(jsonRoot, data) {
  let json = {};
  json[jsonRoot] = data;

  return json;
};
