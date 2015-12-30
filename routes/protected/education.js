'use strict';

module.exports = (app, models, validator, sequelizeUtils, HttpStatus) => {
  const Education = models.Education;

  app.get('/education/:id', (req, res, next) => {
    sequelizeUtils.findById(Education, req, res, next);
  });
};
