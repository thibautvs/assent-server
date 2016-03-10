'use strict';

const _ = require('lodash');

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const Experience = models.Experience;

  app.get('/experiences/:id', (req, res, next) => {
    sequelizeUtils.findById(Experience, req, res, next);
  });

  app.post('/experiences', (req, res, next) => {
    let experience = req.body.experience;
    let isValid = validate(experience);
    if (isValid) {
      let values = {
        student_profile_id: experience.studentProfile,
        experience_type_id: experience.experienceType,
        company_id: experience.company,
        startMonth: experience.startMonth,
        startYear: experience.startYear,
        endMonth: experience.endMonth,
        endYear: experience.endYear,
        description: _.capitalize(experience.description)
      };
      sequelizeUtils.create(Experience, values, res, next);
    } else {
      httpResponseUtils.validationFailed(res);
    }
  });

  app.put('/experiences/:id', (req, res, next) => {
    let experience = req.body.experience;
    let isValid = validate(experience);
    if (isValid) {
      let values = {
        experience_type_id: experience.experienceType,
        company_id: experience.company,
        startMonth: experience.startMonth,
        startYear: experience.startYear,
        endMonth: experience.endMonth,
        endYear: experience.endYear,
        description: _.capitalize(experience.description)
      };
      sequelizeUtils.update(Experience, values, req, res, next);
    } else {
      httpResponseUtils.validationFailed(res);
    }
  });

  app.delete('/experiences/:id', (req, res, next) => {
    sequelizeUtils.delete(Experience, req, res, next);
  });

  function validate(experience) {
    return validator.isValid([
      validator.required(experience.experienceType),
      validator.required(experience.company),
      validator.required(experience.startMonth),
      validator.required(experience.startYear),
      validator.startDateLowerThanEndDate(
        experience.startMonth, experience.startYear,
        experience.endMonth, experience.endYear),
      validator.required(experience.description)
    ]);
  }
};
