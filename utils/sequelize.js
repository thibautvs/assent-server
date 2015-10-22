'use strict';

const _ = require('lodash');
const HttpStatus = require('http-status');

exports.findAll = (model, res, next) => {
  model
    .all()
    .then(data => res.send(serializeJson(model, data)))
    .catch(err => next(err));
};

exports.findWhere = (model, options, req, res, next) => {
  model
    .find(options)
    .then(data => res.send(data === null ? HttpStatus.NOT_FOUND : serializeJson(model, data, options)))
    .catch(err => next(err));
};

function serializeJson(model, data, options) {
  let json = {};
  let modelName = model.options.name;
  let rootModelName = _.camelCase(_.isArray(data) ? modelName.plural : modelName.singular);

  if (options && options.include) {
    json = sideLoadJson(rootModelName, data, options.include);
  } else {
    pushJson(json, rootModelName, data);
  }
  return json;
}

function pushJson(json, modelName, data) {
  json[modelName] = cleanJson(data);
}

function cleanJson(json) {
  if (_.isArray(json)) {
    _.forEach(json, (record, i) => {
      record[i] = cleanJsonRecord(record);
    });
  } else {
    json = cleanJsonRecord(json);
  }
  return json;
}

function cleanJsonRecord(jsonRecord) {
  jsonRecord = jsonRecord.toJSON();
  delete jsonRecord['created_at'];
  delete jsonRecord['updated_at'];
  return jsonRecord;
}

function sideLoadJson(rootModelName, data, include) {
  let json = {};
  pushJson(json, rootModelName, data);
  return json;
}
