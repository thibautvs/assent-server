'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const City = models.City;

  app.get('/cities/:id', (req, res, next) => {
    sequelizeUtils.findById(City, req, res, next);
  });

  app.post('/cities', (req, res, next) => {
    sequelizeUtils.findOrCreate(City, {where: {name: req.body.city.name}}, res, next);
  });
};
