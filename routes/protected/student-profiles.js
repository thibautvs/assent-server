'use strict';

const _ = require('lodash');

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const StudentProfile = models.StudentProfile;

  app.get('/studentProfiles/:id', (req, res, next) => {
    let options = {
      where: {id: req.params.id},
      include: [
        {model: models.StudentProfileSkill, attributes: ['id']},
        {model: models.StudentProfileLanguage, attributes: ['id']},
        {model: models.Grade, attributes: ['id']},
        {model: models.StudentProfileHobby, attributes: ['id']},
        {model: models.Education, attributes: ['id']},
        {model: models.Experience, attributes: ['id']},
        {model: models.SocialMedia, attributes: ['id']},
        {model: models.Audio, attributes: ['id']},
        {model: models.Drive, attributes: ['id']}
      ]
    };
    sequelizeUtils.findWhere(StudentProfile, options, res, next);
  });

  app.put('/studentProfiles/:id', (req, res, next) => {
    let profile = req.body.studentProfile;
    let isValid = validate(profile);

    if (isValid) {
      let values = {
        firstName: _.capitalize(profile.firstName),
        lastName: _.capitalize(profile.lastName),
        study_id: profile.study,
        degree_id: profile.degree,
        city_id: profile.city,
        degreeYear: profile.degreeYear,
        expectedGraduationYear: profile.expectedGraduationYear,
        country_id: profile.country,
        videoUrl: profile.videoUrl,
        aspirations: profile.aspirations,
        preparation: profile.preparation,
        strongestSkill: profile.strongestSkill
      };
      sequelizeUtils.update(StudentProfile, values, req, res, next);
    } else {
      httpResponseUtils.validationFailed(res);
    }
  });

  function validate(profile) {
    return validator.isValid([
      validator.video(profile.videoUrl)
    ]);
  }
};
