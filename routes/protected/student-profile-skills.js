'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const StudentProfileSkill = models.StudentProfileSkill;

  app.get('/studentProfileSkills/:id', (req, res, next) => {
    sequelizeUtils.findById(StudentProfileSkill, req, res, next);
  });

  app.post('/studentProfileSkills', (req, res, next) => {
    let profileSkill = req.body.studentProfileSkill;
    let values = {
      position: profileSkill.position,
      skill_id: profileSkill.skill,
      student_profile_id: profileSkill.studentProfile
    };
    sequelizeUtils.create(StudentProfileSkill, values, res, next);
  });

  app.delete('/studentProfileSkills/:id', (req, res, next) => {
    sequelizeUtils.delete(StudentProfileSkill, req, res, next);
  });
};
