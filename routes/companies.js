'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const Company = models.Company;

  app.get('/companies', (req, res, next) => {
    sequelizeUtils.findAll(Company, res, next);
  });
};
