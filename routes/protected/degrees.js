'use strict';

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const Degree = models.Degree;

  app.get('/degrees', (req, res, next) => {
    sequelizeUtils.findAll(Degree, res, next);
  });

  app.get('/degrees/:id', (req, res, next) => {
    sequelizeUtils.findById(Degree, req, res, next);
  });
};
