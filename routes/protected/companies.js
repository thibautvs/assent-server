'use strict';

const _ = require('lodash');

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const Company = models.Company;

  app.get('/companies', (req, res, next) => {
    sequelizeUtils.findAll(Company, res, next);
  });

  app.get('/companies/:id', (req, res, next) => {
    sequelizeUtils.findById(Company, req, res, next);
  });

  app.post('/companies', (req, res, next) => {
    let company = req.body.company;
    let isValid = validate(company);
    if (isValid) {
      sequelizeUtils.findCaseInsensitiveOrCreate(Company, {name: _.capitalize(company.name)}, res, next);
    } else {
      httpResponseUtils.validationFailed(res);
    }
  });

  function validate(company) {
    return validator.isValid([
      validator.required(company.name)
    ]);
  }
};
