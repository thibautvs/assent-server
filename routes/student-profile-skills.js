'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const StudentProfileSkill = models.StudentProfileSkill;

  app.get('/studentProfileSkills/:id', (req, res, next) => {
    sequelizeUtils.findById(StudentProfileSkill, req, res, next);
  });
};
