'use strict';

module.exports = (app, models, validator, sequelizeUtils, HttpStatus) => {
  const StudentProfileHobby = models.StudentProfileHobby;

  app.get('/studentProfileHobbies/:id', (req, res, next) => {
    sequelizeUtils.findById(StudentProfileHobby, req, res, next);
  });
};
