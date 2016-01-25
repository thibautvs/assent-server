'use strict';

const _ = require('lodash');

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const Preparation = models.Preparation;

  app.get('/preparations/:id', (req, res, next) => {
    sequelizeUtils.findById(Preparation, req, res, next);
  });

  app.post('/preparations', (req, res, next) => {
    let preparation = req.body.preparation;
    let isValid = validate(preparation);
    if (isValid) {
      let values = {
        topic: _.capitalize(preparation.topic),
        description: _.capitalize(preparation.description),
        position: preparation.position,
        student_profile_id: preparation.studentProfile
      };
      sequelizeUtils.create(Preparation, values, res, next);
    } else {
      httpResponseUtils.validationFailed(res);
    }
  });

  app.put('/preparations/:id', (req, res, next) => {
    let preparation = req.body.preparation;
    let isValid = validate(preparation);
    if (isValid) {
      let values = {
        topic: _.capitalize(preparation.topic),
        description: _.capitalize(preparation.description),
        position: preparation.position,
      };
      sequelizeUtils.update(Preparation, values, req, res, next);
    } else {
      httpResponseUtils.validationFailed(res);
    }
  });

  app.delete('/preparations/:id', (req, res, next) => {
    sequelizeUtils.delete(Preparation, req, res, next);
  });

  function validate(preparation) {
    return validator.isValid([
      validator.required(preparation.topic),
      validator.required(preparation.description)
    ]);
  }
};
