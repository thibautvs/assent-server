'use strict';

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const Hobby = models.Hobby;

  app.get('/hobbies', (req, res, next) => {
    sequelizeUtils.findAll(Hobby, res, next);
  });

  app.get('/hobbies/:id', (req, res, next) => {
    sequelizeUtils.findById(Hobby, req, res, next);
  });
};
