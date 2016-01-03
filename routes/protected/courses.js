'use strict';

module.exports = (app, models, validator, sequelizeUtils, httpResponseUtils) => {
  const Course = models.Course;

  app.get('/courses', (req, res, next) => {
    sequelizeUtils.findAll(Course, res, next);
  });

  app.get('/courses/:id', (req, res, next) => {
    sequelizeUtils.findById(Course, req, res, next);
  });
};
