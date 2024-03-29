'use strict';

const _ = require('lodash');

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const StudentProfile = models.StudentProfile;

  app.get('/studentProfiles/:id', (req, res, next) => {
    let options = {
      where: {id: req.params.id},
      include: [
        {model: models.StudentProfileSkill/*, attributes: ['id']*/, separate: true},
        {model: models.StudentProfileLanguage/*, attributes: ['id']*/, separate: true},
        {model: models.Grade/*, attributes: ['id']*/, separate: true},
        {model: models.StudentProfileHobby/*, attributes: ['id']*/, separate: true},
        {model: models.Education/*, attributes: ['id']*/, separate: true},
        {model: models.Experience/*, attributes: ['id']*/, separate: true},
        {model: models.SocialMedia/*, attributes: ['id']*/, separate: true},
        {model: models.Audio/*, attributes: ['id']*/, separate: true},
        {model: models.Drive/*, attributes: ['id']*/, separate: true},
        {model: models.StrongestSkill/*, attributes: ['id']*/, separate: true},
        {model: models.Preparation/*, attributes: ['id']*/, separate: true}
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
        aspirations: profile.aspirations
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
