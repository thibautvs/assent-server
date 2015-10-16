'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const University = models.University;

  app.get('/universities', (req, res, next) => {
    sequelizeUtils.findAll(University, res, next);
  });
};
