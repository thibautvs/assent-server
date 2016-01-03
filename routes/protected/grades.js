'use strict';

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const Grade = models.Grade;

  app.get('/grades/:id', (req, res, next) => {
    sequelizeUtils.findById(Grade, req, res, next);
  });
};
