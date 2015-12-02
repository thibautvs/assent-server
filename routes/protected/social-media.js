'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const SocialMedia = models.SocialMedia;

  app.get('/socialMedia/:id', (req, res, next) => {
    sequelizeUtils.findById(SocialMedia, req, res, next);
  });

  app.post('/socialMedia', (req, res, next) => {
    let socialMedium = req.body.socialMedium;
    let values = {
      position: socialMedium.position,
      url: socialMedium.url,
      student_profile_id: socialMedium.studentProfile
    };
    sequelizeUtils.create(SocialMedia, values, res, next);
  });

  app.delete('/socialMedia/:id', (req, res, next) => {
    sequelizeUtils.delete(SocialMedia, req, res, next);
  });
};
