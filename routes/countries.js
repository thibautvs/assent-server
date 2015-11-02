'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const Country = models.Country;

  app.get('/countries/:id', (req, res, next) => {
    sequelizeUtils.findById(Country, req, res, next);
  });
};
