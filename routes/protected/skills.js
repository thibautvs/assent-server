'use strict';

module.exports = (app, models, validator, sequelizeUtils, HttpStatus) => {
  const Skill = models.Skill;

  app.get('/skills', (req, res, next) => {
    sequelizeUtils.findAll(Skill, res, next);
  });

  app.get('/skills/:id', (req, res, next) => {
    sequelizeUtils.findById(Skill, req, res, next);
  });

  app.post('/skills', (req, res, next) => {
    sequelizeUtils.findCaseInsensitiveOrCreate(Skill, {name: req.body.skill.name}, res, next);
  });
};
