'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const Faculty = models.Faculty;

  app.get('/faculties', (req, res, next) => {
    sequelizeUtils.findAll(Faculty, res, next);
  });

  app.get('/faculties/:id', (req, res, next) => {
    sequelizeUtils.findById(Faculty, req, res, next);
  });

  app.post('/faculties', (req, res, next) => {
    sequelizeUtils.findCaseInsensitiveOrCreate(Faculty, {name: req.body.faculty.name}, res, next);
  });
};
