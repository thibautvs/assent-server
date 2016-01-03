'use strict';

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const Experience = models.Experience;

  app.get('/experiences/:id', (req, res, next) => {
    sequelizeUtils.findById(Experience, req, res, next);
  });
};
