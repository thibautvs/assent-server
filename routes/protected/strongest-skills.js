'use strict';

const _ = require('lodash');

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const StrongestSkill = models.StrongestSkill;

  app.get('/strongestSkills/:id', (req, res, next) => {
    sequelizeUtils.findById(StrongestSkill, req, res, next);
  });

  app.post('/strongestSkills', (req, res, next) => {
    let strongestSkill = req.body.strongestSkill;
    let isValid = validate(strongestSkill);
    if (isValid) {
      let values = {
        skill: _.capitalize(strongestSkill.skill),
        description: _.capitalize(strongestSkill.description),
        position: strongestSkill.position,
        student_profile_id: strongestSkill.studentProfile
      };
      sequelizeUtils.create(StrongestSkill, values, res, next);
    } else {
      httpResponseUtils.validationFailed(res);
    }
  });

  app.put('/strongestSkills/:id', (req, res, next) => {
    let strongestSkill = req.body.strongestSkill;
    let isValid = validate(strongestSkill);
    if (isValid) {
      let values = {
        skill: _.capitalize(strongestSkill.skill),
        description: _.capitalize(strongestSkill.description),
        position: strongestSkill.position,
      };
      sequelizeUtils.update(StrongestSkill, values, req, res, next);
    } else {
      httpResponseUtils.validationFailed(res);
    }
  });

  app.delete('/strongestSkills/:id', (req, res, next) => {
    sequelizeUtils.delete(StrongestSkill, req, res, next);
  });

  function validate(strongestSkill) {
    return validator.isValid([
      validator.required(strongestSkill.skill),
      validator.required(strongestSkill.description)
    ]);
  }
};
