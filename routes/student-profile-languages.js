'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const StudentProfileLanguage = models.StudentProfileLanguage;

  app.get('/studentProfileLanguages/:id', (req, res, next) => {
    sequelizeUtils.findById(StudentProfileLanguage, req, res, next);
  });
};
