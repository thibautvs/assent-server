'use strict';

const validator = require('../../utils/validator');

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const SocialMedia = models.SocialMedia;

  app.get('/socialMedia/:id', (req, res, next) => {
    sequelizeUtils.findById(SocialMedia, req, res, next);
  });

  app.post('/socialMedia', (req, res, next) => {
    let socialMedium = req.body.socialMedium;
    let isValid = validate(socialMedium);
    if (isValid) {
      let values = {
        position: socialMedium.position,
        url: socialMedium.url,
        student_profile_id: socialMedium.studentProfile
      };
      sequelizeUtils.create(SocialMedia, values, res, next);
    } else {
      res.status(HttpStatus.BAD_REQUEST).send({error: 'validation_failed'});
    }
  });

  app.delete('/socialMedia/:id', (req, res, next) => {
    sequelizeUtils.delete(SocialMedia, req, res, next);
  });
};

function validate(socialMedium) {
  return validator.isValid([
    validator.required(socialMedium.url),
    validator.socialMedium(socialMedium.url)
  ]);
}
