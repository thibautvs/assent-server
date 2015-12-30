'use strict';

module.exports = (app, models, validator, sequelizeUtils, HttpStatus) => {
  const Language = models.Language;

  app.get('/languages', (req, res, next) => {
    sequelizeUtils.findAll(Language, res, next);
  });

  app.get('/languages/:id', (req, res, next) => {
    sequelizeUtils.findById(Language, req, res, next);
  });
};
