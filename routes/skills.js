'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const Skill = models.Skill;

  app.get('/skills', (req, res, next) => {
    sequelizeUtils.findAll(Skill, res, next);
  });
};
