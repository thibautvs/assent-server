'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const MediaType = models.MediaType;

  app.get('/mediaTypes', (req, res, next) => {
    sequelizeUtils.findAll(MediaType, res, next);
  });

  app.get('/mediaTypes/:id', (req, res, next) => {
    sequelizeUtils.findById(MediaType, req, res, next);
  });
};
