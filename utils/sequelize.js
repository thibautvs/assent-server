'use strict';

const _ = require('lodash');
const HttpStatus = require('http-status');

exports.findAll = (model, res, next) => {
  model
    .all()
    .then(data => res.send(buildJson(data)))
    .catch(err => next(err));
};

exports.findWhere = (model, options, req, res, next) => {
  model
    .find(options)
    .then(data => res.send(data === null ? HttpStatus.NOT_FOUND : buildJson(data)))
    .catch(err => next(err));
};

function buildJson(data) {
  recurseAllProperties(data);

  return data;
}

function recurseAllProperties(data) {
  if (_.isArray(data)) {
    _.forEach(data, item => {
      recurseAllProperties(item);
    });
  } else {
    let dataValues = data.dataValues;

    _.forEach(Object.keys(dataValues), prop => {
      recurse(dataValues, prop);
    });
  }
}

function recurse(data, prop) {
  let value = data[prop];

  // Remove technical fields
  if (_.contains(prop, '_')) {
    delete data[prop];
  }
  // Rename properties as camel case
  else if (prop !== _.camelCase(prop)) {
    data[_.camelCase(prop)] = value;
    delete data[prop];
  }

  if (_.isArray(value)) {
    _.forEach(value, item => {
      recurseAllProperties(item);
    });
  } else if (_.isObject(value) && !_.isDate(value)) {
    recurseAllProperties(value);
  }
}
