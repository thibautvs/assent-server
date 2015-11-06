'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const SocialMedia = models.SocialMedia;

  app.get('/socialMedia/:id', (req, res, next) => {
    sequelizeUtils.findById(SocialMedia, req, res, next);
  });
};
