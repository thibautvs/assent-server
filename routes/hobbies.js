'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const Hobby = models.Hobby;

  app.get('/hobbies', (req, res, next) => {
    sequelizeUtils.findAll(Hobby, res, next);
  });
};
