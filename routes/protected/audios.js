'use strict';

module.exports = (app, models, validator, sequelizeUtils, HttpStatus) => {
  const Audio = models.Audio;

  app.get('/audios/:id', (req, res, next) => {
    sequelizeUtils.findById(Audio, req, res, next);
  });

  app.post('/audios', (req, res, next) => {
    let audio = req.body.audio;
    let isValid = validate(audio.url);

    if (isValid) {
      let values = {
        url: audio.url,
        position: audio.position,
        student_profile_id: audio.studentProfile
      };
      sequelizeUtils.createIfNotExists(Audio, {where: {url: audio.url}}, values, res, next);
    } else {
      res.status(HttpStatus.BAD_REQUEST).send({error: 'validation_failed'});
    }
  });

  app.delete('/audios/:id', (req, res, next) => {
    sequelizeUtils.delete(Audio, req, res, next);
  });

  function validate(audioUrl) {
    return validator.isValid([
      validator.audio(audioUrl)
    ]);
  }
};
