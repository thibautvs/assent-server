'use strict';

const _ = require('lodash');

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const Language = models.Language;

  app.get('/languages', (req, res, next) => {
    sequelizeUtils.findAll(Language, res, next);
  });

  app.get('/languages/:id', (req, res, next) => {
    sequelizeUtils.findById(Language, req, res, next);
  });

  app.post('/languages', (req, res, next) => {
    let language = req.body.language;
    let isValid = validate(language);
    if (isValid) {
      sequelizeUtils.findCaseInsensitiveOrCreate(Language, {name: _.capitalize(language.name)}, res, next);
    } else {
      httpResponseUtils.validationFailed(res);
    }
  });

  function validate(language) {
    return validator.isValid([
      validator.required(language.name)
    ]);
  }
};
