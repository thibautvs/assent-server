'use strict';

const _ = require('lodash');

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const ExperienceType = models.ExperienceType;

  app.get('/experienceTypes', (req, res, next) => {
    sequelizeUtils.findAll(ExperienceType, res, next);
  });

  app.get('/experienceTypes/:id', (req, res, next) => {
    sequelizeUtils.findById(ExperienceType, req, res, next);
  });

  app.post('/experienceTypes', (req, res, next) => {
    let experienceType = req.body.experienceType;
    let isValid = validate(experienceType);
    if (isValid) {
      sequelizeUtils.findCaseInsensitiveOrCreate(ExperienceType, {name: _.capitalize(experienceType.name)}, res, next);
    } else {
      httpResponseUtils.validationFailed(res);
    }
  });

  function validate(experienceType) {
    return validator.isValid([
      validator.required(experienceType.name)
    ]);
  }
};
