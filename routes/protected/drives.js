'use strict';

module.exports = (app, models, validator, sequelizeUtils, HttpStatus) => {
  const Drive = models.Drive;

  app.get('/drives/:id', (req, res, next) => {
    sequelizeUtils.findById(Drive, req, res, next);
  });

  app.post('/drives', (req, res, next) => {
    let drive = req.body.drive;
    let isValid = validate(drive);
    if (isValid) {
      let values = {
        factor: drive.factor,
        description: drive.description,
        position: drive.position,
        student_profile_id: drive.studentProfile
      };
      sequelizeUtils.create(Drive, values, res, next);
    } else {
      res.status(HttpStatus.BAD_REQUEST).send({error: 'validation_failed'});
    }
  });

  app.put('/drives/:id', (req, res, next) => {
    let drive = req.body.drive;
    let isValid = validate(drive);
    if (isValid) {
      let values = {
        factor: drive.factor,
        description: drive.description,
        position: drive.position,
      };
      sequelizeUtils.update(Drive, values, req, res, next);
    } else {
      res.status(HttpStatus.BAD_REQUEST).send({error: 'validation_failed'});
    }
  });

  app.delete('/drives/:id', (req, res, next) => {
    sequelizeUtils.delete(Drive, req, res, next);
  });

  function validate(drive) {
    return validator.isValid([
      validator.required(drive.factor),
      validator.required(drive.description)
    ]);
  }
};
