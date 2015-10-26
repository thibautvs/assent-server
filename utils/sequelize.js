'use strict';

const _ = require('lodash');
const HttpStatus = require('http-status');

exports.findAll = (model, res, next) => {
  model
    .all()
    .then(data => res.send(buildJson(model, data)))
    .catch(err => next(err));
};

exports.findById = (model, req, res, next) => {
  this.findWhere(model, {where:{id:req.params.id}}, req, res, next);
};

exports.findWhere = (model, options, req, res, next) => {
  model
    .find(options)
    .then(data => res.send(data === null ? HttpStatus.NOT_FOUND : buildJson(model, data)))
    .catch(err => next(err));
};

function buildJson(model, data) {
  let json = {};
  let modelName = model.options.name;
  let rootModelName = _.camelCase(_.isArray(data) ? modelName.plural : modelName.singular);

  recurseAllProperties(data);
  json[rootModelName] = data;

  return json;
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
  if (prop === 'created_at' || prop === 'updated_at') {
    delete data[prop];
  }
  // Rename relation as camel case
  else if (prop !== _.camelCase(prop)) {
    let renamedProp = _.camelCase(prop);
    // Remove trailing 'Id'
    if (_.endsWith(renamedProp, 'Id')) {
      renamedProp = _.trimRight(renamedProp, 'Id')
    }

    data[renamedProp] = value;
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
