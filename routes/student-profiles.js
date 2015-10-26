'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const StudentProfile = models.StudentProfile;

  app.get('/studentProfiles/:id', (req, res, next) => {
    sequelizeUtils.findById(StudentProfile, req, res, next);
  });
};
