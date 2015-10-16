'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const ExperienceType = models.ExperienceType;

  app.get('/experience_types', (req, res, next) => {
    sequelizeUtils.findAll(ExperienceType, res, next);
  });
};
