'use strict';

const _ = require('lodash');

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const City = models.City;

  app.get('/cities/:id', (req, res, next) => {
    sequelizeUtils.findById(City, req, res, next);
  });

  app.post('/cities', (req, res, next) => {
    sequelizeUtils.findCaseInsensitiveOrCreate(City, {name: _.capitalize(req.body.city.name)}, res, next);
  });
};
