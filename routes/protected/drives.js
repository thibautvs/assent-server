'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const Drive = models.Drive;

  app.get('/drives/:id', (req, res, next) => {
    sequelizeUtils.findById(Drive, req, res, next);
  });

  app.delete('/drives/:id', (req, res, next) => {
    sequelizeUtils.delete(Drive, req, res, next);
  });
};
