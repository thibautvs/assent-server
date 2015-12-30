'use strict';

module.exports = (app, models, validator, sequelizeUtils, HttpStatus) => {
  const City = models.City;

  app.get('/cities/:id', (req, res, next) => {
    sequelizeUtils.findById(City, req, res, next);
  });

  app.post('/cities', (req, res, next) => {
    sequelizeUtils.findCaseInsensitiveOrCreate(City, {name: req.body.city.name}, res, next);
  });
};
