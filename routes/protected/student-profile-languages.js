'use strict';

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const StudentProfileLanguage = models.StudentProfileLanguage;

  app.get('/studentProfileLanguages/:id', (req, res, next) => {
    sequelizeUtils.findById(StudentProfileLanguage, req, res, next);
  });

  app.post('/studentProfileLanguages', (req, res, next) => {
    let profileLanguage = req.body.studentProfileLanguage;
    let isValid = validate(profileLanguage);
    if (isValid) {
      let values = {
        student_profile_id: profileLanguage.studentProfile,
        language_id: profileLanguage.language,
        isMotherTongue: profileLanguage.isMotherTongue,
        level: profileLanguage.level
      };
      sequelizeUtils.create(StudentProfileLanguage, values, res, next);
    } else {
      httpResponseUtils.validationFailed(res);
    }
  });

  app.put('/studentProfileLanguages/:id', (req, res, next) => {
    let profileLanguage = req.body.studentProfileLanguage;
    let isValid = validate(profileLanguage);
    if (isValid) {
      let values = {
        language_id: profileLanguage.language,
        isMotherTongue: profileLanguage.isMotherTongue,
        level: profileLanguage.level
      };
      sequelizeUtils.update(StudentProfileLanguage, values, req, res, next);
    } else {
      httpResponseUtils.validationFailed(res);
    }
  });

  app.delete('/studentProfileLanguages/:id', (req, res, next) => {
    sequelizeUtils.delete(StudentProfileLanguage, req, res, next);
  });

  function validate(profileLanguage) {
    return validator.isValid([
      validator.required(profileLanguage.level)
    ]);
  }
};
