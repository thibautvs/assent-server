'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const Study = models.Study;

  app.get('/studies', (req, res, next) => {
    sequelizeUtils.findAll(Study, res, next);
  });

  app.get('/studies/:id', (req, res, next) => {
    sequelizeUtils.findById(Study, req, res, next);
  });

  app.post('/studies', (req, res, next) => {
    sequelizeUtils.findCaseInsensitiveOrCreate(Study, {name: req.body.study.name}, res, next);
  });
};
