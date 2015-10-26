'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const Education = models.Education;

  app.get('/education/:id', (req, res, next) => {
    sequelizeUtils.findById(Education, req, res, next);
  });
};
