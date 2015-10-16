'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const Language = models.Language;

  app.get('/languages', (req, res, next) => {
    sequelizeUtils.findAll(Language, res, next);
  });
};
