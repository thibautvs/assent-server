'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const Course = models.Course;

  app.get('/courses', (req, res, next) => {
    sequelizeUtils.findAll(Course, res, next);
  });
};
