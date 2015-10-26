'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const ExperienceType = models.ExperienceType;

  app.get('/experienceTypes', (req, res, next) => {
    sequelizeUtils.findAll(ExperienceType, res, next);
  });

  app.get('/experienceTypes/:id', (req, res, next) => {
    sequelizeUtils.findById(ExperienceType, req, res, next);
  });
};
