'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const Faculty = models.Faculty;

  app.get('/faculties', (req, res, next) => {
    sequelizeUtils.findAll(Faculty, res, next);
  });
};
