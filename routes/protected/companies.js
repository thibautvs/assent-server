'use strict';

module.exports = (app, models, validator, sequelizeUtils, HttpStatus) => {
  const Company = models.Company;

  app.get('/companies', (req, res, next) => {
    sequelizeUtils.findAll(Company, res, next);
  });

  app.get('/companies/:id', (req, res, next) => {
    sequelizeUtils.findById(Company, req, res, next);
  });
};
