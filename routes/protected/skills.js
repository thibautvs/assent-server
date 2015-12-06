'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const Skill = models.Skill;

  app.get('/skills', (req, res, next) => {
    sequelizeUtils.findAll(Skill, res, next);
  });

  app.get('/skills/:id', (req, res, next) => {
    sequelizeUtils.findById(Skill, req, res, next);
  });

  app.post('/skills', (req, res, next) => {
    sequelizeUtils.findOrCreate(Skill, {where: {name: {ilike: req.body.skill.name}}}, res, next);
  });
};
