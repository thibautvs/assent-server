'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const Degree = models.Degree;

  app.get('/degrees', (req, res, next) => {
    sequelizeUtils.findAll(Degree, res, next);
  });
};
