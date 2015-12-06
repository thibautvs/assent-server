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
  this.findWhere(model, {where: {id: req.params.id}}, res, next);
};

exports.findWhere = (model, options, res, next) => {
  model
    .find(options)
    .then(data => res.send(data === null ? HttpStatus.NOT_FOUND : buildJson(model, data)))
    .catch(err => next(err));
};

exports.findOrCreate = (model, options, res, next) => {
  model
    .findOrCreate(options)
    .then(data => res.send(buildJson(model, data[0])))
    .catch(err => next(err));
};

exports.findCaseInsensitiveOrCreate = (model, values, res, next) => {
  let field = Object.keys(values)[0];
  let options = {where: {}};
  options.where[field] = {ilike: {}};
  options.where[field].ilike = values[field];
  model
    .find(options)
    .then(data => {
      if (data === null) {
        this.create(model, values, res, next);
      } else {
        res.send(buildJson(model, data));
      }
    })
    .catch(err => next(err));
};

exports.create = (model, values, res, next) => {
  model
    .create(values)
    .then(data => res.status(HttpStatus.CREATED).send(buildJson(model, data)))
    .catch(err => next(err));
};

exports.update = (model, values, req, res, next) => {
  model
    .update(values, {where: {id: req.params.id}})
    .then(data => res.sendStatus(data === null ? HttpStatus.NOT_FOUND : HttpStatus.NO_CONTENT))
    .catch(err => next(err));
};

exports.delete = (model, req, res, next) => {
  model
    .destroy({where: {id: req.params.id}})
    .then(data => res.sendStatus(data === null ? HttpStatus.NOT_FOUND : HttpStatus.NO_CONTENT))
    .catch(err => next(err));
};

function buildJson(model, data) {
  let json = {};
  let modelName = model.options.name;
  let rootModelName = _.camelCase(_.isArray(data) ? modelName.plural : modelName.singular);

  processAllProperties(data);
  json[rootModelName] = data;

  return json;
}

function processAllProperties(data) {
  if (_.isArray(data)) {
    _.forEach(data, item => {
      processAllProperties(item);
    });
  } else {
    let dataValues = data.dataValues;
    _.forEach(Object.keys(dataValues), prop => {
      processProperty(dataValues, prop);
    });
  }
}

function processProperty(data, prop) {
  let value = data[prop];

  // Remove technical fields
  if (prop === 'created_at' || prop === 'updated_at') {
    delete data[prop];
  }
  // Rename property to camel case
  else if (prop !== _.camelCase(prop)) {
    delete data[prop];
    prop = _.camelCase(prop);

    // Remove trailing 'Id'
    if (_.endsWith(prop, 'Id')) {
      prop = _.trimRight(prop, 'Id')
    }
    data[prop] = value;
  }

  // Convert relationships lists to array of id's
  if (_.isArray(value)) {
    data[prop] = [];
    _.forEach(value, item => {
      data[prop].push(item.dataValues.id);
    });
  }
}
