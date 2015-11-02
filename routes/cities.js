'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const City = models.City;

  app.get('/cities/:id', (req, res, next) => {
    sequelizeUtils.findById(City, req, res, next);
  });
};
