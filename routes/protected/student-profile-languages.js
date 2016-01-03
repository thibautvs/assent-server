'use strict';

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const StudentProfileLanguage = models.StudentProfileLanguage;

  app.get('/studentProfileLanguages/:id', (req, res, next) => {
    sequelizeUtils.findById(StudentProfileLanguage, req, res, next);
  });

  app.put('/studentProfileLanguages/:id', (req, res, next) => {
    let language = req.body.studentProfile.studentProfileLanguage;
    let values = {
      isMotherTongue: language.isMotherTongue,
      level: language.level
    };
    sequelizeUtils.update(StudentProfileLanguage, values, req, res, next);
  });

  app.delete('/studentProfileLanguages/:id', (req, res, next) => {
    sequelizeUtils.delete(StudentProfileLanguage, req, res, next);
  });
};
