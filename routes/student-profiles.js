'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const StudentProfile = models.StudentProfile;

  app.get('/student_profiles/:id', (req, res, next) => {
    StudentProfile
      .find({
        where: {id: req.params.id },
        include: [
          {model: models.Faculty},
          {model: models.University},
          {model: models.Degree}
        ]
      })
      .then(data => res.send(data === null ? HttpStatus.NOT_FOUND : {studentProfile: data}))
      .catch(err => next(err));
      //sequelizeUtils.findWhere(StudentProfile, {where: {id: req.params.id }}, req, res, next);
  });
};
