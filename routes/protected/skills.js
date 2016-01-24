'use strict';

const _ = require('lodash');

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const Skill = models.Skill;

  app.get('/skills', (req, res, next) => {
    sequelizeUtils.findAll(Skill, res, next);
  });

  app.get('/skills/:id', (req, res, next) => {
    sequelizeUtils.findById(Skill, req, res, next);
  });

  app.post('/skills', (req, res, next) => {
    let skill = req.body.skill;
    let isValid = validate(skill);
    if (isValid) {
      sequelizeUtils.findCaseInsensitiveOrCreate(Skill, {name: _.capitalize(skill.name)}, res, next);
    } else {
      httpResponseUtils.validationFailed(res);
    }
  });

  function validate(skill) {
    return validator.isValid([
      validator.required(skill.name)
    ]);
  }
};
