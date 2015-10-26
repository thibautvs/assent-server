'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const Media = models.Media;

  app.get('/media/:id', (req, res, next) => {
    sequelizeUtils.findById(Media, req, res, next);
  });
};
