'use strict';

const _ = require('lodash');

module.exports = (app, models, validator, sequelizeUtils, HttpStatus) => {
  const Study = models.Study;

  app.get('/studies', (req, res, next) => {
    sequelizeUtils.findAll(Study, res, next);
  });

  app.get('/studies/:id', (req, res, next) => {
    sequelizeUtils.findById(Study, req, res, next);
  });

  app.post('/studies', (req, res, next) => {
    sequelizeUtils.findCaseInsensitiveOrCreate(Study, {name: _.capitalize(req.body.study.name)}, res, next);
  });
};
