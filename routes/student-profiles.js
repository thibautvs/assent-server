'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
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
        {model: models.SocialMedia, attributes: ['id']}
      ]
    };
    sequelizeUtils.findWhere(StudentProfile, options, res, next);
  });

  app.put('/studentProfiles/:id', (req, res, next) => {
    let updateParams = {
      videoUrl: req.body.studentProfile.videoUrl,
      aspirations: req.body.studentProfile.aspirations
    };
    sequelizeUtils.update(StudentProfile, updateParams, req, res, next);
  });
};
