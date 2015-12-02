'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const Experience = models.Experience;

  app.get('/experiences/:id', (req, res, next) => {
    sequelizeUtils.findById(Experience, req, res, next);
  });
};